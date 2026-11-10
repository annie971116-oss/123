import { GAME_CONFIG } from './config.js?v=2.4';
import { questionManager } from './data/questions.js?v=2.4';
import { AudioSystem } from './core/AudioSystem.js?v=2.4';
import { GameLoop } from './core/GameLoop.js?v=2.4';
import { RoomManager } from './systems/RoomManager.js?v=2.4';
import { AISystem } from './systems/AISystem.js?v=2.4';
import { Player } from './entities/Player.js?v=2.4';
import { Board } from './entities/Board.js?v=2.4';
import { HUD } from './ui/HUD.js?v=2.4';
import { QuizModal } from './ui/QuizModal.js?v=2.4';
import { Menu } from './ui/Menu.js?v=2.4';

/**
 * 貓狗大戰：常識地盤爭奪戰 - 主控制器 (Main Application Controller)
 * 支援三種模式：
 * 1. 🤖 電腦對抗模式 (AI)
 * 2. 🌐 雙人線上連線對戰 (Online P2P 即時同步)
 * 3. 👥 雙人同機輪流對戰 (Hotseat 免連線)
 */
class GameApp {
  constructor() {
    this.audio = new AudioSystem();
    this.roomManager = new RoomManager();
    this.quizModal = new QuizModal(this.audio);

    this.hud = new HUD({
      onItemClick: (itemType) => this.handleItemUse(itemType),
    });

    this.boardEl = document.getElementById('game-board');
    this.board = new Board(this.boardEl);

    this.player1 = null;
    this.player2 = null;
    this.currentTurnFaction = 'cat';
    this.gameMode = 'ai'; // 'ai' | 'online' | 'hotseat'
    this.aiDifficulty = 'normal'; // 'easy' | 'normal' | 'hard'
    this.isHost = true;
    this.myFaction = 'cat';

    this.aiSystem = null;
    this.isAnsweringQuiz = false;
    this.isGameOver = false;

    // 遊戲 5 分鐘計時循環
    this.gameLoop = new GameLoop({
      onTick: (secs) => {
        this.hud.updateTimer(secs);
        this.tickInteractiveEvents(secs);
      },
      onTimeUp: () => this.handleTimeUp(),
      onUpdate: () => {},
      onRender: () => {},
    });

    // 主選單
    this.menu = new Menu({
      audioSystem: this.audio,
      roomManager: this.roomManager,
      onStartGame: (settings) => this.startGame(settings),
    });
  }

  init() {
    this.menu.showMenu();
  }

  /**
   * 啟動新戰局
   */
  startGame({ mode, aiDifficulty = 'normal', avatar, roomCode, isHost = true }) {
    this.gameMode = mode;
    this.aiDifficulty = aiDifficulty;
    this.isHost = isHost;
    this.isGameOver = false;
    this.isAnsweringQuiz = false;

    // 重置單局題目記錄 (跨局歷史記憶自動保留)
    questionManager.resetSession();

    if (this.gameMode === 'online') {
      this.setupOnlineGame({ avatar, isHost, roomCode });
    } else {
      this.setupLocalGame({ avatar });
    }
  }

  /**
   * 本地模式配置 (AI模式 或 同機模式)
   */
  setupLocalGame({ avatar }) {
    const p1Faction = avatar; // 'cat' 或 'dog'
    const p2Faction = avatar === 'cat' ? 'dog' : 'cat';

    this.player1 = new Player(p1Faction);
    this.player2 = new Player(p2Faction);
    this.myFaction = p1Faction;
    this.currentTurnFaction = p1Faction;

    // HUD 初始化
    this.hud.setupPlayers(this.player1, this.player2);
    this.hud.updateTurnBadge(this.currentTurnFaction, this.gameMode, this.myFaction);

    // 生成並渲染全新異構地盤
    this.board.generate();
    this.renderBoard();

    // 啟動 5 分鐘計時器
    this.gameLoop.start(GAME_CONFIG.MATCH_DURATION_SECONDS);

    // AI 對手配置
    if (this.gameMode === 'ai') {
      this.aiSystem = new AISystem(
        this.board,
        this.player2,
        (targetTile, isCorrect) => this.handleAIMove(targetTile, isCorrect),
        this.aiDifficulty,
        (itemType, targetTile) => this.handleAIUseItem(itemType, targetTile)
      );
      this.aiSystem.start();
    } else {
      if (this.aiSystem) {
        this.aiSystem.stop();
        this.aiSystem = null;
      }
    }

    this.hud.showCombatBanner('🐾 戰局開打！點擊相鄰方格答題奪地，善用戰術攻擊道具克敵制勝！', 'info', 4000);
  }

  /**
   * 雙人線上 P2P 即時同步配置
   */
  setupOnlineGame({ avatar, isHost, roomCode }) {
    if (this.aiSystem) {
      this.aiSystem.stop();
      this.aiSystem = null;
    }

    // 配置網絡訊息回呼
    this.roomManager.onMessageCallback = (msg) => this.handleNetworkMessage(msg);
    this.roomManager.onDisconnectedCallback = () => {
      this.hud.showCombatBanner('⚠️ 對手已斷開連線！', 'bomb', 6000);
    };

    if (isHost) {
      // 房主：設定自身形象為 Player 1，對手為相反形象
      const p1Faction = avatar;
      const p2Faction = avatar === 'cat' ? 'dog' : 'cat';

      this.player1 = new Player(p1Faction);
      this.player2 = new Player(p2Faction);
      this.myFaction = p1Faction;
      this.currentTurnFaction = p1Faction;

      // 房主生成棋盤
      this.board.generate();

      // 廣播同步棋盤與玩家配置給訪客
      this.roomManager.send({
        type: 'GAME_SYNC_START',
        tiles: this.board.exportTiles(),
        hostFaction: p1Faction,
        guestFaction: p2Faction,
        currentTurn: this.currentTurnFaction,
      });

      this.hud.setupPlayers(this.player1, this.player2);
      this.hud.updateTurnBadge(this.currentTurnFaction, this.gameMode, this.myFaction);
      this.renderBoard();
      this.gameLoop.start(GAME_CONFIG.MATCH_DURATION_SECONDS);

      this.hud.showCombatBanner('🟢 線上對戰連線成功！你是房主，由你率先行動！', 'golden', 4000);
    } else {
      // 訪客：設定自身為相反形象，等待房主廣播棋盤數據
      const p2Faction = avatar;
      const p1Faction = avatar === 'cat' ? 'dog' : 'cat';

      this.player1 = new Player(p1Faction);
      this.player2 = new Player(p2Faction);
      this.myFaction = p2Faction;
      this.currentTurnFaction = p1Faction;

      this.hud.setupPlayers(this.player1, this.player2);
      this.hud.updateTurnBadge(this.currentTurnFaction, this.gameMode, this.myFaction);
      this.hud.showCombatBanner('🟢 線上連線成功！正在同步房主棋盤，請稍候...', 'info', 4000);

      // 發送請求房主重播開局數據 (防先後順序差異)
      this.roomManager.send({ type: 'REQUEST_SYNC_START' });
    }
  }

  /**
   * 處理線上網絡同步訊息
   */
  handleNetworkMessage(msg) {
    if (this.isGameOver) return;

    switch (msg.type) {
      case 'REQUEST_SYNC_START': {
        // 房主收到訪客請求，重播棋盤結構
        if (this.isHost) {
          this.roomManager.send({
            type: 'GAME_SYNC_START',
            tiles: this.board.exportTiles(),
            hostFaction: this.player1.factionId,
            guestFaction: this.player2.factionId,
            currentTurn: this.currentTurnFaction,
          });
        }
        break;
      }

      case 'GAME_SYNC_START': {
        // 訪客收到房主棋盤與玩家資料
        if (!this.isHost) {
          this.player1 = new Player(msg.hostFaction);
          this.player2 = new Player(msg.guestFaction);
          this.myFaction = msg.guestFaction;
          this.currentTurnFaction = msg.currentTurn || msg.hostFaction;

          this.board.importTiles(msg.tiles);
          this.hud.setupPlayers(this.player1, this.player2);
          this.hud.updateTurnBadge(this.currentTurnFaction, this.gameMode, this.myFaction);
          this.renderBoard();

          this.hud.showCombatBanner('🐾 棋盤同步完成！線上即時對戰正式開始！', 'golden', 3500);
        }
        break;
      }

      case 'REMOTE_TILE_START': {
        this.hud.showCombatBanner(`👀 對手正在搶奪地盤中...`, 'info', 2500);
        break;
      }

      case 'REMOTE_TILE_RESULT': {
        // 接收對手答題戰果並同步
        this.applyRemoteTileResult(msg);
        break;
      }

      case 'REMOTE_ITEM_USED': {
        // 接收對手發動戰術技能
        this.applyRemoteItemUsed(msg);
        break;
      }

      case 'SYNC_TIMER': {
        // 訪客同步房主計時器與黃金地盤
        if (!this.isHost) {
          this.hud.updateTimer(msg.seconds);

          if (msg.goldenTileId) {
            const tile = this.board.tiles.find((t) => t.id === msg.goldenTileId);
            if (tile && !tile.isGoldenFlash) {
              tile.setGoldenFlash(msg.goldenTimeLeft || 20);
              this.renderBoard();
            }
          } else {
            this.board.clearGoldenFlash();
            this.renderBoard();
          }

          if (this.player1 && this.player2) {
            this.hud.updateStatuses(this.player1, this.player2);
          }
        }
        break;
      }

      case 'REMOTE_TIME_UP': {
        this.handleTimeUp();
        break;
      }
    }
  }

  /**
   * 應用線上對手的答題奪地戰果
   */
  applyRemoteTileResult(msg) {
    const tile = this.board.tiles.find((t) => t.id === msg.tileId);
    if (!tile) return;

    const actingPlayer = msg.factionId === this.player1.factionId ? this.player1 : this.player2;
    const opponentPlayer = actingPlayer === this.player1 ? this.player2 : this.player1;

    if (msg.correct) {
      this.audio.playClaimTerritory();

      if (tile.owner === opponentPlayer.factionId) {
        opponentPlayer.loseTile(tile);
      }

      if (msg.isGolden) {
        tile.clearGoldenFlash();
        actingPlayer.addScore(tile.score * 2);
        tile.owner = actingPlayer.factionId;
        actingPlayer.claimedTileIds.add(tile.id);
        actingPlayer.addItem('bomb');
      } else {
        actingPlayer.claimTile(tile);
        tile.owner = actingPlayer.factionId;
      }

      if (tile.difficulty < 5) tile.difficulty += 1;
      actingPlayer.addCombo();
    } else {
      this.audio.playWrong();
      if (actingPlayer.isShielded()) {
        actingPlayer.consumeShield();
      } else {
        const penalty = Math.max(
          GAME_CONFIG.MIN_WRONG_PENALTY,
          Math.round(tile.score * GAME_CONFIG.WRONG_PENALTY_RATIO)
        );
        actingPlayer.deductScore(penalty);
        tile.setCooldown(actingPlayer.factionId, GAME_CONFIG.TILE_COOLDOWN_SECONDS);
      }
      actingPlayer.resetCombo();
    }

    // 輪替行動權
    this.currentTurnFaction = this.currentTurnFaction === 'cat' ? 'dog' : 'cat';
    this.hud.updateStats(this.player1, this.player2);
    this.hud.updateTurnBadge(this.currentTurnFaction, this.gameMode, this.myFaction);
    this.renderBoard();
  }

  /**
   * 應用線上對手施放的戰術道具
   */
  applyRemoteItemUsed(msg) {
    const senderPlayer = msg.senderFaction === this.player1.factionId ? this.player1 : this.player2;
    const targetPlayer = senderPlayer === this.player1 ? this.player2 : this.player1;

    if (msg.itemType === 'freeze') {
      if (targetPlayer.isShielded()) {
        targetPlayer.consumeShield();
        this.audio.playShield();
        this.hud.showCombatBanner('🛡️ 你的金鐘護盾擋下了對手的定身術！', 'info', 3000);
      } else {
        targetPlayer.freeze(10);
        this.audio.playFreeze();
        this.hud.showCombatBanner('⚠️ 對手發動了【❄️ 定身術】！你被急凍 10 秒無法行動！', 'freeze', 4000);
      }
    } else if (msg.itemType === 'bomb') {
      const tile = this.board.tiles.find((t) => t.id === msg.targetTileId);
      if (tile && targetPlayer.isShielded()) {
        targetPlayer.consumeShield();
        this.audio.playShield();
        this.hud.showCombatBanner('🛡️ 你的金鐘護盾擋下了對手的肉球轟炸！', 'info', 3000);
      } else if (tile) {
        targetPlayer.loseTile(tile);
        this.board.neutralizeTile(tile);
        this.audio.playBomb();
        this.hud.showCombatBanner(
          `⚠️ 轟！對手發動【💣 肉球轟炸】，炸毀了你的【${tile.score}分】地盤！`,
          'bomb',
          4000
        );
      }
    } else if (msg.itemType === 'shield') {
      senderPlayer.shield(25);
      this.audio.playShield();
      this.hud.showCombatBanner(`🛡️ 對手啟動了【金鐘護盾】保護！`, 'info', 3000);
    }

    this.hud.updateStats(this.player1, this.player2);
    this.renderBoard();
  }

  renderBoard() {
    this.board.render(this.currentTurnFaction, (clickedTile) => {
      this.handleTileClick(clickedTile);
    });
  }

  /**
   * 互動遊戲時鐘滴答事件 (每秒檢查限時黃金格與同步)
   */
  tickInteractiveEvents(remainingSeconds) {
    if (this.isGameOver) return;

    // 線上模式訪客不重複驅動時鐘，由房主主導廣播同步
    if (this.gameMode === 'online' && !this.isHost) return;

    // 1. 每 60 秒召喚「限時黃金寶藏搶答地盤」
    if ([250, 190, 130, 70].includes(remainingSeconds)) {
      const spawned = this.board.spawnGoldenFlash(20);
      if (spawned) {
        this.audio.playAlert();
        this.hud.showCombatBanner(
          '🚨 突發事件！【🌟 限時黃金寶藏地盤】降臨！限時 20 秒搶答，享雙倍積分 + 掉落戰術道具！',
          'golden',
          5000
        );
        this.renderBoard();
      }
    }

    // 2. 限時黃金地盤倒數倒扣
    const goldenTile = this.board.getGoldenTile();
    if (goldenTile) {
      const expired = this.board.tickGoldenFlash();
      if (expired) {
        this.hud.showCombatBanner('⌛ 限時黃金地盤挑戰已結束，恢復為普通地盤！', 'info', 3000);
      }
      this.renderBoard();
    }

    // 3. 房主在線上模式時每秒向訪客廣播同步時鐘
    if (this.gameMode === 'online' && this.isHost) {
      this.roomManager.send({
        type: 'SYNC_TIMER',
        seconds: remainingSeconds,
        goldenTileId: goldenTile?.id || null,
        goldenTimeLeft: goldenTile?.goldenTimeLeft || 0,
      });
    }

    // 4. 更新玩家狀態與 HUD 顯示
    if (this.player1 && this.player2) {
      this.hud.updateStatuses(this.player1, this.player2);
    }
  }

  /**
   * 玩家點擊地盤發起奪地行動
   */
  async handleTileClick(tile) {
    if (this.isGameOver || this.isAnsweringQuiz) return;

    // 線上對戰模式下，檢查是否輪到自己行動
    if (this.gameMode === 'online') {
      if (this.currentTurnFaction !== this.myFaction) {
        this.hud.showCombatBanner('⏳ 現在是對手的回合，請等待對手行動！', 'info', 2000);
        return;
      }
    }

    const actingPlayer = this.currentTurnFaction === this.player1.factionId ? this.player1 : this.player2;
    const opponentPlayer = actingPlayer === this.player1 ? this.player2 : this.player1;

    // 檢查玩家是否正處於被冰凍狀態
    if (actingPlayer.isFrozen()) {
      const remainingSec = actingPlayer.getFrozenSecondsRemaining();
      this.hud.showCombatBanner(`🧊 你正處於冰凍定身狀態中！請等待 ${remainingSec} 秒解凍！`, 'freeze', 2000);
      return;
    }

    this.isAnsweringQuiz = true;
    if (this.aiSystem) this.aiSystem.pause();

    const isGolden = tile.isGoldenFlash;

    // 若為線上對戰，廣播通知對手自己正在作答中
    if (this.gameMode === 'online') {
      this.roomManager.send({ type: 'REMOTE_TILE_START', tileId: tile.id });
    }

    // 抽取不重複常識題並進行動態選項混淆
    const question = questionManager.getUniqueQuestion(tile.difficulty);

    // 開啟常識四選一彈窗作答
    const result = await this.quizModal.askQuestion(question, tile, actingPlayer.factionId);

    if (result.correct) {
      this.audio.playClaimTerritory();

      if (tile.owner === opponentPlayer.factionId) {
        opponentPlayer.loseTile(tile);
      }

      if (isGolden) {
        tile.clearGoldenFlash();
        const doubleScore = tile.score * 2;
        actingPlayer.addScore(doubleScore);
        tile.owner = actingPlayer.factionId;
        actingPlayer.claimedTileIds.add(tile.id);

        const itemPool = ['freeze', 'bomb', 'shield'];
        const droppedItem = itemPool[Math.floor(Math.random() * itemPool.length)];
        actingPlayer.addItem(droppedItem);

        const itemNames = { freeze: '❄️ 定身術', bomb: '💣 肉球轟炸', shield: '🛡️ 金鐘護盾' };
        this.audio.playItemGet();
        this.hud.showCombatBanner(
          `🎉 成功奪取黃金地盤！獲得雙倍 +${doubleScore} 分，並額外獲得道具【${itemNames[droppedItem]}】！`,
          'golden',
          4000
        );
      } else {
        actingPlayer.claimTile(tile);
        tile.owner = actingPlayer.factionId;
      }

      if (tile.difficulty < 5) tile.difficulty += 1;

      const combo = actingPlayer.addCombo();
      if (combo === 2) {
        actingPlayer.addItem('bomb');
        this.audio.playItemGet();
        this.hud.showCombatBanner('🔥 答對 2 連勝！獲得【💣 肉球轟炸】戰術道具！', 'info', 3000);
      } else if (combo === 3) {
        actingPlayer.activateFever(15);
        this.audio.playCombo();
        this.hud.showCombatBanner('🔥🔥🔥 3 連勝狂熱 (FEVER TIME)！15 秒內奪地積分額外 +50%！', 'golden', 4000);
      }
    } else {
      if (actingPlayer.isShielded()) {
        actingPlayer.consumeShield();
        this.audio.playShield();
        this.hud.showCombatBanner('🛡️ 金鐘護盾生效！成功抵擋本次答錯倒扣懲罰！', 'info', 3000);
      } else {
        const penalty = Math.max(
          GAME_CONFIG.MIN_WRONG_PENALTY,
          Math.round(tile.score * GAME_CONFIG.WRONG_PENALTY_RATIO)
        );
        actingPlayer.deductScore(penalty);
        tile.setCooldown(actingPlayer.factionId, GAME_CONFIG.TILE_COOLDOWN_SECONDS);
      }
      actingPlayer.resetCombo();
    }

    // 線上對抗同步給對方
    if (this.gameMode === 'online') {
      this.roomManager.send({
        type: 'REMOTE_TILE_RESULT',
        tileId: tile.id,
        correct: result.correct,
        isGolden: isGolden,
        factionId: actingPlayer.factionId,
      });
    }

    // 雙人模式（線上或同機）輪替行動權
    if (this.gameMode === 'online' || this.gameMode === 'hotseat') {
      this.currentTurnFaction = this.currentTurnFaction === 'cat' ? 'dog' : 'cat';
    }

    this.hud.updateStats(this.player1, this.player2);
    this.hud.updateTurnBadge(this.currentTurnFaction, this.gameMode, this.myFaction);

    this.isAnsweringQuiz = false;
    if (this.aiSystem && !this.isGameOver) this.aiSystem.resume();

    this.renderBoard();
  }

  /**
   * 玩家點擊使用戰術道具 (定身術、肉球轟炸、金牌護盾)
   */
  handleItemUse(itemType) {
    if (this.isGameOver) return;

    const actingPlayer = this.currentTurnFaction === this.player1.factionId ? this.player1 : this.player2;
    const opponentPlayer = actingPlayer === this.player1 ? this.player2 : this.player1;

    // 線上模式只能使用自己陣營的道具
    if (this.gameMode === 'online') {
      if (!this.player1 || !this.player2) return;
      const myPlayer = this.myFaction === this.player1.factionId ? this.player1 : this.player2;
      const remoteOpponent = myPlayer === this.player1 ? this.player2 : this.player1;

      if (myPlayer.isFrozen()) {
        this.hud.showCombatBanner('🧊 你當前正處於冰凍狀態，無法施放技能！', 'freeze', 2000);
        return;
      }
      if (!myPlayer.hasItem(itemType)) return;

      let targetTile = null;
      if (itemType === 'bomb') {
        targetTile = this.board.getHighestOpponentTile(remoteOpponent.factionId);
        if (!targetTile) {
          this.hud.showCombatBanner('⚠️ 對手尚未佔領任何地盤，無法進行轟炸！', 'info', 2500);
          return;
        }
      }

      // 發送至遠端並本地執行
      myPlayer.useItem(itemType);
      this.roomManager.send({
        type: 'REMOTE_ITEM_USED',
        itemType: itemType,
        senderFaction: this.myFaction,
        targetTileId: targetTile?.id || null,
      });

      if (itemType === 'freeze') {
        if (remoteOpponent.isShielded()) {
          remoteOpponent.consumeShield();
          this.audio.playShield();
          this.hud.showCombatBanner('🛡️ 對手身上具有金鐘護盾，抵擋了定身術！', 'info', 3000);
        } else {
          remoteOpponent.freeze(10);
          this.audio.playFreeze();
          this.hud.showCombatBanner('❄️ 定身術發動！對手被急凍 10 秒，動彈不得！', 'freeze', 3500);
        }
      } else if (itemType === 'bomb' && targetTile) {
        if (remoteOpponent.isShielded()) {
          remoteOpponent.consumeShield();
          this.audio.playShield();
          this.hud.showCombatBanner('🛡️ 對手的金鐘護盾擋下了肉球轟炸！', 'info', 3000);
        } else {
          remoteOpponent.loseTile(targetTile);
          this.board.neutralizeTile(targetTile);
          this.audio.playBomb();
          this.hud.showCombatBanner(
            `💣 肉球轟炸大命中！炸毀了對手【${targetTile.score}分】地盤！`,
            'bomb',
            4000
          );
        }
      } else if (itemType === 'shield') {
        myPlayer.shield(25);
        this.audio.playShield();
        this.hud.showCombatBanner('🛡️ 金鐘護盾啟動！25 秒內抵擋對手攻擊並免除下一次答錯倒扣！', 'info', 3500);
      }

      this.hud.updateStats(this.player1, this.player2);
      this.renderBoard();
      return;
    }

    // 本地模式 (AI 或 同機)
    if (actingPlayer.isFrozen()) {
      this.hud.showCombatBanner('🧊 當前正處於冰凍狀態，無法施放技能！', 'freeze', 2000);
      return;
    }

    if (!actingPlayer.hasItem(itemType)) return;

    if (itemType === 'freeze') {
      if (opponentPlayer.isShielded()) {
        opponentPlayer.consumeShield();
        actingPlayer.useItem('freeze');
        this.audio.playShield();
        this.hud.showCombatBanner('🛡️ 對手身上具有金鐘護盾，抵擋了定身術！', 'info', 3000);
      } else {
        opponentPlayer.freeze(10);
        actingPlayer.useItem('freeze');
        this.audio.playFreeze();
        this.hud.showCombatBanner('❄️ 定身術發動！對手被急凍 10 秒，動彈不得！', 'freeze', 3500);
      }
    } else if (itemType === 'bomb') {
      const targetTile = this.board.getHighestOpponentTile(opponentPlayer.factionId);
      if (!targetTile) {
        this.hud.showCombatBanner('⚠️ 對手尚未佔領任何地盤，無法進行轟炸！', 'info', 2500);
        return;
      }

      if (opponentPlayer.isShielded()) {
        opponentPlayer.consumeShield();
        actingPlayer.useItem('bomb');
        this.audio.playShield();
        this.hud.showCombatBanner('🛡️ 對手的金鐘護盾成功擋下了你的肉球轟炸！', 'info', 3000);
      } else {
        opponentPlayer.loseTile(targetTile);
        this.board.neutralizeTile(targetTile);
        actingPlayer.useItem('bomb');
        this.audio.playBomb();
        this.hud.showCombatBanner(
          `💣 肉球轟炸大命中！炸毀了對手【${targetTile.score}分】地盤！`,
          'bomb',
          4000
        );
      }
    } else if (itemType === 'shield') {
      actingPlayer.shield(25);
      actingPlayer.useItem('shield');
      this.audio.playShield();
      this.hud.showCombatBanner('🛡️ 金鐘護盾啟動！25 秒內抵擋對手攻擊並免除下一次答錯倒扣！', 'info', 3500);
    }

    this.hud.updateStats(this.player1, this.player2);
    this.renderBoard();
  }

  /**
   * AI 電腦對手發動戰術技能回呼
   */
  handleAIUseItem(itemType, targetTile) {
    if (this.isGameOver) return;

    const humanPlayer = this.player1;

    if (itemType === 'freeze') {
      if (humanPlayer.isShielded()) {
        humanPlayer.consumeShield();
        this.audio.playShield();
        this.hud.showCombatBanner('🛡️ 你的金鐘護盾成功抵擋了對手的定身術！', 'info', 3000);
      } else {
        humanPlayer.freeze(10);
        this.audio.playFreeze();
        this.hud.showCombatBanner('⚠️ 糟糕！對手發動了【❄️ 定身術】，你被急凍 10 秒無法搶地！', 'freeze', 4000);
      }
    } else if (itemType === 'bomb' && targetTile) {
      if (humanPlayer.isShielded()) {
        humanPlayer.consumeShield();
        this.audio.playShield();
        this.hud.showCombatBanner('🛡️ 你的金鐘護盾抵擋了對手的肉球轟炸！', 'info', 3000);
      } else {
        humanPlayer.loseTile(targetTile);
        this.board.neutralizeTile(targetTile);
        this.audio.playBomb();
        this.hud.showCombatBanner(
          `⚠️ 轟！對手發動【💣 肉球轟炸】，你痛失了【${targetTile.score}分】地盤！`,
          'bomb',
          4500
        );
      }
    }

    this.hud.updateStats(this.player1, this.player2);
    this.renderBoard();
  }

  /**
   * 電腦 AI 行動決策回呼
   */
  handleAIMove(targetTile, isCorrect) {
    if (this.isGameOver) return;

    const aiPlayer = this.player2;
    const humanPlayer = this.player1;
    const isGolden = targetTile.isGoldenFlash;

    if (isCorrect) {
      if (targetTile.owner === humanPlayer.factionId) {
        humanPlayer.loseTile(targetTile);
      }

      if (isGolden) {
        targetTile.clearGoldenFlash();
        const doubleScore = targetTile.score * 2;
        aiPlayer.addScore(doubleScore);
        targetTile.owner = aiPlayer.factionId;
        aiPlayer.claimedTileIds.add(targetTile.id);
        aiPlayer.addItem('bomb');
        this.hud.showCombatBanner(`⚠️ 對手搶下了【🌟 限時黃金地盤】，獲得雙倍分數！`, 'golden', 3000);
      } else {
        aiPlayer.claimTile(targetTile);
        targetTile.owner = aiPlayer.factionId;
      }

      if (targetTile.difficulty < 5) {
        targetTile.difficulty += 1;
      }
    } else {
      const penalty = Math.max(
        GAME_CONFIG.MIN_WRONG_PENALTY,
        Math.round(targetTile.score * GAME_CONFIG.WRONG_PENALTY_RATIO)
      );
      aiPlayer.deductScore(penalty);
      targetTile.setCooldown(aiPlayer.factionId, GAME_CONFIG.TILE_COOLDOWN_SECONDS);
    }

    this.hud.updateStats(this.player1, this.player2);
    this.renderBoard();
  }

  /**
   * 5 分鐘計時結束結算
   */
  handleTimeUp() {
    this.isGameOver = true;
    if (this.aiSystem) this.aiSystem.stop();
    this.gameLoop.stop();
    this.audio.stopBGM();

    if (this.gameMode === 'online' && this.isHost) {
      this.roomManager.send({ type: 'REMOTE_TIME_UP' });
    }

    // 結算勝負 (1. 分數高者勝 ➔ 2. 地盤數多者勝 ➔ 3. 平手)
    this.menu.showGameOver({
      p1: this.player1,
      p2: this.player2,
      p1IsCat: this.player1.factionId === 'cat',
    });
  }
}

// 監聽 DOMContentLoaded 啟動遊戲
window.addEventListener('DOMContentLoaded', () => {
  const app = new GameApp();
  app.init();
  window.__CAT_DOG_GAME__ = app;
});

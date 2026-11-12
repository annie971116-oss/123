import { GAME_CONFIG } from './config.js?v=2.6';
import { questionManager } from './data/questions.js?v=2.6';
import { AudioSystem } from './core/AudioSystem.js?v=2.6';
import { GameLoop } from './core/GameLoop.js?v=2.6';
import { RoomManager } from './systems/RoomManager.js?v=2.6';
import { AISystem } from './systems/AISystem.js?v=2.6';
import { Player } from './entities/Player.js?v=2.6';
import { Board } from './entities/Board.js?v=2.6';
import { HUD } from './ui/HUD.js?v=2.6';
import { QuizModal } from './ui/QuizModal.js?v=2.6';
import { Menu } from './ui/Menu.js?v=2.6';

/**
 * 貓狗大戰：常識地盤爭奪戰 - 主控制器 (Main Application Controller)
 * 支援雙人「同時即時搶地盤」(Simultaneous Real-Time Territory War)
 * 雙方無需輪流等待，在 5 分鐘內同時全力往四面八方擴張與施放戰術技能！
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

    // 玩家陣營實體
    this.myPlayer = null;
    this.opponentPlayer = null;
    this.players = {};

    this.player1 = null; // 向下相容
    this.player2 = null;

    this.currentTurnFaction = 'cat';
    this.gameMode = 'ai'; // 'ai' | 'online' | 'hotseat'
    this.aiDifficulty = 'normal'; // 'easy' | 'normal' | 'hard'
    this.isHost = true;
    this.myFaction = 'cat';
    this.opponentFaction = 'dog';

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

    // 綁定線上即時對戰網路回調
    this.roomManager.onMessageCallback = (msg) => this.handleNetworkMessage(msg);
    this.roomManager.onDisconnectedCallback = () => {
      this.hud.showCombatBanner('⚠️ 對手已中斷連線！', 'bomb', 6000);
    };
  }

  init() {
    this.menu.showMenu();
    this.initQuitModal();
  }

  /**
   * 初始化「回到主畫面」按鈕與二次確認彈窗
   */
  initQuitModal() {
    const btnQuitGame = document.getElementById('btn-quit-game');
    const quitModal = document.getElementById('quit-modal');
    const btnCancelQuit = document.getElementById('btn-cancel-quit');
    const btnConfirmQuit = document.getElementById('btn-confirm-quit');

    if (btnQuitGame && quitModal) {
      btnQuitGame.addEventListener('click', () => {
        this.audio.playClick();
        quitModal.classList.remove('hidden');
      });
    }

    if (btnCancelQuit && quitModal) {
      btnCancelQuit.addEventListener('click', () => {
        this.audio.playClick();
        quitModal.classList.add('hidden');
      });
    }

    if (btnConfirmQuit && quitModal) {
      btnConfirmQuit.addEventListener('click', () => {
        this.audio.playClick();
        quitModal.classList.add('hidden');
        this.quitToMainMenu();
      });
    }
  }

  /**
   * 放棄本局對戰直接回到主選單
   */
  quitToMainMenu() {
    this.isGameOver = true;
    this.isAnsweringQuiz = false;

    this.gameLoop.stop();
    if (this.aiSystem) {
      this.aiSystem.stop();
      this.aiSystem = null;
    }

    this.quizModal.close();
    this.audio.stopBGM();

    if (this.gameMode === 'online') {
      try {
        this.roomManager.send({
          type: 'REMOTE_SURRENDER',
          senderFaction: this.myFaction,
        });
      } catch (e) {}
      this.roomManager.cleanup();
    }

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
      this.setupOnlineGame({ avatar, isHost });
    } else if (this.gameMode === 'hotseat') {
      this.setupHotseatGame({ avatar });
    } else {
      this.setupAIGame({ avatar });
    }
  }

  /**
   * 單人電腦對抗模式配置 (玩家與電腦同時即時搶地)
   */
  setupAIGame({ avatar }) {
    this.myFaction = avatar; // 'cat' 或 'dog'
    this.opponentFaction = avatar === 'cat' ? 'dog' : 'cat';

    this.myPlayer = new Player(this.myFaction);
    this.opponentPlayer = new Player(this.opponentFaction);
    this.players = {
      [this.myFaction]: this.myPlayer,
      [this.opponentFaction]: this.opponentPlayer,
    };
    this.player1 = this.myPlayer;
    this.player2 = this.opponentPlayer;
    this.currentTurnFaction = this.myFaction;

    this.hud.setupPlayers(this.myPlayer, this.opponentPlayer);
    this.hud.updateTurnBadge(this.currentTurnFaction, this.gameMode, this.myFaction);

    this.board.generate();
    this.renderBoard();

    this.gameLoop.start(GAME_CONFIG.MATCH_DURATION_SECONDS);

    // AI 對手獨立背景計時器，同時進行搶地與戰術技能施放
    this.aiSystem = new AISystem(
      this.board,
      this.opponentPlayer,
      (targetTile, isCorrect) => this.handleAIMove(targetTile, isCorrect),
      this.aiDifficulty,
      (itemType, targetTile) => this.handleAIUseItem(itemType, targetTile)
    );
    this.aiSystem.start();

    this.hud.showCombatBanner('🐾 戰局開打！點擊相鄰綠框方格同時搶地，善用戰術道具克敵制勝！', 'info', 4000);
  }

  /**
   * 雙人同機輪流對抗模式 (同一裝置交替作答)
   */
  setupHotseatGame({ avatar }) {
    this.myFaction = avatar;
    this.opponentFaction = avatar === 'cat' ? 'dog' : 'cat';

    this.myPlayer = new Player(this.myFaction);
    this.opponentPlayer = new Player(this.opponentFaction);
    this.players = {
      [this.myFaction]: this.myPlayer,
      [this.opponentFaction]: this.opponentPlayer,
    };
    this.player1 = this.myPlayer;
    this.player2 = this.opponentPlayer;
    this.currentTurnFaction = this.myFaction;

    this.hud.setupPlayers(this.myPlayer, this.opponentPlayer);
    this.hud.updateTurnBadge(this.currentTurnFaction, this.gameMode, this.myFaction);

    this.board.generate();
    this.renderBoard();

    this.gameLoop.start(GAME_CONFIG.MATCH_DURATION_SECONDS);
    this.hud.showCombatBanner('👥 雙人同機模式！雙方輪流交替點擊相鄰地盤作答搶地！', 'info', 4000);
  }

  /**
   * 雙人線上 P2P 即時同步配置 (兩台裝置同時搶地，無須輪流！)
   */
  setupOnlineGame({ avatar, isHost }) {
    if (this.aiSystem) {
      this.aiSystem.stop();
      this.aiSystem = null;
    }

    this.isHost = isHost;
    this.myFaction = avatar;
    this.opponentFaction = avatar === 'cat' ? 'dog' : 'cat';

    this.myPlayer = new Player(this.myFaction);
    this.opponentPlayer = new Player(this.opponentFaction);
    this.players = {
      [this.myFaction]: this.myPlayer,
      [this.opponentFaction]: this.opponentPlayer,
    };
    this.player1 = this.myPlayer;
    this.player2 = this.opponentPlayer;

    this.roomManager.onMessageCallback = (msg) => this.handleNetworkMessage(msg);
    this.roomManager.onDisconnectedCallback = () => {
      this.hud.showCombatBanner('⚠️ 對手已中斷連線！', 'bomb', 6000);
    };

    if (isHost) {
      // 房主生成地盤結構
      this.board.generate();

      // 廣播初始棋盤結構至訪客端
      this.roomManager.send({
        type: 'GAME_SYNC_START',
        tiles: this.board.exportTiles(),
        hostFaction: this.myFaction,
        guestFaction: this.opponentFaction,
      });

      this.hud.setupPlayers(this.myPlayer, this.opponentPlayer);
      this.hud.updateTurnBadge(this.myFaction, this.gameMode, this.myFaction);
      this.renderBoard();
      this.gameLoop.start(GAME_CONFIG.MATCH_DURATION_SECONDS);

      this.hud.showCombatBanner('⚡ 雙人即時對戰開始！雙方「同時搶地」，看誰搶得快！', 'golden', 4000);
    } else {
      this.hud.setupPlayers(this.myPlayer, this.opponentPlayer);
      this.hud.updateTurnBadge(this.myFaction, this.gameMode, this.myFaction);
      this.hud.showCombatBanner('🟢 連線成功！正在同步棋盤，即刻同時開搶...', 'info', 3000);

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
        if (this.isHost) {
          this.roomManager.send({
            type: 'GAME_SYNC_START',
            tiles: this.board.exportTiles(),
            hostFaction: this.myFaction,
            guestFaction: this.opponentFaction,
          });
        }
        break;
      }

      case 'GAME_SYNC_START': {
        if (!this.isHost) {
          this.gameMode = 'online';
          this.isGameOver = false;
          this.isAnsweringQuiz = false;
          this.menu.hideMenu();
          this.audio.startBGM();

          // 訪客陣營分配
          this.myFaction = msg.guestFaction;
          this.opponentFaction = msg.hostFaction;

          this.myPlayer = new Player(this.myFaction);
          this.opponentPlayer = new Player(this.opponentFaction);
          this.players = {
            [this.myFaction]: this.myPlayer,
            [this.opponentFaction]: this.opponentPlayer,
          };
          this.player1 = this.myPlayer;
          this.player2 = this.opponentPlayer;

          this.board.importTiles(msg.tiles);
          this.hud.setupPlayers(this.myPlayer, this.opponentPlayer);
          this.hud.updateTurnBadge(this.myFaction, this.gameMode, this.myFaction);
          this.renderBoard();

          const factionName = this.myFaction === 'cat' ? '🐱 喵喵陣營' : '🐶 汪汪陣營';
          this.hud.showCombatBanner(`⚡ 棋盤同步完成！你是【${factionName}】，「同時搶地盤」全面開戰！`, 'golden', 4000);
        }
        break;
      }

      // 對手正在爭奪某格 (顯示搶奪鎖定特效，避免重疊點擊)
      case 'TILE_CONTEST_START': {
        const tile = this.board.tiles.find((t) => t.id === msg.tileId);
        if (tile) {
          tile.contestedBy = msg.factionId;
          this.renderBoard();
        }
        break;
      }

      // 對手完成作答 (更新地盤佔領與精確分數同步)
      case 'TILE_CLAIM_RESOLVED': {
        const tile = this.board.tiles.find((t) => t.id === msg.tileId);
        if (!tile) return;

        tile.contestedBy = null;
        const actor = this.players[msg.factionId];
        const victim = this.players[msg.factionId === 'cat' ? 'dog' : 'cat'];

        if (msg.correct) {
          this.audio.playClaimTerritory();
          tile.owner = msg.factionId;
          if (actor) actor.claimedTileIds.add(tile.id);
          if (victim) victim.claimedTileIds.delete(tile.id);

          if (msg.isGolden) {
            tile.clearGoldenFlash();
            this.hud.showCombatBanner(`⚠️ 對手搶下了【🌟 黃金寶藏地盤】，獲得雙倍分數！`, 'golden', 3000);
          }
          if (tile.difficulty < 5) tile.difficulty += 1;
        } else {
          tile.setCooldown(msg.factionId, GAME_CONFIG.TILE_COOLDOWN_SECONDS);
        }

        // 權威數值同步，徹底根治分數不同步問題
        if (typeof msg.actorScore === 'number' && actor) {
          actor.score = msg.actorScore;
        }
        if (typeof msg.victimScore === 'number' && victim) {
          victim.score = msg.victimScore;
        }
        if (typeof msg.actorCombo === 'number' && actor) {
          actor.combo = msg.actorCombo;
        }

        this.hud.updateStats(this.myPlayer, this.opponentPlayer);
        this.renderBoard();
        break;
      }

      // 接收對手施放戰術技能
      case 'REMOTE_ITEM_USED': {
        this.applyRemoteItemUsed(msg);
        break;
      }

      // 訪客端同步計時器與雙方分數
      case 'SYNC_TIMER': {
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

          // 同步對手 (房主) 分數
          if (typeof msg.hostScore === 'number') {
            this.opponentPlayer.score = msg.hostScore;
          }

          if (this.myPlayer && this.opponentPlayer) {
            this.hud.updateStats(this.myPlayer, this.opponentPlayer);
          }
        }
        break;
      }

      // 對手投降退出本局
      case 'REMOTE_SURRENDER': {
        this.isGameOver = true;
        this.gameLoop.stop();
        this.quizModal.close();
        this.audio.stopBGM();
        this.hud.showCombatBanner('🚪 對手已選擇退出遊戲並返回主畫面！本局對戰結束。', 'bomb', 5000);
        setTimeout(() => {
          this.menu.showMenu();
        }, 2500);
        break;
      }

      case 'REMOTE_TIME_UP': {
        this.handleTimeUp();
        break;
      }
    }
  }

  /**
   * 應用線上對手施放的戰術道具
   */
  applyRemoteItemUsed(msg) {
    const senderPlayer = this.players[msg.senderFaction];
    const targetPlayer = this.players[msg.senderFaction === 'cat' ? 'dog' : 'cat'];

    if (msg.itemType === 'freeze') {
      if (targetPlayer.isShielded()) {
        targetPlayer.consumeShield();
        this.audio.playShield();
        this.hud.showCombatBanner('🛡️ 你的金鐘護盾擋下了對手的定身術！', 'info', 3000);
      } else {
        targetPlayer.freeze(10);
        this.audio.playFreeze();
        this.hud.showCombatBanner('⚠️ 對手發動了【❄️ 定身術】！你被急凍 10 秒無法搶地！', 'freeze', 4000);
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

    this.hud.updateStats(this.myPlayer, this.opponentPlayer);
    this.renderBoard();
  }

  /**
   * 渲染棋盤：在雙人即時連線與電腦模式下，永遠高亮自身陣營可進攻之相鄰地盤！
   */
  renderBoard() {
    const activeFaction = this.gameMode === 'hotseat' ? this.currentTurnFaction : this.myFaction;
    this.board.render(activeFaction, (clickedTile) => {
      this.handleTileClick(clickedTile);
    });
  }

  /**
   * 互動遊戲時鐘滴答事件
   */
  tickInteractiveEvents(remainingSeconds) {
    if (this.isGameOver) return;

    if (this.gameMode === 'online' && !this.isHost) return;

    // 每 60 秒召喚「限時黃金寶藏搶答地盤」
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

    // 更新倒數中黃金地盤
    const goldenTile = this.board.getGoldenFlashTile();
    if (goldenTile) {
      goldenTile.goldenTimeLeft -= 1;
      if (goldenTile.goldenTimeLeft <= 0) {
        this.board.clearGoldenFlash();
        this.hud.showCombatBanner('⏳ 黃金寶藏地盤時限已過，恢復普通地盤！', 'info', 2500);
      }
      this.renderBoard();
    }

    // 房主在線上模式時每秒向訪客廣播同步時鐘與分數
    if (this.gameMode === 'online' && this.isHost) {
      this.roomManager.send({
        type: 'SYNC_TIMER',
        seconds: remainingSeconds,
        goldenTileId: goldenTile?.id || null,
        goldenTimeLeft: goldenTile?.goldenTimeLeft || 0,
        hostScore: this.myPlayer.score,
        guestScore: this.opponentPlayer.score,
      });
    }

    if (this.myPlayer && this.opponentPlayer) {
      this.hud.updateStatuses(this.myPlayer, this.opponentPlayer);
    }
  }

  /**
   * 玩家點擊地盤發起奪地行動（支援雙方同時搶地！）
   */
  async handleTileClick(tile) {
    if (this.isGameOver || this.isAnsweringQuiz) return;

    const actingPlayer = this.myPlayer;
    const opponentPlayer = this.opponentPlayer;

    // 檢查玩家是否正處於被冰凍狀態
    if (actingPlayer.isFrozen()) {
      const remainingSec = actingPlayer.getFrozenSecondsRemaining();
      this.hud.showCombatBanner(`🧊 你正處於冰凍定身狀態中！請等待 ${remainingSec} 秒解凍！`, 'freeze', 2000);
      return;
    }

    // 檢查該地盤是否已被對手搶先點擊正在作答爭奪中
    if (tile.contestedBy && tile.contestedBy !== this.myFaction) {
      this.hud.showCombatBanner('⚔️ 對手正在搶奪這塊地盤！快去進攻別塊！', 'info', 2000);
      return;
    }

    this.isAnsweringQuiz = true;
    tile.contestedBy = this.myFaction;

    // 若為線上模式，立即通知對手此地盤進入爭奪鎖定
    if (this.gameMode === 'online') {
      this.roomManager.send({
        type: 'TILE_CONTEST_START',
        tileId: tile.id,
        factionId: this.myFaction,
      });
    }

    const isGolden = tile.isGoldenFlash;
    const question = questionManager.getUniqueQuestion(tile.difficulty);

    // 彈出四選一常識作答彈窗
    const result = await this.quizModal.askQuestion(question, tile, actingPlayer.factionId);

    // 解除該格爭奪狀態
    tile.contestedBy = null;

    if (result.correct) {
      this.audio.playClaimTerritory();

      // 若該地盤已被對手佔領，先扣除對手該地盤分數與數量 (反奪機制)
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
          `🎉 成功搶下黃金地盤！獲得雙倍 +${doubleScore} 分，並額外獲得道具【${itemNames[droppedItem]}】！`,
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
      // 答錯處理
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

    // 線上對抗即時同步權威精確數值給對方
    if (this.gameMode === 'online') {
      this.roomManager.send({
        type: 'TILE_CLAIM_RESOLVED',
        tileId: tile.id,
        factionId: this.myFaction,
        correct: result.correct,
        isGolden: isGolden,
        actorScore: actingPlayer.score,
        actorTerritories: actingPlayer.getTerritoryCount(),
        actorCombo: actingPlayer.combo,
        victimScore: opponentPlayer.score,
        victimTerritories: opponentPlayer.getTerritoryCount(),
      });
    }

    // 同機模式下輪替行動
    if (this.gameMode === 'hotseat') {
      this.currentTurnFaction = this.currentTurnFaction === 'cat' ? 'dog' : 'cat';
      this.myFaction = this.currentTurnFaction;
    }

    this.hud.updateStats(this.myPlayer, this.opponentPlayer);
    this.hud.updateTurnBadge(this.myFaction, this.gameMode, this.myFaction);

    this.isAnsweringQuiz = false;
    this.renderBoard();
  }

  /**
   * 玩家點擊使用戰術道具 (定身術、肉球轟炸、金牌護盾)
   */
  handleItemUse(itemType) {
    if (this.isGameOver) return;

    const myPlayer = this.myPlayer;
    const opponentPlayer = this.opponentPlayer;

    if (myPlayer.isFrozen()) {
      this.hud.showCombatBanner('🧊 你當前正處於冰凍狀態，無法施放技能！', 'freeze', 2000);
      return;
    }

    if (!myPlayer.hasItem(itemType)) return;

    let targetTile = null;
    if (itemType === 'bomb') {
      targetTile = this.board.getHighestOpponentTile(opponentPlayer.factionId);
      if (!targetTile) {
        this.hud.showCombatBanner('⚠️ 對手尚未佔領任何地盤，無法進行轟炸！', 'info', 2500);
        return;
      }
    }

    myPlayer.useItem(itemType);

    // 線上模式廣播通知對手
    if (this.gameMode === 'online') {
      this.roomManager.send({
        type: 'REMOTE_ITEM_USED',
        itemType: itemType,
        senderFaction: this.myFaction,
        targetTileId: targetTile?.id || null,
      });
    }

    // 本地執行技能效果
    if (itemType === 'freeze') {
      if (opponentPlayer.isShielded()) {
        opponentPlayer.consumeShield();
        this.audio.playShield();
        this.hud.showCombatBanner('🛡️ 對手身上具有金鐘護盾，抵擋了定身術！', 'info', 3000);
      } else {
        opponentPlayer.freeze(10);
        this.audio.playFreeze();
        this.hud.showCombatBanner('❄️ 定身術發動！對手被急凍 10 秒，動彈不得！', 'freeze', 3500);
      }
    } else if (itemType === 'bomb' && targetTile) {
      if (opponentPlayer.isShielded()) {
        opponentPlayer.consumeShield();
        this.audio.playShield();
        this.hud.showCombatBanner('🛡️ 對手的金鐘護盾成功擋下了你的肉球轟炸！', 'info', 3000);
      } else {
        opponentPlayer.loseTile(targetTile);
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

    this.hud.updateStats(this.myPlayer, this.opponentPlayer);
    this.renderBoard();
  }

  /**
   * AI 電腦對手發動戰術技能回呼
   */
  handleAIUseItem(itemType, targetTile) {
    if (this.isGameOver) return;

    const humanPlayer = this.myPlayer;

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

    this.hud.updateStats(this.myPlayer, this.opponentPlayer);
    this.renderBoard();
  }

  /**
   * 電腦 AI 行動決策回呼
   */
  handleAIMove(targetTile, isCorrect) {
    if (this.isGameOver) return;

    const aiPlayer = this.opponentPlayer;
    const humanPlayer = this.myPlayer;
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

    this.hud.updateStats(this.myPlayer, this.opponentPlayer);
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
      p1: this.myPlayer,
      p2: this.opponentPlayer,
      p1IsCat: this.myPlayer.factionId === 'cat',
    });
  }
}

// 監聽 DOMContentLoaded 啟動遊戲
window.addEventListener('DOMContentLoaded', () => {
  const app = new GameApp();
  app.init();
  window.__CAT_DOG_GAME__ = app;
});

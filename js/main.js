import { GAME_CONFIG } from './config.js?v=3.0';
import { questionManager } from './data/questions.js?v=3.0';
import { AudioSystem } from './core/AudioSystem.js?v=3.0';
import { GameLoop } from './core/GameLoop.js?v=3.0';
import { RoomManager } from './systems/RoomManager.js?v=3.0';
import { AISystem } from './systems/AISystem.js?v=3.0';
import { Player } from './entities/Player.js?v=3.0';
import { Board } from './entities/Board.js?v=3.0';
import { HUD } from './ui/HUD.js?v=3.0';
import { QuizModal } from './ui/QuizModal.js?v=3.0';
import { Menu } from './ui/Menu.js?v=3.0';

/**
 * 貓狗大戰：常識地盤爭奪戰 - 主控制器 (Main Application Controller)
 * 50 塊均勻地盤、六大主題關卡、無分數純佔地盤規則、5分鐘精準對決
 */
class GameApp {
  constructor() {
    this.audio = new AudioSystem();
    this.roomManager = new RoomManager();

    this.hud = new HUD({
      onItemClick: (itemType) => this.handleItemUse(itemType),
      onReturnMenuClick: () => this.quitToMainMenu(),
    });

    this.boardEl = document.getElementById('game-board');
    this.board = new Board(this.boardEl);

    this.quizModal = new QuizModal({
      onTimeUp: () => {},
    });

    this.gameLoop = new GameLoop({
      onTick: (remainingSeconds) => this.tick(remainingSeconds),
      onTimeUp: () => this.handleTimeUp(),
      onUpdate: (dt) => this.update(dt),
      onRender: () => {},
    });

    this.menu = new Menu({
      audioSystem: this.audio,
      roomManager: this.roomManager,
      onStartGame: (params) => this.startGame(params),
    });

    // 對戰狀態
    this.gameMode = 'ai'; // 'ai' | 'online' | 'hotseat'
    this.selectedStage = 'all'; // 'all' | 'life' | 'nature' | 'world' | 'anime' | 'food'
    this.aiDifficulty = 'normal';
    this.myFaction = 'cat';
    this.opponentFaction = 'dog';
    this.myPlayer = null;
    this.opponentPlayer = null;
    this.players = {};
    this.currentTurnFaction = 'cat';
    this.isHost = true;
    this.isGameOver = false;
    this.isAnsweringQuiz = false;

    // AI 對手系統
    this.aiSystem = null;

    // 定期隨機黃金急迫搶答計時器
    this.goldenSpawnTimer = 0;
  }

  init() {
    this.audio.init();
    this.initQuitModal();
    this.menu.showMenu();
  }

  /**
   * 初始化「回到主畫面」操作按鈕 (點擊直接結束遊戲回到主選單)
   */
  initQuitModal() {
    const btnQuitGame = document.getElementById('btn-return-menu') || document.getElementById('btn-quit-game');
    if (btnQuitGame) {
      btnQuitGame.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.audio.playClick();
        this.quitToMainMenu();
      });
    }

    const btnConfirmQuit = document.getElementById('btn-confirm-quit');
    if (btnConfirmQuit) {
      btnConfirmQuit.addEventListener('click', () => {
        this.audio.playClick();
        this.quitToMainMenu();
      });
    }

    const btnCancelQuit = document.getElementById('btn-cancel-quit');
    if (btnCancelQuit) {
      btnCancelQuit.addEventListener('click', () => {
        const quitModal = document.getElementById('quit-modal');
        if (quitModal) quitModal.classList.add('hidden');
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

    if (this.quizModal && typeof this.quizModal.close === 'function') {
      this.quizModal.close();
    }
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

    const quitModal = document.getElementById('quit-modal');
    if (quitModal) quitModal.classList.add('hidden');

    this.menu.showMenu();
  }

  /**
   * 啟動新戰局
   */
  startGame({ mode, stage = 'all', aiDifficulty = 'normal', avatar, roomCode, isHost = true }) {
    this.gameMode = mode;
    this.selectedStage = stage;
    this.aiDifficulty = aiDifficulty;
    this.isHost = isHost;
    this.isGameOver = false;
    this.isAnsweringQuiz = false;

    // 設定題目主題與板塊主題
    questionManager.setTheme(this.selectedStage);
    questionManager.resetSession();
    this.board.setTheme(this.selectedStage);
    this.hud.setStageTheme(this.selectedStage);

    if (this.gameMode === 'online') {
      this.setupOnlineGame({ avatar, isHost });
    } else if (this.gameMode === 'hotseat') {
      this.setupHotseatGame({ avatar });
    } else {
      this.setupAIGame({ avatar });
    }
  }

  /**
   * 單人電腦對抗模式配置
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
    this.hud.setStageTheme(this.selectedStage);

    this.board.generate(this.selectedStage);
    this.renderBoard();

    this.gameLoop.start(GAME_CONFIG.MATCH_DURATION_SECONDS);

    // AI 對手獨立背景決策器
    this.aiSystem = new AISystem(
      this.board,
      this.opponentPlayer,
      (targetTile, isCorrect) => this.handleAIMove(targetTile, isCorrect),
      this.aiDifficulty,
      (itemType, targetTile) => this.handleAIUseItem(itemType, targetTile)
    );
    this.aiSystem.start();

    const themeName = GAME_CONFIG.THEMES[this.selectedStage]?.name || '全能知識王';
    this.hud.showCombatBanner(`🐾 關卡【${themeName}】開打！點擊綠框相鄰方格搶攻 50 格地盤！`, 'info', 4000);
  }

  /**
   * 雙人同機輪流對抗模式
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
    this.hud.setStageTheme(this.selectedStage);

    this.board.generate(this.selectedStage);
    this.renderBoard();

    this.gameLoop.start(GAME_CONFIG.MATCH_DURATION_SECONDS);
    this.hud.showCombatBanner('👥 雙人同機模式！雙方輪流交替點擊相鄰地盤作答爭奪！', 'info', 4000);
  }

  /**
   * 雙人線上 P2P 即時同步配置 (兩台裝置同時搶地)
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
      // 房主生成 50 格棋盤結構
      this.board.generate(this.selectedStage);

      // 廣播初始棋盤結構與選定主題至訪客端
      this.roomManager.send({
        type: 'GAME_SYNC_START',
        stage: this.selectedStage,
        tiles: this.board.exportTiles(),
        hostFaction: this.myFaction,
        guestFaction: this.opponentFaction,
      });

      this.hud.setupPlayers(this.myPlayer, this.opponentPlayer);
      this.hud.updateTurnBadge(this.myFaction, this.gameMode, this.myFaction);
      this.hud.setStageTheme(this.selectedStage);
      this.renderBoard();
      this.gameLoop.start(GAME_CONFIG.MATCH_DURATION_SECONDS);

      this.hud.showCombatBanner('⚡ 雙人即時對戰開始！雙方「同時搶地」，速度決定地盤！', 'golden', 4000);
    } else {
      this.hud.setupPlayers(this.myPlayer, this.opponentPlayer);
      this.hud.updateTurnBadge(this.myFaction, this.gameMode, this.myFaction);
      this.hud.showCombatBanner('🟢 連線成功！正在同步棋盤與主題，即刻開戰...', 'info', 3000);

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
            stage: this.selectedStage,
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

          // 同步關卡主題
          this.selectedStage = msg.stage || 'all';
          questionManager.setTheme(this.selectedStage);
          this.board.setTheme(this.selectedStage);
          this.hud.setStageTheme(this.selectedStage);

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
          this.gameLoop.start(GAME_CONFIG.MATCH_DURATION_SECONDS);

          const factionName = this.myFaction === 'cat' ? '🐱 喵喵陣營' : '🐶 汪汪陣營';
          this.hud.showCombatBanner(`⚡ 棋盤同步完成！你是【${factionName}】，「同時搶地盤」全面開戰！`, 'golden', 4000);
        }
        break;
      }

      case 'TILE_CONTEST_START': {
        const tile = this.board.tiles.find((t) => t.id === msg.tileId);
        if (tile) {
          tile.contestedBy = msg.factionId;
          this.renderBoard();
        }
        break;
      }

      case 'TILE_CLAIM_RESOLVED': {
        const tile = this.board.tiles.find((t) => t.id === msg.tileId);
        if (!tile) return;

        tile.contestedBy = null;
        const actor = this.players[msg.factionId];

        if (msg.correct) {
          this.audio.playClaimTerritory();
          tile.owner = msg.factionId;

          if (actor) {
            actor.claimedTileIds.add(tile.id);
            if (typeof msg.actorCombo === 'number') {
              actor.combo = msg.actorCombo;
            }
          }

          // 若對手搶佔的是我方的地盤，我方失地
          if (msg.stolenFrom === this.myFaction) {
            this.myPlayer.loseTile(tile);
            this.broadcastMyState();
          }

          if (msg.isGolden) {
            tile.clearGoldenFlash();
            this.hud.showCombatBanner(`⚠️ 對手搶下了【🌟 限時黃金地盤】，獲得強力戰術道具！`, 'golden', 3000);
          }
          if (tile.difficulty < 5) tile.difficulty += 1;
        } else {
          tile.setCooldown(msg.factionId, GAME_CONFIG.TILE_COOLDOWN_SECONDS);
        }

        this.hud.updateStats(this.myPlayer, this.opponentPlayer);
        this.renderBoard();
        break;
      }

      case 'PLAYER_STATE_UPDATE': {
        if (msg.factionId === this.opponentFaction) {
          if (typeof msg.combo === 'number') this.opponentPlayer.combo = msg.combo;
          if (Array.isArray(msg.claimedTileIds)) {
            this.opponentPlayer.claimedTileIds = new Set(msg.claimedTileIds);
          }
          this.hud.updateStats(this.myPlayer, this.opponentPlayer);
        }
        break;
      }

      case 'REMOTE_ITEM_USED': {
        this.applyRemoteItemUsed(msg);
        break;
      }

      case 'HOST_TIME_SYNC': {
        if (!this.isHost && typeof msg.remainingSeconds === 'number') {
          this.hud.updateTimer(msg.remainingSeconds);
        }
        break;
      }

      case 'REMOTE_TIME_UP': {
        this.handleTimeUp();
        break;
      }

      case 'REMOTE_SURRENDER': {
        this.hud.showCombatBanner('🏆 對手已退出本局戰鬥！你贏得了本局勝利！', 'golden', 5000);
        setTimeout(() => this.quitToMainMenu(), 2500);
        break;
      }
    }
  }

  /**
   * 廣播己方權威地盤與連勝狀態至對手端
   */
  broadcastMyState() {
    if (this.gameMode !== 'online') return;
    try {
      this.roomManager.send({
        type: 'PLAYER_STATE_UPDATE',
        factionId: this.myFaction,
        combo: this.myPlayer.combo,
        territories: this.myPlayer.getTerritoryCount(),
        claimedTileIds: Array.from(this.myPlayer.claimedTileIds),
      });
    } catch (e) {}
  }

  /**
   * 接收並執行對手施放的戰術道具效果
   */
  applyRemoteItemUsed(msg) {
    const humanPlayer = this.myPlayer;

    if (msg.itemType === 'freeze') {
      if (humanPlayer.isShielded()) {
        humanPlayer.consumeShield();
        this.audio.playShield();
        this.hud.showCombatBanner('🛡️ 你的金鐘護盾成功抵擋了對手的定身術！', 'info', 3000);
      } else {
        humanPlayer.freeze(10);
        this.audio.playFreeze();
        this.hud.showCombatBanner('⚠️ 對手發動了【❄️ 定身術】，你被急凍 10 秒無法搶地！', 'freeze', 4000);
      }
    } else if (msg.itemType === 'bomb') {
      const targetTile = this.board.tiles.find((t) => t.id === msg.targetTileId);
      if (targetTile) {
        if (humanPlayer.isShielded()) {
          humanPlayer.consumeShield();
          this.audio.playShield();
          this.hud.showCombatBanner('🛡️ 你的金鐘護盾抵擋了對手的轟炸！', 'info', 3000);
        } else {
          humanPlayer.loseTile(targetTile);
          this.board.neutralizeTile(targetTile);
          this.audio.playBomb();
          this.hud.showCombatBanner(`⚠️ 轟！對手發動【💣 轟炸】，你失去了【#${targetTile.tileNumber}】號地盤！`, 'bomb', 4000);
          this.broadcastMyState();
        }
      }
    } else if (msg.itemType === 'shield') {
      this.opponentPlayer.shield(25);
      this.hud.showCombatBanner('⚠️ 對手啟動了【🛡️ 金鐘護盾】，25 秒內免疫攻擊！', 'info', 3000);
    }

    this.hud.updateStats(this.myPlayer, this.opponentPlayer);
    this.renderBoard();
  }

  /**
   * 繪製 50 格均勻棋盤並綁定點擊事件
   */
  renderBoard() {
    if (!this.boardEl) return;
    this.boardEl.innerHTML = '';

    const selectableTiles = this.board.getSelectableTiles(this.myFaction);
    const selectableSet = new Set(selectableTiles.map((t) => t.id));

    for (const tile of this.board.tiles) {
      const el = document.createElement('div');
      tile.element = el;

      const isSelectable = !this.isGameOver && selectableSet.has(tile.id);
      tile.render(isSelectable);

      el.addEventListener('click', () => {
        if (!isSelectable || this.isGameOver || this.isAnsweringQuiz) return;
        this.audio.playClick();
        this.handleTileClick(tile);
      });

      this.boardEl.appendChild(el);
    }
  }

  /**
   * 每秒時鐘更新與事件檢查
   */
  tick(remainingSeconds) {
    if (this.isGameOver) return;
    this.hud.updateTimer(remainingSeconds);

    // 房主定期同步計時器給訪客
    if (this.gameMode === 'online' && this.isHost) {
      this.roomManager.send({
        type: 'HOST_TIME_SYNC',
        remainingSeconds: remainingSeconds,
      });
    }

    // 限時黃金急迫搶答地盤推進與生成 (每 45 秒嘗試隨機生成一個)
    this.tickInteractiveEvents();
  }

  tickInteractiveEvents() {
    this.goldenSpawnTimer += 1;
    if (this.goldenSpawnTimer >= 45) {
      this.goldenSpawnTimer = 0;
      const goldenTile = this.board.spawnGoldenFlash(20);
      if (goldenTile) {
        this.audio.playItemGet();
        this.hud.showCombatBanner(`🌟【#${goldenTile.tileNumber}】號地盤化身黃金急迫挑戰！限時 20 秒搶答贈道具！`, 'golden', 5000);
        this.renderBoard();
      }
    }

    // 更新倒數中黃金地盤
    const goldenTile = (typeof this.board.getGoldenTile === 'function')
      ? this.board.getGoldenTile()
      : ((typeof this.board.getGoldenFlashTile === 'function') ? this.board.getGoldenFlashTile() : null);

    if (goldenTile && goldenTile.isGoldenFlash) {
      goldenTile.goldenTimeLeft -= 1;
      if (goldenTile.goldenTimeLeft <= 0) {
        goldenTile.clearGoldenFlash();
        this.renderBoard();
      } else {
        const pill = goldenTile.element?.querySelector('.golden-flash-pill');
        if (pill) {
          pill.textContent = `⚡ 限時 ${goldenTile.goldenTimeLeft}s (獎勵道具)`;
        }
      }
    }
  }

  update(dt) {
    if (this.isGameOver) return;
    if (this.myPlayer && this.opponentPlayer) {
      this.hud.updateStatuses(this.myPlayer, this.opponentPlayer);
    }
  }

  /**
   * 玩家點擊地盤發起奪地行動
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
    const previousOwner = tile.owner;
    // 依據地盤的主題與難度抽題
    const question = questionManager.getUniqueQuestion(tile.difficulty, tile.category);

    // 彈出四選一常識作答彈窗
    const result = await this.quizModal.askQuestion(question, tile, actingPlayer.factionId);

    // 解除該格爭奪狀態
    tile.contestedBy = null;

    if (result.correct) {
      this.audio.playClaimTerritory();

      // 若為反奪地盤，對手失地
      if (this.gameMode !== 'online' && tile.owner === opponentPlayer.factionId) {
        opponentPlayer.loseTile(tile);
      }

      actingPlayer.claimTile(tile);
      tile.owner = actingPlayer.factionId;

      if (isGolden) {
        tile.clearGoldenFlash();
        const itemPool = ['freeze', 'bomb', 'shield'];
        const droppedItem = itemPool[Math.floor(Math.random() * itemPool.length)];
        actingPlayer.addItem(droppedItem);

        const itemNames = { freeze: '❄️ 定身術', bomb: '💣 轟炸', shield: '🛡️ 金鐘護盾' };
        this.audio.playItemGet();
        this.hud.showCombatBanner(
          `🎉 成功佔領黃金地盤！獲得強力戰術道具【${itemNames[droppedItem]}】！`,
          'golden',
          4000
        );
      }

      if (tile.difficulty < 5) tile.difficulty += 1;

      const combo = actingPlayer.addCombo();
      if (combo === 2) {
        actingPlayer.addItem('bomb');
        this.audio.playItemGet();
        this.hud.showCombatBanner('🔥 答對 2 連勝！獲得【💣 轟炸】戰術道具！', 'info', 3000);
      } else if (combo === 3) {
        actingPlayer.addItem('freeze');
        this.audio.playCombo();
        this.hud.showCombatBanner('🔥🔥🔥 3 連勝狂熱！額外獲得【❄️ 定身術】道具！', 'golden', 4000);
      }
    } else {
      // 答錯處理：無倒扣分數，進入 15 秒冷卻
      if (actingPlayer.isShielded()) {
        actingPlayer.consumeShield();
        this.audio.playShield();
        this.hud.showCombatBanner('🛡️ 金鐘護盾生效！免除答錯冷卻懲罰！', 'info', 3000);
      } else {
        tile.setCooldown(actingPlayer.factionId, GAME_CONFIG.TILE_COOLDOWN_SECONDS);
        this.hud.showCombatBanner('❌ 答錯了！該地盤進入 15 秒冷卻，暫時無法佔領！', 'info', 2500);
      }
      actingPlayer.resetCombo();
    }

    // 線上對抗即時同步地盤奪取狀態
    if (this.gameMode === 'online') {
      this.roomManager.send({
        type: 'TILE_CLAIM_RESOLVED',
        tileId: tile.id,
        factionId: this.myFaction,
        correct: result.correct,
        isGolden: isGolden,
        stolenFrom: (result.correct && previousOwner === this.opponentFaction) ? this.opponentFaction : null,
        actorTerritories: actingPlayer.getTerritoryCount(),
        actorCombo: actingPlayer.combo,
        actorClaimedTileIds: Array.from(actingPlayer.claimedTileIds),
      });
      this.broadcastMyState();
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
   * 玩家點擊使用戰術道具 (定身術、轟炸、金牌護盾)
   */
  handleItemUse(itemType) {
    if (this.isGameOver) return;

    const myPlayer = this.myPlayer;
    const opponentPlayer = this.opponentPlayer;

    if (myPlayer.isFrozen()) {
      this.hud.showCombatBanner('🧊 你當前正處於冰凍狀態，無法施放技能！', 'freeze', 2000);
      return;
    }

    if (!myPlayer.hasItem(itemType)) {
      this.hud.showCombatBanner('⚠️ 此道具數量不足！連勝答對或搶答黃金地盤可獲取！', 'info', 2000);
      return;
    }

    myPlayer.useItem(itemType);

    if (this.gameMode === 'online') {
      let targetTileId = null;
      if (itemType === 'bomb') {
        const opponentTiles = this.board.tiles.filter((t) => t.owner === this.opponentFaction && !t.isBase);
        if (opponentTiles.length > 0) {
          targetTileId = opponentTiles[Math.floor(Math.random() * opponentTiles.length)].id;
        }
      }
      this.roomManager.send({
        type: 'REMOTE_ITEM_USED',
        itemType: itemType,
        senderFaction: this.myFaction,
        targetTileId: targetTileId,
      });
    }

    if (itemType === 'freeze') {
      this.audio.playFreeze();
      opponentPlayer.freeze(10);
      this.hud.showCombatBanner('❄️ 施放【定身術】！對手已被冰凍急凍 10 秒！全力擴張！', 'freeze', 3500);
    } else if (itemType === 'bomb') {
      const opponentTiles = this.board.tiles.filter((t) => t.owner === this.opponentFaction && !t.isBase);
      if (opponentTiles.length === 0) {
        this.hud.showCombatBanner('💣 對手尚無佔領地盤可轟炸！道具已回收', 'info', 2500);
        myPlayer.addItem('bomb');
      } else {
        const target = opponentTiles[Math.floor(Math.random() * opponentTiles.length)];
        opponentPlayer.loseTile(target);
        this.board.neutralizeTile(target);
        this.audio.playBomb();
        this.hud.showCombatBanner(
          `💣 轟！成功炸毀對手的【#${target.tileNumber}】號地盤，重置為中立！`,
          'bomb',
          3500
        );
      }
    } else if (itemType === 'shield') {
      myPlayer.shield(25);
      this.audio.playShield();
      this.hud.showCombatBanner('🛡️ 金鐘護盾啟動！25 秒內抵擋對手攻擊並免除答錯冷卻！', 'info', 3500);
    }

    this.broadcastMyState();
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
        this.hud.showCombatBanner('🛡️ 你的金鐘護盾抵擋了對手的轟炸！', 'info', 3000);
      } else {
        humanPlayer.loseTile(targetTile);
        this.board.neutralizeTile(targetTile);
        this.audio.playBomb();
        this.hud.showCombatBanner(
          `⚠️ 轟！對手發動【💣 轟炸】，你失去了【#${targetTile.tileNumber}】號地盤！`,
          'bomb',
          4000
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

      aiPlayer.claimTile(targetTile);
      targetTile.owner = aiPlayer.factionId;

      if (isGolden) {
        targetTile.clearGoldenFlash();
        aiPlayer.addItem('bomb');
        this.hud.showCombatBanner(`⚠️ 對手搶下了【🌟 限時黃金地盤】，獲得強力道具！`, 'golden', 3000);
      }

      if (targetTile.difficulty < 5) {
        targetTile.difficulty += 1;
      }
    } else {
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

    // 結算勝負：純依地盤數量判定
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

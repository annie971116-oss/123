import { GAME_CONFIG } from './config.js?v=2.3';
import { questionManager } from './data/questions.js?v=2.3';
import { AudioSystem } from './core/AudioSystem.js?v=2.3';
import { GameLoop } from './core/GameLoop.js?v=2.3';
import { RoomManager } from './systems/RoomManager.js?v=2.3';
import { AISystem } from './systems/AISystem.js?v=2.3';
import { Player } from './entities/Player.js?v=2.3';
import { Board } from './entities/Board.js?v=2.3';
import { HUD } from './ui/HUD.js?v=2.3';
import { QuizModal } from './ui/QuizModal.js?v=2.3';
import { Menu } from './ui/Menu.js?v=2.3';

/**
 * 貓狗大戰：常識地盤爭奪戰 - 主控制器 (Main Application Controller)
 * 支援限時黃金寶藏搶答、戰術攻擊道具（定身術、肉球轟炸、金牌護盾）與連勝狂熱機制
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
    this.gameMode = 'ai'; // 'ai' | 'room'
    this.aiDifficulty = 'normal'; // 'easy' | 'normal' | 'hard'

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
  startGame({ mode, aiDifficulty = 'normal', avatar, roomCode }) {
    this.gameMode = mode;
    this.aiDifficulty = aiDifficulty;
    this.isGameOver = false;
    this.isAnsweringQuiz = false;

    // 重置單局題目記錄 (跨局歷史記憶自動保留)
    questionManager.resetSession();

    // 建立雙方陣營玩家
    const p1Faction = avatar; // 'cat' 或 'dog'
    const p2Faction = avatar === 'cat' ? 'dog' : 'cat';

    this.player1 = new Player(p1Faction);
    this.player2 = new Player(p2Faction);
    this.currentTurnFaction = p1Faction;

    // HUD 初始化
    this.hud.setupPlayers(this.player1, this.player2);
    this.hud.updateTurnBadge(this.currentTurnFaction, this.gameMode);

    // 生成並渲染全新異構地盤
    this.board.generate();
    this.renderBoard();

    // 啟動 5 分鐘 (300 秒) 計時器
    this.gameLoop.start(GAME_CONFIG.MATCH_DURATION_SECONDS);

    // 若為電腦模式，依指定強度啟動 AI 對手決策與戰術發動
    if (this.gameMode === 'ai') {
      this.aiSystem = new AISystem(
        this.board,
        this.player2,
        (targetTile, isCorrect) => {
          this.handleAIMove(targetTile, isCorrect);
        },
        this.aiDifficulty,
        (itemType, targetTile) => {
          this.handleAIUseItem(itemType, targetTile);
        }
      );
      this.aiSystem.start();
    } else {
      if (this.aiSystem) {
        this.aiSystem.stop();
        this.aiSystem = null;
      }
    }

    // 開局歡迎快訊
    this.hud.showCombatBanner('🐾 戰局開打！點擊相鄰方格答題奪地，善用戰術攻擊道具克敵制勝！', 'info', 4000);
  }

  renderBoard() {
    this.board.render(this.currentTurnFaction, (clickedTile) => {
      this.handleTileClick(clickedTile);
    });
  }

  /**
   * 互動遊戲時鐘滴答事件 (每秒檢查限時黃金格與異常狀態)
   */
  tickInteractiveEvents(remainingSeconds) {
    if (this.isGameOver) return;

    // 1. 每 60 秒 (250s, 190s, 130s, 70s) 召喚「限時黃金寶藏搶答地盤」
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

    // 3. 更新玩家狀態與 HUD 顯示
    if (this.player1 && this.player2) {
      this.hud.updateStatuses(this.player1, this.player2);
    }
  }

  /**
   * 玩家點擊地盤發起奪地行動
   */
  async handleTileClick(tile) {
    if (this.isGameOver || this.isAnsweringQuiz) return;

    // 確定當前作答陣營
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

    // 透過 QuestionManager 抽取同難度且保證本局與跨局不重複、選項動態混淆之常識題！
    const question = questionManager.getUniqueQuestion(tile.difficulty);

    // 開啟常識四選一彈窗作答
    const result = await this.quizModal.askQuestion(question, tile, actingPlayer.factionId);

    if (result.correct) {
      this.audio.playClaimTerritory();

      // 若該地盤已被對手佔領，先扣除對手該地盤分數與數量 (反奪機制)
      if (tile.owner === opponentPlayer.factionId) {
        opponentPlayer.loseTile(tile);
      }

      // 檢查是否為限時黃金地盤：雙倍積分 + 掉落道具
      if (isGolden) {
        tile.clearGoldenFlash();
        const doubleScore = tile.score * 2;
        actingPlayer.addScore(doubleScore);
        tile.owner = actingPlayer.factionId;
        actingPlayer.claimedTileIds.add(tile.id);

        // 隨機掉落戰術道具
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
        // 普通佔領
        actingPlayer.claimTile(tile);
        tile.owner = actingPlayer.factionId;
      }

      // 重複佔領時難度自動提升 1 級 (最高 5 級)，但該格分數維持原樣！
      if (tile.difficulty < 5) {
        tile.difficulty += 1;
      }

      // 連勝計算
      const combo = actingPlayer.addCombo();
      if (combo === 2) {
        // 連對 2 題掉落隨機攻擊道具
        actingPlayer.addItem('bomb');
        this.audio.playItemGet();
        this.hud.showCombatBanner('🔥 答對 2 連勝！獲得【💣 肉球轟炸】戰術道具！', 'info', 3000);
      } else if (combo === 3) {
        // 連對 3 題激活 15 秒狂熱時間 (得分 +50%)
        actingPlayer.activateFever(15);
        this.audio.playCombo();
        this.hud.showCombatBanner('🔥🔥🔥 3 連勝狂熱 (FEVER TIME)！15 秒內奪地積分額外 +50%！', 'golden', 4000);
      }
    } else {
      // 答錯處理：檢驗是否有金鐘護盾
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

      // 答錯中斷連勝
      actingPlayer.resetCombo();
    }

    // 更新資訊儀表板
    this.hud.updateStats(this.player1, this.player2);

    // 雙人對抗模式下輪替行動權
    if (this.gameMode === 'room') {
      this.currentTurnFaction = this.currentTurnFaction === 'cat' ? 'dog' : 'cat';
      this.hud.updateTurnBadge(this.currentTurnFaction, this.gameMode);
    }

    this.isAnsweringQuiz = false;
    if (this.aiSystem && !this.isGameOver) this.aiSystem.resume();

    // 重新渲染棋盤
    this.renderBoard();
  }

  /**
   * 玩家點擊使用戰術道具 (定身術、肉球轟炸、金牌護盾)
   */
  handleItemUse(itemType) {
    if (this.isGameOver) return;

    const actingPlayer = this.currentTurnFaction === this.player1.factionId ? this.player1 : this.player2;
    const opponentPlayer = actingPlayer === this.player1 ? this.player2 : this.player1;

    if (actingPlayer.isFrozen()) {
      this.hud.showCombatBanner('🧊 你當前正處於冰凍狀態，無法施放技能！', 'freeze', 2000);
      return;
    }

    if (!actingPlayer.hasItem(itemType)) return;

    if (itemType === 'freeze') {
      // ❄️ 定身術：冰凍對手 10 秒
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
      // 💣 肉球轟炸：炸毀對手最高分地盤
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
          `💣 肉球轟炸大命中！炸毀了對手【${targetTile.score}分】地盤，該格重置為中立！`,
          'bomb',
          4000
        );
      }
    } else if (itemType === 'shield') {
      // 🛡️ 金牌護盾：獲得 25 秒防禦保護
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

    const aiPlayer = this.player2;
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
      // AI 答對佔領
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
      // AI 答錯扣分與冷卻
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

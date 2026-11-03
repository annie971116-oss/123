import { GAME_CONFIG } from './config.js';
import { questionManager } from './data/questions.js';
import { AudioSystem } from './core/AudioSystem.js';
import { GameLoop } from './core/GameLoop.js';
import { RoomManager } from './systems/RoomManager.js';
import { AISystem } from './systems/AISystem.js';
import { Player } from './entities/Player.js';
import { Board } from './entities/Board.js';
import { HUD } from './ui/HUD.js';
import { QuizModal } from './ui/QuizModal.js';
import { Menu } from './ui/Menu.js';

/**
 * 貓狗大戰：常識地盤爭奪戰 - 主控制器 (Main Application Controller)
 */
class GameApp {
  constructor() {
    this.audio = new AudioSystem();
    this.roomManager = new RoomManager();
    this.hud = new HUD();
    this.quizModal = new QuizModal(this.audio);

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
      onTick: (secs) => this.hud.updateTimer(secs),
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

    // 若為電腦模式，依指定難度強度啟動 AI 對手決策
    if (this.gameMode === 'ai') {
      this.aiSystem = new AISystem(
        this.board,
        this.player2,
        (targetTile, isCorrect) => {
          this.handleAIMove(targetTile, isCorrect);
        },
        this.aiDifficulty
      );
      this.aiSystem.start();
    } else {
      if (this.aiSystem) {
        this.aiSystem.stop();
        this.aiSystem = null;
      }
    }
  }

  renderBoard() {
    this.board.render(this.currentTurnFaction, (clickedTile) => {
      this.handleTileClick(clickedTile);
    });
  }

  /**
   * 玩家點擊地盤發起奪地行動
   */
  async handleTileClick(tile) {
    if (this.isGameOver || this.isAnsweringQuiz) return;

    // 確定當前作答陣營
    const actingPlayer = this.currentTurnFaction === this.player1.factionId ? this.player1 : this.player2;
    const opponentPlayer = actingPlayer === this.player1 ? this.player2 : this.player1;

    this.isAnsweringQuiz = true;
    if (this.aiSystem) this.aiSystem.pause();

    // 透過 QuestionManager 抽取同難度且保證本局與跨局不重複之常識題！
    const question = questionManager.getUniqueQuestion(tile.difficulty);

    // 開啟常識四選一彈窗作答
    const result = await this.quizModal.askQuestion(question, tile, actingPlayer.factionId);

    if (result.correct) {
      // 答對成功佔領！
      this.audio.playClaimTerritory();

      // 若該地盤已被對手佔領，先扣除對手該地盤分數與數量 (反奪機制)
      if (tile.owner === opponentPlayer.factionId) {
        opponentPlayer.loseTile(tile);
      }

      // 當前玩家收編該地盤
      actingPlayer.claimTile(tile);
      tile.owner = actingPlayer.factionId;

      // 重複佔領時難度自動提升 1 級 (最高 5 級)，但該格分數維持原樣！
      if (tile.difficulty < 5) {
        tile.difficulty += 1;
      }
    } else {
      // 答錯倒扣分數
      const penalty = Math.max(
        GAME_CONFIG.MIN_WRONG_PENALTY,
        Math.round(tile.score * GAME_CONFIG.WRONG_PENALTY_RATIO)
      );
      actingPlayer.deductScore(penalty);

      // 該玩家在此地盤進入 15 秒冷卻，無法立即再次佔領
      tile.setCooldown(actingPlayer.factionId, GAME_CONFIG.TILE_COOLDOWN_SECONDS);
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
   * 電腦 AI 行動決策回呼
   */
  handleAIMove(targetTile, isCorrect) {
    if (this.isGameOver) return;

    const aiPlayer = this.player2;
    const humanPlayer = this.player1;

    if (isCorrect) {
      // AI 答對佔領
      if (targetTile.owner === humanPlayer.factionId) {
        humanPlayer.loseTile(targetTile);
      }
      aiPlayer.claimTile(targetTile);
      targetTile.owner = aiPlayer.factionId;
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

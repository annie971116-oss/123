import { GAME_CONFIG } from '../config.js';

/**
 * 電腦 AI 決策系統 (AI System)
 * 支援三段強度：🟢 呆萌幼幼 (簡單) / 🟡 活潑寵物 (普通) / 🔴 戰神霸王 (困難)
 * 純以 50 格地盤擴張、搶奪對手領地、黃金急迫挑戰與戰術技能施放為核心
 */
export class AISystem {
  constructor(board, aiPlayer, onAIMove, aiDifficultyKey = 'normal', onAIUseItem = null) {
    this.board = board;
    this.aiPlayer = aiPlayer;
    this.onAIMove = onAIMove || (() => {});
    this.onAIUseItem = onAIUseItem || (() => {});
    this.timer = null;
    this.isActive = false;

    this.setDifficulty(aiDifficultyKey);
  }

  setDifficulty(diffKey) {
    this.difficultyKey = diffKey;
    this.diffConfig = GAME_CONFIG.AI_DIFFICULTIES[diffKey] || GAME_CONFIG.AI_DIFFICULTIES.normal;
  }

  start() {
    this.isActive = true;
    this.scheduleNextAction();
  }

  stop() {
    this.isActive = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  pause() {
    this.stop();
  }

  resume() {
    if (!this.isActive) {
      this.start();
    }
  }

  scheduleNextAction() {
    if (!this.isActive) return;

    // 若 AI 當前處於被冰凍狀態，等待解凍後再進行行動
    if (this.aiPlayer.isFrozen()) {
      this.timer = setTimeout(() => {
        this.scheduleNextAction();
      }, 1000);
      return;
    }

    // 依據難度設定計算思考時間 (簡單: 7~11s, 普通: 4.5~7.5s, 困難: 2.2~4.2s)
    const delay =
      this.diffConfig.thinkTimeMin +
      Math.random() * (this.diffConfig.thinkTimeMax - this.diffConfig.thinkTimeMin);

    this.timer = setTimeout(() => {
      this.executeAction();
    }, delay);
  }

  executeAction() {
    if (!this.isActive) return;

    // 若被冰凍，直接推遲
    if (this.aiPlayer.isFrozen()) {
      this.scheduleNextAction();
      return;
    }

    // 1. AI 評估是否使用戰術道具攻擊玩家
    this.evaluateItemUsage();

    // 2. 取得 AI 當前所有相鄰且可進攻的地盤
    const selectable = this.board.getSelectableTiles(this.aiPlayer.factionId);
    if (selectable.length === 0) {
      this.scheduleNextAction();
      return;
    }

    // 🌟 優先判斷：若存在相鄰的「限時黃金地盤」，AI 高機率全力搶攻！
    const goldenTarget = selectable.find((t) => t.isGoldenFlash);
    let targetTile = null;

    if (goldenTarget && Math.random() < (this.difficultyKey === 'easy' ? 0.5 : 0.9)) {
      targetTile = goldenTarget;
    } else {
      // 依侵略性優先搶奪玩家地盤或未佔領中立地盤
      const playerTiles = selectable.filter(
        (t) => t.owner && t.owner !== this.aiPlayer.factionId && !t.isBase
      );

      if (playerTiles.length > 0 && Math.random() < this.diffConfig.stealAggression) {
        targetTile = playerTiles[Math.floor(Math.random() * playerTiles.length)];
      } else {
        targetTile = selectable[Math.floor(Math.random() * selectable.length)];
      }
    }

    if (!targetTile) {
      this.scheduleNextAction();
      return;
    }

    // 3. 依據題目難度判定 AI 是否答對
    const accuracy = this.diffConfig.accuracyByDiff[targetTile.difficulty] || 0.7;
    const isCorrect = Math.random() < accuracy;

    // 觸發行動回呼
    this.onAIMove(targetTile, isCorrect);

    // 安排下一次行動
    this.scheduleNextAction();
  }

  /**
   * AI 評估是否使用戰術道具 (定身術、轟炸、護盾)
   */
  evaluateItemUsage() {
    if (!this.onAIUseItem) return;

    // 1. 冰凍定身術：若擁有道具且有 40% 機率發動
    if (this.aiPlayer.hasItem('freeze') && Math.random() < 0.4) {
      this.aiPlayer.useItem('freeze');
      this.onAIUseItem('freeze');
      return;
    }

    // 2. 轟炸：若擁有道具且對手已佔領地盤，轟炸其 1 塊相鄰地盤
    if (this.aiPlayer.hasItem('bomb') && Math.random() < 0.35) {
      const opponentFaction = this.aiPlayer.factionId === 'cat' ? 'dog' : 'cat';
      const opponentTiles = this.board.tiles.filter(
        (t) => t.owner === opponentFaction && !t.isBase
      );
      if (opponentTiles.length > 0) {
        const target = opponentTiles[Math.floor(Math.random() * opponentTiles.length)];
        this.aiPlayer.useItem('bomb');
        this.onAIUseItem('bomb', target);
        return;
      }
    }

    // 3. 金鐘護盾：若未開啟護盾且擁有道具，30% 機率開啟
    if (this.aiPlayer.hasItem('shield') && !this.aiPlayer.isShielded() && Math.random() < 0.3) {
      this.aiPlayer.useItem('shield');
      this.onAIUseItem('shield');
      return;
    }
  }
}

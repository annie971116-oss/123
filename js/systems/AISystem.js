import { GAME_CONFIG } from '../config.js';

/**
 * 電腦 AI 決策系統 (AI System)
 * 在單人電腦模式中，模擬對手思考並定期向周邊地盤發動攻防
 */
export class AISystem {
  constructor(board, aiPlayer, onAIMove) {
    this.board = board;
    this.aiPlayer = aiPlayer;
    this.onAIMove = onAIMove || (() => {});
    this.timer = null;
    this.isActive = false;
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

    const delay =
      GAME_CONFIG.AI_CONFIG.thinkTimeMin +
      Math.random() * (GAME_CONFIG.AI_CONFIG.thinkTimeMax - GAME_CONFIG.AI_CONFIG.thinkTimeMin);

    this.timer = setTimeout(() => {
      this.executeAction();
    }, delay);
  }

  executeAction() {
    if (!this.isActive) return;

    // 取得 AI 當前所有相鄰且可進攻的地盤
    const selectable = this.board.getSelectableTiles(this.aiPlayer.factionId);
    if (selectable.length === 0) {
      // 暫時無可用地盤，稍後重試
      this.scheduleNextAction();
      return;
    }

    // 智能評估策略：優先進攻分數較高或對手已佔領的地盤
    selectable.sort((a, b) => {
      let weightA = a.score;
      let weightB = b.score;
      // 若對方已佔領，增加掠奪意願
      if (a.owner && !a.isBase) weightA += 15;
      if (b.owner && !b.isBase) weightB += 15;
      return weightB - weightA;
    });

    // 從前三名高權重地盤中挑選其一 (具備適度隨機感)
    const topCandidates = selectable.slice(0, Math.min(3, selectable.length));
    const targetTile = topCandidates[Math.floor(Math.random() * topCandidates.length)];

    // 計算 AI 答對機率 (根據題目難度)
    const accuracy = GAME_CONFIG.AI_CONFIG.accuracyByDiff[targetTile.difficulty] || 0.65;
    const isCorrect = Math.random() < accuracy;

    // 回呼通知主控台處理 AI 戰果
    this.onAIMove(targetTile, isCorrect);

    // 預約下一次進攻
    this.scheduleNextAction();
  }
}

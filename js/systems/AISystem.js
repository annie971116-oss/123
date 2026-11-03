import { GAME_CONFIG } from '../config.js';

/**
 * 電腦 AI 決策系統 (AI System)
 * 支援三段強度：🟢 呆萌幼幼 (簡單) / 🟡 活潑寵物 (普通) / 🔴 戰神霸王 (困難)
 */
export class AISystem {
  constructor(board, aiPlayer, onAIMove, aiDifficultyKey = 'normal') {
    this.board = board;
    this.aiPlayer = aiPlayer;
    this.onAIMove = onAIMove || (() => {});
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

    // 取得 AI 當前所有相鄰且可進攻的地盤
    const selectable = this.board.getSelectableTiles(this.aiPlayer.factionId);
    if (selectable.length === 0) {
      // 暫時無可用地盤，稍後重試
      this.scheduleNextAction();
      return;
    }

    // 智慧加權評估：
    // - 基礎分 = 地盤分數
    // - 侵略加權 = 若該地盤已被玩家佔領，增加掠奪意願 (困難模式激進搶奪)
    selectable.sort((a, b) => {
      let weightA = a.score;
      let weightB = b.score;

      if (a.owner && !a.isBase) weightA += this.diffConfig.aggressiveScoreBias;
      if (b.owner && !b.isBase) weightB += this.diffConfig.aggressiveScoreBias;

      return weightB - weightA;
    });

    let targetTile = null;
    if (this.difficultyKey === 'easy') {
      // 簡單模式：較隨機，偶爾挑低分格
      targetTile = selectable[Math.floor(Math.random() * selectable.length)];
    } else if (this.difficultyKey === 'hard') {
      // 困難模式：精準鎖定最高權重的第一名或第二名
      const topCount = Math.min(2, selectable.length);
      targetTile = selectable[Math.floor(Math.random() * topCount)];
    } else {
      // 普通模式：從前三名優質地盤中挑選
      const topCount = Math.min(3, selectable.length);
      targetTile = selectable[Math.floor(Math.random() * topCount)];
    }

    // 計算 AI 答對機率 (依據強度與題目難度對照表)
    const accuracy = this.diffConfig.accuracyByDiff[targetTile.difficulty] || 0.65;
    const isCorrect = Math.random() < accuracy;

    // 回呼通知主控台處理 AI 戰果
    this.onAIMove(targetTile, isCorrect);

    // 預約下一次進攻
    this.scheduleNextAction();
  }
}

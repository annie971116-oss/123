import { GAME_CONFIG } from '../config.js';

/**
 * 電腦 AI 決策系統 (AI System)
 * 支援三段強度：🟢 呆萌幼幼 (簡單) / 🟡 活潑寵物 (普通) / 🔴 戰神霸王 (困難)
 * 具備限時搶奪格優先鎖定、冰凍狀態暫停與戰術技能發動能力
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

    // 🌟 優先判斷：若存在相鄰的「限時黃金寶藏地盤」，AI 高機率全力搶攻！
    const goldenTarget = selectable.find((t) => t.isGoldenFlash);
    let targetTile = null;

    if (goldenTarget && Math.random() < (this.difficultyKey === 'easy' ? 0.5 : 0.9)) {
      targetTile = goldenTarget;
    } else {
      // 智慧加權評估：
      // - 基礎分 = 地盤分數
      // - 侵略加權 = 若已被玩家佔領，增加掠奪意願
      selectable.sort((a, b) => {
        let weightA = a.score;
        let weightB = b.score;

        if (a.owner && !a.isBase) weightA += this.diffConfig.aggressiveScoreBias;
        if (b.owner && !b.isBase) weightB += this.diffConfig.aggressiveScoreBias;

        return weightB - weightA;
      });

      if (this.difficultyKey === 'easy') {
        targetTile = selectable[Math.floor(Math.random() * selectable.length)];
      } else if (this.difficultyKey === 'hard') {
        const topCount = Math.min(2, selectable.length);
        targetTile = selectable[Math.floor(Math.random() * topCount)];
      } else {
        const topCount = Math.min(3, selectable.length);
        targetTile = selectable[Math.floor(Math.random() * topCount)];
      }
    }

    // 計算 AI 答對機率 (依據強度與題目難度對照表)
    const accuracy = this.diffConfig.accuracyByDiff[targetTile.difficulty] || 0.65;
    const isCorrect = Math.random() < accuracy;

    // 回呼通知主控台處理 AI 戰果
    this.onAIMove(targetTile, isCorrect);

    // 預約下一次進攻
    this.scheduleNextAction();
  }

  /**
   * AI 戰術技能評估 (冰凍、炸彈)
   */
  evaluateItemUsage() {
    if (!this.onAIUseItem) return;

    // 根據難度決定發動機率
    let chance = 0.15;
    if (this.difficultyKey === 'hard') chance = 0.35;
    else if (this.difficultyKey === 'easy') chance = 0.05;

    if (Math.random() > chance) return;

    // 優先使用炸彈（若玩家有佔領高分地盤）
    if (this.aiPlayer.hasItem('bomb')) {
      const humanFactionId = this.aiPlayer.factionId === 'cat' ? 'dog' : 'cat';
      const targetOpponentTile = this.board.getHighestOpponentTile(humanFactionId);
      if (targetOpponentTile && targetOpponentTile.score >= 30) {
        if (this.aiPlayer.useItem('bomb')) {
          this.onAIUseItem('bomb', targetOpponentTile);
          return;
        }
      }
    }

    // 其次使用冰凍術
    if (this.aiPlayer.hasItem('freeze')) {
      if (this.aiPlayer.useItem('freeze')) {
        this.onAIUseItem('freeze', null);
      }
    }
  }
}

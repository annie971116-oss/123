import { GAME_CONFIG } from '../config.js';

/**
 * 遊戲 HUD 資訊儀表板管理器
 * 負責左上角我方資訊、右上角對手資訊與中間上方 5:00 倒數計時器
 */
export class HUD {
  constructor() {
    this.timerEl = document.getElementById('hud-timer');
    this.turnBadgeEl = document.getElementById('hud-turn-badge');

    // 左上角我方儀表板
    this.p1AvatarEl = document.getElementById('p1-avatar');
    this.p1NameEl = document.getElementById('p1-name');
    this.p1ScoreEl = document.getElementById('p1-score');
    this.p1TerritoryEl = document.getElementById('p1-territory');

    // 右上角對手儀表板
    this.p2AvatarEl = document.getElementById('p2-avatar');
    this.p2NameEl = document.getElementById('p2-name');
    this.p2ScoreEl = document.getElementById('p2-score');
    this.p2TerritoryEl = document.getElementById('p2-territory');
  }

  /**
   * 初始化雙方身分與頭像名稱
   */
  setupPlayers(player1, player2) {
    if (this.p1AvatarEl) this.p1AvatarEl.textContent = player1.faction.avatar;
    if (this.p1NameEl) this.p1NameEl.textContent = player1.faction.name;

    if (this.p2AvatarEl) this.p2AvatarEl.textContent = player2.faction.avatar;
    if (this.p2NameEl) this.p2NameEl.textContent = player2.faction.name;

    this.updateStats(player1, player2);
  }

  /**
   * 即時更新雙方得分與地盤數
   */
  updateStats(p1, p2) {
    if (this.p1ScoreEl) this.p1ScoreEl.textContent = `${p1.score} 分`;
    if (this.p1TerritoryEl) this.p1TerritoryEl.textContent = `${p1.getTerritoryCount()} 塊`;

    if (this.p2ScoreEl) this.p2ScoreEl.textContent = `${p2.score} 分`;
    if (this.p2TerritoryEl) this.p2TerritoryEl.textContent = `${p2.getTerritoryCount()} 塊`;
  }

  /**
   * 更新中間上方 5:00 格式計時器
   */
  updateTimer(seconds) {
    if (!this.timerEl) return;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    const formatted = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    this.timerEl.textContent = formatted;

    // 最後 30 秒緊張閃爍紅字提醒
    if (seconds <= 30) {
      this.timerEl.classList.add('timer-urgent');
    } else {
      this.timerEl.classList.remove('timer-urgent');
    }
  }

  /**
   * 更新當前行動者提示標籤
   */
  updateTurnBadge(factionId, mode) {
    if (!this.turnBadgeEl) return;
    const faction = GAME_CONFIG.FACTIONS[factionId];
    if (mode === 'ai') {
      this.turnBadgeEl.textContent = `🎯 點擊相鄰方格搶攻地盤！`;
      this.turnBadgeEl.className = 'turn-pill pill-active';
    } else {
      this.turnBadgeEl.textContent = `當前行動：${faction.avatar} ${faction.name}`;
      this.turnBadgeEl.className = `turn-pill pill-${factionId}`;
    }
  }
}

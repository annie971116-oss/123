import { GAME_CONFIG } from '../config.js';

/**
 * 遊戲 HUD 資訊儀表板管理器
 * 負責我方資訊、對手資訊、5:00 倒數計時器、戰況即時快訊橫幅與戰術道具欄 UI
 */
export class HUD {
  constructor({ onItemClick = () => {} } = {}) {
    this.onItemClick = onItemClick;

    this.timerEl = document.getElementById('hud-timer');
    this.turnBadgeEl = document.getElementById('hud-turn-badge');

    // 左上角我方儀表板
    this.p1CardEl = document.querySelector('.p1-card');
    this.p1AvatarEl = document.getElementById('p1-avatar');
    this.p1NameEl = document.getElementById('p1-name');
    this.p1ScoreEl = document.getElementById('p1-score');
    this.p1TerritoryEl = document.getElementById('p1-territory');
    this.p1StatusEl = document.getElementById('p1-status');

    // 右上角對手儀表板
    this.p2CardEl = document.querySelector('.p2-card');
    this.p2AvatarEl = document.getElementById('p2-avatar');
    this.p2NameEl = document.getElementById('p2-name');
    this.p2ScoreEl = document.getElementById('p2-score');
    this.p2TerritoryEl = document.getElementById('p2-territory');
    this.p2StatusEl = document.getElementById('p2-status');

    // 戰況快訊橫幅
    this.combatBannerEl = document.getElementById('combat-banner');
    this.bannerTimer = null;

    // 戰術道具按鈕與數量
    this.btnFreeze = document.getElementById('btn-item-freeze');
    this.btnBomb = document.getElementById('btn-item-bomb');
    this.btnShield = document.getElementById('btn-item-shield');

    this.countFreezeEl = document.getElementById('count-freeze');
    this.countBombEl = document.getElementById('count-bomb');
    this.countShieldEl = document.getElementById('count-shield');

    // 連勝與狂熱標籤
    this.comboBadgeEl = document.getElementById('hud-combo-badge');
    this.feverBadgeEl = document.getElementById('hud-fever-badge');

    this.initItemListeners();
  }

  initItemListeners() {
    if (this.btnFreeze) {
      this.btnFreeze.addEventListener('click', () => this.onItemClick('freeze'));
    }
    if (this.btnBomb) {
      this.btnBomb.addEventListener('click', () => this.onItemClick('bomb'));
    }
    if (this.btnShield) {
      this.btnShield.addEventListener('click', () => this.onItemClick('shield'));
    }
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
    this.updateItemCounts(player1);
  }

  /**
   * 即時更新雙方得分、地盤數與道具
   */
  updateStats(p1, p2) {
    if (this.p1ScoreEl) this.p1ScoreEl.textContent = `${p1.score} 分`;
    if (this.p1TerritoryEl) this.p1TerritoryEl.textContent = `${p1.getTerritoryCount()} 塊`;

    if (this.p2ScoreEl) this.p2ScoreEl.textContent = `${p2.score} 分`;
    if (this.p2TerritoryEl) this.p2TerritoryEl.textContent = `${p2.getTerritoryCount()} 塊`;

    this.updateItemCounts(p1);
    this.updateStatuses(p1, p2);
  }

  /**
   * 更新道具數量顯示
   */
  updateItemCounts(player) {
    if (!player || !player.items) return;

    if (this.countFreezeEl) this.countFreezeEl.textContent = `x${player.items.freeze || 0}`;
    if (this.countBombEl) this.countBombEl.textContent = `x${player.items.bomb || 0}`;
    if (this.countShieldEl) this.countShieldEl.textContent = `x${player.items.shield || 0}`;

    if (this.btnFreeze) this.btnFreeze.disabled = (player.items.freeze || 0) <= 0;
    if (this.btnBomb) this.btnBomb.disabled = (player.items.bomb || 0) <= 0;
    if (this.btnShield) this.btnShield.disabled = (player.items.shield || 0) <= 0;
  }

  /**
   * 更新玩家異常狀態標籤 (冰凍、護盾)
   */
  updateStatuses(p1, p2) {
    this.renderSinglePlayerStatus(p1, this.p1CardEl, this.p1StatusEl);
    this.renderSinglePlayerStatus(p2, this.p2CardEl, this.p2StatusEl);

    // 連勝徽章
    if (this.comboBadgeEl) {
      if (p1.combo >= 2) {
        this.comboBadgeEl.textContent = `🔥 ${p1.combo} 連勝！`;
        this.comboBadgeEl.classList.remove('hidden');
      } else {
        this.comboBadgeEl.classList.add('hidden');
      }
    }

    // 狂熱時間徽章
    if (this.feverBadgeEl) {
      if (p1.isFeverActive()) {
        const remaining = Math.ceil((p1.feverUntil - Date.now()) / 1000);
        this.feverBadgeEl.textContent = `⚡ 狂熱中 +50% 分數 (${remaining}s)！`;
        this.feverBadgeEl.classList.remove('hidden');
      } else {
        this.feverBadgeEl.classList.add('hidden');
      }
    }
  }

  renderSinglePlayerStatus(player, cardEl, statusEl) {
    if (!player || !cardEl || !statusEl) return;

    if (player.isFrozen()) {
      const sec = player.getFrozenSecondsRemaining();
      statusEl.textContent = `🧊 冰凍中 ${sec}s`;
      statusEl.className = 'player-status-tag status-frozen';
      statusEl.classList.remove('hidden');
      cardEl.classList.add('card-frozen');
    } else if (player.isShielded()) {
      const sec = player.getShieldSecondsRemaining();
      statusEl.textContent = `🛡️ 護盾中 ${sec}s`;
      statusEl.className = 'player-status-tag status-shielded';
      statusEl.classList.remove('hidden');
      cardEl.classList.remove('card-frozen');
    } else {
      statusEl.classList.add('hidden');
      cardEl.classList.remove('card-frozen');
    }
  }

  /**
   * 顯示戰況快訊橫幅通知
   */
  showCombatBanner(message, type = 'info', duration = 3000) {
    if (!this.combatBannerEl) return;

    if (this.bannerTimer) {
      clearTimeout(this.bannerTimer);
      this.bannerTimer = null;
    }

    this.combatBannerEl.className = `combat-banner banner-${type} pop-in`;
    this.combatBannerEl.innerHTML = message;
    this.combatBannerEl.classList.remove('hidden');

    this.bannerTimer = setTimeout(() => {
      this.combatBannerEl.classList.add('hidden');
      this.bannerTimer = null;
    }, duration);
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

    if (seconds <= 30) {
      this.timerEl.classList.add('timer-urgent');
    } else {
      this.timerEl.classList.remove('timer-urgent');
    }
  }

  /**
   * 更新當前行動者提示標籤
   */
  updateTurnBadge(factionId, mode, myFaction = null) {
    if (!this.turnBadgeEl) return;
    const faction = GAME_CONFIG.FACTIONS[factionId];
    if (mode === 'ai') {
      this.turnBadgeEl.textContent = `🎯 點擊相鄰方格搶攻地盤！`;
      this.turnBadgeEl.className = 'turn-pill pill-active';
    } else if (mode === 'online') {
      this.turnBadgeEl.textContent = `⚡ 雙人即時爭奪中！同時點擊相鄰綠框搶攻！`;
      this.turnBadgeEl.className = 'turn-pill pill-active';
    } else {
      this.turnBadgeEl.textContent = `當前行動：${faction.avatar} ${faction.name}（同機交替）`;
      this.turnBadgeEl.className = `turn-pill pill-${factionId}`;
    }
  }
}

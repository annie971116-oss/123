import { GAME_CONFIG } from '../config.js';

/**
 * 遊戲 HUD 資訊儀表板管理器
 * 負責我方資訊、對手資訊、主題關卡標籤、5:00 倒數計時器、戰況即時快訊橫幅與戰術道具欄 UI
 */
export class HUD {
  constructor({ onItemClick = () => {}, onReturnMenuClick = () => {} } = {}) {
    this.onItemClick = onItemClick;
    this.onReturnMenuClick = onReturnMenuClick;

    this.timerEl = document.getElementById('hud-timer');
    this.turnBadgeEl = document.getElementById('hud-turn-badge');
    this.stageBadgeEl = document.getElementById('hud-stage-badge');

    // 左上角我方儀表板
    this.p1CardEl = document.querySelector('.p1-card');
    this.p1AvatarEl = document.getElementById('p1-avatar');
    this.p1NameEl = document.getElementById('p1-name');
    this.p1TerritoryEl = document.getElementById('p1-territory');
    this.p1StatusEl = document.getElementById('p1-status');

    // 右上角對手儀表板
    this.p2CardEl = document.querySelector('.p2-card');
    this.p2AvatarEl = document.getElementById('p2-avatar');
    this.p2NameEl = document.getElementById('p2-name');
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

    this.btnReturnMenu = document.getElementById('btn-return-menu');
    if (this.btnReturnMenu) {
      this.btnReturnMenu.addEventListener('click', (e) => {
        e.preventDefault();
        this.onReturnMenuClick();
      });
    }
  }

  /**
   * 設定關卡主題標籤顯示
   */
  setStageTheme(themeKey) {
    const theme = GAME_CONFIG.THEMES[themeKey] || GAME_CONFIG.THEMES.all;
    if (this.stageBadgeEl) {
      this.stageBadgeEl.innerHTML = `<span class="badge-icon">${theme.icon}</span> 關卡：${theme.name}`;
      this.stageBadgeEl.title = theme.desc;
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
   * 即時更新雙方地盤數與道具
   */
  updateStats(p1, p2) {
    const totalContestable = 48; // 50 格中扣除 2 格不可佔領基地

    const p1Count = p1.getTerritoryCount();
    const p2Count = p2.getTerritoryCount();

    const p1Percent = Math.round((p1Count / totalContestable) * 100);
    const p2Percent = Math.round((p2Count / totalContestable) * 100);

    if (this.p1TerritoryEl) {
      this.p1TerritoryEl.textContent = `${p1Count} / ${totalContestable} 塊 (${p1Percent}%)`;
    }

    if (this.p2TerritoryEl) {
      this.p2TerritoryEl.textContent = `${p2Count} / ${totalContestable} 塊 (${p2Percent}%)`;
    }

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

    // 更新連勝與狂熱標籤
    if (this.comboBadgeEl) {
      if (player.combo >= 2) {
        this.comboBadgeEl.textContent = `🔥 ${player.combo} 連勝中！`;
        this.comboBadgeEl.classList.remove('hidden');
      } else {
        this.comboBadgeEl.classList.add('hidden');
      }
    }

    if (this.feverBadgeEl) {
      if (player.isFeverActive()) {
        this.feverBadgeEl.classList.remove('hidden');
      } else {
        this.feverBadgeEl.classList.add('hidden');
      }
    }
  }

  /**
   * 更新玩家異常狀態標籤 (冰凍、護盾)
   */
  updateStatuses(p1, p2) {
    if (this.p1StatusEl) {
      if (p1.isFrozen()) {
        const sec = p1.getFrozenSecondsRemaining();
        this.p1StatusEl.textContent = `🧊 冰凍中 ${sec}s`;
        this.p1StatusEl.className = 'player-status-tag status-frozen';
        this.p1StatusEl.classList.remove('hidden');
      } else if (p1.isShielded()) {
        this.p1StatusEl.textContent = '🛡️ 金鐘護盾生效';
        this.p1StatusEl.className = 'player-status-tag status-shield';
        this.p1StatusEl.classList.remove('hidden');
      } else {
        this.p1StatusEl.classList.add('hidden');
      }
    }

    if (this.p2StatusEl) {
      if (p2.isFrozen()) {
        const sec = p2.getFrozenSecondsRemaining();
        this.p2StatusEl.textContent = `🧊 冰凍中 ${sec}s`;
        this.p2StatusEl.className = 'player-status-tag status-frozen';
        this.p2StatusEl.classList.remove('hidden');
      } else if (p2.isShielded()) {
        this.p2StatusEl.textContent = '🛡️ 金鐘護盾生效';
        this.p2StatusEl.className = 'player-status-tag status-shield';
        this.p2StatusEl.classList.remove('hidden');
      } else {
        this.p2StatusEl.classList.add('hidden');
      }
    }
  }

  /**
   * 更新中央 5 分鐘計時器
   */
  updateTimer(remainingSeconds) {
    if (!this.timerEl) return;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    const str = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    this.timerEl.textContent = str;

    // 最後 30 秒急迫警告動畫
    if (remainingSeconds <= 30) {
      this.timerEl.parentElement.classList.add('timer-urgent');
    } else {
      this.timerEl.parentElement.classList.remove('timer-urgent');
    }
  }

  /**
   * 更新即時行動引導標籤
   */
  updateTurnBadge(currentTurnFaction, gameMode, myFaction) {
    if (!this.turnBadgeEl) return;

    if (gameMode === 'online') {
      this.turnBadgeEl.innerHTML = '⚡ 雙人「同時搶地」即時火拼中！速度決定地盤！';
      this.turnBadgeEl.className = 'turn-pill pill-online';
    } else if (gameMode === 'hotseat') {
      const isMyTurn = currentTurnFaction === myFaction;
      const petName = currentTurnFaction === 'cat' ? '🐱 貓咪回合' : '🐶 狗狗回合';
      this.turnBadgeEl.innerHTML = `👉 現在輪到【${petName}】點擊搶地`;
      this.turnBadgeEl.className = `turn-pill pill-${currentTurnFaction}`;
    } else {
      this.turnBadgeEl.innerHTML = '🎯 點擊相鄰方格搶攻地盤！善用技能壓制電腦！';
      this.turnBadgeEl.className = 'turn-pill pill-active';
    }
  }

  /**
   * 彈出戰況動態橫幅快訊
   */
  showCombatBanner(message, type = 'info', duration = 3000) {
    if (!this.combatBannerEl) return;

    if (this.bannerTimer) {
      clearTimeout(this.bannerTimer);
    }

    this.combatBannerEl.className = `combat-banner banner-${type} pop-in`;
    this.combatBannerEl.innerHTML = message;
    this.combatBannerEl.classList.remove('hidden');

    this.bannerTimer = setTimeout(() => {
      this.combatBannerEl.classList.add('hidden');
    }, duration);
  }
}

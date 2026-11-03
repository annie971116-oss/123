/**
 * 主畫面與選單控制器 (Menu UI)
 * 負責模式選擇、電腦強度三段選擇 (簡單/普通/困難)、形象選擇 (貓或狗)、音量控制與遊戲結算畫面
 */
export class Menu {
  constructor({ audioSystem, roomManager, onStartGame }) {
    this.audio = audioSystem;
    this.roomManager = roomManager;
    this.onStartGame = onStartGame || (() => {});

    // 主選單與畫面
    this.menuScreen = document.getElementById('main-menu');
    this.gameScreen = document.getElementById('game-screen');
    this.gameOverModal = document.getElementById('gameover-modal');

    // 步驟區塊
    this.stepMode = document.getElementById('menu-step-mode');
    this.stepAIDiff = document.getElementById('menu-step-ai-diff');
    this.stepRoom = document.getElementById('menu-step-room');
    this.stepAvatar = document.getElementById('menu-step-avatar');

    // 音量控制元件
    this.volumeSlider = document.getElementById('volume-slider');
    this.muteBtn = document.getElementById('mute-btn');

    // 當前選擇設定
    this.selectedMode = 'ai'; // 'ai' | 'room'
    this.selectedAIDifficulty = 'normal'; // 'easy' | 'normal' | 'hard'
    this.selectedAvatar = 'cat'; // 'cat' | 'dog'
    this.roomCode = '';

    this.initEventListeners();
  }

  initEventListeners() {
    // 1. 音量滑桿
    if (this.volumeSlider) {
      this.volumeSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        this.audio.setVolume(val);
      });
    }

    // 2. 靜音切換
    if (this.muteBtn) {
      this.muteBtn.addEventListener('click', () => {
        const muted = this.audio.toggleMute();
        this.muteBtn.textContent = muted ? '🔇 靜音' : '🔊 音效開';
        this.muteBtn.classList.toggle('btn-muted', muted);
      });
    }

    // 3. 模式選擇按鈕
    const btnModeAI = document.getElementById('btn-mode-ai');
    const btnModeRoom = document.getElementById('btn-mode-room');

    if (btnModeAI) {
      btnModeAI.addEventListener('click', () => {
        this.audio.playClick();
        this.selectedMode = 'ai';
        this.goToStep('ai-diff');
      });
    }

    if (btnModeRoom) {
      btnModeRoom.addEventListener('click', () => {
        this.audio.playClick();
        this.selectedMode = 'room';
        this.setupRoomStep();
        this.goToStep('room');
      });
    }

    // 4. 電腦強度三段選擇按鈕
    const diffCards = document.querySelectorAll('.ai-diff-card');
    diffCards.forEach((card) => {
      card.addEventListener('click', () => {
        this.audio.playClick();
        diffCards.forEach((c) => c.classList.remove('selected'));
        card.classList.add('selected');
        this.selectedAIDifficulty = card.dataset.diff || 'normal';
      });
    });

    const btnAIDiffBack = document.getElementById('btn-ai-diff-back');
    const btnAIDiffNext = document.getElementById('btn-ai-diff-next');

    if (btnAIDiffBack) {
      btnAIDiffBack.addEventListener('click', () => {
        this.audio.playClick();
        this.goToStep('mode');
      });
    }

    if (btnAIDiffNext) {
      btnAIDiffNext.addEventListener('click', () => {
        this.audio.playClick();
        this.goToStep('avatar');
      });
    }

    // 5. 雙人房間步驟按鈕
    const btnCreateRoom = document.getElementById('btn-create-room');
    const btnCopyCode = document.getElementById('btn-copy-code');
    const btnJoinRoom = document.getElementById('btn-join-room');
    const btnRoomBack = document.getElementById('btn-room-back');
    const btnRoomNext = document.getElementById('btn-room-next');
    const inputJoinCode = document.getElementById('input-join-code');
    const roomCodeDisplay = document.getElementById('room-code-display');

    if (btnCreateRoom) {
      btnCreateRoom.addEventListener('click', () => {
        this.audio.playClick();
        this.roomCode = this.roomManager.generateRoomCode();
        if (roomCodeDisplay) roomCodeDisplay.textContent = this.roomCode;
        document.getElementById('room-created-box')?.classList.remove('hidden');
      });
    }

    if (btnCopyCode) {
      btnCopyCode.addEventListener('click', async () => {
        this.audio.playClick();
        const success = await this.roomManager.copyInviteMessage(this.roomCode);
        btnCopyCode.textContent = success ? '✅ 已複製邀請！' : '代碼已就緒';
        setTimeout(() => {
          btnCopyCode.textContent = '📋 複製邀請代碼';
        }, 2000);
      });
    }

    if (btnJoinRoom) {
      btnJoinRoom.addEventListener('click', () => {
        this.audio.playClick();
        const code = inputJoinCode?.value.trim().toUpperCase();
        if (code && code.length >= 4) {
          this.roomCode = code;
          this.goToStep('avatar');
        } else {
          alert('請輸入正確的 4 碼房間邀請代碼！');
        }
      });
    }

    if (btnRoomBack) {
      btnRoomBack.addEventListener('click', () => {
        this.audio.playClick();
        this.goToStep('mode');
      });
    }

    if (btnRoomNext) {
      btnRoomNext.addEventListener('click', () => {
        this.audio.playClick();
        this.goToStep('avatar');
      });
    }

    // 6. 形象選擇按鈕 (貓或狗)
    const btnChooseCat = document.getElementById('btn-choose-cat');
    const btnChooseDog = document.getElementById('btn-choose-dog');
    const btnStartGame = document.getElementById('btn-start-game');

    if (btnChooseCat) {
      btnChooseCat.addEventListener('click', () => {
        this.audio.playClick();
        this.selectedAvatar = 'cat';
        btnChooseCat.classList.add('selected');
        btnChooseDog?.classList.remove('selected');
      });
    }

    if (btnChooseDog) {
      btnChooseDog.addEventListener('click', () => {
        this.audio.playClick();
        this.selectedAvatar = 'dog';
        btnChooseDog.classList.add('selected');
        btnChooseCat?.classList.remove('selected');
      });
    }

    if (btnStartGame) {
      btnStartGame.addEventListener('click', () => {
        this.audio.playClick();
        this.audio.startBGM();
        this.hideMenu();
        this.onStartGame({
          mode: this.selectedMode,
          aiDifficulty: this.selectedAIDifficulty,
          avatar: this.selectedAvatar,
          roomCode: this.roomCode,
        });
      });
    }

    // 7. 重新開始按鈕
    const btnRestartGame = document.getElementById('btn-restart-game');
    if (btnRestartGame) {
      btnRestartGame.addEventListener('click', () => {
        this.audio.playClick();
        this.gameOverModal?.classList.add('hidden');
        this.showMenu();
      });
    }
  }

  setupRoomStep() {
    this.roomCode = this.roomManager.generateRoomCode();
    const roomCodeDisplay = document.getElementById('room-code-display');
    if (roomCodeDisplay) roomCodeDisplay.textContent = this.roomCode;
    document.getElementById('room-created-box')?.classList.remove('hidden');
  }

  goToStep(stepName) {
    this.stepMode?.classList.add('hidden');
    this.stepAIDiff?.classList.add('hidden');
    this.stepRoom?.classList.add('hidden');
    this.stepAvatar?.classList.add('hidden');

    if (stepName === 'mode') this.stepMode?.classList.remove('hidden');
    if (stepName === 'ai-diff') this.stepAIDiff?.classList.remove('hidden');
    if (stepName === 'room') this.stepRoom?.classList.remove('hidden');
    if (stepName === 'avatar') this.stepAvatar?.classList.remove('hidden');
  }

  showMenu() {
    this.menuScreen?.classList.remove('hidden');
    this.gameScreen?.classList.add('hidden');
    this.goToStep('mode');
  }

  hideMenu() {
    this.menuScreen?.classList.add('hidden');
    this.gameScreen?.classList.remove('hidden');
  }

  /**
   * 顯示五分鐘計時結束結算畫面
   * 判定順序：總得分高者勝 ➔ 地盤數多者勝 ➔ 平手
   */
  showGameOver({ p1, p2, p1IsCat }) {
    if (!this.gameOverModal) return;

    this.audio.playVictory();

    const winnerIconEl = document.getElementById('result-winner-icon');
    const winnerTitleEl = document.getElementById('result-winner-title');
    const reasonEl = document.getElementById('result-reason');
    const statsDetailEl = document.getElementById('result-stats-detail');

    let winner = null;
    let winReason = '';

    // 1. 第一順位：總得分高者勝
    if (p1.score > p2.score) {
      winner = p1;
      winReason = `🏆 總得分高出對手 ${p1.score - p2.score} 分！`;
    } else if (p2.score > p1.score) {
      winner = p2;
      winReason = `🏆 總得分高出對手 ${p2.score - p1.score} 分！`;
    } else {
      // 2. 第二順位：地盤數較多者勝
      const t1 = p1.getTerritoryCount();
      const t2 = p2.getTerritoryCount();
      if (t1 > t2) {
        winner = p1;
        winReason = `🏁 分數相同！但佔領地盤數多出 ${t1 - t2} 塊獲勝！`;
      } else if (t2 > t1) {
        winner = p2;
        winReason = `🏁 分數相同！但佔領地盤數多出 ${t2 - t1} 塊獲勝！`;
      } else {
        // 3. 第三順位：平手
        winner = null;
        winReason = '🤝 得分與地盤數完全相同！雙方握手言和！';
      }
    }

    if (winner) {
      if (winnerIconEl) winnerIconEl.textContent = `${winner.faction.avatar} 👑`;
      if (winnerTitleEl) winnerTitleEl.textContent = `【${winner.faction.name}】大獲全勝！`;
    } else {
      if (winnerIconEl) winnerIconEl.textContent = '🐱 🤝 🐶';
      if (winnerTitleEl) winnerTitleEl.textContent = '貓狗平手・共同統治！';
    }

    if (reasonEl) reasonEl.textContent = winReason;
    if (statsDetailEl) {
      statsDetailEl.innerHTML = `
        <div class="result-player-card">
          <div class="rp-avatar">${p1.faction.avatar}</div>
          <div class="rp-name">${p1.faction.name}</div>
          <div class="rp-score">最終得分：<strong>${p1.score}</strong> 分</div>
          <div class="rp-count">佔領地盤：<strong>${p1.getTerritoryCount()}</strong> 塊</div>
        </div>
        <div class="result-vs">VS</div>
        <div class="result-player-card">
          <div class="rp-avatar">${p2.faction.avatar}</div>
          <div class="rp-name">${p2.faction.name}</div>
          <div class="rp-score">最終得分：<strong>${p2.score}</strong> 分</div>
          <div class="rp-count">佔領地盤：<strong>${p2.getTerritoryCount()}</strong> 塊</div>
        </div>
      `;
    }

    this.gameOverModal.classList.remove('hidden');
  }
}

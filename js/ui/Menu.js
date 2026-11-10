/**
 * 主畫面與選單控制器 (Menu UI)
 * 負責模式選擇（電腦對抗 / 雙人線上即時連線 / 雙人同機輪流）、形象選擇、音量控制與即時房間配對
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

    // 房間配對相關 DOM
    this.roomCodeDisplay = document.getElementById('room-code-display');
    this.btnCopyCode = document.getElementById('btn-copy-code');
    this.inputJoinCode = document.getElementById('input-join-code');
    this.btnJoinRoom = document.getElementById('btn-join-room');
    this.hostStatusEl = document.getElementById('host-connection-status');
    this.joinStatusEl = document.getElementById('join-connection-status');

    // 當前選擇設定
    this.selectedMode = 'ai'; // 'ai' | 'online' | 'hotseat'
    this.selectedAIDifficulty = 'normal'; // 'easy' | 'normal' | 'hard'
    this.selectedAvatar = 'cat'; // 'cat' | 'dog'
    this.roomCode = '';
    this.isRoomHost = true;

    this.joinTimeoutTimer = null;

    this.initEventListeners();
    this.checkUrlRoomParam();
  }

  initEventListeners() {
    // 1. 音量控制
    if (this.volumeSlider) {
      this.volumeSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        this.audio.setVolume(val);
      });
    }

    if (this.muteBtn) {
      this.muteBtn.addEventListener('click', () => {
        const muted = this.audio.toggleMute();
        this.muteBtn.textContent = muted ? '🔇 靜音' : '🔊 音效開';
        this.muteBtn.classList.toggle('btn-muted', muted);
      });
    }

    // 2. 模式選擇按鈕
    const btnModeAI = document.getElementById('btn-mode-ai');
    const btnModeOnline = document.getElementById('btn-mode-online');
    const btnModeHotseat = document.getElementById('btn-mode-hotseat');

    if (btnModeAI) {
      btnModeAI.addEventListener('click', () => {
        this.audio.playClick();
        this.selectedMode = 'ai';
        this.goToStep('ai-diff');
      });
    }

    if (btnModeOnline) {
      btnModeOnline.addEventListener('click', () => {
        this.audio.playClick();
        this.selectedMode = 'online';
        this.setupOnlineRoomStep();
        this.goToStep('room');
      });
    }

    if (btnModeHotseat) {
      btnModeHotseat.addEventListener('click', () => {
        this.audio.playClick();
        this.selectedMode = 'hotseat';
        this.goToStep('avatar');
      });
    }

    // 3. 電腦強度選擇按鈕
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

    // 4. 線上房間代碼複製按鈕
    if (this.btnCopyCode) {
      this.btnCopyCode.addEventListener('click', async () => {
        this.audio.playClick();
        const success = await this.roomManager.copyInviteMessage(this.roomCode);
        this.btnCopyCode.textContent = success ? '✅ 已複製專屬邀請連結！' : '代碼已就緒';
        setTimeout(() => {
          this.btnCopyCode.textContent = '📋 複製邀請代碼與連結';
        }, 2500);
      });
    }

    // 5. 訪客輸入代碼並加入按鈕
    if (this.btnJoinRoom) {
      this.btnJoinRoom.addEventListener('click', () => {
        this.audio.playClick();
        this.handleGuestJoin();
      });
    }

    const btnRoomBack = document.getElementById('btn-room-back');
    if (btnRoomBack) {
      btnRoomBack.addEventListener('click', () => {
        this.audio.playClick();
        this.roomManager.cleanup();
        this.goToStep('mode');
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
          isHost: this.isRoomHost,
        });
      });
    }

    // 7. 結算畫面重新開始按鈕
    const btnRestartGame = document.getElementById('btn-restart-game');
    if (btnRestartGame) {
      btnRestartGame.addEventListener('click', () => {
        this.audio.playClick();
        this.gameOverModal?.classList.add('hidden');
        this.showMenu();
      });
    }
  }

  /**
   * 檢查網址參數是否帶有邀請代碼 (?room=CAT839)
   */
  checkUrlRoomParam() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const roomParam = urlParams.get('room') || urlParams.get('code');
      if (roomParam) {
        this.selectedMode = 'online';
        if (this.inputJoinCode) {
          this.inputJoinCode.value = roomParam.trim().toUpperCase();
        }
        this.setupOnlineRoomStep();
        this.goToStep('room');
      }
    } catch (e) {
      console.warn('URL param parse error:', e);
    }
  }

  /**
   * 初始化房主線上房間狀態
   */
  setupOnlineRoomStep() {
    this.isRoomHost = true;
    this.roomCode = this.roomManager.generateRoomCode();
    if (this.roomCodeDisplay) this.roomCodeDisplay.textContent = this.roomCode;

    if (this.hostStatusEl) {
      this.hostStatusEl.className = 'room-status-badge waiting';
      this.hostStatusEl.textContent = '⏳ 正在等待好友輸入代碼加入...（請將代碼傳給對方）';
    }

    if (this.joinStatusEl) {
      this.joinStatusEl.className = 'room-status-badge hidden';
    }

    // 啟動房主節點監聽
    this.roomManager.initHost(this.roomCode, {
      onConnected: () => {
        this.audio.playItemGet();
        if (this.hostStatusEl) {
          this.hostStatusEl.className = 'room-status-badge connected';
          this.hostStatusEl.textContent = '🟢 好友已成功連線！即將選擇形象進入戰局...';
        }
        // 1.5 秒後自動推進至形象選擇
        setTimeout(() => {
          this.goToStep('avatar');
        }, 1500);
      },
      onError: (err) => {
        console.warn('Host error:', err);
      },
    });
  }

  /**
   * 訪客點擊加入指定房間
   */
  handleGuestJoin() {
    const code = this.inputJoinCode?.value.trim().toUpperCase();
    if (!code || code.length < 4) {
      alert('請輸入正確的 6 碼房間邀請代碼（例如 CAT839）！');
      return;
    }

    this.isRoomHost = false;
    this.roomCode = code;

    if (this.btnJoinRoom) {
      this.btnJoinRoom.disabled = true;
      this.btnJoinRoom.textContent = '⏳ 連線搜尋中...';
    }

    if (this.joinStatusEl) {
      this.joinStatusEl.className = 'room-status-badge waiting';
      this.joinStatusEl.textContent = `🔄 正在搜尋並連線至房間【${code}】...`;
      this.joinStatusEl.classList.remove('hidden');
    }

    // 超時檢測 (10 秒內未連上顯示提示)
    if (this.joinTimeoutTimer) clearTimeout(this.joinTimeoutTimer);
    this.joinTimeoutTimer = setTimeout(() => {
      if (!this.roomManager.isConnected) {
        if (this.btnJoinRoom) {
          this.btnJoinRoom.disabled = false;
          this.btnJoinRoom.textContent = '🚀 連線並加入房間';
        }
        if (this.joinStatusEl) {
          this.joinStatusEl.className = 'room-status-badge error';
          this.joinStatusEl.textContent = `❌ 無法配對房間【${code}】！請確認房主已在房間中等待，並檢查代碼大小寫是否正確。`;
        }
      }
    }, 10000);

    // 執行加入連線
    this.roomManager.joinRoom(code, {
      onConnected: () => {
        if (this.joinTimeoutTimer) clearTimeout(this.joinTimeoutTimer);
        this.audio.playItemGet();

        if (this.btnJoinRoom) {
          this.btnJoinRoom.textContent = '✅ 配對成功！';
        }
        if (this.joinStatusEl) {
          this.joinStatusEl.className = 'room-status-badge connected';
          this.joinStatusEl.textContent = `🟢 已成功連線至房主！等待房主開啟戰局...`;
        }

        // 訪客自動跳轉至準備戰局
        setTimeout(() => {
          this.goToStep('avatar');
        }, 1200);
      },
      onError: (err) => {
        if (this.joinTimeoutTimer) clearTimeout(this.joinTimeoutTimer);
        if (this.btnJoinRoom) {
          this.btnJoinRoom.disabled = false;
          this.btnJoinRoom.textContent = '🚀 連線並加入房間';
        }
        if (this.joinStatusEl) {
          this.joinStatusEl.className = 'room-status-badge error';
          this.joinStatusEl.textContent = `❌ 連線失敗：${err?.message || '請確認網路狀態後重試'}`;
        }
      },
    });
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
    const winnerReasonEl = document.getElementById('result-reason');
    const statsDetailEl = document.getElementById('result-stats-detail');

    let winner = null;
    let reasonText = '';

    if (p1.score > p2.score) {
      winner = p1;
      reasonText = `總分領先！${p1.faction.name} 奪得最高榮耀！`;
    } else if (p2.score > p1.score) {
      winner = p2;
      reasonText = `總分領先！${p2.faction.name} 稱霸棋盤！`;
    } else {
      if (p1.getTerritoryCount() > p2.getTerritoryCount()) {
        winner = p1;
        reasonText = `分數同分，但佔領地盤更多！${p1.faction.name} 險勝！`;
      } else if (p2.getTerritoryCount() > p1.getTerritoryCount()) {
        winner = p2;
        reasonText = `分數同分，但佔領地盤更多！${p2.faction.name} 險勝！`;
      } else {
        winner = null;
        reasonText = '雙方分數與地盤數完全相同，平分秋色！世紀平手！';
      }
    }

    if (winner) {
      if (winnerIconEl) winnerIconEl.textContent = '👑';
      if (winnerTitleEl) winnerTitleEl.textContent = `🎉 恭喜【${winner.faction.name}】大獲全勝！`;
    } else {
      if (winnerIconEl) winnerIconEl.textContent = '🤝';
      if (winnerTitleEl) winnerTitleEl.textContent = '🐾 勢均力敵！握手言和！';
    }

    if (winnerReasonEl) winnerReasonEl.textContent = reasonText;

    if (statsDetailEl) {
      statsDetailEl.innerHTML = `
        <div class="result-player-card">
          <div class="rp-avatar">${p1.faction.avatar}</div>
          <div class="rp-name">${p1.faction.name}</div>
          <div class="rp-score">⭐ 得分：<strong>${p1.score}</strong> 分</div>
          <div class="rp-count">🚩 地盤數：<strong>${p1.getTerritoryCount()}</strong> 塊</div>
        </div>
        <div class="result-vs">VS</div>
        <div class="result-player-card">
          <div class="rp-avatar">${p2.faction.avatar}</div>
          <div class="rp-name">${p2.faction.name}</div>
          <div class="rp-score">⭐ 得分：<strong>${p2.score}</strong> 分</div>
          <div class="rp-count">🚩 地盤數：<strong>${p2.getTerritoryCount()}</strong> 塊</div>
        </div>
      `;
    }

    this.gameOverModal.classList.remove('hidden');
  }
}

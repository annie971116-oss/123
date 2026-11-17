import { GAME_CONFIG } from '../config.js';

/**
 * 主畫面與選單控制器 (Menu UI)
 * 負責模式選擇、雙人線上創建/加入房間、關卡主題選擇、準備大廳、形象選擇與雙人即時準備機制
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

    // 步驟區塊 DOM
    this.stepMode = document.getElementById('menu-step-mode');
    this.stepOnlineChoice = document.getElementById('menu-step-online-choice');
    this.stepStage = document.getElementById('menu-step-stage');
    this.stepAIDiff = document.getElementById('menu-step-ai-diff');
    this.stepRoomHost = document.getElementById('menu-step-room-host');
    this.stepRoomJoin = document.getElementById('menu-step-room-join');
    this.stepOnlineLobby = document.getElementById('menu-step-online-lobby');
    this.stepAvatar = document.getElementById('menu-step-avatar');

    // 音量控制元件
    this.volumeSlider = document.getElementById('volume-slider');
    this.muteBtn = document.getElementById('mute-btn');

    // 房主開房 DOM
    this.hostRoomCodeDisplay = document.getElementById('host-room-code-display');
    this.btnHostCopyCode = document.getElementById('btn-host-copy-code');
    this.hostConnectionStatus = document.getElementById('host-connection-status');
    this.hostStageThemeDisplay = document.getElementById('host-stage-theme-display');

    // 訪客加入 DOM
    this.inputJoinCode = document.getElementById('input-join-code');
    this.btnJoinRoom = document.getElementById('btn-join-room');
    this.joinConnectionStatus = document.getElementById('join-connection-status');

    // 雙人準備大廳 DOM
    this.lobbyRoomCodeText = document.getElementById('lobby-room-code-text');
    this.lobbyStageThemeText = document.getElementById('lobby-stage-theme-text');
    this.lobbyMyRoleBadge = document.getElementById('lobby-my-role-badge');
    this.lobbyOppRoleBadge = document.getElementById('lobby-opp-role-badge');
    this.lobbyAvatarCat = document.getElementById('lobby-avatar-cat');
    this.lobbyAvatarDog = document.getElementById('lobby-avatar-dog');
    this.lobbyMyReadyStatus = document.getElementById('lobby-my-ready-status');
    this.btnLobbyReady = document.getElementById('btn-lobby-ready');
    this.lobbyOppAvatar = document.getElementById('lobby-opp-avatar');
    this.lobbyOppName = document.getElementById('lobby-opp-name');
    this.lobbyOppReadyStatus = document.getElementById('lobby-opp-ready-status');
    this.lobbyOppHint = document.getElementById('lobby-opp-hint');
    this.lobbyCountdownBanner = document.getElementById('lobby-countdown-banner');
    this.lobbyCountdownNum = document.getElementById('lobby-countdown-num');

    // 當前選擇設定
    this.selectedMode = 'ai'; // 'ai' | 'online' | 'hotseat'
    this.selectedStage = 'all'; // 'all' | 'life' | 'nature' | 'world' | 'anime' | 'food'
    this.selectedAIDifficulty = 'normal'; // 'easy' | 'normal' | 'hard'
    this.selectedAvatar = 'cat'; // 'cat' | 'dog'
    this.roomCode = '';
    this.isRoomHost = true;

    // 大廳雙人準備狀態
    this.myLobbyReady = false;
    this.oppLobbyReady = false;
    this.oppLobbyAvatar = 'dog';
    this.lobbyCountdownTimer = null;
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

    // 2. 步驟 1: 對戰模式選擇
    const btnModeAI = document.getElementById('btn-mode-ai');
    const btnModeOnline = document.getElementById('btn-mode-online');
    const btnModeHotseat = document.getElementById('btn-mode-hotseat');

    if (btnModeAI) {
      btnModeAI.addEventListener('click', () => {
        this.audio.playClick();
        this.selectedMode = 'ai';
        this.updateStageStepUI();
        this.goToStep('stage');
      });
    }

    if (btnModeOnline) {
      btnModeOnline.addEventListener('click', () => {
        this.audio.playClick();
        this.selectedMode = 'online';
        this.goToStep('online-choice');
      });
    }

    if (btnModeHotseat) {
      btnModeHotseat.addEventListener('click', () => {
        this.audio.playClick();
        this.selectedMode = 'hotseat';
        this.updateStageStepUI();
        this.goToStep('stage');
      });
    }

    // 3. 步驟 1-B: 雙人線上選擇 (創建房間 vs 加入房間)
    const btnChoiceCreate = document.getElementById('btn-choice-create');
    const btnChoiceJoin = document.getElementById('btn-choice-join');
    const btnOnlineChoiceBack = document.getElementById('btn-online-choice-back');

    if (btnChoiceCreate) {
      btnChoiceCreate.addEventListener('click', () => {
        this.audio.playClick();
        this.isRoomHost = true;
        this.selectedAvatar = 'cat';
        this.oppLobbyAvatar = 'dog';
        this.updateStageStepUI();
        this.goToStep('stage');
      });
    }

    if (btnChoiceJoin) {
      btnChoiceJoin.addEventListener('click', () => {
        this.audio.playClick();
        this.isRoomHost = false;
        this.selectedAvatar = 'dog';
        this.oppLobbyAvatar = 'cat';
        this.resetJoinInputUI();
        this.goToStep('room-join');
      });
    }

    if (btnOnlineChoiceBack) {
      btnOnlineChoiceBack.addEventListener('click', () => {
        this.audio.playClick();
        this.goToStep('mode');
      });
    }

    // 4. 步驟 2: 關卡主題選擇卡片
    const stageCards = document.querySelectorAll('.stage-card');
    stageCards.forEach((card) => {
      card.addEventListener('click', () => {
        this.audio.playClick();
        stageCards.forEach((c) => c.classList.remove('selected'));
        card.classList.add('selected');
        this.selectedStage = card.dataset.stage || 'all';
      });
    });

    const btnStageBack = document.getElementById('btn-stage-back');
    const btnStageNext = document.getElementById('btn-stage-next');

    if (btnStageBack) {
      btnStageBack.addEventListener('click', () => {
        this.audio.playClick();
        if (this.selectedMode === 'online') {
          this.goToStep('online-choice');
        } else {
          this.goToStep('mode');
        }
      });
    }

    if (btnStageNext) {
      btnStageNext.addEventListener('click', () => {
        this.audio.playClick();
        if (this.selectedMode === 'ai') {
          this.goToStep('ai-diff');
        } else if (this.selectedMode === 'online') {
          // 房主自選主題後，進入生成專屬房間代碼
          this.setupOnlineHostRoom();
          this.goToStep('room-host');
        } else {
          // 同機雙人模式
          this.goToStep('avatar');
        }
      });
    }

    // 5. 步驟 3-A: 電腦難度強度選擇
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
        this.goToStep('stage');
      });
    }

    if (btnAIDiffNext) {
      btnAIDiffNext.addEventListener('click', () => {
        this.audio.playClick();
        this.goToStep('avatar');
      });
    }

    // 6. 步驟 3-B: 房主專屬等待房間按鈕
    if (this.btnHostCopyCode) {
      this.btnHostCopyCode.addEventListener('click', async () => {
        this.audio.playClick();
        const success = await this.roomManager.copyInviteMessage(this.roomCode);
        this.btnHostCopyCode.textContent = success ? '✅ 已複製專屬邀請連結！' : '代碼已就緒';
        setTimeout(() => {
          this.btnHostCopyCode.textContent = '📋 複製邀請代碼與連結';
        }, 2500);
      });
    }

    const btnRoomHostBack = document.getElementById('btn-room-host-back');
    if (btnRoomHostBack) {
      btnRoomHostBack.addEventListener('click', () => {
        this.audio.playClick();
        this.roomManager.cleanup();
        this.goToStep('stage');
      });
    }

    // 7. 步驟 3-C: 訪客加入房間按鈕
    if (this.btnJoinRoom) {
      this.btnJoinRoom.addEventListener('click', () => {
        this.audio.playClick();
        this.handleGuestJoin();
      });
    }

    if (this.inputJoinCode) {
      this.inputJoinCode.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.audio.playClick();
          this.handleGuestJoin();
        }
      });
    }

    const btnRoomJoinBack = document.getElementById('btn-room-join-back');
    if (btnRoomJoinBack) {
      btnRoomJoinBack.addEventListener('click', () => {
        this.audio.playClick();
        this.roomManager.cleanup();
        this.goToStep('online-choice');
      });
    }

    // 8. 步驟 3-D: 雙人線上準備大廳 (雙方點擊準備後才開始)
    if (this.lobbyAvatarCat) {
      this.lobbyAvatarCat.addEventListener('click', () => {
        if (this.myLobbyReady) return;
        this.audio.playClick();
        this.setMyLobbyAvatar('cat');
      });
    }

    if (this.lobbyAvatarDog) {
      this.lobbyAvatarDog.addEventListener('click', () => {
        if (this.myLobbyReady) return;
        this.audio.playClick();
        this.setMyLobbyAvatar('dog');
      });
    }

    if (this.btnLobbyReady) {
      this.btnLobbyReady.addEventListener('click', () => {
        this.audio.playClick();
        this.toggleMyReadyState();
      });
    }

    const btnLobbyLeave = document.getElementById('btn-lobby-leave');
    if (btnLobbyLeave) {
      btnLobbyLeave.addEventListener('click', () => {
        this.audio.playClick();
        this.leaveLobby();
      });
    }

    // 9. 步驟 4: 單人/同機形象選擇按鈕
    const btnChooseCat = document.getElementById('btn-choose-cat');
    const btnChooseDog = document.getElementById('btn-choose-dog');
    const btnAvatarBack = document.getElementById('btn-avatar-back');
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

    if (btnAvatarBack) {
      btnAvatarBack.addEventListener('click', () => {
        this.audio.playClick();
        if (this.selectedMode === 'ai') {
          this.goToStep('ai-diff');
        } else {
          this.goToStep('stage');
        }
      });
    }

    if (btnStartGame) {
      btnStartGame.addEventListener('click', () => {
        this.audio.playClick();
        this.audio.startBGM();
        this.hideMenu();
        this.onStartGame({
          mode: this.selectedMode,
          stage: this.selectedStage,
          aiDifficulty: this.selectedAIDifficulty,
          avatar: this.selectedAvatar,
          roomCode: this.roomCode,
          isHost: this.isRoomHost,
        });
      });
    }

    // 10. 結算畫面重新開始按鈕
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
   * 根據模式更新關卡選擇畫面的標題與按鈕文字
   */
  updateStageStepUI() {
    const heading = document.getElementById('stage-step-heading');
    const btnNext = document.getElementById('btn-stage-next');
    if (this.selectedMode === 'online') {
      if (heading) heading.textContent = '【房主開房】請挑選挑戰關卡主題（150題/主題）';
      if (btnNext) btnNext.textContent = '下一步：生成房間代碼 ➔';
    } else if (this.selectedMode === 'ai') {
      if (heading) heading.textContent = '【步驟 2】請挑選挑戰關卡主題（150題/主題）';
      if (btnNext) btnNext.textContent = '下一步：選擇電腦強度 ➔';
    } else {
      if (heading) heading.textContent = '【步驟 2】請挑選挑戰關卡主題（150題/主題）';
      if (btnNext) btnNext.textContent = '下一步：選擇形象 ➔';
    }
  }

  /**
   * 重置訪客輸入框與狀態
   */
  resetJoinInputUI() {
    if (this.inputJoinCode) {
      this.inputJoinCode.disabled = false;
      this.inputJoinCode.value = '';
    }
    if (this.btnJoinRoom) {
      this.btnJoinRoom.disabled = false;
      this.btnJoinRoom.textContent = '🚀 連線並加入大廳';
    }
    if (this.joinConnectionStatus) {
      this.joinConnectionStatus.className = 'room-status-badge hidden';
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
        this.isRoomHost = false;
        this.selectedAvatar = 'dog';
        this.oppLobbyAvatar = 'cat';
        if (this.inputJoinCode) {
          this.inputJoinCode.value = roomParam.trim().toUpperCase();
        }
        this.goToStep('room-join');
      }
    } catch (e) {
      console.warn('URL param parse error:', e);
    }
  }

  /**
   * 初始化房主線上房間狀態並等待連線
   */
  setupOnlineHostRoom() {
    this.isRoomHost = true;
    this.selectedAvatar = 'cat';
    this.oppLobbyAvatar = 'dog';
    this.myLobbyReady = false;
    this.oppLobbyReady = false;
    this.clearLobbyCountdown();

    this.roomCode = this.roomManager.generateRoomCode();
    if (this.hostRoomCodeDisplay) this.hostRoomCodeDisplay.textContent = this.roomCode;

    const theme = GAME_CONFIG.THEMES[this.selectedStage] || GAME_CONFIG.THEMES.all;
    if (this.hostStageThemeDisplay) {
      this.hostStageThemeDisplay.innerHTML = `🎯 已選定關卡主題：<strong>${theme.icon} ${theme.name}</strong>`;
    }

    if (this.hostConnectionStatus) {
      this.hostConnectionStatus.className = 'room-status-badge waiting';
      this.hostConnectionStatus.textContent = '⏳ 正在等待好友輸入代碼加入...（請將代碼傳給對方）';
    }

    // 啟動房主監聽
    this.roomManager.initHost(this.roomCode, {
      onConnected: () => {
        this.audio.playItemGet();
        if (this.hostConnectionStatus) {
          this.hostConnectionStatus.className = 'room-status-badge connected';
          this.hostConnectionStatus.textContent = '🟢 好友已成功連線！即將進入準備大廳...';
        }

        // 發送初始大廳同步資訊至訪客端
        setTimeout(() => {
          this.roomManager.send({
            type: 'LOBBY_INIT',
            stage: this.selectedStage,
            hostAvatar: this.selectedAvatar,
          });
          this.enterOnlineLobby();
        }, 1000);
      },
      onMessage: (msg) => this.handleLobbyMessage(msg),
      onDisconnected: () => this.handleLobbyPeerDisconnect(),
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
    this.selectedAvatar = 'dog';
    this.oppLobbyAvatar = 'cat';
    this.myLobbyReady = false;
    this.oppLobbyReady = false;
    this.clearLobbyCountdown();

    if (this.btnJoinRoom) {
      this.btnJoinRoom.disabled = true;
      this.btnJoinRoom.textContent = '⏳ 連線搜尋中...';
    }

    if (this.joinConnectionStatus) {
      this.joinConnectionStatus.className = 'room-status-badge waiting';
      this.joinConnectionStatus.textContent = `🔄 正在搜尋並連線至房間【${code}】...`;
      this.joinConnectionStatus.classList.remove('hidden');
    }

    if (this.joinTimeoutTimer) clearTimeout(this.joinTimeoutTimer);
    this.joinTimeoutTimer = setTimeout(() => {
      if (!this.roomManager.isConnected) {
        if (this.btnJoinRoom) {
          this.btnJoinRoom.disabled = false;
          this.btnJoinRoom.textContent = '🚀 連線並加入大廳';
        }
        if (this.joinConnectionStatus) {
          this.joinConnectionStatus.className = 'room-status-badge error';
          this.joinConnectionStatus.textContent = `❌ 無法配對房間【${code}】！請確認房主已在房間中等待，並檢查代碼是否正確。`;
        }
      }
    }, 10000);

    this.roomManager.joinRoom(code, {
      onConnected: () => {
        if (this.joinTimeoutTimer) clearTimeout(this.joinTimeoutTimer);
        this.audio.playItemGet();

        if (this.btnJoinRoom) {
          this.btnJoinRoom.textContent = '✅ 連線成功！';
        }
        if (this.joinConnectionStatus) {
          this.joinConnectionStatus.className = 'room-status-badge connected';
          this.joinConnectionStatus.textContent = `🟢 已成功連線至房主！正在進入準備大廳...`;
        }

        setTimeout(() => {
          this.enterOnlineLobby();
        }, 1000);
      },
      onMessage: (msg) => this.handleLobbyMessage(msg),
      onDisconnected: () => this.handleLobbyPeerDisconnect(),
      onError: (err) => {
        if (this.joinTimeoutTimer) clearTimeout(this.joinTimeoutTimer);
        if (this.btnJoinRoom) {
          this.btnJoinRoom.disabled = false;
          this.btnJoinRoom.textContent = '🚀 連線並加入大廳';
        }
        if (this.joinConnectionStatus) {
          this.joinConnectionStatus.className = 'room-status-badge error';
          this.joinConnectionStatus.textContent = `❌ 連線失敗：${err?.message || '請確認網路狀態後重試'}`;
        }
      },
    });
  }

  /**
   * 進入雙人連線準備大廳
   */
  enterOnlineLobby() {
    this.myLobbyReady = false;
    this.oppLobbyReady = false;
    this.clearLobbyCountdown();

    this.updateLobbyUI();
    this.goToStep('online-lobby');
  }

  /**
   * 更新大廳介面
   */
  updateLobbyUI() {
    const theme = GAME_CONFIG.THEMES[this.selectedStage] || GAME_CONFIG.THEMES.all;
    if (this.lobbyRoomCodeText) this.lobbyRoomCodeText.textContent = this.roomCode;
    if (this.lobbyStageThemeText) this.lobbyStageThemeText.textContent = `${theme.icon} ${theme.name}`;

    // 角色身份標籤
    if (this.lobbyMyRoleBadge) {
      this.lobbyMyRoleBadge.textContent = this.isRoomHost ? '我方玩家 (房主 👑)' : '我方玩家 (訪客 🚀)';
    }
    if (this.lobbyOppRoleBadge) {
      this.lobbyOppRoleBadge.textContent = this.isRoomHost ? '對手玩家 (訪客 🚀)' : '對手玩家 (房主 👑)';
    }

    // 我方形象選擇按鈕
    if (this.lobbyAvatarCat && this.lobbyAvatarDog) {
      this.lobbyAvatarCat.classList.toggle('selected', this.selectedAvatar === 'cat');
      this.lobbyAvatarDog.classList.toggle('selected', this.selectedAvatar === 'dog');

      this.lobbyAvatarCat.disabled = this.myLobbyReady;
      this.lobbyAvatarDog.disabled = this.myLobbyReady;
    }

    // 我方準備按鈕與狀態
    if (this.btnLobbyReady) {
      this.btnLobbyReady.textContent = this.myLobbyReady ? '✖ 取消準備' : '✔ 準備就緒';
      this.btnLobbyReady.classList.toggle('is-ready', this.myLobbyReady);
    }

    if (this.lobbyMyReadyStatus) {
      this.lobbyMyReadyStatus.className = `lobby-status-pill ${this.myLobbyReady ? 'ready' : 'unready'}`;
      this.lobbyMyReadyStatus.textContent = this.myLobbyReady ? '✅ 準備就緒！' : '⏳ 尚未準備';
    }

    // 對手形象顯示
    if (this.lobbyOppAvatar) {
      this.lobbyOppAvatar.textContent = this.oppLobbyAvatar === 'cat' ? '🐱' : '🐶';
    }
    if (this.lobbyOppName) {
      this.lobbyOppName.textContent = this.oppLobbyAvatar === 'cat' ? '貓咪軍團' : '狗狗軍團';
    }

    // 對手準備狀態
    if (this.lobbyOppReadyStatus) {
      this.lobbyOppReadyStatus.className = `lobby-status-pill ${this.oppLobbyReady ? 'ready' : 'unready'}`;
      this.lobbyOppReadyStatus.textContent = this.oppLobbyReady ? '✅ 準備就緒！' : '⏳ 尚未準備';
    }

    if (this.lobbyOppHint) {
      this.lobbyOppHint.textContent = this.oppLobbyReady
        ? '對手已準備完畢，等待開戰！'
        : '等待對方按下準備...';
    }
  }

  /**
   * 切換我方形象 (在準備前可自由切換，自動與對方互斥)
   */
  setMyLobbyAvatar(newAvatar) {
    if (this.myLobbyReady) return;
    this.selectedAvatar = newAvatar;
    this.oppLobbyAvatar = newAvatar === 'cat' ? 'dog' : 'cat';
    this.updateLobbyUI();

    this.roomManager.send({
      type: 'LOBBY_AVATAR_CHANGE',
      avatar: this.selectedAvatar,
    });
  }

  /**
   * 切換我方「準備」狀態
   */
  toggleMyReadyState() {
    this.myLobbyReady = !this.myLobbyReady;
    this.updateLobbyUI();

    this.roomManager.send({
      type: 'LOBBY_READY_CHANGE',
      ready: this.myLobbyReady,
    });

    this.checkBothReadyState();
  }

  /**
   * 檢查雙方是否都已按下準備：若皆準備，啟動 3 秒倒數計時！
   */
  checkBothReadyState() {
    if (this.myLobbyReady && this.oppLobbyReady) {
      this.startLobbyCountdown();
    } else {
      this.clearLobbyCountdown();
    }
  }

  /**
   * 雙人就緒 3 秒倒數
   */
  startLobbyCountdown() {
    if (this.lobbyCountdownTimer) return; // 倒數已在進行中

    let remaining = 3;
    if (this.lobbyCountdownBanner) {
      this.lobbyCountdownBanner.classList.remove('hidden');
    }
    if (this.lobbyCountdownNum) {
      this.lobbyCountdownNum.textContent = remaining;
    }

    this.audio.playCountdown();

    this.lobbyCountdownTimer = setInterval(() => {
      remaining -= 1;
      if (this.lobbyCountdownNum) {
        this.lobbyCountdownNum.textContent = remaining;
      }

      if (remaining > 0) {
        this.audio.playCountdown();
      } else {
        // 倒數結束，開戰！
        this.clearLobbyCountdown();
        this.audio.playStart();
        this.audio.startBGM();
        this.hideMenu();

        this.onStartGame({
          mode: 'online',
          stage: this.selectedStage,
          aiDifficulty: 'normal',
          avatar: this.selectedAvatar,
          roomCode: this.roomCode,
          isHost: this.isRoomHost,
        });
      }
    }, 1000);
  }

  /**
   * 取消倒數
   */
  clearLobbyCountdown() {
    if (this.lobbyCountdownTimer) {
      clearInterval(this.lobbyCountdownTimer);
      this.lobbyCountdownTimer = null;
    }
    if (this.lobbyCountdownBanner) {
      this.lobbyCountdownBanner.classList.add('hidden');
    }
  }

  /**
   * 處理大廳同步網絡訊息
   */
  handleLobbyMessage(msg) {
    if (!msg || !msg.type) return;

    switch (msg.type) {
      case 'LOBBY_INIT': {
        // 訪客收到房主的主題與形象
        if (msg.stage) this.selectedStage = msg.stage;
        if (msg.hostAvatar) {
          this.oppLobbyAvatar = msg.hostAvatar;
          this.selectedAvatar = msg.hostAvatar === 'cat' ? 'dog' : 'cat';
        }
        this.updateLobbyUI();

        // 回覆訪客已確認訊息
        this.roomManager.send({
          type: 'LOBBY_GUEST_ACK',
          guestAvatar: this.selectedAvatar,
        });
        break;
      }

      case 'LOBBY_GUEST_ACK': {
        // 房主收到訪客確認
        if (msg.guestAvatar) {
          this.oppLobbyAvatar = msg.guestAvatar;
        }
        this.updateLobbyUI();
        break;
      }

      case 'LOBBY_AVATAR_CHANGE': {
        // 對方切換形象
        if (msg.avatar) {
          this.oppLobbyAvatar = msg.avatar;
          this.selectedAvatar = msg.avatar === 'cat' ? 'dog' : 'cat';
          this.updateLobbyUI();
        }
        break;
      }

      case 'LOBBY_READY_CHANGE': {
        // 對方切換準備狀態
        this.oppLobbyReady = Boolean(msg.ready);
        this.updateLobbyUI();
        this.checkBothReadyState();
        break;
      }

      case 'LOBBY_LEAVE': {
        // 對手主動離開大廳
        alert('⚠️ 對手已離開房間！即將回到連線選單。');
        this.leaveLobby();
        break;
      }
    }
  }

  /**
   * 處理大廳連線中斷
   */
  handleLobbyPeerDisconnect() {
    this.clearLobbyCountdown();
    this.oppLobbyReady = false;
    this.updateLobbyUI();
  }

  /**
   * 主動離開大廳
   */
  leaveLobby() {
    this.clearLobbyCountdown();
    this.myLobbyReady = false;
    this.oppLobbyReady = false;

    this.roomManager.send({ type: 'LOBBY_LEAVE' });
    this.roomManager.cleanup();

    if (this.isRoomHost) {
      this.goToStep('online-choice');
    } else {
      this.goToStep('online-choice');
    }
  }

  goToStep(stepName) {
    this.stepMode?.classList.add('hidden');
    this.stepOnlineChoice?.classList.add('hidden');
    this.stepStage?.classList.add('hidden');
    this.stepAIDiff?.classList.add('hidden');
    this.stepRoomHost?.classList.add('hidden');
    this.stepRoomJoin?.classList.add('hidden');
    this.stepOnlineLobby?.classList.add('hidden');
    this.stepAvatar?.classList.add('hidden');

    if (stepName === 'mode') this.stepMode?.classList.remove('hidden');
    if (stepName === 'online-choice') this.stepOnlineChoice?.classList.remove('hidden');
    if (stepName === 'stage') this.stepStage?.classList.remove('hidden');
    if (stepName === 'ai-diff') this.stepAIDiff?.classList.remove('hidden');
    if (stepName === 'room-host') this.stepRoomHost?.classList.remove('hidden');
    if (stepName === 'room-join') this.stepRoomJoin?.classList.remove('hidden');
    if (stepName === 'online-lobby') this.stepOnlineLobby?.classList.remove('hidden');
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
   * 純以 50 格地盤佔領總數判定勝負：地盤多者勝 ➔ 平手
   */
  showGameOver({ p1, p2, p1IsCat }) {
    if (!this.gameOverModal) return;

    this.audio.playVictory();

    const winnerIconEl = document.getElementById('result-winner-icon');
    const winnerTitleEl = document.getElementById('result-winner-title');
    const winnerReasonEl = document.getElementById('result-reason');
    const statsDetailEl = document.getElementById('result-stats-detail');

    const p1Count = p1.getTerritoryCount();
    const p2Count = p2.getTerritoryCount();
    const totalContestable = 48; // 總可佔領地盤數

    let winner = null;
    let reasonText = '';

    if (p1Count > p2Count) {
      winner = p1;
      reasonText = `領地稱霸！${p1.faction.name} 奪得 ${p1Count} 塊地盤，贏得最終勝利！`;
    } else if (p2Count > p1Count) {
      winner = p2;
      reasonText = `領地稱霸！${p2.faction.name} 奪得 ${p2Count} 塊地盤，贏得最終勝利！`;
    } else {
      winner = null;
      reasonText = `雙方各佔領 ${p1Count} 塊地盤，勢均力敵，世紀平手！`;
    }

    if (winner) {
      if (winnerIconEl) winnerIconEl.textContent = '👑';
      if (winnerTitleEl) winnerTitleEl.textContent = `🎉 恭喜【${winner.faction.name}】稱霸地盤！`;
    } else {
      if (winnerIconEl) winnerIconEl.textContent = '🤝';
      if (winnerTitleEl) winnerTitleEl.textContent = '🐾 勢均力敵！握手言和！';
    }

    if (winnerReasonEl) winnerReasonEl.textContent = reasonText;

    const p1Percent = Math.round((p1Count / totalContestable) * 100);
    const p2Percent = Math.round((p2Count / totalContestable) * 100);

    if (statsDetailEl) {
      statsDetailEl.innerHTML = `
        <div class="result-player-card">
          <div class="rp-avatar">${p1.faction.avatar}</div>
          <div class="rp-name">${p1.faction.name}</div>
          <div class="rp-count">🚩 佔領地盤：<strong>${p1Count}</strong> / ${totalContestable} 塊</div>
          <div class="rp-score">📊 地盤佔比：<strong>${p1Percent}%</strong></div>
        </div>
        <div class="result-vs">VS</div>
        <div class="result-player-card">
          <div class="rp-avatar">${p2.faction.avatar}</div>
          <div class="rp-name">${p2.faction.name}</div>
          <div class="rp-count">🚩 佔領地盤：<strong>${p2Count}</strong> / ${totalContestable} 塊</div>
          <div class="rp-score">📊 地盤佔比：<strong>${p2Percent}%</strong></div>
        </div>
      `;
    }

    this.gameOverModal.classList.remove('hidden');
  }
}

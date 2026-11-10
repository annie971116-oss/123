/**
 * 雙人房間線上連線與即時同步管理器 (Room Manager)
 * 結合 WebRTC DataChannel (PeerJS) 與 BroadcastChannel (同瀏覽器雙分頁秒連)
 * 實現真正的跨裝置、跨瀏覽器 0 延遲雙人即時對戰同步
 */
export class RoomManager {
  constructor() {
    this.roomCode = '';
    this.isHost = false;
    this.peer = null;
    this.conn = null;
    this.broadcastChannel = null;
    this.isConnected = false;

    this.onMessageCallback = () => {};
    this.onConnectedCallback = () => {};
    this.onDisconnectedCallback = () => {};
    this.onErrorCallback = () => {};

    this.sentMsgIds = new Set();
    this.receivedMsgIds = new Set();
  }

  /**
   * 生成 6 碼可愛英文+數字房間代碼 (例如：CAT839, DOG251, MEW714)
   */
  generateRoomCode() {
    const prefixes = ['CAT', 'DOG', 'PUP', 'MEW', 'FOX', 'BEAR', 'LION', 'PAW'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const digit = Math.floor(Math.random() * 900 + 100);
    this.roomCode = `${prefix}${digit}`;
    return this.roomCode;
  }

  /**
   * 生成專屬邀請連結
   */
  getInviteUrl(code) {
    const origin = window.location.origin;
    const pathname = window.location.pathname;
    return `${origin}${pathname}?room=${code}`;
  }

  /**
   * 複製邀請代碼訊息至剪貼簿
   */
  async copyInviteMessage(code) {
    const inviteUrl = this.getInviteUrl(code);
    const text = `🐾 快來跟我一起玩《貓狗大戰：常識地盤爭奪戰》！\n👉 點擊連結直接加入對戰：${inviteUrl}\n（或在遊戲雙人模式輸入房間代碼：【${code}】）`;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (e) {
      console.warn('Clipboard write failed:', e);
    }
    return false;
  }

  /**
   * 房主 (Host) 創建並等待連線
   */
  initHost(code, { onConnected, onMessage, onDisconnected, onError }) {
    this.cleanup();
    this.roomCode = code.trim().toUpperCase();
    this.isHost = true;
    this.isConnected = false;

    if (onConnected) this.onConnectedCallback = onConnected;
    if (onMessage) this.onMessageCallback = onMessage;
    if (onDisconnected) this.onDisconnectedCallback = onDisconnected;
    if (onError) this.onErrorCallback = onError;

    const cleanCode = this.roomCode.toLowerCase();
    const hostPeerId = `catdog-room-${cleanCode}`;

    // 1. 初始化同瀏覽器 BroadcastChannel (分頁測試或本地雙開 0ms 必連)
    this.initBroadcastChannel(cleanCode);

    // 2. 初始化 PeerJS WebRTC P2P 連線
    if (window.Peer) {
      try {
        this.peer = new window.Peer(hostPeerId, {
          debug: 1,
          config: {
            iceServers: [
              { urls: 'stun:stun.l.google.com:19302' },
              { urls: 'stun:global.stun.twilio.com:3478' }
            ]
          }
        });

        this.peer.on('open', (id) => {
          console.log('[RoomManager] 房主已建立 Peer 節點 ID:', id);
        });

        this.peer.on('connection', (conn) => {
          console.log('[RoomManager] 偵測到訪客連線中...');
          this.conn = conn;
          this.setupDataConnection();
        });

        this.peer.on('error', (err) => {
          console.warn('[RoomManager] PeerJS 錯誤:', err);
          if (err.type === 'unavailable-id') {
            // ID 已被暫時佔用 (例如房主剛剛重新整理)，等待 1 秒後重試
            setTimeout(() => this.initHost(code, { onConnected, onMessage, onDisconnected, onError }), 1000);
          } else {
            this.onErrorCallback(err);
          }
        });
      } catch (e) {
        console.warn('[RoomManager] PeerJS 初始化異常:', e);
      }
    } else {
      console.warn('[RoomManager] 未偵測到 PeerJS 函式庫，將依賴 BroadcastChannel 進行同機分頁連線');
    }
  }

  /**
   * 訪客 (Guest) 主動搜尋並加入指定房間
   */
  joinRoom(code, { onConnected, onMessage, onDisconnected, onError }) {
    this.cleanup();
    this.roomCode = code.trim().toUpperCase();
    this.isHost = false;
    this.isConnected = false;

    if (onConnected) this.onConnectedCallback = onConnected;
    if (onMessage) this.onMessageCallback = onMessage;
    if (onDisconnected) this.onDisconnectedCallback = onDisconnected;
    if (onError) this.onErrorCallback = onError;

    const cleanCode = this.roomCode.toLowerCase();
    const hostPeerId = `catdog-room-${cleanCode}`;
    const guestPeerId = `catdog-guest-${cleanCode}-${Math.random().toString(36).substring(2, 8)}`;

    // 1. 初始化 BroadcastChannel
    this.initBroadcastChannel(cleanCode);

    // 廣播握手探測訊號
    this.send({ type: 'HANDSHAKE_PROBE', role: 'guest', roomCode: this.roomCode });

    // 2. 初始化 PeerJS 連線至房主
    if (window.Peer) {
      try {
        this.peer = new window.Peer(guestPeerId, {
          debug: 1,
          config: {
            iceServers: [
              { urls: 'stun:stun.l.google.com:19302' },
              { urls: 'stun:global.stun.twilio.com:3478' }
            ]
          }
        });

        this.peer.on('open', () => {
          console.log('[RoomManager] 訪客 Peer 節點已建立，正在連線至房主:', hostPeerId);
          this.conn = this.peer.connect(hostPeerId, { reliable: true });
          this.setupDataConnection();
        });

        this.peer.on('error', (err) => {
          console.warn('[RoomManager] 訪客 PeerJS 連線錯誤:', err);
          this.onErrorCallback(err);
        });
      } catch (e) {
        console.warn('[RoomManager] PeerJS 連線異常:', e);
        this.onErrorCallback(e);
      }
    }
  }

  /**
   * 配置 DataConnection (WebRTC 數據通道)
   */
  setupDataConnection() {
    if (!this.conn) return;

    this.conn.on('open', () => {
      console.log('[RoomManager] P2P WebRTC 數據通道已成功開啟！');
      this.handleConnectionSuccess();
      // 發送握手確認
      this.send({ type: 'HANDSHAKE_READY', isHost: this.isHost });
    });

    this.conn.on('data', (data) => {
      this.handleIncomingData(data);
    });

    this.conn.on('close', () => {
      console.log('[RoomManager] P2P 連線已中斷');
      this.isConnected = false;
      this.onDisconnectedCallback();
    });

    this.conn.on('error', (err) => {
      console.warn('[RoomManager] 數據通道錯誤:', err);
      this.onErrorCallback(err);
    });
  }

  /**
   * 配置同瀏覽器分頁通道 (BroadcastChannel)
   */
  initBroadcastChannel(cleanCode) {
    if ('BroadcastChannel' in window) {
      try {
        this.broadcastChannel = new BroadcastChannel(`catdog_room_${cleanCode}`);
        this.broadcastChannel.onmessage = (event) => {
          this.handleIncomingData(event.data);
        };
      } catch (e) {
        console.warn('BroadcastChannel error:', e);
      }
    }
  }

  handleConnectionSuccess() {
    if (this.isConnected) return;
    this.isConnected = true;
    this.onConnectedCallback({ isHost: this.isHost, roomCode: this.roomCode });
  }

  /**
   * 處理收到的同步數據（具備去重機制）
   */
  handleIncomingData(data) {
    if (!data || typeof data !== 'object') return;

    // 訊息去重防重複觸發
    if (data.msgId) {
      if (this.receivedMsgIds.has(data.msgId)) return;
      this.receivedMsgIds.add(data.msgId);
    }

    // 處理內建握手訊號
    if (data.type === 'HANDSHAKE_PROBE') {
      if (this.isHost) {
        this.handleConnectionSuccess();
        this.send({ type: 'HANDSHAKE_ACK', roomCode: this.roomCode });
      }
      return;
    }

    if (data.type === 'HANDSHAKE_ACK' || data.type === 'HANDSHAKE_READY') {
      this.handleConnectionSuccess();
      return;
    }

    // 委派至外部遊戲主循環處理
    this.onMessageCallback(data);
  }

  /**
   * 發送同步數據至對方玩家 (同時透過 WebRTC 與 BroadcastChannel 發送)
   */
  send(payload) {
    const msgId = `${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const fullMsg = { ...payload, msgId, senderIsHost: this.isHost };

    this.sentMsgIds.add(msgId);

    // 1. 透過 WebRTC DataChannel 發送
    if (this.conn && this.conn.open) {
      try {
        this.conn.send(fullMsg);
      } catch (e) {
        console.warn('[RoomManager] WebRTC 發送失敗:', e);
      }
    }

    // 2. 透過 BroadcastChannel 發送
    if (this.broadcastChannel) {
      try {
        this.broadcastChannel.postMessage(fullMsg);
      } catch (e) {
        console.warn('[RoomManager] BroadcastChannel 發送失敗:', e);
      }
    }
  }

  /**
   * 斷開並清理所有連線
   */
  cleanup() {
    if (this.conn) {
      try { this.conn.close(); } catch (e) {}
      this.conn = null;
    }
    if (this.peer) {
      try { this.peer.destroy(); } catch (e) {}
      this.peer = null;
    }
    if (this.broadcastChannel) {
      try { this.broadcastChannel.close(); } catch (e) {}
      this.broadcastChannel = null;
    }
    this.isConnected = false;
  }
}

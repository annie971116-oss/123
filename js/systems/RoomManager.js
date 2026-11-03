/**
 * 雙人房間代碼與連線管理器 (Room Manager)
 * 負責生成 4 碼邀請代碼 (如 CAT8, DOG3)、邀請分享與雙人回合協調
 */
export class RoomManager {
  constructor() {
    this.roomCode = '';
    this.isHost = false;
    this.peer = null;
    this.conn = null;
    this.onPeerMessage = () => {};
  }

  /**
   * 生成 4 位大寫可愛英文數字邀請碼 (例如：CAT6、PUP9、MEOW)
   */
  generateRoomCode() {
    const prefixes = ['CAT', 'DOG', 'PET', 'MEW', 'WOOF', 'PAW'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const digit = Math.floor(Math.random() * 90 + 10);
    this.roomCode = `${prefix}${digit}`.substring(0, 4);
    return this.roomCode;
  }

  /**
   * 複製邀請代碼訊息至剪貼簿
   */
  async copyInviteMessage(code) {
    const text = `🐾 快來跟我一起玩《貓狗大戰：常識地盤爭奪戰》！\n👉 我的專屬房間邀請代碼是：【${code}】\n快輸入代碼加入對戰吧！`;
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
   * 初始化 PeerJS 連線 (可選 P2P WebRTC 協定)
   */
  initPeer(code, isHost, onMessageCallback) {
    this.roomCode = code;
    this.isHost = isHost;
    this.onPeerMessage = onMessageCallback || (() => {});

    // 若瀏覽器已載入 PeerJS
    if (window.Peer) {
      try {
        const peerId = `cat-dog-${code}-${isHost ? 'host' : 'guest'}`;
        this.peer = new window.Peer(peerId);

        if (this.isHost) {
          this.peer.on('connection', (conn) => {
            this.conn = conn;
            this.setupConnection();
          });
        } else {
          const hostId = `cat-dog-${code}-host`;
          this.conn = this.peer.connect(hostId);
          this.setupConnection();
        }
      } catch (err) {
        console.log('PeerJS fallback to hotseat mode:', err);
      }
    }
  }

  setupConnection() {
    if (!this.conn) return;
    this.conn.on('data', (data) => {
      this.onPeerMessage(data);
    });
  }

  sendData(data) {
    if (this.conn && this.conn.open) {
      this.conn.send(data);
    }
  }
}

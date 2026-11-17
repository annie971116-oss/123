/**
 * 貓狗大戰：常識地盤爭奪戰 - 遊戲主循環與 5 分鐘計時器控制器 (GameLoop)
 * 採用精準 Date.now() 與定時器，徹底杜絕瀏覽器 rAF 節流造成的倒計時卡死問題
 */
export class GameLoop {
  constructor({ onTick, onTimeUp, onUpdate, onRender }) {
    this.onTick = onTick || (() => {});
    this.onTimeUp = onTimeUp || (() => {});
    this.onUpdate = onUpdate || (() => {});
    this.onRender = onRender || (() => {});

    this.timerId = null;
    this.running = false;
    this.totalSeconds = 300; // 5 分鐘 = 300 秒
    this.remainingSeconds = 300;
    this.endTime = 0;
  }

  /**
   * 啟動 5 分鐘計時器
   */
  start(totalSeconds = 300) {
    this.stop();
    this.totalSeconds = totalSeconds;
    this.remainingSeconds = totalSeconds;
    this.running = true;
    this.endTime = Date.now() + totalSeconds * 1000;

    // 立即更新一次 UI 顯示
    this.onTick(this.remainingSeconds);

    // 每 250 毫秒高頻檢查真實時間差，保證秒數 100% 精準遞減
    this.timerId = setInterval(() => {
      if (!this.running) return;

      const now = Date.now();
      const secondsLeft = Math.max(0, Math.ceil((this.endTime - now) / 1000));

      if (secondsLeft !== this.remainingSeconds) {
        this.remainingSeconds = secondsLeft;
        this.onTick(this.remainingSeconds);
      }

      if (this.remainingSeconds <= 0) {
        this.stop();
        this.onTimeUp();
      }
    }, 250);
  }

  /**
   * 停止計時器
   */
  stop() {
    this.running = false;
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  /**
   * 暫停計時器
   */
  pause() {
    this.stop();
  }

  /**
   * 恢復計時器
   */
  resume() {
    if (this.running || this.remainingSeconds <= 0) return;
    this.running = true;
    this.endTime = Date.now() + this.remainingSeconds * 1000;

    this.timerId = setInterval(() => {
      if (!this.running) return;

      const now = Date.now();
      const secondsLeft = Math.max(0, Math.ceil((this.endTime - now) / 1000));

      if (secondsLeft !== this.remainingSeconds) {
        this.remainingSeconds = secondsLeft;
        this.onTick(this.remainingSeconds);
      }

      if (this.remainingSeconds <= 0) {
        this.stop();
        this.onTimeUp();
      }
    }, 250);
  }
}

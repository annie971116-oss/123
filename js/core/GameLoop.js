/**
 * 遊戲主循環與 5 分鐘計時器控制器
 */
export class GameLoop {
  constructor({ onTick, onTimeUp, onUpdate, onRender }) {
    this.onTick = onTick || (() => {});
    this.onTimeUp = onTimeUp || (() => {});
    this.onUpdate = onUpdate || (() => {});
    this.onRender = onRender || (() => {});

    this.rafId = null;
    this.running = false;
    this.lastTime = 0;

    this.remainingSeconds = 300; // 5 分鐘
    this.secondAccumulator = 0;
  }

  start(totalSeconds = 300) {
    this.stop();
    this.remainingSeconds = totalSeconds;
    this.secondAccumulator = 0;
    this.running = true;
    this.lastTime = performance.now();

    this.onTick(this.remainingSeconds);
    this.rafId = requestAnimationFrame((t) => this.loop(t));
  }

  stop() {
    this.running = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  pause() {
    this.running = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  resume() {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    this.rafId = requestAnimationFrame((t) => this.loop(t));
  }

  loop(currentTime) {
    if (!this.running) return;

    let dt = (currentTime - this.lastTime) / 1000;
    if (dt > 0.1) dt = 0.1; // 上限防跳躍
    this.lastTime = currentTime;

    // 每秒計時推進
    this.secondAccumulator += dt;
    if (this.secondAccumulator >= 1.0) {
      this.secondAccumulator -= 1.0;
      this.remainingSeconds--;
      this.onTick(Math.max(0, this.remainingSeconds));

      if (this.remainingSeconds <= 0) {
        this.stop();
        this.onTimeUp();
        return;
      }
    }

    this.onUpdate(dt);
    this.onRender();

    this.rafId = requestAnimationFrame((t) => this.loop(t));
  }
}

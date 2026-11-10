/**
 * 地盤格子實體 (Tile Entity)
 * 記錄網格跨距 (colSpan, rowSpan)、分數 (10~100)、題目難度、佔領者、冷卻狀態與限時黃金急迫挑戰狀態
 */
export class Tile {
  constructor({ id, col, row, colSpan = 1, rowSpan = 1, score = 10, difficulty = 1, isBase = false, baseFaction = null }) {
    this.id = id;
    this.col = col;         // 起始行 (0 ~ GRID_COLUMNS - 1)
    this.row = row;         // 起始列 (0 ~ GRID_ROWS - 1)
    this.colSpan = colSpan; // 橫跨欄數
    this.rowSpan = rowSpan; // 縱跨列數
    this.score = isBase ? 0 : score;
    this.baseScore = this.score;

    this.difficulty = difficulty; // 題目難度 (1~5)，重複被佔領會提升
    this.isBase = isBase;         // 是否為基地 (不計分且無法被佔領)
    this.owner = baseFaction ? `base_${baseFaction}` : null; // 'cat' | 'dog' | 'base_cat' | 'base_dog' | null

    this.cooldowns = { cat: 0, dog: 0 }; // 答錯冷卻截止時間戳 (ms)
    this.element = null;                 // DOM 參照

    // 🌟 限時黃金急迫搶答狀態
    this.isGoldenFlash = false;
    this.goldenTimeLeft = 0;

    // ⚔️ 雙人即時爭奪鎖定狀態 ('cat' | 'dog' | null)
    this.contestedBy = null;

    // 💣 炸彈轟炸動畫狀態
    this.isBombExploding = false;
  }

  /**
   * 取得此地盤覆蓋的所有基礎網格座標群
   */
  getOccupiedCells() {
    const cells = [];
    for (let r = this.row; r < this.row + this.rowSpan; r++) {
      for (let c = this.col; c < this.col + this.colSpan; c++) {
        cells.push({ row: r, col: c });
      }
    }
    return cells;
  }

  /**
   * 檢查此地盤是否與指定的網格座標群相鄰（共用邊緣）
   */
  isAdjacentToCells(targetCells) {
    const myCells = this.getOccupiedCells();

    for (const mc of myCells) {
      for (const tc of targetCells) {
        // 上下左右四方向共邊判定 (曼哈頓距離為 1)
        const rowDiff = Math.abs(mc.row - tc.row);
        const colDiff = Math.abs(mc.col - tc.col);
        if ((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1)) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * 檢查指定陣營當前是否處於答錯冷卻中
   */
  isCoolingDown(factionId) {
    return Date.now() < (this.cooldowns[factionId] || 0);
  }

  /**
   * 設定答錯冷卻 (秒)
   */
  setCooldown(factionId, seconds) {
    this.cooldowns[factionId] = Date.now() + seconds * 1000;
  }

  /**
   * 啟用限時黃金急迫挑戰
   */
  setGoldenFlash(seconds = 20) {
    this.isGoldenFlash = true;
    this.goldenTimeLeft = seconds;
  }

  clearGoldenFlash() {
    this.isGoldenFlash = false;
    this.goldenTimeLeft = 0;
  }

  triggerBombExplosion(durationMs = 1200) {
    this.isBombExploding = true;
    setTimeout(() => {
      this.isBombExploding = false;
      if (this.element) {
        this.element.classList.remove('tile-bomb-exploding');
      }
    }, durationMs);
  }

  /**
   * 更新 DOM 視覺樣式
   */
  render(isSelectable = false) {
    if (!this.element) return;

    this.element.className = 'board-tile';
    this.element.style.gridColumn = `${this.col + 1} / span ${this.colSpan}`;
    this.element.style.gridRow = `${this.row + 1} / span ${this.rowSpan}`;

    // 基地特殊標記
    if (this.isBase) {
      this.element.classList.add('tile-base');
      const isCatBase = this.owner === 'base_cat';
      this.element.classList.add(isCatBase ? 'base-cat' : 'base-dog');
      this.element.innerHTML = `
        <div class="tile-content">
          <div class="base-badge">${isCatBase ? '🐱 貓咪總部' : '🐶 狗狗總部'}</div>
          <div class="base-sub">【守護基地・安全區】</div>
        </div>
      `;
      return;
    }

    // 面積大小階梯樣式 (小 / 中 / 大 / 特大)
    const area = this.colSpan * this.rowSpan;
    if (area >= 6) {
      this.element.classList.add('tile-tier-huge');
    } else if (area >= 4) {
      this.element.classList.add('tile-tier-large');
    } else if (area >= 2) {
      this.element.classList.add('tile-tier-medium');
    } else {
      this.element.classList.add('tile-tier-small');
    }

    // 佔領者狀態
    if (this.owner === 'cat') {
      this.element.classList.add('owned-cat');
    } else if (this.owner === 'dog') {
      this.element.classList.add('owned-dog');
    } else {
      this.element.classList.add('owned-neutral');
    }

    // 可進攻高亮引導
    if (isSelectable) {
      this.element.classList.add('tile-selectable');
    }

    // 限時黃金急迫挑戰高亮
    if (this.isGoldenFlash) {
      this.element.classList.add('tile-golden-flash');
    }

    // 爭奪鎖定特效
    if (this.contestedBy) {
      this.element.classList.add('tile-contested');
    }

    // 炸彈轟炸特效
    if (this.isBombExploding) {
      this.element.classList.add('tile-bomb-exploding');
    }

    // 冷卻遮罩檢測
    const now = Date.now();
    const hasCooldown = (this.cooldowns.cat > now) || (this.cooldowns.dog > now);
    if (hasCooldown) {
      this.element.classList.add('tile-cooldown');
    }

    // 難度星號
    const diffStars = '⭐'.repeat(this.difficulty);

    // 內容排版
    let ownerAvatar = '';
    if (this.contestedBy) {
      const isCatContest = this.contestedBy === 'cat';
      ownerAvatar = `<div class="contested-badge pulse">⚔️ ${isCatContest ? '🐱 喵喵搶奪中' : '🐶 汪汪搶奪中'}</div>`;
    } else if (this.owner === 'cat') {
      ownerAvatar = '<div class="owner-avatar bounce">🐱 喵喵已佔領</div>';
    } else if (this.owner === 'dog') {
      ownerAvatar = '<div class="owner-avatar bounce">🐶 汪汪已佔領</div>';
    } else {
      ownerAvatar = '<div class="neutral-flag">🏳️ 點擊佔領</div>';
    }

    // 限時黃金徽章與分數倍數標籤
    let goldenBadgeHtml = '';
    let scoreDisplay = `${this.score} 分`;
    if (this.isGoldenFlash) {
      goldenBadgeHtml = `
        <div class="golden-flash-pill pulse">
          ⚡ 限時 ${this.goldenTimeLeft}s
        </div>
      `;
      scoreDisplay = `🌟 雙倍 ${this.score * 2} 分 + 道具！`;
    }

    this.element.innerHTML = `
      ${goldenBadgeHtml}
      <div class="tile-header">
        <span class="tile-score">${scoreDisplay}</span>
        <span class="tile-diff" title="難度等級 ${this.difficulty}">${diffStars}</span>
      </div>
      <div class="tile-body">
        ${ownerAvatar}
      </div>
    `;
  }
}

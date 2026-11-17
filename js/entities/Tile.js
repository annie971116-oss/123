/**
 * 貓狗大戰：常識地盤爭奪戰 - 地盤格子實體 (Tile Entity)
 * 50 格統一均勻尺寸 (1x1)，記錄網格座標、主題分類、難度星級、佔領者與戰術狀態
 */
export class Tile {
  constructor({
    id,
    tileNumber = 1,
    col,
    row,
    colSpan = 1,
    rowSpan = 1,
    difficulty = 1,
    category = 'life',
    categoryIcon = '🌿',
    categoryName = '生活常識',
    isBase = false,
    baseFaction = null,
  }) {
    this.id = id;
    this.tileNumber = tileNumber;
    this.col = col;         // 欄 (0 ~ 9)
    this.row = row;         // 列 (0 ~ 4)
    this.colSpan = 1;       // 統一尺寸 1x1
    this.rowSpan = 1;       // 統一尺寸 1x1

    this.difficulty = difficulty; // 題目難度 (1~5)
    this.category = category;
    this.categoryIcon = categoryIcon;
    this.categoryName = categoryName;

    this.isBase = isBase;         // 是否為基地 (不計入地盤數且無法被佔領)
    this.owner = baseFaction ? `base_${baseFaction}` : null; // 'cat' | 'dog' | 'base_cat' | 'base_dog' | null

    this.cooldowns = { cat: 0, dog: 0 }; // 答錯冷卻截止時間戳 (ms)
    this.element = null;                 // DOM 參照

    // 🌟 限時黃金急迫搶答狀態 (搶下獎勵強大戰術道具)
    this.isGoldenFlash = false;
    this.goldenTimeLeft = 0;

    // ⚔️ 雙人即時爭奪鎖定狀態 ('cat' | 'dog' | null)
    this.contestedBy = null;

    // 💣 炸彈轟炸動畫狀態
    this.isBombExploding = false;
  }

  /**
   * 取得此地盤單元格座標
   */
  getOccupiedCells() {
    return [{ row: this.row, col: this.col }];
  }

  /**
   * 檢查此地盤是否與目標地盤群相鄰 (上下左右曼哈頓距離 = 1)
   */
  isAdjacentToCells(targetCells) {
    for (const tc of targetCells) {
      const rowDiff = Math.abs(this.row - tc.row);
      const colDiff = Math.abs(this.col - tc.col);
      if ((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1)) {
        return true;
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
    this.element.style.gridColumn = `${this.col + 1}`;
    this.element.style.gridRow = `${this.row + 1}`;

    // 基地特殊標記
    if (this.isBase) {
      this.element.classList.add('tile-base');
      const isCatBase = this.owner === 'base_cat';
      this.element.classList.add(isCatBase ? 'base-cat' : 'base-dog');
      this.element.innerHTML = `
        <div class="tile-content base-content">
          <div class="base-badge">${isCatBase ? '🐱 貓咪總部' : '🐶 狗狗總部'}</div>
          <div class="base-sub">【起點基地・安全區】</div>
        </div>
      `;
      return;
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
      ownerAvatar = `<div class="contested-badge pulse">⚔️ ${isCatContest ? '喵喵搶答中' : '汪汪搶答中'}</div>`;
    } else if (this.owner === 'cat') {
      ownerAvatar = '<div class="owner-avatar bounce">🐱 喵喵地盤</div>';
    } else if (this.owner === 'dog') {
      ownerAvatar = '<div class="owner-avatar bounce">🐶 汪汪地盤</div>';
    } else {
      ownerAvatar = '<div class="neutral-flag">🏳️ 點擊佔領</div>';
    }

    // 限時黃金徽章標籤
    let goldenBadgeHtml = '';
    if (this.isGoldenFlash) {
      goldenBadgeHtml = `
        <div class="golden-flash-pill pulse">
          ⚡ 限時 ${this.goldenTimeLeft}s (獎勵道具)
        </div>
      `;
    }

    this.element.innerHTML = `
      ${goldenBadgeHtml}
      <div class="tile-header">
        <span class="tile-number" title="第 ${this.tileNumber} 號地盤">#${this.tileNumber} <span class="tile-cat-icon">${this.categoryIcon}</span></span>
        <span class="tile-diff" title="難度等級 ${this.difficulty} 星">${diffStars}</span>
      </div>
      <div class="tile-body">
        ${ownerAvatar}
      </div>
    `;
  }
}

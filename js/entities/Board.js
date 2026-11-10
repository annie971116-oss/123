import { GAME_CONFIG } from '../config.js';
import { Tile } from './Tile.js';

/**
 * 棋盤管理器 (Board Entity)
 * 負責生成無縫拼接的異構尺寸地盤 (10~100分，面積大小嚴格對應)
 * 支援拓撲相鄰演算法與兩側隨機基地配置
 */
export class Board {
  constructor(containerElement) {
    this.container = containerElement;
    this.cols = GAME_CONFIG.GRID_COLUMNS; // 12
    this.rows = GAME_CONFIG.GRID_ROWS;    // 8
    this.tiles = [];                      // Tile[]
    this.catBaseTile = null;
    this.dogBaseTile = null;
  }

  /**
   * 生成全新的異構棋盤
   */
  generate() {
    this.tiles = [];
    const occupied = Array.from({ length: this.rows }, () => Array(this.cols).fill(false));

    // 1. 隨機決定兩大基地位置 (確保相距兩端角落)
    const baseCorners = [
      { cat: { r: 0, c: 0 }, dog: { r: this.rows - 2, c: this.cols - 2 } },
      { cat: { r: 0, c: this.cols - 2 }, dog: { r: this.rows - 2, c: 0 } },
      { cat: { r: this.rows - 2, c: 0 }, dog: { r: 0, c: this.cols - 2 } },
      { cat: { r: this.rows - 2, c: this.cols - 2 }, dog: { r: 0, c: 0 } },
    ];
    const chosenCorner = baseCorners[Math.floor(Math.random() * baseCorners.length)];

    // 放置貓咪基地 (2x2)
    this.catBaseTile = new Tile({
      id: 'base_cat',
      col: chosenCorner.cat.c,
      row: chosenCorner.cat.r,
      colSpan: 2,
      rowSpan: 2,
      isBase: true,
      baseFaction: 'cat',
    });
    this.markOccupied(occupied, this.catBaseTile);
    this.tiles.push(this.catBaseTile);

    // 放置狗狗基地 (2x2)
    this.dogBaseTile = new Tile({
      id: 'base_dog',
      col: chosenCorner.dog.c,
      row: chosenCorner.dog.r,
      colSpan: 2,
      rowSpan: 2,
      isBase: true,
      baseFaction: 'dog',
    });
    this.markOccupied(occupied, this.dogBaseTile);
    this.tiles.push(this.dogBaseTile);

    // 2. 依序填入高等級大地盤 (100, 90, 80, 70, 60, 50, 40, 30, 20, 10)
    // 較大面積配置：3x3 (100分), 3x2 / 2x3 (70~90分), 2x2 (50~60分), 2x1 / 1x2 (30~40分), 1x1 (10~20分)
    const templates = [
      { score: 100, colSpan: 3, rowSpan: 3, diff: 5 },
      { score: 90,  colSpan: 3, rowSpan: 2, diff: 5 },
      { score: 80,  colSpan: 2, rowSpan: 3, diff: 4 },
      { score: 70,  colSpan: 3, rowSpan: 2, diff: 4 },
      { score: 60,  colSpan: 2, rowSpan: 2, diff: 3 },
      { score: 60,  colSpan: 2, rowSpan: 2, diff: 3 },
      { score: 50,  colSpan: 2, rowSpan: 2, diff: 3 },
      { score: 50,  colSpan: 2, rowSpan: 2, diff: 3 },
      { score: 40,  colSpan: 2, rowSpan: 1, diff: 2 },
      { score: 40,  colSpan: 1, rowSpan: 2, diff: 2 },
      { score: 40,  colSpan: 2, rowSpan: 1, diff: 2 },
      { score: 30,  colSpan: 2, rowSpan: 1, diff: 2 },
      { score: 30,  colSpan: 1, rowSpan: 2, diff: 2 },
      { score: 30,  colSpan: 2, rowSpan: 1, diff: 2 },
    ];

    let tileIdCounter = 1;

    // 嘗試放置各大地盤
    for (const t of templates) {
      const pos = this.findFreeSpot(occupied, t.colSpan, t.rowSpan);
      if (pos) {
        const tile = new Tile({
          id: `tile_${tileIdCounter++}`,
          col: pos.c,
          row: pos.r,
          colSpan: t.colSpan,
          rowSpan: t.rowSpan,
          score: t.score,
          difficulty: t.diff,
        });
        this.markOccupied(occupied, tile);
        this.tiles.push(tile);
      }
    }

    // 3. 掃描剩餘所有空白單元格，以 2x1, 1x2 或 1x1 完全鋪滿，保證零縫隙
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (!occupied[r][c]) {
          // 嘗試湊 2x1 (30分)
          if (c + 1 < this.cols && !occupied[r][c + 1]) {
            const tile = new Tile({
              id: `tile_${tileIdCounter++}`,
              col: c,
              row: r,
              colSpan: 2,
              rowSpan: 1,
              score: 30,
              difficulty: 2,
            });
            this.markOccupied(occupied, tile);
            this.tiles.push(tile);
          }
          // 嘗試湊 1x2 (30分)
          else if (r + 1 < this.rows && !occupied[r + 1][c]) {
            const tile = new Tile({
              id: `tile_${tileIdCounter++}`,
              col: c,
              row: r,
              colSpan: 1,
              rowSpan: 2,
              score: 30,
              difficulty: 2,
            });
            this.markOccupied(occupied, tile);
            this.tiles.push(tile);
          }
          // 單格 1x1 (10 或 20 分)
          else {
            const score = Math.random() > 0.5 ? 20 : 10;
            const tile = new Tile({
              id: `tile_${tileIdCounter++}`,
              col: c,
              row: r,
              colSpan: 1,
              rowSpan: 1,
              score: score,
              difficulty: 1,
            });
            this.markOccupied(occupied, tile);
            this.tiles.push(tile);
          }
        }
      }
    }
  }

  markOccupied(matrix, tile) {
    for (let r = tile.row; r < tile.row + tile.rowSpan; r++) {
      for (let c = tile.col; c < tile.col + tile.colSpan; c++) {
        matrix[r][c] = true;
      }
    }
  }

  findFreeSpot(matrix, colSpan, rowSpan) {
    const validSpots = [];
    for (let r = 0; r <= this.rows - rowSpan; r++) {
      for (let c = 0; c <= this.cols - colSpan; c++) {
        let fits = true;
        for (let dr = 0; dr < rowSpan; dr++) {
          for (let dc = 0; dc < colSpan; dc++) {
            if (matrix[r + dr][c + dc]) {
              fits = false;
              break;
            }
          }
          if (!fits) break;
        }
        if (fits) {
          validSpots.push({ r, c });
        }
      }
    }
    if (validSpots.length === 0) return null;
    return validSpots[Math.floor(Math.random() * validSpots.length)];
  }

  /**
   * 取得指定陣營當前掌控的所有網格座標 (含基地)
   */
  getFactionControlledCells(factionId) {
    const controlledCells = [];
    const baseOwnerKey = `base_${factionId}`;

    for (const tile of this.tiles) {
      if (tile.owner === factionId || tile.owner === baseOwnerKey) {
        controlledCells.push(...tile.getOccupiedCells());
      }
    }
    return controlledCells;
  }

  /**
   * 取得指定陣營當前「所有可進攻」的地盤清單
   * 規則：非基地、非自身已佔領、未處於冷卻、且與自身地盤相鄰
   */
  getSelectableTiles(factionId) {
    const factionCells = this.getFactionControlledCells(factionId);
    if (factionCells.length === 0) return [];

    return this.tiles.filter((tile) => {
      // 1. 基地不可被佔領
      if (tile.isBase) return false;
      // 2. 不能是自己已經佔領的地盤
      if (tile.owner === factionId) return false;
      // 3. 該陣營是否處於答錯冷卻中
      if (tile.isCoolingDown(factionId)) return false;
      // 4. 是否與自身地盤相鄰共邊
      return tile.isAdjacentToCells(factionCells);
    });
  }

  /**
   * 隨機觸發「限時黃金急迫搶答」地盤
   * 優先挑選中立或相鄰的非基地地盤
   */
  spawnGoldenFlash(durationSeconds = 20) {
    this.clearGoldenFlash();

    const candidates = this.tiles.filter((t) => !t.isBase);
    if (candidates.length === 0) return null;

    const neutrals = candidates.filter((t) => !t.owner);
    const pool = neutrals.length > 0 ? neutrals : candidates;

    const chosen = pool[Math.floor(Math.random() * pool.length)];
    chosen.setGoldenFlash(durationSeconds);
    return chosen;
  }

  getGoldenTile() {
    return this.tiles.find((t) => t.isGoldenFlash) || null;
  }

  clearGoldenFlash() {
    this.tiles.forEach((t) => {
      if (t.isGoldenFlash) t.clearGoldenFlash();
    });
  }

  tickGoldenFlash() {
    const goldenTile = this.getGoldenTile();
    if (!goldenTile) return false;

    goldenTile.goldenTimeLeft -= 1;
    if (goldenTile.goldenTimeLeft <= 0) {
      goldenTile.clearGoldenFlash();
      return true; // 已過期解除
    }
    return false;
  }

  /**
   * 尋找指定對手陣營佔領的分數最高地盤（作為轟炸鎖定目標）
   */
  getHighestOpponentTile(opponentFactionId) {
    const opponentTiles = this.tiles.filter(
      (t) => !t.isBase && t.owner === opponentFactionId
    );
    if (opponentTiles.length === 0) return null;

    opponentTiles.sort((a, b) => b.score - a.score);
    return opponentTiles[0];
  }

  /**
   * 炸毀指定地盤，重置為無主中立地盤並觸發爆破特效
   */
  neutralizeTile(tile) {
    if (!tile || tile.isBase) return false;
    tile.owner = null;
    tile.triggerBombExplosion(1200);
    return true;
  }

  /**
   * 渲染整個棋盤至容器
   */
  render(currentTurnFactionId, onTileClick) {
    if (!this.container) return;
    this.container.innerHTML = '';

    const selectableTiles = this.getSelectableTiles(currentTurnFactionId);
    const selectableSet = new Set(selectableTiles.map((t) => t.id));

    this.tiles.forEach((tile) => {
      const btn = document.createElement('div');
      btn.dataset.id = tile.id;
      tile.element = btn;

      const isSelectable = selectableSet.has(tile.id);
      tile.render(isSelectable);

      btn.addEventListener('click', () => {
        if (isSelectable && onTileClick) {
          onTileClick(tile);
        }
      });

      this.container.appendChild(btn);
    });
  }
}

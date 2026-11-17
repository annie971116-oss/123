import { GAME_CONFIG } from '../config.js';
import { CATEGORIES } from '../data/questions.js';
import { Tile } from './Tile.js';

/**
 * 棋盤管理器 (Board Entity)
 * 負責生成 50 塊均勻尺寸地盤 (10 欄 x 5 列)
 * 支援主題關卡題庫對應、四向拓撲相鄰演算法、黃金地盤與兩端基地配置
 */
export class Board {
  constructor(containerElement) {
    this.container = containerElement;
    this.cols = GAME_CONFIG.GRID_COLUMNS; // 10
    this.rows = GAME_CONFIG.GRID_ROWS;    // 5
    this.totalTiles = GAME_CONFIG.TOTAL_TILES; // 50
    this.tiles = [];                      // Tile[]
    this.catBaseTile = null;
    this.dogBaseTile = null;
    this.currentTheme = 'all';
  }

  /**
   * 設定當前關卡主題
   */
  setTheme(themeId) {
    this.currentTheme = themeId || 'all';
  }

  /**
   * 生成 50 格均勻尺寸全新棋盤
   */
  generate(themeId = null) {
    if (themeId) this.setTheme(themeId);
    this.tiles = [];

    // 兩端角落基地配置方案
    const baseCorners = [
      { cat: { r: 0, c: 0 }, dog: { r: this.rows - 1, c: this.cols - 1 } },
      { cat: { r: 0, c: this.cols - 1 }, dog: { r: this.rows - 1, c: 0 } },
      { cat: { r: this.rows - 1, c: 0 }, dog: { r: 0, c: this.cols - 1 } },
      { cat: { r: this.rows - 1, c: this.cols - 1 }, dog: { r: 0, c: 0 } },
    ];
    const chosenCorner = baseCorners[Math.floor(Math.random() * baseCorners.length)];

    const allCatKeys = ['life', 'nature', 'world', 'anime', 'food'];
    let tileIndexCounter = 1;

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const isCatBase = (r === chosenCorner.cat.r && c === chosenCorner.cat.c);
        const isDogBase = (r === chosenCorner.dog.r && c === chosenCorner.dog.c);

        if (isCatBase) {
          this.catBaseTile = new Tile({
            id: 'base_cat',
            tileNumber: 1,
            col: c,
            row: r,
            isBase: true,
            baseFaction: 'cat',
          });
          this.tiles.push(this.catBaseTile);
        } else if (isDogBase) {
          this.dogBaseTile = new Tile({
            id: 'base_dog',
            tileNumber: 50,
            col: c,
            row: r,
            isBase: true,
            baseFaction: 'dog',
          });
          this.tiles.push(this.dogBaseTile);
        } else {
          // 普通地盤格子：決定所屬主題分類與難度
          let assignedCat = this.currentTheme;
          if (assignedCat === 'all' || !CATEGORIES[assignedCat]) {
            // 綜合關卡：平均分佈五大領域
            assignedCat = allCatKeys[(r * this.cols + c) % allCatKeys.length];
          }

          const catMeta = CATEGORIES[assignedCat] || CATEGORIES.life;
          // 難度星級 1~5 均勻漸進配置
          const diff = ((r + c) % 5) + 1;

          const tile = new Tile({
            id: `tile_${r}_${c}`,
            tileNumber: ++tileIndexCounter,
            col: c,
            row: r,
            difficulty: diff,
            category: assignedCat,
            categoryIcon: catMeta.icon,
            categoryName: catMeta.name,
            isBase: false,
          });

          this.tiles.push(tile);
        }
      }
    }
  }

  /**
   * 取得指定地盤的上下左右四向相鄰地盤
   */
  getAdjacentTiles(tile) {
    const adjacent = [];
    const deltas = [
      { dr: -1, dc: 0 },
      { dr: 1, dc: 0 },
      { dr: 0, dc: -1 },
      { dr: 0, dc: 1 },
    ];

    for (const d of deltas) {
      const nr = tile.row + d.dr;
      const nc = tile.col + d.dc;
      if (nr >= 0 && nr < this.rows && nc >= 0 && nc < this.cols) {
        const found = this.tiles.find((t) => t.row === nr && t.col === nc);
        if (found) adjacent.push(found);
      }
    }

    return adjacent;
  }

  /**
   * 取得指定陣營當前可點擊進攻的所有相鄰合法地盤
   * 條件：
   * 1. 非基地 (isBase !== true)
   * 2. 非己方已佔領之格子 (owner !== factionId)
   * 3. 該陣營當前不在答錯冷卻中 (!isCoolingDown)
   * 4. 拓撲相鄰於任一己方已佔地盤或基地
   */
  getSelectableTiles(factionId) {
    // 找出己方控制的所有單元格
    const myOwnedTiles = this.tiles.filter(
      (t) => t.owner === factionId || t.owner === `base_${factionId}`
    );

    const myOccupiedCells = [];
    for (const mot of myOwnedTiles) {
      myOccupiedCells.push(...mot.getOccupiedCells());
    }

    const selectable = [];

    for (const tile of this.tiles) {
      // 基地不能被佔領
      if (tile.isBase) continue;

      // 已經是自己佔領的地盤不可重複點擊進攻
      if (tile.owner === factionId) continue;

      // 當前陣營若處於答錯冷卻中不可點擊
      if (tile.isCoolingDown(factionId)) continue;

      // 檢查是否與己方勢力範圍相鄰
      if (tile.isAdjacentToCells(myOccupiedCells)) {
        selectable.push(tile);
      }
    }

    return selectable;
  }

  /**
   * 取得限時黃金地盤 (相容舊函式名)
   */
  getGoldenTile() {
    return this.tiles.find((t) => t.isGoldenFlash) || null;
  }

  getGoldenFlashTile() {
    return this.getGoldenTile();
  }

  /**
   * 隨機激活用戶未佔領的中立或對手地盤為黃金急迫挑戰地盤
   */
  spawnGoldenFlash(seconds = 20) {
    const candidates = this.tiles.filter((t) => !t.isBase && !t.isGoldenFlash);
    if (candidates.length === 0) return null;

    const chosen = candidates[Math.floor(Math.random() * candidates.length)];
    chosen.setGoldenFlash(seconds);
    return chosen;
  }

  /**
   * 將地盤重置為無人佔領之中立狀態 (例如被轟炸)
   */
  neutralizeTile(tile) {
    if (!tile || tile.isBase) return;
    tile.owner = null;
    tile.clearGoldenFlash();
    tile.triggerBombExplosion();
  }

  /**
   * 匯出整張棋盤狀態資料 (供 P2P 線上連線同步)
   */
  exportTiles() {
    return this.tiles.map((t) => ({
      id: t.id,
      tileNumber: t.tileNumber,
      col: t.col,
      row: t.row,
      colSpan: t.colSpan,
      rowSpan: t.rowSpan,
      difficulty: t.difficulty,
      category: t.category,
      categoryIcon: t.categoryIcon,
      categoryName: t.categoryName,
      isBase: t.isBase,
      owner: t.owner,
      baseFaction: t.isBase ? (t.owner === 'base_cat' ? 'cat' : 'dog') : null,
      isGoldenFlash: t.isGoldenFlash,
      goldenTimeLeft: t.goldenTimeLeft,
    }));
  }

  /**
   * 匯入線上遠端棋盤結構 (訪客端接收房主資料同步)
   */
  importTiles(exportedTiles) {
    this.tiles = [];
    this.catBaseTile = null;
    this.dogBaseTile = null;

    for (const data of exportedTiles) {
      const tile = new Tile({
        id: data.id,
        tileNumber: data.tileNumber,
        col: data.col,
        row: data.row,
        colSpan: data.colSpan,
        rowSpan: data.rowSpan,
        difficulty: data.difficulty,
        category: data.category,
        categoryIcon: data.categoryIcon,
        categoryName: data.categoryName,
        isBase: data.isBase,
        baseFaction: data.baseFaction,
      });

      tile.owner = data.owner;
      tile.isGoldenFlash = data.isGoldenFlash;
      tile.goldenTimeLeft = data.goldenTimeLeft;

      if (tile.isBase) {
        if (tile.owner === 'base_cat') this.catBaseTile = tile;
        if (tile.owner === 'base_dog') this.dogBaseTile = tile;
      }

      this.tiles.push(tile);
    }
  }
}

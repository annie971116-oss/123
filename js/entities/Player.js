import { GAME_CONFIG } from '../config.js';

/**
 * 玩家陣營實體 (代表貓咪或狗狗玩家之分數、地盤與狀態)
 */
export class Player {
  constructor(factionId) {
    this.faction = GAME_CONFIG.FACTIONS[factionId];
    this.factionId = factionId; // 'cat' | 'dog'
    this.score = 0;
    this.claimedTileIds = new Set();
  }

  reset() {
    this.score = 0;
    this.claimedTileIds.clear();
  }

  addScore(points) {
    this.score += points;
  }

  deductScore(points) {
    this.score = Math.max(0, this.score - points);
  }

  claimTile(tile) {
    this.claimedTileIds.add(tile.id);
    this.addScore(tile.score);
  }

  loseTile(tile) {
    if (this.claimedTileIds.has(tile.id)) {
      this.claimedTileIds.delete(tile.id);
      this.deductScore(tile.score);
    }
  }

  getTerritoryCount() {
    return this.claimedTileIds.size;
  }
}

import { GAME_CONFIG } from '../config.js';

/**
 * 玩家陣營實體 (代表貓咪或狗狗玩家之佔領地盤、戰術道具與狀態)
 * 無分數制度，以 50 格地盤佔領數量作為唯一勝負判定標準
 */
export class Player {
  constructor(factionId) {
    this.faction = GAME_CONFIG.FACTIONS[factionId];
    this.factionId = factionId; // 'cat' | 'dog'
    this.claimedTileIds = new Set();

    // 戰術互動道具欄 (開局各獲贈 1 枚道具，可即時發動攻擊/防禦)
    this.items = {
      freeze: 1, // ❄️ 貓狗定身術 (冰凍對手 10 秒)
      bomb: 1,   // 💣 肉球/骨頭轟炸 (炸毀對手相鄰地盤)
      shield: 1, // 🛡️ 金鐘護盾 (防禦轟炸 & 免疫下一次答錯冷卻)
    };

    // 連勝計數
    this.combo = 0;

    // 狀態計時 (毫秒時間戳)
    this.frozenUntil = 0;
    this.shieldUntil = 0;
    this.feverUntil = 0;
  }

  reset() {
    this.claimedTileIds.clear();
    this.items = { freeze: 1, bomb: 1, shield: 1 };
    this.combo = 0;
    this.frozenUntil = 0;
    this.shieldUntil = 0;
    this.feverUntil = 0;
  }

  claimTile(tile) {
    if (!tile || tile.isBase) return;
    this.claimedTileIds.add(tile.id);
  }

  loseTile(tile) {
    if (!tile) return;
    this.claimedTileIds.delete(tile.id);
  }

  getTerritoryCount() {
    return this.claimedTileIds.size;
  }

  // ================= 戰術道具管理 =================

  addItem(type) {
    if (this.items[type] !== undefined) {
      this.items[type] += 1;
    }
  }

  hasItem(type) {
    return (this.items[type] || 0) > 0;
  }

  useItem(type) {
    if (this.hasItem(type)) {
      this.items[type] -= 1;
      return true;
    }
    return false;
  }

  // ================= 異常狀態管理 (冰凍 / 護盾 / 狂熱) =================

  freeze(seconds = 10) {
    this.frozenUntil = Math.max(this.frozenUntil, Date.now() + seconds * 1000);
  }

  isFrozen() {
    return Date.now() < this.frozenUntil;
  }

  getFrozenSecondsRemaining() {
    if (!this.isFrozen()) return 0;
    return Math.ceil((this.frozenUntil - Date.now()) / 1000);
  }

  shield(seconds = 25) {
    this.shieldUntil = Math.max(this.shieldUntil, Date.now() + seconds * 1000);
  }

  isShielded() {
    return Date.now() < this.shieldUntil;
  }

  consumeShield() {
    this.shieldUntil = 0;
  }

  activateFever(seconds = 15) {
    this.feverUntil = Date.now() + seconds * 1000;
  }

  isFeverActive() {
    return Date.now() < this.feverUntil;
  }

  addCombo() {
    this.combo += 1;
    return this.combo;
  }

  resetCombo() {
    this.combo = 0;
  }
}

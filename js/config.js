/**
 * 貓狗大戰：常識地盤爭奪戰 - 遊戲整體常數與配置
 */
export const GAME_CONFIG = {
  // 遊戲時長：5 分鐘 = 300 秒
  MATCH_DURATION_SECONDS: 300,

  // 答題限時：20 秒
  QUIZ_TIME_LIMIT: 20,

  // 答錯冷卻時間 (秒)
  TILE_COOLDOWN_SECONDS: 15,

  // 答錯扣分比例 (扣除該地盤分數的 50%，至少扣 10 分)
  WRONG_PENALTY_RATIO: 0.5,
  MIN_WRONG_PENALTY: 10,

  // 陣營設定
  FACTIONS: {
    cat: {
      id: 'cat',
      name: '貓咪軍團',
      avatar: '🐱',
      title: '喵喵戰隊',
      primaryColor: '#FF6B8B',
      accentColor: '#FFA3B8',
      lightBg: '#FFF0F4',
      badge: '🎀',
    },
    dog: {
      id: 'dog',
      name: '狗狗軍團',
      avatar: '🐶',
      title: '汪汪戰隊',
      primaryColor: '#3A96FF',
      accentColor: '#78B8FF',
      lightBg: '#F0F6FF',
      badge: '🦴',
    },
  },

  // 棋盤網格設定 (12 欄 x 8 列的基礎網格系統)
  GRID_COLUMNS: 12,
  GRID_ROWS: 8,

  // 分數與格子大小級距對照
  SCORE_TIERS: [
    { score: 10,  colSpan: 1, rowSpan: 1, difficulty: 1 },
    { score: 20,  colSpan: 1, rowSpan: 1, difficulty: 1 },
    { score: 30,  colSpan: 2, rowSpan: 1, difficulty: 2 },
    { score: 40,  colSpan: 1, rowSpan: 2, difficulty: 2 },
    { score: 50,  colSpan: 2, rowSpan: 2, difficulty: 3 },
    { score: 60,  colSpan: 2, rowSpan: 2, difficulty: 3 },
    { score: 70,  colSpan: 3, rowSpan: 2, difficulty: 4 },
    { score: 80,  colSpan: 2, rowSpan: 3, difficulty: 4 },
    { score: 90,  colSpan: 3, rowSpan: 3, difficulty: 5 },
    { score: 100, colSpan: 3, rowSpan: 3, difficulty: 5 },
  ],

  // 電腦 AI 設定
  AI_CONFIG: {
    thinkTimeMin: 4000, // AI 思考間隔 4~8 秒
    thinkTimeMax: 7500,
    // 依題目難度的答對機率
    accuracyByDiff: {
      1: 0.88,
      2: 0.78,
      3: 0.68,
      4: 0.58,
      5: 0.48,
    },
  },
};

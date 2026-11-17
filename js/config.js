/**
 * 貓狗大戰：常識地盤爭奪戰 - 遊戲整體常數與配置
 * 50 格統一尺寸地盤、六大主題關卡、無分數制度 (純地盤爭奪)、5分鐘限時對決
 */
export const GAME_CONFIG = {
  // 遊戲時長：5 分鐘 = 300 秒
  MATCH_DURATION_SECONDS: 300,

  // 答題限時：20 秒
  QUIZ_TIME_LIMIT: 20,

  // 答錯冷卻時間 (秒)
  TILE_COOLDOWN_SECONDS: 15,

  // 棋盤網格設定 (10 欄 x 5 列 = 50 塊均勻尺寸地盤)
  GRID_COLUMNS: 10,
  GRID_ROWS: 5,
  TOTAL_TILES: 50,

  // 關卡主題清單
  THEMES: {
    life: {
      id: 'life',
      name: '生活常識館',
      icon: '🌿',
      subtitle: '居家生活・健康衛生・日常智慧',
      desc: '洗手五步驟、生活智慧、健康養生與居家安全常識！',
      badge: '生活常識',
    },
    nature: {
      id: 'nature',
      name: '自然科學殿堂',
      icon: '🔬',
      subtitle: '可愛動物・宇宙星空・自然奧秘',
      desc: '貓狗趣味習性、神奇大自然、天文行星與生活科學！',
      badge: '自然科學',
    },
    world: {
      id: 'world',
      name: '環遊世界地理',
      icon: '🗺️',
      subtitle: '各國名勝・世界地標・地理風情',
      desc: '世界名勝古蹟、名城地標、各國首都與地理大冒險！',
      badge: '世界地理',
    },
    anime: {
      id: 'anime',
      name: '動漫娛樂小鎮',
      icon: '🎬',
      subtitle: '童話故事・經典動漫・影視角色',
      desc: '經典卡通明星、人氣動漫名作、童話傳說與影視娛樂！',
      badge: '動漫娛樂',
    },
    food: {
      id: 'food',
      name: '吃貨美食天地',
      icon: '🍔',
      subtitle: '美味小吃・甜點飲料・料理文化',
      desc: '夜市必吃小吃、甜點飲品由來、各地佳餚與吃貨指南！',
      badge: '美食文化',
    },
    all: {
      id: 'all',
      name: '全能知識王擂台',
      icon: '👑',
      subtitle: '五大領域跨界綜合大考驗',
      desc: '全方位匯集所有主題題庫，隨機快問快答決戰知識王！',
      badge: '全能綜合',
    },
  },

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

  // 電腦強度三段配置 (純以地盤佔領擴張與進攻為核心)
  AI_DIFFICULTIES: {
    easy: {
      id: 'easy',
      name: '🟢 呆萌幼幼 (簡單)',
      desc: '思考悠閒 (7~11秒)，常有小失誤，適合新手或休閒放鬆遊玩',
      thinkTimeMin: 7000,
      thinkTimeMax: 11000,
      accuracyByDiff: {
        1: 0.60,
        2: 0.45,
        3: 0.35,
        4: 0.25,
        5: 0.18,
      },
      stealAggression: 0.2,
    },
    normal: {
      id: 'normal',
      name: '🟡 活潑寵物 (普通)',
      desc: '攻防節奏適中 (4.5~7.5秒)，標準智慧對抗，推薦一般挑戰',
      thinkTimeMin: 4500,
      thinkTimeMax: 7500,
      accuracyByDiff: {
        1: 0.85,
        2: 0.75,
        3: 0.65,
        4: 0.55,
        5: 0.45,
      },
      stealAggression: 0.5,
    },
    hard: {
      id: 'hard',
      name: '🔴 戰神霸王 (困難)',
      desc: '極速決策 (2~4秒)、答題神準！專門搶奪相鄰地盤並封鎖前進路線！',
      thinkTimeMin: 2200,
      thinkTimeMax: 4200,
      accuracyByDiff: {
        1: 0.98,
        2: 0.92,
        3: 0.85,
        4: 0.78,
        5: 0.70,
      },
      stealAggression: 0.85,
    },
  },
};

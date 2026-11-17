/**
 * 貓狗大戰：常識地盤爭奪戰 - 主題分類題庫系統 (Question Bank)
 * 涵蓋五大主題：🌿 生活常識、🔬 自然科學、🗺️ 世界地理、🎬 動漫娛樂、🍔 吃貨美食
 * 每個主題各 50 題 (難度 1~5 各 10 題)，共 250 道正宗知識王風格趣味題目！
 * 選項長度嚴格平衡、杜絕提示與括號破綻，支援主題關卡過濾與隨機洗牌！
 */

export const CATEGORIES = {
  life: {
    id: 'life',
    name: '生活常識',
    icon: '🌿',
    themeName: '生活常識館',
    description: '日常生活實用小常識、健康衛生與居家生活智慧',
  },
  nature: {
    id: 'nature',
    name: '自然科學',
    icon: '🔬',
    themeName: '自然科學殿堂',
    description: '動物習性、神奇大自然、天文宇宙與生活科學奧秘',
  },
  world: {
    id: 'world',
    name: '世界地理',
    icon: '🗺️',
    themeName: '環遊世界地理',
    description: '世界名勝古蹟、名城地標與各國地理文化大百科',
  },
  anime: {
    id: 'anime',
    name: '動漫娛樂',
    icon: '🎬',
    themeName: '動漫娛樂小鎮',
    description: '經典卡通明星、人氣動漫角色、童話故事與影視世界',
  },
  food: {
    id: 'food',
    name: '吃貨美食',
    icon: '🍔',
    themeName: '吃貨美食天地',
    description: '夜市必吃小吃、各地美味佳餚、甜點飲料與料理文化',
  },
};

export const QUESTIONS = [
  {
    "id": "q_life_1_1",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "一副標準撲克牌在不計算鬼牌的情況下，總共有幾張牌？",
    "options": [
      "52張",
      "48張",
      "54張",
      "50張"
    ],
    "answerIndex": 0,
    "explanation": "撲克牌共有四種花色各 13 張，合計 52 張。"
  },
  {
    "id": "q_life_1_2",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "一年當中有幾個月只有 28 或 29 天，是天數最少的月份？",
    "options": [
      "四月",
      "六月",
      "一月",
      "二月"
    ],
    "answerIndex": 3,
    "explanation": "二月平年有 28 天，閏年則有 29 天。"
  },
  {
    "id": "q_life_1_3",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "交通號誌中的「紅綠燈」，當哪一種顏色的燈亮起時代表車輛必須停止？",
    "options": [
      "紅燈",
      "黃燈",
      "綠燈",
      "藍燈"
    ],
    "answerIndex": 0,
    "explanation": "紅燈停、綠燈行，黃燈則為注意警告訊號。"
  },
  {
    "id": "q_life_1_4",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "人類的恆齒排列中，正常健康成年人包含智齒最多可擁有幾顆牙齒？",
    "options": [
      "36顆",
      "28顆",
      "24顆",
      "32顆"
    ],
    "answerIndex": 3,
    "explanation": "成年人乳牙換完後正常恆齒為 28 至 32 顆。"
  },
  {
    "id": "q_life_1_5",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "在足球正規比賽中，場上除了哪一個位置的球員外，其餘皆不得用手觸球？",
    "options": [
      "前鋒",
      "後衛",
      "守門員",
      "中場"
    ],
    "answerIndex": 2,
    "explanation": "只有禁區內的守門員可以用雙手撲擋或接球。"
  },
  {
    "id": "q_life_1_6",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "知名速食店「麥當勞」招牌標誌是由哪一個黃色英文字母構成的？",
    "options": [
      "M",
      "N",
      "W",
      "U"
    ],
    "answerIndex": 0,
    "explanation": "麥當勞以創始兄弟的名字命名，招牌是經典金色雙拱門 M。"
  },
  {
    "id": "q_life_1_7",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "哪種常見寵物犬以短短的腿、圓滾滾的桃子屁股而受到大眾喜愛？",
    "options": [
      "哈士奇",
      "柯基犬",
      "吉娃娃",
      "柴犬"
    ],
    "answerIndex": 1,
    "explanation": "柯基犬短腿與大屁股是牠最招牌可愛的標誌特徵。"
  },
  {
    "id": "q_life_1_8",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "在樂譜基本音階中，Do、Re、Mi、Fa、Sol、La 之後的第七個音符是？",
    "options": [
      "Ro",
      "Si",
      "Ma",
      "Di"
    ],
    "answerIndex": 1,
    "explanation": "自然大調的唱名順序為 Do、Re、Mi、Fa、Sol、La、Si。"
  },
  {
    "id": "q_life_1_9",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "撲克牌四種經典花色黑桃、紅心、方塊、梅花中，屬於紅色花色的是？",
    "options": [
      "黑桃紅心",
      "紅心方塊",
      "方塊梅花",
      "黑桃梅花"
    ],
    "answerIndex": 1,
    "explanation": "標準撲克中紅心與方塊為紅色，黑桃與梅花為黑色。"
  },
  {
    "id": "q_life_1_10",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "一般腳踏車（自行車）在正常構造下，總共安裝了幾個輪子？",
    "options": [
      "3個",
      "4個",
      "2個",
      "1個"
    ],
    "answerIndex": 2,
    "explanation": "標準自行車有前後兩個充氣橡膠車輪。"
  },
  {
    "id": "q_life_2_1",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "長頸鹿身材高大，牠在野外平時睡覺主要是採用哪一種姿勢？",
    "options": [
      "站著睡",
      "倒立睡",
      "躺著睡",
      "趴著睡"
    ],
    "answerIndex": 0,
    "explanation": "為隨時警惕獅子等掠食者襲擊，長頸鹿多半每次站立打盹數分鐘。"
  },
  {
    "id": "q_life_2_2",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "一般公認棒球正規九局比賽中，每一局攻守交替時需要拿下幾個出局數？",
    "options": [
      "5個",
      "3個",
      "4個",
      "2個"
    ],
    "answerIndex": 1,
    "explanation": "棒球每一半局進攻方被造成 3 個出局數時即換邊攻守。"
  },
  {
    "id": "q_life_2_3",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "被譽為「音樂神童」，35 歲短暫一生創作無數交響曲的奧地利音樂大師是？",
    "options": [
      "莫札特",
      "貝多芬",
      "蕭邦",
      "巴哈"
    ],
    "answerIndex": 0,
    "explanation": "莫札特自幼展現驚人音樂天賦，為維也納古典樂派傑出代表。"
  },
  {
    "id": "q_life_2_4",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "哪座歷史悠久的古老文明遺址擁有雄偉的古羅馬競技場？",
    "options": [
      "義大利羅馬",
      "埃及開羅",
      "法國巴黎",
      "希臘雅典"
    ],
    "answerIndex": 0,
    "explanation": "古羅馬競技場坐落在義大利羅馬市中心，曾是鬥獸角鬥場所。"
  },
  {
    "id": "q_life_2_5",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "知名經典桌遊「大富翁」（地產大亨）中，玩家如果走到了「監獄」格需要如何？",
    "options": [
      "遊戲結束",
      "直接獲勝",
      "暫時停留",
      "沒收財產"
    ],
    "answerIndex": 2,
    "explanation": "進入監獄格須停留或擲出雙骰同點數方可出獄。"
  },
  {
    "id": "q_life_2_6",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "知名益智玩具「魔術方塊」（魯比克方塊）標準六面體總共有幾種不同顏色？",
    "options": [
      "6色",
      "10色",
      "8色",
      "4色"
    ],
    "answerIndex": 0,
    "explanation": "標準三階魔方六個表面分別有白、黃、紅、橘、藍、綠六種顏色。"
  },
  {
    "id": "q_life_2_7",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "在台灣若遇到需要緊急火警或需要救護車救援時，應該撥打哪一組緊急電話？",
    "options": [
      "119救護專線",
      "110報警專線",
      "113保護專線",
      "165反詐專線"
    ],
    "answerIndex": 0,
    "explanation": "台灣遇到火警或緊急醫療救護時應撥打 119，警察報案則是撥打 110。"
  },
  {
    "id": "q_life_2_8",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "端午節民間傳統習俗中，據說在正中午若能將什麼立起來就會帶來整年好運？",
    "options": [
      "圓滾滾生雞蛋",
      "長長直立竹筷",
      "大大的西瓜瓜",
      "新鮮的硬硬幣"
    ],
    "answerIndex": 0,
    "explanation": "端午節正午陽氣最盛，民間盛行正午「立蛋」祈求開運帶來好彩頭。"
  },
  {
    "id": "q_life_2_9",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "日常生活使用微波爐加熱食物時，下列哪一種材質的容器絕對不能放入微波？",
    "options": [
      "金屬鐵鋁器皿",
      "專用耐熱玻璃",
      "微波專用塑膠",
      "純白耐熱瓷盤"
    ],
    "answerIndex": 0,
    "explanation": "金屬會反射微波並產生強烈電弧火花，極易引發微波爐損壞或火災危險。"
  },
  {
    "id": "q_life_2_10",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "操作滅火器時常見的標準四字操作口訣中，第一個步驟「拉」是指拉開什麼？",
    "options": [
      "安全插銷保險",
      "噴水長長水管",
      "握把開關閥門",
      "底座固定支架"
    ],
    "answerIndex": 0,
    "explanation": "滅火器使用口訣為「拉（插銷）、瞄（火源）、壓（把柄）、掃（根部）」。"
  },
  {
    "id": "q_life_3_1",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "我們在日常生活中看見天空中千變萬化的白雲，其本質主要由什麼聚集而成？",
    "options": [
      "純棉纖維",
      "微小水滴",
      "乾冰碎屑",
      "燃燒白煙"
    ],
    "answerIndex": 1,
    "explanation": "雲是地表水蒸氣上升遇冷凝結成微小水滴或冰晶的集合體。"
  },
  {
    "id": "q_life_3_2",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "在西洋神話中，掌管大海掀起驚濤駭浪的海神波塞頓，手中拿著什麼武器？",
    "options": [
      "黃金弓箭",
      "三叉戟",
      "烈火雙刃",
      "神聖權杖"
    ],
    "answerIndex": 1,
    "explanation": "波塞頓手握象徵海洋霸權的三叉戟，能平息或掀起海嘯海浪。"
  },
  {
    "id": "q_life_3_3",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "日常生活中如果將食用小蘇打粉與酸性食用白醋混合，會快速產生什麼氣體氣泡？",
    "options": [
      "純淨氧氣",
      "可燃氫氣",
      "二氧化碳",
      "無色氯氣"
    ],
    "answerIndex": 2,
    "explanation": "碳酸氫鈉與醋酸酸鹼中和產生大量二氧化碳氣體泡沫。"
  },
  {
    "id": "q_life_3_4",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "日常煮飯炒菜使用的金屬鍋具中，導熱速度最快最均勻的常見金屬材料是？",
    "options": [
      "不鏽鋼",
      "紅銅",
      "鉛金屬",
      "純生鐵"
    ],
    "answerIndex": 1,
    "explanation": "銅的導熱係數遠優於鐵與不鏽鋼，高級西餐廚師偏好銅鍋控溫。"
  },
  {
    "id": "q_life_3_5",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "知名經典格鬥遊戲《快打旋風》中，主角隆與肯所使用的招牌招式「波動拳」日文發音是？",
    "options": [
      "昇龍拳",
      "旋風腿",
      "瞬獄殺",
      "波動拳"
    ],
    "answerIndex": 3,
    "explanation": "波動拳的招牌出招音效「Hadoken」是遊戲史上最經典音效之一。"
  },
  {
    "id": "q_life_3_6",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "日常生活中的「乾冰」，在常溫常壓下會直接從固態昇華為哪種無色氣體？",
    "options": [
      "一氧化碳",
      "水蒸氣體",
      "純氧氣體",
      "二氧化碳"
    ],
    "answerIndex": 3,
    "explanation": "乾冰是攝氏零下 78.5 度的固態二氧化碳，吸熱直接昇華成氣體。"
  },
  {
    "id": "q_life_3_7",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "古希臘神話中有一面看透未來的魔法盾牌，傳說美杜莎的頭顱長滿了什麼？",
    "options": [
      "野獸獠牙",
      "利刃鋼刀",
      "劇毒活蛇",
      "金色長髮"
    ],
    "answerIndex": 2,
    "explanation": "蛇髮女妖美杜莎滿頭活蛇，直視其雙眼的人都會立即化為石頭。"
  },
  {
    "id": "q_life_3_8",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "日常生活遇到輕微燙傷時，衛福部宣導的正確急救五步驟口訣順序為何？",
    "options": [
      "沖脫泡蓋送醫",
      "泡沖脫送蓋醫",
      "脫沖泡蓋送醫",
      "送沖脫泡蓋醫"
    ],
    "answerIndex": 0,
    "explanation": "燙傷急救五字訣為「沖、脫、泡、蓋、送」，先以流動冷水沖洗降溫。"
  },
  {
    "id": "q_life_3_9",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "在進行心肺復甦術與AED急救時，一般成人胸外按壓的適當深度大約為多少？",
    "options": [
      "約 2 至 3 公分",
      "約 5 至 6 公分",
      "約 8 至 9 公分",
      "約 1 至 2 公分"
    ],
    "answerIndex": 1,
    "explanation": "成人 CPR 胸外按壓深度應維持在 5 至 6 公分，並確保胸壁完全回彈。"
  },
  {
    "id": "q_life_3_10",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "市售保溫瓶通常建議採用哪一種編號的食用級不鏽鋼材質，具備優良抗腐蝕性？",
    "options": [
      "304號不鏽鋼",
      "430號不鏽鋼",
      "201號不鏽鋼",
      "502號不鏽鋼"
    ],
    "answerIndex": 0,
    "explanation": "304 不鏽鋼（含 18% 鉻與 8% 鎳）具優良耐腐蝕性，為常見食品級容器。"
  },
  {
    "id": "q_life_4_1",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "撲克牌四張代表年輕衛士的英文字母「J」，其英文原意代表的身分通常是？",
    "options": [
      "大宰相",
      "大祭司",
      "大法官",
      "侍從騎士"
    ],
    "answerIndex": 3,
    "explanation": "J 代表 Jack 或 Knave，意為皇家侍衛軍士或貴族侍從。"
  },
  {
    "id": "q_life_4_2",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "在正常大氣條件下，聲音在下列哪一種介質中的傳播速度最快？",
    "options": [
      "乾燥空氣",
      "純淨水流",
      "鋼鐵金屬",
      "深空真空"
    ],
    "answerIndex": 2,
    "explanation": "固體分子間距最小傳導振動最快，聲音在鋼鐵中秒速超過 5000 公尺。"
  },
  {
    "id": "q_life_4_3",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "撲克牌四張老K中，代表古代統帥羅馬終身獨裁官的是哪一張花色？",
    "options": [
      "方塊K",
      "梅花K",
      "紅心K",
      "黑桃K"
    ],
    "answerIndex": 0,
    "explanation": "方塊 K 代表古羅馬著名軍事家與統治者尤利烏斯·凱撒大帝。"
  },
  {
    "id": "q_life_4_4",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "世界著名長篇古典交響曲《命運交響曲》（第五號交響曲）是哪位音樂巨匠的心血？",
    "options": [
      "舒伯特",
      "莫札特",
      "李斯特",
      "貝多芬"
    ],
    "answerIndex": 3,
    "explanation": "路德維希·范·貝多芬以震撼的「短短短長」動機叩響命運之門。"
  },
  {
    "id": "q_life_4_5",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "古希臘名醫希波克拉底被尊稱為醫學之父，醫生就職時宣讀的崇高誓詞稱為？",
    "options": [
      "希波克拉底誓詞",
      "南丁格爾誓約",
      "諾貝爾醫學宣誓",
      "日內瓦條約宣言"
    ],
    "answerIndex": 0,
    "explanation": "醫學生畢業步入臨床時必須莊嚴宣讀《希波克拉底誓詞》。"
  },
  {
    "id": "q_life_4_6",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "哪座以白色大理石建造的美麗噴泉，遊客常背對它投擲硬幣祈願重返羅馬？",
    "options": [
      "日內瓦大噴泉",
      "凡爾賽鏡宮噴泉",
      "巴塞隆納魔幻噴泉",
      "特萊維許願池"
    ],
    "answerIndex": 3,
    "explanation": "羅馬特萊維噴泉傳說用右手越過左肩向池中投擲硬幣就能重回羅馬。"
  },
  {
    "id": "q_life_4_7",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "哪種具有強效保護力的人體天然體液，具有溶菌酶能保護眼角膜不受細菌感染？",
    "options": [
      "皮膚汗液",
      "眼淚淚液",
      "鼻腔黏液",
      "口腔唾液"
    ],
    "answerIndex": 1,
    "explanation": "眼淚中富含溶菌酶與抗體，能濕潤並抑制落在角膜上的細菌病原。"
  },
  {
    "id": "q_life_4_8",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "遇到地震劇烈搖晃時，內政部消防署宣導的最標準就地避難三步驟口訣為何？",
    "options": [
      "趴下掩護穩住",
      "快跑逃出大門",
      "蹲下抱頭尖叫",
      "閉眼縮成一團"
    ],
    "answerIndex": 0,
    "explanation": "地震保命三步驟為「趴下（Drop）、掩護（Cover）、穩住（Hold on）」。"
  },
  {
    "id": "q_life_4_9",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "日常生活中常見的塑膠三角回收標誌中，哪一個編號代表耐熱佳的聚丙烯（PP）？",
    "options": [
      "1號塑膠標誌",
      "2號塑膠標誌",
      "5號塑膠標誌",
      "7號塑膠標誌"
    ],
    "answerIndex": 2,
    "explanation": "5 號塑膠為聚丙烯（PP），耐熱溫度可達 100~140℃，常用於微波保鮮盒。"
  },
  {
    "id": "q_life_4_10",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "居家使用除濕機改善環境潮濕時，人體感覺最舒適且不易滋生塵蟎的相對濕度約為？",
    "options": [
      "30%至40%",
      "50%至60%",
      "70%至80%",
      "85%至95%"
    ],
    "answerIndex": 1,
    "explanation": "人體最舒適且不易滋生黴菌與塵蟎的室內相對濕度約在 50% 至 60% 之間。"
  },
  {
    "id": "q_life_5_1",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "成語「濫竽充數」中，那位完全不會吹竽卻混在齊宣王樂隊中冒領俸祿的人是誰？",
    "options": [
      "南郭先生",
      "北郭先生",
      "東郭先生",
      "西郭先生"
    ],
    "answerIndex": 0,
    "explanation": "南郭先生在齊宣王死後因齊湣王喜好單獨吹奏而心虛連夜逃跑。"
  },
  {
    "id": "q_life_5_2",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "被譽為「數學界的無冕之王」，諾貝爾獎項中「沒有」設立數學獎，數學界最高榮譽是？",
    "options": [
      "圖靈計算獎",
      "奧斯卡獎",
      "普立茲獎",
      "菲爾茲獎"
    ],
    "answerIndex": 3,
    "explanation": "菲爾茲獎每四年頒發一次給 40 歲以下傑出數學家，被譽為數學界諾貝爾獎。"
  },
  {
    "id": "q_life_5_3",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "哪座中東世界名城被猶太教、基督教與伊斯蘭教三大一神宗教同時尊為無上聖城？",
    "options": [
      "麥地那",
      "麥加",
      "大馬士革",
      "耶路撒冷"
    ],
    "answerIndex": 3,
    "explanation": "耶路撒冷擁有圓頂清真寺、哭牆與聖墓教堂，歷史滄桑地位尊崇。"
  },
  {
    "id": "q_life_5_4",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "哪座古希臘帕德嫩神廟建築坐落衛城山丘之上，是供奉哪一位智慧與戰爭女神？",
    "options": [
      "阿提米絲",
      "雅典娜女神",
      "赫拉天后",
      "阿芙蘿黛蒂"
    ],
    "answerIndex": 1,
    "explanation": "雅典娜是雅典城的守護神，帕德嫩神廟曾供奉十二公尺高的象牙金雕像。"
  },
  {
    "id": "q_life_5_5",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "愛因斯坦提出的著名狹義相對論質能互換公式「E = mc²」中，字母「c」代表？",
    "options": [
      "普朗克常數",
      "真空中光速",
      "電容器電容",
      "攝氏度刻度"
    ],
    "answerIndex": 1,
    "explanation": "c 代表拉丁文 celeritas（光速），真空中速度約為每秒 30 萬公里。"
  },
  {
    "id": "q_life_5_6",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "成語「洛陽紙貴」原意是指哪位西晉著名文學家耗時十年寫成《三都賦》引起轟動？",
    "options": [
      "左思",
      "潘安",
      "曹植",
      "陸機"
    ],
    "answerIndex": 0,
    "explanation": "左思撰寫《三都賦》詞采華茂，豪富人家競相傳抄導致洛陽紙張價格暴漲。"
  },
  {
    "id": "q_life_5_7",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "人體內分泌系統中，位於大腦底部、被譽為人體激素總指揮官的內分泌腺體是？",
    "options": [
      "胸腺淋巴腺",
      "腎上腺腺體",
      "腦下垂體腺",
      "甲狀腺腺體"
    ],
    "answerIndex": 2,
    "explanation": "腦下垂體分泌生長激素、促甲狀腺素等多種激素調控全身內分泌腺。"
  },
  {
    "id": "q_life_5_8",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "成語「臨渴掘井」比喻平時不作準備事到臨頭才慌亂應付，道理與下列哪句成語最為相近？",
    "options": [
      "臨陣磨槍",
      "江郎才盡",
      "邯鄲學步",
      "買櫝還珠"
    ],
    "answerIndex": 0,
    "explanation": "臨陣磨槍指上了戰場才磨槍頭，與口渴才挖井同喻平時缺乏長遠準備。"
  },
  {
    "id": "q_life_5_9",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "發現瓦斯漏氣並聞到瓦斯臭味時，下列哪一項是絕對不可執行的危險動作？",
    "options": [
      "開啟抽油煙機",
      "緩慢推開窗戶",
      "關閉瓦斯閥門",
      "輕步離開現場"
    ],
    "answerIndex": 0,
    "explanation": "開啟排油煙機或電器開關可能產生微小電火花，極易瞬間引燃瓦斯爆炸。"
  },
  {
    "id": "q_life_5_10",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "在海邊戲水若不幸遇到會將人迅速帶離海岸的「離岸流」時，應如何游回岸邊？",
    "options": [
      "平行海岸側游",
      "迎面逆流直游",
      "垂直下潛海底",
      "原處放鬆沈底"
    ],
    "answerIndex": 0,
    "explanation": "離岸流寬度通常不寬，應保持冷靜向兩側「平行海岸側游」脫離強流區。"
  },
  {
    "id": "q_nature_1_1",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "貓咪在感到十分安心放鬆、心情愉快時，喉嚨通常會發出什麼聲音？",
    "options": [
      "汪汪聲",
      "咕嚕聲",
      "呼嚕聲",
      "嘶嘶聲"
    ],
    "answerIndex": 2,
    "explanation": "貓咪在放鬆舒適時會振動假聲帶發出呼嚕聲。"
  },
  {
    "id": "q_nature_1_2",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "天空雨過天晴後出現的彩虹，傳統上被認為由幾種顏色組成？",
    "options": [
      "7種",
      "6種",
      "8種",
      "5種"
    ],
    "answerIndex": 0,
    "explanation": "彩虹光譜傳統上劃分為紅橙黃綠藍靛紫七色。"
  },
  {
    "id": "q_nature_1_3",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "世界上現存體型最大、重量最重的大型哺乳動物是哪一種？",
    "options": [
      "大象",
      "藍鯨",
      "抹香鯨",
      "長頸鹿"
    ],
    "answerIndex": 1,
    "explanation": "藍鯨是地球有史以來已知體型最大的動物。"
  },
  {
    "id": "q_nature_1_4",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "俗話說「黑白配，男生女生配」，大熊貓身上的毛色主要由哪兩種組成？",
    "options": [
      "灰白",
      "紅白",
      "黑白",
      "黑黃"
    ],
    "answerIndex": 2,
    "explanation": "大熊貓最鮮明的特色就是黑白相間的毛色。"
  },
  {
    "id": "q_nature_1_5",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "常溫常壓下，乾淨純淨的冰塊在加熱融化後會轉變成什麼液體？",
    "options": [
      "酒精",
      "水滴",
      "醋酸",
      "糖漿"
    ],
    "answerIndex": 1,
    "explanation": "冰是水的固態形式，溫度高於攝氏零度便融化成水。"
  },
  {
    "id": "q_nature_1_6",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "俗稱「百獸之王」，雄性頭部長有威武濃密鬃毛的貓科動物是哪一種？",
    "options": [
      "非洲獅",
      "美洲豹",
      "花豹",
      "孟加拉虎"
    ],
    "answerIndex": 0,
    "explanation": "雄獅擁有濃密雄偉的鬃毛，是草原上的群居霸主。"
  },
  {
    "id": "q_nature_1_7",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "我們平時所說的一天 24 小時，是地球圍繞著什麼進行自轉一周的時間？",
    "options": [
      "自己地軸",
      "太陽",
      "月球",
      "北極星"
    ],
    "answerIndex": 0,
    "explanation": "地球繞著自身的傾斜地軸自轉一圈即為一個晝夜。"
  },
  {
    "id": "q_nature_1_8",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "下列哪種動物是公認的「陸地上奔跑速度最快」的短跑健將？",
    "options": [
      "非洲獵豹",
      "斑馬駿馬",
      "非洲大象",
      "羚羊羚牛"
    ],
    "answerIndex": 0,
    "explanation": "獵豹瞬間加速時速可達每小時 100 公里以上。"
  },
  {
    "id": "q_nature_1_9",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "哪種鳥類擁有色彩斑斕的美麗大尾羽，求偶時會展開成一把巨大扇子？",
    "options": [
      "孔雀",
      "紅鶴",
      "鸚鵡",
      "天鵝"
    ],
    "answerIndex": 0,
    "explanation": "雄孔雀求偶時展開絢爛的尾上覆羽，即為孔雀開屏。"
  },
  {
    "id": "q_nature_1_10",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "人體感覺器官中，主要負責接收外界聲音震動並轉換為聽覺的是？",
    "options": [
      "雙眼",
      "舌頭",
      "耳朵",
      "鼻子"
    ],
    "answerIndex": 2,
    "explanation": "耳朵包含外耳、中耳與內耳，是人體主要的聽覺器官。"
  },
  {
    "id": "q_nature_2_1",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "哪種美麗的鳥類因為大量攝食富含蝦青素的藻類與小蝦，羽毛呈現粉紅色？",
    "options": [
      "金剛鸚鵡",
      "白天鵝",
      "白鷺鷥",
      "火烈鳥"
    ],
    "answerIndex": 3,
    "explanation": "紅鶴（火烈鳥）身上的粉紅色素來自其食用的甲殼類與藻類。"
  },
  {
    "id": "q_nature_2_2",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "哪種爬行動物具有根據環境溫度、情緒或背景改變皮膚體色的神奇能力？",
    "options": [
      "響尾蛇",
      "變色龍",
      "壁虎",
      "綠蠵龜"
    ],
    "answerIndex": 1,
    "explanation": "避役（變色龍）皮膚深層有虹彩細胞能調節反射不同光色。"
  },
  {
    "id": "q_nature_2_3",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "哪種海洋哺乳動物長著圓滾滾身體被稱為「海牛」，也是西洋人魚傳說原型？",
    "options": [
      "海獅",
      "海豚",
      "海豹",
      "儒艮"
    ],
    "answerIndex": 3,
    "explanation": "儒艮與海牛母親常半浮水面抱幼崽哺乳，古代水手誤認為美人魚。"
  },
  {
    "id": "q_nature_2_4",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "知名電玩遊戲《音速小子》（Sonic）主角索尼克是什麼動物？",
    "options": [
      "兔子",
      "松鼠",
      "刺蝟",
      "狐狸"
    ],
    "answerIndex": 2,
    "explanation": "索尼克是世嘉公司的藍色超音速刺蝟刺蝟英雄。"
  },
  {
    "id": "q_nature_2_5",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "在田徑跑步大賽中，選手雙腿劇烈起伏奔跑，人體全身上下最長的一根骨頭是？",
    "options": [
      "脛骨小腿骨",
      "股骨大腿骨",
      "肱骨手臂骨",
      "肋骨胸腔骨"
    ],
    "answerIndex": 1,
    "explanation": "股骨（大腿骨）是人體內部最長且支撐力最強韌的骨骼構造。"
  },
  {
    "id": "q_nature_2_6",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "哪種在森林竹林裡活動的小型動物長著環狀花紋長尾巴，被稱為「小熊貓」？",
    "options": [
      "浣熊",
      "水獺",
      "無尾熊",
      "紅熊貓"
    ],
    "answerIndex": 3,
    "explanation": "小熊貓（小貓熊）毛色紅褐，尾部有九節紅褐相間的環紋。"
  },
  {
    "id": "q_nature_2_7",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "夜空中皎潔明亮的月球，它本身會不會自己燃燒發光？",
    "options": [
      "只有初一發光",
      "能自身發光",
      "不會自發光",
      "白天會發光"
    ],
    "answerIndex": 2,
    "explanation": "月球本身是不發光不透明的球體，夜間光芒來自反射太陽光。"
  },
  {
    "id": "q_nature_2_8",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "貓咪長長的「鬍鬚」如果在日常生活中被隨意剪掉，會導致牠失去什麼能力？",
    "options": [
      "消化能力",
      "空間導航",
      "毛皮光澤",
      "叫聲高低"
    ],
    "answerIndex": 1,
    "explanation": "貓鬍鬚根部神經極其敏感，剪掉會喪失測量寬窄與空間距離感。"
  },
  {
    "id": "q_nature_2_9",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "貓咪臉頰兩側長長的鬍鬚具有靈敏的觸覺，在日常生活中的關鍵功能為何？",
    "options": [
      "測量狹縫寬度",
      "協助咀嚼食物",
      "吸引同伴目光",
      "保持耳朵平衡"
    ],
    "answerIndex": 0,
    "explanation": "貓咪鬍鬚根部布滿神經，能精準探測氣流變化並測量通道寬度是否可通過。"
  },
  {
    "id": "q_nature_2_10",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "看似雪白的北極熊，如果在顯微鏡下觀察其皮膚，真實的皮膚顏色其實是？",
    "options": [
      "純純深黑色",
      "雪白粉紅色",
      "金黃淺褐色",
      "青灰淡藍色"
    ],
    "answerIndex": 0,
    "explanation": "北極熊毛髮是中空無色的管狀結構，能反射光線，底下的皮膚其實是黑色。"
  },
  {
    "id": "q_nature_3_1",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "長頸鹿的脖子雖然非常修長，但其頸椎骨數量跟人類一樣只有幾節？",
    "options": [
      "15節",
      "12節",
      "7節",
      "20節"
    ],
    "answerIndex": 2,
    "explanation": "幾乎所有哺乳動物（除樹懶與海牛）脖子內部都只有 7 節頸椎。"
  },
  {
    "id": "q_nature_3_2",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "哪種身形嬌小玲瓏的微型鳥類，是世界上唯一能夠在空中「倒退飛行」的鳥？",
    "options": [
      "蜂鳥",
      "綠繡眼",
      "金絲雀",
      "麻雀"
    ],
    "answerIndex": 0,
    "explanation": "蜂鳥翅膀關節極為靈活，能像直升機一樣空中懸停與倒退飛。"
  },
  {
    "id": "q_nature_3_3",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "人體全身上下覆蓋面積最廣、重量最重的人體天然外層器官是？",
    "options": [
      "肝臟器官",
      "大腦中樞",
      "表皮皮膚",
      "小腸腸道"
    ],
    "answerIndex": 2,
    "explanation": "皮膚佔人體體重約 15%，是人體表面積最大的第一道防禦器官。"
  },
  {
    "id": "q_nature_3_4",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "俗稱「兩棲類」的動物，如青蛙與蟾蜍，牠們剛從卵孵化出來的水中幼體稱為？",
    "options": [
      "浮游蝦",
      "小蝌蚪",
      "毛毛蟲",
      "小孑孓"
    ],
    "answerIndex": 1,
    "explanation": "青蛙幼體蝌蚪用鰓呼吸生活在水裡，變態長出四肢後登陸。"
  },
  {
    "id": "q_nature_3_5",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "哪種生長在深海的多足軟體動物擁有三顆心臟，且遇到危險會噴出烏黑墨汁？",
    "options": [
      "八爪章魚",
      "翻車海魚",
      "大白鯊魚",
      "藍色海豚"
    ],
    "answerIndex": 0,
    "explanation": "章魚體內有一顆主系統心臟與兩顆腮心臟，血液因銅呈青藍色。"
  },
  {
    "id": "q_nature_3_6",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "哪種極為特別的海洋魚類，是由雄性爸爸肚子上的育兒袋負責懷孕孵化小寶寶？",
    "options": [
      "海馬",
      "飛魚",
      "小丑魚",
      "魟魚"
    ],
    "answerIndex": 0,
    "explanation": "海馬雌魚將卵產在雄海馬腹部的育兒囊中，由雄海馬孵化分娩。"
  },
  {
    "id": "q_nature_3_7",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "古希臘神話中，住在奧林帕斯山之巔、掌管雷電的天神領袖是誰？",
    "options": [
      "阿波羅",
      "宙斯",
      "黑帝斯",
      "波塞頓"
    ],
    "answerIndex": 1,
    "explanation": "宙斯手持霹靂雷霆武器，為古希臘眾神之王。"
  },
  {
    "id": "q_nature_3_8",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "人體內部哪一個主要排毒器官具有驚人的自我再生能力，切除部分還能長回？",
    "options": [
      "心臟",
      "肝臟",
      "肺臟",
      "膽囊"
    ],
    "answerIndex": 1,
    "explanation": "肝臟是人體唯一具有高度再生能力的內臟器官。"
  },
  {
    "id": "q_nature_3_9",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "哪種極地海洋哺乳動物長著長達兩公尺的尖銳「象牙」螺旋長牙，被稱為海洋獨角獸？",
    "options": [
      "一角鯨",
      "座頭鯨",
      "弓頭鯨",
      "白鯨"
    ],
    "answerIndex": 0,
    "explanation": "雄性一角鯨左側上頜齒會向前突出長達兩公尺宛如獨角獸角。"
  },
  {
    "id": "q_nature_3_10",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "哪種生長在熱帶海洋的巨型哺乳動物被譽為「大海中的歌唱家」，會發出長段複雜歌聲？",
    "options": [
      "藍鯨",
      "抹香鯨",
      "座頭鯨",
      "虎鯨"
    ],
    "answerIndex": 2,
    "explanation": "雄座頭鯨在求偶期會連續詠唱結構規律的長曲，被稱為鯨之歌。"
  },
  {
    "id": "q_nature_4_1",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "我們日常玩耍的「不倒翁」玩具被輕輕推倒後立刻站正，關鍵在於其重心位於？",
    "options": [
      "最頂部",
      "左右兩側",
      "正中心",
      "最底部"
    ],
    "answerIndex": 3,
    "explanation": "不倒翁底部內置重鉛塊，傾斜時重力對支點產生使之直立的力矩。"
  },
  {
    "id": "q_nature_4_2",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "哪種生長在熱帶海域的軟體動物被譽為「貝類之王」，殼寬可超過一公尺？",
    "options": [
      "牡蠣",
      "大硨磲",
      "鮑魚",
      "扇貝"
    ],
    "answerIndex": 1,
    "explanation": "庫氏硨磲直徑可達 1.3 公尺、重量超過 200 公斤，壽命長達百年。"
  },
  {
    "id": "q_nature_4_3",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "我們平日仰望雨後彩虹，彩虹最外圈弧頂與最內圈底部呈現的顏色分別是？",
    "options": [
      "外紫內紅",
      "外紅內紫",
      "外藍內綠",
      "外黃內橙"
    ],
    "answerIndex": 1,
    "explanation": "太陽光經小水滴折射反射，偏折角最小的紅光在外、紫光在最內圈。"
  },
  {
    "id": "q_nature_4_4",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "人體眼球內部負責感應光線強弱、並在黑暗弱光中發揮夜視功能的感光細胞是？",
    "options": [
      "神經膠質細胞",
      "視桿細胞",
      "角膜上皮細胞",
      "視錐細胞"
    ],
    "answerIndex": 1,
    "explanation": "視桿細胞對弱光極度敏感負責夜視，視錐細胞則負責感受明亮色彩。"
  },
  {
    "id": "q_nature_4_5",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "哪種生長在熱帶雨林深處的奇異植物開出的花朵直徑超過一公尺，被稱為「大王花」？",
    "options": [
      "含羞草",
      "捕蠅草",
      "大王花",
      "豬籠草"
    ],
    "answerIndex": 2,
    "explanation": "大王花花朵直徑達一公尺，散發強烈腐臭氣味吸引蒼蠅為其授粉。"
  },
  {
    "id": "q_nature_4_6",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "名著《小王子》中小王子居住的微型星球上，他用心照料呵護的是一朵什麼花？",
    "options": [
      "金黃向日葵",
      "獨一無二的玫瑰",
      "純白百合花",
      "淡紫鬱金香"
    ],
    "answerIndex": 1,
    "explanation": "小王子在 B612 小行星用心澆灌一朵驕傲而美麗的四刺玫瑰花。"
  },
  {
    "id": "q_nature_4_7",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "人體感覺器官中，主要負責感受人體頭部旋轉與身體空間平衡平衡感的構造是？",
    "options": [
      "咽鼓管",
      "耳蝸神經",
      "內耳半規管",
      "外耳道膜"
    ],
    "answerIndex": 2,
    "explanation": "內耳的三個相互垂直半規管內含淋巴液，偵測人體三維旋轉加速度。"
  },
  {
    "id": "q_nature_4_8",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "在天文學中，常用來測量恆星與星系之間極其遙遠距離的單位「光年」本質上是？",
    "options": [
      "長度距離單位",
      "時間長度單位",
      "光線亮度單位",
      "星體質量單位"
    ],
    "answerIndex": 0,
    "explanation": "光年是光在真空中前行一年所經過的距離（約 9.46 兆公里），為長度單位。"
  },
  {
    "id": "q_nature_4_9",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "生活在海洋中的章魚擁有非常獨特的生理構造，牠體內總共有幾顆心臟在運作？",
    "options": [
      "總共有三顆心",
      "只有一顆大心",
      "總共有兩顆心",
      "完全沒有心臟"
    ],
    "answerIndex": 0,
    "explanation": "章魚擁有三顆心臟，兩顆鰓心負責將血液泵入鰓部，一顆全身心供應全身。"
  },
  {
    "id": "q_nature_4_10",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "在所有金屬元素中，常被用來製作傳統白熾燈泡燈絲、熔點最高的是哪種金屬？",
    "options": [
      "極堅硬鎢金屬",
      "純金黃金金屬",
      "不鏽鋼鐵金屬",
      "輕質純鋁金屬"
    ],
    "answerIndex": 0,
    "explanation": "鎢（W）的熔點高達 3422℃，是所有金屬中熔點最高者，耐高溫不易熔化。"
  },
  {
    "id": "q_nature_5_1",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "太陽系八大行星中，哪一顆行星的自轉方向極為特異，是由「自東向西」倒轉？",
    "options": [
      "金星",
      "木星",
      "水星",
      "火星"
    ],
    "answerIndex": 0,
    "explanation": "金星的自轉方向與多數行星相反，因此在金星上太陽是西升東落。"
  },
  {
    "id": "q_nature_5_2",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "工蜂在野外採集到優質花蜜回巢後，會在蜂巢上方透過跳什麼形狀的舞蹈傳遞情報？",
    "options": [
      "正三角星形",
      "8字形搖擺舞",
      "直角方塊形",
      "同心圓形圈"
    ],
    "answerIndex": 1,
    "explanation": "奧地利動物學家弗里希發現蜜蜂跳「8字舞」擺動角度指示花源方向距離。"
  },
  {
    "id": "q_nature_5_3",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "現代化學元素週期表中，排列在第一周期第一位、全宇宙質量最豐富的元素是？",
    "options": [
      "氧氣元素",
      "碳元素",
      "氦氣元素",
      "氫元素"
    ],
    "answerIndex": 3,
    "explanation": "氫（H）原子序數為 1，佔全宇宙可見物質質量的 75% 以上。"
  },
  {
    "id": "q_nature_5_4",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "哪種海洋軟體動物擁有三顆心臟、九顆腦袋神經中心，被公認為無脊椎動物智商天花板？",
    "options": [
      "巨型烏賊",
      "真烏賊烏賊",
      "鸚鵡螺貝",
      "八爪章魚"
    ],
    "answerIndex": 3,
    "explanation": "章魚擁有發達主腦與八條腕足獨立神經節，能開瓶解鎖走迷宮。"
  },
  {
    "id": "q_nature_5_5",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "生活在熱帶雨林深處的哺乳動物「樹懶」，牠平常排便的週期通常是多久一次？",
    "options": [
      "大約一個月一次",
      "兩年才排一次",
      "大約一週一次",
      "每天固定三次"
    ],
    "answerIndex": 2,
    "explanation": "樹懶新陳代謝極其遲緩，每週一次慢吞吞爬下樹排便也是牠最危險時刻。"
  },
  {
    "id": "q_nature_5_6",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "哪種極為特別的深海軟體動物有「活化石」美名，擁有上億年歷史與螺旋硬殼？",
    "options": [
      "帝王蟹",
      "大烏賊",
      "海膽石",
      "鸚鵡螺"
    ],
    "answerIndex": 3,
    "explanation": "鸚鵡螺在奧陶紀繁盛，其氣室調節浮力構造啟發了現代潛水艇設計。"
  },
  {
    "id": "q_nature_5_7",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "日常烘焙與清潔時常用的小蘇打粉，其化學結構在無機鹽分類中屬於？",
    "options": [
      "碳酸鈣碳酸鹽",
      "氯化鈉正鹽",
      "碳酸氫鈉酸式鹽",
      "氫氧化鈉強鹼"
    ],
    "answerIndex": 2,
    "explanation": "小蘇打化學式 NaHCO3，化學命名為碳酸氫鈉，水溶液呈弱鹼性。"
  },
  {
    "id": "q_nature_5_8",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "人體骨骼系統中，負責製造所有新鮮紅血球、白血球與血小板的造血大本營是？",
    "options": [
      "肝臟小葉",
      "骨骼紅骨髓",
      "脾臟紅髓",
      "心臟主動脈"
    ],
    "answerIndex": 1,
    "explanation": "扁平骨與長骨骨端內的紅骨髓富含造血幹細胞，持續分裂分化各類血球。"
  },
  {
    "id": "q_nature_5_9",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在宇宙星體演化中，大質量恆星重力崩塌壓縮形成的引力極強、連光都無法逃逸的是？",
    "options": [
      "中子星",
      "紅巨星",
      "白矮星",
      "宇宙黑洞"
    ],
    "answerIndex": 3,
    "explanation": "黑洞視界內的逃逸速度超過真空中光速，任何光波與物質皆無法掙脫。"
  },
  {
    "id": "q_nature_5_10",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "哪種深海頭足類動物擁有動物界最大、直徑如餐盤般寬達 30 公分的巨大眼球？",
    "options": [
      "深海巨王烏",
      "深海八爪魚",
      "大王酸漿魷",
      "太平洋巨章"
    ],
    "answerIndex": 2,
    "explanation": "大王酸漿魷生活在深海漆黑海水中，大眼睛能捕捉抹香鯨微弱游動擾動光。"
  },
  {
    "id": "q_world_1_1",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "在台灣若遇到需要緊急呼叫警察協助時，應該撥打哪一組號碼？",
    "options": [
      "113",
      "119",
      "110",
      "112"
    ],
    "answerIndex": 2,
    "explanation": "報警請撥 110，消防與救護請撥 119。"
  },
  {
    "id": "q_world_1_2",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "哪一種鳥類被稱為「南極紳士」，身上宛如穿著黑白燕尾服？",
    "options": [
      "信天翁",
      "奇異鳥",
      "海鷗",
      "企鵝"
    ],
    "answerIndex": 3,
    "explanation": "企鵝走起路來搖搖晃晃，宛如穿著帥氣燕尾服。"
  },
  {
    "id": "q_world_1_3",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "日常使用的溫度計在台灣最常見標示的溫度單位是攝氏度，符號寫作？",
    "options": [
      "°R",
      "°F",
      "°K",
      "°C"
    ],
    "answerIndex": 3,
    "explanation": "國際公制溫度單位攝氏度符號為大寫 C 配度數圓圈。"
  },
  {
    "id": "q_world_1_4",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "傳統中國生肖一共有幾種動物輪流循環代表每個年份？",
    "options": [
      "16種",
      "14種",
      "10種",
      "12種"
    ],
    "answerIndex": 3,
    "explanation": "十二生肖對應十二地支，共有十二種動物每年輪替。"
  },
  {
    "id": "q_world_1_5",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "在晴朗無雲的黑夜仰望星空，北半球用來辨別北方方位的著名恆星是？",
    "options": [
      "天狼星",
      "織女星",
      "北極星",
      "牛郎星"
    ],
    "answerIndex": 2,
    "explanation": "北極星幾乎正好正對著地軸北端，可用來辨識正北方。"
  },
  {
    "id": "q_world_1_6",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "位於台灣南投縣境內，海拔高度 3952 公尺的台灣第一高峰是哪一座山？",
    "options": [
      "美麗玉山",
      "高聳雪山",
      "秀麗合歡",
      "阿里青山"
    ],
    "answerIndex": 0,
    "explanation": "玉山主峰海拔 3952 公尺，不僅是台灣最高峰，也是東北亞第一高峰。"
  },
  {
    "id": "q_world_1_7",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "日本最具代表性的神聖活火山象徵，山頂終年有美麗白雪覆蓋的名山是？",
    "options": [
      "富士名山",
      "阿蘇火山",
      "櫻島火山",
      "箱根溫泉"
    ],
    "answerIndex": 0,
    "explanation": "富士山標高 3776 公尺，為日本最高峰與極具代表性的文化世界遺產。"
  },
  {
    "id": "q_world_1_8",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "法國巴黎塞納河畔著名的金屬地標鐵塔，以其設計工程師名字命名的是？",
    "options": [
      "艾菲爾鐵塔",
      "比薩斜石塔",
      "倫敦大鐵橋",
      "柏林電視塔"
    ],
    "answerIndex": 0,
    "explanation": "艾菲爾鐵塔建於 1889 年巴黎世博會，以設計師古斯塔夫・艾菲爾得名。"
  },
  {
    "id": "q_world_1_9",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "埃及尼羅河西岸留存至今的古代巨大四角椎法老陵墓建築被稱為？",
    "options": [
      "神祕金字塔",
      "人面獅身像",
      "阿布辛貝廟",
      "卡納克神殿"
    ],
    "answerIndex": 0,
    "explanation": "古埃及金字塔是古王國時期法老的宏偉陵墓，名列世界古代七大奇蹟。"
  },
  {
    "id": "q_world_1_10",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "義大利托斯卡納區一座因地基不均勻沉降而傾斜聞名的獨立白色鐘樓是？",
    "options": [
      "比薩斜鐘塔",
      "聖馬可鐘樓",
      "佛羅倫斯塔",
      "羅馬競技場"
    ],
    "answerIndex": 0,
    "explanation": "比薩斜塔因地基土壤鬆軟而在建造時即開始傾斜，成為舉世聞名景點。"
  },
  {
    "id": "q_world_2_1",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "世界著名經典地標「自由女神像」，屹立在美國哪一座著名城市？",
    "options": [
      "芝加哥",
      "洛杉磯",
      "舊金山",
      "紐約"
    ],
    "answerIndex": 3,
    "explanation": "自由女神像位於紐約港自由島上，由法國贈送給美國。"
  },
  {
    "id": "q_world_2_2",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "國旗正中央印有一片美麗紅色楓葉圖案的國家是哪一個？",
    "options": [
      "愛爾蘭",
      "加拿大",
      "澳大利亞",
      "紐西蘭"
    ],
    "answerIndex": 1,
    "explanation": "加拿大素有「楓葉之國」美譽，國旗即為紅白楓葉旗。"
  },
  {
    "id": "q_world_2_3",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "國際奧林匹克五環標誌中，下列哪一種顏色「不」在五環之中？",
    "options": [
      "紫色",
      "綠色",
      "黑色",
      "黃色"
    ],
    "answerIndex": 0,
    "explanation": "奧運五環的顏色分別為藍、黃、黑、綠、紅五色。"
  },
  {
    "id": "q_world_2_4",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "哪種耐渴動物因為能在乾旱沙漠中長期行走，被譽為「沙漠之舟」？",
    "options": [
      "荒漠羚羊",
      "高原野牛",
      "非洲斑馬",
      "雙峰駱駝"
    ],
    "answerIndex": 3,
    "explanation": "駱駝能適應極度乾旱環境，駝峰儲存豐富脂肪。"
  },
  {
    "id": "q_world_2_5",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "台灣地理位置上的最高峰，也是東北亞第一高峰的是哪一座山？",
    "options": [
      "合歡山",
      "玉山",
      "阿里山",
      "雪山"
    ],
    "answerIndex": 1,
    "explanation": "玉山主峰海拔 3952 公尺，為台灣及東北亞最高峰。"
  },
  {
    "id": "q_world_2_6",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "知名連鎖家具賣場「IKEA」（宜家家居）起源於哪一個北歐國家？",
    "options": [
      "芬蘭",
      "丹麥",
      "瑞典",
      "挪威"
    ],
    "answerIndex": 2,
    "explanation": "IKEA 發源於瑞典南部阿姆胡特，招牌配色也是瑞典國旗黃藍色。"
  },
  {
    "id": "q_world_2_7",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "在國際標準保齡球比賽中，球道底端一開始共擺放了幾顆保齡球瓶？",
    "options": [
      "15瓶",
      "8瓶",
      "12瓶",
      "10瓶"
    ],
    "answerIndex": 3,
    "explanation": "保齡球道擺設呈三角形的正等邊排列，共 10 根球瓶。"
  },
  {
    "id": "q_world_2_8",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "哪座歐洲水上名城以四通八達的運河與優雅的貢多拉小船聞名於世？",
    "options": [
      "日內瓦",
      "阿姆斯特丹",
      "威尼斯",
      "佛羅倫斯"
    ],
    "answerIndex": 2,
    "explanation": "義大利威尼斯由上百座小島組成，是世界上著名的水上之都。"
  },
  {
    "id": "q_world_2_9",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "傳統中國四大名著小說中，描述孫悟空護送唐僧前往西天取經的是哪一部？",
    "options": [
      "三國演義",
      "西遊記",
      "紅樓夢",
      "水滸傳"
    ],
    "answerIndex": 1,
    "explanation": "《西遊記》詳細記錄了師徒四人歷經九九八十一難取得真經的故事。"
  },
  {
    "id": "q_world_2_10",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "傳說中埃及著名的宏偉古蹟「獅身人面像」，守護在古埃及哪座名勝旁？",
    "options": [
      "萬里長城",
      "吉薩金字塔",
      "泰姬瑪哈陵",
      "羅馬競技場"
    ],
    "answerIndex": 1,
    "explanation": "斯芬克斯獅身人面像坐落在埃及吉薩卡夫拉金字塔前方。"
  },
  {
    "id": "q_world_3_1",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "世界上面積最大、覆蓋著厚厚冰原的第一大島嶼是哪一個島？",
    "options": [
      "馬達加斯加",
      "加里曼丹島",
      "格陵蘭島",
      "台灣島"
    ],
    "answerIndex": 2,
    "explanation": "格陵蘭島面積超過 216 萬平方公里，是世界第一大島。"
  },
  {
    "id": "q_world_3_2",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "撲克牌四張代表國王的「老K」人像中，唯一沒有畫上嘴唇鬍鬚的是哪一張？",
    "options": [
      "方塊K",
      "梅花K",
      "紅心K",
      "黑桃K"
    ],
    "answerIndex": 2,
    "explanation": "紅心 K 代表法蘭克國王查理曼大帝，雕版工匠不慎削去其鬍子。"
  },
  {
    "id": "q_world_3_3",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "世界著名經典地標「艾菲爾鐵塔」，矗立在哪一個國家的浪漫首都？",
    "options": [
      "西班牙馬德里",
      "英國倫敦",
      "法國巴黎",
      "德國柏林"
    ],
    "answerIndex": 2,
    "explanation": "艾菲爾鐵塔為 1889 年世界博覽會而建，位於法國巴黎戰神廣場。"
  },
  {
    "id": "q_world_3_4",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "世界現存體型最高大、奔跑速度可達每小時 70 公里的巨鳥是哪一種？",
    "options": [
      "非洲鴕鳥",
      "南極帝王企鵝",
      "澳洲信天翁",
      "南美大嘴鳥"
    ],
    "answerIndex": 0,
    "explanation": "非洲鴕鳥是世界上體型最碩大的鳥類，雙腿強健奔跑極快。"
  },
  {
    "id": "q_world_3_5",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "經典迪士尼動畫《獅子王》中，主角辛巴最好的搞笑跟班「彭彭」是什麼動物？",
    "options": [
      "非洲疣豬",
      "荒原斑點狗",
      "聰明狒狒",
      "沙漠狐獴"
    ],
    "answerIndex": 0,
    "explanation": "彭彭是一隻熱情善良的非洲疣豬，丁滿則是一隻狐獴。"
  },
  {
    "id": "q_world_3_6",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "以白色外觀和帆船船帆造型馳名世界的著名歌劇院，坐落在哪座海濱城市？",
    "options": [
      "溫哥華",
      "舊金山",
      "雪梨",
      "奧克蘭"
    ],
    "answerIndex": 2,
    "explanation": "澳洲雪梨歌劇院以獨特的白貝殼帆船屋頂成為現代建築代表。"
  },
  {
    "id": "q_world_3_7",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "世界上流域面積最廣闊、水量最大、擁有最豐富熱帶雨林的大河是哪一條？",
    "options": [
      "長江大河",
      "非洲剛果河",
      "亞馬遜河",
      "埃及尼羅河"
    ],
    "answerIndex": 2,
    "explanation": "亞馬遜河流量佔全球河流總流量五分之一，擁有地球之肺之稱。"
  },
  {
    "id": "q_world_3_8",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "世界上面積最廣大的內陸鹹水湖「裏海」，地理上位於歐洲與哪一個大洲交界？",
    "options": [
      "北美洲",
      "非洲",
      "大洋洲",
      "亞洲"
    ],
    "answerIndex": 3,
    "explanation": "裏海周邊由俄羅斯、哈薩克、伊朗等國環繞，屬於歐亞交界。"
  },
  {
    "id": "q_world_3_9",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "被稱為「地球之肺」的世界最大熱帶雨林，位於南美洲的哪一條大河流域？",
    "options": [
      "密西西比河",
      "非洲尼羅河",
      "多瑙河流域",
      "亞馬遜流域"
    ],
    "answerIndex": 3,
    "explanation": "亞馬遜熱帶雨林產生豐富氧氣並吸收巨量二氧化碳調節全球氣候。"
  },
  {
    "id": "q_world_3_10",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "哪座歐洲國家擁有超過一千座風車，素有「風車王國」的美稱？",
    "options": [
      "瑞士",
      "荷蘭",
      "比利時",
      "丹麥"
    ],
    "answerIndex": 1,
    "explanation": "荷蘭地勢低窪，自古修建大量風車抽取低地積水與研磨穀物。"
  },
  {
    "id": "q_world_4_1",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "台灣統一發票每逢單數月份進行開獎，通常每隔幾個月對獎一次？",
    "options": [
      "1個月",
      "6個月",
      "3個月",
      "2個月"
    ],
    "answerIndex": 3,
    "explanation": "統一發票每兩個月為一期，在次月的 25 日電視公開抽獎。"
  },
  {
    "id": "q_world_4_2",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "文藝復興名畫《蒙娜麗莎的微笑》，目前被永久珍藏於哪一座世界級博物館？",
    "options": [
      "俄國冬宮館",
      "法國羅浮宮",
      "英國大英館",
      "美國大都會"
    ],
    "answerIndex": 1,
    "explanation": "《蒙娜麗莎》為法國國寶，在巴黎羅浮宮設有防彈玻璃專室展示。"
  },
  {
    "id": "q_world_4_3",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "國際象棋（西洋棋）在棋盤上機動性最高、橫豎斜向均能任意走動的棋子是哪一個？",
    "options": [
      "城堡",
      "騎士",
      "王后",
      "主教"
    ],
    "answerIndex": 2,
    "explanation": "皇后結合了城堡直走與主教斜走的全部威力，是棋盤上最強棋子。"
  },
  {
    "id": "q_world_4_4",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "哪一個國家素有「袋鼠之國」與「騎在羊背上的國家」之美麗稱譽？",
    "options": [
      "紐西蘭",
      "澳洲",
      "加拿大",
      "阿根廷"
    ],
    "answerIndex": 1,
    "explanation": "澳洲擁有獨特的有袋類生態系統，袋鼠與羊毛產量均居世界前列。"
  },
  {
    "id": "q_world_4_5",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "世界各大洲中，唯一全境被厚重冰川覆蓋、完全沒有常住原住民的是哪一洲？",
    "options": [
      "南美洲",
      "南極洲",
      "歐洲",
      "大洋洲"
    ],
    "answerIndex": 1,
    "explanation": "南極洲平均氣溫低於零下 25 度，僅有各國科研人員輪流駐守考察。"
  },
  {
    "id": "q_world_4_6",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "知名電玩巨作《塞爾達傳說》（薩爾達傳說）中，頭戴綠帽手持大師之劍的主角是？",
    "options": [
      "加儂多夫",
      "卡卡利科",
      "林克",
      "薩爾達"
    ],
    "answerIndex": 2,
    "explanation": "勇者主角名字叫林克（Link），被守護的海拉魯王國公主才叫薩爾達。"
  },
  {
    "id": "q_world_4_7",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "被譽為「地球肚臍」，世界上湖面海拔最低、鹽度極高連人都能浮起來的水體是？",
    "options": [
      "死海",
      "裏海",
      "青海湖",
      "貝加爾湖"
    ],
    "answerIndex": 0,
    "explanation": "死海位於巴勒斯坦與約旦交界，湖面低於海平面約 430 公尺。"
  },
  {
    "id": "q_world_4_8",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "哪座歐洲鐘樓因地基鬆軟發生傾斜而馳名全球，伽利略據傳曾在此做自由落體實驗？",
    "options": [
      "倫敦大笨鐘",
      "威尼斯鐘樓",
      "比薩斜塔",
      "布拉格天文鐘"
    ],
    "answerIndex": 2,
    "explanation": "義大利比薩斜塔歷經數百年傾斜不倒，為世界建築奇蹟。"
  },
  {
    "id": "q_world_4_9",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "世界上面積最深、蓄水量最大的淡水湖「貝加爾湖」位於哪一個國家境內？",
    "options": [
      "美國",
      "蒙古國",
      "俄羅斯",
      "加拿大"
    ],
    "answerIndex": 2,
    "explanation": "貝加爾湖最深達 1642 公尺，淡水儲量佔世界不凍淡水總量的兩成。"
  },
  {
    "id": "q_world_4_10",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "打麻將胡牌時，在一般台灣十六張麻將規則中，連同最後胡的那張牌手上共有幾張？",
    "options": [
      "17張",
      "18張",
      "14張",
      "16張"
    ],
    "answerIndex": 0,
    "explanation": "台灣麻將手牌底牌為 16 張，摸牌胡牌完成面子時恰為 17 張牌。"
  },
  {
    "id": "q_world_5_1",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "現代國際奧林匹克馬拉松長跑標準全程，精確的官方規定距離是多少公里？",
    "options": [
      "45.195公里",
      "42.195公里",
      "50.000公里",
      "40.000公里"
    ],
    "answerIndex": 1,
    "explanation": "1908 倫敦奧運為方便王室觀看從溫莎城堡起跑，固定為 42.195 公里。"
  },
  {
    "id": "q_world_5_2",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "非洲大草原上的「鴕鳥」視力極佳，但牠那一雙大眼睛的體積竟然比牠自己的？",
    "options": [
      "胃部還要大",
      "嘴巴還要大",
      "大腦還要大",
      "心臟還要大"
    ],
    "answerIndex": 2,
    "explanation": "鴕鳥的大眼球直徑約 5 公分，重量約 60 克，比牠的腦髓容量還大。"
  },
  {
    "id": "q_world_5_3",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "中國傳統古代四大發明中，下列哪一項「不」包括在標準四大發明之內？",
    "options": [
      "軍事火藥",
      "青花瓷器",
      "航海指南針",
      "活字印刷術"
    ],
    "answerIndex": 1,
    "explanation": "中國古代四大發明官方定義為造紙術、印刷術、火藥與指南針。"
  },
  {
    "id": "q_world_5_4",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "國際著名的「諾貝爾和平獎」，每年頒獎典禮依慣例是在哪一座北歐城市隆重舉行？",
    "options": [
      "瑞典斯德哥爾摩",
      "芬蘭赫爾辛基",
      "挪威奧斯陸",
      "丹麥哥本哈根"
    ],
    "answerIndex": 2,
    "explanation": "諾貝爾遺囑指定生理學、物理等在瑞典頒發，和平獎則由挪威議會頒發。"
  },
  {
    "id": "q_world_5_5",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "撲克牌四張代表國王的花色中，唯一畫有威武雙刃大長劍並佩戴象徵神聖光環的是？",
    "options": [
      "黑桃K大衛王",
      "方塊K凱撒",
      "梅花K亞歷山大",
      "紅心K查理曼"
    ],
    "answerIndex": 0,
    "explanation": "黑桃 K 原型為古以色列大衛王，善彈豎琴並在背部配有神聖利劍。"
  },
  {
    "id": "q_world_5_6",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "世界最高峰「珠穆朗瑪峰」（聖母峰）海拔高達 8848 公尺，它坐落在哪一座大山脈？",
    "options": [
      "阿爾卑斯山脈",
      "落磯山脈",
      "安地斯山脈",
      "喜馬拉雅山脈"
    ],
    "answerIndex": 3,
    "explanation": "喜馬拉雅山脈由印度板塊與歐亞板塊強烈擠壓碰撞隆起形成。"
  },
  {
    "id": "q_world_5_7",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "在名著《哈利波特》中，霍格華茲魔法學校開學列車是從國王十字車站幾號月台發車？",
    "options": [
      "七又二分之一月台",
      "九又四分之三月台",
      "十又八分之五月台",
      "五又三分之一月台"
    ],
    "answerIndex": 1,
    "explanation": "小巫師推著行李車撞向第 9 與第 10 月台之間的紅磚牆進入魔法月台。"
  },
  {
    "id": "q_world_5_8",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "哪座非洲著名的大瀑布被當地原住民稱為「雷霆翻滾的煙霧」，是世界三大瀑布之一？",
    "options": [
      "伊瓜蘇大瀑布",
      "維多利亞大瀑布",
      "尼加拉大瀑布",
      "安赫爾瀑布"
    ],
    "answerIndex": 1,
    "explanation": "尚比西河上的維多利亞瀑布寬逾千公尺，水霧沖天如雷鳴震撼。"
  },
  {
    "id": "q_world_5_9",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "在中國古代歷史中，統一六國度量衡文字、修築萬里長城的千古一帝是誰？",
    "options": [
      "漢武帝劉徹",
      "秦始皇嬴政",
      "唐太宗李世民",
      "漢高祖劉邦"
    ],
    "answerIndex": 1,
    "explanation": "秦王嬴政於西元前 221 年消滅六國統一華夏，自稱始皇帝。"
  },
  {
    "id": "q_world_5_10",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "哪種生長在極地深海的格陵蘭睡鯊壽命極長，科學家碳十四鑑定其最長壽命可達？",
    "options": [
      "超過400歲",
      "約200歲",
      "約50歲",
      "約100歲"
    ],
    "answerIndex": 0,
    "explanation": "格陵蘭鯊新陳代謝極其遲緩生長極慢，是地球上壽命最長的已知脊椎動物。"
  },
  {
    "id": "q_anime_1_1",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "童話故事《灰姑娘》中，仙女把什麼變成了載她去舞會的華麗馬車？",
    "options": [
      "大南瓜",
      "大西瓜",
      "大冬瓜",
      "大白菜"
    ],
    "answerIndex": 0,
    "explanation": "仙女用魔法把大南瓜變成了南瓜馬車。"
  },
  {
    "id": "q_anime_1_2",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "知名動漫《寶可夢》中，主角小智最初獲得的電屬性寶可夢是誰？",
    "options": [
      "卡比獸",
      "皮卡丘",
      "傑尼龜",
      "小火龍"
    ],
    "answerIndex": 1,
    "explanation": "小智的初始寶可夢是可愛的電氣鼠皮卡丘。"
  },
  {
    "id": "q_anime_1_3",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "知名卡通人物「哆啦A夢」最喜歡吃哪一種日式傳統甜點？",
    "options": [
      "草莓福",
      "鯛魚燒",
      "章魚燒",
      "銅鑼燒"
    ],
    "answerIndex": 3,
    "explanation": "哆啦A夢的最愛就是夾著香甜紅豆餡的銅鑼燒。"
  },
  {
    "id": "q_anime_1_4",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "童話故事《木偶奇遇記》中，小木偶皮諾丘只要說謊，哪裡就會變長？",
    "options": [
      "耳朵",
      "尾巴",
      "手指",
      "鼻子"
    ],
    "answerIndex": 3,
    "explanation": "皮諾丘一說謊鼻子就會不由自主地變長。"
  },
  {
    "id": "q_anime_1_5",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "童話《白雪公主》中，邪惡王后給白雪公主吃了什麼有毒的水果？",
    "options": [
      "大番茄",
      "紅蘋果",
      "水蜜桃",
      "西洋梨"
    ],
    "answerIndex": 1,
    "explanation": "王后化身為老巫婆遞給白雪公主一顆毒蘋果。"
  },
  {
    "id": "q_anime_1_6",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "知名電玩角色「瑪利歐」職業是水管工，他招牌帽子的主要顏色是？",
    "options": [
      "黃色",
      "綠色",
      "紅色",
      "藍色"
    ],
    "answerIndex": 2,
    "explanation": "瑪利歐戴紅帽穿藍吊帶褲，弟弟路易吉戴綠帽。"
  },
  {
    "id": "q_anime_1_7",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "卡通《海綿寶寶》的主角海綿寶寶，他住在海底的什麼形狀屋子裡？",
    "options": [
      "香蕉屋",
      "草莓屋",
      "鳳梨屋",
      "西瓜屋"
    ],
    "answerIndex": 2,
    "explanation": "海綿寶寶住在太平洋比奇堡的深海大鳳梨屋。"
  },
  {
    "id": "q_anime_1_8",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "卡通《櫻桃小丸子》中，小丸子的同班同學「花輪」家中家境如何？",
    "options": [
      "單親獨居",
      "非常富有",
      "極度貧困",
      "普通家庭"
    ],
    "answerIndex": 1,
    "explanation": "花輪同學是知名的富家千金公子，每天坐豪車上學。"
  },
  {
    "id": "q_anime_1_9",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "知名動畫電影《冰雪奇緣》中，會說話且熱愛夏天擁抱的雪人叫什麼？",
    "options": [
      "雪怪",
      "阿克",
      "雪寶",
      "小白"
    ],
    "answerIndex": 2,
    "explanation": "艾莎用魔法創造的可愛雪人叫做雪寶（Olaf）。"
  },
  {
    "id": "q_anime_1_10",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "童話故事《三隻小豬》中，最後哪一隻小豬蓋的堅固房子吹不垮？",
    "options": [
      "木頭屋",
      "稻草屋",
      "冰塊屋",
      "紅磚屋"
    ],
    "answerIndex": 3,
    "explanation": "豬小弟用結實紅磚砌成房子，大野狼怎麼吹也吹不倒。"
  },
  {
    "id": "q_anime_2_1",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "卡通《哆啦A夢》中，哆啦A夢一看到什麼動物就會嚇得魂飛魄散？",
    "options": [
      "大蟑螂",
      "八腳蜘蛛",
      "小老鼠",
      "長青蛇"
    ],
    "answerIndex": 2,
    "explanation": "因為他的耳朵曾經在午睡時被機器老鼠咬壞了。"
  },
  {
    "id": "q_anime_2_2",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "知名卡通《名偵探柯南》中，主角工藤新一喝下毒藥後縮小成了哪位小學生？",
    "options": [
      "怪盜基德",
      "圓谷光彥",
      "服部平次",
      "江戶川柯南"
    ],
    "answerIndex": 3,
    "explanation": "新一被迫服下 APTX-4869 後化名江戶川柯南隱藏身分。"
  },
  {
    "id": "q_anime_2_3",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "童話故事《小紅帽》中，在大森林裡欺騙小紅帽的壞動物是什麼？",
    "options": [
      "兇惡大狼",
      "毒牙眼鏡蛇",
      "凶猛棕熊",
      "狡猾狐狸"
    ],
    "answerIndex": 0,
    "explanation": "大灰狼吞掉了外婆並假扮成外婆欺騙小紅帽。"
  },
  {
    "id": "q_anime_2_4",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "電影《玩具總動員》中，主角牛仔玩偶的名字叫做什麼？",
    "options": [
      "胡迪",
      "巴斯光年",
      "抱抱龍",
      "蛋頭先生"
    ],
    "answerIndex": 0,
    "explanation": "胡迪警長是安弟最心愛的傳統老式拉繩發聲牛仔玩偶。"
  },
  {
    "id": "q_anime_2_5",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "卡通電影《海底總動員》中，主角尼莫與爸爸馬林是什麼品種的漂亮小魚？",
    "options": [
      "神仙魚",
      "金魚",
      "小丑魚",
      "藍倒吊"
    ],
    "answerIndex": 2,
    "explanation": "尼莫是有著鮮明橘白條紋的眼斑海葵魚（小丑魚）。"
  },
  {
    "id": "q_anime_2_6",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "在電影院觀賞電影時，觀眾最常搭配食用的熱門玉米膨化零食是？",
    "options": [
      "爆米花",
      "薯條",
      "熱狗堡",
      "洋芋片"
    ],
    "answerIndex": 0,
    "explanation": "奶油香甜脆口的爆米花是全球影城最受歡迎的觀影點心。"
  },
  {
    "id": "q_anime_2_7",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "知名電玩遊戲《精靈寶可夢》中，小火龍進化後的完全體是什麼霸氣外形？",
    "options": [
      "皮卡丘",
      "噴火龍",
      "急凍鳥",
      "超夢"
    ],
    "answerIndex": 1,
    "explanation": "小火龍進化為火恐龍，最後進化為霸氣長翅膀的噴火龍。"
  },
  {
    "id": "q_anime_2_8",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "卡通《海綿寶寶》中海綿寶寶最要好的死黨「派大星」是一隻什麼動物？",
    "options": [
      "章魚",
      "龍蝦",
      "海膽",
      "海星"
    ],
    "answerIndex": 3,
    "explanation": "派大星是一隻粉紅色的海星，居住在大石頭底下。"
  },
  {
    "id": "q_anime_2_9",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "童話故事《阿里巴巴與四十大盜》中，阿里巴巴用哪句神奇咒語打開了藏寶石門？",
    "options": [
      "芝麻開門",
      "大門快開",
      "芝麻關門",
      "南瓜開花"
    ],
    "answerIndex": 0,
    "explanation": "阿里巴巴站在藏寶山洞前高喊「芝麻開門」，岩石巨門便開啟。"
  },
  {
    "id": "q_anime_2_10",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "卡通《湯姆貓與傑利鼠》中，大灰貓「湯姆」的日常任務主要是在家裡抓什麼？",
    "options": [
      "蝴蝶",
      "老鼠",
      "小鳥",
      "金魚"
    ],
    "answerIndex": 1,
    "explanation": "湯姆貓整天追逐聰明機靈的傑利鼠，展開逗趣貓鼠大戰。"
  },
  {
    "id": "q_anime_3_1",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "經典童話故事《睡美人》中，美麗的公主是因為手指不小心觸碰到什麼而昏睡？",
    "options": [
      "毒玫瑰",
      "古老法杖",
      "水晶球",
      "紡織針"
    ],
    "answerIndex": 3,
    "explanation": "被邪惡女巫施咒的睡美人碰觸紡錘針尖後陷入百年沈睡。"
  },
  {
    "id": "q_anime_3_2",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "知名電玩遊戲《寶可夢》中，外表圓滾滾且熱愛唱歌催眠別人的粉紅寶可夢是？",
    "options": [
      "百變怪",
      "吉利蛋",
      "胖丁",
      "皮皮"
    ],
    "answerIndex": 2,
    "explanation": "胖丁唱歌時會發出強效催眠波，聽眾睡著後會在他們臉上塗鴉。"
  },
  {
    "id": "q_anime_3_3",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "經典動畫《天空之城》與《神隱少女》是由日本哪一位國寶級動畫大師執導？",
    "options": [
      "新海誠",
      "庵野秀明",
      "手塚治虫",
      "宮崎駿"
    ],
    "answerIndex": 3,
    "explanation": "宮崎駿創立吉卜力工作室，獲得奧斯卡終身成就獎肯定。"
  },
  {
    "id": "q_anime_3_4",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "知名電玩角色「音速小子」身邊有一隻長著兩條蓬鬆尾巴的好朋友狐狸叫什麼？",
    "options": [
      "夏特",
      "納克魯斯",
      "艾咪",
      "塔爾斯"
    ],
    "answerIndex": 3,
    "explanation": "塔爾斯（Tails）雙尾能像螺旋槳一樣旋轉在空中飛行。"
  },
  {
    "id": "q_anime_3_5",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "電影《星際大戰》系列中，絕地武士所使用的招牌發光能量武器是？",
    "options": [
      "熱射線",
      "光劍",
      "電磁槍",
      "超空間炮"
    ],
    "answerIndex": 1,
    "explanation": "絕地武士與西斯武士以水晶聚焦能量產生致命的光劍對決。"
  },
  {
    "id": "q_anime_3_6",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "知名經典動漫《名偵探柯南》中，神秘黑衣組織的兩大核心幹部琴酒與伏特加，其代號皆來自於世界著名的？",
    "options": [
      "烈酒洋酒",
      "經典名車",
      "世界首都",
      "西洋棋子"
    ],
    "answerIndex": 0,
    "explanation": "琴酒（Gin）與伏特加（Vodka）皆為世界著名的蒸餾烈酒。"
  },
  {
    "id": "q_anime_3_7",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "知名童話《三隻小豬》中，大野狼最後試圖從哪裡爬進豬小弟的紅磚屋裡？",
    "options": [
      "正門木門",
      "地下排水管",
      "房頂煙囪",
      "客廳窗戶"
    ],
    "answerIndex": 2,
    "explanation": "大野狼爬進煙囪，結果掉進豬小弟在壁爐架設的滾燙熱水鍋中。"
  },
  {
    "id": "q_anime_3_8",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "知名卡通《湯姆貓與傑利鼠》中，常在院子看守、讓湯姆貓吃盡苦頭的大鬥牛犬是？",
    "options": [
      "史派克",
      "泰克",
      "布奇",
      "托普斯"
    ],
    "answerIndex": 0,
    "explanation": "肌肉壯碩的灰色鬥牛犬史派克只要兒子被打擾就會痛扁湯姆貓。"
  },
  {
    "id": "q_anime_3_9",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "吉卜力經典動畫《霍爾的移動城堡》中，為城堡提供強大動力的火惡魔名字是？",
    "options": [
      "淘氣卡西法",
      "忠誠波魯克",
      "白龍琥珀川",
      "黑貓吉吉貓"
    ],
    "answerIndex": 0,
    "explanation": "卡西法是霍爾小時候與流星立下契約的火惡魔，維持整座城堡的運轉。"
  },
  {
    "id": "q_anime_3_10",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "經典動漫《七龍珠》中，只要集齊散落世界各地的幾顆龍珠便能召喚神龍？",
    "options": [
      "一共七顆珠",
      "一共五顆珠",
      "一共六顆珠",
      "一共八顆珠"
    ],
    "answerIndex": 0,
    "explanation": "只要集齊一星到七星共七顆龍珠，唸出召喚咒語就能請神龍實現願望。"
  },
  {
    "id": "q_anime_4_1",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "知名童年動畫《櫻桃小丸子》中小丸子形影不離的最好朋友「小玉」，她的全名姓什麼？",
    "options": [
      "穗波",
      "野口",
      "花輪",
      "丸尾"
    ],
    "answerIndex": 0,
    "explanation": "小玉全名叫穗波玉（穗波小玉），是小丸子最體貼包容的摯友。"
  },
  {
    "id": "q_anime_4_2",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "經典童話故事《木偶奇遇記》的作者科洛迪，是哪一個國家的著名童話作家？",
    "options": [
      "德國",
      "丹麥",
      "法國",
      "義大利"
    ],
    "answerIndex": 3,
    "explanation": "卡洛·科洛迪出生於義大利佛羅倫斯，1883 年出版《木偶奇遇記》。"
  },
  {
    "id": "q_anime_4_3",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "知名電玩遊戲《寶可夢》中，被稱為夢幻般神獸、由古代化石基因複製培育出的是？",
    "options": [
      "洛奇亞",
      "烈空坐",
      "鳳王",
      "超夢"
    ],
    "answerIndex": 3,
    "explanation": "科學家利用夢幻的睫毛基因透過重組工程製造出的強大寶可夢超夢。"
  },
  {
    "id": "q_anime_4_4",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "知名經典童話《愛麗絲夢遊仙境》中，愛麗絲是因為跟著一隻揣著懷錶的什麼動物掉進洞裡？",
    "options": [
      "白兔先生",
      "三月瘋兔",
      "柴郡貓",
      "紅心騎士"
    ],
    "answerIndex": 0,
    "explanation": "愛麗絲追逐穿著背心、看著懷錶匆忙自言自語的白兔掉入奇幻仙境兔子洞。"
  },
  {
    "id": "q_anime_4_5",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "知名電玩角色「洛克人」（Mega Man）的手臂招牌射擊武器在遊戲中稱為？",
    "options": [
      "迴旋鏢",
      "雷射刀刃",
      "洛克光炮",
      "火箭飛拳"
    ],
    "answerIndex": 2,
    "explanation": "洛克人的手臂能聚集能量發射蓄力洛克飛彈光炮攻擊敵方機器人。"
  },
  {
    "id": "q_anime_4_6",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "知名電玩《超級瑪利歐》中，吃下哪種帶有白點的神奇道具會讓瑪利歐身體變大？",
    "options": [
      "火焰之花",
      "無敵星星",
      "超級蘑菇",
      "羽毛披風"
    ],
    "answerIndex": 2,
    "explanation": "紅色白斑超級蘑菇是瑪利歐系列招牌變大強化道具。"
  },
  {
    "id": "q_anime_4_7",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "知名動漫《進擊的巨人》中，主角艾連與米卡莎等人最初加入哪一個兵團？",
    "options": [
      "憲兵團",
      "調查兵團",
      "駐紮兵團",
      "開拓兵團"
    ],
    "answerIndex": 1,
    "explanation": "艾連等人為了探索牆外世界與驅逐巨人，選擇加入冒險的調查兵團。"
  },
  {
    "id": "q_anime_4_8",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《咒術迴戰》中，最強咒術師五條悟所施展的領域展開名稱為何？",
    "options": [
      "伏魔御廚子",
      "無量空處",
      "嵌合暗翳庭",
      "自閉圓頓裹"
    ],
    "answerIndex": 1,
    "explanation": "五條悟的領域展開為無量空處，會將無窮無盡的情報灌入對手大腦。"
  },
  {
    "id": "q_anime_4_9",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《航海王》中，主角魯夫所吃下的惡魔果實最初被稱為哪一種超人系果實？",
    "options": [
      "橡膠果實",
      "彈簧果實",
      "分裂果實",
      "線線果實"
    ],
    "answerIndex": 0,
    "explanation": "魯夫小時候誤食紅髮傑克帶來的橡膠果實，全身獲得伸縮如橡膠的特質。"
  },
  {
    "id": "q_anime_4_10",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《鋼之鍊金術師》中，鍊金術世界必須嚴格遵守的第一大基本原則是什麼？",
    "options": [
      "等價交換原則",
      "萬物互聯原則",
      "因果相生原則",
      "質量守恆原則"
    ],
    "answerIndex": 0,
    "explanation": "想要獲得某種事物，就必須付出同等代價，此即鍊金術之等價交換。"
  },
  {
    "id": "q_anime_5_1",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "經典神作《新世紀福音戰士》中，男主角碇真嗣所駕駛的EVA機體為哪一架？",
    "options": [
      "EVA零號機",
      "EVA初號機",
      "EVA貳號機",
      "EVA參號機"
    ],
    "answerIndex": 1,
    "explanation": "碇真嗣駕駛的是具有紫色外裝甲與暴走特性的汎用人型決戰兵器初號機。"
  },
  {
    "id": "q_anime_5_2",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《死亡筆記本》中，跟隨夜神月的死神「路克」在人間最狂熱喜愛的水果是？",
    "options": [
      "甜美紅蘋果",
      "多汁水蜜桃",
      "鮮甜香蕉串",
      "香甜金黃梨"
    ],
    "answerIndex": 0,
    "explanation": "死神路克非常喜歡吃人間的紅蘋果，若是太久沒吃還會出現戒斷症狀。"
  },
  {
    "id": "q_anime_5_3",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《反叛的魯路修》中，魯路修從神秘少女C.C.獲得的眼部瞳術能力為何？",
    "options": [
      "絕對遵守之力",
      "讀心透視之力",
      "預知未來之力",
      "瞬間移動之力"
    ],
    "answerIndex": 0,
    "explanation": "魯路修獲得的Geass具有能對注視雙眼者下達絕對無法違抗命令的力量。"
  },
  {
    "id": "q_anime_5_4",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《JOJO的奇妙冒險》第三部中，空條承太郎替身「白金之星」覺醒的王牌能力是？",
    "options": [
      "瞬間移動空間",
      "暫停時間流動",
      "預知短暫未來",
      "自體高速再生"
    ],
    "answerIndex": 1,
    "explanation": "在與迪奧的決戰中，白金之星覺醒了暫停時間的能力，與世界分庭抗禮。"
  },
  {
    "id": "q_anime_5_5",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《攻殼機動隊》中，主角草薙素子少校所隸屬的特殊情報與反恐部隊為？",
    "options": [
      "公安六課部隊",
      "公安九課部隊",
      "特種作戰部隊",
      "內閣情報調查"
    ],
    "answerIndex": 1,
    "explanation": "草薙素子少校擔任公安九課隊長，專責處理高科技網絡犯罪與恐怖攻擊。"
  },
  {
    "id": "q_anime_5_6",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《銀魂》中，主角坂田銀時隨身攜帶並刻有「洞爺湖」字樣的木刀由何種木材製成？",
    "options": [
      "神木金剛木材",
      "電視購物木刀",
      "千年黑檀木料",
      "降妖桃木真刀"
    ],
    "answerIndex": 1,
    "explanation": "銀時常跟別人宣稱是邊境仙木，但實際上是從電視購物買來的普通特產木刀。"
  },
  {
    "id": "q_anime_5_7",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《魔法少女小圓》中，主角鹿目圓最終許願化身為神靈拯救宇宙的概念被稱為？",
    "options": [
      "輪迴命運之網",
      "圓環之理概念",
      "星之守護誓言",
      "無盡光芒之海"
    ],
    "answerIndex": 1,
    "explanation": "鹿目圓許下消除所有魔女誕生的願望，成為概念般的神靈「圓環之理」。"
  },
  {
    "id": "q_anime_5_8",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《獵人》貪婪之島篇中，小傑與奇犽為了通關遊戲所集齊的指定卡片總共有幾張？",
    "options": [
      "88張指定卡",
      "99張指定卡",
      "100張指定卡",
      "108張指定卡"
    ],
    "answerIndex": 2,
    "explanation": "貪婪之島遊戲通關條件為集滿 000 至 099 號共計 100 張指定口袋卡片。"
  },
  {
    "id": "q_anime_5_9",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《火影忍者》中，第四代火影波風湊成名於忍界的時空間瞬移忍術名稱為？",
    "options": [
      "飛雷神之術法",
      "替身瞬步秘術",
      "影分身之術法",
      "神威異空間術"
    ],
    "answerIndex": 0,
    "explanation": "波風湊以飛雷神之術神速瞬移馳騁戰場，在忍界贏得「黃色閃光」之威名。"
  },
  {
    "id": "q_anime_5_10",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《涼宮春日的憂鬱》中，女主角涼宮春日為尋找外星人與超能力者成立的社團是？",
    "options": [
      "SOS奇特社團",
      "超常現象探討",
      "奇蹟冒險旅團",
      "神祕事件特搜"
    ],
    "answerIndex": 0,
    "explanation": "涼宮春日創立了讓世界變得更熱鬧的「SOS團（讓世界熱鬧起來的春日團）」。"
  },
  {
    "id": "q_food_1_1",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "日常生活中的「一打」雞蛋通常是指共有幾顆雞蛋？",
    "options": [
      "16顆",
      "20顆",
      "10顆",
      "12顆"
    ],
    "answerIndex": 3,
    "explanation": "國際單位計量上一打（dozen）等於 12 個。"
  },
  {
    "id": "q_food_1_2",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "日常切洋蔥時，眼睛經常會感到酸痛並流眼淚，這是因為洋蔥釋放了什麼？",
    "options": [
      "彩色粉末",
      "強酸液體",
      "高溫熱氣",
      "刺激氣體"
    ],
    "answerIndex": 3,
    "explanation": "切開洋蔥破壞細胞會釋放揮發性硫化物氣體刺激淚腺。"
  },
  {
    "id": "q_food_1_3",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "台灣知名的小吃「大腸包小腸」，其中的「小腸」通常是指什麼？",
    "options": [
      "豬血糕",
      "炸雞捲",
      "台式香腸",
      "甜不辣"
    ],
    "answerIndex": 2,
    "explanation": "大腸指的是糯米腸，小腸指的則是烤台式豬肉香腸。"
  },
  {
    "id": "q_food_1_4",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "民間傳說在端午節這天正午，如果能把什麼東西立起來就會帶來好運？",
    "options": [
      "小石子",
      "竹筷子",
      "長硬幣",
      "生雞蛋"
    ],
    "answerIndex": 3,
    "explanation": "端午節正午陽氣最盛，民間有立雞蛋帶來整年好運的習俗。"
  },
  {
    "id": "q_food_1_5",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "農曆中秋節全家團圓相聚時，傳統習俗除了賞月之外通常會吃什麼糕餅？",
    "options": [
      "鳳梨酥",
      "太陽餅",
      "月餅",
      "綠豆椪"
    ],
    "answerIndex": 2,
    "explanation": "中秋節象徵月圓人團圓，傳統節慶糕點首選為月餅。"
  },
  {
    "id": "q_food_1_6",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "吃冰淇淋或熱湯時如果不小心燙到舌頭，舌頭上用來感受味道的構造是？",
    "options": [
      "味蕾",
      "扁桃體",
      "軟顎",
      "牙齦"
    ],
    "answerIndex": 0,
    "explanation": "舌頭表面分佈著成千上萬的味蕾，用來辨別酸甜苦鹹鮮。"
  },
  {
    "id": "q_food_1_7",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "喝熱湯或吃剛出爐食物時，若覺得太燙通常會對著食物做出什麼動作？",
    "options": [
      "眨眼",
      "吹氣",
      "大笑",
      "搖頭"
    ],
    "answerIndex": 1,
    "explanation": "吹氣能加速熱量對流散失，幫助食物降溫。"
  },
  {
    "id": "q_food_1_8",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "哪種生活在澳洲的袋類動物以桉樹葉（尤加利葉）為唯一主要食物？",
    "options": [
      "鴨嘴獸",
      "無尾熊",
      "袋鼠",
      "袋熊"
    ],
    "answerIndex": 1,
    "explanation": "無尾熊整天抱在尤加利樹上，每天睡覺長達 18 至 20 小時。"
  },
  {
    "id": "q_food_1_9",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "風靡全世界的國民手搖飲「珍珠奶茶」，最初起源於哪一個美麗地方？",
    "options": [
      "寶島台灣",
      "香港九龍",
      "日本東京",
      "泰國曼谷"
    ],
    "answerIndex": 0,
    "explanation": "珍珠奶茶誕生於 1980 年代的台灣，融合紅茶奶香與 Q 彈樹薯粉圓波霸。"
  },
  {
    "id": "q_food_1_10",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "製作傳統日式壽司時，米飯通常會加入哪一種調味料拌勻製成風味獨特的醋飯？",
    "options": [
      "清香壽司醋",
      "濃純黑黑醋",
      "香濃甜白糖",
      "鹹香甘純醬"
    ],
    "answerIndex": 0,
    "explanation": "壽司米飯趁熱拌入壽司醋、砂糖與鹽巴，冷卻後米粒粒粒分明具有微酸果香。"
  },
  {
    "id": "q_food_2_1",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "風靡全球的手搖飲品「珍珠奶茶」，最初發源於哪一個地方？",
    "options": [
      "日本",
      "香港",
      "台灣",
      "泰國"
    ],
    "answerIndex": 2,
    "explanation": "珍珠奶茶起源於 1980 年代的台灣，如今紅遍全世界。"
  },
  {
    "id": "q_food_2_2",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "經典西式美食「披薩」（Pizza）最早發源於哪一個歐洲國家？",
    "options": [
      "法國",
      "西班牙",
      "義大利",
      "希臘"
    ],
    "answerIndex": 2,
    "explanation": "義大利南部名城拿坡里是現代披薩的發源地。"
  },
  {
    "id": "q_food_2_3",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "去日本吃迴轉壽司時，桌上熱水孔旁邊的綠色粉末通常是什麼？",
    "options": [
      "紫菜粉",
      "綠茶粉",
      "芥末粉",
      "抹茶鹽"
    ],
    "answerIndex": 1,
    "explanation": "迴轉壽司店提供的是研磨綠茶粉（煎茶粉），沖入熱水飲用。"
  },
  {
    "id": "q_food_2_4",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "大熊貓（大貓熊）平時在竹林裡最喜歡吃的主食植物是什麼？",
    "options": [
      "竹子",
      "尤加利",
      "甘蔗",
      "甜香蕉"
    ],
    "answerIndex": 0,
    "explanation": "大熊貓的食物 99% 都是新鮮竹葉、竹筍與竹桿。"
  },
  {
    "id": "q_food_2_5",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "知名法國甜點「可頌」（Croissant）因為其造型特殊，在台灣常被稱為什麼麵包？",
    "options": [
      "菠蘿麵包",
      "吐司麵包",
      "牛角麵包",
      "法棍麵包"
    ],
    "answerIndex": 2,
    "explanation": "可頌法文原意為新月，彎曲層疊的外形就像兩隻牛角。"
  },
  {
    "id": "q_food_2_6",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "著名物理學家牛頓坐在樹下時，據傳是被什麼掉落的水果砸中啟發萬有引力？",
    "options": [
      "檸檬",
      "水梨",
      "桃子",
      "蘋果"
    ],
    "answerIndex": 3,
    "explanation": "相傳牛頓在果園看見蘋果垂直落地，因而深思重力存在。"
  },
  {
    "id": "q_food_2_7",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "一般家庭炒菜料理時經常使用的大蒜，其氣味濃烈主要是因為含有哪種成分？",
    "options": [
      "大蒜素",
      "咖啡因",
      "薄荷腦",
      "花青素"
    ],
    "answerIndex": 0,
    "explanation": "蒜頭壓碎後蒜氨酸酶催化產生大蒜素，具有強烈辛辣氣味。"
  },
  {
    "id": "q_food_2_8",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "我們常喝的純黑咖啡，其濃醇甘苦風味主要提煉自烘焙過的什麼果實種子？",
    "options": [
      "黃豆莢",
      "向日葵籽",
      "咖啡豆",
      "可可豆"
    ],
    "answerIndex": 2,
    "explanation": "咖啡是將茜草科咖啡樹漿果內的種子經過發酵烘焙研磨而成。"
  },
  {
    "id": "q_food_2_9",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "日式章魚燒在剛烤好起鍋時，表面灑上哪種薄薄的配料會像跳舞一樣蜷曲擺動？",
    "options": [
      "香噴噴柴魚片",
      "脆脆的洋蔥丁",
      "黑黑的芝麻粒",
      "甜甜的起司絲"
    ],
    "answerIndex": 0,
    "explanation": "柴魚片削得極薄，接觸到滾燙的章魚燒熱氣時因水分蒸發熱對流而蜷動。"
  },
  {
    "id": "q_food_2_10",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "泰國傳統最具代表性的酸辣海鮮湯「冬蔭功」，湯頭必備的靈魂肉類主角是？",
    "options": [
      "新鮮大鮮蝦",
      "滑嫩鮮雞肉",
      "鮮美大干貝",
      "嫩切牛肉片"
    ],
    "answerIndex": 0,
    "explanation": "泰語中「冬蔭（Tom Yam）」代表酸辣湯，「功（Goong）」代表鮮蝦。"
  },
  {
    "id": "q_food_3_1",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "日常烘焙蛋糕甜點時，能讓麵團在烤箱中蓬鬆發泡膨脹的常用粉末是？",
    "options": [
      "玉米澱粉",
      "泡打粉",
      "奶精粉",
      "白砂糖"
    ],
    "answerIndex": 1,
    "explanation": "泡打粉（發酵粉）受熱釋放二氧化碳氣泡，使蛋糕組織鬆軟。"
  },
  {
    "id": "q_food_3_2",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "世界著名經典名畫《最後的晚餐》，是哪一位文藝復興全才巨匠的大作？",
    "options": [
      "畢卡索",
      "米開朗基羅",
      "達文西",
      "拉斐爾"
    ],
    "answerIndex": 2,
    "explanation": "李奧納多·達文西在米蘭聖瑪利亞感恩修道院繪製了此壁畫。"
  },
  {
    "id": "q_food_3_3",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "一般常見的棒棒糖或硬糖，在食品工藝上主要由高溫熬煮的什麼糖類製成？",
    "options": [
      "植物辣油",
      "蔗糖糖漿",
      "精製食鹽",
      "食用醋酸"
    ],
    "answerIndex": 1,
    "explanation": "硬糖主要由蔗糖與玉米糖漿加熱熬煮到高溫硬脆狀態冷卻成型。"
  },
  {
    "id": "q_food_3_4",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "台灣市面上常見的「綠豆湯」如果長時間與空氣中的氧氣接觸氧化，顏色容易偏？",
    "options": [
      "純白色",
      "淡紅色",
      "深黑色",
      "青藍色"
    ],
    "answerIndex": 1,
    "explanation": "綠豆皮中的多酚類物質接觸空氣氧化後會轉化成紅色茶多酚。"
  },
  {
    "id": "q_food_3_5",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "被譽為「熱帶水果之王」，外殼帶刺、果肉金黃氣味特殊濃烈的水果是？",
    "options": [
      "山竹",
      "波羅蜜",
      "紅毛丹",
      "榴槤"
    ],
    "answerIndex": 3,
    "explanation": "榴槤果實氣味濃郁獨特，在東南亞享有「水果之王」美譽。"
  },
  {
    "id": "q_food_3_6",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "台灣知名的小吃「臭豆腐」，其濃烈特殊氣味是由豆腐在什麼發酵滷汁中浸泡而來？",
    "options": [
      "濃縮醬油高湯",
      "蔬菜草本莧菜汁",
      "重甜濃黑糖水",
      "天然米醋米酒"
    ],
    "answerIndex": 1,
    "explanation": "傳統臭豆腐以莧菜、竹筍與草本植物長時間發酵的發酵滷水醃製。"
  },
  {
    "id": "q_food_3_7",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "日常使用的微波爐加熱食物時，主要是透過引導微波讓食物中的什麼分子快速震動發熱？",
    "options": [
      "水分子",
      "鐵離子",
      "食鹽粒",
      "碳纖維"
    ],
    "answerIndex": 0,
    "explanation": "微波爐的高頻電磁波能使食物中極性水分子快速旋轉摩擦生熱。"
  },
  {
    "id": "q_food_3_8",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "哪種外形憨厚的無翼小鳥是紐西蘭的國鳥與標誌象徵，且蛋體積比例極大？",
    "options": [
      "喜鵲鳥",
      "渡渡鳥",
      "八哥鳥",
      "奇異鳥"
    ],
    "answerIndex": 3,
    "explanation": "幾維鳥（奇異鳥）翅膀完全退化，其名稱由叫聲而來。"
  },
  {
    "id": "q_food_3_9",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "人體內分泌系統中，負責分泌胰島素調控血液中血糖高低平衡的器官是？",
    "options": [
      "胰臟",
      "膽囊",
      "胃臟",
      "脾臟"
    ],
    "answerIndex": 0,
    "explanation": "胰臟內的胰島細胞分泌胰島素促使細胞吸收葡萄糖降低血糖。"
  },
  {
    "id": "q_food_3_10",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "哪種鳥類產下的卵是世界上最小的鳥蛋，體積如同綠豆般大小？",
    "options": [
      "麻雀",
      "吸蜜蜂鳥",
      "斑文鳥",
      "金絲雀"
    ],
    "answerIndex": 1,
    "explanation": "吸蜜蜂鳥是世界最小鳥類，其鳥蛋重量僅約半公克。"
  },
  {
    "id": "q_food_4_1",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "世界上最深的海溝「馬里亞納海溝」深達萬米以上，它坐落於哪一個大洋？",
    "options": [
      "大西洋",
      "太平洋",
      "印度洋",
      "北冰洋"
    ],
    "answerIndex": 1,
    "explanation": "馬里亞納海溝最深處斐查茲海淵深達 11034 公尺，位於西太平洋。"
  },
  {
    "id": "q_food_4_2",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "哪種海洋軟體動物的血液因為富含銅元素的「血藍蛋白」，在空氣中呈現青藍色？",
    "options": [
      "金槍魚",
      "八爪章魚",
      "大白鯊",
      "翻車魚"
    ],
    "answerIndex": 1,
    "explanation": "節肢動物與部分軟體動物用血藍蛋白運氧，血液呈現天然天藍色。"
  },
  {
    "id": "q_food_4_3",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "名畫《星夜》以奔放厚重的漩渦筆觸描繪璀璨星空，是哪位荷蘭後印象派畫家作品？",
    "options": [
      "梵谷",
      "莫內",
      "畢卡索",
      "高更"
    ],
    "answerIndex": 0,
    "explanation": "文森·梵谷在聖雷米精神病院養病期間創作出震撼人心的《星夜》。"
  },
  {
    "id": "q_food_4_4",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "日常生活中常見的咖啡飲品「拿鐵」（Caffè Latte），Latte 在義大利語中原意指？",
    "options": [
      "鮮牛奶",
      "焦糖糖漿",
      "肉桂粉",
      "黑咖啡"
    ],
    "answerIndex": 0,
    "explanation": "義大利文 Latte 就是純牛奶，若在義大利單點 Latte 會得到一杯鮮奶。"
  },
  {
    "id": "q_food_4_5",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "日常吃壽司常搭配的綠色嗆鼻調味醬「哇沙比」，傳統上由哪種山葵研磨而成？",
    "options": [
      "本山葵根部",
      "綠辣椒果實",
      "芥菜種子碎屑",
      "生薑根莖"
    ],
    "answerIndex": 0,
    "explanation": "真正的芥末是用純淨冷泉栽培的十字花科山葵新鮮根莖研磨而成。"
  },
  {
    "id": "q_food_4_6",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "哪座被譽為「水上浮城」的知名東南亞觀光水上市場，位於泰國首都曼谷近郊？",
    "options": [
      "峇里島海灘市場",
      "胡志明市水上市集",
      "檳城小吃市集",
      "丹嫩莎朵水上市場"
    ],
    "answerIndex": 3,
    "explanation": "丹嫩莎朵水上市場有上百年歷史，小木船滿載新鮮熱帶水果穿梭。"
  },
  {
    "id": "q_food_4_7",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "著名物理學家阿基米德在洗澡時發現浮力定律，興奮得跳出浴缸大喊的名詞是？",
    "options": [
      "Bingo",
      "Veni",
      "Eureka",
      "Bravo"
    ],
    "answerIndex": 2,
    "explanation": "希臘語「Eureka」意為「我找到了」，用來形容靈光乍現瞬間。"
  },
  {
    "id": "q_food_4_8",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "哪種產自熱帶非洲的原生植物豆莢種子，經過發酵研磨是製作香濃巧克力的原料？",
    "options": [
      "可可豆",
      "香草豆莢",
      "咖啡豆",
      "肉豆蔻籽"
    ],
    "answerIndex": 0,
    "explanation": "巧克力源自可可樹果實內的可可豆，提煉可可脂與可可固形物製成。"
  },
  {
    "id": "q_food_4_9",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "人體內部哪一種血球細胞負責在傷口破皮流血時凝結成塊、堵住血管止血？",
    "options": [
      "淋巴球",
      "紅血球",
      "白血球",
      "血小板"
    ],
    "answerIndex": 3,
    "explanation": "血小板釋放凝血因子並黏著聚集，形成血纖維蛋白血栓封閉傷口。"
  },
  {
    "id": "q_food_4_10",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "哪種生長在非洲大草原上的奇特大樹，樹幹粗大如同巨大水塔，被稱為「猢猻木」？",
    "options": [
      "金合歡樹",
      "猴麵包樹",
      "旅人蕉",
      "大葉桉樹"
    ],
    "answerIndex": 1,
    "explanation": "猴麵包樹木質疏鬆能儲存上萬公升水分以度過非洲酷熱漫長的旱季。"
  },
  {
    "id": "q_food_5_1",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "我們常吃的海洋甲殼類「蝦子」與龍蝦，牠們重要跳動的心臟器官長在哪個部位？",
    "options": [
      "尾巴尖",
      "腹部中",
      "步足內",
      "頭胸部"
    ],
    "answerIndex": 3,
    "explanation": "蝦類內臟器官極度集中，心臟、胃部與腦部神經節皆位於頭胸甲內。"
  },
  {
    "id": "q_food_5_2",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "軟體動物「蝸牛」嘴巴裡擁有多達上萬顆微小角質牙齒，這種摩擦食物的構造是？",
    "options": [
      "鋸齒",
      "齒舌",
      "角顎",
      "軟顎"
    ],
    "answerIndex": 1,
    "explanation": "蝸牛長有一條佈滿數萬顆細小微齒的齒舌，像銼刀一樣刮碎葉片進食。"
  },
  {
    "id": "q_food_5_3",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "知名經典快餐「三明治」（Sandwich）名稱，起源於英國哪一位熱愛玩橋牌的貴族伯爵？",
    "options": [
      "諾森伯蘭伯爵",
      "威靈頓公爵一世",
      "馬爾博羅公爵",
      "三明治伯爵四世"
    ],
    "answerIndex": 3,
    "explanation": "約翰·孟塔古（三明治伯爵四世）沉迷紙牌為不弄髒手指吩咐夾肉吃。"
  },
  {
    "id": "q_food_5_4",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "哪位古希臘偉大科學家在西西里島利用槓桿原理曾豪言：「給我一個支點，我就能舉起地球」？",
    "options": [
      "亞里斯多德",
      "歐幾里得",
      "阿基米德",
      "畢達哥拉斯"
    ],
    "answerIndex": 2,
    "explanation": "阿基米德在論槓桿力矩平衡時向敘拉古國王誇示槓桿原理之奧妙。"
  },
  {
    "id": "q_food_5_5",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "哪種具有強韌蛛絲的大型熱帶蛛形綱動物，其吐出的牽引絲強韌度超越同等粗細鋼絲？",
    "options": [
      "大金圓蛛蜘蛛",
      "盲蛛長腳蛛",
      "地穴捕鳥蛛",
      "沙漠黑寡婦"
    ],
    "answerIndex": 0,
    "explanation": "蜘蛛牽絲由富含甘氨酸的彈性蛋白纖維組成，韌性極高抗拉力驚人。"
  },
  {
    "id": "q_food_5_6",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "哪位古典文藝復興天才雕刻巨匠，耗時四年在大理石上雕刻出了英姿颯爽的《大衛像》？",
    "options": [
      "達文西",
      "拉斐爾",
      "米開朗基羅",
      "多納泰羅"
    ],
    "answerIndex": 2,
    "explanation": "米開朗基羅以極致解剖學線條刻畫大衛準備迎戰巨人歌利亞的堅定眼神。"
  },
  {
    "id": "q_food_5_7",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "知名電玩遊戲《吃豆人》（Pac-Man）圓形缺口黃色主角的靈感，來自創作者吃什麼？",
    "options": [
      "切片柳丁果肉",
      "中秋紅豆月餅",
      "缺角薄餅披薩",
      "圓形荷包蛋"
    ],
    "answerIndex": 2,
    "explanation": "岩谷徹在午餐切下一片圓披薩時，看到缺口像一張大嘴萌生靈感。"
  },
  {
    "id": "q_food_5_8",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "哪種具有堅硬外殼的海洋節肢動物擁有珍貴的「藍色血液」，廣泛應用於醫學內毒素檢測？",
    "options": [
      "東方鱟鱟魚",
      "錦繡龍蝦",
      "帝王蟹",
      "寄居蟹"
    ],
    "answerIndex": 0,
    "explanation": "鱟的血液含有血藍蛋白與變形細胞溶解物，接觸細菌內毒素會快速凝固。"
  },
  {
    "id": "q_food_5_9",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "哪位俄國偉大化學家在 1869 年根據原子量規律，首次成功繪製出了化學元素週期表？",
    "options": [
      "門得列夫",
      "道爾頓",
      "拉瓦節",
      "居禮夫人"
    ],
    "answerIndex": 0,
    "explanation": "德米特里·門得列夫發現元素週期律，並準確預言了鎵、鍺等多種未知元素。"
  },
  {
    "id": "q_food_5_10",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "法國香檳區出產的氣泡酒被稱為「香檳」，其法定製程必須在何處進行二次發酵？",
    "options": [
      "密閉酒瓶內部",
      "大型不銹鋼槽",
      "開放式橡木桶",
      "低溫陶瓦地窖"
    ],
    "answerIndex": 0,
    "explanation": "正統香檳必須遵循傳統香檳法，將酒液裝入瓶中進行瓶內二次自然發酵產生細緻氣泡。"
  }
];

/**
 * 動態隨機洗牌題目四個選項，徹底杜絕固定選項規律
 */
export function shuffleQuestionOptions(question) {
  const originalOptions = question.options;
  const correctOptionText = originalOptions[question.answerIndex];

  // 建立隨機索引映射
  const shuffledIndices = [0, 1, 2, 3];
  for (let i = shuffledIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
  }

  const newOptions = shuffledIndices.map((idx) => originalOptions[idx]);
  const newAnswerIndex = newOptions.indexOf(correctOptionText);

  return {
    ...question,
    options: newOptions,
    answerIndex: newAnswerIndex,
  };
}

/**
 * 題庫管理器 (支援單局防重複抽題 + 跨局歷史記憶防重複 + 主題關卡篩選)
 */
class QuestionManager {
  constructor() {
    this.currentTheme = 'all'; // 'all' | 'life' | 'nature' | 'world' | 'anime' | 'food'
    this.sessionUsedIds = new Set();
    this.historyUsedIds = new Set();
    this.loadHistory();
  }

  setTheme(themeId) {
    this.currentTheme = themeId || 'all';
  }

  loadHistory() {
    try {
      const saved = localStorage.getItem('catdog_history_questions');
      if (saved) {
        const arr = JSON.parse(saved);
        this.historyUsedIds = new Set(arr);
      }
    } catch (e) {
      console.warn('localStorage read error:', e);
    }
  }

  saveHistory() {
    try {
      if (this.historyUsedIds.size > 180) {
        const list = Array.from(this.historyUsedIds);
        this.historyUsedIds = new Set(list.slice(list.length - 100));
      }
      localStorage.setItem(
        'catdog_history_questions',
        JSON.stringify(Array.from(this.historyUsedIds))
      );
    } catch (e) {
      console.warn('localStorage save error:', e);
    }
  }

  resetSession() {
    this.sessionUsedIds.clear();
  }

  getUniqueQuestion(targetDiff, forcedCategory = null) {
    const diff = Math.max(1, Math.min(5, targetDiff));
    const activeCategory = forcedCategory || (this.currentTheme !== 'all' ? this.currentTheme : null);

    // 基礎池：依據當前關卡主題過濾 (若為 all 則為全題庫)
    const basePool = activeCategory
      ? QUESTIONS.filter((q) => q.category === activeCategory)
      : QUESTIONS;

    // 1. 同主題、同難度、未抽過
    let candidates = basePool.filter(
      (q) => q.difficulty === diff && !this.sessionUsedIds.has(q.id) && !this.historyUsedIds.has(q.id)
    );

    // 2. 相鄰難度 (diff ± 1)
    if (candidates.length === 0) {
      candidates = basePool.filter(
        (q) => Math.abs(q.difficulty - diff) <= 1 && !this.sessionUsedIds.has(q.id) && !this.historyUsedIds.has(q.id)
      );
    }

    // 3. 該主題所有未抽過
    if (candidates.length === 0) {
      candidates = basePool.filter(
        (q) => !this.sessionUsedIds.has(q.id) && !this.historyUsedIds.has(q.id)
      );
    }

    // 4. 重置歷史池
    if (candidates.length === 0) {
      this.historyUsedIds.clear();
      this.saveHistory();
      candidates = basePool.filter(
        (q) => q.difficulty === diff && !this.sessionUsedIds.has(q.id)
      );
      if (candidates.length === 0) {
        candidates = basePool.filter((q) => !this.sessionUsedIds.has(q.id));
      }
    }

    // 若依然用盡，從全題庫獲取
    if (candidates.length === 0) {
      candidates = QUESTIONS;
    }

    const selected = candidates[Math.floor(Math.random() * candidates.length)];
    this.sessionUsedIds.add(selected.id);
    this.historyUsedIds.add(selected.id);
    this.saveHistory();

    return shuffleQuestionOptions(selected);
  }
}

export const questionManager = new QuestionManager();

export function getQuestionByDifficulty(targetDiff, category = null) {
  return questionManager.getUniqueQuestion(targetDiff, category);
}

/**
 * 貓狗大戰：常識地盤爭奪戰 - 主題分類題庫系統 (Question Bank)
 * 涵蓋五大主題：🌿 生活常識、🔬 自然科學、🗺️ 世界地理、🎬 動漫娛樂、🍔 吃貨美食
 * 每個主題各 150 題 (難度 1~5 各 30 題)，共 750 道正宗知識王風格趣味題目！
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
    "id": "q_life_1_11",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "日常生活中「洗手五步驟」的第一個正確步驟動作是？",
    "options": [
      "先濕潤雙手",
      "抹抗菌肥皂",
      "用清水沖洗",
      "拿毛巾擦乾"
    ],
    "answerIndex": 0,
    "explanation": "正確洗手五步驟口訣為「濕、搓、沖、捧、擦」，第一步是先以乾淨清水弄濕雙手。"
  },
  {
    "id": "q_life_1_12",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "農曆每個月的「十五」，在晴朗夜空中看見的月亮形狀通常是？",
    "options": [
      "圓圓的滿月",
      "細細的眉月",
      "半圓的上弦",
      "彎彎的下弦"
    ],
    "answerIndex": 0,
    "explanation": "農曆十五至十六為望日，太陽與月球在地球兩側，看見的是完整圓形的滿月。"
  },
  {
    "id": "q_life_1_13",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "搭乘大眾捷運系統或公車時，車廂內通常會設置什麼座位給需要的人？",
    "options": [
      "博愛專用座",
      "商務頭等艙",
      "司機休息位",
      "行李放置處"
    ],
    "answerIndex": 0,
    "explanation": "大眾運輸工具皆設有博愛座，禮讓年長者、孕婦、行動不便者及身體不適者優先乘坐。"
  },
  {
    "id": "q_life_1_14",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "在台灣過農曆新年除夕夜時，長輩通常會給晚輩什麼象徵平安吉祥？",
    "options": [
      "喜氣紅紅包",
      "新年新衣服",
      "甜甜發發糕",
      "新鮮大橘子"
    ],
    "answerIndex": 0,
    "explanation": "除夕夜吃完團圓年夜飯後，長輩會發給晚輩壓歲錢紅包，寓意辟邪壓歲與平安長大。"
  },
  {
    "id": "q_life_1_15",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "日常刷牙時，牙醫師通常建議每次刷牙的最適當時間大約多久？",
    "options": [
      "至少兩分鐘",
      "大約十秒鐘",
      "至少十分鐘",
      "只要三十秒"
    ],
    "answerIndex": 0,
    "explanation": "落實貝氏刷牙法每次至少刷滿兩分鐘，確保每個齒面與牙齦溝都有徹底清潔。"
  },
  {
    "id": "q_life_1_16",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "在公共場所看到逃生指示標誌時，其標誌圖案通常採用什麼顏色？",
    "options": [
      "明亮鮮綠色",
      "鮮豔大紅色",
      "活潑亮黃色",
      "沉穩深藍色"
    ],
    "answerIndex": 0,
    "explanation": "國際標準逃生避難方向指示燈一律採用高辨識度的綠色，象徵安全無虞與通行。"
  },
  {
    "id": "q_life_1_17",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "手機能夠隨身攜帶並重複充電使用，內部通常使用的是哪種電池？",
    "options": [
      "鋰離子電池",
      "乾式鋅碳電",
      "強效鹼性電",
      "古老鉛酸電"
    ],
    "answerIndex": 0,
    "explanation": "智慧型手機與現代筆電大多採用能量密度高、無記憶效應的二次鋰離子電池。"
  },
  {
    "id": "q_life_1_18",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "日常生活中的「一打」鉛筆，總共代表包含幾支鉛筆？",
    "options": [
      "一共十二支",
      "一共十支筆",
      "一共十五支",
      "一共二十支"
    ],
    "answerIndex": 0,
    "explanation": "國際常見計量單位「一打（Dozen）」等於 12 個，源自古西方十二進位計數習慣。"
  },
  {
    "id": "q_life_1_19",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "日常投遞信件時，台灣郵筒中「綠色郵筒」主要用來投遞哪種郵件？",
    "options": [
      "普通平信件",
      "航空急件信",
      "限時掛號信",
      "快捷包裹箱"
    ],
    "answerIndex": 0,
    "explanation": "綠色郵筒專門投遞普通信件與明信片，紅色郵筒則專門用於投遞限時信件與航空郵件。"
  },
  {
    "id": "q_life_1_20",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "一般學校或辦公室常用的影印紙尺寸中，最普遍常見的是哪一種規格？",
    "options": [
      "Ａ４規格紙",
      "Ａ３規格紙",
      "Ｂ５規格紙",
      "Ｂ４規格紙"
    ],
    "answerIndex": 0,
    "explanation": "A4（210mm × 297mm）是全球最通用的國際標準文件與影印用紙張尺寸。"
  },
  {
    "id": "q_life_1_21",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "我們平常用尺測量長度時，「一公尺」通常等於多少公分？",
    "options": [
      "一百公分長",
      "十公分長度",
      "一千公分長",
      "五十公分長"
    ],
    "answerIndex": 0,
    "explanation": "公制長度單位換算中，1 公尺（meter）嚴格等於 100 公分（centimeter）。"
  },
  {
    "id": "q_life_1_22",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "在道路上遇到救護車或消防車響警笛執行緊急任務時，車輛應如何應對？",
    "options": [
      "減速並避讓",
      "加速往前衝",
      "停原地不動",
      "緊隨其後行"
    ],
    "answerIndex": 0,
    "explanation": "用路人聽到緊急車輛警號時，應立即減速並向兩側車道避讓，保持救護通道暢通。"
  },
  {
    "id": "q_life_1_23",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "日常生活中的指南針，指針塗有紅色或標示Ｎ極的一端通常指向何方？",
    "options": [
      "正北方方向",
      "正南方方向",
      "正東方方向",
      "正西方方向"
    ],
    "answerIndex": 0,
    "explanation": "地磁北極吸引指南針磁北極（N極），因此指南針的 N 極會穩定指向地球地理北方。"
  },
  {
    "id": "q_life_1_24",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "進出醫院、診所或感冒生病時，配戴口罩最主要的目的為何？",
    "options": [
      "防止飛沫傳",
      "保持臉部暖",
      "阻擋紫外線",
      "修飾臉型美"
    ],
    "answerIndex": 0,
    "explanation": "口罩的核心功用為過濾空氣中的呼吸道飛沫與病菌，保護自己並避免傳播給他人。"
  },
  {
    "id": "q_life_1_25",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "日常飲用瓶裝水或罐裝飲料前，瓶蓋通常會有一圈密封環，其作用是？",
    "options": [
      "證明未開封",
      "增加美觀度",
      "防止過度冷",
      "方便手拿取"
    ],
    "answerIndex": 0,
    "explanation": "防偽防拆環一旦旋開就會斷裂，確保消費者能一眼確認商品在出廠後未被拆封過。"
  },
  {
    "id": "q_life_1_26",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "夜間騎乘自行車時，為了行車安全，車頭通常建議安裝什麼顏色的燈？",
    "options": [
      "明亮白光燈",
      "刺眼紅光燈",
      "深沈藍光燈",
      "濃郁綠光燈"
    ],
    "answerIndex": 0,
    "explanation": "交通法規規定自行車夜間行車前燈應為白色或淡黃色，後方則需裝設紅色警示反光燈。"
  },
  {
    "id": "q_life_1_27",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "洗完頭髮後使用吹風機吹乾，主要是利用熱風加速水分的什麼過程？",
    "options": [
      "水分的蒸發",
      "水分的凝結",
      "水分的昇華",
      "水分的沉澱"
    ],
    "answerIndex": 0,
    "explanation": "吹風機加熱空氣並加速空氣流動，提供熱量以大幅加快頭髮表層水分的蒸發速度。"
  },
  {
    "id": "q_life_1_28",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "日常生活使用的時鐘表面上，通常最長且走得最快的那一根指針是？",
    "options": [
      "秒針細長針",
      "分針指示針",
      "時針短指針",
      "鬧鈴設定針"
    ],
    "answerIndex": 0,
    "explanation": "標準石英時鐘表面上，最細長且走動最快速的指針為指示秒數推進的秒針。"
  },
  {
    "id": "q_life_1_29",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "若不小心被紙張邊緣劃傷手指時，第一時間最適當的處理方式為何？",
    "options": [
      "清水沖洗敷",
      "用紙巾緊塞",
      "塗抹食用油",
      "用嘴用力吸"
    ],
    "answerIndex": 0,
    "explanation": "紙割傷應先以乾淨清水或生理食鹽水沖洗乾淨，再貼上透氣防水創口貼保護傷口。"
  },
  {
    "id": "q_life_1_30",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 1,
    "question": "日常生活中寄送信件貼在信封右上角的憑證，由郵局發行的是什麼？",
    "options": [
      "精美小郵票",
      "發票收據條",
      "集點貼紙貼",
      "姓名印章貼"
    ],
    "answerIndex": 0,
    "explanation": "郵票是由國家郵政機關發行的郵資預付證明憑證，貼在信件上代表已支付郵寄費用。"
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
    "id": "q_life_2_11",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "日常家庭常用的小蘇打粉，在化學性質上通常呈現何種酸鹼性？",
    "options": [
      "弱鹼性性質",
      "強酸性性質",
      "中性純性質",
      "強鹼性性質"
    ],
    "answerIndex": 0,
    "explanation": "碳酸氫鈉（小蘇打）溶於水後水解呈弱鹼性，常作為居家清潔油垢與烘焙發粉。"
  },
  {
    "id": "q_life_2_12",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "在台灣日常生活中，家用天然氣瓦斯若發生微量外洩時會聞到臭味，原因為？",
    "options": [
      "添加臭劑氣",
      "瓦斯本身臭",
      "管線生鏽味",
      "空氣燃燒味"
    ],
    "answerIndex": 0,
    "explanation": "天然氣本身無色無味，瓦斯公司依法特意添加微量硫醇類臭劑，以便外洩時民眾即時警覺。"
  },
  {
    "id": "q_life_2_13",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "中秋節傳統民間習俗中，除了品嚐香甜月餅外，通常還會吃哪種當季水果？",
    "options": [
      "清甜大文旦",
      "多汁水蜜桃",
      "新鮮紅草莓",
      "甜脆綠棗子"
    ],
    "answerIndex": 0,
    "explanation": "文旦柚子為秋季盛產水果，「柚」音同「佑」，民間視為保佑家人平安團聚的吉祥象徵。"
  },
  {
    "id": "q_life_2_14",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "日常生活使用的鉛筆筆芯，其主要成分是由哪兩種物質混合燒結而成？",
    "options": [
      "石墨與黏土",
      "純金屬鉛塊",
      "木炭與塑膠",
      "焦煤與硫磺"
    ],
    "answerIndex": 0,
    "explanation": "鉛筆筆芯完全不含鉛，是由石墨粉與優質黏土按不同比例混合加壓燒製而成。"
  },
  {
    "id": "q_life_2_15",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "居家洗澡使用的肥皂之所以能洗去皮膚上的油脂髒污，是因為肥皂分子具有？",
    "options": [
      "親水與親油",
      "強烈腐蝕性",
      "超高揮發度",
      "磁力吸引性"
    ],
    "answerIndex": 0,
    "explanation": "肥皂為界面活性劑，親油端吸附油脂污垢，親水端與水結合，藉由沖水帶走油污。"
  },
  {
    "id": "q_life_2_16",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "日常生活中常用的不銹鋼保溫杯，內外雙層金屬之間通常採用什麼設計保溫？",
    "options": [
      "抽成高真空",
      "填充保麗龍",
      "灌滿冷卻水",
      "注入熱蒸氣"
    ],
    "answerIndex": 0,
    "explanation": "雙層杯壁之間抽成高度真空狀態，能徹底阻絕熱對流與熱傳導，達到長效保溫保冰效果。"
  },
  {
    "id": "q_life_2_17",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "在台灣便利商店購買微波便當加熱時，店員通常會先將塑膠封膜做何種處理？",
    "options": [
      "剪開一小角",
      "整層全撕掉",
      "用力壓扁它",
      "貼膠帶封死"
    ],
    "answerIndex": 0,
    "explanation": "微波加熱會使便當內部水分迅速氣化產生蒸氣，剪角能及時排氣避免餐盒受壓膨脹爆開。"
  },
  {
    "id": "q_life_2_18",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "家中冷氣機在夏天吹出涼爽冷風時，通常會有一條水管不斷滴水，原因是？",
    "options": [
      "空氣水凝結",
      "冷媒過多漏",
      "機器零件破",
      "壓縮機出汗"
    ],
    "answerIndex": 0,
    "explanation": "室內潮濕空氣接觸冰冷的冷氣蒸發器鰭片時，水蒸氣遇冷凝結成液態水，由排水管排出。"
  },
  {
    "id": "q_life_2_19",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "日常運動或健走時，智慧手錶或計步器最常建議的每日健康步數大約是多少？",
    "options": [
      "約一萬步數",
      "約五百步數",
      "約十萬步數",
      "約兩千步數"
    ],
    "answerIndex": 0,
    "explanation": "國際衛生組織與多國健康指引廣泛推薦健康成人每日步行約 8,000 至 10,000 步促進代謝。"
  },
  {
    "id": "q_life_2_20",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "夏天為了防止皮膚被太陽曬黑甚至曬傷，出門前通常會塗抹具有什麼防護的防曬乳？",
    "options": [
      "阻擋紫外線",
      "吸附冷空氣",
      "阻絕紅外線",
      "加強吸熱量"
    ],
    "answerIndex": 0,
    "explanation": "防曬乳主要透過物理或化學防曬成分，阻隔太陽光中的 UVA（防曬老）與 UVB（防曬傷）。"
  },
  {
    "id": "q_life_2_21",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "搭乘飛機起飛或降落時，由於機艙氣壓急遽變化導致耳朵悶痛，可以藉由什麼緩解？",
    "options": [
      "吞嚥口水咽",
      "緊緊閉雙眼",
      "屏住呼吸氣",
      "用雙手抓頭"
    ],
    "answerIndex": 0,
    "explanation": "吞嚥口水、咀嚼口香糖或打哈欠能促使耳咽管開啟，讓中耳腔與外界氣壓迅速恢復平衡。"
  },
  {
    "id": "q_life_2_22",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "日常選購雞蛋回家保存時，通常建議將雞蛋的哪一端朝上放置在冰箱保鮮較久？",
    "options": [
      "較圓鈍的一端",
      "較尖銳的一端",
      "兩端橫放躺平",
      "倒立側斜放置"
    ],
    "answerIndex": 0,
    "explanation": "雞蛋鈍端內部有氣室，鈍端朝上能避免蛋黃貼附蛋殼，延緩微生物入侵並延長保鮮期。"
  },
  {
    "id": "q_life_2_23",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "日常生活遇到火災發生濃煙時，逃生避難姿勢通常應採取何種動作移動？",
    "options": [
      "壓低身軀爬",
      "挺胸大步跑",
      "站立大聲喊",
      "原地跳躍走"
    ],
    "answerIndex": 0,
    "explanation": "火災煙霧熱氣往上升，離地面 30 公分處通常殘留較多新鮮空氣，採低姿勢爬行逃生最安全。"
  },
  {
    "id": "q_life_2_24",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "日常生活中食用油若不慎在高溫油鍋中起火燃燒，下列哪一項是絕對不可採取的動作？",
    "options": [
      "倒水進入鍋",
      "蓋上鍋蓋滅",
      "關閉瓦斯火",
      "使用滅火器"
    ],
    "answerIndex": 0,
    "explanation": "水接觸滾燙熱油會瞬間沸騰氣化並向外爆濺，將燃燒中的熱油帶至空中形成巨大火球。"
  },
  {
    "id": "q_life_2_25",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "一般在白天大太陽下停車時，車主常在擋風玻璃前放置銀色反光板，其主要目的為？",
    "options": [
      "反射太陽熱",
      "防止車被偷",
      "保護雨刷片",
      "遮擋車牌號"
    ],
    "answerIndex": 0,
    "explanation": "銀色鋁箔反光隔熱遮陽板能有效反射太陽輻射熱與直射光線，顯著減緩車內溫度飆高。"
  },
  {
    "id": "q_life_2_26",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "日常洗滌衣物時，有些衣物標籤標示「不可水洗」，通常代表該衣物適合採用何種清潔？",
    "options": [
      "專業乾洗法",
      "高溫烘乾法",
      "強烈漂白水",
      "熱水浸泡法"
    ],
    "answerIndex": 0,
    "explanation": "羊毛、真絲等天然纖維遇水易縮水或變形，標籤註明不可水洗時應送交專業乾洗店乾洗。"
  },
  {
    "id": "q_life_2_27",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "吃太辣時嘴巴感覺劇烈灼痛，若想迅速緩解辣感，飲用下列哪種飲品效果最佳？",
    "options": [
      "全脂冰牛奶",
      "冰鎮純開水",
      "碳酸黑可樂",
      "高山熱烏龍"
    ],
    "answerIndex": 0,
    "explanation": "辣椒素為脂溶性非水溶性物質，牛奶中的酪蛋白與乳脂肪能有效包覆並洗去口腔辣椒素。"
  },
  {
    "id": "q_life_2_28",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "家庭烘焙製作麵包或饅頭時，使麵團能夠發酵膨脹出現氣孔的核心功臣是？",
    "options": [
      "活性酵母菌",
      "純天然白糖",
      "食用小精鹽",
      "優質橄欖油"
    ],
    "answerIndex": 0,
    "explanation": "酵母菌利用麵粉中的醣類進行發酵作用，產生二氧化碳氣體與乙醇，使麵團質地蓬鬆柔軟。"
  },
  {
    "id": "q_life_2_29",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "居家整理廢棄乾電池時，由於電池內部含有重金屬成分，通常應如何處理？",
    "options": [
      "投入回收桶",
      "丟入一般垃",
      "埋入花盆泥",
      "丟進馬桶沖"
    ],
    "answerIndex": 0,
    "explanation": "廢乾電池含有鋅、錳及重金屬，隨意丟棄會污染土壤水源，應收集後送交超商或資源回收。"
  },
  {
    "id": "q_life_2_30",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 2,
    "question": "日常生活在公車或捷運手扶梯搭乘時，為了乘車安全，通常會宣導什麼安全原則？",
    "options": [
      "緊握扶手站",
      "跑步衝刺過",
      "低頭滑手機",
      "坐在階梯上"
    ],
    "answerIndex": 0,
    "explanation": "搭乘電扶梯應緊握黑色移動扶手並站穩踏階，切勿在階梯上奔跑打鬧以防止摔倒意外。"
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
    "id": "q_life_3_11",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "日常生活中遇到成人突發心跳停止時，施作胸外心臟按壓的理想頻率每分鐘約為？",
    "options": [
      "100至120次",
      "60至70次間",
      "150次以上",
      "40至50次間"
    ],
    "answerIndex": 0,
    "explanation": "國際急救甦醒聯合會（ILCOR）指引建議成人胸外按壓速率應維持在每分鐘 100 至 120 次。"
  },
  {
    "id": "q_life_3_12",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "日常居家發生電器或電線走火引發的火災，在消防分類上屬於哪一類火災？",
    "options": [
      "Ｃ類電氣火",
      "Ａ類普通火",
      "Ｂ類油脂火",
      "Ｄ類金屬火"
    ],
    "answerIndex": 0,
    "explanation": "火災分類中，通電之電氣設備引發的火災為 C 類火災，嚴禁使用導電液體直接噴灑滅火。"
  },
  {
    "id": "q_life_3_13",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "一般市售家用電器插座上的「第三孔」圓形接地插孔，其最主要的安全作用是？",
    "options": [
      "防漏電觸電",
      "增加供電量",
      "加速電流過",
      "美觀平衡插"
    ],
    "answerIndex": 0,
    "explanation": "接地線（Ground）能將電器外殼意外漏電產生的危險電流安全導入大地，避免人體觸電危險。"
  },
  {
    "id": "q_life_3_14",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "家用熱水器若安裝於通風不良之密閉陽台，燃燒不完全時最容易產生哪種無色無味毒氣？",
    "options": [
      "一氧化碳氣",
      "二氧化碳氣",
      "二氧化硫氣",
      "純天然甲烷"
    ],
    "answerIndex": 0,
    "explanation": "瓦斯在缺氧狀態下燃燒不完全會產生具致命毒性的一氧化碳，與血紅素結合力強易致缺氧昏迷。"
  },
  {
    "id": "q_life_3_15",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "日常使用保鮮膜包裹食物時，下列哪一種食材加熱時應避免直接緊密接觸保鮮膜？",
    "options": [
      "高油脂肉品",
      "新鮮切水果",
      "生鮮綠蔬菜",
      "未煮乾麵條"
    ],
    "answerIndex": 0,
    "explanation": "高溫油脂可能加速保鮮膜塑膠材質中的化學添加劑或塑化劑溶出，因此覆蓋加熱應保留間距。"
  },
  {
    "id": "q_life_3_16",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "市售防曬乳瓶身標示的「SPF」數值，主要是評估對哪一種紫外線防護能力的指標？",
    "options": [
      "ＵＶＢ紫外線",
      "ＵＶＡ紫外線",
      "ＵＶＣ紫外線",
      "遠紅外線光"
    ],
    "answerIndex": 0,
    "explanation": "SPF（Sun Protection Factor）是針對會引起皮膚發紅曬傷的 UVB 紫外線的防護係數指標。"
  },
  {
    "id": "q_life_3_17",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "當在戶外空曠處突然遭遇雷擊暴風雨時，下列哪一種避難方式是相對最危險的？",
    "options": [
      "躲在高大樹下",
      "躲入鋼構車內",
      "進入鋼筋建築",
      "蹲下雙腳併攏"
    ],
    "answerIndex": 0,
    "explanation": "高聳孤立樹木容易吸引雷擊，雷電會順樹幹下竄並產生「側向閃擊」或步階電壓擊中樹下人。"
  },
  {
    "id": "q_life_3_18",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "日常食品外包裝常標示的「保存期限」與「賞味期限」，其中「賞味期限」是指？",
    "options": [
      "最佳美味品質",
      "最後食用安全",
      "商品製造時間",
      "店家進貨日期"
    ],
    "answerIndex": 0,
    "explanation": "源自日本的「賞味期限」代表在未開封且依規定保存下，能保證食品最佳風味口感的期限。"
  },
  {
    "id": "q_life_3_19",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "家庭使用的安全氣囊（Airbag）在汽車發生劇烈碰撞時，通常會在多少時間內瞬間充氣？",
    "options": [
      "約三十毫秒",
      "大約五整秒",
      "約三十分鐘",
      "大約一整秒"
    ],
    "answerIndex": 0,
    "explanation": "安全氣囊感測器偵測到碰撞後，透過化學氣體發生劑在約 30 毫秒（0.03秒）內瞬間充氣保護。"
  },
  {
    "id": "q_life_3_20",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "日常飲用水進行煮沸開水時，若水壺持續產生水垢沉澱，水垢的主要化學成分為？",
    "options": [
      "碳酸鈣沉澱",
      "氯化鈉食鹽",
      "硫酸銅結晶",
      "氧化鐵生鏽"
    ],
    "answerIndex": 0,
    "explanation": "硬水中含有豐富的鈣與鎂離子，水煮沸受熱後碳酸氫鈣分解轉化為難溶於水的碳酸鈣白水垢。"
  },
  {
    "id": "q_life_3_21",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "日常生活中感冒就醫時，醫師開立的抗生素（Antibiotics）主要用來治療何種感染？",
    "options": [
      "細菌病原感染",
      "一般感冒病毒",
      "流感病毒感染",
      "過敏反應症狀"
    ],
    "answerIndex": 0,
    "explanation": "抗生素僅對細菌感染有效，對絕大多數引起普通感冒與流行性感冒的病毒完全沒有抑殺作用。"
  },
  {
    "id": "q_life_3_22",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "一般成人正常的收縮壓（高壓）與舒張壓（低壓），在國際標準理想範圍內通常應低於？",
    "options": [
      "120與80",
      "150與100",
      "90與50度",
      "180與110"
    ],
    "answerIndex": 0,
    "explanation": "世界心臟學會標準健康成人理想血壓為收縮壓 < 120 mmHg 且舒張壓 < 80 mmHg。"
  },
  {
    "id": "q_life_3_23",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "居家清潔若同時將「含氯漂白水」與「酸性清潔劑（如鹽酸）」混合使用，會產生何種劇毒？",
    "options": [
      "劇毒氯氣氣體",
      "無毒純氧氣體",
      "易燃氫氣氣體",
      "惰性氮氣氣體"
    ],
    "answerIndex": 0,
    "explanation": "次氯酸鈉漂白水遇酸會迅速發生氧化還原反應釋放黃綠色劇毒氯氣，吸入極易灼傷呼吸道甚至致命。"
  },
  {
    "id": "q_life_3_24",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "日常開車行經隧道或天色昏暗時，駕駛人依規定應主動開啟車輛的哪一種燈光？",
    "options": [
      "標準近光頭燈",
      "強烈遠光頭燈",
      "緊急雙閃黃燈",
      "車內閱讀燈光"
    ],
    "answerIndex": 0,
    "explanation": "隧道內及視線不佳路段應開啟近光燈提供照明與警示，隨意開啟遠光燈易造成對向來車眩光危險。"
  },
  {
    "id": "q_life_3_25",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "日常選購冰箱冷藏室的理想溫度設定，通常建議維持在幾度以確保食物安全不易變質？",
    "options": [
      "攝氏四度左右",
      "攝氏負十八度",
      "攝氏十五度上",
      "攝氏零下五度"
    ],
    "answerIndex": 0,
    "explanation": "多數致病細菌在 4℃ 以下生長代謝大幅減緩，因此冷藏室建議設定在 2℃ 至 4℃ 之間最為理想。"
  },
  {
    "id": "q_life_3_26",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "日常在銀行或郵局臨櫃提款時，若遇人身安全脅迫，金融機構通常設有哪種防搶安全裝置？",
    "options": [
      "隱蔽式警報鈕",
      "自動斷電閘門",
      "天花板噴灑水",
      "催淚瓦斯噴嘴"
    ],
    "answerIndex": 0,
    "explanation": "櫃檯底部隱蔽處設有靜音無聲報警按鈕，行員踩踏或按壓即可在不驚動歹徒下直接連線通報警方。"
  },
  {
    "id": "q_life_3_27",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "現代液晶螢幕顯示器常提及的「藍光（Blue Light）」，其波長與特性在光學光譜上屬於？",
    "options": [
      "短波長高能量",
      "長波長低能量",
      "不可見紅外光",
      "超低頻電磁波"
    ],
    "answerIndex": 0,
    "explanation": "可見光譜中藍光波長約 400~500nm，具有較短波長與較高光子能量，長時間直視易造成視網膜疲勞。"
  },
  {
    "id": "q_life_3_28",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "日常使用汽機車加油時，油品名稱如「95無鉛汽油」，其「95」數字代表的化學意義是？",
    "options": [
      "辛烷數值指標",
      "純度百分比例",
      "提煉溫度標準",
      "添加劑公克數"
    ],
    "answerIndex": 0,
    "explanation": "辛烷值（Octane Rating）是衡量汽油抗震爆（Anti-knock）能力的指標，數字越高代表抗爆震佳。"
  },
  {
    "id": "q_life_3_29",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "在台灣夏季容易發生的登革熱疫情，其傳播途徑主要是透過下列哪一種媒介叮咬傳染？",
    "options": [
      "白線埃及斑蚊",
      "普通居家熱蚊",
      "綠頭家蠅蒼蠅",
      "暗處跳蚤臭蟲"
    ],
    "answerIndex": 0,
    "explanation": "登革熱為蟲媒病毒傳染病，主要由帶有病毒的埃及斑蚊與白線斑蚊叮咬人體進行血液傳播。"
  },
  {
    "id": "q_life_3_30",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 3,
    "question": "若不慎發生骨折或關節嚴重扭傷時，急救處理四大原則「PRICE」中的「I」代表什麼？",
    "options": [
      "冰敷降低腫脹",
      "立即注射止痛",
      "熱敷加速活血",
      "劇烈運動伸展"
    ],
    "answerIndex": 0,
    "explanation": "運動傷害急救原則 PRICE 為保護（Protect）、休息（Rest）、冰敷（Ice）、壓迫（Compress）、抬高（Elevate）。"
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
    "id": "q_life_4_11",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "居家安裝的獨立式火災探測器中，針對初起火災緩慢陰燃產生大量煙霧，通常採用何種原理？",
    "options": [
      "光電式感煙測",
      "紅外線感溫測",
      "水銀膨脹感應",
      "紫外線光譜儀"
    ],
    "answerIndex": 0,
    "explanation": "光電式偵煙器利用煙霧微粒進入暗室散射紅外線光束觸發受光元件，最能及早偵測陰燃煙霧。"
  },
  {
    "id": "q_life_4_12",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "深海潛水員若急速上浮而未進行階段性減壓停留，容易罹患因哪種氣體氣泡栓塞之「潛水夫病」？",
    "options": [
      "氮氣形成氣泡",
      "氧氣中毒過多",
      "氦氣密度變化",
      "二氧化碳滯留"
    ],
    "answerIndex": 0,
    "explanation": "高壓下大量溶解於血液組織中的氮氣，在快速減壓時會如開汽水般析出氣泡，造成血管栓塞與劇痛。"
  },
  {
    "id": "q_life_4_13",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "國際摩斯電碼（Morse Code）中，代表世界通用求救信號「SOS」的電碼組合節奏為何？",
    "options": [
      "三短三長三短",
      "三長三短三長",
      "兩短兩長兩短",
      "五短五長五短"
    ],
    "answerIndex": 0,
    "explanation": "SOS 電碼因節奏分明易辨識，為「··· ─── ···（三短音、三長音、三短音）」，於 1908 年訂為國際通用求救碼。"
  },
  {
    "id": "q_life_4_14",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "臨床醫學上使用的自動體外心臟去顫器（AED），其進行電擊去顫的核心原理是？",
    "options": [
      "消除心室顫動",
      "重新啟動停跳",
      "加強心臟跳動",
      "降低人體體溫"
    ],
    "answerIndex": 0,
    "explanation": "AED 並不能使完全靜止停跳的心臟重新起跳，而是發射電流終止混亂的心室顫動（VF），讓心律重整。"
  },
  {
    "id": "q_life_4_15",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "抗生素在臨床醫學使用上，若病患未按醫囑擅自停藥或濫用，最容易造成何種全球公衛危機？",
    "options": [
      "超級抗藥細菌",
      "人體免疫過剩",
      "病毒基因突變",
      "藥物快速過期"
    ],
    "answerIndex": 0,
    "explanation": "未完成完整療程會使殘留細菌暴露於低劑量藥物中產生基因突變，篩選出具多重抗藥性的「超級細菌」。"
  },
  {
    "id": "q_life_4_16",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "登山攀登海拔超過 2500 公尺高山時容易發生的「高山症」，其最根本的環境誘發成因是？",
    "options": [
      "氧分壓隨降低",
      "環境氣溫驟降",
      "紫外線強度增",
      "濕度過度乾燥"
    ],
    "answerIndex": 0,
    "explanation": "隨海拔升高大氣總壓力下降，雖然空氣中氧氣比例仍約 21%，但「氧氣分壓」大幅降低導致缺氧。"
  },
  {
    "id": "q_life_4_17",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "肉毒桿菌（Clostridium botulinum）分泌的肉毒桿菌毒素極具神經毒性，但其毒素蛋白可透過？",
    "options": [
      "高溫徹底煮沸",
      "低溫冷凍破壞",
      "高鹽鹽醃分解",
      "酒精消毒中和"
    ],
    "answerIndex": 0,
    "explanation": "肉毒桿菌芽孢雖極耐熱，但其分泌的肉毒毒素為蛋白質，在 100℃ 沸水持續加熱 10 分鐘以上即可被破壞失去毒性。"
  },
  {
    "id": "q_life_4_18",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "在海邊或泳池發生溺水事故救起失去呼吸者時，急救流程不同於成人一般 CPR，應優先給予？",
    "options": [
      "兩次人工呼吸",
      "倒立拍打背部",
      "按壓腹部催吐",
      "高頻率胸外壓"
    ],
    "answerIndex": 0,
    "explanation": "溺水本質為缺氧性心跳停止，體內嚴重缺氧，因此救出後應優先給予 2 次有效人工呼吸再進行胸外按壓。"
  },
  {
    "id": "q_life_4_19",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "在化學火災防護中，金屬鈉、鉀或鎂金屬燃燒引發之「Ｄ類火災」，嚴禁使用下列何種物質滅火？",
    "options": [
      "水與泡沫滅火",
      "乾燥氯化鈉鹽",
      "專用乾金屬粉",
      "乾燥耐火鑄砂"
    ],
    "answerIndex": 0,
    "explanation": "活潑金屬（如鈉、鉀）遇水會劇烈反應生成氫氣與大量放熱，反而引發猛烈化學爆炸。"
  },
  {
    "id": "q_life_4_20",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "日常飲酒過量引起的「宿醉」症狀，主要是乙醇在人體肝臟代謝過程中產生何種中間毒性物質？",
    "options": [
      "乙醛代謝物質",
      "乙酸安全酸類",
      "甲醇致命毒素",
      "丙酮酮體物質"
    ],
    "answerIndex": 0,
    "explanation": "乙醇經醇脫氫酶（ADH）代謝為具毒性的乙醛，若乙醛蓄積體內會引起面紅、頭痛、噁心等宿醉症狀。"
  },
  {
    "id": "q_life_4_21",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "家庭烘焙若誤將洗滌用「小蘇打（碳酸氫鈉）」與工業用「蘇打（碳酸鈉）」混淆，其危害在於？",
    "options": [
      "碳酸鈉強鹼性",
      "碳酸鈉易引燃",
      "兩者完全無毒",
      "完全無法發泡"
    ],
    "answerIndex": 0,
    "explanation": "蘇打（純鹼/碳酸鈉）鹼性遠強於小蘇打，具強腐蝕性與灼傷風險，絕對不可混充為食品添加劑。"
  },
  {
    "id": "q_life_4_22",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "現代建築外牆裝飾常使用反射隔熱的「LOW-E 玻璃」，其中「LOW-E」的完整中文意涵為何？",
    "options": [
      "低輻射率鍍膜",
      "超低透光玻璃",
      "低吸熱度強化",
      "低折射率材料"
    ],
    "answerIndex": 0,
    "explanation": "Low-E 即 Low-Emissivity（低輻射），表面鍍有微米級金屬銀層，能反射遠紅外線熱輻射阻絕熱能傳遞。"
  },
  {
    "id": "q_life_4_23",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "當被蜜蜂中的「虎頭蜂（胡蜂）」多次螫傷時，最需緊急送醫防範的致命性全身反應是？",
    "options": [
      "過敏性休克症",
      "傷口細菌感染",
      "局部組織壞死",
      "破傷風菌侵入"
    ],
    "answerIndex": 0,
    "explanation": "胡蜂蜂毒含有多種致敏蛋白質，二次叮咬極易誘發第一型過敏反應，導致喉頭水腫、血壓驟降之致命性過敏性休克。"
  },
  {
    "id": "q_life_4_24",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "人體在炎熱環境高強度活動時若體溫調節中樞失調，體溫飆升超過 40℃ 且無汗，屬於最嚴重的？",
    "options": [
      "急性熱中暑症",
      "一般熱痙攣痛",
      "輕微熱衰竭感",
      "短暫熱疲勞態"
    ],
    "answerIndex": 0,
    "explanation": "熱中暑（Heat Stroke）為最危急的熱急症，患者體溫調節中樞崩潰停止排汗，若未立即降溫死亡率極高。"
  },
  {
    "id": "q_life_4_25",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "生鏽鐵釘刺穿足底深部傷口時，臨床上強烈建議施打破傷風疫苗，是因破傷風桿菌具有何種特性？",
    "options": [
      "專性厭氧細菌",
      "嗜高氧性病菌",
      "喜高溫性真菌",
      "耐酸性古生菌"
    ],
    "answerIndex": 0,
    "explanation": "破傷風梭菌為專性厭氧菌，深而狹窄的穿刺傷口內部極度缺氧，正適合其芽孢萌發並釋放神經痙攣毒素。"
  },
  {
    "id": "q_life_4_26",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "居家室內裝修常聞到的刺鼻異味，且被世界衛生組織列為一級致癌物的常見揮發性有機物是？",
    "options": [
      "甲醛化學揮發",
      "純乙醇酒精味",
      "甲烷天然氣體",
      "二氧化碳氣體"
    ],
    "answerIndex": 0,
    "explanation": "甲醛（Formaldehyde）常用於裝潢夾板膠水與油漆中，具高揮發性與刺激性，長期接觸易增加罹患白血病風險。"
  },
  {
    "id": "q_life_4_27",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "日常服藥時常被叮囑「服藥期間切勿食用葡萄柚」，主要是因為葡萄柚含有何種成分干擾肝臟代謝？",
    "options": [
      "呋喃香豆素類",
      "高濃度檸檬酸",
      "高量維生素Ｃ",
      "豐富果膠纖維"
    ],
    "answerIndex": 0,
    "explanation": "葡萄柚中的呋喃香豆素（Furanocoumarins）會不可逆抑制小腸肝臟 CYP3A4 代謝酵素，造成藥物血中濃度倍增中毒。"
  },
  {
    "id": "q_life_4_28",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "在日常救護情境中，若遇嬰兒發生氣道異物哽塞無法發聲時，最標準之排除口訣與手法為？",
    "options": [
      "拍背壓胸五次",
      "哈姆立克推腹",
      "頭下腳上用力",
      "用手指盲掏挖"
    ],
    "answerIndex": 0,
    "explanation": "一歲以下嬰兒腹部臟器脆弱，禁用哈姆立克法壓腹，應採「拍背 5 次、壓胸 5 次」反覆交替直到異物吐出。"
  },
  {
    "id": "q_life_4_29",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "日常飲用水檢驗常用指標「大腸桿菌群（Coliform）」，在衛生學上主要用來代表水質受到何種污染？",
    "options": [
      "糞便病原污染",
      "工業重金屬污",
      "放射物質殘留",
      "農藥化肥污染"
    ],
    "answerIndex": 0,
    "explanation": "大腸桿菌群普遍存在於溫血動物腸道與排泄物中，檢出大腸桿菌群即代表水質存在人畜排泄物與腸道病原菌污染風險。"
  },
  {
    "id": "q_life_4_30",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 4,
    "question": "汽車在濕滑積水路面高速行駛時，輪胎無法及時排水而完全失去抓地力的危險物理現象稱為？",
    "options": [
      "水漂滑水現象",
      "渦流空蝕效應",
      "地面摩擦效應",
      "轉向過度狀態"
    ],
    "answerIndex": 0,
    "explanation": "水漂現象（Hydroplaning）指輪胎與路面間積水無法排除形成水膜，使輪胎懸浮於水膜上完全喪失轉向與煞車控制。"
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
    "id": "q_life_5_11",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "有機磷農藥（Organophosphates）中毒之所以引發瞳孔針尖縮小、流涎與肌肉抽搐，是因其抑制了？",
    "options": [
      "乙醯膽鹼酯酶",
      "多巴胺受體體",
      "血清素轉運蛋白",
      "腎上腺素受體"
    ],
    "answerIndex": 0,
    "explanation": "有機磷不可逆抑制乙醯膽鹼酯酶（AChE），使副交感神經傳導物質乙醯膽鹼大量蓄積，引發膽鹼能危象。"
  },
  {
    "id": "q_life_5_12",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "在法醫學與急救醫學中，一氧化碳（CO）中毒患者皮膚黏膜常呈現特殊的何種色澤？",
    "options": [
      "櫻桃鮮紅色澤",
      "暗沉發紺深紫",
      "蠟黃蒼白色調",
      "青黑死灰色彩"
    ],
    "answerIndex": 0,
    "explanation": "一氧化碳與血紅素結合形成的碳氧血紅素（HbCO）呈鮮豔亮紅色，故嚴重中毒者常呈現特殊櫻桃紅膚色。"
  },
  {
    "id": "q_life_5_13",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "外科手術全身麻醉時，極罕見但具常染色體顯性遺傳、遇特定吸入性麻醉劑引發高熱之危機稱為？",
    "options": [
      "惡性高熱危機",
      "過敏反應休克",
      "神經阻斷障礙",
      "低體溫代謝症"
    ],
    "answerIndex": 0,
    "explanation": "惡性高熱（Malignant Hyperthermia）因骨骼肌細胞質網受體突變，大量釋放鈣離子導致肌肉強直、體溫急飆致死。"
  },
  {
    "id": "q_life_5_14",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "急性心肌梗塞發作時，硝化甘油（NTG）舌下含錠能迅速緩解心絞痛症狀，其藥理作用機制是？",
    "options": [
      "釋放一氧化氮",
      "直接強心跳動",
      "抑制血小板凝",
      "加速血糖代謝"
    ],
    "answerIndex": 0,
    "explanation": "硝化甘油在體內轉化為一氧化氮（NO），活化鳥苷酸環化酶使血管平滑肌放鬆，擴張冠狀動脈降低心臟負荷。"
  },
  {
    "id": "q_life_5_15",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "在醫院深靜脈血栓（DVT）患者若突然發生致命性呼吸困難與休克，最常見之直接致命併發症為？",
    "options": [
      "急性肺動脈栓",
      "急性腦出血症",
      "心包膜填塞症",
      "主動脈瘤破裂"
    ],
    "answerIndex": 0,
    "explanation": "下肢深層靜脈脫落的血栓隨血液回流至右心室，瞬間堵塞肺動脈主幹（PE），造成急性右心衰竭與心因性休克。"
  },
  {
    "id": "q_life_5_16",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "長期大量酗酒者若突然戒酒，在戒斷過程中容易出現意識混亂、發抖與生動幻覺之最危重症候群為？",
    "options": [
      "震顫性譫妄症",
      "雙相情感障礙",
      "思覺失調幻聽",
      "血管性失智症"
    ],
    "answerIndex": 0,
    "explanation": "震顫性譫妄（Delirium Tremens, DT）為酒精戒斷最嚴重的醫療急症，死亡率高，需住院密切監控神經與自主神經狀態。"
  },
  {
    "id": "q_life_5_17",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "在毒理學中，氰化物（Cyanide）中毒之所以能在數分鐘內致命，是因為它阻斷了粒線體呼吸鏈的？",
    "options": [
      "細胞色素氧化酶",
      "三磷酸腺苷酶",
      "檸檬酸合成酶",
      "丙酮酸脫氫酶"
    ],
    "answerIndex": 0,
    "explanation": "氰離子極牢固結合細胞色素 c 氧化酶（Complex IV）中的鐵離子，徹底阻斷電子傳遞鏈，使細胞無法利用氧氣窒息。"
  },
  {
    "id": "q_life_5_18",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "急性缺血性腦中風發生時，注射靜脈血栓溶解劑（rt-PA）以溶解血栓搶救腦細胞之黃金治療時間為？",
    "options": [
      "發病四點五小時",
      "發病十二小時內",
      "發病二十四小時",
      "發病四十八小時"
    ],
    "answerIndex": 0,
    "explanation": "國際臨床指引確認，缺血性腦中風於發病 4.5 小時黃金窗口內接受 rt-PA 靜脈溶栓，能顯著改善神經功能預後。"
  },
  {
    "id": "q_life_5_19",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "被毒蛇咬傷時，若咬傷者為「雨傘節」或「眼鏡蛇」，其蛇毒成分在臨床分類上主要屬於？",
    "options": [
      "神經毒性蛇毒",
      "出血性凝血毒",
      "心臟毒素肌肉",
      "細胞壞死蛋白"
    ],
    "answerIndex": 0,
    "explanation": "雨傘節與眼鏡蛇（蝙蝠蛇科）主要富含突觸前後神經毒素，阻斷神經肌肉接頭傳導，引發眼瞼下垂與呼吸肌麻痺。"
  },
  {
    "id": "q_life_5_20",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "嚴重燒燙傷病患在受傷後最初 48 小時內，最關鍵且決定生死之臨床醫療處置是？",
    "options": [
      "大劑量輸液補",
      "大劑量抗生素",
      "立即全層植皮",
      "冰水持續浸泡"
    ],
    "answerIndex": 0,
    "explanation": "大面積燒傷導致微血管通透性劇增，大量血漿外滲至組織間隙，若不及時依 Parkland 公式補液將引發低血容性休克。"
  },
  {
    "id": "q_life_5_21",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "急性氣胸若形成單向活瓣使胸腔內氣壓持續攀升，壓迫心臟大血管導致心因性休克的極危急狀態為？",
    "options": [
      "張力性氣胸症",
      "自發單純氣胸",
      "開放創傷氣胸",
      "血胸合併氣胸"
    ],
    "answerIndex": 0,
    "explanation": "張力性氣胸（Tension Pneumothorax）使縱膈腔與心臟受壓嚴重移位，靜脈回流中斷，需立即行針刺減壓挽救生命。"
  },
  {
    "id": "q_life_5_22",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "長期服用高劑量阿斯匹靈等非類固醇消炎止痛藥（NSAIDs），最容易引起的消化道嚴重副作用為？",
    "options": [
      "消化性潰瘍血",
      "急性闌尾發炎",
      "慢性膽囊結石",
      "潰瘍性結腸炎"
    ],
    "answerIndex": 0,
    "explanation": "NSAIDs 抑制 COX-1 酵素，阻斷具保護胃黏膜功能的攝護腺素（PGE2）合成，極易誘發胃潰瘍與急性消化道出血。"
  },
  {
    "id": "q_life_5_23",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "在公共衛生預防接種中，活化減毒疫苗（Live Attenuated Vaccine）嚴格禁忌施打於下列哪類人群？",
    "options": [
      "重度免疫不全",
      "健康普通成人",
      "輕微皮膚過敏",
      "曾有輕微發燒"
    ],
    "answerIndex": 0,
    "explanation": "減毒活疫苗含有微弱複製能力的病原體，嚴重先天免疫缺乏或接受化療免疫抑制者施打可能引發全身性感染致死。"
  },
  {
    "id": "q_life_5_24",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "成人嚴重鉛中毒（Lead Poisoning）時，在神經系統與血液系統常誘發的特徵性貧血類型為？",
    "options": [
      "小細胞低色素",
      "巨球性巨幼貧",
      "自體溶血性貧",
      "急性再生不良"
    ],
    "answerIndex": 0,
    "explanation": "鉛抑制血基質合成關鍵酵素（ALAD 與鐵螯合酶），使血紅素合成受阻，臨床表現為小細胞低色素性貧血伴嗜鹼性點彩。"
  },
  {
    "id": "q_life_5_25",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "嚴重創傷大量輸血時，若快速輸入大量庫存全血，容易因保存液中檸檬酸鹽結合而引發何種電解質紊亂？",
    "options": [
      "低游離血鈣症",
      "高游離血鈣症",
      "極嚴重高血鈉",
      "急性低血鉀症"
    ],
    "answerIndex": 0,
    "explanation": "輸血保存液含有檸檬酸鈉抗凝劑，大量輸血超出肝臟代謝速率時會螯合血液中的游離鈣離子，引發嚴重低血鈣抽搐。"
  },
  {
    "id": "q_life_5_26",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "臨床上使用免疫抑制劑「環孢素（Cyclosporine）」預防器官移植排斥，其分子標靶作用機制是？",
    "options": [
      "抑制鈣調神經磷",
      "阻斷腫瘤壞死",
      "抑制嘌呤合成",
      "阻斷介白素六"
    ],
    "answerIndex": 0,
    "explanation": "環孢素結合細胞親和蛋白後特異性抑制鈣調磷酸酶（Calcineurin），阻斷轉錄因子 NFAT 去磷酸化，抑阻 T 細胞活化。"
  },
  {
    "id": "q_life_5_27",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "在急診臨床評估昏迷病患意識狀態的「格拉斯哥昏迷指數（GCS）」，其最低分與滿分分別是多少？",
    "options": [
      "三分與十五分",
      "零分與十分滿",
      "零分與百分滿",
      "一分與七分滿"
    ],
    "answerIndex": 0,
    "explanation": "GCS 評估睜眼（1-4分）、言語（1-5分）與動作（1-6分）三項反應，完全無反應最低為 3 分，神智清醒滿分為 15 分。"
  },
  {
    "id": "q_life_5_28",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "急性胰臟炎（Acute Pancreatitis）發作時，其引發自體胰臟組織劇烈壞死溶解的核心病理機制為？",
    "options": [
      "胰消化酶自活",
      "細菌直接感染",
      "自體抗體攻擊",
      "胰島素分泌崩"
    ],
    "answerIndex": 0,
    "explanation": "胰管阻塞或酒精等刺激使原本應在十二指腸活化的胰蛋白酶原在胰臟實質內提前異常活化，引發連鎖自我消化。"
  },
  {
    "id": "q_life_5_29",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "在重症醫學中，敗血性休克（Septic Shock）經充分輸液復甦後，首選的第一線血管升壓升縮藥物為？",
    "options": [
      "正腎上腺素劑",
      "副腎上腺素劑",
      "多巴胺神經劑",
      "血管加壓素劑"
    ],
    "answerIndex": 0,
    "explanation": "國際敗血症指引（Surviving Sepsis Campaign）強烈建議正腎上腺素（Norepinephrine）作為首選第一線強效血管收縮劑。"
  },
  {
    "id": "q_life_5_30",
    "category": "life",
    "categoryName": "生活常識",
    "categoryIcon": "🌿",
    "difficulty": 5,
    "question": "在輻射防護學中，放射性碘-131（I-131）核洩漏事故時派發碘片（碘化鉀），其防護原理是？",
    "options": [
      "飽和甲狀腺碘",
      "加速輻射排出",
      "中和輻射粒子",
      "殺滅突變細胞"
    ],
    "answerIndex": 0,
    "explanation": "口服穩定同位素碘（KI）能使甲狀腺碘攝取機制迅速飽和，阻斷放射性碘在甲狀腺積聚，防範誘發甲狀腺癌。"
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
    "id": "q_nature_1_11",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "世界上現存體型最大、重量最重的大型海洋哺乳動物是哪一種？",
    "options": [
      "巨大大藍鯨",
      "兇猛大白鯊",
      "溫馴大海牛",
      "巨大抹香鯨"
    ],
    "answerIndex": 0,
    "explanation": "藍鯨體長可逾 30 公尺、重達 180 噸以上，為地球歷史上記錄最大型動物。"
  },
  {
    "id": "q_nature_1_12",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "貓咪在感到十分安心放鬆、心情非常愉悅時，喉嚨通常會發出什麼聲音？",
    "options": [
      "呼嚕呼嚕聲",
      "汪汪大叫聲",
      "呱呱鳴叫聲",
      "嘶嘶哈氣聲"
    ],
    "answerIndex": 0,
    "explanation": "貓咪在放鬆、滿足或感受母愛時，會藉由假聲帶肌肉快速振動發出節奏性呼嚕聲。"
  },
  {
    "id": "q_nature_1_13",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "天空雨過天晴後出現的七色彩虹，傳統上被認為由幾種基本顏色組成？",
    "options": [
      "一共七種色",
      "一共五種色",
      "一共六種色",
      "一共八種色"
    ],
    "answerIndex": 0,
    "explanation": "陽光穿過水滴經折射反射出色散光譜，牛頓將其劃分為紅橙黃綠藍靛紫七色。"
  },
  {
    "id": "q_nature_1_14",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "在太陽系中，地球以及其他七大行星都是圍繞著哪一顆中心天體公轉？",
    "options": [
      "耀眼的太陽",
      "皎潔的月亮",
      "神秘的火星",
      "巨大的木星"
    ],
    "answerIndex": 0,
    "explanation": "太陽系是以太陽為中心的恆星系統，太陽質量佔整個太陽系總質量的 99.86%。"
  },
  {
    "id": "q_nature_1_15",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "鳥類家族中被稱為「南極紳士」，雖然長有羽毛翅膀但不會飛行的鳥類是？",
    "options": [
      "可愛企鵝鳥",
      "高雅白天鵝",
      "美麗孔雀鳥",
      "迅捷海燕鳥"
    ],
    "answerIndex": 0,
    "explanation": "企鵝雙翼在長期演化中特化為扁平堅硬的鰭狀肢，適合在冰冷海水中高速潛水游泳。"
  },
  {
    "id": "q_nature_1_16",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "常溫常壓狀態下，乾淨的液態純水在結冰凝固後會轉變成什麼固體？",
    "options": [
      "冰涼硬冰塊",
      "白色乾冰塊",
      "黑色水炭塊",
      "透明鹽晶體"
    ],
    "answerIndex": 0,
    "explanation": "水在標準大氣壓降溫至 0℃ 以下時會凝固結晶為固態冰，且體積膨脹密度變小。"
  },
  {
    "id": "q_nature_1_17",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "植物在白天吸收太陽光能與二氧化碳，並釋放出什麼氣體滋養大自然？",
    "options": [
      "珍貴的氧氣",
      "有毒一氧化",
      "純天然甲烷",
      "刺激性氯氣"
    ],
    "answerIndex": 0,
    "explanation": "植物葉綠體進行光合作用，利用光能裂解水分子並固定二氧化碳，副產物為氧氣。"
  },
  {
    "id": "q_nature_1_18",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "大熊貓（大貓熊）是中國特有的國寶動物，其在野外最主要賴以維生的食物是？",
    "options": [
      "青翠鮮竹子",
      "新鮮深海魚",
      "高甜度蜂蜜",
      "多汁紅蘋果"
    ],
    "answerIndex": 0,
    "explanation": "大貓熊食性高度特化，雖然屬於食肉目動物，但 99% 的野外日常食物皆為竹子竹筍。"
  },
  {
    "id": "q_nature_1_19",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "日常夜空中看見月亮會發出柔和皎潔的光芒，月亮本身的光芒來源主要是？",
    "options": [
      "反射太陽光",
      "月球自體燃",
      "吸收地球光",
      "內部核融合"
    ],
    "answerIndex": 0,
    "explanation": "月球本身是不發光的岩石天體，我們看見的月光純粹是月表岩石反射太陽照射的光。"
  },
  {
    "id": "q_nature_1_20",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "狗狗在感到興奮開朗、看到主人回家時，身體通常會快速做出什麼動作？",
    "options": [
      "開心搖尾巴",
      "低頭抓泥巴",
      "閉眼縮成團",
      "張嘴哈大氣"
    ],
    "answerIndex": 0,
    "explanation": "狗狗搖晃尾巴是表達社交情緒與友善的重要肢體語言，表示熱情迎接與興奮心情。"
  },
  {
    "id": "q_nature_1_21",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "蜜蜂在春天花叢間辛勤飛舞穿梭，其釀造香甜天然蜂蜜的主要原料來源是？",
    "options": [
      "甜美的花蜜",
      "青綠的樹葉",
      "乾淨的露水",
      "成熟的果實"
    ],
    "answerIndex": 0,
    "explanation": "工蜂採集顯花植物花蜜儲存於蜜胃中，經體內轉化酶分解酵素後脫水濃縮為蜂蜜。"
  },
  {
    "id": "q_nature_1_22",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "我們生活居住的地球自轉一整圈，在時間計量上大約等於多長的時間？",
    "options": [
      "正好一整天",
      "正好一整月",
      "正好一整年",
      "正好一小時"
    ],
    "answerIndex": 0,
    "explanation": "地球繞自身地軸由西向東自轉一周的時間約為 23 小時 56 分 4 秒，即一個恆星日。"
  },
  {
    "id": "q_nature_1_23",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "自然界中恐龍繁盛並稱霸陸地生態系長達一億多年，恐龍所生活的時代是？",
    "options": [
      "中生代時代",
      "新生代時代",
      "古生代時代",
      "太古代時代"
    ],
    "answerIndex": 0,
    "explanation": "恐龍生活於中生代（包含三疊紀、侏羅紀與白堊紀），約在 6600 萬年前白堊紀末大滅絕。"
  },
  {
    "id": "q_nature_1_24",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "夏季大雷雨來臨時，我們總是「先看見閃電、後聽見雷聲」，主要原因為何？",
    "options": [
      "光速遠快聲",
      "雷聲產生慢",
      "人眼反應快",
      "耳朵靈敏差"
    ],
    "answerIndex": 0,
    "explanation": "光在空氣傳播速度約每秒三十萬公里，聲音每秒僅約 340 公尺，故光線先抵達人眼。"
  },
  {
    "id": "q_nature_1_25",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "動物界中能夠像直升機一樣在空中定點懸停，甚至倒退飛行的微小鳥類是？",
    "options": [
      "靈巧蜂鳥鳥",
      "活潑麻雀鳥",
      "美麗翠鳥鳥",
      "勤勞啄木鳥"
    ],
    "answerIndex": 0,
    "explanation": "蜂鳥翅膀骨骼具有極靈活的肩關節，能做八字形拍動，是唯一能懸停與後退飛行的鳥。"
  },
  {
    "id": "q_nature_1_26",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "向日葵的花盤在清晨與白天總是朝向太陽方向轉動，這是植物的什麼現象？",
    "options": [
      "向光性反應",
      "向地性反應",
      "感夜性反應",
      "向觸性反應"
    ],
    "answerIndex": 0,
    "explanation": "向日葵莖頂生長素避光分佈，背光側細胞生長加速使莖部朝向光源彎曲，形成向光性。"
  },
  {
    "id": "q_nature_1_27",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "自然界中純淨鑽石與日常書寫鉛筆芯，在化學元素組成上完全都是由何種元素構成？",
    "options": [
      "純碳素元素",
      "純矽素元素",
      "純鋁素元素",
      "純鐵素元素"
    ],
    "answerIndex": 0,
    "explanation": "金剛石（鑽石）與石墨皆為碳元素（C）的同素異形體，僅因晶體排列幾何結構不同而外觀迥異。"
  },
  {
    "id": "q_nature_1_28",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "魚類能夠在水面下自由呼吸水中溶解的氧氣，主要是依靠身體的哪一個器官？",
    "options": [
      "鰓部呼吸器",
      "堅硬魚鱗片",
      "靈活魚鰭部",
      "長長魚尾巴"
    ],
    "answerIndex": 0,
    "explanation": "魚鰓密佈微血管，當水流穿過鰓絲時，水中溶解氧藉由逆流交換機制迅速擴散入血液。"
  },
  {
    "id": "q_nature_1_29",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "夜晚在草叢中能夠一閃一閃發出美麗黃綠色冷光的昆蟲是哪一種？",
    "options": [
      "尾巴螢火蟲",
      "愛跳紡織娘",
      "飛舞天牛蟲",
      "會唱油蟬蟲"
    ],
    "answerIndex": 0,
    "explanation": "螢火蟲腹部發光器含有螢光素與螢光素酶，利用 ATP 與氧氣催化發光作為求偶信號。"
  },
  {
    "id": "q_nature_1_30",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 1,
    "question": "森林中高大翠綠的竹子，在植物分類學科上其實屬於哪一科植物？",
    "options": [
      "禾本科植物",
      "松柏科植物",
      "薔薇科植物",
      "百合科植物"
    ],
    "answerIndex": 0,
    "explanation": "竹子雖然生長高大堅硬，但在植物分類上屬於單子葉植物綱禾本科，本質為巨大草本。"
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
    "id": "q_nature_2_11",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "貓咪具有令人稱奇的平衡感，從高處落下時總能四腳平穩著地，這能力稱為？",
    "options": [
      "空中翻正反",
      "四肢滑翔技",
      "尾巴螺旋力",
      "身體彈簧跳"
    ],
    "answerIndex": 0,
    "explanation": "貓咪前庭系統敏銳且脊椎極具柔軟度，能在下墜瞬間以頭帶身迅速旋轉四肢平衡著地。"
  },
  {
    "id": "q_nature_2_12",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "蝴蝶的一生歷經「卵、幼蟲、蛹、成蟲」四個截然不同的發育階段，這被稱為？",
    "options": [
      "完全變態發",
      "不完全變態",
      "自體分裂發",
      "孤雌單性生"
    ],
    "answerIndex": 0,
    "explanation": "蝴蝶生長史具幼蟲與成蟲形態生理巨大差異且經歷蛹期重組，為標準的完全變態昆蟲。"
  },
  {
    "id": "q_nature_2_13",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "太陽系八大行星中，體積最大、質量最大且擁有著名大紅斑氣暴風眼的行星是？",
    "options": [
      "巨大的木星",
      "帶環的土星",
      "熾熱的天王",
      "冰冷的海王"
    ],
    "answerIndex": 0,
    "explanation": "木星為氣態巨行星，質量約為太陽系其餘所有行星質量總和的 2.5 倍，引力強大。"
  },
  {
    "id": "q_nature_2_14",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "北極熊全身看似雪白透亮，但若以顯微鏡剖析，其毛髮的真實微觀構造是？",
    "options": [
      "透明中空管",
      "純白實心毛",
      "黃褐絨毛管",
      "彩色纖維絲"
    ],
    "answerIndex": 0,
    "explanation": "北極熊毛髮是無色素的透明中空管狀毛，內部能留存空氣隔熱，並散射光線呈現雪白色。"
  },
  {
    "id": "q_nature_2_15",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "水獺和海獺在浮游海面上睡覺時，常被觀察到彼此會做出什麼可愛動作防被漂走？",
    "options": [
      "手牽著手手",
      "尾巴綁一起",
      "緊抱著石頭",
      "背靠著背靠"
    ],
    "answerIndex": 0,
    "explanation": "海獺常以海藻纏繞身軀或與同伴手牽手入睡，防止在睡夢中被強烈洋流沖散帶離群體。"
  },
  {
    "id": "q_nature_2_16",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "自然界中成蟲壽命極短暫，俗語形容其生命短暫如「曇花一現」的水生昆蟲是？",
    "options": [
      "脆弱蜉蝣蟲",
      "飛舞蜻蜓蟲",
      "長鬚水黽蟲",
      "潛水龍蝨蟲"
    ],
    "answerIndex": 0,
    "explanation": "蜉蝣幼蟲在水中生活數年，羽化為亞成蟲與成蟲後口器退化不進食，壽命通常僅數小時至數日。"
  },
  {
    "id": "q_nature_2_17",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "樹木橫截面上看見一圈圈深淺交替的環狀花紋稱為年輪，年輪的形成主因是？",
    "options": [
      "四季生長速",
      "日夜溫差大",
      "風吹搖晃度",
      "根部吸水量"
    ],
    "answerIndex": 0,
    "explanation": "溫帶樹木春夏氣溫溫暖形成層細胞分裂快質地疏鬆（早材），秋冬緩慢質地緻密（晚材）。"
  },
  {
    "id": "q_nature_2_18",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "章魚在遇到捕食天敵攻擊危險時，除了迅速噴出墨汁掩護外，還具備什麼神奇防禦本領？",
    "options": [
      "迅速變換色",
      "自斷八條足",
      "發射毒尖刺",
      "全身硬化甲"
    ],
    "answerIndex": 0,
    "explanation": "章魚皮膚含有數以萬計的色素細胞與反射細胞，受神經調控能在不到一秒內擬態周遭環境。"
  },
  {
    "id": "q_nature_2_19",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "青蛙的幼體「蝌蚪」生活在水中，此時主要依靠什麼器官吸取水中氧氣進行呼吸？",
    "options": [
      "外鰓與內鰓",
      "成熟肺泡部",
      "發達皮膚腺",
      "寬大長尾巴"
    ],
    "answerIndex": 0,
    "explanation": "蝌蚪初期長有羽狀外鰓呼吸，隨後長出鰓蓋轉為內鰓呼吸，變態為成蛙後才以肺與皮膚呼吸。"
  },
  {
    "id": "q_nature_2_20",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "地球大氣層中含量最豐富、體積比例佔大氣總量約百分之七十八的氣體是？",
    "options": [
      "純天然氮氣",
      "生命之氧氣",
      "稀有氣體氬",
      "溫室二氧化"
    ],
    "answerIndex": 0,
    "explanation": "地球大氣組成分子中，氮氣（N2）佔約 78%，氧氣（O2）約 21%，氬氣（Ar）約 0.93%。"
  },
  {
    "id": "q_nature_2_21",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "人體骨骼系統中，成人骨骼總數量在發育健全成熟時，通常總共有幾塊骨頭？",
    "options": [
      "共有206塊",
      "共有150塊",
      "共有300塊",
      "共有500塊"
    ],
    "answerIndex": 0,
    "explanation": "嬰兒出生時約有 270 塊骨骼，隨骨化發育部分骨骼癒合（如薦骨與顱骨），成人固定為 206 塊。"
  },
  {
    "id": "q_nature_2_22",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "生活在深海熱泉或火山口極端環境、耐超高溫高鹽的古老單細胞微生物被歸類為？",
    "options": [
      "古生菌古菌",
      "真核真菌類",
      "多細胞動物",
      "綠藻類植物"
    ],
    "answerIndex": 0,
    "explanation": "古菌（Archaea）為生命三大域之一，細胞膜具獨特醚脂結構，能在強酸強鹼極端高溫下生存。"
  },
  {
    "id": "q_nature_2_23",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "自然界中體型最重且奔跑速度最快的鳥類是鴕鳥，鴕鳥的奔跑時速最高約可達？",
    "options": [
      "時速七十公",
      "時速二十公",
      "時速一百五",
      "時速三十公"
    ],
    "answerIndex": 0,
    "explanation": "非洲鴕鳥腿肌發達且雙趾著地，長途奔跑時速可達 50~60 公里，衝刺極速可逾 70 公里。"
  },
  {
    "id": "q_nature_2_24",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "人類視覺能夠看見五彩斑斕的世界，視網膜上專門負責辨別顏色的感光細胞是？",
    "options": [
      "視錐細胞組",
      "視桿細胞組",
      "神經膠質組",
      "角膜上皮組"
    ],
    "answerIndex": 0,
    "explanation": "視網膜上的視錐細胞（Cone cells）分為感應紅、綠、藍三種，負責明亮環境下的色彩辨識。"
  },
  {
    "id": "q_nature_2_25",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "蝙蝠是唯一具備真正飛翔能力的哺乳動物，牠們在漆黑夜間飛行捕食主要依靠？",
    "options": [
      "超聲回聲位",
      "紅外熱感應",
      "極佳夜視眼",
      "靈敏長鬍鬚"
    ],
    "answerIndex": 0,
    "explanation": "蝙蝠喉部發射人耳聽不見的高頻超聲波脈衝，藉由雙耳接收反射回波精準建構獵物空間位置。"
  },
  {
    "id": "q_nature_2_26",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "地球表面百分之七十被海洋覆蓋，海水中平均鹽度大約為千分之幾？",
    "options": [
      "千分之三十五",
      "千分之五左右",
      "千分之七十多",
      "千分之一百二"
    ],
    "answerIndex": 0,
    "explanation": "全球大洋海水平均鹽度約為 35‰（即每 1000 克海水中約含 35 克溶解鹽類，以氯化鈉為主）。"
  },
  {
    "id": "q_nature_2_27",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "陸地上奔跑速度最快的短跑動物是獵豹，獵豹衝刺奔跑時速最高大約可達？",
    "options": [
      "時速一百公",
      "時速六十公",
      "時速四十公",
      "時速二百公"
    ],
    "answerIndex": 0,
    "explanation": "獵豹身體結構如獵弓流線，脊椎柔韌步幅極大，零至百公里加速僅需 3 秒，極速可逾 100km/h。"
  },
  {
    "id": "q_nature_2_28",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "地質學家用來衡量礦物抗刮磨抗刮刻能力的硬度標準指標被稱為？",
    "options": [
      "莫氏硬度計",
      "布氏硬度計",
      "洛氏硬度計",
      "維氏硬度計"
    ],
    "answerIndex": 0,
    "explanation": "德國礦物學家莫斯於 1812 年提出莫氏硬度表，以滑石（1度）至鑽石（10度）定出十級硬度標準。"
  },
  {
    "id": "q_nature_2_29",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "人體內最大的內部實質臟器，具備解毒、製造膽汁與合成蛋白質重要功用的是？",
    "options": [
      "紅褐色肝臟",
      "跳動心臟室",
      "呼吸雙肺葉",
      "過濾雙腎臟"
    ],
    "answerIndex": 0,
    "explanation": "肝臟是人體最大實質腺體與代謝器官，成人重量約 1.2 至 1.5 公斤，參與超過 500 種生理代謝。"
  },
  {
    "id": "q_nature_2_30",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 2,
    "question": "植物進行蒸散作用調節體溫並將水分輸送至高處，水分主要藉由葉片上的什麼微孔散失？",
    "options": [
      "表皮氣孔部",
      "葉綠體細胞",
      "細胞核部位",
      "蠟質角質層"
    ],
    "answerIndex": 0,
    "explanation": "氣孔由一對具葉綠體的保衛細胞構成，透過細胞膨壓調節開閉，控制水分蒸散與氣體進出。"
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
    "id": "q_nature_3_11",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "地球內部構造由外至內可清晰劃分為地殼、地函與地核，其中體積佔比最大的是？",
    "options": [
      "厚實的地函",
      "堅硬的地殼",
      "外層液態核",
      "內層固態核"
    ],
    "answerIndex": 0,
    "explanation": "地函（Mantle）深約 2900 公里，佔地球總體積的 84% 以上，主要由富含鐵鎂的矽酸鹽岩石構成。"
  },
  {
    "id": "q_nature_3_12",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "海豚和鯨魚屬於完全水生的海洋哺乳動物，牠們在頭頂上方長有的呼吸孔本質上是？",
    "options": [
      "特化的鼻孔",
      "退化的耳朵",
      "額外的鰓裂",
      "發聲的氣囊"
    ],
    "answerIndex": 0,
    "explanation": "鯨豚類在漫長演化中將鼻孔移至頭頂形成噴氣孔（Blowhole），使其浮出水面能迅速換氣。"
  },
  {
    "id": "q_nature_3_13",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "在光學中，可見光穿過三稜鏡發生色散現象，其中偏折角度最大、波長最短的光是？",
    "options": [
      "深邃紫色光",
      "明亮黃色光",
      "熱烈紅色光",
      "清新綠色光"
    ],
    "answerIndex": 0,
    "explanation": "波長越短的光在介質中的折射率越大，因此紫光（約 400nm）偏折程度最大，紅光（約 700nm）偏折最小。"
  },
  {
    "id": "q_nature_3_14",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "地球表面最深的海溝是位於太平洋西部的馬里亞納海溝，其最深處「挑戰者深淵」深度約？",
    "options": [
      "約一萬一千米",
      "約五千公尺深",
      "約三萬公尺深",
      "約八千公尺深"
    ],
    "answerIndex": 0,
    "explanation": "馬里亞納海溝挑戰者深淵深度約 10,984 至 11,034 公尺，水壓高達 1100 個大氣壓。"
  },
  {
    "id": "q_nature_3_15",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "植物細胞具有動物細胞所沒有的堅韌外壁以維持形態，植物細胞壁的主要構成多醣是？",
    "options": [
      "堅韌纖維素",
      "美味糖原質",
      "豐富乳糖質",
      "動物幾丁質"
    ],
    "answerIndex": 0,
    "explanation": "植物初生與次生細胞壁主要由葡萄糖聚合物纖維素微纖維交織果膠與半纖維素構成。"
  },
  {
    "id": "q_nature_3_16",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "動物界中血液呈現獨特鮮艷淡藍色、甚至被醫學廣泛應用於內毒素檢測的海洋節肢動物是？",
    "options": [
      "遠古鱟魚血",
      "兇猛巨青蟹",
      "深海大龍蝦",
      "大西洋圓章"
    ],
    "answerIndex": 0,
    "explanation": "鱟（Horseshoe crab）血液利用含銅的血藍蛋白攜氧呈藍色，其變形細胞裂解物（LAL）能靈敏檢測細菌內毒素。"
  },
  {
    "id": "q_nature_3_17",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "太陽表面溫度約為攝氏 5500 度，而太陽最核心的中心核融合反應區溫度高達多少？",
    "options": [
      "約一千五百萬",
      "約十萬度左右",
      "約一百萬度左",
      "約五千萬度左"
    ],
    "answerIndex": 0,
    "explanation": "太陽核心在超高密度與壓強下進行質子-質子鏈核融合反應，核心溫度高達約 15,000,000 度。"
  },
  {
    "id": "q_nature_3_18",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "自然界中超導體在降溫至臨界溫度時，電阻會突然降為零且具有完全抗磁性的效應稱為？",
    "options": [
      "邁斯納效應",
      "都卜勒效應",
      "光電物理效",
      "康普頓效應"
    ],
    "answerIndex": 0,
    "explanation": "1933 年發現超導體處於超導態時，體內磁感應強度為零並排斥外加磁場，稱為邁斯納效應（Meissner effect）。"
  },
  {
    "id": "q_nature_3_19",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "人體內神經衝動傳導時，神經元軸突外包覆著一層能加速跳躍式傳導的脂質絕緣構造稱為？",
    "options": [
      "髓鞘包覆層",
      "微絲蛋白纖",
      "細胞質基底",
      "樹突分支層"
    ],
    "answerIndex": 0,
    "explanation": "髓鞘（Myelin sheath）由寡突膠質細胞或許旺細胞膜包繞形成，使動作電位在蘭氏結間跳躍式傳導，速度大增。"
  },
  {
    "id": "q_nature_3_20",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "地球大氣層由低至高可分為對流層、平流層、中氣層等，阻擋太陽致命紫外線的「臭氧層」位於？",
    "options": [
      "平流層中間",
      "對流層底部",
      "熱氣層頂端",
      "散逸層邊緣"
    ],
    "answerIndex": 0,
    "explanation": "臭氧層主要分佈於距地面 20 至 30 公里的平流層中，能強烈吸收太陽光中高能量的短波紫外線（UVB/UVC）。"
  },
  {
    "id": "q_nature_3_21",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "在古生物學中，被譽為爬蟲類演化為鳥類關鍵過渡形態、兼具羽毛與長骨尾齒的化石是？",
    "options": [
      "始祖鳥化石",
      "暴龍骨化石",
      "三角龍化石",
      "翼手龍化石"
    ],
    "answerIndex": 0,
    "explanation": "發現於德國索倫霍芬石灰岩中的始祖鳥（Archaeopteryx）具有飛羽及爬行類的齒牙、爪骨與長骨質尾巴。"
  },
  {
    "id": "q_nature_3_22",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "自然界中所有金屬元素在常溫常壓（20℃）狀態下，唯一呈現液態流動形態的金屬是？",
    "options": [
      "純金屬汞水",
      "純金屬鎵液",
      "純金屬銫金",
      "輕金屬鈉條"
    ],
    "answerIndex": 0,
    "explanation": "金屬汞（水銀，Hg）熔點為 -38.83℃，是標準環境狀態下唯一呈液態的純金屬元素。"
  },
  {
    "id": "q_nature_3_23",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "宇宙天體中質量密度極高，其重力強大到連宇宙中速度最快的光線都無法逃逸的天體被稱為？",
    "options": [
      "神秘的黑洞",
      "超新星爆炸",
      "白矮星殘骸",
      "活躍脈衝星"
    ],
    "answerIndex": 0,
    "explanation": "黑洞具有一個事件視界（Event horizon），在此半徑以內逃逸速度大於光速，任何物質與輻射皆不可脫出。"
  },
  {
    "id": "q_nature_3_24",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "在遺傳學奠基研究中，被譽為「遺傳學之父」的孟德爾，最初是透過培育觀察何種植物發現分離定律？",
    "options": [
      "園藝豌豆苗",
      "野生玉米株",
      "食用黃豆苗",
      "五彩金魚草"
    ],
    "answerIndex": 0,
    "explanation": "奧地利修道士孟德爾耗費八年雜交數萬株豌豆，總結出遺傳因子分離定律與自由配合定律。"
  },
  {
    "id": "q_nature_3_25",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "人體細胞內負責進行有氧呼吸並製造大量細胞能量貨幣「ATP」的細胞器胞器是？",
    "options": [
      "粒線體胞器",
      "核糖體結構",
      "內質網管道",
      "高基氏體囊"
    ],
    "answerIndex": 0,
    "explanation": "粒線體（Mitochondria）被稱為細胞發電廠，內膜藉由三羧酸循環與氧化磷酸化產生大量 ATP 供應生命代謝。"
  },
  {
    "id": "q_nature_3_26",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "恐龍滅絕事件發生於約 6600 萬年前，地質沉積界線地層中廣泛富集何種罕見地外金屬元素作為撞擊證據？",
    "options": [
      "金屬銥元素",
      "金屬鉑金質",
      "金屬金元素",
      "金屬鈾礦物"
    ],
    "answerIndex": 0,
    "explanation": "K-Pg 界線黏土層中富含地球罕見但小行星富集的銥（Iridium）異常尖峰，支持希克蘇魯伯小行星撞擊假說。"
  },
  {
    "id": "q_nature_3_27",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "在昆蟲生理學中，昆蟲身體外側包裹著堅硬的幾丁質外骨骼，其化學結構在生物大分子中屬於？",
    "options": [
      "含氮多醣體",
      "純纖維素質",
      "硬角質蛋白",
      "三酸甘油酯"
    ],
    "answerIndex": 0,
    "explanation": "幾丁質（Chitin）是由 N-乙醯葡萄糖胺單元組成的聚合物，為真菌細胞壁與節肢動物外骨骼之重要骨架。"
  },
  {
    "id": "q_nature_3_28",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "人體在受到病原體感染後，B淋巴細胞分化成熟並大量製造以對抗病原特異性抗原的蛋白質是？",
    "options": [
      "免疫抗體球",
      "白血球介素",
      "組織干擾素",
      "溶菌酵素酶"
    ],
    "answerIndex": 0,
    "explanation": "B 細胞受刺激分化為漿細胞，分泌大量專一性免疫球蛋白抗體（Antibody），標記並中和抗原。"
  },
  {
    "id": "q_nature_3_29",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "自然界中聲音在下列哪一種不同介質中傳播時，聲音傳遞的傳播速度通常是最快的？",
    "options": [
      "堅硬鋼鐵軌",
      "純淨淡水體",
      "標準空氣中",
      "真空中傳遞"
    ],
    "answerIndex": 0,
    "explanation": "聲音為機械波，介質彈性模數越大密度越緊密傳播越快，鋼鐵中聲速約 5000m/s，遠大於水（1500m/s）與空氣（340m/s）。"
  },
  {
    "id": "q_nature_3_30",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 3,
    "question": "在地球生態系能量金字塔傳遞過程中，能量從一個營養階層傳遞至上一層時的平均傳遞效率約為？",
    "options": [
      "約百分之十",
      "約百分之五十",
      "約百分之九十",
      "約百分之二"
    ],
    "answerIndex": 0,
    "explanation": "生態學林德曼效率（Lindeman's efficiency）指出，因呼吸散失與未利用生物量，能量階層傳遞效率平均約 10%。"
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
    "id": "q_nature_4_11",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "在深海熱泉噴口完全無陽光的漆黑環境中，支撐整個獨特生態系運轉的最底層初級生產者是？",
    "options": [
      "化能自營細菌",
      "深海浮游綠藻",
      "發光海綿動物",
      "深海嗜熱真菌"
    ],
    "answerIndex": 0,
    "explanation": "化能合成自營菌利用地熱噴發的硫化氫（H2S）等還原性化學物質氧化釋放的能量固定碳，合成有機物。"
  },
  {
    "id": "q_nature_4_12",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "在量子物理學中，微觀粒子在未被觀察測量前同時處於多種可能狀態的疊加，此原理被稱為？",
    "options": [
      "量子態疊加態",
      "量子穿隧效應",
      "波色愛因斯坦",
      "泡利不相容性"
    ],
    "answerIndex": 0,
    "explanation": "量子力學基本公理指出，量子系統在未經退相干測量塌縮前，其波函數可處於不同本徵態的線性疊加狀態。"
  },
  {
    "id": "q_nature_4_13",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "生活在極端極寒、真空、高輻射環境下依然能藉由「隱生」狀態存活數十年的微小無脊椎動物是？",
    "options": [
      "緩步水熊蟲類",
      "輪蟲綱小生物",
      "線蟲綱微生物",
      "渦蟲類扁形蟲"
    ],
    "answerIndex": 0,
    "explanation": "水熊蟲（緩步動物門，Tardigrada）能脫去體內 99% 水分進入隱生（Cryptobiosis）代謝停滯，耐受極端環境。"
  },
  {
    "id": "q_nature_4_14",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "在細胞生物學中，真核生物染色體末端用以保護基因組免於降解損耗並調控細胞壽命的重覆序列稱為？",
    "options": [
      "染色體端粒端",
      "著絲點核心區",
      "啟動子基因段",
      "增強子活性位"
    ],
    "answerIndex": 0,
    "explanation": "端粒（Telomere）由 TTAGGG 串聯重複序列構成，隨細胞分裂 DNA 複製末端未完成而逐次縮短，觸發細胞衰老。"
  },
  {
    "id": "q_nature_4_15",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "宇宙學大霹靂理論最強大的觀測證據之一，是在 1965 年偶然被測得且均勻遍佈全宇宙的？",
    "options": [
      "宇宙微波背景",
      "超大質量黑洞",
      "重力透鏡光環",
      "遙遠伽瑪暴射"
    ],
    "answerIndex": 0,
    "explanation": "彭齊亞斯與威爾遜發現的 2.7K 宇宙微波背景輻射（CMBR），為宇宙早期大爆炸約 38 萬年後光子退耦之遺跡。"
  },
  {
    "id": "q_nature_4_16",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "在神經解剖學中，人類大腦內部主掌將短期記憶整固並轉化為長期記憶的核心結構是？",
    "options": [
      "內側海馬迴體",
      "前額葉皮質區",
      "基底神經節群",
      "小腦蚓部構造"
    ],
    "answerIndex": 0,
    "explanation": "海馬迴（Hippocampus）負責陳述性記憶（事件與空間）的編碼與暫存，並透過皮質對話將記憶轉移至大腦皮質永久儲存。"
  },
  {
    "id": "q_nature_4_17",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "物理學家愛因斯坦在 1921 年榮獲諾貝爾物理學獎，其獲獎的主要研究貢獻是成功解釋了？",
    "options": [
      "光電效應定律",
      "狹義相對論理",
      "廣義相對論理",
      "布朗運動理論"
    ],
    "answerIndex": 0,
    "explanation": "愛因斯坦提出光量子假說成功解釋金屬受光照瞬間發射電子的光電效應，奠定早期量子論基礎。"
  },
  {
    "id": "q_nature_4_18",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "在分子生物學的中心法則（Central Dogma）中，以 RNA 為模板逆向合成 DNA 鏈的生物催化酵素為？",
    "options": [
      "逆轉錄聚合酶",
      "限制性核酸內",
      "解旋酶解開鏈",
      "拓撲異構活性"
    ],
    "answerIndex": 0,
    "explanation": "反轉錄病毒（如 HIV）利用反轉錄酶（Reverse transcriptase）將自身單鏈 RNA 反轉錄為互補 DNA 整合入宿主基因組。"
  },
  {
    "id": "q_nature_4_19",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "地球外核由富含鐵鎳之高溫液態金屬流動對流所產生的磁效應，維持地球磁場的機制稱為？",
    "options": [
      "地核地球發電機",
      "地殼熱壓電磁",
      "自體地磁固化",
      "地表大氣感應"
    ],
    "answerIndex": 0,
    "explanation": "地球發電機理論（Geodynamo theory）指出，科氏力與熱對流驅動外地核導電液態鐵鎳流動形成自激磁場，抵禦太陽風。"
  },
  {
    "id": "q_nature_4_20",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "在恆星演化末期，質量達到太陽質量約 1.44 倍以上時電子簡併壓力崩潰的質量上限稱為？",
    "options": [
      "錢德拉塞卡限",
      "奧本海默界限",
      "史瓦西半徑線",
      "愛丁頓光度極"
    ],
    "answerIndex": 0,
    "explanation": "錢德拉塞卡極限（Chandrasekhar limit, 約 1.44M☉）為白矮星穩定存在的最大質量上限，超越者將塌縮為中子星或超新星。"
  },
  {
    "id": "q_nature_4_21",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "在免疫學中，人體天然免疫系統中不需抗原預先致敏即可直接識別並裂解腫瘤或病毒感染細胞的淋巴球是？",
    "options": [
      "自然殺手細胞",
      "細胞毒性Ｔ細",
      "輔助性Ｔ細胞",
      "調節性Ｔ細胞"
    ],
    "answerIndex": 0,
    "explanation": "自然殺手細胞（NK 細胞）透過表面活化與抑制受體天平辨識表面缺少 MHC-I 的病變細胞並釋放穿孔素與顆粒酶殺死。"
  },
  {
    "id": "q_nature_4_22",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "化學元素週期表中，放射性鈾元素發生天然衰變鏈循環最終停止並轉化為穩定的非放射性元素是？",
    "options": [
      "金屬穩定鉛質",
      "金屬穩定鉍元素",
      "惰性氡氣氣體",
      "重金屬鎘金屬"
    ],
    "answerIndex": 0,
    "explanation": "鈾-238 經由多次 α 衰變與 β 衰變最終穩定停留在鉛-206（Pb-206），此為地質年代放射性定年之核心基礎。"
  },
  {
    "id": "q_nature_4_23",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "在細胞有絲分裂過程中，負責牽引染色體著絲點向兩極均勻移動分離的高分子蛋白纖維骨架是？",
    "options": [
      "紡錘絲微管束",
      "肌動蛋白微絲",
      "中間纖維絲網",
      "膠原蛋白纖維"
    ],
    "answerIndex": 0,
    "explanation": "微管蛋白組裝形成的紡錘體微管（Spindle fibers）連接染色體著絲粒，在後期藉由去聚合拉扯染色單體分離。"
  },
  {
    "id": "q_nature_4_24",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "在流體力學中，當流體流經收縮管道時流速增加且靜水壓力相應下降的物理基本原理稱為？",
    "options": [
      "白努利流體理",
      "阿基米德浮力",
      "帕斯卡水壓理",
      "托里切利定律"
    ],
    "answerIndex": 0,
    "explanation": "白努利定律（Bernoulli's principle）表明在無黏性不可壓縮流體中，機械能守恆，流速高處壓力低，為機翼升力基礎。"
  },
  {
    "id": "q_nature_4_25",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "宇宙中由雙中子星或黑洞激烈合併並在空間中以光速向外傳播的時空幾何曲率漣漪被稱為？",
    "options": [
      "重力波時空瀾",
      "宇宙超射線光",
      "微中子震盪流",
      "脈衝無線電波"
    ],
    "answerIndex": 0,
    "explanation": "愛因斯坦廣義相對論預言的重力波（Gravitational waves），於 2015 年由 LIGO 雷射干涉儀首次直接探測證實。"
  },
  {
    "id": "q_nature_4_26",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "人體胰臟內部專門分泌降血糖荷爾蒙「胰島素」的內分泌細胞特定型態是？",
    "options": [
      "胰島貝塔細胞",
      "胰島阿爾法胞",
      "胰島德爾塔胞",
      "胰腺腺泡細胞"
    ],
    "answerIndex": 0,
    "explanation": "胰島 β 細胞（Beta cells）受血液葡萄糖濃度上升刺激時釋放胰島素，促進組織攝取葡萄糖降低血糖。"
  },
  {
    "id": "q_nature_4_27",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "在演化生物學中，由於地理隔離導致基因交流中斷並各自積累遺傳差異而誕生新物種的演化模式為？",
    "options": [
      "異域種化演變",
      "同域種化現象",
      "平行演化趨勢",
      "趨同適應演化"
    ],
    "answerIndex": 0,
    "explanation": "異域物種形成（Allopatric speciation）是物種形成最常見機制，山脈、河流阻隔使種群獨立遺傳漂變自然選擇。"
  },
  {
    "id": "q_nature_4_28",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "在化學反應速率理論中，分子相互碰撞並發生有效化學反應所必須跨越的最低能量門檻稱為？",
    "options": [
      "反應活化能階",
      "自由吉布斯能",
      "化學反應焓值",
      "體系總熱容量"
    ],
    "answerIndex": 0,
    "explanation": "阿瑞尼斯活化能（Activation energy）指反應物分子轉化為高能活化複合過渡態所必需克服的能壘高度。"
  },
  {
    "id": "q_nature_4_29",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "在光學相干技術中，雷射（LASER）之所以具備極高方向性、單色性與高能量密度，其物理受激發機制為？",
    "options": [
      "受激輻射放大",
      "自發輻射增益",
      "黑體熱致輻射",
      "光電電離激發"
    ],
    "answerIndex": 0,
    "explanation": "Laser 全稱為「受激輻射光放大」，藉由粒子數反轉與諧振腔共振，誘發大量同頻同相的光子雪崩放大輸出。"
  },
  {
    "id": "q_nature_4_30",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 4,
    "question": "在生物化學中，脂肪酸進入粒線體基質進行 β-氧化分解前，必須藉由何種特定分子載體穿透粒線體內膜？",
    "options": [
      "肉鹼轉運載體",
      "肌酸穿梭分子",
      "輔酶泛醌載體",
      "膽鹼合成複合物"
    ],
    "answerIndex": 0,
    "explanation": "長鏈脂肪醯基必須與肉鹼（Carnitine）結合生成醯基肉鹼，才能經肉鹼轉位酶轉運穿過粒線體內膜進行能量分解。"
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
    "id": "q_nature_5_11",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在量子電動力學（QED）中，傳遞電磁交互作用力並具有零靜止質量的基本規範玻色子是？",
    "options": [
      "傳遞光子玻色",
      "膠子強作用子",
      "弱玻色子荷體",
      "重力假設粒子"
    ],
    "answerIndex": 0,
    "explanation": "標準模型中，電磁力由自旋為 1、靜止質量為 0 的規範玻色子光子（Photon）作為傳遞媒介。"
  },
  {
    "id": "q_nature_5_12",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在超低溫物理學中，玻色子氣體在接近絕對零度時集體落入最低量子能階形成宏觀相干之物態稱為？",
    "options": [
      "玻色愛因斯坦",
      "超導電性晶態",
      "費米氣體簡併",
      "夸克膠子漿態"
    ],
    "answerIndex": 0,
    "explanation": "玻色-愛因斯坦凝聚（Bose-Einstein Condensate, BEC）於 1995 年首次在鹼金屬原子氣體中實現，展現宏觀量子效應。"
  },
  {
    "id": "q_nature_5_13",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在神經突觸傳遞中，動作電位抵達軸突末梢觸發突觸囊泡向外胞吐釋放神經傳導物質的關鍵觸發離子是？",
    "options": [
      "二價鈣離子流",
      "一價鈉離子流",
      "一價鉀離子流",
      "一價氯陰離子"
    ],
    "answerIndex": 0,
    "explanation": "去極化促使電壓敏感性鈣通道開放，細胞外 Ca2+ 內流結合突觸小泡融合蛋白（SNARE），觸發神經傳導物質胞吐。"
  },
  {
    "id": "q_nature_5_14",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在宇宙大尺度結構中，占宇宙總物質能量密度約百分之二十七、不發光且僅以重力效應顯現的未知物質為？",
    "options": [
      "冷暗物質成份",
      "神祕暗能量流",
      "中微子熱殘留",
      "重子普通氣體"
    ],
    "answerIndex": 0,
    "explanation": "暗物質（Dark Matter）透過星系旋轉曲線與引力透鏡效應確認其廣泛存在，但至今未觀測到其與電磁力交互作用。"
  },
  {
    "id": "q_nature_5_15",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在熱力學第二定律中，孤立系統自發進行之任何不可逆過程，系統內部的哪一個狀態物理量必然持續增加？",
    "options": [
      "混亂熵值物理",
      "系統總內能階",
      "體系溫度標準",
      "絕對壓力數值"
    ],
    "answerIndex": 0,
    "explanation": "克勞修斯提出熵增原理，孤立系統的總熵（Entropy）永不減少，標誌著熱力學過程之單向時間箭頭。"
  },
  {
    "id": "q_nature_5_16",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在植物生理學中，當遭受乾旱缺水逆境時，誘導植物葉片氣孔迅速關閉以減少水分散失的核心植物荷爾蒙是？",
    "options": [
      "離層酸脫落酸",
      "生長素吲哚酸",
      "吉貝素赤黴素",
      "細胞分裂植物"
    ],
    "answerIndex": 0,
    "explanation": "離層酸（ABA）在根部缺水時合成並沿木質部迅速運至葉片，活化保衛細胞陰離子通道使水分外流氣孔關閉。"
  },
  {
    "id": "q_nature_5_17",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在重粒子物理學中，質子與中子並非基本粒子，它們內部由更微小的夸克構成，其中質子的夸克組成是？",
    "options": [
      "兩上夸克一下",
      "兩下夸克一上",
      "三上夸克結構",
      "一上一下一奇"
    ],
    "answerIndex": 0,
    "explanation": "強子結構中，質子由兩個上夸克（電荷+2/3）與一個下夸克（電荷-1/3）組成（uud），總淨電荷為 +1。"
  },
  {
    "id": "q_nature_5_18",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在遺傳學與基因工程中，被稱為「分子手術刀」的 CRISPR-Cas9 系統，其 Cas9 蛋白質在分子結構上本質是？",
    "options": [
      "雙鏈核酸內切",
      "單鏈連接酵素",
      "逆轉錄聚合酶",
      "高活性解旋酶"
    ],
    "answerIndex": 0,
    "explanation": "Cas9 是一種由向導 RNA（sgRNA）引導的核酸內切酶，能在特異性目標 DNA 序列處精準製造雙鏈斷裂（DSB）。"
  },
  {
    "id": "q_nature_5_19",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在廣義相對論中，質量巨大天體使經過其周圍的光線路徑發生彎曲，宛如透鏡聚集背景光源的物理天體現象為？",
    "options": [
      "重力透鏡效應",
      "光學干涉圖案",
      "星光紅移現象",
      "多普勒頻移效"
    ],
    "answerIndex": 0,
    "explanation": "巨大質量使周圍時空發生幾何彎曲，光線依測地線傳播呈現偏折放大，形成愛因斯坦環或多重重像。"
  },
  {
    "id": "q_nature_5_20",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在動物生理學中，深潛海洋哺乳動物（如抹香鯨）能在深海潛水數小時，其肌肉組織中極高濃度儲氧蛋白質是？",
    "options": [
      "肌紅蛋白載氧",
      "血紅蛋白鐵載",
      "血藍蛋白銅載",
      "肌球蛋白纖維"
    ],
    "answerIndex": 0,
    "explanation": "肌紅蛋白（Myoglobin）對氧親和力高於血紅蛋白，海洋哺乳動物體內肌紅蛋白濃度極高且表面帶電荷防聚集沉澱。"
  },
  {
    "id": "q_nature_5_21",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在地球物理學中，地球內部岩石層板塊在地函軟流圈頂部漂移碰撞，驅動板塊構造運動的核心熱動力源是？",
    "options": [
      "放射性衰變熱",
      "太陽輻射傳導",
      "地球自轉離心",
      "潮汐摩擦能量"
    ],
    "answerIndex": 0,
    "explanation": "地球地幔與地核深處放射性同位素（鈾-238、釷-232、鉀-40）長期放射性衰變釋放的衰變熱驅動了地函對流。"
  },
  {
    "id": "q_nature_5_22",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在現代材料物理學中，由碳原子以 sp2 混成軌域蜂巢狀六角晶格排列而成的單層二維超強納米材料被稱為？",
    "options": [
      "純石墨烯薄膜",
      "單壁碳奈米管",
      "富勒烯足球碳",
      "金剛石晶體膜"
    ],
    "answerIndex": 0,
    "explanation": "石墨烯（Graphene）僅有一個碳原子厚度，是目前已知強度最高、導電導熱最優異且穿透率極佳的二維材料。"
  },
  {
    "id": "q_nature_5_23",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在微生物遺傳學中，細菌之間透過性菌毛直接物理接觸並傳遞質體（Plasmid）DNA 的水平基因轉移機制稱為？",
    "options": [
      "接合轉移作用",
      "轉導病毒噬菌",
      "轉化吸收游離",
      "轉座子跳躍位"
    ],
    "answerIndex": 0,
    "explanation": "細菌接合（Conjugation）利用 F 質體編碼的性菌毛拉近兩細胞，建立質體單鏈轉移通道，為抗藥性傳播主因。"
  },
  {
    "id": "q_nature_5_24",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在原子核物理學中，重核（如鈾-235）捕獲一個熱中子分裂為兩個中等質量核並釋放大量能量與數個中子的過程為？",
    "options": [
      "受控核分裂鏈",
      "熱核融合反應",
      "天然阿爾法衰",
      "正負電子湮滅"
    ],
    "answerIndex": 0,
    "explanation": "鈾-235 發生核分裂時釋放出 2~3 個高能次級中子，誘發周圍鈾核持續分裂，形成可持續自持連鎖反應。"
  },
  {
    "id": "q_nature_5_25",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在生態生物地理學中，島嶼生物多樣性平衡理論（Theory of Island Biogeography）指出物種豐富度取決於？",
    "options": [
      "遷入與滅絕衡",
      "種群突變速率",
      "島嶼地質年代",
      "捕食競爭激烈"
    ],
    "answerIndex": 0,
    "explanation": "麥克阿瑟與威爾遜提出，島嶼最終物種平衡數量是由大陸遷入率（距離決定）與島嶼滅絕率（面積決定）動態平衡。"
  },
  {
    "id": "q_nature_5_26",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在生理代謝學中，人體骨骼肌在無氧劇烈收縮時產生的乳酸，經血液運至肝臟重新異生成葡萄糖的循環途徑為？",
    "options": [
      "科氏乳酸循環",
      "尿素循環途徑",
      "檸檬酸三羧酸",
      "卡爾文光合循"
    ],
    "answerIndex": 0,
    "explanation": "柯里循環（Cori cycle）中肌肉無氧酵解產生的乳酸運至肝臟，耗費 ATP 進行葡萄糖新生轉化為葡萄糖回送肌肉。"
  },
  {
    "id": "q_nature_5_27",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在化學動力學中，酵素（Enzyme）作為極高效之生物催化劑，其使化學反應速率成百萬倍提升的根本熱力學原因是？",
    "options": [
      "大幅降低活化",
      "增加反應熱焓",
      "提高體系平衡",
      "增加反應自由"
    ],
    "answerIndex": 0,
    "explanation": "酵素活性中心特異性穩定化學反應過渡態（Transition state），顯著降低正向逆向反應活化能，但不改變平衡常數。"
  },
  {
    "id": "q_nature_5_28",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在地球大氣物理學中，北極與南極高空極光（Aurora）產生的物理本質，是太陽風帶電粒子碰撞了高層大氣中的？",
    "options": [
      "氧與氮激發光",
      "水氣冰晶折射",
      "臭氧分子吸收",
      "氫氦氣體聚合"
    ],
    "answerIndex": 0,
    "explanation": "太陽風高能帶電粒子受地磁導引進入兩極高空，碰撞激發電離氧原子（綠紅光）與氮分子（藍紫光）發出極光。"
  },
  {
    "id": "q_nature_5_29",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在生物膜化學中，構成所有真核生物與細菌細胞膜基本骨架雙層結構的核心雙親性脂質分子是？",
    "options": [
      "甘油磷脂分子",
      "膽固醇甾醇類",
      "甘油三酯油脂",
      "神經鞘糖脂類"
    ],
    "answerIndex": 0,
    "explanation": "磷脂（Phospholipids）具有親水性極性頭部（磷酸膽鹼）與疏水性非極性雙脂肪酸尾部，水中自發組裝形成磷脂雙分子層。"
  },
  {
    "id": "q_nature_5_30",
    "category": "nature",
    "categoryName": "自然科學",
    "categoryIcon": "🔬",
    "difficulty": 5,
    "question": "在恆星天文物理學中，主序星核心維持穩定的流體靜力學平衡，是靠向內的自身重力與向外的何種力量達成平衡？",
    "options": [
      "熱輻射氣體壓",
      "電子簡併壓強",
      "強核吸引力場",
      "離心旋轉力場"
    ],
    "answerIndex": 0,
    "explanation": "主序星（如太陽）內部藉由核融合產生的巨大熱壓強與輻射壓向外對抗恆星自身向心引力塌縮，保持數十億年穩定。"
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
    "id": "q_world_1_11",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "位於台灣南投縣與信義鄉交界，海拔高達 3952 公尺的台灣第一高峰是？",
    "options": [
      "美麗玉山主峰",
      "巍峨雪山主峰",
      "秀麗合歡主峰",
      "雄偉南湖大山"
    ],
    "answerIndex": 0,
    "explanation": "玉山主峰標高 3952 公尺，為台灣群峰之首，也是整個東北亞地區地理最高峰。"
  },
  {
    "id": "q_world_1_12",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "日本最著名的神聖活火山象徵，山頭終年白雪皚皚並被列為世界文化遺產的是？",
    "options": [
      "美麗富士名山",
      "熱烈阿蘇活山",
      "櫻島活火山脈",
      "箱根溫泉山群"
    ],
    "answerIndex": 0,
    "explanation": "富士山標高 3776 公尺，為日本最高峰，優美的圓錐火山體是日本文化的精神象徵。"
  },
  {
    "id": "q_world_1_13",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "坐落於法國巴黎塞納河畔、為紀念法國大革命百年世博會而建造的鋼鐵地標是？",
    "options": [
      "艾菲爾高鐵塔",
      "比薩斜石鐘塔",
      "倫敦大鐵橋塔",
      "柏林電視塔樓"
    ],
    "answerIndex": 0,
    "explanation": "艾菲爾鐵塔於 1889 年完工，全高 330 公尺，為巴黎最具辨識度的世界級地標建築。"
  },
  {
    "id": "q_world_1_14",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "埃及尼羅河西岸開羅近郊留存數千年，由巨石砌築的古代法老陵墓奇蹟是？",
    "options": [
      "宏偉吉薩金字",
      "人面獅身石雕",
      "阿布辛貝神廟",
      "卡納克大柱殿"
    ],
    "answerIndex": 0,
    "explanation": "古埃及吉薩金字塔群建於四千多年前，其中古夫金字塔為古代世界七大奇蹟唯一現存者。"
  },
  {
    "id": "q_world_1_15",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "義大利中部托斯卡納區，因地基土壤鬆軟沉降而以獨特傾斜姿態聞名的白色鐘樓是？",
    "options": [
      "比薩斜石鐘塔",
      "聖馬可大鐘樓",
      "佛羅倫斯鐘塔",
      "羅馬圓形角場"
    ],
    "answerIndex": 0,
    "explanation": "比薩斜塔始建於 1173 年，因地基淺且土質鬆軟在建至第三層即傾斜，現經工程修復穩定。"
  },
  {
    "id": "q_world_1_16",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "英國倫敦泰晤士河畔英國國會大廈北端，著名的新哥德式巨型報時鐘塔是？",
    "options": [
      "大笨鐘大鐘塔",
      "倫敦塔橋雙塔",
      "西敏寺大教堂",
      "聖保羅大教堂"
    ],
    "answerIndex": 0,
    "explanation": "大笨鐘（Big Ben，現名伊麗莎白塔）建於 1859 年，是英國倫敦極具標誌性的鐘樓地標。"
  },
  {
    "id": "q_world_1_17",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "中國古代為了防禦北方遊牧民族南下入侵，在北方崇山峻嶺間修建的萬里防禦城牆是？",
    "options": [
      "萬里長城城牆",
      "故宮紫禁城垣",
      "西安古城城樓",
      "平遙古城城垣"
    ],
    "answerIndex": 0,
    "explanation": "萬里長城東起山海關、西至嘉峪關，總長逾兩萬公里，為人類歷史上規模最宏偉的軍事防禦工程。"
  },
  {
    "id": "q_world_1_18",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "澳洲獨特孤立的地理環境中，胸前長有育兒袋且跳躍力驚人的特有有袋動物是？",
    "options": [
      "善跳袋鼠動物",
      "慵懶無尾熊獸",
      "可愛鴨嘴獸獸",
      "敏捷袋貂動物"
    ],
    "answerIndex": 0,
    "explanation": "袋鼠是澳洲最具代表性的有袋類哺乳動物，強健後腿與長尾巴能高速彈跳奔馳於原野。"
  },
  {
    "id": "q_world_1_19",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "地球表面積最遼闊、水體容量最龐大，覆蓋地球近三分之一表面積的大洋是？",
    "options": [
      "廣袤太平洋區",
      "深沉大西洋區",
      "溫暖印度洋區",
      "冰冷北極洋區"
    ],
    "answerIndex": 0,
    "explanation": "太平洋面積約 1.65 億平方公里，是地球上最大、最深的大洋，大於地球所有陸地面積總和。"
  },
  {
    "id": "q_world_1_20",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "地球上氣溫最低、終年被數千公尺巨厚冰原覆蓋且無常住人類定居的大陸是？",
    "options": [
      "冰冷南極大陸",
      "荒涼北極冰海",
      "廣袤非洲大陸",
      "寒冷歐亞大陸"
    ],
    "answerIndex": 0,
    "explanation": "南極洲是世界第七大洲，98% 面積為平均厚度逾兩千公尺的大陸冰蓋，保留全球大部分淡水。"
  },
  {
    "id": "q_world_1_21",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "日本國的首都、也是全球人口最稠密且經濟極為繁華的國際超級大都市是？",
    "options": [
      "繁華東京都市",
      "古都京都古城",
      "港都大阪都市",
      "古城奈良名城"
    ],
    "answerIndex": 0,
    "explanation": "東京是大韓民國以東東亞最核心樞紐，大東京首都圈人口逾 3700 萬，為全球最大都會區。"
  },
  {
    "id": "q_world_1_22",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "美國東岸著名的自由女神像，高舉火炬矗立在紐約港的哪一座島嶼入口處？",
    "options": [
      "自由神像小島",
      "曼哈頓繁華島",
      "長島海灘大島",
      "史泰登居民島"
    ],
    "answerIndex": 0,
    "explanation": "自由女神像由法國人民贈送給美國慶祝獨立百年，高聳於紐約港內的自由島（Liberty Island）。"
  },
  {
    "id": "q_world_1_23",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "貫穿非洲東北部、流經埃及與蘇丹等國，被公認為世界上長度最長的大河流是？",
    "options": [
      "浩瀚尼羅長河",
      "亞馬遜熱帶河",
      "中國長江大河",
      "歐洲多瑙河流"
    ],
    "answerIndex": 0,
    "explanation": "尼羅河全長約 6650 公里，由南向北流入地中海，孕育出古埃及輝煌燦爛的農耕尼羅文明。"
  },
  {
    "id": "q_world_1_24",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "位於南美洲北部、被譽為「地球之肺」且擁有全球最龐大生物多樣性的熱帶雨林是？",
    "options": [
      "亞馬遜大雨林",
      "剛果盆地雨林",
      "東南亞熱帶林",
      "馬達加斯加林"
    ],
    "answerIndex": 0,
    "explanation": "亞馬遜雨林面積逾 550 萬平方公里，產生地球大量氧氣並調節全球降水與大氣碳循環。"
  },
  {
    "id": "q_world_1_25",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "義大利東北部著名的水上城市，由一百多個島嶼和縱橫交錯的運河水巷組成的是？",
    "options": [
      "浪漫威尼斯市",
      "時尚米蘭都市",
      "文藝佛羅倫斯",
      "永恆羅馬古城"
    ],
    "answerIndex": 0,
    "explanation": "威尼斯以水為街、以船為舟，著名黑色平底遊船貢多拉（Gondola）穿梭於浪漫水巷之間。"
  },
  {
    "id": "q_world_1_26",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "位於印度北方邦阿格拉城、由蒙兀兒皇帝沙賈漢為紀念摯愛妻子純白大理石建造的陵墓是？",
    "options": [
      "泰姬瑪哈陵墓",
      "紅堡皇帝宮殿",
      "琥珀堡高山宮",
      "風之宮粉紅閣"
    ],
    "answerIndex": 0,
    "explanation": "泰姬瑪哈陵（Taj Mahal）融合伊斯蘭與波斯建築美學，對稱完美，名列新世界七大奇蹟。"
  },
  {
    "id": "q_world_1_27",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "全球面積最龐大的島嶼，位於北美洲東北部、全境大部分處於北極圈內的是？",
    "options": [
      "廣袤格陵蘭島",
      "寒冷冰島全境",
      "馬達加斯加大",
      "英國本島全島"
    ],
    "answerIndex": 0,
    "explanation": "格陵蘭島面積逾 216 萬平方公里，是世界第一大島，約 80% 陸地被厚重的大陸冰原覆蓋。"
  },
  {
    "id": "q_world_1_28",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "澳洲聯邦的聯邦政府首都所在地，既非雪梨也非墨爾本的規劃花園城市是？",
    "options": [
      "優美坎培拉市",
      "海港雪梨都市",
      "文化墨爾本市",
      "西澳伯斯大城"
    ],
    "answerIndex": 0,
    "explanation": "澳洲首都坎培拉（Canberra）是當年為化解雪梨與墨爾本爭奪首都僵局而折衷規劃興建的新都。"
  },
  {
    "id": "q_world_1_29",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "橫跨歐亞兩大洲、曾為羅馬帝國與拜占庭帝國及鄂圖曼帝國首都的千年歷史名城是？",
    "options": [
      "伊斯坦堡古城",
      "希臘雅典古城",
      "義大利羅馬市",
      "埃及開羅古城"
    ],
    "answerIndex": 0,
    "explanation": "伊斯坦堡（君士坦丁堡）扼守博斯普魯斯海峽咽喉，地跨歐亞雙洲，見證三大帝國歷史風雲。"
  },
  {
    "id": "q_world_1_30",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 1,
    "question": "世界上面積最廣闊、橫跨非洲北部多國且極端乾旱高溫的熱帶巨大沙漠是？",
    "options": [
      "撒哈拉大沙漠",
      "戈壁溫帶沙漠",
      "喀拉哈里沙漠",
      "阿塔卡瑪沙漠"
    ],
    "answerIndex": 0,
    "explanation": "撒哈拉沙漠面積逾 900 萬平方公里，面積幾乎相當於整個美國本土，為全球最大沙漠環境。"
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
    "id": "q_world_2_11",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "喜馬拉雅山脈橫亙於青藏高原與印度次大陸間，世界上海拔最高的山峰聖母峰標高約？",
    "options": [
      "約八千八百米",
      "約六千五百米",
      "約一萬公尺高",
      "約七千二百米"
    ],
    "answerIndex": 0,
    "explanation": "珠穆朗瑪峰（聖母峰）最新測量海拔高度約為 8848.86 公尺，為地球陸地第一高峰。"
  },
  {
    "id": "q_world_2_12",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "英國的首都、泰晤士河橫貫市區且擁有著名地鐵系統與雙層紅色巴士的國際大都市是？",
    "options": [
      "歷史名城倫敦",
      "工業城曼徹斯",
      "蘇格蘭愛丁堡",
      "披頭四利物浦"
    ],
    "answerIndex": 0,
    "explanation": "倫敦（London）是英國首都與全球金融文化樞紐，擁有悠久的兩千年都市建城歷史。"
  },
  {
    "id": "q_world_2_13",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "法國首都、塞納河穿城而過並被譽為世界「浪漫之都」與「花都」的城市是？",
    "options": [
      "花都巴黎都市",
      "南法馬賽港城",
      "電影之城坎城",
      "葡萄酒城波爾"
    ],
    "answerIndex": 0,
    "explanation": "巴黎（Paris）是法國政治文化經濟中心，羅浮宮、凱旋門、聖母院坐落其中舉世聞名。"
  },
  {
    "id": "q_world_2_14",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "大韓民國的首都、漢江橫貫市區且首爾塔聳立南山之巔的現代化大都會是？",
    "options": [
      "漢江首爾都會",
      "海港釜山城市",
      "科技大邱城市",
      "古城慶州名城"
    ],
    "answerIndex": 0,
    "explanation": "首爾（Seoul）是韓國首都與最大都會區，兼具景福宮等李氏朝鮮古蹟與繁華現代商圈。"
  },
  {
    "id": "q_world_2_15",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "東南亞島國、面積雖小但綠化極佳被譽為「花園城市」與亞洲金融重鎮的國家是？",
    "options": [
      "花園城新加坡",
      "熱帶馬來西亞",
      "千島國印尼國",
      "萬島國菲律賓"
    ],
    "answerIndex": 0,
    "explanation": "新加坡地處馬六甲海峽要衝，以嚴明法治、優越綠化覆蓋與高科技金融經貿聞名於世。"
  },
  {
    "id": "q_world_2_16",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "歐洲阿爾卑斯山脈環抱、以精準機械鐘錶工藝、優質起司與永久中立國聞名的是？",
    "options": [
      "風景如畫瑞士",
      "音樂之都奧地",
      "平原王國荷蘭",
      "童話王國丹麥"
    ],
    "answerIndex": 0,
    "explanation": "瑞士聯邦地處中歐高山，鐘錶業精密卓越，也是紅十字會等多個國際組織總部所在地。"
  },
  {
    "id": "q_world_2_17",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "西歐低地國家、以美麗鬱金香花海、古老風車群與木鞋聞名於世的國家是？",
    "options": [
      "風車國度荷蘭",
      "巧克力國比利",
      "童話王國丹麥",
      "峽灣王國挪威"
    ],
    "answerIndex": 0,
    "explanation": "荷蘭約四分之一國土低於海平面，自古善於築堤防洪、建造排水風車與種植鬱金香球根。"
  },
  {
    "id": "q_world_2_18",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "南歐伊比利半島國家、以熱情奔放的佛朗明哥舞蹈、熱血鬥牛文化與海鮮燉飯聞名的是？",
    "options": [
      "熱情西班牙國",
      "航海國葡萄牙",
      "文藝義大利國",
      "浪漫法國全境"
    ],
    "answerIndex": 0,
    "explanation": "西班牙文化繽紛璀璨，馬德里與巴塞隆納名城薈萃，高第建築藝術更是吸引全球目光。"
  },
  {
    "id": "q_world_2_19",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "世界上面積國土遼闊橫跨歐亞兩洲、擁有廣袤西伯利亞針葉林的第一大國是？",
    "options": [
      "廣袤俄羅斯國",
      "北美加拿大國",
      "美洲巴西聯邦",
      "澳洲袋鼠國度"
    ],
    "answerIndex": 0,
    "explanation": "俄羅斯聯邦國土面積逾 1709 萬平方公里，佔全球陸地總面積八分之一，橫跨 11 個時區。"
  },
  {
    "id": "q_world_2_20",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "被義大利羅馬市完全環抱、天主教教宗駐地且為全世界面積最小的主權國家是？",
    "options": [
      "聖座梵蒂岡城",
      "摩納哥大公國",
      "聖馬利諾共和",
      "安道爾小公國"
    ],
    "answerIndex": 0,
    "explanation": "梵蒂岡國土面積僅 0.44 平方公里、人口未滿千人，聖伯多祿大教堂與西斯汀禮拜堂位處其間。"
  },
  {
    "id": "q_world_2_21",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "北美洲北部的聯邦制國家、國旗繪有一片紅色楓樹葉標誌的國家是？",
    "options": [
      "楓葉國加拿大",
      "合眾國美國國",
      "熱情墨西哥國",
      "群島格陵蘭島"
    ],
    "answerIndex": 0,
    "explanation": "加拿大面積居世界第二，楓糖與楓樹資源豐富，首都渥太華，英語與法語並列官方語言。"
  },
  {
    "id": "q_world_2_22",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "南美洲面積最大、人口最多且以狂歡節嘉年華與森巴舞聞名於世的國家是？",
    "options": [
      "熱情巴西聯邦",
      "潘帕斯阿根廷",
      "安地斯智利國",
      "安地斯祕魯國"
    ],
    "answerIndex": 0,
    "explanation": "巴西首都為巴西利亞，里約熱內盧與聖保羅繁華非凡，全境橫跨亞馬遜河流域大部。"
  },
  {
    "id": "q_world_2_23",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "加拿大聯邦的官方首都所在地，位於安大略省境內而非多倫多或溫哥華的城市是？",
    "options": [
      "典雅渥太華市",
      "繁華多倫多市",
      "法語城蒙特婁",
      "西岸溫哥華市"
    ],
    "answerIndex": 0,
    "explanation": "渥太華（Ottawa）由維多利亞女王於 1857 年欽定為加拿大首都，以平衡英法兩大族群利益。"
  },
  {
    "id": "q_world_2_24",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "巴西聯邦共和國在 1960 年落成的新規劃首都，城市鳥瞰圖宛如一架展翅飛機的是？",
    "options": [
      "現代巴西利亞",
      "海港里約熱內",
      "繁華聖保羅市",
      "古都薩爾瓦多"
    ],
    "answerIndex": 0,
    "explanation": "巴西利亞（Brasília）由著名建築師尼邁耶規劃設計，三年內自荒原拔地而起，列為世界遺產。"
  },
  {
    "id": "q_world_2_25",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "土耳其共和國的政治官方首都，地處小亞細亞安納托利亞高原中央的城市是？",
    "options": [
      "安卡拉大都市",
      "歷史伊斯坦堡",
      "港口城市伊茲",
      "古城安塔利亞"
    ],
    "answerIndex": 0,
    "explanation": "凱末爾建立土耳其共和國後，將首都從海峽邊陲的伊斯坦堡遷至內陸防守穩固的安卡拉。"
  },
  {
    "id": "q_world_2_26",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "全球面積最廣闊、完全不臨大海的「世界最大內陸國家」是位於中亞的？",
    "options": [
      "哈薩克共和國",
      "蒙古人民共和",
      "烏茲別克共和",
      "土庫曼共和國"
    ],
    "answerIndex": 0,
    "explanation": "哈薩克面積達 272 萬平方公里，北鄰俄羅斯、東接中國，為世界第一大內陸國與第九大國。"
  },
  {
    "id": "q_world_2_27",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "南美洲委內瑞拉境內、水流自峭壁垂直飛瀉落差高達 979 公尺的全球最高瀑布是？",
    "options": [
      "天使安赫爾瀑",
      "尼加拉大瀑布",
      "維多利亞瀑布",
      "伊瓜蘇大瀑布"
    ],
    "answerIndex": 0,
    "explanation": "安赫爾瀑布（Angel Falls）總落差達 979 公尺，水流在未墜落水潭前大多化為瀰漫雲霧。"
  },
  {
    "id": "q_world_2_28",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "沿著南美洲西海岸縱貫七國、全長達七千餘公里的世界上最長陸地山脈是？",
    "options": [
      "安地斯大山脈",
      "洛磯高山山脈",
      "阿爾卑斯山脈",
      "烏拉爾老山脈"
    ],
    "answerIndex": 0,
    "explanation": "安地斯山脈是板塊板塊隱沒擠壓隆起形成，平均海拔近 4000 公尺，孕育璀璨印加文明。"
  },
  {
    "id": "q_world_2_29",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "發源於德國黑森林、由西向東橫貫歐洲十國注入黑海的著名國際大河流是？",
    "options": [
      "多瑙河大河流",
      "萊茵河大動脈",
      "塞納河穿巴黎",
      "伏爾加俄羅斯"
    ],
    "answerIndex": 0,
    "explanation": "多瑙河（Danube）是歐洲流經國家最多的國際河流，小約翰史特勞斯曾作名曲《藍色多瑙河》。"
  },
  {
    "id": "q_world_2_30",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 2,
    "question": "位於約旦與巴勒斯坦邊界、湖水鹽度極高以致人體能輕易漂浮於水面上的內陸鹽湖是？",
    "options": [
      "神奇的死海湖",
      "裡海內陸海體",
      "鹹海內陸湖泊",
      "貝加爾深水湖"
    ],
    "answerIndex": 0,
    "explanation": "死海湖面低於海平面約 430 公尺為地球陸地最低點，鹽度高達 34%，魚類與植物皆無法生存。"
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
    "id": "q_world_3_11",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "地處南太平洋波里尼西亞東端、因矗立近千尊神秘凝視巨型石雕「摩艾像」聞名的是？",
    "options": [
      "復活節摩艾島",
      "夏威夷群島嶼",
      "大溪地度假島",
      "斐濟群島美景"
    ],
    "answerIndex": 0,
    "explanation": "復活節島（拉帕努伊）為智利屬地，島上 887 尊由凝灰岩鑿刻的巨型摩艾人面石雕舉世聞名。"
  },
  {
    "id": "q_world_3_12",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "約旦南部隱蔽於陡峭紅砂岩峽谷深處、被直接在岩壁上雕鑿而成的失落玫瑰古城是？",
    "options": [
      "佩特拉玫瑰城",
      "以弗所古希臘",
      "巴比倫空中園",
      "傑拉什古羅馬"
    ],
    "answerIndex": 0,
    "explanation": "佩特拉（Petra）為古代納巴泰王國首都，卡茲尼神殿由整塊玫瑰紅色巨岩依山雕鑿而成。"
  },
  {
    "id": "q_world_3_13",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "秘魯安地斯山脈海拔 2430 公尺高山山脊上、建有精準巨石梯田的印加帝國空中遺跡是？",
    "options": [
      "馬丘比丘古城",
      "納斯卡巨地畫",
      "提亞瓦納科址",
      "庫斯科舊王都"
    ],
    "answerIndex": 0,
    "explanation": "馬丘比丘建於 15 世紀印加盛期，巨石銜接嚴密不入刀片，為印加建築最高工程傑作。"
  },
  {
    "id": "q_world_3_14",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "從紅海向南延伸穿過東非高原至莫三比克、因地殼板塊張裂形成的巨大地質奇觀是？",
    "options": [
      "東非巨大裂谷",
      "科羅拉多大峽",
      "雅魯藏布大峽",
      "歐洲萊茵地塹"
    ],
    "answerIndex": 0,
    "explanation": "東非大裂谷全長逾六千公里，是地幔熱柱上升使非洲板塊分裂張裂形成的宏偉斷裂構造帶。"
  },
  {
    "id": "q_world_3_15",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "北大西洋中緊鄰北極圈、因火山地熱與巨大冰川共存而被稱為「冰與火之歌」的島國是？",
    "options": [
      "地熱王國冰島",
      "格陵蘭大冰島",
      "挪威斯瓦爾巴",
      "丹麥法羅群島"
    ],
    "answerIndex": 0,
    "explanation": "冰島地跨美洲與歐亞板塊張裂帶，全島密佈活火山、間歇泉、地熱溫泉與壯麗瓦特納冰原。"
  },
  {
    "id": "q_world_3_16",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "坦尚尼亞東北部、海拔 5895 公尺且山頂在赤道附近依然覆蓋永久白雪的非洲最高峰是？",
    "options": [
      "吉力馬札羅山",
      "肯亞高山主峰",
      "魯文佐里山脈",
      "阿特拉斯山脈"
    ],
    "answerIndex": 0,
    "explanation": "吉力馬札羅山是一座休眠火山，被稱為「非洲屋脊」，赤道雪冠景觀壯麗但受暖化正縮減。"
  },
  {
    "id": "q_world_3_17",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "人工開鑿鑿穿中美洲地峽、溝通太平洋與大西洋咽喉並大幅縮短兩洋航程的運河是？",
    "options": [
      "巴拿馬大運河",
      "蘇伊士通運河",
      "基爾德國運河",
      "伊利美國運河"
    ],
    "answerIndex": 0,
    "explanation": "巴拿馬運河全長 82 公里，採用階梯式船閘克服海平面高差，為全球海運樞紐黃金水道。"
  },
  {
    "id": "q_world_3_18",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "扼守地中海大西洋出入口、歐洲與非洲板塊最短相距僅約 14 公里的重要戰略海峽是？",
    "options": [
      "直布羅陀海峽",
      "博斯普魯斯峽",
      "達達尼爾海峽",
      "馬六甲咽喉峽"
    ],
    "answerIndex": 0,
    "explanation": "直布羅陀海峽北為伊比利半島與英屬直布羅陀巨巖，南為摩洛哥，自古為兵家必爭之地。"
  },
  {
    "id": "q_world_3_19",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "挪威西海岸因第四紀古冰河劇烈向下刨蝕、海水湧入形成的深邃狹長Ｕ型海灣地貌是？",
    "options": [
      "壯麗峽灣地貌",
      "環形珊瑚礁盤",
      "喇叭狀三角洲",
      "平緩白沙海灘"
    ],
    "answerIndex": 0,
    "explanation": "挪威松恩峽灣與蓋朗厄爾峽灣深達千米，兩岸懸崖瀑布飛瀉，是典型的第四紀冰河侵蝕海岸。"
  },
  {
    "id": "q_world_3_20",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "俄羅斯西伯利亞南部、儲藏全球五分之一未結冰地表淡水且深度達 1642 公尺的湖泊是？",
    "options": [
      "貝加爾深古湖",
      "北美的蘇必略",
      "非洲坦干伊喀",
      "維多利亞淡水"
    ],
    "answerIndex": 0,
    "explanation": "貝加爾湖是板塊裂谷形成的構造湖，已有 2500 萬年歷史，是全球最深、蓄水量最大的淡水湖。"
  },
  {
    "id": "q_world_3_21",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "位於北美洲美國與加拿大國界邊境、由五個巨大冰河侵蝕淡水湖組成的湖泊群統稱為？",
    "options": [
      "北美大五大湖",
      "芬蘭萬湖水系",
      "非洲大湖泊群",
      "俄羅斯湖沼群"
    ],
    "answerIndex": 0,
    "explanation": "北美五大湖（蘇必略、休倫、密西根、伊利、安大略）是全球地表最大淡水湖群，面積遼闊。"
  },
  {
    "id": "q_world_3_22",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "世界上海拔最高的首都城市、坐落於南美洲安地斯山脈高原海拔逾 3600 公尺的是？",
    "options": [
      "玻利維亞拉巴",
      "厄瓜多基多市",
      "哥倫比亞波哥",
      "不丹國廷布市"
    ],
    "answerIndex": 0,
    "explanation": "玻利維亞中央政府所在地拉巴斯（La Paz）坐落於峽谷盆地，周邊高山雪峰環繞，高原氣薄。"
  },
  {
    "id": "q_world_3_23",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "橫跨歐亞兩洲交界分水嶺、自北向南延伸並作為歐洲與亞洲地理劃分界線的山脈是？",
    "options": [
      "烏拉爾老山脈",
      "高加索高山脈",
      "阿爾卑斯山脈",
      "阿爾泰大山脈"
    ],
    "answerIndex": 0,
    "explanation": "烏拉爾山脈北起北冰洋海岸、南抵烏拉爾河，地理學上傳統公認為歐亞兩大陸洲界分界線。"
  },
  {
    "id": "q_world_3_24",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "位於大洋洲澳洲東北外海、綿延兩千餘公里且由數千個珊瑚礁島組成的世界最大珊瑚礁是？",
    "options": [
      "澳洲大堡礁群",
      "馬爾地夫環礁",
      "紅海珊瑚礁群",
      "加勒比海珊瑚"
    ],
    "answerIndex": 0,
    "explanation": "大堡礁（Great Barrier Reef）是地球上生物建造的最大結構體，甚至從外太空都能清晰辨認。"
  },
  {
    "id": "q_world_3_25",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "世界上面積最狹長、東西平均寬僅 180 公里但南北長逾 4300 公里的南美洲國家是？",
    "options": [
      "狹長智利國度",
      "狹長挪威王國",
      "海島日本列島",
      "狹長越南國度"
    ],
    "answerIndex": 0,
    "explanation": "智利西臨太平洋、東倚安地斯山，氣候跨越北部阿塔卡瑪沙漠、中部地中海氣候至南部冰河。"
  },
  {
    "id": "q_world_3_26",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "美國西南部因科羅拉多河歷經數百萬年向下深切侵蝕、呈現赤紅岩層斷崖的世界奇觀是？",
    "options": [
      "科羅拉多大峽",
      "黃石國家公園",
      "優勝美地峽谷",
      "拱門紅石奇岩"
    ],
    "answerIndex": 0,
    "explanation": "科羅拉多大峽谷（Grand Canyon）深達 1800 公尺，斷崖岩層完整記錄從寒武紀至新生代的地質史。"
  },
  {
    "id": "q_world_3_27",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "位於非洲尚比亞與辛巴威邊界、贊比西河瀑布寬逾千米且當地原住民稱為「雷鳴之霧」的是？",
    "options": [
      "維多利亞大瀑",
      "尼加拉大瀑布",
      "伊瓜蘇大瀑布",
      "黃果樹大瀑布"
    ],
    "answerIndex": 0,
    "explanation": "維多利亞瀑布寬度達 1708 公尺、高達 108 公尺，水氣騰空化為彩虹，為世界三大巨瀑之一。"
  },
  {
    "id": "q_world_3_28",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "義大利首都羅馬市內保存完好、穹頂上方開有直徑近九米圓天窗的古羅馬萬神殿建造於？",
    "options": [
      "古羅馬帝國期",
      "文藝復興盛期",
      "中世紀黑暗期",
      "巴洛克藝術期"
    ],
    "answerIndex": 0,
    "explanation": "羅馬萬神殿（Pantheon）建於西元 2 世紀哈德良皇帝時期，無鋼筋混凝土穹頂跨度奇蹟至今屹立。"
  },
  {
    "id": "q_world_3_29",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "印度洋上由上千個珊瑚島嶼組成、平均海拔僅一公尺多且面臨海平面上升威脅的度假勝地是？",
    "options": [
      "馬爾地夫群島",
      "塞席爾群島國",
      "模里西斯島國",
      "夏威夷群島國"
    ],
    "answerIndex": 0,
    "explanation": "馬爾地夫是全球平均海拔最低的國家，由 26 個天然環礁組成，碧海白沙被譽為印度洋珍珠。"
  },
  {
    "id": "q_world_3_30",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 3,
    "question": "柬埔寨西北部叢林中隱匿數百年、以高超雕刻浮雕與五座高聳玉米型蓮花石塔聞名的是？",
    "options": [
      "宏偉吳哥窟廟",
      "印尼婆羅浮屠",
      "泰國大皇宮廟",
      "緬甸仰光大金"
    ],
    "answerIndex": 0,
    "explanation": "吳哥窟（Angkor Wat）建於 12 世紀高棉帝國全盛期，為世界上最大的宗教單體寺廟建築群。"
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
    "id": "q_world_4_11",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "南美洲智利北部的阿塔卡瑪沙漠（Atacama），被地理學家公認為世界上最乾旱的極端原因是？",
    "options": [
      "副高秘魯寒流",
      "遠離海洋深入",
      "地形海拔太低",
      "季風阻隔背風"
    ],
    "answerIndex": 0,
    "explanation": "副熱帶高壓下沉氣流結合沿海秘魯寒流降溫減濕，加上安地斯山阻隔水氣，部分地區百年未降雨。"
  },
  {
    "id": "q_world_4_12",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "歐洲巴爾幹半島西側由石灰岩廣泛分佈、經雨水溶蝕形成溶洞、落水洞與石芽的地貌特徵稱為？",
    "options": [
      "喀斯特溶石貌",
      "風蝕雅丹地貌",
      "冰川堆積地貌",
      "火山熔岩地貌"
    ],
    "answerIndex": 0,
    "explanation": "喀斯特（Karst）地貌原名源自斯洛維尼亞喀斯特高原，石灰岩溶蝕形成地下暗河、溶洞與峰林。"
  },
  {
    "id": "q_world_4_13",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "橫跨美國與加拿大國境、以水量豐沛水霧騰空且由馬蹄瀑布、美利堅瀑布組成的大瀑布是？",
    "options": [
      "尼加拉瓜巨瀑",
      "伊瓜蘇大瀑布",
      "維多利亞瀑布",
      "安赫爾瀑布水"
    ],
    "answerIndex": 0,
    "explanation": "尼加拉瀑布（Niagara Falls）源自五大湖水系伊利湖流入安大略湖的高差，水力發電與景觀極豐。"
  },
  {
    "id": "q_world_4_14",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "位於希臘中部的「天空之城」邁泰奧拉修道院，因其建築極具震撼力地高聳建於何種奇特地形？",
    "options": [
      "天然砂岩柱頂",
      "活火山口邊緣",
      "深海珊瑚環礁",
      "高山冰原裂隙"
    ],
    "answerIndex": 0,
    "explanation": "邁泰奧拉（Meteora）修道院群建於數百公尺高的垂直砂岩石柱頂端，宛如漂浮於雲霧虛空中。"
  },
  {
    "id": "q_world_4_15",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "位於中亞哈薩克與烏茲別克交界，曾為世界第四大湖但因蘇聯大量引水灌溉棉花而幾近乾涸的是？",
    "options": [
      "鹹海內陸湖泊",
      "裡海最大水體",
      "巴爾喀什半湖",
      "青海高原鹹湖"
    ],
    "answerIndex": 0,
    "explanation": "鹹海（Aral Sea）因注入河川阿姆河與錫爾河被截流灌溉，數十年間縮小 90%，被稱為地質生態浩劫。"
  },
  {
    "id": "q_world_4_16",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "大洋洲島國紐西蘭由南島與北島兩大島嶼組成，將南島與北島天然隔開的重要海峽是？",
    "options": [
      "庫克險要海峽",
      "巴斯澳洲海峽",
      "托雷斯北海峽",
      "麥哲倫南海峽"
    ],
    "answerIndex": 0,
    "explanation": "庫克海峽（Cook Strait）寬度約 22 公里，以首位穿行繪製該海峽的英國探險家庫克船長命名。"
  },
  {
    "id": "q_world_4_17",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "俄羅斯西伯利亞東北部被稱為「北半球寒極」、曾測得零下 71.2℃ 嚴寒極端低溫的定居村落是？",
    "options": [
      "奧伊米亞康村",
      "雅庫茨克首府",
      "莫斯科首都區",
      "海參崴海港市"
    ],
    "answerIndex": 0,
    "explanation": "奧伊米亞康（Oymyakon）深居內陸盆地，冷空氣下沉沉聚，是人類永久定居點中氣溫最低之處。"
  },
  {
    "id": "q_world_4_18",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "在海圖經緯度系統中，通過英國倫敦格林威治天文台舊址並被定義為經度 0 度的經線是？",
    "options": [
      "本初子午子線",
      "赤道正緯線圈",
      "國際換日日線",
      "北回歸緯度線"
    ],
    "answerIndex": 0,
    "explanation": "1884 年華盛頓國際子午線會議將通過倫敦格林威治之經線定為本初子午線，確立世界時區基準。"
  },
  {
    "id": "q_world_4_19",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "位於南美洲巴西與阿根廷邊界、由 275 個瀑布組成長達近三公里且擁有「魔鬼之咽」的是？",
    "options": [
      "伊瓜蘇瀑布群",
      "尼加拉瀑布群",
      "維多利亞瀑布",
      "安赫爾落差瀑"
    ],
    "answerIndex": 0,
    "explanation": "伊瓜蘇瀑布（Iguazu Falls）呈馬蹄形橫跨兩國熱帶雨林，水勢咆哮磅礡，為世界瀑布寬度之冠。"
  },
  {
    "id": "q_world_4_20",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "非洲北部與亞洲西奈半島之間人工開鑿、將地中海與紅海直接貫通的著名國際航運海運水道是？",
    "options": [
      "蘇伊士大運河",
      "巴拿馬大運河",
      "基爾德國運河",
      "科林斯深運河"
    ],
    "answerIndex": 0,
    "explanation": "蘇伊士運河於 1869 年通航，全長 193 公里，船舶由歐洲前往亞洲無須繞道非洲好望角。"
  },
  {
    "id": "q_world_4_21",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "西亞兩河流域誕生了人類最早的美索不達米亞古文明，這兩條著名孕育文明的河流是？",
    "options": [
      "幼發拉底底格",
      "尼羅河亞馬遜",
      "印度河恆河水",
      "黃河與長江水"
    ],
    "answerIndex": 0,
    "explanation": "幼發拉底河與底格里斯河沖積出肥沃的兩河流域（美索不達米亞），誕生蘇美與巴比倫文明。"
  },
  {
    "id": "q_world_4_22",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "位於非洲東部、世界上面積最大且為尼羅河主要源頭的熱帶淡水湖泊是？",
    "options": [
      "維多利亞湖泊",
      "坦干伊喀深湖",
      "馬拉威高原湖",
      "查德內陸荒湖"
    ],
    "answerIndex": 0,
    "explanation": "維多利亞湖（Lake Victoria）跨坦尚尼亞、烏干達與肯亞，面積達 6.8 萬平方公里，僅次於蘇必略湖。"
  },
  {
    "id": "q_world_4_23",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "位處北歐斯堪地那維亞半島、境內擁有數萬個冰河侵蝕湖泊而被譽為「千湖之國」的是？",
    "options": [
      "千湖之國芬蘭",
      "峽灣國度挪威",
      "平原森林瑞典",
      "童話王國丹麥"
    ],
    "answerIndex": 0,
    "explanation": "芬蘭第四紀冰河消退後留下約 18.8 萬個湖泊與近 18 萬個島嶼，湖泊密佈如同藍色網目。"
  },
  {
    "id": "q_world_4_24",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "北美洲阿拉斯加境內、海拔 6190 公尺且為整個北美洲地理最高峰的山峰是？",
    "options": [
      "迪納利德納利",
      "洛磯高山主峰",
      "惠特尼雪高山",
      "聖海倫斯火山"
    ],
    "answerIndex": 0,
    "explanation": "迪納利峰（Denali，舊稱麥金利峰）位於阿拉斯加山脈，山體高聳於周邊平原，相對落差極大。"
  },
  {
    "id": "q_world_4_25",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "非洲南端好望角附近、因大西洋本格拉寒流與印度洋阿古拉斯暖流交匯而終年狂風巨浪的海域為？",
    "options": [
      "風暴好望角端",
      "合恩角極端角",
      "格陵蘭南端角",
      "弗羅里達海峽"
    ],
    "answerIndex": 0,
    "explanation": "葡萄牙航海家迪亞士於 1488 年抵達並命名為「風暴角」，後葡王若昂二世寄望打通印度航線改名好望角。"
  },
  {
    "id": "q_world_4_26",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "位於南美洲秘魯與玻利維亞邊界、湖面海拔高達 3812 公尺且為世界上海拔最高之大船通航湖泊是？",
    "options": [
      "滴滴喀喀湖泊",
      "的的喀喀高原",
      "馬拉開波潟湖",
      "阿根廷冰河湖"
    ],
    "answerIndex": 0,
    "explanation": "的的喀喀湖（Lake Titicaca）面積逾 8300 平方公里，水質湛藍，當地原住民以蘆葦編織漂浮島定居。"
  },
  {
    "id": "q_world_4_27",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "歐洲最高峰並非阿爾卑斯山的白朗峰，而是位於俄羅斯高加索山脈境內、海拔 5642 公尺的？",
    "options": [
      "厄爾布魯士山",
      "阿爾卑斯白朗",
      "馬特洪峰金字",
      "喀爾巴阡山峰"
    ],
    "answerIndex": 0,
    "explanation": "厄爾布魯士山（Mount Elbrus）是一座休眠雙頂火山，坐落於大高加索山脈，為歐洲地理最高點。"
  },
  {
    "id": "q_world_4_28",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "位於中歐波蘭境內、被列入世界文化遺產且開採超過七百年、地下建有巨大岩鹽雕刻教堂的是？",
    "options": [
      "維利奇卡鹽礦",
      "薩爾茨堡鹽山",
      "死海鹽沉積場",
      "烏尤尼鹽沼原"
    ],
    "answerIndex": 0,
    "explanation": "維利奇卡鹽礦地下深達 300 多公尺，礦工以岩鹽雕刻出聖金加教堂、吊燈與塑像，宛如地下宮殿。"
  },
  {
    "id": "q_world_4_29",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "太平洋與印度洋之間最繁忙的國際海運通道、被譽為「遠東海上生命線」的狹窄海峽是？",
    "options": [
      "馬六甲大咽喉",
      "巽他印尼海峽",
      "望加錫大水面",
      "龍目深水海峽"
    ],
    "answerIndex": 0,
    "explanation": "馬六甲海峽長約 1080 公里，西通安達曼海東入南海，承載全球三分之一海運貨物與一半原油運輸。"
  },
  {
    "id": "q_world_4_30",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 4,
    "question": "位於印度西北部拉賈斯坦邦、整座舊城區建築外牆全被塗刷成浪漫粉紅色的「粉紅之城」是？",
    "options": [
      "齋浦爾粉紅城",
      "焦特布爾藍城",
      "烏代浦爾白城",
      "阿姆利則金廟"
    ],
    "answerIndex": 0,
    "explanation": "齋浦爾（Jaipur）於 1876 年為迎接英國威爾斯親王到訪，全城建築依邦王令漆成好客象徵的陶粉紅色。"
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
    "id": "q_world_5_11",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "地處南美洲智利與阿根廷南端、將南美大陸與火地島分割開來的危險天然海峽是？",
    "options": [
      "麥哲倫大峽道",
      "德瑞克大海峽",
      "比格爾海峽道",
      "勒梅爾狹窄峽"
    ],
    "answerIndex": 0,
    "explanation": "麥哲倫於 1520 年環球航行中發現此海峽（Magellan Strait），風浪多變但避開了德瑞克海峽西風帶巨浪。"
  },
  {
    "id": "q_world_5_12",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "在板塊構造學中，位於太平洋周邊、因板塊聚合擠壓而集中全球百分之八十強烈地震火山的構造帶是？",
    "options": [
      "環太平洋火山帶",
      "地中海喜馬拉",
      "大西洋洋中脊",
      "東非大裂谷帶"
    ],
    "answerIndex": 0,
    "explanation": "環太平洋火山帶（Ring of Fire）綿延四萬公里，板塊俯衝隱沒帶造就了全球絕大多數深源地震與活火山。"
  },
  {
    "id": "q_world_5_13",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "位於俄羅斯堪察加半島上的活火山克柳切夫火山，以其極度完美而陡峭的錐體被譽為？",
    "options": [
      "北半球最活躍",
      "南半球最高山",
      "歐洲最大火山",
      "亞洲最高峰群"
    ],
    "answerIndex": 0,
    "explanation": "克柳切夫火山（Klyuchevskaya Sopka）海拔 4750 公尺，是歐亞大陸最高、噴發最頻繁的巨型複式火山。"
  },
  {
    "id": "q_world_5_14",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "在海洋地形學中，海平面下方自大陸邊緣平緩延伸至水深約兩百公尺處的平坦海底淺水帶稱為？",
    "options": [
      "大陸棚陸架區",
      "大陸斜坡深溝",
      "大洋深海平原",
      "中央洋脊裂谷"
    ],
    "answerIndex": 0,
    "explanation": "大陸棚（Continental Shelf）陽光穿透充足、河流注入營養鹽，孕育了全球 90% 以上的主要海洋漁場與油氣資源。"
  },
  {
    "id": "q_world_5_15",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "位於希臘聖托里尼島所屬的愛琴海火山群，在西元前約 1600 年爆發引發海嘯並被認為摧毀了？",
    "options": [
      "克里特米諾斯",
      "邁錫尼古文明",
      "特洛伊古城邦",
      "斯巴達城邦國"
    ],
    "answerIndex": 0,
    "explanation": "錫拉火山（Thera）大爆發引發巨大海嘯與氣候劇變，摧毀了青銅時代克里特島輝煌的米諾斯文明。"
  },
  {
    "id": "q_world_5_16",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "連接黑海與馬爾馬拉海、將伊斯坦堡一分為二且最窄處僅約 700 公尺的世界最窄海峽是？",
    "options": [
      "博斯普魯斯峽",
      "達達尼爾海峽",
      "克赤深水海峽",
      "直布羅陀海峽"
    ],
    "answerIndex": 0,
    "explanation": "博斯普魯斯海峽長約 30 公里，是黑海沿岸國家（烏克蘭、羅馬尼亞等）通往地中海的唯一出海通道。"
  },
  {
    "id": "q_world_5_17",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "位於南美洲玻利維亞西南部、海拔 3656 公尺且面積達一萬多平方公里的世界最大鹽沼「天空之鏡」是？",
    "options": [
      "烏尤尼大鹽沼",
      "阿塔卡瑪鹽原",
      "死海乾涸鹽灘",
      "青海茶卡鹽湖"
    ],
    "answerIndex": 0,
    "explanation": "烏尤尼鹽沼（Salar de Uyuni）極其平整，雨季雨水覆蓋薄膜時如一面巨鏡倒映天空，且蘊藏全球近半鋰礦儲量。"
  },
  {
    "id": "q_world_5_18",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "世界三大黑土帶之一、橫跨烏克蘭與俄羅斯西南部、土壤肥沃富含有機質腐殖層的肥沃地帶稱為？",
    "options": [
      "東歐大黑土帶",
      "西伯利亞沼澤",
      "潘帕斯大草原",
      "密西西比河流"
    ],
    "answerIndex": 0,
    "explanation": "烏克蘭黑土地層深厚肥沃，被譽為「歐洲糧倉」，與北美密西西比河流域黑土、中國東北黑土並稱世界三大黑土。"
  },
  {
    "id": "q_world_5_19",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "在地球大氣環流中，赤道受熱上升氣流至緯度 30 度附近下沉形成的乾燥高壓系統帶被稱為？",
    "options": [
      "副熱帶高壓帶",
      "赤道低氣壓帶",
      "副極地低壓帶",
      "極地東風冰原"
    ],
    "answerIndex": 0,
    "explanation": "哈德里環流（Hadley cell）下沉支在南北緯 20~30 度形成副熱帶高壓，空氣下沉乾熱，造就全球主要熱帶沙漠分佈。"
  },
  {
    "id": "q_world_5_20",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "位於非洲莫三比克海峽西側、早在白堊紀即與非洲大陸分離並演化出狐猴等大量獨特物種的島嶼是？",
    "options": [
      "馬達加斯加島",
      "塞席爾珊瑚島",
      "模里西斯島嶼",
      "留尼旺火山島"
    ],
    "answerIndex": 0,
    "explanation": "馬達加斯加島孤立演化逾 8800 萬年，全島 90% 的動植物為全球獨特特有種（如狐猴與猴麵包樹）。"
  },
  {
    "id": "q_world_5_21",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "在海底地質學中，大西洋海底沿南北方向延伸近兩萬公里、板塊不斷張裂噴發玄武岩岩漿的地貌是？",
    "options": [
      "中大西洋洋脊",
      "東太平洋海隆",
      "馬里亞納海溝",
      "爪哇島弧構造"
    ],
    "answerIndex": 0,
    "explanation": "中大西洋洋脊是美洲板塊與歐亞、非洲板塊張裂形成的巨大海底山脈，是海底擴張學說的核心地質證據。"
  },
  {
    "id": "q_world_5_22",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "位於土耳其安納托利亞高原中央、因凝灰岩風化侵蝕形成仙人煙囪奇石林且擁有龐大地下城的是？",
    "options": [
      "卡帕多奇亞區",
      "棉花堡溫泉階",
      "以弗所大古城",
      "特洛伊遺址區"
    ],
    "answerIndex": 0,
    "explanation": "卡帕多奇亞（Cappadocia）火山凝灰岩疏鬆，早期基督徒在此開鑿窯洞教堂與可容數萬人的深層地下防空避難城。"
  },
  {
    "id": "q_world_5_23",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "南美洲阿根廷境內、由莫雷諾冰川等組成的巨大冰川公園，其獨特之處在於它是世界上少數？",
    "options": [
      "仍在推進前進",
      "已完全融化光",
      "溫度最高冰川",
      "最狹窄的冰瀑"
    ],
    "answerIndex": 0,
    "explanation": "佩里托莫雷諾冰川（Perito Moreno）是世界罕見的動態平衡前進型冰川，冰舌不斷崩塌入湖，景觀震撼。"
  },
  {
    "id": "q_world_5_24",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "位於北美洲西部、縱貫加拿大與美國且為北美大陸太平洋水系與大西洋水系天然分水嶺的山脈是？",
    "options": [
      "洛磯高山山脈",
      "內華達高山嶺",
      "阿帕拉契老山",
      "喀斯開火山嶺"
    ],
    "answerIndex": 0,
    "explanation": "洛磯山脈（Rocky Mountains）全長逾 4800 公里，是北美大陸分水嶺（Continental Divide），群峰冰河峽谷密佈。"
  },
  {
    "id": "q_world_5_25",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "在非洲大草原上，每年數百萬頭牛羚與斑馬橫跨馬拉河、經歷尼羅鱷圍攻的壯觀遷徙發生於？",
    "options": [
      "塞倫蓋蒂原野",
      "剛果盆地叢林",
      "撒哈拉綠洲群",
      "喀拉哈里紅漠"
    ],
    "answerIndex": 0,
    "explanation": "東非動物大遷徙（The Great Migration）在坦尚尼亞塞倫蓋蒂國家公園與肯亞馬賽馬拉之間逐水草循環輪轉。"
  },
  {
    "id": "q_world_5_26",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "在海洋學中，環繞整個南極大陸、不受任何陸地阻擋自西向東高速環流的強大洋流系統被稱為？",
    "options": [
      "南極繞極洋流",
      "本格拉大寒流",
      "西風大漂流區",
      "秘魯大寒流體"
    ],
    "answerIndex": 0,
    "explanation": "南極繞極流（ACC）由強勁盛行西風驅動，是地球上運載水體量最大的洋流，有效阻絕熱量進入南極冰蓋。"
  },
  {
    "id": "q_world_5_27",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "位於歐洲南部巴爾幹半島、克羅埃西亞境內由十六個天然石灰岩沉澱壩形成的連鎖彩色湖泊國家公園是？",
    "options": [
      "普利特維采湖",
      "科莫湖度假區",
      "布萊德冰蝕湖",
      "日內瓦大湖泊"
    ],
    "answerIndex": 0,
    "explanation": "普利特維采湖群國家公園（十六湖公園）利用石灰華鈣化沉澱形成層層天然階梯瀑布，湖水隨陽光呈現翡翠彩藍。"
  },
  {
    "id": "q_world_5_28",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "地處中東阿拉伯半島南端、扼守紅海出入印度洋咽喉、阿拉伯語意為「眼淚之門」的海峽是？",
    "options": [
      "曼德海峽咽喉",
      "荷姆茲石油峽",
      "蒂朗海峽水道",
      "阿卡巴深水灣"
    ],
    "answerIndex": 0,
    "explanation": "曼德海峽（Bab-el-Mandeb）最窄處僅約 26 公里，北通紅海與蘇伊士運河，是歐亞原油與貨物運輸咽喉節點。"
  },
  {
    "id": "q_world_5_29",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "位於美國懷俄明州西北部、坐落於超級火山之上且擁有世界半數地熱間歇泉的全球首座國家公園是？",
    "options": [
      "黃石國家公園",
      "大峽谷大公園",
      "優勝美地公園",
      "錫安紅石公園"
    ],
    "answerIndex": 0,
    "explanation": "黃石國家公園建立於 1872 年，擁有大稜鏡溫泉與老忠實間歇泉，其地下沉睡著隨時可能爆發的超級巨型火山。"
  },
  {
    "id": "q_world_5_30",
    "category": "world",
    "categoryName": "世界地理",
    "categoryIcon": "🗺️",
    "difficulty": 5,
    "question": "在非洲南部卡拉哈里沙漠中央、奧卡萬戈河注入內陸構造盆地形成世界最大內陸綠洲濕地的是？",
    "options": [
      "奧卡萬戈三角",
      "尼羅河三角洲",
      "多瑙河三角洲",
      "恆河大三角洲"
    ],
    "answerIndex": 0,
    "explanation": "奧卡萬戈三角洲（Okavango Delta）河流從未流入海洋，在沙漠邊緣鋪展成萬平方公里的綠洲沼澤，野生動物極其豐饒。"
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
    "id": "q_anime_1_11",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "童話故事《灰姑娘》中，好心仙女用神奇魔法把什麼平凡蔬菜變成了華麗馬車？",
    "options": [
      "圓滾滾大南瓜",
      "清甜脆大西瓜",
      "大大的冬瓜瓜",
      "新鮮嫩大白菜"
    ],
    "answerIndex": 0,
    "explanation": "仙女用魔法棒一揮，把田裡的大南瓜變成了金碧輝煌的南瓜馬車載仙度瑞拉去舞會。"
  },
  {
    "id": "q_anime_1_12",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "知名經典動漫《寶可夢》中，主角小智最初從大木博士獲得的電屬性寶可夢是？",
    "options": [
      "黃色電皮卡丘",
      "愛睡覺卡比獸",
      "噴水流傑尼龜",
      "尾巴火小火龍"
    ],
    "answerIndex": 0,
    "explanation": "小智起晚了沒領到御三家，最後意外獲得了一隻個性傲嬌但威力強大的電氣鼠皮卡丘。"
  },
  {
    "id": "q_anime_1_13",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "日本知名卡通明星「哆啦A夢」最狂熱喜愛、看到就兩眼放光的日式傳統甜點是？",
    "options": [
      "香甜甜銅鑼燒",
      "軟ＱＱ草莓大",
      "彩色三色糰子",
      "焦香烤醬油丸"
    ],
    "answerIndex": 0,
    "explanation": "哆啦A夢最愛吃紅豆沙內餡的銅鑼燒，甚至多次為了銅鑼燒挺身冒險借道具給大雄。"
  },
  {
    "id": "q_anime_1_14",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "經典童話《木偶奇遇記》中，小木偶皮諾丘只要一開口說謊，身體的哪裡就會變長？",
    "options": [
      "長長尖尖鼻子",
      "圓圓大大耳朵",
      "長長細細脖子",
      "短短胖胖手指"
    ],
    "answerIndex": 0,
    "explanation": "藍仙女施下誠實魔法，皮諾丘只要說謊，鼻子就會不受控制地越變越長。"
  },
  {
    "id": "q_anime_1_15",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "童話故事《白雪公主》中，邪惡王后化身為老巫婆，誘騙白雪公主吃下了什麼有毒水果？",
    "options": [
      "鮮紅誘人蘋果",
      "多汁水蜜桃子",
      "金黃甜熟香蕉",
      "清甜紫大葡萄"
    ],
    "answerIndex": 0,
    "explanation": "邪惡王后製作了毒蘋果，白雪公主咬下一口後立即陷入假死沉睡，直到王子真愛之吻。"
  },
  {
    "id": "q_anime_1_16",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "任天堂經典電玩招牌主角「瑪利歐」的職業是水管工，他頭上招牌帽子的代表顏色是？",
    "options": [
      "鮮豔熱情紅色",
      "沉穩深邃藍色",
      "青翠草原綠色",
      "活潑明亮黃色"
    ],
    "answerIndex": 0,
    "explanation": "瑪利歐頭戴紅色鴨舌帽、身穿藍色吊帶褲，他的弟弟路易吉則是穿戴綠色帽子吊帶褲。"
  },
  {
    "id": "q_anime_1_17",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "卡通動畫《海綿寶寶》的主角海綿寶寶，他在比奇堡海底居住的房屋外觀形狀是？",
    "options": [
      "熱帶大鳳梨屋",
      "堅硬大石頭屋",
      "深海圓潛水艇",
      "白色大貝殼屋"
    ],
    "answerIndex": 0,
    "explanation": "海綿寶寶住在比奇堡貝殼街 124 號的大鳳梨屋中，寵物是會發出貓叫聲的小蝸。"
  },
  {
    "id": "q_anime_1_18",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "迪士尼經典動畫《冰雪奇緣》中，唱出名曲《Let It Go》並擁有強大冰雪魔法的女王是？",
    "options": [
      "艾莎冰雪女王",
      "安娜勇敢公主",
      "樂佩長髮公主",
      "愛麗兒小美人"
    ],
    "answerIndex": 0,
    "explanation": "艾莎女王擁有操控冰雪的強大天賦，在北山建造了宏偉晶瑩的冰雪宮殿釋放自我。"
  },
  {
    "id": "q_anime_1_19",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "皮克斯經典動畫《玩具總動員》中，堅信自己是太空騎警的太空人玩具主角是？",
    "options": [
      "太空巴斯光年",
      "牛仔胡迪警長",
      "彈簧狗好夥伴",
      "抱抱龍綠恐龍"
    ],
    "answerIndex": 0,
    "explanation": "巴斯光年招牌口號是「飛向宇宙，浩瀚無垠！」，初期堅信自己是真正的星際宇宙巡警。"
  },
  {
    "id": "q_anime_1_20",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "動畫電影《神偷奶爸》中，格魯身邊成群結隊、講著奇異語言的黃色膠囊小助手是？",
    "options": [
      "可愛黃小小兵",
      "綠色小史瑞克",
      "藍色藍色精靈",
      "粉紅小粉紅豬"
    ],
    "answerIndex": 0,
    "explanation": "小小兵（Minions）熱愛香蕉，忠誠又搞怪，是神偷奶爸格魯地下實驗室的最萌助手。"
  },
  {
    "id": "q_anime_1_21",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "日本經典長壽動漫《航海王》中，主角蒙其・Ｄ・魯夫立志出海並誓言要成為？",
    "options": [
      "偉大之海賊王",
      "強大海軍大將",
      "世界第一劍豪",
      "傳奇革命首領"
    ],
    "answerIndex": 0,
    "explanation": "魯夫頭戴紅髮傑克託付的草帽，名言是「我是要成為海賊王的男人！」，率領草帽海賊團。"
  },
  {
    "id": "q_anime_1_22",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "動漫《名偵探柯南》中，高中生名偵探工藤新一被黑衣組織灌下毒藥縮小後的化名是？",
    "options": [
      "江戶川柯南名",
      "服部平次偵探",
      "怪盜基德黑羽",
      "阿笠博士發明"
    ],
    "answerIndex": 0,
    "explanation": "新一隨手取材江戶川亂步與柯南道爾的名字，化名為江戶川柯南寄住在毛利蘭家中。"
  },
  {
    "id": "q_anime_1_23",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "宮崎駿吉卜力動畫《龍貓》中，載著小月與小梅姐妹在鄉間樹梢狂奔的神奇多腳巴士是？",
    "options": [
      "奔馳貓咪巴士",
      "飛天小魔女帚",
      "海底巨鯨號船",
      "旋轉南瓜馬車"
    ],
    "answerIndex": 0,
    "explanation": "貓巴士擁有十二隻腳，雙眼是明亮的探照燈，奔跑時能穿透樹林如風一般疾馳。"
  },
  {
    "id": "q_anime_1_24",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "經典迪士尼動畫《獅子王》中，經歷自我懷疑與考驗後重返榮耀石加冕為王的小獅子是？",
    "options": [
      "主角辛巴小獅",
      "壞叔叔刀疤獅",
      "老國王木法沙",
      "野豬彭彭夥伴"
    ],
    "answerIndex": 0,
    "explanation": "辛巴在父親木法沙遇害後流浪荒野，在丁滿與彭彭陪伴下體悟責任，奪回榮耀石王位。"
  },
  {
    "id": "q_anime_1_25",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "童話《阿拉丁神燈》中，只要輕輕摩擦古老的神燈，就會現身為主人實現三個願望的是？",
    "options": [
      "強大神燈精靈",
      "神秘飛毯魔毯",
      "洞窟守護巨獸",
      "金幣聚寶盆妖"
    ],
    "answerIndex": 0,
    "explanation": "神燈精靈擁有近乎全能的魔法力量，從神燈中化作藍色煙霧現身聽候主人差遣許願。"
  },
  {
    "id": "q_anime_1_26",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "熱門動漫《鬼滅之刃》中，主角竈門炭治郎身後背著木箱子，裡面保護著的鬼妹妹是？",
    "options": [
      "竈門禰豆子妹",
      "胡蝶忍九柱姐",
      "香奈乎繼子妹",
      "甘露寺蜜璃妹"
    ],
    "answerIndex": 0,
    "explanation": "禰豆子因被無慘血液感染化身為鬼，但保留人類善良情感，平日咬著竹筒縮小藏身木箱。"
  },
  {
    "id": "q_anime_1_27",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "經典搞笑動漫《蠟筆小新》中，五歲的小新平時在電視上最崇拜模仿的正義英雄是？",
    "options": [
      "英雄動感超人",
      "怪獸肥嘟嘟左",
      "神奇光之巨人",
      "無敵假面騎士"
    ],
    "answerIndex": 0,
    "explanation": "動感超人是小新最狂熱的偶像，小新經常大笑並擺出「動感光波」的招牌手勢。"
  },
  {
    "id": "q_anime_1_28",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "皮克斯動畫《天外奇蹟》中，卡爾老爺爺為了完成與愛妻的約定，利用什麼讓屋子飛上天？",
    "options": [
      "五彩繽紛氣球",
      "巨大火箭推進",
      "巨大熱氣球囊",
      "直升機旋翼槳"
    ],
    "answerIndex": 0,
    "explanation": "卡爾爺爺在屋頂綁了成千上萬顆五彩斑斕的氦氣球，帶著整棟屋子飛往南美仙境瀑布。"
  },
  {
    "id": "q_anime_1_29",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "安徒生童話《小美人魚》中，愛麗兒為了換取一雙人類雙腿走向陸地，付出的代價是？",
    "options": [
      "美妙動聽歌聲",
      "金色閃亮長髮",
      "美麗閃耀尾巴",
      "明亮清澈眼睛"
    ],
    "answerIndex": 0,
    "explanation": "愛麗兒向深海女巫烏蘇拉許願，以自己宛如天籟的美妙歌聲交換變成人類的魔藥。"
  },
  {
    "id": "q_anime_1_30",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 1,
    "question": "經典動漫《櫻桃小丸子》中，小丸子的同班同學花輪和彥平時稱呼女同學的口頭禪是？",
    "options": [
      "優雅寶貝哈囉",
      "親愛的朋友們",
      "帥氣的大小姐",
      "同班的小夥伴"
    ],
    "answerIndex": 0,
    "explanation": "花輪家境優渥富裕且彬彬有禮，招牌口頭禪是一邊撥弄瀏海一邊輕聲呼喚「Hey, Baby!」。"
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
    "id": "q_anime_2_11",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "經典動漫《灌籃高手》中，紅頭髮的主角櫻木花道所加入的高中籃球名校球隊是？",
    "options": [
      "湘北高中籃球",
      "陵南高中強隊",
      "海南大附屬隊",
      "翔陽高中名門"
    ],
    "answerIndex": 0,
    "explanation": "櫻木花道為了追求赤木晴子加入湘北高校籃球部，在安西教練指導下成為籃板球之王。"
  },
  {
    "id": "q_anime_2_12",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "經典動漫《火影忍者》中，主角漩渦鳴人肚子肚子餓時最渴望吃到的招牌平民美食是？",
    "options": [
      "一樂香濃拉麵",
      "木葉甘甜糰子",
      "宇智波烤三色",
      "自來也烤香魚"
    ],
    "answerIndex": 0,
    "explanation": "鳴人從小孤獨成長，一樂拉麵店老闆手打的溫暖拉麵是鳴人心中最溫暖美好的慰藉。"
  },
  {
    "id": "q_anime_2_13",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "日本國民熱血動漫《七龍珠》中，只要在世界上集齊幾顆龍珠便能召喚神龍實現願望？",
    "options": [
      "一共七顆龍珠",
      "一共五顆龍珠",
      "一共六顆龍珠",
      "一共八顆龍珠"
    ],
    "answerIndex": 0,
    "explanation": "傳說只要集齊散落全球的一星至七星龍珠，念出召喚咒語神龍便會現身實現願望。"
  },
  {
    "id": "q_anime_2_14",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "吉卜力動畫《霍爾的移動城堡》中，與霍爾立下契約為整座移動城堡提供動力的火惡魔是？",
    "options": [
      "淘氣卡西法火",
      "飛天波魯克豬",
      "黑貓吉吉貓咪",
      "白龍琥珀川龍"
    ],
    "answerIndex": 0,
    "explanation": "卡西法是霍爾小時候吞下的流星火惡魔，吞食柴火燃燒並操縱城堡機關在荒野移動。"
  },
  {
    "id": "q_anime_2_15",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "迪士尼動畫《美女與野獸》中，善良女主角貝兒在小鎮上最熱愛沉浸其中的休閒嗜好是？",
    "options": [
      "熱愛閱讀書籍",
      "熱愛縫紉洋裝",
      "熱愛唱歌跳舞",
      "熱愛烘焙麵包"
    ],
    "answerIndex": 0,
    "explanation": "貝兒喜愛思考且熱愛閱讀書籍冒險故事，與小鎮上其他只在乎外表的居民格格不入。"
  },
  {
    "id": "q_anime_2_16",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "皮克斯經典動畫《怪獸電力公司》中，業績蟬聯第一、藍色長毛帶紫斑的驚嚇專員是？",
    "options": [
      "毛怪蘇利文獸",
      "大眼仔麥克獸",
      "藍道變色蜥蜴",
      "羅茲水泡督導"
    ],
    "answerIndex": 0,
    "explanation": "毛怪（詹姆士・蘇利文）是怪獸電力公司的王牌驚嚇專員，與綠色獨眼大眼仔是最佳搭檔。"
  },
  {
    "id": "q_anime_2_17",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "經典童話改編《史瑞克》中，話嘮黏人又熱心腸、對史瑞克寸步不離的驢子好朋友是？",
    "options": [
      "貧嘴話嘮驢子",
      "鞋貓劍客喵咪",
      "薑餅人小脆餅",
      "皮諾丘小木偶"
    ],
    "answerIndex": 0,
    "explanation": "唐奇驢子生性樂天且極度話嘮，在泥沼中與怪物史瑞克相識後成為出生入死的忠誠兄弟。"
  },
  {
    "id": "q_anime_2_18",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "迪士尼動畫《魔髮奇緣》中，樂佩公主被囚禁在高塔中，她那一頭數公尺長的金髮具有？",
    "options": [
      "治癒傷病魔力",
      "點石成金魔力",
      "瞬間結冰魔力",
      "召喚雷電魔力"
    ],
    "answerIndex": 0,
    "explanation": "樂佩的金髮吸收了太陽之花的魔法力量，只要唱起治癒之歌，就能使傷口癒合青春永駐。"
  },
  {
    "id": "q_anime_2_19",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "日本長壽警察喜劇《烏龍派出所》中，龜有公園前派出所嗜賭如命又鬼點子特多的巡查長是？",
    "options": [
      "兩津勘吉長官",
      "中川圭一少爺",
      "秋本麗子千金",
      "大原大次所長"
    ],
    "answerIndex": 0,
    "explanation": "阿兩（兩津勘吉）具有蟑螂般的頑強生命力與驚人怪力，每次發財點子最終都以大災難收場。"
  },
  {
    "id": "q_anime_2_20",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "動漫《航海王》中，立志成為世界第一大劍豪、嘴裡咬著第三把刀的「三刀流」劍士是？",
    "options": [
      "羅羅亞索隆劍",
      "黑足香吉士廚",
      "狙擊王騙人布",
      "船醫喬巴馴鹿"
    ],
    "answerIndex": 0,
    "explanation": "索隆使用獨創的三刀流刀法（和道一文字咬在口中），誓言名聲響徹天堂成為世界第一。"
  },
  {
    "id": "q_anime_2_21",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "動漫《名偵探柯南》中，發明腳力增強鞋、變聲蝴蝶結與麻醉手錶全力資助柯南的發明家是？",
    "options": [
      "天才阿笠博士",
      "父親工藤優作",
      "黑衣琴酒殺手",
      "毛利小五郎叔"
    ],
    "answerIndex": 0,
    "explanation": "阿笠博士是工藤新一的忘年之交，為縮小後的柯南發明了眾多高科技道具協助破案追兇。"
  },
  {
    "id": "q_anime_2_22",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "吉卜力動畫《魔女宅急便》中，十三歲的小魔女琪琪出門獨立修行時，隨身陪伴的黑貓名字是？",
    "options": [
      "聰明吉吉黑貓",
      "白貓小白貓咪",
      "花貓小咪花貓",
      "波波小貓咪咪"
    ],
    "answerIndex": 0,
    "explanation": "黑貓吉吉是琪琪從小一起長大的魔法夥伴，能與琪琪心靈溝通對話，性格傲嬌又機警。"
  },
  {
    "id": "q_anime_2_23",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "迪士尼動畫《阿拉丁》中，阿拉丁在神奇寶藏洞窟中獲得、能夠載人自由翱翔天際的是？",
    "options": [
      "神奇飛行魔毯",
      "金翅飛馬坐騎",
      "機械飛鳥裝置",
      "七彩筋斗雲霧"
    ],
    "answerIndex": 0,
    "explanation": "魔毯擁有豐富的情感與靈性，雖然不會說話但動作極具默契，多次在危急中救起阿拉丁。"
  },
  {
    "id": "q_anime_2_24",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "日本長壽動漫《櫻桃小丸子》中，小丸子最深愛且總是無條件溺愛縱容小丸子的爺爺名字是？",
    "options": [
      "櫻友藏老爺爺",
      "櫻宏志小爸爸",
      "戶川班導老師",
      "濱崎同班同學"
    ],
    "answerIndex": 0,
    "explanation": "友藏爺爺每次被小丸子感動或心生感觸時，心中總會忍不住浮現充滿幽默感性的「友藏心之俳句」。"
  },
  {
    "id": "q_anime_2_25",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "動漫《蠟筆小新》中，小新在路邊撿回家的白色小捲毛狗，被小新收養命名的名字是？",
    "options": [
      "聰明小白狗狗",
      "可愛小黑狗狗",
      "活潑小花狗狗",
      "機靈小黃狗狗"
    ],
    "answerIndex": 0,
    "explanation": "小白看似普通流浪狗，實際上神智與智商極高，會自己去買蔥、收衣服甚至照顧小新。"
  },
  {
    "id": "q_anime_2_26",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "經典動畫《玩具總動員》中，牛仔胡迪靴子底下用黑色油性筆寫的名字，代表他的小主人是？",
    "options": [
      "小男孩安迪名",
      "壞男孩阿薛名",
      "玩具店老闆名",
      "幼兒園邦妮名"
    ],
    "answerIndex": 0,
    "explanation": "胡迪與巴斯光年的右腳鞋底下都寫著「ANDY」，代表他們是小主人安迪最珍視的專屬玩具。"
  },
  {
    "id": "q_anime_2_27",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "動漫《寶可夢》中，外型粉紅圓滾滾、生氣時會鼓起臉頰並拿麥克風在聽眾臉上塗鴉的是？",
    "options": [
      "歌唱家胖丁怪",
      "可愛皮皮妖精",
      "小火龍蜥蜴怪",
      "呆呆獸笨水怪"
    ],
    "answerIndex": 0,
    "explanation": "胖丁唱歌具有強效催眠催眠力量，看到大家聽牠唱歌睡著就會生氣鼓成氣球並用麥克筆畫花臉。"
  },
  {
    "id": "q_anime_2_28",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "迪士尼動畫《花木蘭》中，陪伴花木蘭代父從軍、由祖先守護石雕意外敲醒的搞怪紅色小龍是？",
    "options": [
      "紅守護龍木須",
      "蟋蟀幸運小蟲",
      "大將軍李翔官",
      "汗血寶馬黑駿"
    ],
    "answerIndex": 0,
    "explanation": "木須龍身材迷你嘴巴碎唸，一心想透過幫助木蘭立大功來重返花家祠堂守護神正神之位。"
  },
  {
    "id": "q_anime_2_29",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "動漫《鬼滅之刃》中，頭戴野豬頭套、赤裸上身手持雙鋸齒日輪刀的熱血戰士名字是？",
    "options": [
      "嘴平伊之助士",
      "我妻善逸雷劍",
      "富岡義勇水柱",
      "煉獄杏壽郎柱"
    ],
    "answerIndex": 0,
    "explanation": "伊之助由母野豬撫養長大，自創獸之呼吸，好勝心極強，口頭禪是「豬突猛進！豬突猛進！」。"
  },
  {
    "id": "q_anime_2_30",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 2,
    "question": "日本吉卜力動畫《神隱少女》中，在油屋澡堂默默陪伴千尋、戴著白色面具且能變出金子的是？",
    "options": [
      "神秘無臉男神",
      "澡堂湯婆婆巫",
      "雙胞胎錢婆婆",
      "大蘿蔔神仙客"
    ],
    "answerIndex": 0,
    "explanation": "無臉男象徵空虛與對溫暖的渴望，被千尋的純真吸引，在湯屋因吞噬欲望變怪，後被千尋淨化。"
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
    "id": "q_anime_3_11",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "動漫《進擊的巨人》中，主角艾連・葉卡為了走出三道巨大城牆探索世界，加入的兵團是？",
    "options": [
      "精英調查兵團",
      "駐紮防衛兵團",
      "憲兵王宮兵團",
      "開拓農墾兵團"
    ],
    "answerIndex": 0,
    "explanation": "調查兵團以自由之翼為徽章，專門走出城牆與巨人作戰並勘察牆外世界，傷亡率極高。"
  },
  {
    "id": "q_anime_3_12",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "動漫《咒術迴戰》中，現代最強咒術師五條悟眼罩底下隱藏的罕見稀世天賦雙眼被稱為？",
    "options": [
      "極罕見六眼瞳",
      "寫輪複製眼眸",
      "輪迴轉生之眼",
      "白眼透視瞳術"
    ],
    "answerIndex": 0,
    "explanation": "六眼（Six Eyes）數百年一遇，能精細洞察咒力流動與術式構造，完美駕馭無下限咒術。"
  },
  {
    "id": "q_anime_3_13",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "動漫《航海王》中，草帽海賊團的航海士兼財務大總管、極度喜愛橘子與金錢的少女是？",
    "options": [
      "航海士娜美醬",
      "考古學羅賓姐",
      "幽靈女佩羅娜",
      "人魚白星公主"
    ],
    "answerIndex": 0,
    "explanation": "娜美精通氣象學與航海圖繪製，憑藉天候棒操縱雷電與天氣作戰，夢想繪製全世界地圖。"
  },
  {
    "id": "q_anime_3_14",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "熱血動漫《鋼之鍊金術師》中，主角愛德華・愛力克兄弟為了尋找恢復肉體的方法，追尋的秘寶是？",
    "options": [
      "傳奇賢者之石",
      "全能真理之門",
      "所羅門之金鑰",
      "永生長生靈藥"
    ],
    "answerIndex": 0,
    "explanation": "賢者之石能無視等價交換原則進行鍊成，但其殘酷真相是由成千上萬活人靈魂血祭濃縮而成。"
  },
  {
    "id": "q_anime_3_15",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "動漫《獵人》中，主角小傑・富力士的招牌殺手鐧念能力「猜猜拳」，包含哪三種變化型？",
    "options": [
      "猜拳石頭剪布",
      "雷電火焰冰霜",
      "風雨雷電四象",
      "瞬移隱身分身"
    ],
    "answerIndex": 0,
    "explanation": "小傑將強化系（石頭拳）、變化系（剪刀手刃）與放出系（布念彈）結合為猜猜拳戰術。"
  },
  {
    "id": "q_anime_3_16",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "動漫《火影忍者》中，宇智波一族傳承的血繼限界瞳術「寫輪眼」，其最高階進化形態稱為？",
    "options": [
      "萬花筒寫輪眼",
      "白眼透視神瞳",
      "轉生眼滅世瞳",
      "紅眼夜視瞳術"
    ],
    "answerIndex": 0,
    "explanation": "寫輪眼在經歷巨大情感衝擊（如痛失至親）後會開眼進化為萬花筒寫輪眼，獲神威天照等神術。"
  },
  {
    "id": "q_anime_3_17",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "吉卜力動畫《天空之城》中，女主角希達頸部佩戴的家族遺物、能指引懸浮空中島嶼的神石是？",
    "options": [
      "藍色飛行石墜",
      "紅色賢者之石",
      "綠色翡翠晶石",
      "黃色琥珀寶珠"
    ],
    "answerIndex": 0,
    "explanation": "飛行石是拉普達古代高科技結晶，能引導持有者通往浮島拉普達並啟動天空之城毀滅中樞。"
  },
  {
    "id": "q_anime_3_18",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "動漫《鬼滅之刃》中，無限列車篇中奮戰至黎明、深受炭治郎敬仰的炎柱劍士名字是？",
    "options": [
      "煉獄杏壽郎柱",
      "富岡義勇水柱",
      "宇髓天元音柱",
      "時透無一郎柱"
    ],
    "answerIndex": 0,
    "explanation": "炎柱杏壽郎恪守母親「強者保護弱者」的訓誡，燃燒生命力戰上弦之三猗窩座保護全員。"
  },
  {
    "id": "q_anime_3_19",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "經典動漫《七龍珠》中，賽亞人王子達爾（貝吉塔）初次登場時，身邊跟隨的魁梧光頭同伴是？",
    "options": [
      "賽亞人拿帕將",
      "宇宙帝王弗力",
      "基紐隊長戰士",
      "栽培人綠怪物"
    ],
    "answerIndex": 0,
    "explanation": "拿帕與貝吉塔一同入侵地球，戰鬥力強悍但性格殘暴，最後因重傷失去利用價值被貝吉塔處死。"
  },
  {
    "id": "q_anime_3_20",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "動漫《名偵探柯南》中，神秘的黑衣組織兩大核心幹部，其中冷酷銀髮的殺手代號是？",
    "options": [
      "幹部琴酒代號",
      "手下伏特加號",
      "狙擊手香堤號",
      "臥底波本威士"
    ],
    "answerIndex": 0,
    "explanation": "琴酒（Gin）開著保時捷 356A，性格冷酷縝密，正是他餵食新一 APTX-4869 使其身體縮小。"
  },
  {
    "id": "q_anime_3_21",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "迪士尼動畫《獅子王》中，辛巴被驅逐後結識的一對好夥伴丁滿與彭彭，丁滿的動物種類是？",
    "options": [
      "沙漠狐獴小獸",
      "森林疣豬大獸",
      "非洲野狗幼犬",
      "平原跳羚幼獸"
    ],
    "answerIndex": 0,
    "explanation": "丁滿是一隻古靈精怪的狐獴（Meerkat），彭彭則是一隻心地寬厚的非洲疣豬（Warthog）。"
  },
  {
    "id": "q_anime_3_22",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "動漫《櫻桃小丸子》中，小丸子的班長丸尾末男，每次競選班長時鏡片反光的口頭禪是？",
    "options": [
      "請投我一票吧",
      "大家聽我說話",
      "請安靜坐好來",
      "我是優秀班長"
    ],
    "answerIndex": 0,
    "explanation": "丸尾對班長職位有無比狂熱的執著，口頭禪是「總而言之，請大家在班長選舉時投我神聖一票！」。"
  },
  {
    "id": "q_anime_3_23",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "動漫《蠟筆小新》中，雙葉幼稚園向日葵班的吉永老師與玫瑰班的宿敵班導師名字是？",
    "options": [
      "松坂梅子老師",
      "上尾真澄老師",
      "園長高倉文太",
      "副園長高倉太"
    ],
    "answerIndex": 0,
    "explanation": "吉永老師與松坂老師表面互相嘲諷較勁（特別是戀愛與相親），但私下彼此深具同事革命情感。"
  },
  {
    "id": "q_anime_3_24",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "迪士尼經典動畫《小飛俠》中，彼得潘居住的奇幻島嶼、那裡的孩子永遠不會長大的是？",
    "options": [
      "夢幻島永無島",
      "金銀寶藏小島",
      "亞特蘭蒂斯島",
      "骷髏懸崖海島"
    ],
    "answerIndex": 0,
    "explanation": "夢幻島（Neverland）充滿仙子、人魚與海盜，彼得潘率領失落的男孩們在此享受永恆童年。"
  },
  {
    "id": "q_anime_3_25",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "動漫《航海王》中，喬巴在被魯夫邀請上船前，在磁鼓島上傳授他醫術並視為兒子的庸醫是？",
    "options": [
      "西爾爾克庸醫",
      "古蕾娃魔女醫",
      "庫勒哈老醫生",
      "多爾頓護衛隊"
    ],
    "answerIndex": 0,
    "explanation": "西爾爾克雖然醫術拙劣但醫者仁心，在雪地中收養馴鹿喬巴並點燃染紅冬島的奇蹟櫻花粉雪。"
  },
  {
    "id": "q_anime_3_26",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "動漫《七龍珠》中，孫悟空小時候在天下第一武道會使用的伸縮自如神奇武器是？",
    "options": [
      "紅如意如意棒",
      "芭蕉大鐵鐵扇",
      "黃金神龍寶劍",
      "天神飛天魔杖"
    ],
    "answerIndex": 0,
    "explanation": "如意棒由祖父悟飯傳授給小悟空，能隨心意無限伸長，原本是連接凱里塔與天界神殿的樞紐。"
  },
  {
    "id": "q_anime_3_27",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "宮崎駿吉卜力動畫《幽靈公主》（魔法公主）中，守護整座原始森林生死循環的神祇是？",
    "options": [
      "森林山獸之神",
      "野豬神乙事主",
      "犬神莫娜白狼",
      "樹精靈木靈群"
    ],
    "answerIndex": 0,
    "explanation": "山獸神白天是鹿身鳥足的麒麟神獸，黑夜化為遮天蔽日的螢光巨人，掌管森林生靈之生死。"
  },
  {
    "id": "q_anime_3_28",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "動漫《名偵探柯南》中，怪盜基德（黑羽快斗）每次在犯案偷竊前，都會提前發出什麼？",
    "options": [
      "月光預告預告",
      "暗號威脅恐嚇",
      "魔術邀請信函",
      "撲克鬼牌卡片"
    ],
    "answerIndex": 0,
    "explanation": "怪盜基德行事優雅華麗，每次行動前必發出詩意暗號預告函通知警方與目標，展現自信。"
  },
  {
    "id": "q_anime_3_29",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "動漫《火影忍者》中，傳說中的「木葉三忍」分別是指自來也、綱手以及哪一位？",
    "options": [
      "大蛇丸蛇忍者",
      "宇智波鼬忍者",
      "旗木卡卡西忍",
      "波風湊四代火"
    ],
    "answerIndex": 0,
    "explanation": "第三代火影猿飛日斬的弟子自來也（蛤蟆仙人）、綱手（蛞蝓醫仙）與大蛇丸並稱木葉三忍。"
  },
  {
    "id": "q_anime_3_30",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 3,
    "question": "迪士尼動畫《花木蘭》中，陪伴木蘭在軍營受訓的三位性格鮮明士兵好友中，身形最魁梧的是？",
    "options": [
      "巨漢阿寧阿瑤",
      "矮個阿金士兵",
      "瘦高阿堯弓兵",
      "將軍李翔長官"
    ],
    "answerIndex": 0,
    "explanation": "阿寧（Chien-Po）體型碩大但個性慈祥溫和，愛吃且常以佛系慈悲化解隊友軍營打架衝突。"
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
    "id": "q_anime_4_11",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《新世紀福音戰士》（EVA）中，貫穿整部作品、引發人類補完計畫的神秘古代巨神是？",
    "options": [
      "始祖巨神亞當",
      "第十七使徒渚",
      "初號機暴走體",
      "朗基努斯之槍"
    ],
    "answerIndex": 0,
    "explanation": "在南極發現的第一使徒亞當（Adam）引發第二次衝擊，NERV 地下深處則釘著第二使徒莉莉絲。"
  },
  {
    "id": "q_anime_4_12",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《死亡筆記本》中，天才高中生夜神月拾獲死神筆記本後，在網絡上被世人奉為制裁者的稱號是？",
    "options": [
      "奇神奇拉奇樂",
      "正義Ｌ名偵探",
      "尼亞繼承神童",
      "魅上照檢察官"
    ],
    "answerIndex": 0,
    "explanation": "夜神月利用筆記本心臟麻痺制裁罪犯，世人以 Killer 諧音稱其為「奇拉（Kira）」。"
  },
  {
    "id": "q_anime_4_13",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《反叛的魯路修》中，魯路修・蘭佩洛基戴上面具領導黑色騎士團時所使用的化名身分是？",
    "options": [
      "假面英雄零號",
      "黑色騎士修羅",
      "樞木朱雀戰神",
      "皇帝查爾斯王"
    ],
    "answerIndex": 0,
    "explanation": "魯路修頭戴黑色圓盔面具化身「Zero」，以神機妙算帶領日本反抗布里塔尼亞神聖帝國統治。"
  },
  {
    "id": "q_anime_4_14",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《鋼之鍊金術師》中，七大罪人造人之一的「憤怒」大總統金格・布拉德雷，其擁有的特殊義眼是？",
    "options": [
      "最強最強之眼",
      "終極無敵之盾",
      "絕對穿透之矛",
      "無限再生之核"
    ],
    "answerIndex": 0,
    "explanation": "大總統左眼為最強之眼，能瞬間看穿任何物質運動軌跡與破綻，劍術神速萬夫莫敵。"
  },
  {
    "id": "q_anime_4_15",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《JOJO的奇妙冒險》第三部星塵十字軍中，大反派迪奧・布蘭度（DIO）的替身名稱是？",
    "options": [
      "世界時間替身",
      "白金之星替身",
      "隱者之紫藤蔓",
      "銀色戰車劍士"
    ],
    "answerIndex": 0,
    "explanation": "DIO 的替身名為「世界（The World）」，能暫停時間流動長達數秒，近身破壞力極其恐怖。"
  },
  {
    "id": "q_anime_4_16",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《攻殼機動隊》中，主角草薙素子全身高度義體化，她腦中連接未來龐大資訊網絡的接口稱為？",
    "options": [
      "電子腦頸部栓",
      "神經仿生晶片",
      "光學迷彩核心",
      "量子記憶硬盤"
    ],
    "answerIndex": 0,
    "explanation": "草薙素子擁有軍用頂級電子腦與鈦合金義體，頸後接栓可直接潛入網絡深海（Net Diving）。"
  },
  {
    "id": "q_anime_4_17",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《銀魂》中，主角坂田銀時在攘夷戰爭時期，因身穿白衣戰鬥勇猛被敵軍聞風喪膽稱為？",
    "options": [
      "白夜叉劍武神",
      "狂亂貴公子桂",
      "鬼兵隊高杉晉",
      "辰馬聲音隊長"
    ],
    "answerIndex": 0,
    "explanation": "銀時昔日在攘夷前線以絕頂刀法斬殺無數天人，宛如白色的惡鬼修羅，因而博得「白夜叉」威名。"
  },
  {
    "id": "q_anime_4_18",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《魔法少女小圓》中，能夠反覆穿越時間輪迴、發誓不惜一切代價拯救小圓黑髮少女是？",
    "options": [
      "曉美焰時間迴",
      "巴麻美學姐銃",
      "美樹沙耶香劍",
      "佐倉杏子長槍"
    ],
    "answerIndex": 0,
    "explanation": "曉美焰無數次倒轉時間沙漏重啟一個月輪迴，歷經心碎與絕望只為改寫小圓淪為魔女的命運。"
  },
  {
    "id": "q_anime_4_19",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《獵人》嵌合蟻篇中，實力超絕令人絕望的蟻王，其真正的名字是由母親所取的？",
    "options": [
      "蟻王梅路艾姆",
      "尼特羅會長翁",
      "貓女尼飛彼多",
      "尤匹護衛隊長"
    ],
    "answerIndex": 0,
    "explanation": "蟻王名為梅路艾姆（Meruem），意為「照亮一切的光」，在與盲女小麥對弈軍儀中領悟人性愛意。"
  },
  {
    "id": "q_anime_4_20",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《火影忍者》中，大反派宇智波帶土在面具破碎前，在曉組織中裝瘋賣傻所使用的假名是？",
    "options": [
      "代號阿飛鳶號",
      "首領培因六道",
      "小南紙片天使",
      "絕黑白合體者"
    ],
    "answerIndex": 0,
    "explanation": "帶土最初以滑稽搞笑的「阿飛（Tobi）」身份混入曉組織作為替補，實則暗中操盤月之眼計畫。"
  },
  {
    "id": "q_anime_4_21",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《航海王》頂點戰爭中，四皇「白鬍子」艾德華・紐蓋特所持有的超人系惡魔果實能力是？",
    "options": [
      "引震震動果實",
      "暗暗引力果實",
      "岩漿高熱果實",
      "閃光極速果實"
    ],
    "answerIndex": 0,
    "explanation": "震震果實能引發空氣破裂、海嘯與大地震，被海軍元帥戰國評價為「具有毀滅世界力量的能力」。"
  },
  {
    "id": "q_anime_4_22",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《進擊的巨人》中，九大巨人之一、擁有堅硬下顎與利爪能咬碎任何水晶硬質化的是？",
    "options": [
      "靈巧顎之巨人",
      "厚甲鎧之巨人",
      "百米超大巨人",
      "敏捷車力巨人"
    ],
    "answerIndex": 0,
    "explanation": "顎之巨人（Jaw Titan）體態敏捷嬌小，其強力的硬質化下顎與利爪甚至能嚼碎戰槌巨人的硬質化水晶晶體。"
  },
  {
    "id": "q_anime_4_23",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《咒術迴戰》中，夏油傑身亡後被千年前的詛咒師寄生佔據肉身，這名幕後黑手真名是？",
    "options": [
      "古代羂索詛咒",
      "宿儺詛咒之王",
      "真人變形咒靈",
      "漏瑚火焰咒靈"
    ],
    "answerIndex": 0,
    "explanation": "羂索（Kenjaku）透過大腦轉移寄生術式存活千年，策劃涉谷事變與死滅迴游，企圖使人類咒力進化。"
  },
  {
    "id": "q_anime_4_24",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《鬼滅之刃》中，十二鬼月中最強的「上弦之一」黑死牟，生前身為人類時的名字是？",
    "options": [
      "繼國巖勝武士",
      "繼國緣壹劍神",
      "獪岳雷之呼吸",
      "猗窩座拳鬥士"
    ],
    "answerIndex": 0,
    "explanation": "黑死牟生前為緣壹的雙胞胎哥哥繼國巖勝，因嫉妒緣壹的神級劍術天賦而投靠鬼舞辻無慘化身為鬼。"
  },
  {
    "id": "q_anime_4_25",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "經典動漫《烙印勇士》（Berserk）中，手持斬龍巨劍、在日蝕祭典中存活下來的黑色劍士是？",
    "options": [
      "黑劍士凱茲士",
      "鷹之團古力菲",
      "喀絲卡黑皮膚",
      "骷髏騎士亡魂"
    ],
    "answerIndex": 0,
    "explanation": "凱茲身負烙印印記，失去左臂與右眼，肩扛兩百斤斬龍黑鐵巨劍，在黑夜狂潮中永恆向命運揮劍。"
  },
  {
    "id": "q_anime_4_26",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《七龍珠》人造人篇中，特南克斯從絕望未來搭乘時光機回到過去，是為了提醒眾人防範？",
    "options": [
      "人造人十七八",
      "宇宙大王弗力",
      "魔人布歐復活",
      "賽亞人貝吉塔"
    ],
    "answerIndex": 0,
    "explanation": "未來特南克斯帶來心臟病特效藥給悟空，並警告三年後蓋洛博士研發的恐怖人造人即將毀滅世界。"
  },
  {
    "id": "q_anime_4_27",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《命運石之門》（Steins;Gate）中，自稱瘋狂科學家的男主角岡部倫太郎在實驗室的化名是？",
    "options": [
      "鳳凰院凶真名",
      "達魯超級駭客",
      "桶子橋田至兄",
      "真由理小天使"
    ],
    "answerIndex": 0,
    "explanation": "岡部倫太郎中二病全開時自稱「鳳凰院凶真」，為了拯救助手牧瀨紅莉栖與真由理跨越無數世界線。"
  },
  {
    "id": "q_anime_4_28",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《BLEACH死神》中，虛圈統治者藍染惣右介所持有的斬魄刀「鏡花水月」，其催眠能力為？",
    "options": [
      "完全催眠五感",
      "火焰焚燒萬物",
      "冰凍絕對零度",
      "劇毒穿刺殺生"
    ],
    "answerIndex": 0,
    "explanation": "鏡花水月只要對手看過一次始解瞬間，便能完全支配其視覺、聽覺、觸覺等五感，顛倒是非虛實。"
  },
  {
    "id": "q_anime_4_29",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "動漫《新世紀福音戰士》中，EVA機體背部插著一條供應巨大電力的電纜，拔掉後內部電源能維持幾分鐘？",
    "options": [
      "最多維持五分",
      "最多維持十秒",
      "最多維持半時",
      "完全無法啟動"
    ],
    "answerIndex": 0,
    "explanation": "EVA 機體在斷開臍帶電纜後，依賴內部蓄電池僅能緊急作戰 5 分鐘，時間歸零機體便會完全停擺。"
  },
  {
    "id": "q_anime_4_30",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 4,
    "question": "吉卜力動畫《風之谷》中，女主角娜烏西卡所居住的邊陲山谷，平時主要依靠何種自然力量抵禦毒孢子？",
    "options": [
      "海風淨化谷地",
      "火山高熱熔岩",
      "地底純淨甘泉",
      "巨神兵熱光束"
    ],
    "answerIndex": 0,
    "explanation": "風之谷地處海邊，常年吹拂純淨的海風驅散腐海的瘴氣與有毒孢子，使居民能在此安居樂業農耕。"
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
    "id": "q_anime_5_11",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《Fate/Zero》中，衛宮切嗣在第四次聖杯戰爭中召喚出的英靈 Saber，其真實歷史身分是？",
    "options": [
      "傳奇亞瑟騎士",
      "英雄吉爾伽美",
      "征服王亞歷山",
      "光之子庫丘林"
    ],
    "answerIndex": 0,
    "explanation": "Saber 真名為不列顛傳奇紅龍騎士王亞瑟・潘德拉剛（阿爾托莉雅），手持風王結界包覆誓約勝利之劍。"
  },
  {
    "id": "q_anime_5_12",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《涼宮春日的憂鬱》中，長門有希在動漫世界觀中的真實神秘身分是？",
    "options": [
      "資訊統合思念",
      "未來時間旅行",
      "超能力超常者",
      "外星侵略先鋒"
    ],
    "answerIndex": 0,
    "explanation": "長門有希是宇宙中超越實體存在的「資訊統合思念體」所製造之對有機生命體接觸用人型介面。"
  },
  {
    "id": "q_anime_5_13",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《JOJO的奇妙冒險》第四部中，隱匿在杜王町、只想過平靜生活的連環殺手大反派是？",
    "options": [
      "吉良吉影紳士",
      "迪奧布蘭度王",
      "迪亞波羅老闆",
      "恩里克普奇父"
    ],
    "answerIndex": 0,
    "explanation": "吉良吉影替身為「殺手皇后」，具有第一炸彈接觸爆炸、第二炸彈枯萎穿心攻擊與第三炸彈敗者食塵。"
  },
  {
    "id": "q_anime_5_14",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《新世紀福音戰士》劇場版中，碇源堂試圖融合亞當胚胎與莉莉絲引發儀式，其真實動機純粹是？",
    "options": [
      "再見亡妻碇唯",
      "成神統治全宇",
      "消滅所有人類",
      "阻止使徒侵略"
    ],
    "answerIndex": 0,
    "explanation": "源堂冷酷推動整個人類補完計畫，拋棄一切倫理與親情，內心最核心執念僅是與逝去的妻子碇唯重聚。"
  },
  {
    "id": "q_anime_5_15",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《獵人》貪婪之島遊戲通關後，小傑選擇使用卡片「同行」飛往金・富力士，結果降落遇見的是？",
    "options": [
      "凱特弟子獵人",
      "金富力士父親",
      "西索魔術怪人",
      "伊耳謎暗殺兄"
    ],
    "answerIndex": 0,
    "explanation": "金曾交代若小傑一個人來（用磁力）才見他，若帶同伴（用同行）就送到弟子凱特身邊，引出螞蟻篇。"
  },
  {
    "id": "q_anime_5_16",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《Code Geass 反叛的魯路修》最終結尾，魯路修將世界所有仇恨集中於己身並被處死的計畫稱為？",
    "options": [
      "零之鎮魂曲樂",
      "黑之宣誓儀式",
      "朱雀救世戰曲",
      "世界和平革命"
    ],
    "answerIndex": 0,
    "explanation": "「Zero Requiem（零之鎮魂曲）」讓朱雀戴上 Zero 面具當眾刺殺暴君魯路修，斬斷世界仇恨連鎖迎向未來。"
  },
  {
    "id": "q_anime_5_17",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《魔法少女小圓》中，丘比（QB）所屬的「孵化者」外星文明，搜集魔法少女絕望轉化能量是為了？",
    "options": [
      "延緩宇宙熱寂",
      "侵略征服地球",
      "自體進化成神",
      "製造超級武器"
    ],
    "answerIndex": 0,
    "explanation": "孵化者是純理性的外星集體意識，發現人類少女由希望轉化為絕望時產生的情感能量能違背熱力學第二定律阻止宇宙熱寂。"
  },
  {
    "id": "q_anime_5_18",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《鋼之鍊金術師》中，大反派「燒瓶裡的小人」（父親大人）在日蝕之日發動國土鍊成陣吞噬了？",
    "options": [
      "地球真理之神",
      "亞美斯多利斯",
      "賢者之石純晶",
      "七大原罪殘渣"
    ],
    "answerIndex": 0,
    "explanation": "父親大人在日蝕開啟地球之門將「神（真理）」硬生生拉入體內，但因器量不足終被愛德華擊潰反噬。"
  },
  {
    "id": "q_anime_5_19",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《進擊的巨人》中，艾連透過吉克接觸尤彌爾開啟「地鳴」，喚醒的三道城牆內部數萬具巨人是？",
    "options": [
      "大型超大硬質",
      "凶暴鎧之巨人",
      "無垢純潔巨人",
      "奇行種跳躍體"
    ],
    "answerIndex": 0,
    "explanation": "帕拉迪島三道城牆（瑪麗亞、羅塞、席娜）全是由初代雷斯王以數千萬具超大型純硬質化巨人排成基石建構。"
  },
  {
    "id": "q_anime_5_20",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《CLANNAD》這部被譽為人生神作的 Key 社動畫，男主角岡崎朋也最後能奇蹟逆轉命運，是因為收集了？",
    "options": [
      "無私光芒光玉",
      "七彩水晶晶片",
      "星之碎片殘骸",
      "真愛祈願誓言"
    ],
    "answerIndex": 0,
    "explanation": "小鎮傳說只要給予他人幸福就能獲得一顆祈願的光玉，朋也默默幫助無數人積累的光玉最終引發奇蹟挽救小渚與汐。"
  },
  {
    "id": "q_anime_5_21",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《銀魂》中，主角坂田銀時過去在松下村塾深受敬愛的恩師吉田松陽，其真實的不死本體身份是？",
    "options": [
      "天導眾虛長生",
      "星海坊主獵手",
      "夜王鳳仙強者",
      "天元外星戰士"
    ],
    "answerIndex": 0,
    "explanation": "吉田松陽是擁有阿爾塔納不死血脈的「虛」所分裂出的一個善良人格，歷經五百年輪迴最終悲壯落幕。"
  },
  {
    "id": "q_anime_5_22",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《咒術迴戰》中，兩面宿儺在平安時代被稱為詛咒之王，他在涉谷事變中擊潰伏黑惠召喚的魔虛羅是使用？",
    "options": [
      "開之神祕火矢",
      "無量空處領域",
      "純愛全靈重砲",
      "反轉術式正能"
    ],
    "answerIndex": 0,
    "explanation": "宿儺以斬擊（解與捌）適應魔虛羅後，低吟「■──開（Fuuga）」釋放高熱火矢將整座涉谷化為焦土徹底滅殺。"
  },
  {
    "id": "q_anime_5_23",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《天元突破紅蓮螺巖》中，螺旋族對抗的終極反派「反螺旋族（Anti-Spiral）」之所以壓制生命進化，是防範？",
    "options": [
      "螺旋死滅宇宙",
      "熱力學終熱寂",
      "黑洞吞噬時空",
      "維度空間坍縮"
    ],
    "answerIndex": 0,
    "explanation": "反螺旋族認為無限進化的螺旋力量終將產生失控引力形成巨大黑洞吞噬整個宇宙（Spiral Nemesis），故將全族封印。"
  },
  {
    "id": "q_anime_5_24",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《攻殼機動隊 S.A.C.》第一季中，引發全日本社會廣泛模仿犯罪、標誌性笑臉符號的核心人物是？",
    "options": [
      "笑面笑臉男案",
      "個別的十一人",
      "傀儡師人工智",
      "內閣情報調查"
    ],
    "answerIndex": 0,
    "explanation": "笑臉男（Laughing Man）事件借用了沙林傑小說名句，探討在資訊高度網絡化時代沒有原創者的「無原作者孤立者現象」。"
  },
  {
    "id": "q_anime_5_25",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《紫羅蘭永恆花園》中，曾是孤兒兵的女主角薇爾莉特・伊芙加登，擔任自動手記人偶是為了理解少校留下的？",
    "options": [
      "我愛你真真意",
      "活下去軍命令",
      "勇敢站立起來",
      "世界和平真理"
    ],
    "answerIndex": 0,
    "explanation": "基爾伯特少校在戰火訣別時對薇爾莉特說出「我愛妳」，沒有情感概念的少女在替人代筆寫信中體悟愛之深意。"
  },
  {
    "id": "q_anime_5_26",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《MONSTER》（怪物）中，浦澤直樹筆下如惡魔般操縱人心的大反派「約翰・李貝特」，幼年經歷人體實驗的孤兒院是？",
    "options": [
      "511幼兒孤兒",
      "彩虹之丘療養",
      "冷戰第七研究所",
      "聖約翰慈善院"
    ],
    "answerIndex": 0,
    "explanation": "東德「511幼兒之家的殘酷洗腦實驗企圖培養無情感的領導者，但約翰在其中反向煽動使全體師生自相殘殺殆盡。"
  },
  {
    "id": "q_anime_5_27",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《命運石之門》中，岡部倫太郎經歷兩次世界大戰演習，最終成功跨越世界線抵達沒有第三次世界大戰的？",
    "options": [
      "命運石之門線",
      "阿爾法世界線",
      "貝塔世界收斂",
      "伽瑪混亂線條"
    ],
    "answerIndex": 0,
    "explanation": "Steins Gate（命運石之門世界線）變動率為 1.048596%，在此世界線中紅莉栖未死且未來沒有反烏托邦與大戰。"
  },
  {
    "id": "q_anime_5_28",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《JOJO的奇妙冒險》第五部黃金之風中，喬魯諾・喬巴拿的替身「黃金體驗鎮魂曲」其無敵被動能力為？",
    "options": [
      "歸零動作意志",
      "無限暫停時間",
      "刪除十秒過程",
      "重寫空間維度"
    ],
    "answerIndex": 0,
    "explanation": "黃金體驗鎮魂曲（GER）具有將對手一切攻擊意志與行動「歸結為零」的因果逆轉力量，使迪亞波羅陷入無限死亡輪迴。"
  },
  {
    "id": "q_anime_5_29",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《四月是你的謊言》中，女主角宮園薰在生命即將走到盡頭前留給有馬公生的最後親筆書信中，揭曉的謊言是？",
    "options": [
      "喜歡渡亮太君",
      "喜歡有馬公生",
      "討厭彈小提琴",
      "自己身體健康"
    ],
    "answerIndex": 0,
    "explanation": "宮園薰在信中坦白，當年謊稱「喜歡渡亮太」只是為了能自然接近並闖入心靈封閉的公生生命中，拉他重回音樂舞台。"
  },
  {
    "id": "q_anime_5_30",
    "category": "anime",
    "categoryName": "動漫娛樂",
    "categoryIcon": "🎬",
    "difficulty": 5,
    "question": "動漫《Re:從零開始的異世界生活》中，男主角菜月昴被嫉妒魔女莎緹拉賜予的無限輪迴死亡復活詛咒被稱為？",
    "options": [
      "死亡回歸能力",
      "時間倒流權能",
      "不死再生身軀",
      "怠惰不可視手"
    ],
    "answerIndex": 0,
    "explanation": "菜月昴每次死亡後會自動在特定「存檔點」重生重來，但無法向任何人吐露此秘密，否則會遭黑手捏心警告。"
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
    "id": "q_food_1_11",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "風靡全世界的國民手搖飲品「珍珠奶茶」，最初起源誕生於哪一個美麗寶島地方？",
    "options": [
      "寶島台灣發源",
      "香港九龍茶室",
      "日本東京街頭",
      "泰國曼谷水上市"
    ],
    "answerIndex": 0,
    "explanation": "珍珠奶茶誕生於 1980 年代的台灣，將 Q 彈樹薯粉圓波霸混入香濃奶茶中，風靡世界。"
  },
  {
    "id": "q_food_1_12",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "製作傳統正宗日式握壽司時，米飯通常會加入壽司醋、砂糖與精鹽拌勻製成？",
    "options": [
      "酸香清爽醋飯",
      "甜濃黑黑糖飯",
      "濃郁鹹辣醬飯",
      "原味無味白飯"
    ],
    "answerIndex": 0,
    "explanation": "壽司醋飯（舍利）經調配後帶有微酸果香與甘味，冷卻後米粒晶瑩分明，襯托生魚片鮮度。"
  },
  {
    "id": "q_food_1_13",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "義大利經典瑪格麗特披薩（Pizza Margherita）的表面核心靈魂乳酪配料是？",
    "options": [
      "莫札瑞拉起司",
      "藍紋發酵起司",
      "切達黃黃起司",
      "瑞士大洞起司"
    ],
    "answerIndex": 0,
    "explanation": "經典瑪格麗特披薩以紅番茄醬、白莫札瑞拉起司與綠羅勒葉組成，完美呼應義大利國旗三色。"
  },
  {
    "id": "q_food_1_14",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "法國傳統長棍麵包（Baguette）在外型與口感上的最具辨識度特色通常是？",
    "options": [
      "長條金黃硬脆",
      "圓形軟軟綿綿",
      "方形黑黑扁平",
      "三角夾層厚實"
    ],
    "answerIndex": 0,
    "explanation": "法國長棍麵包依傳統法規僅由麵粉、水、酵母與鹽四種成分烤製，外皮酥脆內裡蜂巢氣孔豐富。"
  },
  {
    "id": "q_food_1_15",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "在台灣逢甲夜市或士林夜市逛街時，攤位排隊人潮極多、比臉還大的著名油炸美食是？",
    "options": [
      "香酥炸大雞排",
      "蒸煮香甜玉米",
      "深海燙大魷魚",
      "糖炒香甜栗子"
    ],
    "answerIndex": 0,
    "explanation": "超大炸雞排醃漬入味後裹上番薯粉或脆皮漿高溫油炸，外酥裡嫩多汁，為台灣夜市招牌之王。"
  },
  {
    "id": "q_food_1_16",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "中秋節民間親友相聚賞月時，傳統上必備應景、剝開呈黃白色多汁果肉的水果是？",
    "options": [
      "香甜文旦柚子",
      "脆口清甜青蘋果",
      "多汁鮮紅草莓",
      "甜熟金黃香蕉"
    ],
    "answerIndex": 0,
    "explanation": "中秋正是文旦柚成熟時節，酸甜多汁又解月餅油膩，果皮常被家中小朋友做成柚子帽戴在頭上。"
  },
  {
    "id": "q_food_1_17",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "端午節民間傳統習俗中，家家戶戶必吃用翠綠竹葉包裹糯米與豬肉蛋黃的節慶米食是？",
    "options": [
      "飄香傳統粽子",
      "圓潤元宵湯圓",
      "甜蜜雙層年糕",
      "軟Ｑ白白麻糬"
    ],
    "answerIndex": 0,
    "explanation": "端午節包粽子紀念屈原，台灣南部粽採水煮軟糯，北部粽採先炒後蒸粒粒分明，各具風味。"
  },
  {
    "id": "q_food_1_18",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "品嚐正統日式豚骨拉麵時，碗中常見切成兩半、蛋黃呈現半凝固流心狀的蛋是？",
    "options": [
      "香嫩溏心雞蛋",
      "熟透茶葉滷蛋",
      "鹹香生鹹鴨蛋",
      "硬脆炸荷包蛋"
    ],
    "answerIndex": 0,
    "explanation": "溏心蛋將雞蛋煮至六七分熟蛋白凝固蛋黃半熟，浸泡於醬油柴魚味醂滷汁中低溫熟成入味。"
  },
  {
    "id": "q_food_1_19",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "深受男女老少喜愛的香濃「巧克力」，其最原始的核心植物天然原料果實是？",
    "options": [
      "可可樹可可豆",
      "咖啡樹咖啡豆",
      "香草蘭香草莢",
      "榛果樹堅果粒"
    ],
    "answerIndex": 0,
    "explanation": "巧克力原料源自可可豆，經採收、天然發酵、日曬乾燥、烘焙研磨後提煉出可可脂與可可膏。"
  },
  {
    "id": "q_food_1_20",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "日常餐桌常吃的嫩豆腐、豆漿與醬油，最基礎核心的天然植物農作物原料是？",
    "options": [
      "優質黃豆大豆",
      "飽滿紅豆豆子",
      "清涼綠豆豆子",
      "黑色黑豆豆子"
    ],
    "answerIndex": 0,
    "explanation": "黃豆（大豆）富含植物性優質蛋白質，被譽為「田裡的肉」，加工產出豆漿、豆腐、豆皮等多樣食品。"
  },
  {
    "id": "q_food_1_21",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "台灣傳統小吃「蚵仔煎」煎製過程中，淋在鮮蚵與雞蛋蔬菜上使其呈現透明Ｑ彈外皮的是？",
    "options": [
      "地瓜粉芡水糊",
      "純白小麥麵粉",
      "玉米金黃粉漿",
      "糯米研磨米漿"
    ],
    "answerIndex": 0,
    "explanation": "地瓜粉（番薯粉）調水勾芡高溫煎烙，產生晶瑩剔透、軟糯中帶彈性的招牌口感外皮。"
  },
  {
    "id": "q_food_1_22",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "台灣傳統早餐店的經典中式絕配，除了香濃現磨熱豆漿之外，最經典的酥脆點心是？",
    "options": [
      "酥脆燒餅油條",
      "香煎法式吐司",
      "美式厚切熱狗",
      "英式司康鬆餅"
    ],
    "answerIndex": 0,
    "explanation": "現烤酥香多層次芝麻燒餅夾入現炸酥脆老油條，一口咬下喀滋作響，是數十年不敗國民早餐。"
  },
  {
    "id": "q_food_1_23",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "日式居酒屋與家庭料理中，以發酵大豆醬料加入豆腐丁與海帶芽煮成的溫暖國民湯品是？",
    "options": [
      "營養味噌熱湯",
      "清甜玉米濃湯",
      "濃郁羅宋紅湯",
      "鮮美蛤蜊清湯"
    ],
    "answerIndex": 0,
    "explanation": "味噌（Miso）由米麴與大豆發酵釀造，富含益生菌與氨基酸，熱熱的味噌湯是日餐每日靈魂。"
  },
  {
    "id": "q_food_1_24",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "夏天消暑解渴的「愛玉冰」，其洗出天然如果凍般滑嫩愛玉凍的原料採集自？",
    "options": [
      "愛玉子天然果",
      "洋菜海藻粉末",
      "吉利丁動物膠",
      "高純度蒟蒻粉"
    ],
    "answerIndex": 0,
    "explanation": "愛玉子是台灣特有桑科榕屬植物，將種子裝在布袋中置於含有礦物質的水中搓揉即凝結成凍。"
  },
  {
    "id": "q_food_1_25",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "熱門早午餐常見的「美式鬆餅（Pancake）」，剛煎好起鍋時通常會淋上什麼濃稠糖漿？",
    "options": [
      "楓糖樹楓糖漿",
      "黑糖濃縮糖水",
      "烏梅酸甜果汁",
      "冬瓜熬製糖水"
    ],
    "answerIndex": 0,
    "explanation": "採集自糖楓樹樹液熬煮濃縮的純楓糖漿（Maple Syrup），帶有獨特木質焦香，與奶油熱鬆餅最搭。"
  },
  {
    "id": "q_food_1_26",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "日式丼飯中的「親子丼（Oyako-don）」，料理名稱中所指的母子食材是指哪兩樣？",
    "options": [
      "雞肉與生雞蛋",
      "牛肉與鮮牛奶",
      "鮭魚與鮭魚卵",
      "豬肉與鮮豬肝"
    ],
    "answerIndex": 0,
    "explanation": "「親子」象徵母子相聚，丼飯中同時採用雞肉與雞蛋滑煮澆淋在白飯上，故得此溫馨名號。"
  },
  {
    "id": "q_food_1_27",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "義大利麵經典口味「白醬（White Sauce）」，其濃郁奶香的主要製作原料是？",
    "options": [
      "鮮奶油與奶油",
      "紅熟多汁番茄",
      "新鮮綠羅勒葉",
      "純黑墨魚黑汁"
    ],
    "answerIndex": 0,
    "explanation": "白醬（Alfredo 或 Béchamel）以奶油炒麵粉融合成麵糊（Roux），加入鮮奶與鮮奶油慢煮香濃。"
  },
  {
    "id": "q_food_1_28",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "台灣街頭隨處可見的國民手搖茶飲，茶葉依照發酵程度分類中，屬於「完全發酵」的是？",
    "options": [
      "甘醇全發紅茶",
      "清香不發綠茶",
      "微發香包種茶",
      "重烘焙烏龍茶"
    ],
    "answerIndex": 0,
    "explanation": "綠茶為不發酵茶（保留綠葉茶多酚），烏龍茶為半發酵茶，紅茶則是經充分萎凋揉撚完全發酵的茶。"
  },
  {
    "id": "q_food_1_29",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "日式章魚燒鐵板煎烤成圓滾滾一顆顆，裡面包裹的主角彈牙海鮮食材是？",
    "options": [
      "彈牙新鮮章魚",
      "滑嫩鮮大鮮蝦",
      "多汁鮮甜干貝",
      "酥脆炸小魚乾"
    ],
    "answerIndex": 0,
    "explanation": "章魚燒（Takoyaki）發源於大阪，麵糊中加入切塊章魚肉粒、紅薑、天婦羅酥碎烘烤翻滾金黃。"
  },
  {
    "id": "q_food_1_30",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 1,
    "question": "西方傳統下午茶經典英式司康（Scone）麵包，在英國正統吃法中必搭配的抹醬是？",
    "options": [
      "果醬與凝脂奶",
      "花生醬巧克力",
      "美乃滋沙拉醬",
      "番茄醬黑胡椒"
    ],
    "answerIndex": 0,
    "explanation": "英式奶油茶點（Cream Tea）精髓在於剛出爐熱司康抹上厚厚一層凝脂奶油（Clotted Cream）與草莓果醬。"
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
    "id": "q_food_2_11",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "台灣揚名國際的經典國民美食「牛肉麵」，在湯頭流派上最為普遍的兩大主流是？",
    "options": [
      "紅燒與清燉派",
      "麻辣與白湯派",
      "咖哩與酸辣派",
      "蕃茄與味噌派"
    ],
    "answerIndex": 0,
    "explanation": "紅燒牛肉麵湯頭以豆瓣醬、醬油與香料爆炒燉煮濃郁微辣；清燉牛肉麵則以牛骨蔬果慢熬清甜甘爽。"
  },
  {
    "id": "q_food_2_12",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "港式飲茶蒸籠點心中的「燒賣（Siu Mai）」，其頂部通常會點綴哪種鮮橘紅色食材？",
    "options": [
      "蝦卵或蟹黃泥",
      "紅甜熟蘿蔔碎",
      "鮮紅辣椒切片",
      "乾燥紅番茄丁"
    ],
    "answerIndex": 0,
    "explanation": "傳統廣式鮮蝦燒賣以黃色餛飩皮包覆豬肉蝦肉，頂端點綴橘紅蟹黃或蝦卵蒸煮，鮮香誘人。"
  },
  {
    "id": "q_food_2_13",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "泰國代表性酸辣海鮮湯「冬蔭功（Tom Yam Goong）」，湯頭酸辣開胃的核心香草植物是？",
    "options": [
      "香茅與檸檬葉",
      "迷迭香百里香",
      "九層塔薄荷葉",
      "青蔥段大蒜苗"
    ],
    "answerIndex": 0,
    "explanation": "冬蔭功融合檸檬草（香茅）、南薑、泰國青檸葉、朝天椒與魚露，酸辣鮮香直衝腦門。"
  },
  {
    "id": "q_food_2_14",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "義大利著名甜點「提拉米蘇（Tiramisu）」，其底層手指餅乾通常浸泡過什麼液體？",
    "options": [
      "濃縮咖啡甜酒",
      "鮮純現榨柳橙",
      "濃純全脂牛奶",
      "香甜焦糖奶水"
    ],
    "answerIndex": 0,
    "explanation": "手指餅乾浸泡 Espresso 義式濃縮咖啡與馬沙拉酒，層疊打發的馬斯卡彭乳酪與蛋黃，最後撒可可粉。"
  },
  {
    "id": "q_food_2_15",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "韓式烤肉包肉吃法中，除了將烤熟的三層五花肉沾醬外，最常包裹在什麼蔬菜葉中一口吃下？",
    "options": [
      "清脆生生菜葉",
      "高麗菜煮熟葉",
      "菠菜汆燙菜葉",
      "白蘿蔔醃薄片"
    ],
    "answerIndex": 0,
    "explanation": "韓式生菜包肉（Ssam）以新鮮萵苣或芝麻葉包裹熱烤肉片、大蒜片、泡菜與包飯醬（Ssamjang）。"
  },
  {
    "id": "q_food_2_16",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "台灣夜市人氣冰品「芒果冰」，除了鋪上滿滿鮮甜芒果切塊外，頂端常會加上一球什麼？",
    "options": [
      "冰涼芒果冰淇",
      "香濃紅豆蜜泥",
      "軟嫩熟布丁塊",
      "酥脆碎花生粒"
    ],
    "answerIndex": 0,
    "explanation": "芒果冰將刨冰或雪花冰鋪滿愛文芒果切塊，淋上芒果醬與煉乳，頂部再放上一球濃郁芒果冰淇淋。"
  },
  {
    "id": "q_food_2_17",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "日本傳統關東煮（Oden）湯底，通常主要是由哪兩種經典日式高湯食材慢火熬煮而成？",
    "options": [
      "柴魚片與昆布",
      "豬大骨與雞爪",
      "牛板油與洋蔥",
      "番茄與馬鈴薯"
    ],
    "answerIndex": 0,
    "explanation": "日式出汁（Dashi）以北海道乾燥昆布釋放鮮味麩胺酸，結合柴魚片肌苷酸產生加乘鮮味高湯。"
  },
  {
    "id": "q_food_2_18",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "美式漢堡中經常夾入的薄片乳酪，因遇熱容易融化且呈金黃色，最常採用的是哪種起司？",
    "options": [
      "金黃切達起司",
      "純白菲達起司",
      "發霉藍紋起司",
      "硬質帕馬森酪"
    ],
    "answerIndex": 0,
    "explanation": "切達起司（Cheddar）質地易融化，覆蓋在剛出爐高溫牛肉肉排上化為金黃起司熔岩，香濃飽滿。"
  },
  {
    "id": "q_food_2_19",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "瑞士著名高山傳統美食「起司火鍋（Fondue）」，正統吃法是用長叉子叉著什麼食材沾起司？",
    "options": [
      "烤香長棍麵包",
      "生鮮大厚切肉",
      "生脆馬鈴薯條",
      "新鮮整顆蘋果"
    ],
    "answerIndex": 0,
    "explanation": "瑞士人將格魯耶爾（Gruyère）與艾曼塔起司以白酒融化，用長叉叉取硬脆麵包塊旋轉包裹熱起司。"
  },
  {
    "id": "q_food_2_20",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "日式炸蝦天婦羅（Tempura）剛起鍋酥脆熱騰騰時，專用沾醬汁中通常會加入什麼泥？",
    "options": [
      "清涼白蘿蔔泥",
      "辛辣生生薑泥",
      "嗆辣山葵芥末",
      "細磨白大蒜泥"
    ],
    "answerIndex": 0,
    "explanation": "天婦羅沾醬（天汁）加入白蘿蔔泥能中和油炸物的油膩感，酵素有助消化解膩，口感更顯清爽。"
  },
  {
    "id": "q_food_2_21",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "台灣傳統國民便當「排骨便當」，排骨在裹粉油炸後通常還會經過什麼工序使肉質更入味？",
    "options": [
      "浸入香濃滷汁",
      "放入大蒸籠蒸",
      "塗滿甜辣烤醬",
      "撒滿大量白糖"
    ],
    "answerIndex": 0,
    "explanation": "正宗台式排骨常採「先醃、再炸、後滷」三部曲，炸後迅速過滷汁吸飽醬香，肉質軟嫩鹹甜。"
  },
  {
    "id": "q_food_2_22",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "墨西哥最具代表性的國民街頭美食塔可餅（Taco），最傳統道地的餅皮是由何種原料烘烤？",
    "options": [
      "香濃純玉米粉",
      "全麥大麵麵粉",
      "生燕麥研磨粉",
      "純白生糯米粉"
    ],
    "answerIndex": 0,
    "explanation": "傳統墨西哥 Taco 採用鹼化玉米粉（Masa）壓製烘烤成薄玉米餅，具有濃郁穀物焦香與天然嚼勁。"
  },
  {
    "id": "q_food_2_23",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "品嚐日式新鮮生魚片或壽司時，盤邊放置一小撮綠色辛辣嗆鼻的沾醬，其本體是磨碎的？",
    "options": [
      "天然綠山葵根",
      "青翠新鮮辣椒",
      "乾燥綠芥菜子",
      "新鮮菠菜菜泥"
    ],
    "answerIndex": 0,
    "explanation": "真山葵（Wasabi）根部在鯊魚皮磨泥板上研磨，釋放烯丙基異硫氰酸酯，嗆鼻辛辣但不留舌面。"
  },
  {
    "id": "q_food_2_24",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "在台灣吃火鍋時不可或缺的國民靈魂沾醬「沙茶醬」，其最早是由哪一個地區移民傳入台灣？",
    "options": [
      "廣東潮汕地區",
      "四川成都地區",
      "北京宮廷胡同",
      "江蘇揚州水鄉"
    ],
    "answerIndex": 0,
    "explanation": "沙茶醬源自潮汕移民自南洋引進的沙嗲醬（Satay），經在地化改良加入扁魚、蝦米與芝麻香料炒製。"
  },
  {
    "id": "q_food_2_25",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "法國料理中被譽為頂級美食「世界三大珍饈」中，唯一生長在地下且被稱為黑鑽石的真菌是？",
    "options": [
      "頂級珍貴松露",
      "昂貴黑魚子醬",
      "香濃極品鵝肝",
      "鮮甜法國生蠔"
    ],
    "answerIndex": 0,
    "explanation": "黑松露（Black Truffle）生長於橡樹根部地底，無法人工完全栽培，氣味深邃複雜如麝香泥土芬芳。"
  },
  {
    "id": "q_food_2_26",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "日式拉麵按湯頭風味可分為四大基本派系：豚骨拉麵、鹽味拉麵、味噌拉麵以及哪一種？",
    "options": [
      "清甜醬油拉麵",
      "濃郁咖哩拉麵",
      "辛辣麻辣拉麵",
      "番茄鮮蔬拉麵"
    ],
    "answerIndex": 0,
    "explanation": "醬油拉麵（Shoyu）是東京拉麵的原型與發源派系，以醇厚醬油調味雞骨海鮮清湯，清爽悠長。"
  },
  {
    "id": "q_food_2_27",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "台灣著名伴手禮名產「鳳梨酥」，傳統早期的美味內餡為了降低酸度並增加黏糯口感，常加入？",
    "options": [
      "香甜甜冬瓜醬",
      "新鮮熟木瓜泥",
      "多汁紅番茄醬",
      "熟軟大香蕉泥"
    ],
    "answerIndex": 0,
    "explanation": "傳統鳳梨酥內餡以冬瓜肉慢熬去水，口感細膩柔滑甜而不澀；近年興起的「土鳳梨酥」則標榜純鳳梨纖維。"
  },
  {
    "id": "q_food_2_28",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "西方葡萄酒開瓶後，經常會將酒液倒入廣口玻璃醒酒器中「醒酒」，其主要物理化學目的是？",
    "options": [
      "氧化釋放香氣",
      "降低酒精濃度",
      "加速沉澱軟木",
      "使酒色變鮮紅"
    ],
    "answerIndex": 0,
    "explanation": "醒酒（Decanting）讓緊閉的單寧接觸空氣氧化柔化，釋放複雜果香，並同時過濾老酒底部的酒石酸沉澱。"
  },
  {
    "id": "q_food_2_29",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "橄欖油中最高品質等級的「特級初榨橄欖油（Extra Virgin）」，其萃取製程採用的方式是？",
    "options": [
      "物理第一道冷",
      "高溫化學精煉",
      "溶劑浸泡萃取",
      "多次蒸餾濃縮"
    ],
    "answerIndex": 0,
    "explanation": "特級初榨橄欖油嚴禁使用任何化學溶劑或高溫加熱，僅在 27℃ 以下以機械物理第一道壓榨，酸價 < 0.8%。"
  },
  {
    "id": "q_food_2_30",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 2,
    "question": "台灣古早味冰品甜點中，呈現金黃透明且常常搭配檸檬汁冬瓜糖水飲用的是？",
    "options": [
      "清涼解渴愛玉",
      "黑亮軟Ｑ仙草",
      "白色大顆波霸",
      "綿密綠色豆沙"
    ],
    "answerIndex": 0,
    "explanation": "檸檬愛玉是台灣百年經典冰飲，天然愛玉凍吸滿檸檬清香酸度與冬瓜蜜甜，盛暑第一解熱救星。"
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
    "id": "q_food_3_11",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "台灣珍珠奶茶中的「黑珍珠粉圓」，其主要製作的澱粉原料採集自哪一種植物塊根？",
    "options": [
      "天然樹薯木薯",
      "黏糯糯米水磨",
      "馬鈴薯太白粉",
      "玉米提取澱粉"
    ],
    "answerIndex": 0,
    "explanation": "樹薯（Cassava，木薯）所提煉的樹薯澱粉黏性強且彈性高，加入黑糖蜜揉煮成波霸珍珠。"
  },
  {
    "id": "q_food_3_12",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "法國頂級料理三寶通常指鵝肝、松露以及採集自雌鱘魚未受精魚卵鹽漬熟成的什麼？",
    "options": [
      "頂級黑魚子醬",
      "鮮甜海膽生殖",
      "煙燻大西洋鮭",
      "西班牙紅大蝦"
    ],
    "answerIndex": 0,
    "explanation": "魚子醬（Caviar）以黑海、裡海野生白鱘（Beluga）等鱘魚魚卵最為名貴，入口爆漿鮮香濃郁。"
  },
  {
    "id": "q_food_3_13",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "日本傳統茶道中使用的「抹茶（Matcha）」，其茶樹在採收前數週必須進行何種特殊栽培？",
    "options": [
      "覆蓋遮光遮陽",
      "全日照大暴曬",
      "大量噴灑糖水",
      "夜間低溫冷凍"
    ],
    "answerIndex": 0,
    "explanation": "抹茶茶樹採收前約 20 天以黑網覆蓋遮光，促使葉綠素與胺基酸（茶胺酸）大量累積，減少苦澀茶多酚。"
  },
  {
    "id": "q_food_3_14",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "越南享譽全球的國民湯麵「越南河粉（Pho）」，其湯頭香氣濃郁的靈魂天然香料是？",
    "options": [
      "八角茴香草果",
      "胡椒蒜頭青蔥",
      "辣椒花椒芥末",
      "百里香迷迭香"
    ],
    "answerIndex": 0,
    "explanation": "正宗河粉牛肉高湯需以烤過的牛骨、洋蔥、生薑，結合八角、草果、肉桂、丁香慢火熬燉十餘小時。"
  },
  {
    "id": "q_food_3_15",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "義大利傳統羅馬式「培根蛋醬義大利麵（Carbonara）」，正統原始醬汁嚴格禁止加入？",
    "options": [
      "鮮奶油生牛奶",
      "新鮮雞蛋蛋黃",
      "風乾熟成豬頰",
      "佩科里諾乳酪"
    ],
    "answerIndex": 0,
    "explanation": "正統羅馬 Carbonara 僅使用生蛋黃、義大利羊奶起司（Pecorino）與風乾豬頰肉（Guanciale），絕不加鮮奶油。"
  },
  {
    "id": "q_food_3_16",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "日本著名頂級「神戶牛肉（Kobe Beef）」，在牛隻血統培育上必須屬於純種的何種和牛？",
    "options": [
      "但馬黑毛和牛",
      "安格斯黑肉牛",
      "夏洛來白肉牛",
      "海福特紅白牛"
    ],
    "answerIndex": 0,
    "explanation": "神戶牛是兵庫縣但馬牛中最嚴格品管者，BMS 油花霜降度需達 6 級以上、肉質 4 級以上方可銘印菊花商標。"
  },
  {
    "id": "q_food_3_17",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "世界三大名茶之一、生長於印度喜馬拉雅山麓並被譽為「紅茶界香檳」的名茶是？",
    "options": [
      "大吉嶺紅茶品",
      "阿薩姆紅茶品",
      "斯里蘭卡錫蘭",
      "祁門功夫紅茶"
    ],
    "answerIndex": 0,
    "explanation": "大吉嶺紅茶（Darjeeling）春摘茶帶有高雅的白葡萄與麝香葡萄果香（Muscatel），湯色金黃璀璨。"
  },
  {
    "id": "q_food_3_18",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "西班牙瓦倫西亞著名的「海鮮燉飯（Paella）」，米飯呈現誘人亮金黃色所使用的昂貴香料是？",
    "options": [
      "昂貴番紅花蕊",
      "黃金薑黃粉末",
      "咖哩香料粉末",
      "胡蘿蔔天然色素"
    ],
    "answerIndex": 0,
    "explanation": "番紅花（Saffron）採集自番紅花雌蕊柱頭，每公斤需採摘數萬朵花，為世界上單位重量最昂貴香料。"
  },
  {
    "id": "q_food_3_19",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "法式精緻甜點「馬卡龍（Macaron）」那酥脆帶光澤的外殼，核心烘焙原料主要由哪種堅果粉構成？",
    "options": [
      "優質杏仁果粉",
      "濃香花生堅果",
      "新鮮腰果碎粒",
      "濃郁榛果粉末"
    ],
    "answerIndex": 0,
    "explanation": "法式馬卡龍餅皮（Macaronage）由杏仁粉、純糖粉與打發蛋白霜烘烤而成，裙邊蕾絲精緻對稱。"
  },
  {
    "id": "q_food_3_20",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "歐洲著名的「藍紋乳酪（Blue Cheese）」，起司內部縱橫交錯的獨特藍綠色大理石紋理源自？",
    "options": [
      "青黴菌之發酵",
      "天然植物葉綠",
      "藍莓果汁沉澱",
      "銅鹽金屬氧化"
    ],
    "answerIndex": 0,
    "explanation": "洛克福（Roquefort）等藍紋起司在熟成時穿刺通風，接種無害青黴菌（Penicillium roqueforti）生長熟成。"
  },
  {
    "id": "q_food_3_21",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "白蘭地酒（Brandy）在世界酒類分類中，其本質上是以何種農作物為原料蒸餾陳釀而成的烈酒？",
    "options": [
      "釀造白葡萄果",
      "大麥麥芽穀物",
      "甘蔗蒸餾黑糖",
      "玉米大豆穀物"
    ],
    "answerIndex": 0,
    "explanation": "白蘭地通常指由葡萄釀造白葡萄酒後經兩次蒸餾，入橡木桶陳釀數年甚至數十年產出的高純度烈酒。"
  },
  {
    "id": "q_food_3_22",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "專業咖啡烘焙師常依據咖啡豆在烘焙機中的「一爆」與「二爆」來判斷焙度，這聲音物理上是？",
    "options": [
      "細胞受熱爆裂",
      "豆皮脫落燃燒",
      "瓦斯火焰爆裂",
      "機械碰撞敲打"
    ],
    "answerIndex": 0,
    "explanation": "咖啡豆內部水蒸氣與二氧化碳蓄積高壓，當達到臨界壓力時細胞壁破裂釋放氣體，發出清脆爆裂聲。"
  },
  {
    "id": "q_food_3_23",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "台灣特產烏龍茶「東方美人茶（白毫烏龍）」，其獨特熟果蜜香是因為茶芽曾受何種昆蟲叮咬？",
    "options": [
      "小綠葉蟬叮咬",
      "蜜蜂採蜜沾粉",
      "春蠶幼蟲啃咬",
      "椿象蟲分泌液"
    ],
    "answerIndex": 0,
    "explanation": "茶樹嫩芽被小綠葉蟬（蜒仔）刺吸唾液後啟動自體防禦機制，合成單萜烯等芳香醇類物質，形成蜜香。"
  },
  {
    "id": "q_food_3_24",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "品嚐現萃義式濃縮咖啡（Espresso）時，表面浮著一層綿密細緻的金黃色油脂泡沫被稱為？",
    "options": [
      "濃縮油脂泡沫",
      "牛奶綿密奶泡",
      "咖啡深色沉澱",
      "咖啡拉花花紋"
    ],
    "answerIndex": 0,
    "explanation": "Crema 是在 9 大氣壓熱水萃取下，咖啡豆烘焙產生的二氧化碳乳化咖啡油脂形成的細緻黃金泡沫冠。"
  },
  {
    "id": "q_food_3_25",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "日本頂級料理「懷石料理（Kaiseki）」，其歷史源流最初最早是起源於哪一種文化儀式前點心？",
    "options": [
      "禪門茶道儀式",
      "武士出征祭典",
      "宮廷新年盛宴",
      "神社插秧農祭"
    ],
    "answerIndex": 0,
    "explanation": "懷石原指禪僧坐禪飢寒時在懷中抱著暖石抵禦飢餓，千利休確立為茶道主客品濃茶前墊胃的雅緻清淡餐點。"
  },
  {
    "id": "q_food_3_26",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "法式澄清高湯（Consommé）呈現如琥珀般清澈透亮無雜質，在烹調時是利用什麼食材吸附浮沫？",
    "options": [
      "新鮮雞蛋白霜",
      "活性純木炭粉",
      "細密多層濾紙",
      "整塊低溫奶油"
    ],
    "answerIndex": 0,
    "explanation": "將碎絞肉、蔬菜與打發蛋白拌入生高湯慢火微沸，蛋白受熱凝固形成濾網（Raft），將懸浮雜質網羅清澈。"
  },
  {
    "id": "q_food_3_27",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "分子料理（Molecular Gastronomy）中著名的「晶球化技術」，將果汁變成爆漿珍珠的核心原理是？",
    "options": [
      "海藻酸鈉鈣浴",
      "明膠冷卻凝固",
      "寒天洋菜加熱",
      "高壓低溫急凍"
    ],
    "answerIndex": 0,
    "explanation": "海藻酸鈉溶於果汁中，滴入氯化鈣水溶液時鈣離子與海藻酸鏈交聯形成一層薄彈性膠膜，形成液體爆漿球。"
  },
  {
    "id": "q_food_3_28",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "西班牙頂級生火腿「伊比利火腿（Jamón Ibérico）」，最高 Bellota 等級的黑蹄豬必須放養食用？",
    "options": [
      "野生天然橡實",
      "優質大麥玉米",
      "全熟香甜蘋果",
      "高蛋白深海魚"
    ],
    "answerIndex": 0,
    "explanation": "最高等級 Bellota 黑豬在橡樹林（Dehesa）自由放牧，秋季增肥期吞食富含油酸的橡實，油脂如大理石入口即化。"
  },
  {
    "id": "q_food_3_29",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "牛排「乾式熟成（Dry-Aged）」將整塊頂級帶骨牛肉置於恆溫恆濕室中數十天，其肉質鮮嫩濃郁的原因是？",
    "options": [
      "自體酵素分解",
      "低溫細菌發酵",
      "水分完全泡水",
      "真空化學醃漬"
    ],
    "answerIndex": 0,
    "explanation": "牛肉自身水解酵素在低溫下緩慢分解結締組織膠原蛋白與肌肉蛋白，轉化為豐富胺基酸，風味呈堅果乾酪香。"
  },
  {
    "id": "q_food_3_30",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 3,
    "question": "日本清酒（Sake）等級標籤上標示的「精米步合」，其百分比數值越低代表被磨掉的米外層？",
    "options": [
      "磨掉外層越多",
      "保留胚芽越多",
      "釀造時間越短",
      "酒精濃度越低"
    ],
    "answerIndex": 0,
    "explanation": "精米步合指磨米後保留精米重量百分比，如「純米大吟釀」精米步合 50% 以下代表將富含蛋白質油脂的外層磨去過半。"
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
    "id": "q_food_4_11",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "義大利蒙地拿（Modena）傳統巴薩米克醋（Aceto Balsamico Tradizionale），其正統陳釀過程必須？",
    "options": [
      "木桶逐年更換",
      "埋入地底密封",
      "高溫快速烘烤",
      "添加人工焦糖"
    ],
    "answerIndex": 0,
    "explanation": "傳統巴薩米克醋將濃縮葡萄汁置於橡木、板栗、櫻桃等不同材質木桶中逐年換桶蒸發，陳釀至少 12 至 25 年以上。"
  },
  {
    "id": "q_food_4_12",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "在烘焙科學中，烤麵包表面呈現深金黃色且散發迷人焦香，是蛋白質胺基酸與還原糖在熱力下的？",
    "options": [
      "美拉德反應變",
      "焦糖化純反應",
      "酶促褐變反應",
      "澱粉凝膠老化"
    ],
    "answerIndex": 0,
    "explanation": "梅納反應（Maillard reaction）在 140~160℃ 高溫下促使羰基與胺基縮合重排，產生數百種揮發性芳香化合物與類黑素。"
  },
  {
    "id": "q_food_4_13",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "法國傳統香檳酒（Champagne）在開瓶時會持續湧出細緻氣泡，這些二氧化碳氣體是在何處天然產生的？",
    "options": [
      "密閉瓶內發酵",
      "大型不鏽鋼槽",
      "高壓直接充氣",
      "橡木桶呼吸中"
    ],
    "answerIndex": 0,
    "explanation": "香檳法（Méthode Traditionnelle）規定基酒調配後裝入玻璃酒瓶，加入糖與酵母密封，於酒窖瓶內進行二次發酵。"
  },
  {
    "id": "q_food_4_14",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "蘇格蘭單一麥芽威士忌中常有的強烈泥煤煙燻與正露丸風味（Peaty），其風味物質是在何階段引入的？",
    "options": [
      "泥煤烘乾麥芽",
      "橡木桶陳釀期",
      "天鵝頸蒸餾鍋",
      "麥汁發酵槽中"
    ],
    "answerIndex": 0,
    "explanation": "大麥發芽後，以蘇格蘭高地泥炭（Peat）為燃料點火煙燻烘乾發芽大麥，泥煤煙霧中的酚類化合物（Phenols）吸附於麥芽。"
  },
  {
    "id": "q_food_4_15",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "傳統義大利帕馬森乾酪（Parmigiano-Reggiano）表面常見細小嘎吱作響的白脆顆粒，本質上是？",
    "options": [
      "酪胺酸結晶體",
      "食用粗鹽顆粒",
      "乾燥蛋白質粉",
      "發霉青黴孢子"
    ],
    "answerIndex": 0,
    "explanation": "帕瑪森乾酪經兩年以上漫長低溫陳釀熟成，酪蛋白深度水解釋放出游離酪胺酸（Tyrosine），析出微小結晶，鮮味極濃。"
  },
  {
    "id": "q_food_4_16",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "法式頂級甜點「舒芙蕾（Soufflé）」出爐時高高蓬鬆膨起，其主要依賴打發蛋清中的什麼物理受熱膨脹？",
    "options": [
      "打入空氣熱脹",
      "發粉化學產氣",
      "小蘇打遇酸爆",
      "酵母快速發酵"
    ],
    "answerIndex": 0,
    "explanation": "蛋白霜被打入成千上萬個微小氣泡，送入烤箱烘烤時氣泡內部空氣與水蒸氣受熱劇烈膨脹，支撐麵糊垂直長高。"
  },
  {
    "id": "q_food_4_17",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "正宗墨西哥巧克力醬辣燉肉（Mole Poblano）中，其極其複雜深沉的黑褐色傳統醬汁必須加入？",
    "options": [
      "苦甜黑巧克力",
      "過期黑胡椒粉",
      "深度烘焙咖啡",
      "焦黑黑糖糖漿"
    ],
    "answerIndex": 0,
    "explanation": "墨爾醬（Mole）融合了多種乾辣椒、番茄、葡萄乾、堅果香料，並加入未精煉苦甜墨西哥巧克力，醇厚圓潤。"
  },
  {
    "id": "q_food_4_18",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "世界著名咖啡豆品種「藝伎咖啡（Geisha）」，最初源自衣索比亞小鎮，後在何國莊園發揚光大享譽全球？",
    "options": [
      "中美洲巴拿馬",
      "南美洲哥倫比",
      "東非肯亞莊園",
      "加勒比牙買加"
    ],
    "answerIndex": 0,
    "explanation": "翡翠莊園（Hacienda La Esmeralda）在巴拿馬波奎特產區意外發現藝伎樹種，其優雅如柑橘、茉莉花與伯爵茶香震撼全球。"
  },
  {
    "id": "q_food_4_19",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "在葡萄酒盲品與專業評審中，常形容頂級波爾多紅酒帶有「單寧（Tannin）」，單寧在口腔中造成的感覺是？",
    "options": [
      "收斂乾澀口感",
      "甜膩黏稠觸感",
      "酸爽生津刺激",
      "灼熱酒精辛辣"
    ],
    "answerIndex": 0,
    "explanation": "單寧源自葡萄皮、籽與橡木桶，為多酚類化合物，能凝結口腔黏膜上的唾液潤滑蛋白，產生收斂性乾澀觸感。"
  },
  {
    "id": "q_food_4_20",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "中式頂級宴席名菜「佛跳牆」，其傳統烹調工藝的核心特點在於食材處理後如何烹製？",
    "options": [
      "密封小火煨燉",
      "大火猛爆快炒",
      "低溫浸泡涼拌",
      "炭火高溫乾烤"
    ],
    "answerIndex": 0,
    "explanation": "佛跳牆將十幾種山珍海味（鮑魚、海參、花膠等）分別炸、煨、汆後裝入紹興酒罈，以荷葉泥封口文火煨燉數小時，葷香撲鼻。"
  },
  {
    "id": "q_food_4_21",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "日本傳統釀造醬油過程中，將蒸煮大豆與炒小麥混合接種米麴菌進行固態培養出的物料稱為？",
    "options": [
      "發酵成熟醬麴",
      "鹽水酵母酒醪",
      "生榨黑生醬油",
      "脫脂大豆渣餅"
    ],
    "answerIndex": 0,
    "explanation": "製麴（Koji-making）是釀造靈魂，米麴菌在溫濕受控環境下生長分泌蛋白酶與澱粉酶，是後續發酵水解基石。"
  },
  {
    "id": "q_food_4_22",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "法式經典料理「油封鴨腿（Confit de Canard）」，傳統上為了長期保存，是以何種介質低溫慢煮？",
    "options": [
      "純天然鴨脂肪",
      "初榨橄欖果油",
      "優質葵花籽油",
      "濃縮澄清黃油"
    ],
    "answerIndex": 0,
    "explanation": "Confit 為法國古老保存肉品法，鴨腿以香料粗鹽醃漬後完全浸沒於自體純鴨油中，以 85℃ 低溫慢封數小時，肉酥骨離。"
  },
  {
    "id": "q_food_4_23",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "義大利頂級松露中，被美食界推崇為身價最高、香氣最為飄逸靈動、產於皮埃蒙特阿爾巴的是？",
    "options": [
      "白松露阿爾巴",
      "黑冬松露真菌",
      "黑夏松露菇類",
      "勃艮第紅松露"
    ],
    "answerIndex": 0,
    "explanation": "白松露（Tuber magnatum）無法人工培植且採集季節極短，具有大蒜、起司與瓦斯般奇異穿透香氣，每公斤拍賣數十萬。"
  },
  {
    "id": "q_food_4_24",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "在烘焙西點蛋糕中，製作鬆軟海綿蛋糕所採用的「分蛋打發法」，在西點術語中通常被稱為？",
    "options": [
      "戚風蛋糕工法",
      "磅蛋糕攪打法",
      "重乳酪壓模法",
      "瑪德蓮拌勻法"
    ],
    "answerIndex": 0,
    "explanation": "戚風蛋糕（Chiffon）由美國人發明，將蛋黃與蛋白分開打發，以植物油取代固體奶油，質地如雪紡綢般輕柔潤滑。"
  },
  {
    "id": "q_food_4_25",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "頂級日本料理壽司師傅在捏製壽司時，手掌心必須沾抹由水與米醋調和的水液，這被稱為？",
    "options": [
      "醋手水手之水",
      "洗手消毒淨水",
      "保濕礦泉甘泉",
      "潤滑橄欖油水"
    ],
    "answerIndex": 0,
    "explanation": "醋水（酢手，Tezu）能防止醋飯澱粉黏附手掌，同時避免手部溫度過快傳遞給生魚片，兼具清潔殺菌衛生之效。"
  },
  {
    "id": "q_food_4_26",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "製作正統義大利青醬（Pesto alla Genovese）時，傳統上必須在研缽中將新鮮甜羅勒葉、大蒜與何種堅果研磨？",
    "options": [
      "香濃松子堅果",
      "乾燥核桃堅果",
      "生鮮腰果碎粒",
      "烘焙榛果碎粒"
    ],
    "answerIndex": 0,
    "explanation": "熱內亞經典青醬遵循傳統石臼手磨，加入利古里亞羅勒、海鹽、大蒜、熱那亞松子、帕馬森起司與特級初榨橄欖油。"
  },
  {
    "id": "q_food_4_27",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "在茶葉精製工藝中，台灣凍頂烏龍茶製作時將茶葉包在布巾中反覆搓壓揉捻成球狀的關鍵工序稱為？",
    "options": [
      "布包團揉工藝",
      "高溫殺青去青",
      "靜置日光萎凋",
      "乾燥烘焙收火"
    ],
    "answerIndex": 0,
    "explanation": "團揉（Tuanrou）使茶條捲曲緊結呈半球型，破壞葉肉細胞促使茶汁滲出凝結於表面，造就沖泡時耐泡醇厚之特質。"
  },
  {
    "id": "q_food_4_28",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "傳統法式長棍麵包烘烤前，麵包師傅手持極其鋒利的薄刀片在麵團表面劃出斜切口，這道工序稱為？",
    "options": [
      "割紋割痕工序",
      "排氣按壓工藝",
      "壓花造型模具",
      "撒粉防焦裝飾"
    ],
    "answerIndex": 0,
    "explanation": "割紋（Scoring/Grignes）給予麵團受熱爆裂釋放壓力的指定開口，形成標誌性美麗耳狀裂口並確保麵包充分膨脹。"
  },
  {
    "id": "q_food_4_29",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "中式傳統老麵發酵麵食時，麵團常因乳酸菌過度發酵而帶有微酸味，傳統師傅通常會加入何種物質中和酸性？",
    "options": [
      "天然食用鹼水",
      "高濃度白砂糖",
      "小蘇打發泡粉",
      "純釀造米酒水"
    ],
    "answerIndex": 0,
    "explanation": "老麵發酵累積醋酸與乳酸，加入適量食用鹼水（碳酸鈉與碳酸鉀液）酸鹼中和（對鹼），蒸出的饅頭麥香濃郁回甘。"
  },
  {
    "id": "q_food_4_30",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 4,
    "question": "日本高級懷石料理中作為壓軸主角的「鰻魚蒲燒（Kabayaki）」，關東流派在烤製前相較關西流派多了一道？",
    "options": [
      "先烤再蒸後烤",
      "大火直接乾烤",
      "高溫熱油酥炸",
      "低溫冷藏風乾"
    ],
    "answerIndex": 0,
    "explanation": "關東蒲燒鰻因江戶武士文化忌切腹而從背部剖開，烤後先放入蒸籠蒸去多餘油脂使肉質酥軟，再沾醬反覆刷烤入味。"
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
  },
  {
    "id": "q_food_5_11",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "在世界頂級魚子醬分級中，取自體型最龐大、需生長二十年以上方成熟的大白鱘魚子醬最高等級稱為？",
    "options": [
      "貝魯加鱘白鱘",
      "奧西特拉俄鱘",
      "閃光鱘西芙嘉",
      "西伯利亞鱘鱘"
    ],
    "answerIndex": 0,
    "explanation": "Beluga 鱘魚重達千斤，其魚子顆粒最大（直徑逾 3mm），色澤呈珠光灰灰黑，入口化開帶有淡雅黃油榛果香氣。"
  },
  {
    "id": "q_food_5_12",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "法國勃艮第（Burgundy）產區頂級紅葡萄酒，法規嚴格規定只能由哪一種極具風土敏感性的單一葡萄品種釀造？",
    "options": [
      "黑皮諾紅葡萄",
      "赤霞珠卡本內",
      "梅洛柔滑紅葡",
      "西拉希哈紅葡"
    ],
    "answerIndex": 0,
    "explanation": "勃艮第紅酒 100% 採用黑皮諾（Pinot Noir）釀造，果皮薄易感病，能極細緻反映土壤微氣候，芳香優雅複雜。"
  },
  {
    "id": "q_food_5_13",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "在頂級威士忌熟成中，將原本在波本桶陳年的酒液在裝瓶前最後數月轉移至雪莉桶或波特桶陳年，此技藝稱為？",
    "options": [
      "過桶換桶工藝",
      "冷凝過濾技術",
      "二次蒸餾濃縮",
      "單一桶原酒化"
    ],
    "answerIndex": 0,
    "explanation": "過桶（Wood Finish）由百富大師大衛史都華首創，使威士忌兼具波本桶香草椰香與雪莉桶深沉果乾黑巧克力層次。"
  },
  {
    "id": "q_food_5_14",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "西班牙極品伊比利生火腿在切片時，侍肉師（Cortador）堅持必須以手工極薄切片，其主要科學美食考量是？",
    "options": [
      "體溫融化脂肪",
      "保持肉片美觀",
      "避免刀具磨損",
      "方便真空包裝"
    ],
    "answerIndex": 0,
    "explanation": "手工薄如蟬翼的火腿片放在 24℃ 室溫或舌尖上時，富含不飽和脂肪酸的油脂瞬間受人體體溫融化，釋放核苷酸甘味。"
  },
  {
    "id": "q_food_5_15",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "義大利頂級傳統巴薩米克香醋在長達數十年陳釀中，木桶組合依序使用橡木、栗木、櫻桃木與何種木材帶來石楠香？",
    "options": [
      "杜松木質木桶",
      "紅木堅硬木材",
      "松木多脂木板",
      "樺木輕軟木料"
    ],
    "answerIndex": 0,
    "explanation": "典型木桶組（Batteria）由大至小更換五種木桶，杜松木（Ginepro）賦予深邃草本樹脂香，成就極致複雜滴釀。"
  },
  {
    "id": "q_food_5_16",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "日本評定最高等級「A5和牛」的肉質評等標準中，決定大理石霜降油花花紋密集度的指標簡稱為？",
    "options": [
      "霜降度ＢＭＳ",
      "精肉度ＢＣＳ",
      "肉質光澤指標",
      "肉質緊實指標"
    ],
    "answerIndex": 0,
    "explanation": "BMS（Beef Marbling Score）分為 1 至 12 級，A5 和牛的 BMS 評級必須達到 8 至 12 級的頂級大理石雪花分佈。"
  },
  {
    "id": "q_food_5_17",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "在極品法式西點中，經典千層酥（Mille-feuille）那薄如紙片的數百層千層酥皮（Puff Pastry），其層層分離的物理原理是？",
    "options": [
      "薄層奶油氣化",
      "酵母多層發酵",
      "明膠冷卻分層",
      "糖漿受熱結晶"
    ],
    "answerIndex": 0,
    "explanation": "麵團包入整塊發酵奶油經反覆三折六摺形成上千層麵皮油層，進爐高溫時奶油水分劇烈蒸發撐起麵皮酥脆空隙。"
  },
  {
    "id": "q_food_5_18",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "在世界頂級咖啡評鑑中，生豆經杯測（Cupping）分數達到美國精品咖啡協會（SCA）標準多少分以上才列為精品咖啡？",
    "options": [
      "達到八十分上",
      "達到百分滿分",
      "達到六十分上",
      "達到九十五分"
    ],
    "answerIndex": 0,
    "explanation": "SCA 評測香氣、酸質、風味、餘韻等十項指標，總分達 80 分以上方可冠以「精品咖啡（Specialty Coffee）」稱號。"
  },
  {
    "id": "q_food_5_19",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "在釀造學中，比利時正統修道院啤酒中標示「Trappist」認證的嚴格條件之一是？",
    "options": [
      "修道士自監督",
      "必須純黑麥釀",
      "完全不加酒花",
      "年產量超百萬"
    ],
    "answerIndex": 0,
    "explanation": "國際特拉普修道院協會（ITA）嚴格規定，啤酒必須在修道院圍牆內由熙篤會修道士親自釀造或監督，收益歸於慈善。"
  },
  {
    "id": "q_food_5_20",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "在可可加工科學中，黑巧克力能擁有清脆斷裂聲（Snap）且表面光亮不易融化，關鍵在於將可可脂調溫結晶為？",
    "options": [
      "穩定的第五型",
      "鬆散的第三型",
      "不穩的第一型",
      "粗大的第六型"
    ],
    "answerIndex": 0,
    "explanation": "可可脂具有六種同質異晶形態，唯有精密控溫回火（Tempering）使分子排列為熔點 34℃ 的第五型（β結晶），口感絲滑。"
  },
  {
    "id": "q_food_5_21",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "在經典雞尾酒調製中，被稱為「調酒之王」的馬丁尼（Martini），其正統傳統配方是由琴酒與何種加烈葡萄酒調合？",
    "options": [
      "乾苦艾不甜酒",
      "甜味紅苦艾酒",
      "波特酒甜加烈",
      "雪莉酒氧化酒"
    ],
    "answerIndex": 0,
    "explanation": "經典 Dry Martini 由琴酒（Gin）搭配少許不甜白苦艾酒（Dry Vermouth）於調酒杯加冰攪拌濾出，佐以綠橄欖或檸檬皮。"
  },
  {
    "id": "q_food_5_22",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "在中華廚藝傳承中，北京烤鴨掛爐烤製時使用果木作為燃料炭火，最正宗傳統選用的木材是？",
    "options": [
      "天然棗木果木",
      "松木多脂木炭",
      "樟木驅蟲木柴",
      "竹炭無煙炭火"
    ],
    "answerIndex": 0,
    "explanation": "北京全聚德等老字號掛爐烤鴨堅持使用老棗木等硬質果木慢烤，木質質地堅硬耐燒無煙，賦予鴨皮清純果木焦香。"
  },
  {
    "id": "q_food_5_23",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "在現代高階料理發酵中，黑大蒜（Black Garlic）在高溫高濕環境下熟成一個月變黑發甜，此過程的核心化學機理是？",
    "options": [
      "梅納反應美拉",
      "酵素活化氧化",
      "黑黴菌群發酵",
      "糖分直接焦化"
    ],
    "answerIndex": 0,
    "explanation": "黑蒜並非微生物發酵，是在 60~80℃、高濕條件下經過長期非酶促褐變（梅納反應），大蒜素降解轉化為多酚與果糖。"
  },
  {
    "id": "q_food_5_24",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "在頂級橄欖油品鑑中，專業品油師在啜吸剛開瓶的高品質頂級特級初榨橄欖油時，喉頭應感受到的特徵刺激是？",
    "options": [
      "辛辣與微苦味",
      "甜膩如果汁感",
      "無味如純水般",
      "濃烈油耗酸味"
    ],
    "answerIndex": 0,
    "explanation": "高品質初榨橄欖油富含橄欖多酚與刺激醛（Oleocanthal），入口帶有清新青草果香，喉部具鮮明辛辣抗炎刺激感。"
  },
  {
    "id": "q_food_5_25",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "在法式現代料理低溫烹調（Sous-Vide）舒肥技術中，食材抽真空低溫慢煮能使蛋白質軟化且多汁，其通常將溫度控制在？",
    "options": [
      "五十五至六五",
      "九十度至百度",
      "三十度至四十",
      "零下五度急凍"
    ],
    "answerIndex": 0,
    "explanation": "低溫舒肥利用精準水浴將肉品核心維持在 55℃ 至 65℃，剛好使肌纖維蛋白變性軟化，同時避免水分因高溫大量擠壓流失。"
  },
  {
    "id": "q_food_5_26",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "在威士忌世界產區中，日本威士忌之父竹鶴政孝在北海道余市創立余市蒸餾所，其當初選址余市的核心地理環境原因是？",
    "options": [
      "氣候如蘇格蘭",
      "鄰近東京港口",
      "氣候溫暖乾燥",
      "火山溫泉豐富"
    ],
    "answerIndex": 0,
    "explanation": "竹鶴政孝留學蘇格蘭後，選中北海道余市因其寒冷濕潤、海風吹拂且周邊蘊藏豐富泥炭與純淨雪山融雪軟水。"
  },
  {
    "id": "q_food_5_27",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "在法國頂級乾邑白蘭地（Cognac）產區分級中，最核心且石灰岩土壤最優質、酒體最細緻陳年潛力最強的子產區是？",
    "options": [
      "大香檳區核心",
      "小香檳區周邊",
      "邊緣區芳香地",
      "優質林區平原"
    ],
    "answerIndex": 0,
    "explanation": "大香檳區（Grande Champagne）富含白堊土，產出的生命之水（Eau-de-vie）需在利穆贊橡木桶中漫長熟成數十年方展現極致圓融。"
  },
  {
    "id": "q_food_5_28",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "在西班牙海鮮燉飯（Paella）烹飪中，鍋底那一層微焦酥脆、被視為整道料理最高精華的焦香鍋巴在西語中稱為？",
    "options": [
      "索卡拉特鍋巴",
      "塔帕斯小酒點",
      "安達魯西亞飯",
      "瓦倫西亞脆餅"
    ],
    "answerIndex": 0,
    "explanation": "Socarrat 是鍋底吸收了海鮮高湯精華、因美拉德反應形成的薄薄一層金黃焦脆米粒，香脆無比，是米飯大師的勳章。"
  },
  {
    "id": "q_food_5_29",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "在傳統中菜鮑參翅肚高檔乾貨「泡發」中，極品乾鮑（如日本吉品鮑）在砂鍋中長達數十小時慢煨後，追求的核心口感境界是？",
    "options": [
      "溏心軟糯黏齒",
      "硬脆嚼勁十足",
      "如爛泥般融化",
      "乾癟酥脆彈牙"
    ],
    "answerIndex": 0,
    "explanation": "頂級老火煨乾鮑追求「溏心」，鮑魚中心在老母雞、排骨與金華火腿高湯慢火催化下呈半凝固透明琥珀狀，濃郁黏牙。"
  },
  {
    "id": "q_food_5_30",
    "category": "food",
    "categoryName": "吃貨美食",
    "categoryIcon": "🍔",
    "difficulty": 5,
    "question": "在傳統茶道香氣分類中，大紅袍等武夷岩茶經過繁複炭火深焙後，茶湯中散發出沉穩而深邃的特有岩石礦物韻味被稱為？",
    "options": [
      "極品岩骨花香",
      "淡雅青草香氣",
      "濃郁茉莉香精",
      "純甜蔗糖蜜香"
    ],
    "answerIndex": 0,
    "explanation": "武夷岩茶產於丹霞地貌岩縫紫砂沃土，茶樹根系汲取天然礦質，經重發酵與炭焙淬鍊，展現「岩骨花香、臻山川精英秀氣」之岩韻。"
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
      if (this.historyUsedIds.size > 300) {
        const list = Array.from(this.historyUsedIds);
        this.historyUsedIds = new Set(list.slice(list.length - 200));
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

    // 基礎池：依據當前關卡主題過濾 (若為 all 則為全題庫 750 題)
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

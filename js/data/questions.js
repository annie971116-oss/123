/**
 * 常識題庫 (涵蓋生活健康、天文地理、科普常識、人文自然，分級 1~5 難度)
 */
export const QUESTIONS = [
  // ================= 難度 1：生活基礎常識 (10~20 分) =================
  {
    id: 'q1_1',
    difficulty: 1,
    question: '正確的「洗手五步驟」順序是什麼？',
    options: ['濕、搓、沖、捧、擦', '沖、濕、搓、擦、捧', '濕、沖、搓、捧、擦', '搓、濕、沖、捧、擦'],
    answerIndex: 0,
    explanation: '衛福部推廣的正確洗手五步驟為「濕、搓、沖、捧、擦」！',
  },
  {
    id: 'q1_2',
    difficulty: 1,
    question: '農曆初一與十五的月相，通常分別是什麼形狀？',
    options: ['初一為新月（朔月），十五為滿月（望月）', '初一為滿月，十五為新月', '初一為上弦月，十五為下弦月', '初一與十五皆為半圓月'],
    answerIndex: 0,
    explanation: '農曆初一月球運行至地球與太陽之間，幾乎看不見稱為新月（朔月）；十五則是圓圓的滿月（望月）。',
  },
  {
    id: 'q1_3',
    difficulty: 1,
    question: '在台灣，若發生緊急火警或需要救護車，應撥打哪一個電話？',
    options: ['119', '110', '112', '113'],
    answerIndex: 0,
    explanation: '報警請撥 110，火警及救護車請撥 119！',
  },
  {
    id: 'q1_4',
    difficulty: 1,
    question: '植物在陽光下進行「光合作用」時，主要會吸收什麼氣體並釋放氧氣？',
    options: ['二氧化碳', '一氧化碳', '氮氣', '氫氣'],
    answerIndex: 0,
    explanation: '植物葉綠體利用光能吸收二氧化碳與水分，轉換為養分並釋放氧氣。',
  },
  {
    id: 'q1_5',
    difficulty: 1,
    question: '成語「守株待兔」中，故事裡的農夫坐在樹樁旁是在等待什麼動物？',
    options: ['兔子', '松鼠', '野豬', '狐狸'],
    answerIndex: 0,
    explanation: '典故出自《韓非子》，比喻妄想不勞而獲或不知變通。',
  },
  {
    id: 'q1_6',
    difficulty: 1,
    question: '彩虹最外圈（頂端）與最內圈（底端）的顏色通常分別是？',
    options: ['外圈紅、內圈紫', '外圈紫、內圈紅', '外圈藍、內圈黃', '外圈綠、內圈橙'],
    answerIndex: 0,
    explanation: '日光經過水滴折射與反射，紅光折射角度最小位於最外圈，紫光在最內圈。',
  },
  {
    id: 'q1_7',
    difficulty: 1,
    question: '水在標準大氣壓下的沸點是攝氏幾度？',
    options: ['100 °C', '80 °C', '120 °C', '0 °C'],
    answerIndex: 0,
    explanation: '標準大氣壓下，純水的冰點為 0 °C，沸點為 100 °C。',
  },
  {
    id: 'q1_8',
    difficulty: 1,
    question: '一般健康的成年人共有幾顆恆齒（不含阻生智齒）？',
    options: ['28 顆', '24 顆', '32 顆', '36 顆'],
    answerIndex: 0,
    explanation: '人類乳牙有 20 顆，恆齒全套含 4 顆智齒為 32 顆，若不計智齒一般為 28 顆。',
  },
  {
    id: 'q1_9',
    difficulty: 1,
    question: '一年當中有 31 天的月份總共有幾個月？',
    options: ['7 個月', '6 個月', '8 個月', '5 個月'],
    answerIndex: 0,
    explanation: '1、3、5、7、8、10、12 月皆為大月，共有 7 個月有 31 天！',
  },
  {
    id: 'q1_10',
    difficulty: 1,
    question: '太陽每天早晨從哪一個方位升起？',
    options: ['東方', '西方', '南方', '北方'],
    answerIndex: 0,
    explanation: '地球自西向東自轉，因此我們看太陽是從東方升起、西方落下。',
  },

  // ================= 難度 2：基礎科普與生活常規 (30~40 分) =================
  {
    id: 'q2_1',
    difficulty: 2,
    question: '人體面積最大、重量最重的器官是什麼？',
    options: ['皮膚', '肝臟', '大腦', '肺臟'],
    answerIndex: 0,
    explanation: '人體的皮膚覆蓋全身，成年人皮膚表面積約 1.5~2 平方公尺，是人體最大的器官。',
  },
  {
    id: 'q2_2',
    difficulty: 2,
    question: '地球表面覆蓋面積最大的大洋是哪一個？',
    options: ['太平洋', '大西洋', '印度洋', '北冰洋'],
    answerIndex: 0,
    explanation: '太平洋佔地球總表面積的三分之一以上，是全球面積最大、深度最深的大洋。',
  },
  {
    id: 'q2_3',
    difficulty: 2,
    question: '下列哪一種動物屬於「哺乳類」，而不是魚類？',
    options: ['海豚', '鯊魚', '魟魚', '海馬'],
    answerIndex: 0,
    explanation: '海豚與鯨魚都是用肺呼吸、胎生且哺乳長大的哺乳動物，不是魚類。',
  },
  {
    id: 'q2_4',
    difficulty: 2,
    question: '在太陽系的八大行星中，體積最大的是哪一顆行星？',
    options: ['木星', '土星', '天王星', '海王星'],
    answerIndex: 0,
    explanation: '木星是太陽系質量與體積最大的氣體巨行星，體積大約是地球的 1300 倍。',
  },
  {
    id: 'q2_5',
    difficulty: 2,
    question: '指南針之所以能夠指示南北方向，是因為地球本身具有什麼？',
    options: ['地磁場', '萬有引力', '大氣層', '潮汐力'],
    answerIndex: 0,
    explanation: '地球外核液態鐵鎳流動產生巨大磁場，指南針磁針受地磁感應指向地磁極。',
  },
  {
    id: 'q2_6',
    difficulty: 2,
    question: '「打雷」與「看見閃電」幾乎同時發生，但我們先看到閃電才聽到雷聲，原因是什麼？',
    options: ['光速遠大於音速', '閃電形成比雷聲早', '人耳反應比眼睛慢', '空氣阻礙聲音傳播'],
    answerIndex: 0,
    explanation: '光速約為每秒 30 萬公里，而音速在空氣中僅約每秒 340 公尺，因此光線先抵達我們的眼睛。',
  },
  {
    id: 'q2_7',
    difficulty: 2,
    question: '下列何者是世界上海拔最高的山峰？',
    options: ['珠穆朗瑪峰（聖母峰）', '喬戈里峰（K2）', '干城章嘉峰', '富士山'],
    answerIndex: 0,
    explanation: '珠穆朗瑪峰海拔約 8848 公尺，位於喜馬拉雅山脈，為世界最高峰。',
  },
  {
    id: 'q2_8',
    difficulty: 2,
    question: '傳統農曆「二十四節氣」中，春季的第一個節氣是什麼？',
    options: ['立春', '雨水', '驚蟄', '春分'],
    answerIndex: 0,
    explanation: '二十四節氣以「立春」為開端，象徵春天的開始。',
  },
  {
    id: 'q2_9',
    difficulty: 2,
    question: '貓咪在從高處墜落時通常能四腳朝天翻正著地，此反射動作稱為？',
    options: ['翻正反射 (Righting reflex)', '覓食反射', '抓握反射', '角膜反射'],
    answerIndex: 0,
    explanation: '貓咪具有靈敏的前庭系統與柔軟脊椎，墜落時會依「翻正反射」迅速調整姿態四足著地。',
  },
  {
    id: 'q2_10',
    difficulty: 2,
    question: '「維生素 C」對於人體非常重要，下列哪一類食物富含最多維生素 C？',
    options: ['芭樂與柑橘類水果', '紅肉牛肉', '純白米飯', '全脂鮮奶'],
    answerIndex: 0,
    explanation: '新鮮蔬果如芭樂、奇異果、柑橘、甜椒富含豐富的維生素 C。',
  },

  // ================= 難度 3：科學推理與世界常識 (50~60 分) =================
  {
    id: 'q3_1',
    difficulty: 3,
    question: '地球大氣層中含量最高（約佔體積 78%）的氣體是什麼？',
    options: ['氮氣', '氧氣', '氬氣', '二氧化碳'],
    answerIndex: 0,
    explanation: '地球乾燥大氣中，氮氣約佔 78%，氧氣約佔 21%，氬氣約佔 0.93%。',
  },
  {
    id: 'q3_2',
    difficulty: 3,
    question: '光在真空中的傳播速度大約是每秒多少公里？',
    options: ['約 30 萬公里', '約 3 萬公里', '約 300 萬公里', '約 3,000 公里'],
    answerIndex: 0,
    explanation: '真空中的光速常數 c 約為 299,792 公里/秒，通常簡稱為每秒 30 萬公里。',
  },
  {
    id: 'q3_3',
    difficulty: 3,
    question: '「程門立雪」這句成語主要表達的是什麼美德？',
    options: ['尊師重道', '堅忍不拔', '勤奮自勉', '捨己為人'],
    answerIndex: 0,
    explanation: '楊時與游酢在積雪中恭候老師程頤醒來，後來用來形容尊敬師長、求學誠懇。',
  },
  {
    id: 'q3_4',
    difficulty: 3,
    question: '人體全身骨骼在成年後總共有多少塊？',
    options: ['206 塊', '180 塊', '230 塊', '256 塊'],
    answerIndex: 0,
    explanation: '嬰兒出生時約有 300 塊骨頭，隨著骨骼生長癒合，成年人共有 206 塊骨骼。',
  },
  {
    id: 'q3_5',
    difficulty: 3,
    question: '企鵝主要生活在地球的哪一個極區周邊？',
    options: ['南極地區', '北極地區', '格陵蘭島中心', '冰島'],
    answerIndex: 0,
    explanation: '野生企鵝幾乎全部分佈在南半球（尤其是南極洲周邊海洋），北極沒有野生企鵝。',
  },
  {
    id: 'q3_6',
    difficulty: 3,
    question: '聲音在下列哪一種介質中的傳播速度最快？',
    options: ['固體（如鋼鐵）', '液體（如水）', '氣體（如空氣）', '真空（沒有介質）'],
    answerIndex: 0,
    explanation: '聲音是機械波，介質分子排列越緊密傳播越快：固體 > 液體 > 氣體，真空無法傳播。',
  },
  {
    id: 'q3_7',
    difficulty: 3,
    question: '古希臘學者阿基米德洗澡時發現物體排開液體重量的原理，此原理稱為？',
    options: ['浮力原理', '槓桿原理', '慣性定律', '萬有引力'],
    answerIndex: 0,
    explanation: '阿基米德浮力原理指出：浸在液體中的物體受到向上的浮力，等於其排開液體的重量。',
  },
  {
    id: 'q3_8',
    difficulty: 3,
    question: '人體主要負責輸送氧氣至全身各組織的血球細胞是？',
    options: ['紅血球', '白血球', '血小板', '淋巴球'],
    answerIndex: 0,
    explanation: '紅血球富含血紅素，能與氧氣結合並將其運送至全身各細胞。',
  },
  {
    id: 'q3_9',
    difficulty: 3,
    question: '地球上潮汐現象（漲潮與退潮）最主要受到哪一個天體的引力影響？',
    options: ['月球', '太陽', '火星', '金星'],
    answerIndex: 0,
    explanation: '雖然太陽質量巨大，但月球距離地球非常近，其潮汐引力對地球海水影響約為太陽的 2.2 倍。',
  },
  {
    id: 'q3_10',
    difficulty: 3,
    question: '世界上最長的山脈是位於南美洲的哪一條山脈？',
    options: ['安地斯山脈', '洛磯山脈', '阿爾卑斯山脈', '喜馬拉雅山脈'],
    answerIndex: 0,
    explanation: '安地斯山脈全長超過 7,000 公里，是世界上陸地上最長的山脈。',
  },

  // ================= 難度 4：深度自然科學與文史 (70~80 分) =================
  {
    id: 'q4_1',
    difficulty: 4,
    question: '大氣層垂直分層中，厚度最薄但集中了所有天氣現象（風雨雷電）的是哪一層？',
    options: ['對流層', '平流層', '中氣層', '熱氣層'],
    answerIndex: 0,
    explanation: '對流層從地表向上延伸約 10~12 公里，擁有大氣 75% 質量與幾乎所有水氣，天氣現象皆在此發生。',
  },
  {
    id: 'q4_2',
    difficulty: 4,
    question: 'DNA 雙螺旋結構模型最早是在 1953 年由哪兩位科學家共同提出？',
    options: ['華生與克里克 (Watson & Crick)', '牛頓與萊布尼茲', '達爾文與孟德爾', '居禮夫人與愛因斯坦'],
    answerIndex: 0,
    explanation: '華生（James Watson）與克里克（Francis Crick）在 1953 年發表了 DNA 雙螺旋模型，開啟現代分子生物學。',
  },
  {
    id: 'q4_3',
    difficulty: 4,
    question: '在化學元素週期表中，常溫常壓下唯一呈現「液態」的金屬元素是？',
    options: ['汞（水銀）', '鎵', '溴', '銫'],
    answerIndex: 0,
    explanation: '汞（Hg）是常溫下唯一的液態金屬；溴（Br）也是液態但屬於非金屬元素。',
  },
  {
    id: 'q4_4',
    difficulty: 4,
    question: '地球自轉軸相對於公轉軌道面垂直線傾斜的角度大約是多少度？',
    options: ['約 23.5 度', '約 15.2 度', '約 30.0 度', '約 45.0 度'],
    answerIndex: 0,
    explanation: '地球自轉軸傾斜約 23.5 度（黃赤交角），也是地球產生一年四季變化的根本原因。',
  },
  {
    id: 'q4_5',
    difficulty: 4,
    question: '著名的「萬里長城」西起甘肅嘉峪關，東至河北的哪一個重要關隘？',
    options: ['山海關', '玉門關', '居庸關', '娘子關'],
    answerIndex: 0,
    explanation: '明長城東起河北山海關、西達甘肅嘉峪關，被譽為「天下第一關」。',
  },
  {
    id: 'q4_6',
    difficulty: 4,
    question: '狗狗嗅覺極其靈敏，其嗅黏膜上的嗅覺受體細胞數量大約是人類的幾倍？',
    options: ['約 40 ~ 50 倍', '約 2 ~ 3 倍', '約 10 倍', '約 1000 倍'],
    answerIndex: 0,
    explanation: '人類嗅黏膜約有 500 萬個受體，而犬類擁有約 2 億至 3 億個受體，約為人類的 40 至 50 倍以上。',
  },
  {
    id: 'q4_7',
    difficulty: 4,
    question: '下列何者為全球目前已知的世界七大洲中，平均海拔最低的大洲？',
    options: ['歐洲', '大洋洲', '亞洲', '非洲'],
    answerIndex: 0,
    explanation: '歐洲大部分為平原，平均海拔僅約 300 公尺，是全球平均海拔最低的大洲。',
  },
  {
    id: 'q4_8',
    difficulty: 4,
    question: '人體心臟內部共有幾個主要心室與心房腔室？',
    options: ['四個（左心房、左心室、右心房、右心室）', '兩個（左心室、右心室）', '三個（兩房一室）', '六個'],
    answerIndex: 0,
    explanation: '哺乳動物的心臟結構完整分為四個腔室：左心房、左心室、右心房與右心室。',
  },

  // ================= 難度 5：高階常識與反奪防守挑戰 (90~100 分) =================
  {
    id: 'q5_1',
    difficulty: 5,
    question: '「一光年」是指光在真空中前行一年的距離，大約相當於多少公里？',
    options: ['約 9.46 兆公里', '約 1.5 億公里', '約 300 億公里', '約 1 兆公里'],
    answerIndex: 0,
    explanation: '光速約 30 萬公里/秒，乘上一年的秒數（約 3153.6 萬秒），約等於 9.46 兆公里。',
  },
  {
    id: 'q5_2',
    difficulty: 5,
    question: '現存陸地上體積與體重最大的動物「非洲草原象」，其懷孕期大約長達幾個月？',
    options: ['約 22 個月', '約 12 個月', '約 9 個月', '約 36 個月'],
    answerIndex: 0,
    explanation: '非洲象的懷孕期約為 22 個月（將近兩年），是現存所有陸生哺乳動物中最長的！',
  },
  {
    id: 'q5_3',
    difficulty: 5,
    question: '大氣臭氧層（Ozone layer）主要集中在地球大氣的哪一層，保護地表免受紫外線過量照射？',
    options: ['平流層 (Stratosphere)', '對流層', '熱氣層', '散逸層'],
    answerIndex: 0,
    explanation: '臭氧層大約分佈在平流層高度 20~30 公里處，能吸收 97%~99% 的中短波紫外線。',
  },
  {
    id: 'q5_4',
    difficulty: 5,
    question: '著名的「斐波那契數列」（1, 1, 2, 3, 5, 8, 13...）相鄰兩項之比值極限接近於哪個數學常數？',
    options: ['黃金比例（約 1.618）', '圓周率（約 3.14159）', '自然對數底 e（約 2.718）', '根號二（約 1.414）'],
    answerIndex: 0,
    explanation: '費氏數列後項除以前項的極限即為黃金分割比 Φ = (1 + √5)/2 ≈ 1.6180339887...。',
  },
  {
    id: 'q5_5',
    difficulty: 5,
    question: '世界上最深的海溝是馬里亞納海溝，其最深處「挑戰者深淵」大約深達多少公尺？',
    options: ['約 11,000 公尺', '約 6,500 公尺', '約 8,848 公尺', '約 18,000 公尺'],
    answerIndex: 0,
    explanation: '馬里亞納海溝最深處約 10,984~11,034 公尺，足以將整個珠穆朗瑪峰淹沒並留有超過兩千公尺海水。',
  },
  {
    id: 'q5_6',
    difficulty: 5,
    question: '貓咪喉嚨發出的「呼嚕聲」（Purr），主要藉由哪裡的肌肉震動產生？',
    options: ['喉部肌肉與聲帶控制聲門快速開合', '胸腔橫膈膜強烈抽搐', '舌根與軟顎摩擦', '胃部蠕動共鳴'],
    answerIndex: 0,
    explanation: '貓咪在放鬆或自癒時，大腦發送信號促使喉肌以每秒 25~150 次快速顫動聲帶開合聲門形成呼嚕聲。',
  },
  {
    id: 'q5_7',
    difficulty: 5,
    question: '「絕對零度」在熱力學溫標中定義為 0 K，換算為攝氏溫標等於多少度？',
    options: ['-273.15 °C', '-200.00 °C', '-100.00 °C', '-373.15 °C'],
    answerIndex: 0,
    explanation: '絕對零度是粒子動能達到量子力學最低點的理論極限，精確值為攝氏 -273.15 度。',
  },
];

/**
 * 依據難度獲取題庫題目（若該難度題目用完，向下或向上 fallback）
 */
export function getQuestionByDifficulty(targetDiff, usedIds = new Set()) {
  const diff = Math.max(1, Math.min(5, targetDiff));

  // 1. 優先挑選指定難度且尚未回答過之題目
  let candidates = QUESTIONS.filter((q) => q.difficulty === diff && !usedIds.has(q.id));

  // 2. 若指定難度已全部用完，則放寬至所有未使用的題目
  if (candidates.length === 0) {
    candidates = QUESTIONS.filter((q) => !usedIds.has(q.id));
  }

  // 3. 若所有題目皆已使用，重新從該難度隨機挑選
  if (candidates.length === 0) {
    candidates = QUESTIONS.filter((q) => q.difficulty === diff);
  }

  if (candidates.length === 0) {
    candidates = QUESTIONS;
  }

  const selected = candidates[Math.floor(Math.random() * candidates.length)];
  return selected;
}

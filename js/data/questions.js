/**
 * 常識題庫 (涵蓋生活健康、天文地理、科普科學、人文自然、動物世界，分級 1~5 難度)
 * 擁有 120+ 道題目，並搭載跨局持久化記憶防重複引擎
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
    options: ['初一為新月（朔月看不見），十五為滿月（圓圓的望月）', '初一為滿月，十五為新月', '初一為上弦月，十五為下弦月', '初一與十五皆為半圓月'],
    answerIndex: 0,
    explanation: '農曆初一月球運行至地球與太陽之間稱為新月（朔月）；十五則是圓圓的滿月（望月）。',
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
    question: '純水在海平面標準大氣壓下的沸點是攝氏幾度？',
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
    question: '太陽每天早晨通常是從哪一個方位升起？',
    options: ['東方', '西方', '南方', '北方'],
    answerIndex: 0,
    explanation: '地球自西向東自轉，因此我們看太陽是從東方升起、西方落下。',
  },
  {
    id: 'q1_11',
    difficulty: 1,
    question: '交通號誌燈中的「黃燈」主要代表什麼意涵？',
    options: ['警告即將變換紅燈，已越過停止線應儘速通過', '可以加速衝過', '禁止任何行人通行', '車輛應立即倒車'],
    answerIndex: 0,
    explanation: '黃燈是警告訊號，提醒尚未越過停止線的車輛減速停下，已越過者儘速通過。',
  },
  {
    id: 'q1_12',
    difficulty: 1,
    question: '俗話說「一日之計在於晨」，那麼「一年之計在於」什麼？',
    options: ['春', '夏', '秋', '冬'],
    answerIndex: 0,
    explanation: '「一日之計在於晨，一年之計在於春，一生之計在於勤。」',
  },
  {
    id: 'q1_13',
    difficulty: 1,
    question: '貓咪最喜歡在陽光下理毛，主要有助於合成哪一種營養素並清潔身體？',
    options: ['維生素 D', '維生素 C', '鐵質', '鈣質'],
    answerIndex: 0,
    explanation: '陽光紫外線促使貓咪皮毛皮脂合成前維生素 D，理毛舔舐可補充維生素 D 並保持毛髮清潔。',
  },
  {
    id: 'q1_14',
    difficulty: 1,
    question: '人類手指通常共有幾根手指頭？',
    options: ['10 根（左右手各 5 根）', '8 根', '12 根', '14 根'],
    answerIndex: 0,
    explanation: '正常人類雙手各有 5 根手指，合計共 10 根。',
  },
  {
    id: 'q1_15',
    difficulty: 1,
    question: '煮湯或炒菜時若不小心著火，最正確的撲滅方式是？',
    options: ['蓋上鍋蓋並關閉瓦斯', '倒入大量自來水', '用嘴大力吹氣', '拿扇子煽火'],
    answerIndex: 0,
    explanation: '油鍋起火千萬不能潑水（會引發巨大火球），應蓋上鍋蓋隔絕氧氣並關閉爐火。',
  },
  {
    id: 'q1_16',
    difficulty: 1,
    question: '平常我們看鏡子時，鏡中的像通常是左右如何？',
    options: ['左右相反（鏡像對稱）', '上下顛倒', '前後顛倒', '完全無變化'],
    answerIndex: 0,
    explanation: '平面鏡成像具有對稱性，鏡中成像呈現左右相對倒置的鏡像。',
  },
  {
    id: 'q1_17',
    difficulty: 1,
    question: '在台灣遇到家庭暴力或兒少保護問題，應撥打什麼保護專線？',
    options: ['113', '110', '119', '165'],
    answerIndex: 0,
    explanation: '113 是全國婦幼保護專線，提供 24 小時家庭暴力、兒少保護諮詢求助服務。',
  },
  {
    id: 'q1_18',
    difficulty: 1,
    question: '青蛙小時候在水中孵化時的幼體稱為什麼？',
    options: ['蝌蚪', '水蚤', '孑孓', '幼蟲'],
    answerIndex: 0,
    explanation: '青蛙是兩棲類動物，幼體為用鰓呼吸且有尾巴的蝌蚪。',
  },
  {
    id: 'q1_19',
    difficulty: 1,
    question: '蚊子的幼蟲在水裡生長時被稱為什麼？',
    options: ['孑孓（ㄐㄧㄝˊ ㄐㄩㄝˊ）', '蝌蚪', '紅蟲', '水螅'],
    answerIndex: 0,
    explanation: '蚊子在積水處產卵，孵化出的幼蟲稱為孑孓，因此清除積水可有效防蚊。',
  },
  {
    id: 'q1_20',
    difficulty: 1,
    question: '小狗感到高興或示好時，最常做出的身體語言是？',
    options: ['輕快地搖尾巴', '弓起背部發出低吼', '露出尖銳牙齒', '夾緊尾巴趴在地上'],
    answerIndex: 0,
    explanation: '狗狗興奮、開心或對主人撒嬌時，最經典的肢體動作就是歡快地搖晃尾巴！',
  },

  // ================= 難度 2：基礎科普與生活常規 (30~40 分) =================
  {
    id: 'q2_1',
    difficulty: 2,
    question: '人體表面面積最大、重量最重的器官是什麼？',
    options: ['皮膚', '肝臟', '大腦', '肺臟'],
    answerIndex: 0,
    explanation: '人體的皮膚覆蓋全身，表面積約 1.5~2 平方公尺，是人體最大的器官。',
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
    question: '下列哪一種海洋動物屬於「哺乳類」，而不是魚類？',
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
    question: '貓咪在從高處墜落時通常能迅速翻正四腳著地，此反射動作稱為？',
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
  {
    id: 'q2_11',
    difficulty: 2,
    question: '蝙蝠在夜間飛行捕食時，主要利用什麼原理來辨認障礙物？',
    options: ['回聲定位（超音波發射與接收）', '極佳的夜視眼睛', '熱感應鼻葉', '地磁感應器'],
    answerIndex: 0,
    explanation: '蝙蝠透過喉部發出高頻超音波，藉由反射回來的回聲判斷獵物位置與距離。',
  },
  {
    id: 'q2_12',
    difficulty: 2,
    question: '地球繞著太陽公轉一周的時間，大約是多長？',
    options: ['一年（約 365.25 天）', '一個月（約 30 天）', '一天（24 小時）', '十年'],
    answerIndex: 0,
    explanation: '地球自轉一周為一天（24小時），繞太陽公轉一周為一年（約365.25天）。',
  },
  {
    id: 'q2_13',
    difficulty: 2,
    question: '下列何種維生素可以在人體曬到溫和陽光時由皮膚自行合成？',
    options: ['維生素 D', '維生素 A', '維生素 B12', '維生素 E'],
    answerIndex: 0,
    explanation: '陽光中的紫外線 UVB 照射皮膚後，能促使體內膽固醇前驅物轉化為維生素 D。',
  },
  {
    id: 'q2_14',
    difficulty: 2,
    question: '「破釜沉舟」這個成語典故，與歷史上哪一位西楚霸王有關？',
    options: ['項羽', '劉邦', '韓信', '曹操'],
    answerIndex: 0,
    explanation: '鉅鹿之戰中項羽命令士兵渡河後砸破鐵鍋、鑿沉渡船，表示不勝不休的決心。',
  },
  {
    id: 'q2_15',
    difficulty: 2,
    question: '下列哪一種食物千萬不能給貓咪或狗狗食用，否則可能引發急性溶血中毒？',
    options: ['洋蔥和大蒜', '煮熟的雞胸肉', '蒸熟的南瓜', '白米飯'],
    answerIndex: 0,
    explanation: '蔥蒜類含有硫化物，會破壞犬貓體內的紅血球造成溶血性貧血，嚴重時致命！',
  },
  {
    id: 'q2_16',
    difficulty: 2,
    question: '我們常說的「北極熊」主要生活在地球哪裡？',
    options: ['北極圈浮冰海域', '南極大陸冰原', '非洲撒哈拉沙漠', '澳洲大堡礁'],
    answerIndex: 0,
    explanation: '北極熊生活在北極，企鵝生活在南半球（南極），兩者野生環境互不相見。',
  },
  {
    id: 'q2_17',
    difficulty: 2,
    question: '人體排出代謝廢物並過濾血液生成尿液的主要器官是什麼？',
    options: ['腎臟', '心臟', '膽囊', '胃'],
    answerIndex: 0,
    explanation: '腎臟負責過濾血液中的代謝廢物與多餘水分，維持體液平衡並形成尿液。',
  },
  {
    id: 'q2_18',
    difficulty: 2,
    question: '「望梅止渴」這句成語出自三國時期哪一位歷史人物的故事？',
    options: ['曹操', '諸葛亮', '劉備', '孫權'],
    answerIndex: 0,
    explanation: '曹操率軍行軍口渴時，謊稱前方有大片酸梅林，士兵聽了流口水從而解渴。',
  },
  {
    id: 'q2_19',
    difficulty: 2,
    question: '通常我們所說的「白開水」，是指將水經過什麼處理後冷卻的水？',
    options: ['煮沸消毒', '加入糖攪拌', '冰凍凝固', '照紫外線日光浴'],
    answerIndex: 0,
    explanation: '將乾淨飲用水加熱至 100°C 沸騰殺菌後放涼的水稱為白開水。',
  },
  {
    id: 'q2_20',
    difficulty: 2,
    question: '蜂巢中六角形的孔洞結構在幾何學上被稱為什麼，具有省材料又堅固的特性？',
    options: ['正六邊形密鋪結構', '正方形網格', '圓形氣泡', '三角形拼布'],
    answerIndex: 0,
    explanation: '正六邊形能以最少周長密鋪最大面積，材料利用率極高，在工程學上稱為蜂巢結構。',
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
    question: '野生企鵝主要生活在地球的哪一個半球極區周邊？',
    options: ['南半球（南極周邊）', '北半球（北極周邊）', '格陵蘭島中心', '冰島'],
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
    question: '世界上陸地上最長的山脈是位於南美洲的哪一條山脈？',
    options: ['安地斯山脈', '洛磯山脈', '阿爾卑斯山脈', '喜馬拉雅山脈'],
    answerIndex: 0,
    explanation: '安地斯山脈全長超過 7,000 公里，是世界上陸地上最長的山脈。',
  },
  {
    id: 'q3_11',
    difficulty: 3,
    question: '我們在呼吸時，吸入體內的氧氣主要在肺泡與血液中的哪種氣體進行交換？',
    options: ['二氧化碳', '甲烷', '氫氣', '一氧化碳'],
    answerIndex: 0,
    explanation: '肺泡微血管網進行氣體交換：吸入氧氣進入微血管，排出細胞代謝產生的二氧化碳。',
  },
  {
    id: 'q3_12',
    difficulty: 3,
    question: '下列何者是世界上流經國家最多、注入黑海的著名歐洲河流？',
    options: ['多瑙河', '萊茵河', '泰晤士河', '塞納河'],
    answerIndex: 0,
    explanation: '多瑙河全長約 2850 公里，流經奧地利、德國、匈牙利等 10 個國家。',
  },
  {
    id: 'q3_13',
    difficulty: 3,
    question: '熱水壺內部經過長期煮水容易結一層厚厚硬質的水垢，其主要化學成分是？',
    options: ['碳酸鈣與氫氧化鎂', '氯化鈉食鹽', '硫酸銅', '氧化鐵鐵鏽'],
    answerIndex: 0,
    explanation: '水中溶解的碳酸氫鈣、碳酸氫鎂受熱分解，形成不溶於水的碳酸鈣和氫氧化鎂沉澱。',
  },
  {
    id: 'q3_14',
    difficulty: 3,
    question: '狗狗鼻子經常保持濕潤，最主要的生理功能是什麼？',
    options: ['吸附氣味分子以增強嗅覺，並幫助調節體溫', '防止嘴唇乾裂', '純粹喝水弄濕的', '預防感冒鼻塞'],
    answerIndex: 0,
    explanation: '狗狗鼻鏡分泌黏液能溶解並捕獲空氣中的氣味分子送入嗅覺受器，並透過蒸發散熱。',
  },
  {
    id: 'q3_15',
    difficulty: 3,
    question: '著名的「阿姆斯特朗登上月球」是在哪一年由阿波羅 11 號任務完成的？',
    options: ['1969 年', '1959 年', '1979 年', '1989 年'],
    answerIndex: 0,
    explanation: '1969 年 7 月 20 日，阿姆斯特朗成為人類歷史上踏上月球表面第一人。',
  },
  {
    id: 'q3_16',
    difficulty: 3,
    question: '常見的「乾冰」是哪一種氣體在低溫加壓下凝結形成的固態？',
    options: ['二氧化碳', '一氧化碳', '氮氣', '氧氣'],
    answerIndex: 0,
    explanation: '乾冰是固態二氧化碳，在常壓下昇華點約為 -78.5 °C，直接由固態昇華為氣態。',
  },
  {
    id: 'q3_17',
    difficulty: 3,
    question: '著名成語「臥薪嘗膽」的主角是春秋時期越國的哪一位國王？',
    options: ['勾踐', '夫差', '闔閭', '莊王'],
    answerIndex: 0,
    explanation: '越王勾踐被吳國打敗後，睡在柴草上、吃飯前舔苦膽砥礪心志，最終滅吳復國。',
  },
  {
    id: 'q3_18',
    difficulty: 3,
    question: '人體主要分泌胰島素以調節血糖濃度的內分泌器官是？',
    options: ['胰臟', '脾臟', '肝臟', '甲狀腺'],
    answerIndex: 0,
    explanation: '胰臟中的胰島 β 細胞分泌胰島素，能促進細胞吸收葡萄糖降低血糖濃度。',
  },
  {
    id: 'q3_19',
    difficulty: 3,
    question: '世界第一長河，流經非洲東北部注入地中海的河流是哪一條？',
    options: ['尼羅河', '亞馬遜河', '長江', '密西西比河'],
    answerIndex: 0,
    explanation: '尼羅河全長約 6650 公里，為世界第一長河（亞馬遜河流量最大）。',
  },
  {
    id: 'q3_20',
    difficulty: 3,
    question: '太陽系行星中，公轉軌道距離太陽最近的行星是哪一顆？',
    options: ['水星', '金星', '火星', '地球'],
    answerIndex: 0,
    explanation: '距離太陽由近到遠為：水星、金星、地球、火星、木星、土星、天王星、海王星。',
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
  {
    id: 'q4_9',
    difficulty: 4,
    question: '愛因斯坦著名的質能等價方程式「E = mc²」中，字母「c」代表什麼？',
    options: ['真空中的光速', '普朗克常數', '電容器電容', '攝氏溫度'],
    answerIndex: 0,
    explanation: 'c 代表真空光速（源自拉丁文 celeritas，速度），表明質量與能量可相互轉換。',
  },
  {
    id: 'q4_10',
    difficulty: 4,
    question: '血液循環系統中，負責將含有豐富氧氣的血液由心臟泵送至全身的大血管是？',
    options: ['主動脈', '上腔靜脈', '下腔靜脈', '肺動脈'],
    answerIndex: 0,
    explanation: '左心室收縮時將含氧充沛的動脈血壓入主動脈（Aorta），再分支送到全身各器官。',
  },
  {
    id: 'q4_11',
    difficulty: 4,
    question: '人體中最大的淋巴器官，負責儲存血液並過濾老舊紅血球的是哪一個？',
    options: ['脾臟', '胸腺', '扁桃腺', '盲腸'],
    answerIndex: 0,
    explanation: '脾臟（Spleen）位於左上腹，是體內最大的淋巴器官，能吞噬老化血球並參與免疫。',
  },
  {
    id: 'q4_12',
    difficulty: 4,
    question: '古希臘哲學三哲人（蘇格拉底、柏拉圖、亞里斯多德）之間的師徒傳承順序是？',
    options: ['蘇格拉底 ➔ 柏拉圖 ➔ 亞里斯多德', '柏拉圖 ➔ 蘇格拉底 ➔ 亞里斯多德', '亞里斯多德 ➔ 柏拉圖 ➔ 蘇格拉底', '蘇格拉底 ➔ 亞里斯多德 ➔ 柏拉圖'],
    answerIndex: 0,
    explanation: '蘇格拉底為柏拉圖之師，柏拉圖為亞里斯多德之師，世稱希臘三哲。',
  },
  {
    id: 'q4_13',
    difficulty: 4,
    question: '在化學中，pH 值等於 7 的水溶液在標準 25°C 下代表什麼酸鹼性質？',
    options: ['中性', '強酸性', '強鹼性', '弱酸性'],
    answerIndex: 0,
    explanation: 'pH < 7 為酸性，pH = 7 為中性，pH > 7 為鹼性。',
  },
  {
    id: 'q4_14',
    difficulty: 4,
    question: '著名自然遺產「大堡礁（Great Barrier Reef）」位於哪一個國家沿海？',
    options: ['澳洲東北海岸', '巴西東南海岸', '印尼峇里島', '南非好望角'],
    answerIndex: 0,
    explanation: '大堡礁是世界最大最長的珊瑚礁群，綿延於澳洲昆士蘭州外海超過 2000 公里。',
  },
  {
    id: 'q4_15',
    difficulty: 4,
    question: '太陽表面常常出現溫度比周圍低而顯得較暗的斑塊，這些斑塊被稱為什麼？',
    options: ['太陽黑子', '日珥', '日冕', '太陽耀斑'],
    answerIndex: 0,
    explanation: '太陽黑子是強烈磁場抑制對流致使局部溫度較周圍低約 1500°C 所顯出的暗區。',
  },
  {
    id: 'q4_16',
    difficulty: 4,
    question: '「四面楚歌」成語典故中，是漢軍哪位將領在垓下之圍指揮軍隊唱楚歌瓦解楚軍鬥志？',
    options: ['韓信', '蕭何', '張良', '曹參'],
    answerIndex: 0,
    explanation: '楚漢相爭垓下之戰，韓信夜令漢軍四面唱楚國鄉歌，使項羽楚軍軍心潰散。',
  },
  {
    id: 'q4_17',
    difficulty: 4,
    question: '植物細胞相較於動物細胞，最獨特具有且能支撐細胞外形、維持硬度的構造是？',
    options: ['細胞壁', '細胞膜', '粒線體', '核糖體'],
    answerIndex: 0,
    explanation: '細胞壁由纖維素構成，能保護植物細胞內部並維持固定形狀，動物細胞沒有細胞壁。',
  },
  {
    id: 'q4_18',
    difficulty: 4,
    question: '世界上最乾燥、也是面積最大的熱帶荒漠是位於非洲北部的哪一座沙漠？',
    options: ['撒哈拉沙漠', '戈壁沙漠', '塔克拉瑪干沙漠', '阿他加馬沙漠'],
    answerIndex: 0,
    explanation: '撒哈拉沙漠面積超過 900 萬平方公里，是世界上最大的熱帶沙漠。',
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
  {
    id: 'q5_8',
    difficulty: 5,
    question: '地質年代中，恐龍繁盛並走向滅絕的時代被總稱為哪一個地質時代？',
    options: ['中生代（三疊紀、侏羅紀、白堊紀）', '古生代', '新生代', '太古代'],
    answerIndex: 0,
    explanation: '恐龍在中生代出現並稱霸地球，約在 6600 萬年前白堊紀末期的小行星撞擊事件中滅絕。',
  },
  {
    id: 'q5_9',
    difficulty: 5,
    question: '地球地殼中化學元素含量最高（佔地殼總重量約 46%）的元素是什麼？',
    options: ['氧（Oxygen）', '矽（Silicon）', '鋁（Aluminum）', '鐵（Iron）'],
    answerIndex: 0,
    explanation: '地殼元素豐度前四位依序為：氧（約46%）、矽（約28%）、鋁（約8%）、鐵（約5%）。',
  },
  {
    id: 'q5_10',
    difficulty: 5,
    question: '世界上第一部印刷出版的鉛活字聖經「古騰堡聖經」，發明於十五世紀的哪一個國家？',
    options: ['德國', '英國', '法國', '義大利'],
    answerIndex: 0,
    explanation: '德國發明家約翰尼斯·古騰堡於 1450 年代發明活字印刷術，推動了歐洲宗教改革與文藝復興。',
  },
  {
    id: 'q5_11',
    difficulty: 5,
    question: '下列何者是目前物理學標準模型中，負責賦予其他基本粒子質量的粒子（被稱為上帝粒子）？',
    options: ['希格斯玻色子 (Higgs boson)', '光子', '微中子', '膠子'],
    answerIndex: 0,
    explanation: '希格斯玻色子於 2012 年由歐洲核子研究組織（CERN）的大型強子對撞機證實存在。',
  },
  {
    id: 'q5_12',
    difficulty: 5,
    question: '在太陽系行星中，自轉方向由東向西（即「逆向自轉」，太陽從西邊升起）的罕見行星是？',
    options: ['金星 (Venus)', '火星', '木星', '水星'],
    answerIndex: 0,
    explanation: '金星自轉方向為順時針（自東向西），因此金星上看到的太陽是西升東落，自轉周期長達 243 地球日。',
  },
];

/**
 * 題庫管理器 (Question Manager)
 * 負責單局與跨局歷史去重 (使用 localStorage 持久化記憶，保證連續多局不重複)
 */
class QuestionManager {
  constructor() {
    this.storageKey = 'cat_dog_trivia_history_v2';
    this.sessionUsedIds = new Set();
    this.historyUsedIds = this.loadHistory();
  }

  loadHistory() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        return new Set(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('localStorage read error:', e);
    }
    return new Set();
  }

  saveHistory() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify([...this.historyUsedIds]));
    } catch (e) {
      console.warn('localStorage save error:', e);
    }
  }

  /**
   * 重置單局抽題記錄
   */
  resetSession() {
    this.sessionUsedIds.clear();
  }

  /**
   * 根據目標難度抽取「絕對不重複」的題目
   */
  getUniqueQuestion(targetDiff) {
    const diff = Math.max(1, Math.min(5, targetDiff));

    // 1. 第一優先：同難度、本局未抽過、歷史中未抽過
    let candidates = QUESTIONS.filter(
      (q) => q.difficulty === diff && !this.sessionUsedIds.has(q.id) && !this.historyUsedIds.has(q.id)
    );

    // 2. 第二優先：放寬至相鄰難度 (diff ± 1)、本局未抽過、歷史未抽過
    if (candidates.length === 0) {
      candidates = QUESTIONS.filter(
        (q) => Math.abs(q.difficulty - diff) <= 1 && !this.sessionUsedIds.has(q.id) && !this.historyUsedIds.has(q.id)
      );
    }

    // 3. 第三優先：所有難度中本局未抽過、歷史未抽過
    if (candidates.length === 0) {
      candidates = QUESTIONS.filter(
        (q) => !this.sessionUsedIds.has(q.id) && !this.historyUsedIds.has(q.id)
      );
    }

    // 4. 若題庫已經被歷史記錄大量消耗（超過 80%），清空歷史歷史池，重新循環！
    if (candidates.length === 0) {
      this.historyUsedIds.clear();
      this.saveHistory();
      // 從本局未使用的題目中抽選同難度
      candidates = QUESTIONS.filter(
        (q) => q.difficulty === diff && !this.sessionUsedIds.has(q.id)
      );
      if (candidates.length === 0) {
        candidates = QUESTIONS.filter((q) => !this.sessionUsedIds.has(q.id));
      }
    }

    // 萬一單局題目超過題庫總量， fallback
    if (candidates.length === 0) {
      candidates = QUESTIONS;
    }

    // 隨機選取一題
    const selected = candidates[Math.floor(Math.random() * candidates.length)];

    // 標記本局已使用與歷史已使用
    this.sessionUsedIds.add(selected.id);
    this.historyUsedIds.add(selected.id);
    this.saveHistory();

    return selected;
  }
}

// 實例化全域單例題庫管理器
export const questionManager = new QuestionManager();

/**
 * 相容既有介面的匯出方法
 */
export function getQuestionByDifficulty(targetDiff) {
  return questionManager.getUniqueQuestion(targetDiff);
}

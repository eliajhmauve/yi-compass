export type Lines = [number, number, number, number, number, number]; // bottom to top, 0=yin 1=yang

export interface Hexagram {
  number: number;
  name: string;
  fullName: string;
  lines: Lines;
  meaning: string;
  advice: string;
}

// 八卦 trigrams (bottom to top)
// 乾=[1,1,1] 坤=[0,0,0] 震=[1,0,0] 巽=[0,1,1] 坎=[0,1,0] 離=[1,0,1] 艮=[0,0,1] 兌=[1,1,0]

export const hexagrams: Hexagram[] = [
  { number: 1, name: '乾', fullName: '乾為天', lines: [1,1,1,1,1,1], meaning: '天行健，剛健中正，萬物資始', advice: '自強不息，積極進取' },
  { number: 2, name: '坤', fullName: '坤為地', lines: [0,0,0,0,0,0], meaning: '地勢坤，厚德載物，柔順承載', advice: '厚積薄發，順勢而行' },
  { number: 3, name: '屯', fullName: '水雷屯', lines: [1,0,0,0,1,0], meaning: '初生之難，萬事起頭難', advice: '堅持不懈，靜待時機' },
  { number: 4, name: '蒙', fullName: '山水蒙', lines: [0,1,0,0,0,1], meaning: '蒙昧未明，需啟蒙教化', advice: '虛心求教，循序漸進' },
  { number: 5, name: '需', fullName: '水天需', lines: [1,1,1,0,1,0], meaning: '守候等待，雲上於天', advice: '耐心等待，充實自我' },
  { number: 6, name: '訟', fullName: '天水訟', lines: [0,1,0,1,1,1], meaning: '爭訟之象，上下不和', advice: '退讓為上，和解為貴' },
  { number: 7, name: '師', fullName: '地水師', lines: [0,1,0,0,0,0], meaning: '眾人之事，統率有方', advice: '紀律嚴明，以正治眾' },
  { number: 8, name: '比', fullName: '水地比', lines: [0,0,0,0,1,0], meaning: '親附和合，比鄰相輔', advice: '廣結善緣，真誠待人' },
  { number: 9, name: '小畜', fullName: '風天小畜', lines: [1,1,1,0,1,1], meaning: '小有積蓄，密雲不雨', advice: '積小成大，蓄勢待發' },
  { number: 10, name: '履', fullName: '天澤履', lines: [1,1,0,1,1,1], meaning: '履行謹慎，如履虎尾', advice: '謹言慎行，守禮知節' },
  { number: 11, name: '泰', fullName: '地天泰', lines: [1,1,1,0,0,0], meaning: '天地交泰，通達和順', advice: '把握良機，積極開拓' },
  { number: 12, name: '否', fullName: '天地否', lines: [0,0,0,1,1,1], meaning: '天地不交，閉塞不通', advice: '韜光養晦，等待轉機' },
  { number: 13, name: '同人', fullName: '天火同人', lines: [1,0,1,1,1,1], meaning: '志同道合，和同於人', advice: '團結協作，求同存異' },
  { number: 14, name: '大有', fullName: '火天大有', lines: [1,1,1,1,0,1], meaning: '豐盛大有，光明在上', advice: '謙虛守成，廣施恩德' },
  { number: 15, name: '謙', fullName: '地山謙', lines: [0,0,1,0,0,0], meaning: '謙遜之德，地中有山', advice: '虛懷若谷，不驕不躁' },
  { number: 16, name: '豫', fullName: '雷地豫', lines: [0,0,0,1,0,0], meaning: '豫樂之象，順以動悅', advice: '未雨綢繆，居安思危' },
  { number: 17, name: '隨', fullName: '澤雷隨', lines: [1,0,0,1,1,0], meaning: '隨順時勢，因時制宜', advice: '順應變化，隨機應變' },
  { number: 18, name: '蠱', fullName: '山風蠱', lines: [0,1,1,0,0,1], meaning: '蠱惑之象，撥亂反正', advice: '正本清源，革新除弊' },
  { number: 19, name: '臨', fullName: '地澤臨', lines: [1,1,0,0,0,0], meaning: '居高臨下，親臨觀察', advice: '把握時機，主動出擊' },
  { number: 20, name: '觀', fullName: '風地觀', lines: [0,0,0,0,1,1], meaning: '仰觀俯察，以觀天下', advice: '靜觀其變，深思熟慮' },
  { number: 21, name: '噬嗑', fullName: '火雷噬嗑', lines: [1,0,0,1,0,1], meaning: '咬合之象，明罰敕法', advice: '果斷處理，不留餘患' },
  { number: 22, name: '賁', fullName: '山火賁', lines: [1,0,1,0,0,1], meaning: '文飾之美，以文化成', advice: '注重內涵，不尚虛華' },
  { number: 23, name: '剝', fullName: '山地剝', lines: [0,0,0,0,0,1], meaning: '剝落之象，陰盛陽衰', advice: '收斂保守，靜待時運' },
  { number: 24, name: '復', fullName: '地雷復', lines: [1,0,0,0,0,0], meaning: '一陽復始，回歸正道', advice: '重新出發，把握新機' },
  { number: 25, name: '無妄', fullName: '天雷無妄', lines: [1,0,0,1,1,1], meaning: '至誠無妄，天命自然', advice: '真誠行事，順應天理' },
  { number: 26, name: '大畜', fullName: '山天大畜', lines: [1,1,1,0,0,1], meaning: '大有積蓄，剛健篤實', advice: '厚積實力，養精蓄銳' },
  { number: 27, name: '頤', fullName: '山雷頤', lines: [1,0,0,0,0,1], meaning: '頤養之道，慎言節食', advice: '修身養性，謹慎言行' },
  { number: 28, name: '大過', fullName: '澤風大過', lines: [0,1,1,1,1,0], meaning: '過度之象，棟樑撓曲', advice: '審時度勢，適可而止' },
  { number: 29, name: '坎', fullName: '坎為水', lines: [0,1,0,0,1,0], meaning: '重重險難，水流不息', advice: '堅持信念，克服困難' },
  { number: 30, name: '離', fullName: '離為火', lines: [1,0,1,1,0,1], meaning: '光明附麗，文明以止', advice: '明辨是非，柔順中正' },
  { number: 31, name: '咸', fullName: '澤山咸', lines: [0,0,1,1,1,0], meaning: '感應相通，陰陽交感', advice: '虛心感受，以誠相待' },
  { number: 32, name: '恆', fullName: '雷風恆', lines: [0,1,1,1,0,0], meaning: '恆久之道，持之以恆', advice: '堅定不移，持續努力' },
  { number: 33, name: '遯', fullName: '天山遯', lines: [0,0,1,1,1,1], meaning: '退避之象，知進知退', advice: '適時退讓，保全實力' },
  { number: 34, name: '大壯', fullName: '雷天大壯', lines: [1,1,1,1,0,0], meaning: '剛強壯盛，雷在天上', advice: '守正不阿，勿過剛猛' },
  { number: 35, name: '晉', fullName: '火地晉', lines: [0,0,0,1,0,1], meaning: '日出地上，光明上進', advice: '積極向上，穩步前進' },
  { number: 36, name: '明夷', fullName: '地火明夷', lines: [1,0,1,0,0,0], meaning: '光明受傷，韜光養晦', advice: '隱忍待時，保護自身' },
  { number: 37, name: '家人', fullName: '風火家人', lines: [1,0,1,0,1,1], meaning: '齊家之道，正位於內', advice: '和睦家庭，修身齊家' },
  { number: 38, name: '睽', fullName: '火澤睽', lines: [1,1,0,1,0,1], meaning: '背離之象，異中求同', advice: '求同存異，化解分歧' },
  { number: 39, name: '蹇', fullName: '水山蹇', lines: [0,0,1,0,1,0], meaning: '行路艱難，險阻在前', advice: '知難而退，另尋出路' },
  { number: 40, name: '解', fullName: '雷水解', lines: [0,1,0,1,0,0], meaning: '解除困難，春雷解凍', advice: '把握時機，快速行動' },
  { number: 41, name: '損', fullName: '山澤損', lines: [1,1,0,0,0,1], meaning: '損下益上，減損之道', advice: '適度捨棄，以退為進' },
  { number: 42, name: '益', fullName: '風雷益', lines: [1,0,0,0,1,1], meaning: '損上益下，增益之象', advice: '積極行善，利他利己' },
  { number: 43, name: '夬', fullName: '澤天夬', lines: [1,1,1,1,1,0], meaning: '決斷之象，果斷除弊', advice: '當機立斷，剛柔並濟' },
  { number: 44, name: '姤', fullName: '天風姤', lines: [0,1,1,1,1,1], meaning: '不期而遇，陰生於下', advice: '謹慎應對，明察秋毫' },
  { number: 45, name: '萃', fullName: '澤地萃', lines: [0,0,0,1,1,0], meaning: '聚集匯萃，眾志成城', advice: '團結力量，凝聚共識' },
  { number: 46, name: '升', fullName: '地風升', lines: [0,1,1,0,0,0], meaning: '上升之象，積小成大', advice: '循序漸進，逐步提升' },
  { number: 47, name: '困', fullName: '澤水困', lines: [0,1,0,1,1,0], meaning: '窮困之象，澤無水源', advice: '安貧樂道，堅守信念' },
  { number: 48, name: '井', fullName: '水風井', lines: [0,1,1,0,1,0], meaning: '井養之道，取之不竭', advice: '修德養性，利益眾人' },
  { number: 49, name: '革', fullName: '澤火革', lines: [1,0,1,1,1,0], meaning: '變革之象，除舊佈新', advice: '順時而變，大膽革新' },
  { number: 50, name: '鼎', fullName: '火風鼎', lines: [0,1,1,1,0,1], meaning: '鼎新之象，革故鼎新', advice: '建立新局，培養賢才' },
  { number: 51, name: '震', fullName: '震為雷', lines: [1,0,0,1,0,0], meaning: '雷動之象，驚而後安', advice: '居安思危，臨危不懼' },
  { number: 52, name: '艮', fullName: '艮為山', lines: [0,0,1,0,0,1], meaning: '止靜之象，適可而止', advice: '知止不殆，靜以修身' },
  { number: 53, name: '漸', fullName: '風山漸', lines: [0,0,1,0,1,1], meaning: '漸進之象，循序發展', advice: '步步為營，穩健前行' },
  { number: 54, name: '歸妹', fullName: '雷澤歸妹', lines: [1,1,0,1,0,0], meaning: '婚嫁之象，有始無終', advice: '慎始善終，量力而為' },
  { number: 55, name: '豐', fullName: '雷火豐', lines: [1,0,1,1,0,0], meaning: '豐盛之象，盛大光明', advice: '居安思危，珍惜豐盈' },
  { number: 56, name: '旅', fullName: '火山旅', lines: [0,0,1,1,0,1], meaning: '旅行之象，客居他鄉', advice: '謹慎行事，柔順處世' },
  { number: 57, name: '巽', fullName: '巽為風', lines: [0,1,1,0,1,1], meaning: '順入之象，風行草偃', advice: '柔順深入，以退為進' },
  { number: 58, name: '兌', fullName: '兌為澤', lines: [1,1,0,1,1,0], meaning: '喜悅之象，和悅相處', advice: '以和為貴，真誠交流' },
  { number: 59, name: '渙', fullName: '風水渙', lines: [0,1,0,0,1,1], meaning: '渙散之象，風行水上', advice: '凝聚人心，化解分散' },
  { number: 60, name: '節', fullName: '水澤節', lines: [1,1,0,0,1,0], meaning: '節制之象，適度為宜', advice: '量入為出，知足常樂' },
  { number: 61, name: '中孚', fullName: '風澤中孚', lines: [1,1,0,0,1,1], meaning: '至誠之象，信及豚魚', advice: '以誠待人，信守承諾' },
  { number: 62, name: '小過', fullName: '雷山小過', lines: [0,0,1,1,0,0], meaning: '小有過越，行過乎恭', advice: '謙恭過度，不為大事' },
  { number: 63, name: '既濟', fullName: '水火既濟', lines: [1,0,1,0,1,0], meaning: '事已成就，萬事俱備', advice: '守成防微，居安思危' },
  { number: 64, name: '未濟', fullName: '火水未濟', lines: [0,1,0,1,0,1], meaning: '事未完成，尚需努力', advice: '堅持到底，審慎收尾' },
];

// Build a lookup map from lines binary to hexagram
const linesMap = new Map<number, Hexagram>();
hexagrams.forEach(h => {
  const key = h.lines.reduce((acc, bit, i) => acc | (bit << i), 0);
  linesMap.set(key, h);
});

export function findHexagramByLines(lines: Lines): Hexagram | undefined {
  const key = lines.reduce((acc, bit, i) => acc | (bit << i), 0);
  return linesMap.get(key);
}

export function findHexagramByNumber(num: number): Hexagram | undefined {
  return hexagrams.find(h => h.number === num);
}

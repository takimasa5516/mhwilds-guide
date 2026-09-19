import { FieldMapData } from '../types';

export const fieldsMapData: FieldMapData[] = [
  // ==========================================
  // 1. 隔ての砂原（Windward Plains）
  // 公式情報：全16エリア、簡易キャンプ候補地全13箇所、同時設営上限5箇所
  // ==========================================
  {
    id: 'windward-plains',
    name: '隔ての砂原',
    nameEn: 'Windward Plains',
    description: '広大な砂漠、砂岩の洞窟、緑豊かなオアシスが混在する荒野。過酷な「砂嵐と激雷」の異常気象時には生態系の頂点「雷迅竜レ・ダウ」が空を舞い、落雷が大地をガラス化させる。',
    maxCampCount: 5,
    availableLayers: [
      { id: 'all', name: '全層統合マップ' },
      { id: 'surface', name: '地表（砂丘・草原・オアシス）' },
      { id: 'underground', name: '地下（鉱石洞窟・水脈洞）' }
    ],
    mapImages: {
      all: 'images/maps/windward_plains_surface.png',
      surface: 'images/maps/windward_plains_surface.png',
      underground: 'images/maps/windward_plains_underground.png'
    },
    climates: {
      barren: {
        name: '荒廃期（砂風期）',
        description: '乾燥した熱風が吹き抜け、植物が枯渇する時期。草食竜はオアシスに密集し、肉食竜の徘徊が活発化。',
        activeMonsters: ['ドシャグマ（群れ）', 'バーラハーラ', 'チャタカブラ'],
        environmentalHazard: '砂嵐による視界悪化、スタミナ消費速度の増加'
      },
      anomaly: {
        name: '異常気象【砂嵐・激雷】',
        description: '天を覆う巨大な砂嵐とともに超高圧の紫電が絶え間なく地表に降り注ぐ、砂原の最も危険な生態環境。',
        activeMonsters: ['雷迅竜レ・ダウ（頂点捕食者）', 'ドシャグマ（ボス個体）', 'アルシュベルド'],
        environmentalHazard: 'ランダム落雷（当たると即死級雷属性ダメージ＋麻痺）',
        specialGimmick: 'エリア5の「避雷針の岩柱」を攻撃してモンスターへ落雷を誘導し、確定大ダウン＆角破壊を狙える'
      },
      abundant: {
        name: '豊穣期（オアシス開花）',
        description: '嵐が去り、オアシス周辺に一斉に花が咲き誇る恵みの時期。セクレトでの移動が快適になり、レア環境生物も多数出現。',
        activeMonsters: ['ケマトリス', 'バーラハーラ', 'プケプケ'],
        environmentalHazard: 'なし（気候安定・恵みの気候）',
        specialGathering: '「夜咲きオアシス花」「黄金砂金」「巨大種の実」の採取数が2倍'
      }
    },
    officialCamps: [
      {
        id: 'camp-wp-3-s',
        name: 'エリア3 南部キャンプ',
        areaNumber: 3,
        locationName: 'エリア3 南部',
        safety: 'unstable',
        safetyLabel: '不安定',
        coordinates: { x: 42, y: 27 },
        description: '北部のベースキャンプから平原へと下る中継点。ドシャグマの徘徊ルートに近いためモンスターが接近すると破壊される恐れあり。'
      },
      {
        id: 'camp-wp-4-cave',
        name: 'エリア4 鉱石洞窟キャンプ',
        areaNumber: 4,
        locationName: 'エリア4 鉱石洞窟',
        safety: 'stable',
        safetyLabel: '安全',
        coordinates: { x: 25, y: 33 },
        description: '地下の鉱石採掘場に面した洞窟内キャンプ。大型モンスターが侵入できない地形のため安全度が最も高く、序盤〜終盤まで必須。',
        isRecommended: true
      },
      {
        id: 'camp-wp-4-w',
        name: 'エリア4 西部キャンプ',
        areaNumber: 4,
        locationName: 'エリア4 西部',
        safety: 'dangerous',
        safetyLabel: '要注意（危険）',
        coordinates: { x: 20, y: 36 },
        description: '西側の崖下通路。モンスターの通り道となっており、頻繁に破壊されるリスクがある。'
      },
      {
        id: 'camp-wp-6-hideout',
        name: 'エリア6 谷の隠れ家キャンプ',
        areaNumber: 6,
        locationName: 'エリア6 谷の隠れ家',
        safety: 'stable',
        safetyLabel: '安全',
        coordinates: { x: 37, y: 45 },
        description: '岩山の裂け目にある隠れ家。中央部の全エリア（5, 7, 8, 9）へ直通する絶好のファストトラベル拠点。安全度も高く最優先設営推奨。',
        isRecommended: true
      },
      {
        id: 'camp-wp-8-sw',
        name: 'エリア8 南西部キャンプ',
        areaNumber: 8,
        locationName: 'エリア8 南西部',
        safety: 'dangerous',
        safetyLabel: '要注意（危険）',
        coordinates: { x: 73, y: 36 },
        description: '砂丘の窪地。バーラハーラの潜行エリアに隣接し、危険度が高い。'
      },
      {
        id: 'camp-wp-8-se',
        name: 'エリア8 南東部キャンプ',
        areaNumber: 8,
        locationName: 'エリア8 南東部',
        safety: 'dangerous',
        safetyLabel: '要注意（危険）',
        coordinates: { x: 76, y: 40 },
        description: '砂岩の影にあるが、レ・ダウが着地する広場に近いため破壊されやすい。'
      },
      {
        id: 'camp-wp-9-hill',
        name: 'エリア9 見晴らし丘キャンプ',
        areaNumber: 9,
        locationName: 'エリア9 見晴らし丘',
        safety: 'unstable',
        safetyLabel: '不安定',
        coordinates: { x: 46, y: 53 },
        description: '流砂盆地を見下ろす丘の上。流砂ギミックへのアクセスが良く、狩猟中のリスポーン地点として優秀。'
      },
      {
        id: 'camp-wp-10-se',
        name: 'エリア10 南東部キャンプ',
        areaNumber: 10,
        locationName: 'エリア10 南東部',
        safety: 'dangerous',
        safetyLabel: '要注意（危険）',
        coordinates: { x: 60, y: 48 },
        description: '荒涼とした砂漠エリア。周囲に見通しが良いがモンスターの奇襲を受けやすい。'
      },
      {
        id: 'camp-wp-13-oasis',
        name: 'エリア13 オアシスキャンプ',
        areaNumber: 13,
        locationName: 'エリア13 オアシス',
        safety: 'dangerous',
        safetyLabel: '要注意（危険）',
        coordinates: { x: 33, y: 65 },
        description: '水と緑が豊かな大オアシス。水辺モンスターが集結するため危険度は高いが、採取や釣り、南部狩猟に絶対欠かせない重要キャンプ。',
        isRecommended: true
      },
      {
        id: 'camp-wp-13-w',
        name: 'エリア13 西部キャンプ',
        areaNumber: 13,
        locationName: 'エリア13 西部',
        safety: 'unstable',
        safetyLabel: '不安定',
        coordinates: { x: 29, y: 68 },
        description: 'オアシス西の岩場陰。オアシス直結のサブキャンプとして利用可能。'
      },
      {
        id: 'camp-wp-14-river',
        name: 'エリア14 地下水脈キャンプ',
        areaNumber: 14,
        locationName: 'エリア14 地下水脈',
        safety: 'stable',
        safetyLabel: '安全',
        coordinates: { x: 58, y: 71 },
        description: '砂漠の下を流れる清らかな地下水脈の洞窟。モンスターが入れない安全地帯で、古代遺跡・アーティア採掘ルートに直結。',
        isRecommended: true
      },
      {
        id: 'camp-wp-16-nw',
        name: 'エリア16 北西部キャンプ',
        areaNumber: 16,
        locationName: 'エリア16 北西部',
        safety: 'unstable',
        safetyLabel: '不安定',
        coordinates: { x: 79, y: 85 },
        description: '最果ての骨砂漠へ通じる岩間。大型竜の骨塚採取に便利。'
      },
      {
        id: 'camp-wp-16-bone',
        name: 'エリア16 骨砂漠キャンプ',
        areaNumber: 16,
        locationName: 'エリア16 骨砂漠',
        safety: 'unstable',
        safetyLabel: '不安定',
        coordinates: { x: 84, y: 87 },
        description: '巨大モンスターの白骨が散乱する最果ての地。古龍や強大モンスターが逃走・睡眠する場所の直近。',
        isRecommended: true
      }
    ],
    areaNodes: [
      { areaNumber: 1, name: 'ベースキャンプ前哨', x: 50, y: 22, radius: 24, elevation: 'surface', terrainType: 'desert', terrainLabel: '平原・出撃口', monstersFound: ['草食竜', '小型鳥竜'] },
      { areaNumber: 2, name: '乾燥低地', x: 33, y: 20, radius: 22, elevation: 'surface', terrainType: 'desert', terrainLabel: '砂利地帯', monstersFound: ['ケマトリス'] },
      { areaNumber: 3, name: '風衝岩場', x: 42, y: 28, radius: 24, elevation: 'surface', terrainType: 'desert', terrainLabel: '岩峰群', monstersFound: ['チャタカブラ', 'ドシャグマ'] },
      { areaNumber: 4, name: '鉱石大洞窟', x: 26, y: 32, radius: 26, elevation: 'underground', terrainType: 'cave', terrainLabel: '地下鍾乳洞', monstersFound: ['チャタカブラ', '鉱石群'] },
      { areaNumber: 5, name: '避雷針の岩柱群', x: 45, y: 38, radius: 26, elevation: 'surface', terrainType: 'desert', terrainLabel: '落雷尖塔帯', monstersFound: ['雷迅竜レ・ダウ', 'ドシャグマ'] },
      { areaNumber: 6, name: '谷の回廊', x: 37, y: 44, radius: 22, elevation: 'surface', terrainType: 'cave', terrainLabel: '峡谷の隠れ谷', monstersFound: ['プケプケ'] },
      { areaNumber: 7, name: '中央砂丘', x: 67, y: 27, radius: 25, elevation: 'surface', terrainType: 'desert', terrainLabel: '大砂丘', monstersFound: ['バーラハーラ', 'ドシャグマ'] },
      { areaNumber: 8, name: '風蝕高台', x: 74, y: 34, radius: 25, elevation: 'surface', terrainType: 'desert', terrainLabel: '突風台地', monstersFound: ['雷迅竜レ・ダウ'] },
      { areaNumber: 9, name: '底なし流砂地', x: 47, y: 52, radius: 28, elevation: 'surface', terrainType: 'desert', terrainLabel: '流砂盆地', monstersFound: ['バーラハーラ', 'ドシャグマ'] },
      { areaNumber: 10, name: '南東荒野', x: 58, y: 47, radius: 25, elevation: 'surface', terrainType: 'desert', terrainLabel: '白熱岩石帯', monstersFound: ['アルシュベルド'] },
      { areaNumber: 11, name: '古代崩落路', x: 34, y: 50, radius: 22, elevation: 'underground', terrainType: 'cave', terrainLabel: '崩落洞窟', monstersFound: ['化石・破片'] },
      { areaNumber: 12, name: '古代要塞遺構', x: 23, y: 38, radius: 24, elevation: 'underground', terrainType: 'ruins', terrainLabel: '古代壁・アーティア', monstersFound: ['太古の破片採掘'] },
      { areaNumber: 13, name: '大オアシス湖', x: 33, y: 66, radius: 30, elevation: 'surface', terrainType: 'oasis', terrainLabel: '水源・ヤシ群生', monstersFound: ['草食竜群', '水辺生物'] },
      { areaNumber: 14, name: '清冽の地下水脈', x: 58, y: 71, radius: 24, elevation: 'underground', terrainType: 'water', terrainLabel: '地下水脈・釣り場', monstersFound: ['特産魚', '鉱脈'] },
      { areaNumber: 15, name: '風鳴りの砂道', x: 56, y: 76, radius: 24, elevation: 'surface', terrainType: 'desert', terrainLabel: '風鳴り砂谷', monstersFound: ['ケマトリス'] },
      { areaNumber: 16, name: '最果ての骨砂漠', x: 83, y: 88, radius: 28, elevation: 'surface', terrainType: 'desert', terrainLabel: '巨骨群・寝床', monstersFound: ['レ・ダウ（寝床）', 'アルシュベルド'] }
    ],
    connections: [
      { from: 1, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 3 }, { from: 2, to: 4 },
      { from: 3, to: 5 }, { from: 3, to: 6 }, { from: 3, to: 7 },
      { from: 4, to: 5 }, { from: 4, to: 11 }, { from: 4, to: 12 },
      { from: 5, to: 6 }, { from: 5, to: 9 },
      { from: 6, to: 7 }, { from: 6, to: 8 }, { from: 6, to: 9 },
      { from: 7, to: 8 }, { from: 8, to: 10 },
      { from: 9, to: 11 }, { from: 9, to: 13 }, { from: 9, to: 15 },
      { from: 10, to: 13 }, { from: 10, to: 16 },
      { from: 11, to: 12 }, { from: 11, to: 14 },
      { from: 12, to: 14 },
      { from: 13, to: 15 }, { from: 13, to: 16 },
      { from: 14, to: 15 }, { from: 15, to: 16 }
    ],
    environmentalGimmicks: [
      {
        name: '避雷針の尖塔岩（落雷誘導）',
        area: 5,
        effect: '異常気象時にスリンガー弾を当てると超高圧落雷が誘爆。周囲のモンスターに数千の大ダメージ＋確定大ダウン＋角破壊。',
        howToTrigger: '異常気象時にスリンガー閃光弾や石ころを岩頂部に照射'
      },
      {
        name: '底なし流砂トラップ',
        area: 9,
        effect: '足元の脆い砂地を崩落させ、大型モンスターを約15秒間身動き不能に陥れて頭部殴り放題にする。',
        howToTrigger: '大型モンスター突進時にタル爆弾やスリンガーで砂地を爆破'
      },
      {
        name: '脆い岩柱崩落',
        area: 3,
        effect: 'モンスターを岩柱に激突させるかスリンガーで崩し、直撃させて確定ダウン。',
        howToTrigger: 'モンスターの正面に立ち、突進を岩柱に誘導する'
      }
    ],
    gatheringHotspots: [
      {
        category: '太古の破片・アーティア素材',
        area: 12,
        items: ['太古の破片', 'さびた破片', '歪んだ結晶'],
        tips: 'エリア4から地下へ降りたエリア12古代要塞跡の壁面。リポップは約15分。'
      },
      {
        category: '鉱石・結晶',
        area: 4,
        items: ['ドラグライト鉱石', 'カブレライト鉱石', 'マカライト鉱石'],
        tips: 'エリア4の鍾乳洞壁面。キャンプから徒歩0分で周回可能。'
      },
      {
        category: '特産品・ハチミツ',
        area: 13,
        items: ['夜咲きオアシス花', 'ハチミツ', '黄金砂金'],
        tips: 'オアシス湖畔周辺。豊穣期は採取量が2倍に増加。'
      }
    ],
    areas: []
  },

  // ==========================================
  // 2. 緋の森（Scarlet Forest）
  // 公式情報：全18エリア（上層・中層・下層）、簡易キャンプ候補地全12箇所、同時設営上限5箇所
  // ==========================================
  {
    id: 'scarlet-forest',
    name: '緋の森',
    nameEn: 'Scarlet Forest',
    description: '赤い水流と巨大樹が複雑に入り組んだ多層湿潤帯。異常気象「豪雨・大出水」が発生すると川が一気に氾濫し、水生古生物の頂点「波衣竜ウズ・トゥナ」が森全体を泳ぎ回る。',
    maxCampCount: 5,
    availableLayers: [
      { id: 'all', name: '全層統合マップ' },
      { id: 'upper', name: '上層（樹上高台・大湖畔・遺跡）' },
      { id: 'middle', name: '中層（花咲く岩場・大樹林）' },
      { id: 'lower', name: '下層（洞窟湖・河床）' }
    ],
    mapImages: {
      all: 'images/maps/scarlet_forest_upper.png',
      upper: 'images/maps/scarlet_forest_upper.png',
      middle: 'images/maps/scarlet_forest_upper.png',
      lower: 'images/maps/scarlet_forest_lower.png'
    },
    climates: {
      barren: {
        name: '荒廃期（静謐期・渇水）',
        description: '水かさが減り、川床が露出する時期。陸上モンスターの行動範囲が広がり、洞窟内の探索が容易になる。',
        activeMonsters: ['刺花蜘蛛ラバラ・バリナ', 'プケプケ', 'チャタカブラ'],
        environmentalHazard: '湿地による足元の移動速度低下'
      },
      anomaly: {
        name: '異常気象【豪雨・大出水】',
        description: '森全体が濁流に飲み込まれる豪雨。水位が大幅に上昇し、水流に乗った立体的な戦闘が発生。',
        activeMonsters: ['波衣竜ウズ・トゥナ（頂点捕食者）', 'ラバラ・バリナ'],
        environmentalHazard: '激流による流され、水属性やられによるスタミナ回復停止',
        specialGimmick: '上流エリアの「天然ダム岩」を破壊して大津波を発生させ、ウズ・トゥナを押し流して超長時間ダウン'
      },
      abundant: {
        name: '豊穣期（水花満開期）',
        description: '雨上がりの陽光に照らされ、緋色の水花が一斉に咲き乱れる恵みの季節。',
        activeMonsters: ['プケプケ', 'チャタカブラ', 'レア水生生物群'],
        environmentalHazard: 'なし（気候安定・清流）',
        specialGathering: '「緋色の睡蓮」「大滴の蜜」「古代水草」の採取数が2倍'
      }
    },
    officialCamps: [
      {
        id: 'camp-sf-6-flower',
        name: 'エリア6 花咲く岩場キャンプ',
        areaNumber: 6,
        locationName: 'エリア6 花咲く岩場（中層）',
        safety: 'unstable',
        safetyLabel: '不安定',
        coordinates: { x: 30, y: 35 },
        description: '緋色の花が咲く中層の岩場。プケプケの休息地に近く、接近時に危険が生じる。'
      },
      {
        id: 'camp-sf-7-shade',
        name: 'エリア7 大樹の木陰キャンプ',
        areaNumber: 7,
        locationName: 'エリア7 大樹の木陰（中層）',
        safety: 'stable',
        safetyLabel: '安全',
        coordinates: { x: 44, y: 38 },
        description: '巨大樹の根元にある静かな木陰。モンスターが入り込めない安全地帯で、中層の移動ハブ。',
        isRecommended: true
      },
      {
        id: 'camp-sf-8-lake',
        name: 'エリア8 洞窟湖キャンプ',
        areaNumber: 8,
        locationName: 'エリア8 洞窟湖（下層）',
        safety: 'stable',
        safetyLabel: '安全',
        coordinates: { x: 26, y: 55 },
        description: '下層の洞窟湖畔。天井から光が差し込む美しい安全拠点。水生素材集めに最適。'
      },
      {
        id: 'camp-sf-8-s',
        name: 'エリア8 南部キャンプ',
        areaNumber: 8,
        locationName: 'エリア8 南部（下層）',
        safety: 'dangerous',
        safetyLabel: '要注意（危険）',
        coordinates: { x: 32, y: 64 },
        description: '下層水路の合流点。ラバラ・バリナの糸が張られることが多く要注意。'
      },
      {
        id: 'camp-sf-10-sw',
        name: 'エリア10 南西部キャンプ',
        areaNumber: 10,
        locationName: 'エリア10 南西部（中層）',
        safety: 'unstable',
        safetyLabel: '不安定',
        coordinates: { x: 55, y: 52 },
        description: '天然ダムの下流。大出水時に水位が上がるとモンスターが押し寄せる。'
      },
      {
        id: 'camp-sf-12-ne',
        name: 'エリア12 北東部キャンプ',
        areaNumber: 12,
        locationName: 'エリア12 北東部（中層）',
        safety: 'dangerous',
        safetyLabel: '要注意（危険）',
        coordinates: { x: 75, y: 36 },
        description: '巨木の渡り廊下手前。大型モンスターの移動ルート直上。'
      },
      {
        id: 'camp-sf-14-sw',
        name: 'エリア14 南西部キャンプ',
        areaNumber: 14,
        locationName: 'エリア14 南西部（上層）',
        safety: 'stable',
        safetyLabel: '安全',
        coordinates: { x: 22, y: 76 },
        description: '上層の古代遺跡に登る坂道途中。高低差を一気にショートカットできる安全拠点。'
      },
      {
        id: 'camp-sf-16-ruins',
        name: 'エリア16 遺跡内部キャンプ',
        areaNumber: 16,
        locationName: 'エリア16 遺跡内部（上層）',
        safety: 'stable',
        safetyLabel: '安全',
        coordinates: { x: 18, y: 46 },
        description: '水没した古代神殿の内部。アーティア素材・太古の破片の発掘拠点として最重要。安全度も高い。',
        isRecommended: true
      },
      {
        id: 'camp-sf-16-falls',
        name: 'エリア16 滝の秘境キャンプ',
        areaNumber: 16,
        locationName: 'エリア16 滝の秘境（上層）',
        safety: 'dangerous',
        safetyLabel: '要注意（危険）',
        coordinates: { x: 28, y: 48 },
        description: '滝壺の裏手。視界が悪くウズ・トゥナの突進を受けやすい。'
      },
      {
        id: 'camp-sf-17-lake',
        name: 'エリア17 大湖畔キャンプ',
        areaNumber: 17,
        locationName: 'エリア17 大湖畔（上層）',
        safety: 'unstable',
        safetyLabel: '不安定',
        coordinates: { x: 62, y: 68 },
        description: '上層の大出水水源地。ウズ・トゥナの決戦場直前にあるため狩猟効率が極めて高い。',
        isRecommended: true
      },
      {
        id: 'camp-sf-18-canopy',
        name: 'エリア18 樹上高台キャンプ',
        areaNumber: 18,
        locationName: 'エリア18 樹上高台（上層）',
        safety: 'stable',
        safetyLabel: '安全',
        coordinates: { x: 80, y: 72 },
        description: '森で最も高い巨樹の梢テラス。森全体をセクレトで滑空移動できる最強のスカイキャンプ。安全度も万全。',
        isRecommended: true
      },
      {
        id: 'camp-sf-18-w',
        name: 'エリア18 西部キャンプ',
        areaNumber: 18,
        locationName: 'エリア18 西部（上層）',
        safety: 'unstable',
        safetyLabel: '不安定',
        coordinates: { x: 72, y: 78 },
        description: '樹上高台の西側枝道。'
      }
    ],
    areaNodes: [
      { areaNumber: 1, name: '前線ベースキャンプ', x: 48, y: 10, radius: 24, elevation: 'lower', terrainType: 'forest', terrainLabel: '河岸出撃口', monstersFound: ['草食竜'] },
      { areaNumber: 2, name: '下層浅瀬', x: 36, y: 18, radius: 22, elevation: 'lower', terrainType: 'water', terrainLabel: 'せせらぎ浅瀬', monstersFound: ['チャタカブラ'] },
      { areaNumber: 3, name: '密林湿地', x: 60, y: 16, radius: 22, elevation: 'lower', terrainType: 'forest', terrainLabel: 'マングローブ', monstersFound: ['プケプケ'] },
      { areaNumber: 4, name: '巨木根部', x: 50, y: 26, radius: 24, elevation: 'middle', terrainType: 'forest', terrainLabel: '大樹の登り口', monstersFound: ['プケプケ'] },
      { areaNumber: 5, name: '蔦の回廊', x: 38, y: 28, radius: 22, elevation: 'middle', terrainType: 'forest', terrainLabel: 'ツタ罠エリア', monstersFound: ['ラバラ・バリナ'] },
      { areaNumber: 6, name: '花咲く岩場', x: 28, y: 35, radius: 24, elevation: 'middle', terrainType: 'forest', terrainLabel: '緋花咲く岩段', monstersFound: ['プケプケ', 'ラバラ・バリナ'] },
      { areaNumber: 7, name: '大樹のテラス', x: 44, y: 38, radius: 26, elevation: 'middle', terrainType: 'forest', terrainLabel: '中層ハブ', monstersFound: ['ラバラ・バリナ'] },
      { areaNumber: 8, name: '洞窟湖', x: 28, y: 58, radius: 26, elevation: 'lower', terrainType: 'water', terrainLabel: '地下鍾乳湖', monstersFound: ['チャタカブラ'] },
      { areaNumber: 9, name: '天然ダム支持壁', x: 52, y: 46, radius: 26, elevation: 'middle', terrainType: 'water', terrainLabel: 'ダム決壊ギミック', monstersFound: ['波衣竜ウズ・トゥナ'] },
      { areaNumber: 10, name: '鉄砲水流路', x: 56, y: 58, radius: 25, elevation: 'middle', terrainType: 'water', terrainLabel: '濁流峡谷', monstersFound: ['ウズ・トゥナ'] },
      { areaNumber: 11, name: '大瀑布前', x: 40, y: 68, radius: 24, elevation: 'lower', terrainType: 'water', terrainLabel: '巨大滝壺', monstersFound: ['ウズ・トゥナ'] },
      { areaNumber: 12, name: '東部巨樹橋', x: 74, y: 38, radius: 24, elevation: 'middle', terrainType: 'forest', terrainLabel: '空中つり橋', monstersFound: ['リオレイア'] },
      { areaNumber: 13, name: '上層昇降岩', x: 34, y: 74, radius: 22, elevation: 'upper', terrainType: 'ruins', terrainLabel: '古代石段', monstersFound: ['古代化石'] },
      { areaNumber: 14, name: '遺跡外郭', x: 24, y: 74, radius: 24, elevation: 'upper', terrainType: 'ruins', terrainLabel: '苔むした回廊', monstersFound: ['太古の破片'] },
      { areaNumber: 15, name: '水没神殿前庭', x: 20, y: 60, radius: 25, elevation: 'upper', terrainType: 'ruins', terrainLabel: '神殿柱廊', monstersFound: ['アーティア素材'] },
      { areaNumber: 16, name: '水没古代都市核心', x: 18, y: 46, radius: 28, elevation: 'upper', terrainType: 'ruins', terrainLabel: '古代アーティア最高峰', monstersFound: ['太古の破片'] },
      { areaNumber: 17, name: '水源の大湖畔', x: 64, y: 70, radius: 28, elevation: 'upper', terrainType: 'water', terrainLabel: 'ウズ・トゥナ大氾濫地', monstersFound: ['波衣竜ウズ・トゥナ'] },
      { areaNumber: 18, name: '最高樹上テラス', x: 82, y: 72, radius: 28, elevation: 'upper', terrainType: 'forest', terrainLabel: '梢上スカイテラス', monstersFound: ['波衣竜の巣穴'] }
    ],
    connections: [
      { from: 1, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 4 }, { from: 3, to: 4 },
      { from: 4, to: 5 }, { from: 4, to: 7 }, { from: 4, to: 12 },
      { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 6, to: 8 }, { from: 6, to: 16 },
      { from: 7, to: 9 }, { from: 7, to: 10 },
      { from: 8, to: 11 }, { from: 8, to: 15 },
      { from: 9, to: 10 }, { from: 9, to: 17 },
      { from: 10, to: 11 }, { from: 10, to: 17 },
      { from: 11, to: 13 },
      { from: 12, to: 18 },
      { from: 13, to: 14 },
      { from: 14, to: 15 }, { from: 14, to: 16 },
      { from: 15, to: 16 },
      { from: 17, to: 18 }
    ],
    environmentalGimmicks: [
      {
        name: '天然ダム決壊トラップ（大出水誘発）',
        area: 9,
        effect: 'ダムの支持木をスリンガーや大剣で破壊すると、数十トンの濁流が下流へ一気に押し寄せ、ウズ・トゥナに大ダメージ＋長時間の確定大ダウン。',
        howToTrigger: 'エリア9上流の亀裂岩柱にスリンガー貫通弾を撃ち込む'
      },
      {
        name: '巨樹の捕縛ツタ罠',
        area: 5,
        effect: 'モンスターを誘導してツタに絡め取り、約12秒間拘束する。',
        howToTrigger: 'ツタの下でモンスターに攻撃を空振りさせるかスリンガーで刺激'
      }
    ],
    gatheringHotspots: [
      {
        category: '太古の破片・アーティア素材',
        area: 16,
        items: ['太古の破片', '水光原珠', '古代の歯車'],
        tips: 'エリア16古代水没都市の祭壇壁面。上層キャンプから徒歩30秒。'
      },
      {
        category: '特産品・ハチミツ',
        area: 6,
        items: ['緋色の睡蓮', '大滴の蜜', '毒テングダケ'],
        tips: 'エリア6花咲く岩場。豊穣期は採取量が倍増。'
      }
    ],
    areas: []
  },

  // ==========================================
  // 3. 油涌き谷（Oilwell Basin）
  // 公式情報：全16エリア、簡易キャンプ最大6箇所設営可能
  // ==========================================
  {
    id: 'oilwell-basin',
    name: '油涌き谷',
    nameEn: 'Oilwell Basin',
    description: '地下から原油とガスが激しく噴き出す黒い渓谷地帯。古代の製錬所跡が点在し、異常気象「火走り」が発生すると油泥に引火して谷全体が火炎地獄へと化す。',
    maxCampCount: 6,
    availableLayers: [
      { id: 'all', name: '全層統合マップ' },
      { id: 'upper', name: '上層（峡谷岩間・高所通路）' },
      { id: 'middle', name: '中層（製錬所・油泥地帯）' },
      { id: 'lower', name: '下層（鍾乳洞・鉱脈洞窟）' }
    ],
    mapImages: {
      all: 'images/maps/oilwell_basin_upper.png',
      upper: 'images/maps/oilwell_basin_upper.png',
      middle: 'images/maps/oilwell_basin_mid.png',
      lower: 'images/maps/oilwell_basin_lower.png'
    },
    climates: {
      barren: {
        name: '荒廃期（油泥沈静）',
        description: '原油が冷えて粘性を増し、足を取られやすい状態。アジャラカンが油泥を体に塗り固める。',
        activeMonsters: ['赫猿獣アジャラカン', 'ドドブランゴ', 'ヒラバミ'],
        environmentalHazard: '油泥拘束、移動速度低下'
      },
      anomaly: {
        name: '異常気象【火走り】',
        description: '油泥に火花が引火し、渓谷全体に炎が燃え広がる灼熱の猛威。黒炎を纏う謎の巨躯「ヌ・エグドラ」が覚醒。',
        activeMonsters: ['黒炎ヌ・エグドラ（頂点捕食者）', 'アジャラカン（激昂熱塊）'],
        environmentalHazard: '火属性やられ、スリップ炎ダメージ、ガス爆発',
        specialGimmick: '古代の精錬バルブを回して消火冷却水を放水し、モンスターの炎纏いを強制解除'
      },
      abundant: {
        name: '豊穣期（精錬再稼働）',
        description: '熱が安定し、古代の製錬炉周辺から貴重な精錬鉱石や化石油が抽出可能になる。',
        activeMonsters: ['ドドブランゴ', 'ヒラバミ'],
        environmentalHazard: 'なし（火勢沈静）',
        specialGathering: '「精錬原油石」「紅蓮結晶」「古代燃料油」の採取数が2倍'
      }
    },
    officialCamps: [
      {
        id: 'camp-oil-2-canyon',
        name: 'エリア2 峡谷岩間キャンプ',
        areaNumber: 2,
        locationName: 'エリア2 峡谷岩間（上層）',
        safety: 'stable',
        safetyLabel: '安全',
        coordinates: { x: 26, y: 22 },
        description: '谷の上流側入口。モンスターが登れない高台岩間にある安全キャンプ。',
        isRecommended: true
      },
      {
        id: 'camp-oil-4-pass',
        name: 'エリア4 高所通路跡キャンプ',
        areaNumber: 4,
        locationName: 'エリア4 高所通路跡（上層）',
        safety: 'unstable',
        safetyLabel: '不安定',
        coordinates: { x: 52, y: 25 },
        description: '製錬所を見下ろす鉄骨キャットウォーク跡。飛び降り急襲が可能だが風が強く不安定。'
      },
      {
        id: 'camp-oil-8-mid-n',
        name: 'エリア8 中層北部キャンプ',
        areaNumber: 8,
        locationName: 'エリア8 中層北部（中層）',
        safety: 'stable',
        safetyLabel: '安全',
        coordinates: { x: 42, y: 48 },
        description: '古代精錬プラントの中心部近く。製錬バルブギミックへ最速でアクセス可能な安全拠点。',
        isRecommended: true
      },
      {
        id: 'camp-oil-9-mid-s',
        name: 'エリア9 中層南部キャンプ',
        areaNumber: 9,
        locationName: 'エリア9 中層南部（中層）',
        safety: 'dangerous',
        safetyLabel: '要注意（危険）',
        coordinates: { x: 62, y: 54 },
        description: '油泥が煮えたぎる広場に面しており、アジャラカンの突進で破壊されやすい。'
      },
      {
        id: 'camp-oil-12-stream',
        name: 'エリア12 緋の細流キャンプ',
        areaNumber: 12,
        locationName: 'エリア12 緋の細流（下層）',
        safety: 'stable',
        safetyLabel: '安全',
        coordinates: { x: 74, y: 42 },
        description: '溶岩と冷却水が交わる下層の安全テラス。中層・下層の行き来がスムーズ。',
        isRecommended: true
      },
      {
        id: 'camp-oil-13-cave',
        name: 'エリア13 鍾乳洞キャンプ',
        areaNumber: 13,
        locationName: 'エリア13 鍾乳洞（下層）',
        safety: 'unstable',
        safetyLabel: '不安定',
        coordinates: { x: 30, y: 70 },
        description: '天井から油泥が滴る鍾乳洞。鉱脈が豊富。'
      },
      {
        id: 'camp-oil-14-mine',
        name: 'エリア14 鉱脈洞窟キャンプ',
        areaNumber: 14,
        locationName: 'エリア14 鉱脈洞窟（下層）',
        safety: 'stable',
        safetyLabel: '安全',
        coordinates: { x: 48, y: 78 },
        description: '古代の採掘坑道深部。太古の破片・紅蓮石の採取マラソンに最適。安全度も万全。',
        isRecommended: true
      },
      {
        id: 'camp-oil-15-low-n',
        name: 'エリア15 下層北部キャンプ',
        areaNumber: 15,
        locationName: 'エリア15 下層北部（下層）',
        safety: 'dangerous',
        safetyLabel: '要注意（危険）',
        coordinates: { x: 78, y: 76 },
        description: 'ヌ・エグドラの巣穴直前。火走り時は猛烈な熱波が吹き荒れる。'
      }
    ],
    areaNodes: [
      { areaNumber: 1, name: '谷口ベースキャンプ', x: 18, y: 15, radius: 24, elevation: 'upper', terrainType: 'volcano', terrainLabel: '出撃前線', monstersFound: ['小型獣'] },
      { areaNumber: 2, name: '峡谷岩間', x: 28, y: 22, radius: 22, elevation: 'upper', terrainType: 'volcano', terrainLabel: '上層岩道', monstersFound: ['ヒラバミ'] },
      { areaNumber: 3, name: '油泥流路', x: 38, y: 18, radius: 22, elevation: 'upper', terrainType: 'oil', terrainLabel: '油泥スロープ', monstersFound: ['ドドブランゴ'] },
      { areaNumber: 4, name: '製錬所キャットウォーク', x: 54, y: 24, radius: 24, elevation: 'upper', terrainType: 'ruins', terrainLabel: '鉄骨高所', monstersFound: ['アジャラカン'] },
      { areaNumber: 5, name: '高圧ガス噴出地', x: 26, y: 40, radius: 25, elevation: 'middle', terrainType: 'volcano', terrainLabel: 'ガス爆破ギミック', monstersFound: ['アジャラカン'] },
      { areaNumber: 6, name: '原油大溜まり', x: 44, y: 38, radius: 28, elevation: 'middle', terrainType: 'oil', terrainLabel: '引火トラップ帯', monstersFound: ['アジャラカン', 'ヌ・エグドラ'] },
      { areaNumber: 7, name: '古代パイプライン', x: 62, y: 36, radius: 24, elevation: 'middle', terrainType: 'ruins', terrainLabel: '製錬所中層', monstersFound: ['ヒラバミ'] },
      { areaNumber: 8, name: '製錬炉メインバルブ', x: 44, y: 50, radius: 26, elevation: 'middle', terrainType: 'ruins', terrainLabel: '放水冷却ギミック', monstersFound: ['ヌ・エグドラ'] },
      { areaNumber: 9, name: '煮沸油田', x: 64, y: 52, radius: 26, elevation: 'middle', terrainType: 'oil', terrainLabel: '高温油泥広場', monstersFound: ['アジャラカン'] },
      { areaNumber: 10, name: '溶岩滝', x: 80, y: 30, radius: 25, elevation: 'middle', terrainType: 'volcano', terrainLabel: 'マグマ流入口', monstersFound: ['ドドブランゴ'] },
      { areaNumber: 11, name: '下層縦穴', x: 32, y: 58, radius: 22, elevation: 'lower', terrainType: 'cave', terrainLabel: '竪穴連絡路', monstersFound: ['鉱物'] },
      { areaNumber: 12, name: '緋の細流', x: 74, y: 44, radius: 24, elevation: 'lower', terrainType: 'water', terrainLabel: '地下湧水テラス', monstersFound: ['特産品'] },
      { areaNumber: 13, name: '油泥鍾乳洞', x: 30, y: 72, radius: 25, elevation: 'lower', terrainType: 'cave', terrainLabel: '滴下洞窟', monstersFound: ['ヒラバミ'] },
      { areaNumber: 14, name: '古代採掘坑道', x: 50, y: 78, radius: 28, elevation: 'lower', terrainType: 'ruins', terrainLabel: '太古の破片最高峰', monstersFound: ['アーティア素材'] },
      { areaNumber: 15, name: '黒炎前庭', x: 76, y: 74, radius: 26, elevation: 'lower', terrainType: 'volcano', terrainLabel: '高温焦土', monstersFound: ['ヌ・エグドラ'] },
      { areaNumber: 16, name: '黒炎火口コア', x: 86, y: 84, radius: 28, elevation: 'lower', terrainType: 'volcano', terrainLabel: '頂点捕食者巣穴', monstersFound: ['黒炎ヌ・エグドラ（寝床）'] }
    ],
    connections: [
      { from: 1, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 4 }, { from: 2, to: 5 },
      { from: 3, to: 4 }, { from: 3, to: 6 },
      { from: 4, to: 7 }, { from: 4, to: 10 },
      { from: 5, to: 6 }, { from: 5, to: 11 },
      { from: 6, to: 7 }, { from: 6, to: 8 },
      { from: 7, to: 9 }, { from: 7, to: 10 },
      { from: 8, to: 9 }, { from: 8, to: 14 },
      { from: 9, to: 12 }, { from: 9, to: 15 },
      { from: 10, to: 12 },
      { from: 11, to: 13 }, { from: 11, to: 14 },
      { from: 12, to: 15 },
      { from: 13, to: 14 },
      { from: 14, to: 15 },
      { from: 15, to: 16 }
    ],
    environmentalGimmicks: [
      {
        name: '原油溜まり引火大爆発',
        area: 6,
        effect: '火花石や着火弾で油泥に引火。広範囲に数千の爆裂ダメージを与え、モンスターの油泥纏いを焼き払う。',
        howToTrigger: 'モンスターが原油池に入った瞬間にスリンガー着火弾を発射'
      },
      {
        name: '製錬プラント冷却水放水バルブ',
        area: 8,
        effect: '高圧の冷却水を放水し、アジャラカンやヌ・エグドラの黒炎・赤熱状態を強制冷却して弱体化させる。',
        howToTrigger: 'フックスリンガーでプラント上部の大型バルブを巻き取る'
      }
    ],
    gatheringHotspots: [
      {
        category: '太古の破片・アーティア素材',
        area: 14,
        items: ['太古の破片', '精錬原油石', '紅蓮石'],
        tips: 'エリア14古代採掘坑道の最奥壁面。'
      }
    ],
    areas: []
  },

  // ==========================================
  // 4. 竜都・禁足地（Wyveria / 禁足地）
  // ==========================================
  {
    id: 'forbidden-area',
    name: '竜都・禁足地',
    nameEn: 'Wyverian Sacred Area',
    description: '調査隊が最後に到達する、失われた古代竜人の超巨大都市遺構。白い竜乳結晶に覆われ、本作のラスボス「白熾龍ゾ・シア」および「鎖刃竜アルシュベルド」が激突する聖域。',
    maxCampCount: 3,
    availableLayers: [
      { id: 'all', name: '全層統合マップ' }
    ],
    mapImages: {
      all: 'images/maps/wyveria_forbidden.png'
    },
    climates: {
      barren: {
        name: '荒廃期（静寂の白都）',
        description: '結晶の光が弱まり、冷たい風が廃墟を吹き抜ける。アルシュベルドが鎖刃を研ぐ。',
        activeMonsters: ['鎖刃竜アルシュベルド', 'ジン・ダハド'],
        environmentalHazard: '結晶反射による視界減退'
      },
      anomaly: {
        name: '異常気象【白熾の嵐】',
        description: '天が純白に輝き、大気中の竜乳エネルギーが結晶化して降り注ぐ超常現象。神話の白熾龍ゾ・シアが顕現。',
        activeMonsters: ['白熾龍ゾ・シア（ラスボス・造竜種）', 'アルシュベルド（狂奔）'],
        environmentalHazard: '竜乳スリップダメージ、白熾爆裂波',
        specialGimmick: '古代の竜乳制御共鳴塔をフックスリンガーで起動し、ゾ・シアの白熾結晶アーマーを強制剥離'
      },
      abundant: {
        name: '豊穣期（神気の共鳴）',
        description: 'ゾ・シア討伐後に訪れる、純粋な竜乳の奇跡。神気錬金に必要な至高の触媒が採取可能。',
        activeMonsters: ['アルシュベルド'],
        environmentalHazard: 'なし（神聖調和）',
        specialGathering: '「白熾の竜乳石」「神聖原珠」「超古代のコア破片」'
      }
    },
    officialCamps: [
      {
        id: 'camp-fa-1-gate',
        name: '竜都関門ベースキャンプ',
        areaNumber: 1,
        locationName: 'エリア1 竜都関門',
        safety: 'stable',
        safetyLabel: '安全',
        coordinates: { x: 50, y: 15 },
        description: '白熾龍討伐隊の最終前線本陣。万全の補給設備が完備。',
        isRecommended: true
      },
      {
        id: 'camp-fa-4-corridor',
        name: 'エリア4 回廊階段簡易キャンプ',
        areaNumber: 4,
        locationName: 'エリア4 回廊階段',
        safety: 'stable',
        safetyLabel: '安全',
        coordinates: { x: 38, y: 44 },
        description: '神殿回廊の中腹。至聖玉座へのショートカット拠点。',
        isRecommended: true
      },
      {
        id: 'camp-fa-6-sanctum',
        name: 'エリア6 祭壇前線簡易キャンプ',
        areaNumber: 6,
        locationName: 'エリア6 祭壇前線',
        safety: 'dangerous',
        safetyLabel: '要注意（危険）',
        coordinates: { x: 62, y: 60 },
        description: 'ゾ・シアの神域直前。白熾の嵐時は結晶破片が降り注ぎ極めて危険。'
      }
    ],
    areaNodes: [
      { areaNumber: 1, name: '竜都関門', x: 50, y: 14, radius: 26, elevation: 'all', terrainType: 'ruins', terrainLabel: '本陣出撃口', monstersFound: ['調査隊'] },
      { areaNumber: 2, name: '白亜の外郭通り', x: 34, y: 28, radius: 24, elevation: 'all', terrainType: 'ruins', terrainLabel: '大理石崩落路', monstersFound: ['ジン・ダハド'] },
      { areaNumber: 3, name: '竜乳結晶クレーター', x: 66, y: 28, radius: 24, elevation: 'all', terrainType: 'ruins', terrainLabel: '結晶鉱脈', monstersFound: ['太古の破片'] },
      { areaNumber: 4, name: '共鳴回廊', x: 38, y: 46, radius: 25, elevation: 'all', terrainType: 'ruins', terrainLabel: '古代共鳴塔', monstersFound: ['アルシュベルド'] },
      { areaNumber: 5, name: '至聖階段', x: 58, y: 48, radius: 25, elevation: 'all', terrainType: 'ruins', terrainLabel: '白熾エネルギー流路', monstersFound: ['アルシュベルド'] },
      { areaNumber: 6, name: '白熾の祭壇', x: 44, y: 68, radius: 28, elevation: 'all', terrainType: 'ruins', terrainLabel: 'ゾ・シア第一形態', monstersFound: ['白熾龍ゾ・シア'] },
      { areaNumber: 7, name: '至聖玉座', x: 54, y: 84, radius: 30, elevation: 'all', terrainType: 'ruins', terrainLabel: '最終決戦神域', monstersFound: ['白熾龍ゾ・シア（真形態）'] }
    ],
    connections: [
      { from: 1, to: 2 }, { from: 1, to: 3 },
      { from: 2, to: 4 }, { from: 3, to: 5 },
      { from: 4, to: 5 }, { from: 4, to: 6 },
      { from: 5, to: 6 },
      { from: 6, to: 7 }
    ],
    environmentalGimmicks: [
      {
        name: '超古代・竜乳共鳴塔',
        area: 4,
        effect: 'フックスリンガーで励起させると大気の白熾エネルギーを共鳴破壊。ゾ・シアの纏う白熾結晶アーマーを剥離し特大隙を作る。',
        howToTrigger: 'ゾ・シアが白熾充填状態になった際、塔のコアにスリンガー弾を撃つ'
      }
    ],
    gatheringHotspots: [
      {
        category: '太古の破片・アーティア素材',
        area: 3,
        items: ['超古代のコア破片', '白熾の竜乳石', '神聖原珠'],
        tips: 'エリア3の巨大クレーター内部。ゲーム内最高純度のアーティア錬金素材。'
      }
    ],
    areas: []
  }
];

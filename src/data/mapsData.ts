import { FieldMapData } from '../types';

export const fieldsMapData: FieldMapData[] = [
  // ==========================================
  // 1. 隔ての砂原（Windward Plains）
  // ==========================================
  {
    id: 'windward-plains',
    name: '隔ての砂原',
    nameEn: 'Windward Plains',
    description: '広大な砂漠、砂岩の洞窟、緑豊かなオアシスが混在する荒野。過酷な「砂嵐と激雷」の異常気象時には、生態系の頂点「雷迅竜レ・ダウ」が空を舞い、落雷が大地をガラス化させる。',
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
        activeMonsters: ['雷迅竜レ・ダウ（頂点捕食者）', 'ドシャグマ（ボス個体）'],
        environmentalHazard: 'ランダム落雷（当たると即死級雷属性ダメージ＋麻痺）',
        specialGimmick: '「避雷針の岩柱」を攻撃してモンスターへ落雷を誘導し、確定大ダウン＆角破壊を狙える'
      },
      abundant: {
        name: '豊穣期（オアシス開花）',
        description: '嵐が去り、オアシス周辺に一斉に花が咲き誇る恵みの時期。セクレトでの移動が快適になり、レア環境生物も多数出現。',
        activeMonsters: ['ケマトリス', 'バーラハーラ', 'プケプケ'],
        specialGathering: '「夜咲きオアシス花」「黄金砂金」「巨大種の実」の採取数が2倍'
      }
    },
    baseCamps: [
      {
        name: '南西ベースキャンプ',
        area: 1,
        unlockRequirement: '初期解放（調査隊本陣）',
        description: '武器変更・食事・アイテム補充が可能な最大の拠点。砂原全域へのセクレト出発点。'
      },
      {
        name: 'オアシス北・簡易キャンプ',
        area: 7,
        unlockRequirement: '周辺の小型モンスターを討伐し安全確保',
        description: 'オアシス地帯と砂丘の境界に位置する絶好のファストトラベル中継拠点。'
      },
      {
        name: '砂岩洞窟・簡易キャンプ',
        area: 12,
        unlockRequirement: '崩落岩をフックスリンガーで開通後、設営',
        description: 'レ・ダウの地下巣穴や古代遺構発掘エリアへ直通する超重要キャンプ。'
      }
    ],
    environmentalGimmicks: [
      {
        name: '避雷針の尖塔岩',
        area: 9,
        effect: 'モンスターを岩柱付近におびき寄せ、スリンガー弾を撃つと落雷が誘爆。周囲に数千の特大ダメージ＋確定ダウン。',
        howToTrigger: '異常気象時にスリンガー閃光弾や石ころを岩頂部に照射'
      },
      {
        name: '底なし流砂トラップ',
        area: 5,
        effect: '地表の砂地を刺激すると巨大流砂が発生。ドシャグマやバーラハーラを約15秒間完全拘束。',
        howToTrigger: 'オトモの誘導、または大タル爆弾・音爆弾を中央の薄い砂層に投擲'
      },
      {
        name: '崩落鍾乳岩',
        area: 13,
        effect: '頭上の巨大な鍾乳石を落とし、直撃した部位に大ダメージ＋傷口を強制露出させる。',
        howToTrigger: 'フックスリンガーで岩の根元を引っ張る'
      }
    ],
    gatheringHotspots: [
      {
        category: '太古の破片・アーティア素材',
        area: 12,
        items: ['太古の破片', 'さびた破片', '歪んだ結晶'],
        tips: '砂岩洞窟の最奥部にある古代遺構の壁面発掘ポイント。アーティア防具の必須素材。'
      },
      {
        category: '鉱石・結晶',
        area: 8,
        items: ['ノヴァクリスタル', 'ドラグライト鉱石', '雷晶石'],
        tips: 'レ・ダウの放電によってガラス化した青白く光る鉱脈から高確率で採掘可能。'
      },
      {
        category: 'スリンガー弾・環境生物',
        area: 3,
        items: ['ツブテ弾', 'ヒカリゴケ', 'ハジケ結晶', 'フンコロガシ'],
        tips: '抜刀スリンガー立ち回りに欠かせない閃光・怯み弾の補給ポイント。'
      }
    ],
    areas: [
      {
        areaNumber: 1,
        name: '本陣前サバンナ',
        description: 'ベースキャンプを出てすぐの低木地帯。小型草食竜が多く、セクレト騎乗の練習に最適。',
        monstersFound: ['ケマトリス', 'アプトノス群れ'],
        features: ['ベースキャンプ', '安全な採取道']
      },
      {
        areaNumber: 5,
        name: '大砂丘・流砂盆地',
        description: '見渡す限りの砂漠。地下にバーラハーラが潜伏しており、突然足元から奇襲を受ける。',
        monstersFound: ['バーラハーラ', 'ドシャグマ'],
        features: ['流砂トラップ', 'セクレト滑走エリア']
      },
      {
        areaNumber: 7,
        name: '清流のオアシス',
        description: '砂漠に突如現れる水と樹木のオアシス。モンスターの給水ポイントであり交戦頻度が高い。',
        monstersFound: ['チャタカブラ', 'プケプケ'],
        features: ['簡易キャンプ', '回復ミツムシ群生']
      },
      {
        areaNumber: 9,
        name: '雷鳴の尖塔群',
        description: '砂嵐時に無数の落雷が集まる岩峰地帯。レ・ダウの最優先巡回ルート。',
        monstersFound: ['雷迅竜レ・ダウ'],
        features: ['避雷針ギミック', '雷晶石鉱脈']
      },
      {
        areaNumber: 12,
        name: '地下古代砂岩洞窟',
        description: '古代文明の遺構が眠る薄暗い地下大空洞。アーティア防具の発掘品が密集。',
        monstersFound: ['ドシャグマ（ボス）', 'レ・ダウ（休息時）'],
        features: ['簡易キャンプ候補地', '太古の破片発掘地点']
      }
    ],
    mapPins: [
      {
        id: 'pin-camp-1',
        type: 'camp',
        typeLabel: 'ベースキャンプ',
        areaNumber: 1,
        name: '南西ベースキャンプ',
        description: '本陣。食事・装備変更・セクレト待機所。',
        coordinates: { x: 18, y: 78 }
      },
      {
        id: 'pin-camp-7',
        type: 'camp',
        typeLabel: '簡易キャンプ',
        areaNumber: 7,
        name: 'オアシス簡易キャンプ',
        description: '水辺へのファストトラベル拠点。',
        coordinates: { x: 55, y: 62 }
      },
      {
        id: 'pin-camp-12',
        type: 'camp',
        typeLabel: '簡易キャンプ',
        areaNumber: 12,
        name: '地下洞窟簡易キャンプ',
        description: '古代遺構とボス巣穴直通拠点。',
        coordinates: { x: 72, y: 28 }
      },
      {
        id: 'pin-gimmick-lightning',
        type: 'gimmick',
        typeLabel: '環境罠（落雷）',
        areaNumber: 9,
        name: '避雷針の尖塔',
        description: 'スリンガー弾を撃つとレ・ダウに落雷を誘導し確定ダウン。',
        coordinates: { x: 68, y: 48 },
        climateCondition: 'anomaly'
      },
      {
        id: 'pin-gimmick-quicksand',
        type: 'gimmick',
        typeLabel: '環境罠（流砂）',
        areaNumber: 5,
        name: '底なし流砂盆地',
        description: '大型モンスターを約15秒間沈めて拘束。',
        coordinates: { x: 38, y: 52 }
      },
      {
        id: 'pin-gather-artian',
        type: 'gathering',
        typeLabel: 'アーティア発掘',
        areaNumber: 12,
        name: '古代文明発掘壁',
        description: '「太古の破片」「さびた破片」が採れる最高峰ポイント。',
        coordinates: { x: 80, y: 22 },
        gatheringItems: ['太古の破片', '歪んだ結晶']
      },
      {
        id: 'pin-nest-rey',
        type: 'nest',
        typeLabel: 'ボス巣穴',
        areaNumber: 13,
        name: '雷迅竜の寝床',
        description: '瀕死のレ・ダウが眠る高台。捕獲用麻痺罠設置のベストポイント。',
        coordinates: { x: 85, y: 35 }
      }
    ]
  },

  // ==========================================
  // 2. 緋の森（Scarlet Forest）
  // ==========================================
  {
    id: 'scarlet-forest',
    name: '緋の森',
    nameEn: 'Scarlet Forest',
    description: '赤い水流と巨大樹が複雑に入り組んだ湿潤帯。異常気象「豪雨・大出水」が発生すると川が一気に氾濫し、水生古生物の頂点「波衣竜ウズ・トゥナ」が森全体を泳ぎ回る。',
    climates: {
      barren: {
        name: '荒廃期（静謐期）',
        description: '水かさが減り、川床が露出する時期。陸上モンスターの行動範囲が広がり、洞窟内の探索が容易になる。',
        activeMonsters: ['刺花蜘蛛ラバラ・バリナ', 'プケプケ', 'チャタカブラ'],
        environmentalHazard: '湿地による足元の移動速度低下'
      },
      anomaly: {
        name: '異常気象【豪雨・大出水】',
        description: '森全体が濁流に飲み込まれる豪雨。水位が大幅に上昇し、水流に乗った立体的な戦闘が発生。',
        activeMonsters: ['波衣竜ウズ・トゥナ（頂点捕食者）', 'ラバラ・バリナ'],
        environmentalHazard: '激流による流され、水属性やられによるスタミナ回復停止',
        specialGimmick: '上流の「天然ダム岩」を破壊して大津波を発生させ、ウズ・トゥナを押し流す'
      },
      abundant: {
        name: '豊穣期（緋花開花）',
        description: '水が引き、川辺に緋色の水生花が一斉に咲く。貴重な薬草やキノコが大量に自生。',
        activeMonsters: ['リオレイア', 'プケプケ'],
        specialGathering: '「緋色の霊薬草」「水生大真珠」「特産深層キノコ」'
      }
    },
    baseCamps: [
      {
        name: '森林入口ベースキャンプ',
        area: 1,
        unlockRequirement: '初期解放',
        description: '緋の森の南端に位置するキャンプ。'
      },
      {
        name: '高台巨木・簡易キャンプ',
        area: 8,
        unlockRequirement: '巨木のツタを登り設営地を発見',
        description: '中層全域を一望でき、セクレトの滑空降下で各エリアへ最速アクセス。'
      },
      {
        name: '水没古代水路・簡易キャンプ',
        area: 14,
        unlockRequirement: '水中の障害物をスリンガー爆弾で爆破開通',
        description: 'ウズ・トゥナの最深寝床へ10秒で到着できる最終決戦用拠点。'
      }
    ],
    environmentalGimmicks: [
      {
        name: '天然巨大ダムの決壊',
        area: 6,
        effect: 'ダム壁を支える倒木をスリンガーや武器攻撃で崩すと、数万トンの濁流が下流へ激流突進。巻き込まれたモンスターは即座に確定ダウン。',
        howToTrigger: 'フックスリンガーで支持木を引っ張る、または大タル爆弾で爆破'
      },
      {
        name: '粘着クモ糸の大巣罠',
        area: 4,
        effect: 'ラバラ・バリナの糸が張り巡らされたエリア。モンスターを突進させると絡まり、長時間の拘束状態に。',
        howToTrigger: 'モンスターの突進を糸の壁の手前で回避'
      }
    ],
    gatheringHotspots: [
      {
        category: '太古の破片・アーティア素材',
        area: 14,
        items: ['太古の破片', 'さびた破片', '古代の歯車'],
        tips: '水没した古代水路の底。潜水ポイント周辺に眠るアーティアパーツ。'
      },
      {
        category: '特産品・ハチミツ',
        area: 8,
        items: ['大ハチミツ', '怪力の種', '忍耐の種', '緋色の霊薬草'],
        tips: '巨木の中層テラス。回復・強化アイテムの調合素材が全フィールド中最も豊富。'
      }
    ],
    areas: [
      {
        areaNumber: 1,
        name: '緋の森南端・湿原',
        description: 'ベースキャンプ直結の穏やかな水辺。プケプケが毒エキスを吸いに現れる。',
        monstersFound: ['プケプケ'],
        features: ['ベースキャンプ']
      },
      {
        areaNumber: 4,
        name: '糸張り巨樹洞',
        description: 'ラバラ・バリナのテリトリー。天井から無数の粘着糸が垂れ下がり、視界が遮られる。',
        monstersFound: ['ラバラ・バリナ'],
        features: ['クモ糸罠']
      },
      {
        areaNumber: 6,
        name: '巨大滝・天然ダム湖',
        description: '緋の森の水源。激しい水流が渦巻き、ダム破壊ギミックが存在。',
        monstersFound: ['ウズ・トゥナ', 'チャタカブラ'],
        features: ['天然ダム決壊ギミック']
      },
      {
        areaNumber: 14,
        name: '最深部・水没神殿',
        description: 'ウズ・トゥナが波衣を纏って優雅に旋回する美しい神殿跡。',
        monstersFound: ['波衣竜ウズ・トゥナ'],
        features: ['簡易キャンプ', '太古の破片']
      }
    ],
    mapPins: [
      {
        id: 'pin-sf-camp-1',
        type: 'camp',
        typeLabel: 'ベースキャンプ',
        areaNumber: 1,
        name: '森林南ベースキャンプ',
        description: '緋の森の補給本陣。',
        coordinates: { x: 22, y: 82 }
      },
      {
        id: 'pin-sf-camp-8',
        type: 'camp',
        typeLabel: '簡易キャンプ',
        areaNumber: 8,
        name: '巨木テラス簡易キャンプ',
        description: '森全域を滑空で見渡せる高台。',
        coordinates: { x: 50, y: 45 }
      },
      {
        id: 'pin-sf-gimmick-dam',
        type: 'gimmick',
        typeLabel: '環境罠（ダム決壊）',
        areaNumber: 6,
        name: '天然ダムの支持木',
        description: '破壊すると濁流で大ダウンを奪える。',
        coordinates: { x: 42, y: 30 }
      },
      {
        id: 'pin-sf-nest-uth',
        type: 'nest',
        typeLabel: 'ボス巣穴',
        areaNumber: 14,
        name: '水没神殿コア',
        description: '波衣竜ウズ・トゥナの休息地。',
        coordinates: { x: 78, y: 20 }
      }
    ]
  },

  // ==========================================
  // 3. 油涌き谷（Oilwell Basin）
  // ==========================================
  {
    id: 'oilwell-basin',
    name: '油涌き谷',
    nameEn: 'Oilwell Basin',
    description: '地下から原油とガスが激しく噴き出す黒い渓谷地帯。古代の製錬所跡が点在し、異常気象「火走り」が発生すると油泥に引火して谷全体が火炎地獄へと化す。',
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
        activeMonsters: ['アジャラカン', 'ヒラバミ'],
        specialGathering: '「精錬古代金」「高純度原油塊」「獄焔油泥」'
      }
    },
    baseCamps: [
      {
        name: '峡谷上流ベースキャンプ',
        area: 1,
        unlockRequirement: '初期解放',
        description: '高台の安全な岩場に設営された拠点。'
      },
      {
        name: '廃製錬所・簡易キャンプ',
        area: 6,
        unlockRequirement: '油泥配管を渡り、古代炉の安全を確保',
        description: '中層の精錬所跡。アーティア素材集めの最重要ハブ。'
      },
      {
        name: '火口深層・簡易キャンプ',
        area: 11,
        unlockRequirement: '耐熱服を装備して深層ガス孔を迂回',
        description: 'ヌ・エグドラの覚醒祭壇前。クーラードリンク必須。'
      }
    ],
    environmentalGimmicks: [
      {
        name: '油泥ガス噴出孔の引火爆発',
        area: 5,
        effect: '地面のガス噴出孔にスリンガー松明弾や火炎弾を当てると、巨大な連鎖爆発が発生。周囲のモンスターに2000超の爆破大ダメージ。',
        howToTrigger: '火炎属性の攻撃または可燃スリンガー弾を噴出孔へ投擲'
      },
      {
        name: '古代精錬クレーン落石',
        area: 7,
        effect: '巨大な鉄塊クレーンを切り落とし、モンスターの頭部を叩き潰して確定スタン。',
        howToTrigger: 'ワイヤーの接続部をフックスリンガーで引き抜く'
      }
    ],
    gatheringHotspots: [
      {
        category: '太古の破片・アーティア素材',
        area: 6,
        items: ['太古の破片', '古代の歯車', '歪んだ狂竜結晶'],
        tips: '廃製錬所のコンテナ内。アーティア防具の胴・腰のキー素材が密集。'
      },
      {
        category: '鉱石・結晶',
        area: 9,
        items: ['獄焔石', '紅蓮石', 'メテオライト鉱石'],
        tips: '火走り時に赤熱する鉱脈。火属性武器の最終強化素材。'
      }
    ],
    areas: [
      {
        areaNumber: 1,
        name: '上流岩盤テラス',
        description: '油涌き谷を見渡す安全地帯。ベースキャンプ。',
        monstersFound: ['ヒラバミ'],
        features: ['ベースキャンプ']
      },
      {
        areaNumber: 5,
        name: '油泥間欠泉原',
        description: '黒い油泥が煮え立ち、絶え間なくガスが噴き出す危険地帯。',
        monstersFound: ['アジャラカン', 'ドドブランゴ'],
        features: ['ガス噴出孔爆発ギミック']
      },
      {
        areaNumber: 6,
        name: '古代製錬所プラットフォーム',
        description: '超古代文明が築いた巨大製錬施設。アーティア装備の故郷。',
        monstersFound: ['アジャラカン'],
        features: ['簡易キャンプ', '太古の破片密集地']
      },
      {
        areaNumber: 11,
        name: '最深黒炎火口',
        description: 'ヌ・エグドラが油泥の繭を作り眠る灼熱の祭壇。',
        monstersFound: ['黒炎ヌ・エグドラ'],
        features: ['ボス覚醒地', '簡易キャンプ']
      }
    ],
    mapPins: [
      {
        id: 'pin-oil-camp-1',
        type: 'camp',
        typeLabel: 'ベースキャンプ',
        areaNumber: 1,
        name: '上流ベースキャンプ',
        description: '油涌き谷の出発拠点。',
        coordinates: { x: 20, y: 75 }
      },
      {
        id: 'pin-oil-camp-6',
        type: 'camp',
        typeLabel: '簡易キャンプ',
        areaNumber: 6,
        name: '製錬所簡易キャンプ',
        description: 'アーティア発掘の拠点。',
        coordinates: { x: 52, y: 50 }
      },
      {
        id: 'pin-oil-gimmick-gas',
        type: 'gimmick',
        typeLabel: '環境罠（ガス爆破）',
        areaNumber: 5,
        name: '高圧ガス噴出孔',
        description: '引火させて大爆発ダメージを狙える。',
        coordinates: { x: 40, y: 60 }
      },
      {
        id: 'pin-oil-nest-nu',
        type: 'nest',
        typeLabel: 'ボス巣穴',
        areaNumber: 11,
        name: '黒炎火口コア',
        description: '黒炎ヌ・エグドラの根城。',
        coordinates: { x: 80, y: 25 }
      }
    ]
  },

  // ==========================================
  // 4. 竜都・禁足地（Wyverian Ruins & Forbidden Sacred Area）
  // ==========================================
  {
    id: 'forbidden-area',
    name: '竜都・禁足地',
    nameEn: 'Wyverian Sacred Area',
    description: '調査隊が最後に到達する、失われた古代竜人の超巨大都市遺構。白い竜乳結晶に覆われ、本作のラスボス「白熾龍ゾ・シア」および「鎖刃竜アルシュベルド」が激突する聖域。',
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
        specialGimmick: '古代の竜乳制御共鳴機をフックスリンガーで起動し、ゾ・シアの白熾結晶アーマーを強制剥離'
      },
      abundant: {
        name: '豊穣期（神気の共鳴）',
        description: 'ゾ・シア討伐後に訪れる、純粋な竜乳の奇跡。神気錬金に必要な至高の触媒が採取可能。',
        activeMonsters: ['アルシュベルド'],
        specialGathering: '「白熾の竜乳石」「神聖原珠」「超古代のコア破片」'
      }
    },
    baseCamps: [
      {
        name: '竜都外縁ベースキャンプ',
        area: 1,
        unlockRequirement: 'メインストーリー終盤で自動解放',
        description: '決戦前の最終補給基地。'
      },
      {
        name: '神殿回廊・簡易キャンプ',
        area: 5,
        unlockRequirement: '古代扉の認証パズルを解き設営',
        description: 'ゾ・シア決戦エリア直前のキャンプ。'
      }
    ],
    environmentalGimmicks: [
      {
        name: '古代竜乳制御共鳴塔',
        area: 7,
        effect: '塔を起動させると高周波の共鳴波が放射。ゾ・シアの白い竜乳装甲を粉砕し、超軟化肉質を露出させる。',
        howToTrigger: 'フックスリンガーで共鳴アンカーを3箇所引く'
      },
      {
        name: '古代神殿の巨石柱崩落',
        area: 3,
        effect: '巨大石柱を倒してアルシュベルドを押し潰し、鎖刃を破壊。',
        howToTrigger: '大剣の溜め斬りや爆弾で柱の亀裂を攻撃'
      }
    ],
    gatheringHotspots: [
      {
        category: '太古の破片・アーティア素材',
        area: 5,
        items: ['太古の破片', '白熾の竜乳石', '超古代のコア破片'],
        tips: '神気錬金の最高峰素材とアーティア最終強化素材の唯一の採取源。'
      }
    ],
    areas: [
      {
        areaNumber: 1,
        name: '竜都外郭回廊',
        description: '巨神像が立ち並ぶ都市の外縁部。',
        monstersFound: ['アルシュベルド'],
        features: ['ベースキャンプ']
      },
      {
        areaNumber: 5,
        name: '水晶の大講堂',
        description: '白熾の結晶柱が林立する荘厳な空間。',
        monstersFound: ['ジン・ダハド', 'アルシュベルド'],
        features: ['簡易キャンプ', '神気錬金素材']
      },
      {
        areaNumber: 7,
        name: '白熾の天頂祭壇',
        description: '白熾龍ゾ・シアが君臨する世界の終着点。',
        monstersFound: ['白熾龍ゾ・シア'],
        features: ['共鳴塔ギミック', 'ラスボス決戦地']
      }
    ],
    mapPins: [
      {
        id: 'pin-for-camp-1',
        type: 'camp',
        typeLabel: 'ベースキャンプ',
        areaNumber: 1,
        name: '竜都外縁ベースキャンプ',
        description: '最終決戦の補給基地。',
        coordinates: { x: 25, y: 75 }
      },
      {
        id: 'pin-for-camp-5',
        type: 'camp',
        typeLabel: '簡易キャンプ',
        areaNumber: 5,
        name: '神殿回廊簡易キャンプ',
        description: '祭壇直通の安全地帯。',
        coordinates: { x: 50, y: 45 }
      },
      {
        id: 'pin-for-gimmick-tower',
        type: 'gimmick',
        typeLabel: '環境罠（共鳴装置）',
        areaNumber: 7,
        name: '竜乳共鳴塔',
        description: '起動でゾ・シアの装甲を強制解除。',
        coordinates: { x: 75, y: 25 }
      },
      {
        id: 'pin-for-nest-zoh',
        type: 'nest',
        typeLabel: 'ラスボス決戦地',
        areaNumber: 7,
        name: '白熾の祭壇',
        description: '白熾龍ゾ・シアの神域。',
        coordinates: { x: 80, y: 20 }
      }
    ]
  }
];

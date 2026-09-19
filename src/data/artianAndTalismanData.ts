import { ArtianGearInfo, TalismanSystemInfo } from '../types';

export const artianGearData: ArtianGearInfo = {
  seriesName: 'アーティアシリーズ（古代文明の遺構兵装）',
  description: '失われた超古代文明の技術によって鍛え上げられたメカニカルな特異防具。防具自体の発動スキルは控えめなものの、全防具中最高峰の【Lv4・Lv3・Lv2装飾品スロット】を備え、キメラ装備の自由度を劇的に引き上げるエンドコンテンツ必須防具。',
  unlockCondition: '上位到達後、油涌き谷や禁足地での「太古の破片」「さびた破片」の発掘調査サブクエストをクリアすることで加工屋にて解放。',
  setBonus: {
    name: '古代の英知（アーティア・コア）',
    requirement: '3部位装備で発動（アーティア3部位キメラ）',
    effect: '装着した装飾品のスキル効果が1段階強化される（例：見切りLv1珠の会心率+5%が+7%に強化、またはスロットレベルの要求を1段階緩和）。'
  },
  pieces: [
    {
      part: '頭',
      name: 'アーティアヘルムα / β',
      slots: '④ ② ①',
      builtInSkills: [
        { name: 'スロット拡張', level: 1 },
        { name: '連撃', level: 1 }
      ],
      craftingMaterials: [
        { material: '太古の破片', count: 3 },
        { material: '歪んだ狂竜結晶', count: 2 },
        { material: 'ノヴァクリスタル', count: 2 }
      ],
      recommendedUse: 'Lv4装飾品スロットを頭に確保できるため、攻撃IIや達人IIなどの大型珠を積むのに最適。'
    },
    {
      part: '胴',
      name: 'アーティアメイルα / β',
      slots: '④ ③ ①',
      builtInSkills: [
        { name: '業物 / 弾丸節約', level: 2 },
        { name: '攻めの守勢', level: 1 }
      ],
      craftingMaterials: [
        { material: '太古の破片', count: 4 },
        { material: '白熾の竜乳石', count: 2 },
        { material: '重竜骨', count: 5 }
      ],
      recommendedUse: '近接・ボウガン問わず切れ味・弾持ちを劇的に改善するスロットモンスター胴。'
    },
    {
      part: '腕',
      name: 'アーティアアームα / β',
      slots: '④ ② ②',
      builtInSkills: [
        { name: '集中', level: 1 },
        { name: '体力回復量UP', level: 2 }
      ],
      craftingMaterials: [
        { material: 'さびた破片', count: 5 },
        { material: '鎖刃竜の鋭刃角', count: 2 },
        { material: '竜玉', count: 1 }
      ],
      recommendedUse: '大剣やチャージアックスなど「集中」を必要とする武器種のキメラパーツ最右翼。'
    },
    {
      part: '腰',
      name: 'アーティアコイルα / β',
      slots: '④ ④ ①',
      builtInSkills: [
        { name: '弱点特効', level: 1 },
        { name: 'ガード性能', level: 1 }
      ],
      craftingMaterials: [
        { material: '太古の破片', count: 3 },
        { material: '雷迅竜の尖角', count: 2 },
        { material: '獄焔油泥', count: 3 }
      ],
      recommendedUse: 'なんとLv4スロットが2つ空いている超破格の腰パーツ。スキルの自由度が最も高い。'
    },
    {
      part: '脚',
      name: 'アーティアグリーヴα / β',
      slots: '④ ③ ②',
      builtInSkills: [
        { name: '超会心', level: 1 },
        { name: '回避距離UP', level: 1 }
      ],
      craftingMaterials: [
        { material: '太古の破片', count: 4 },
        { material: '波衣竜の秘鱗', count: 3 },
        { material: '古龍骨', count: 3 }
      ],
      recommendedUse: '素で超会心Lv1を持ちながら④③②という驚異のスロットを持つ最強クラスの脚。'
    }
  ]
};

export const talismanSystemData: TalismanSystemInfo = {
  alchemyMethods: [
    {
      name: '【初級】水光の錬金術',
      cost: '下位モンスター素材 50pt ＋ 調査ポイント 200pt',
      unlockTiming: 'ストーリー序盤（チャプター1クリア後）',
      description: '下位の余り素材を消費して基本的なスキル（体力、耐性、ランナー等）の護石をランダム生成。',
      targetSkills: ['体力増強', '気絶耐性', '毒耐性', '防御', 'ランナー']
    },
    {
      name: '【中級】幽玄の錬金術（スキル指定錬金）',
      cost: '上位モンスター素材 150pt ＋ 錬金チケット',
      unlockTiming: '上位突入後（アルシュベルド撃破後）',
      description: '欲しいスキルを1つ指定し、一定確率で高レベルの指定スキルが付与された護石を狙い撃ち。',
      targetSkills: ['弱点特効', '見切り', '攻撃', '体術', '集中', 'ガード性能']
    },
    {
      name: '【最上位】神気の錬金術・輪廻',
      cost: '不要なレア度7〜8護石3個 ＋ ゾ・シア/古龍素材 200pt',
      unlockTiming: 'クリア後・エンドコンテンツ解放後',
      description: '第1スキル・第2スキルともに最高ランクのスキルが抽選され、スロット③②①などの「神おま」が排出される最終エンドコンテンツ。',
      targetSkills: ['超会心', '弱点特効', '連撃', '攻めの守勢', '会心撃【属性】', '弓溜め段階解放']
    }
  ],
  metaTalismans: [
    {
      name: '【痛撃・見切り神おま】',
      idealSkills: '弱点特効 Lv2 ＋ 見切り Lv2',
      slots: '③ ② ①',
      recommendedFor: '全物理・会心系武器（大剣、太刀、ハンマー、片手剣など）',
      difficultyRating: 'Sランク（排出率 約0.08%）'
    },
    {
      name: '【連撃・属性会心神おま】',
      idealSkills: '連撃 Lv2 ＋ 各属性攻撃強化 Lv3',
      slots: '④ ① ①',
      recommendedFor: '手数属性武器（片手剣、双剣、弓、チャアク）',
      difficultyRating: 'Sランク（排出率 約0.12%）'
    },
    {
      name: '【鉄壁・守勢カウンター神おま】',
      idealSkills: 'ガード性能 Lv3 ＋ 攻めの守勢 Lv2',
      slots: '③ ② ⓪',
      recommendedFor: 'ガード系武器（ランス、ガンランス、チャージアックス、片手剣）',
      difficultyRating: 'Aランク（排出率 約0.35%）'
    },
    {
      name: '【体術・スタ急ガンナー神おま】',
      idealSkills: '体術 Lv4 ＋ スタミナ急速回復 Lv2',
      slots: '③ ① ①',
      recommendedFor: '弓・双剣',
      difficultyRating: 'Aランク（排出率 約0.4%）'
    }
  ],
  limitBreakGuide: {
    title: '護石の限界突破強化（スロット拡張＆スキル値加算）',
    steps: [
      '① 禁足地や調査クエストの歴戦個体を討伐し、「大霊脈玉」「太古の宝珠」を入手。',
      '② 加工屋の「護石強化」メニューから、完成した護石を選択して限界突破を実行。',
      '③ スロットレベルが1段階昇格（例：③②⓪ → ④②①）し、防御力ボーナスが付与される。'
    ],
    tips: 'まずは幽玄錬金で「弱点特効Lv2」または「攻撃Lv3」のベース護石を引き当て、それを限界突破してスロットを④まで育てるのが最も現実的かつ最強への近道。'
  }
};

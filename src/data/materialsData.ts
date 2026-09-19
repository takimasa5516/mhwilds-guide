import { CraftableTarget } from '../types';

export const craftableTargetsData: CraftableTarget[] = [
  // ==========================================
  // 1. 大剣（Great Sword）
  // ==========================================
  {
    id: 'gs-zoh-shia',
    name: '【神大剣ゾ・シア】（大剣 / 物理・龍 / 集中特化）',
    category: 'weapon',
    categoryLabel: '大剣・物理最強',
    weaponType: 'greatsword',
    buildType: 'physical',
    buildTypeLabel: '物理・会心最強',
    requiredMaterials: [
      {
        materialId: 'zoh-horn',
        materialName: '白熾龍の神角',
        count: 4,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 65,
        dropSources: [
          { action: '部位破壊', ratePercent: 100, targetPart: '頭部角破壊（2段階）' },
          { action: '剥ぎ取り', ratePercent: 12 },
          { action: '傷口破壊', ratePercent: 18, targetPart: '頭部傷口' }
        ]
      },
      {
        materialId: 'zoh-milk-gem',
        materialName: '白熾の竜乳宝玉',
        count: 1,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 18,
        dropSources: [
          { action: '剥ぎ取り', ratePercent: 3 },
          { action: '捕獲/討伐枠', ratePercent: 5 },
          { action: '部位破壊', ratePercent: 5, targetPart: '尻尾切断' },
          { action: '傷口破壊', ratePercent: 5, targetPart: '胸部コア' }
        ]
      },
      {
        materialId: 'zoh-tail',
        materialName: '白熾龍の靭尾',
        count: 2,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 75,
        dropSources: [
          { action: '部位破壊', ratePercent: 80, targetPart: '尻尾切断' },
          { action: '剥ぎ取り', ratePercent: 15 }
        ]
      }
    ]
  },
  {
    id: 'gs-rey-dau',
    name: '【雷迅大剣レ・ダウ】（大剣 / 雷属性 / 高会心）',
    category: 'weapon',
    categoryLabel: '大剣・属性特化',
    weaponType: 'greatsword',
    buildType: 'elemental',
    buildTypeLabel: '雷属性特化',
    requiredMaterials: [
      {
        materialId: 'rey-horn',
        materialName: '雷迅竜の二股尖角',
        count: 3,
        monsterId: 'rey-dau',
        monsterName: 'レ・ダウ',
        dropRatePerHuntPercent: 80,
        dropSources: [
          { action: '部位破壊', ratePercent: 90, targetPart: '二股角破壊' },
          { action: '剥ぎ取り', ratePercent: 18 }
        ]
      },
      {
        materialId: 'rey-charge-skin',
        materialName: '雷迅竜の放電皮膜',
        count: 4,
        monsterId: 'rey-dau',
        monsterName: 'レ・ダウ',
        dropRatePerHuntPercent: 110,
        dropSources: [
          { action: '部位破壊', ratePercent: 60, targetPart: '翼膜' },
          { action: '剥ぎ取り', ratePercent: 30 }
        ]
      },
      {
        materialId: 'rey-fulgurite',
        materialName: '雷迅竜の雷晶玉',
        count: 1,
        monsterId: 'rey-dau',
        monsterName: 'レ・ダウ',
        dropRatePerHuntPercent: 16,
        dropSources: [
          { action: '剥ぎ取り', ratePercent: 3 },
          { action: '捕獲/討伐枠', ratePercent: 5 },
          { action: '部位破壊', ratePercent: 6, targetPart: '尻尾切断' }
        ]
      }
    ]
  },
  {
    id: 'gs-nightmare',
    name: '【ナイトメアブレイド】（大剣 / 睡眠特化 / 睡眠爆破）',
    category: 'weapon',
    categoryLabel: '大剣・状態異常',
    weaponType: 'greatsword',
    buildType: 'status',
    buildTypeLabel: '睡眠特化',
    requiredMaterials: [
      {
        materialId: 'dosh-coma-sac',
        materialName: '昏睡袋',
        count: 4,
        monsterId: 'doshaguma',
        monsterName: 'ドシャグマ（上位）',
        dropRatePerHuntPercent: 70,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 40 },
          { action: '剥ぎ取り', ratePercent: 20 }
        ]
      },
      {
        materialId: 'nova-crystal',
        materialName: 'ノヴァクリスタル',
        count: 3,
        monsterId: 'chatacabra',
        monsterName: 'チャタカブラ / 青鉱脈',
        dropRatePerHuntPercent: 90,
        dropSources: [
          { action: '部位破壊', ratePercent: 40, targetPart: 'チャタカブラ前脚鉱石' },
          { action: '落とし物', ratePercent: 50, targetPart: '青鉱脈採取' }
        ]
      }
    ]
  },

  // ==========================================
  // 2. 太刀（Long Sword）
  // ==========================================
  {
    id: 'ls-zoh-shia',
    name: '【神刀ゾ・シア】（太刀 / 物理・龍 / 兜割り特化）',
    category: 'weapon',
    categoryLabel: '太刀・物理最強',
    weaponType: 'longsword',
    buildType: 'physical',
    buildTypeLabel: '物理・会心最強',
    requiredMaterials: [
      {
        materialId: 'zoh-horn',
        materialName: '白熾龍の神角',
        count: 3,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 65,
        dropSources: [
          { action: '部位破壊', ratePercent: 100, targetPart: '頭部角破壊' },
          { action: '剥ぎ取り', ratePercent: 12 }
        ]
      },
      {
        materialId: 'zoh-milk-gem',
        materialName: '白熾の竜乳宝玉',
        count: 1,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 18,
        dropSources: [
          { action: '剥ぎ取り', ratePercent: 3 },
          { action: '捕獲/討伐枠', ratePercent: 5 },
          { action: '部位破壊', ratePercent: 5, targetPart: '尻尾切断' }
        ]
      },
      {
        materialId: 'zoh-wing-claw',
        materialName: '白熾龍の剛翼腕',
        count: 3,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 90,
        dropSources: [
          { action: '部位破壊', ratePercent: 70, targetPart: '両翼腕破壊' },
          { action: '剥ぎ取り', ratePercent: 20 }
        ]
      }
    ]
  },
  {
    id: 'ls-rey-dau',
    name: '【雷迅刀レ・ダウ】（太刀 / 雷属性 / 高会心）',
    category: 'weapon',
    categoryLabel: '太刀・属性特化',
    weaponType: 'longsword',
    buildType: 'elemental',
    buildTypeLabel: '雷属性特化',
    requiredMaterials: [
      {
        materialId: 'rey-horn',
        materialName: '雷迅竜の二股尖角',
        count: 3,
        monsterId: 'rey-dau',
        monsterName: 'レ・ダウ',
        dropRatePerHuntPercent: 80,
        dropSources: [
          { action: '部位破壊', ratePercent: 90, targetPart: '二股角破壊' },
          { action: '剥ぎ取り', ratePercent: 18 }
        ]
      },
      {
        materialId: 'rey-charge-skin',
        materialName: '雷迅竜の放電皮膜',
        count: 5,
        monsterId: 'rey-dau',
        monsterName: 'レ・ダウ',
        dropRatePerHuntPercent: 110,
        dropSources: [
          { action: '部位破壊', ratePercent: 60, targetPart: '翼膜' },
          { action: '捕獲/討伐枠', ratePercent: 35 }
        ]
      },
      {
        materialId: 'rey-fulgurite',
        materialName: '雷迅竜の雷晶玉',
        count: 1,
        monsterId: 'rey-dau',
        monsterName: 'レ・ダウ',
        dropRatePerHuntPercent: 16,
        dropSources: [
          { action: '剥ぎ取り', ratePercent: 3 },
          { action: '捕獲/討伐枠', ratePercent: 5 },
          { action: '部位破壊', ratePercent: 6, targetPart: '尻尾切断' }
        ]
      }
    ]
  },
  {
    id: 'ls-poison-aoi',
    name: '【飛竜刀【葵】】（太刀 / 毒属性 / 継続削り）',
    category: 'weapon',
    categoryLabel: '太刀・状態異常',
    weaponType: 'longsword',
    buildType: 'status',
    buildTypeLabel: '毒特化',
    requiredMaterials: [
      {
        materialId: 'ian-spike',
        materialName: '雌火竜の棘',
        count: 3,
        monsterId: 'rathian',
        monsterName: 'リオレイア',
        dropRatePerHuntPercent: 65,
        dropSources: [
          { action: '部位破壊', ratePercent: 70, targetPart: '背中・尻尾破壊' },
          { action: '剥ぎ取り', ratePercent: 15 }
        ]
      },
      {
        materialId: 'ian-ruby',
        materialName: '雌火竜の紅玉',
        count: 1,
        monsterId: 'rathian',
        monsterName: 'リオレイア',
        dropRatePerHuntPercent: 15,
        dropSources: [
          { action: '剥ぎ取り', ratePercent: 3 },
          { action: '捕獲/討伐枠', ratePercent: 5 },
          { action: '部位破壊', ratePercent: 5, targetPart: '尻尾切断' }
        ]
      }
    ]
  },

  // ==========================================
  // 3. 片手剣（Sword & Shield）
  // ==========================================
  {
    id: 'zoh-shia-sword',
    name: '【神剣ゾ・シア】（片手剣 / 龍属性 / Tier SS）',
    category: 'weapon',
    categoryLabel: '片手剣・最強属性',
    weaponType: 'swordandshield',
    buildType: 'elemental',
    buildTypeLabel: '龍属性Tier SS',
    requiredMaterials: [
      {
        materialId: 'zoh-horn',
        materialName: '白熾龍の神角',
        count: 3,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 65,
        dropSources: [
          { action: '部位破壊', ratePercent: 100, targetPart: '頭部角破壊（2段階）' },
          { action: '剥ぎ取り', ratePercent: 12 },
          { action: '傷口破壊', ratePercent: 18, targetPart: '頭部傷口' }
        ]
      },
      {
        materialId: 'zoh-milk-gem',
        materialName: '白熾の竜乳宝玉',
        count: 1,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 18,
        dropSources: [
          { action: '剥ぎ取り', ratePercent: 3 },
          { action: '捕獲/討伐枠', ratePercent: 5 },
          { action: '部位破壊', ratePercent: 5, targetPart: '尻尾切断' },
          { action: '傷口破壊', ratePercent: 5, targetPart: '胸部コア' }
        ]
      },
      {
        materialId: 'zoh-wing-claw',
        materialName: '白熾龍の剛翼腕',
        count: 4,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 90,
        dropSources: [
          { action: '部位破壊', ratePercent: 70, targetPart: '両翼腕破壊' },
          { action: '剥ぎ取り', ratePercent: 20 },
          { action: '捕獲/討伐枠', ratePercent: 25 }
        ]
      }
    ]
  },
  {
    id: 'uth-duna-sns',
    name: '【波紋剣ウズ・トゥナ】（片手剣 / 水属性 / 超高手数）',
    category: 'weapon',
    categoryLabel: '片手剣・水特化',
    weaponType: 'swordandshield',
    buildType: 'elemental',
    buildTypeLabel: '水属性特化',
    requiredMaterials: [
      {
        materialId: 'uth-veil-fin',
        materialName: '波衣竜の秘大ヒレ',
        count: 3,
        monsterId: 'uth-duna',
        monsterName: 'ウズ・トゥナ',
        dropRatePerHuntPercent: 70,
        dropSources: [
          { action: '部位破壊', ratePercent: 80, targetPart: '頭部ヒレ破壊' },
          { action: '剥ぎ取り', ratePercent: 15 }
        ]
      },
      {
        materialId: 'uth-water-scale',
        materialName: '波衣竜の滑水鱗',
        count: 6,
        monsterId: 'uth-duna',
        monsterName: 'ウズ・トゥナ',
        dropRatePerHuntPercent: 120,
        dropSources: [
          { action: '剥ぎ取り', ratePercent: 35 },
          { action: '捕獲/討伐枠', ratePercent: 40 },
          { action: '傷口破壊', ratePercent: 25 }
        ]
      },
      {
        materialId: 'uth-gem',
        materialName: '波衣竜の水宝玉',
        count: 1,
        monsterId: 'uth-duna',
        monsterName: 'ウズ・トゥナ',
        dropRatePerHuntPercent: 14,
        dropSources: [
          { action: '剥ぎ取り', ratePercent: 3 },
          { action: '捕獲/討伐枠', ratePercent: 5 },
          { action: '部位破壊', ratePercent: 4, targetPart: '尻尾切断' }
        ]
      }
    ]
  },
  {
    id: 'ajarakan-sns',
    name: '【赫炎剣アジャラカン】（片手剣 / 火属性 / 熱甲殻打撃）',
    category: 'weapon',
    categoryLabel: '片手剣・火特化',
    weaponType: 'swordandshield',
    buildType: 'elemental',
    buildTypeLabel: '火属性特化',
    requiredMaterials: [
      {
        materialId: 'aj-tail-shell',
        materialName: '赫猿獣の熱甲殻',
        count: 5,
        monsterId: 'ajarakan',
        monsterName: 'アジャラカン',
        dropRatePerHuntPercent: 95,
        dropSources: [
          { action: '部位破壊', ratePercent: 85, targetPart: '背中・尻尾熱甲殻' },
          { action: '剥ぎ取り', ratePercent: 25 }
        ]
      },
      {
        materialId: 'aj-flame-sac',
        materialName: '赫熱の爆炎袋',
        count: 3,
        monsterId: 'ajarakan',
        monsterName: 'アジャラカン',
        dropRatePerHuntPercent: 60,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 35 },
          { action: '部位破壊', ratePercent: 30, targetPart: '頭部破壊' }
        ]
      },
      {
        materialId: 'aj-molten-gem',
        materialName: '赫猿獣の溶岩玉',
        count: 1,
        monsterId: 'ajarakan',
        monsterName: 'アジャラカン',
        dropRatePerHuntPercent: 15,
        dropSources: [
          { action: '剥ぎ取り', ratePercent: 3 },
          { action: '捕獲/討伐枠', ratePercent: 5 },
          { action: '部位破壊', ratePercent: 5, targetPart: '腕部溶岩破壊' }
        ]
      }
    ]
  },
  {
    id: 'jin-dahad-sns',
    name: '【霜晶剣ジン・ダハド】（片手剣 / 氷属性 / 氷砕）',
    category: 'weapon',
    categoryLabel: '片手剣・氷特化',
    weaponType: 'swordandshield',
    buildType: 'elemental',
    buildTypeLabel: '氷属性特化',
    requiredMaterials: [
      {
        materialId: 'jin-frost-horn',
        materialName: '霜晶竜の氷砕角',
        count: 3,
        monsterId: 'jin-dahad',
        monsterName: 'ジン・ダハド',
        dropRatePerHuntPercent: 70,
        dropSources: [
          { action: '部位破壊', ratePercent: 80, targetPart: '頭部氷角破壊' },
          { action: '剥ぎ取り', ratePercent: 15 }
        ]
      },
      {
        materialId: 'jin-freeze-fin',
        materialName: '極冷の背鰭',
        count: 4,
        monsterId: 'jin-dahad',
        monsterName: 'ジン・ダハド',
        dropRatePerHuntPercent: 85,
        dropSources: [
          { action: '部位破壊', ratePercent: 70, targetPart: '背鰭破壊' },
          { action: '傷口破壊', ratePercent: 20 }
        ]
      },
      {
        materialId: 'jin-frost-gem',
        materialName: '霜晶竜の凍氷玉',
        count: 1,
        monsterId: 'jin-dahad',
        monsterName: 'ジン・ダハド',
        dropRatePerHuntPercent: 16,
        dropSources: [
          { action: '剥ぎ取り', ratePercent: 3 },
          { action: '捕獲/討伐枠', ratePercent: 5 },
          { action: '部位破壊', ratePercent: 5, targetPart: '尻尾切断' }
        ]
      }
    ]
  },
  {
    id: 'arkveld-sns-raw',
    name: '【剛剣アルシュベルド】（片手剣 / 物理会心100% / ジャスト守勢）',
    category: 'weapon',
    categoryLabel: '片手剣・物理最強',
    weaponType: 'swordandshield',
    buildType: 'physical',
    buildTypeLabel: '物理・会心最強',
    requiredMaterials: [
      {
        materialId: 'ark-sharp-horn',
        materialName: '鎖刃竜の鋭刃角',
        count: 4,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 75,
        dropSources: [
          { action: '部位破壊', ratePercent: 85, targetPart: '角破壊' },
          { action: '剥ぎ取り', ratePercent: 15 }
        ]
      },
      {
        materialId: 'ark-chain-blade',
        materialName: '鎖刃竜の凶刃',
        count: 5,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 85,
        dropSources: [
          { action: '部位破壊', ratePercent: 80, targetPart: '両翼刃破壊' },
          { action: '剥ぎ取り', ratePercent: 25 }
        ]
      },
      {
        materialId: 'ark-gem',
        materialName: '鎖刃竜の碧玉',
        count: 1,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 15,
        dropSources: [
          { action: '剥ぎ取り', ratePercent: 3 },
          { action: '捕獲/討伐枠', ratePercent: 5 },
          { action: '部位破壊', ratePercent: 4, targetPart: '尻尾切断' }
        ]
      }
    ]
  },
  {
    id: 'chatacabra-sns-para',
    name: '【纏蛙剣チャタカブラ】（片手剣 / 麻痺 / 広域化完全支援）',
    category: 'weapon',
    categoryLabel: '片手剣・状態異常',
    weaponType: 'swordandshield',
    buildType: 'status',
    buildTypeLabel: '麻痺・支援特化',
    requiredMaterials: [
      {
        materialId: 'chata-mucus',
        materialName: '纏蛙の粘液',
        count: 4,
        monsterId: 'chatacabra',
        monsterName: 'チャタカブラ',
        dropRatePerHuntPercent: 110,
        dropSources: [
          { action: '部位破壊', ratePercent: 80, targetPart: '舌・顎破壊' },
          { action: '剥ぎ取り', ratePercent: 35 }
        ]
      },
      {
        materialId: 'chata-claw',
        materialName: '纏蛙の剛爪',
        count: 3,
        monsterId: 'chatacabra',
        monsterName: 'チャタカブラ',
        dropRatePerHuntPercent: 85,
        dropSources: [
          { action: '部位破壊', ratePercent: 75, targetPart: '前脚破壊' },
          { action: '剥ぎ取り', ratePercent: 25 }
        ]
      },
      {
        materialId: 'para-sac',
        materialName: '強力麻痺袋',
        count: 3,
        monsterId: 'chatacabra',
        monsterName: 'チャタカブラ（上位）',
        dropRatePerHuntPercent: 70,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 45 },
          { action: '剥ぎ取り', ratePercent: 20 }
        ]
      }
    ]
  },

  // ==========================================
  // 4. 双剣（Dual Blades）
  // ==========================================
  {
    id: 'db-uth-duna',
    name: '【波紋双剣ウズ・トゥナ】（双剣 / 水属性 / 鬼人連撃）',
    category: 'weapon',
    categoryLabel: '双剣・属性特化',
    weaponType: 'duablades',
    buildType: 'elemental',
    buildTypeLabel: '水属性特化',
    requiredMaterials: [
      {
        materialId: 'uth-veil-fin',
        materialName: '波衣竜の秘大ヒレ',
        count: 4,
        monsterId: 'uth-duna',
        monsterName: 'ウズ・トゥナ',
        dropRatePerHuntPercent: 70,
        dropSources: [
          { action: '部位破壊', ratePercent: 80, targetPart: '頭部ヒレ破壊' },
          { action: '剥ぎ取り', ratePercent: 15 }
        ]
      },
      {
        materialId: 'uth-gem',
        materialName: '波衣竜の水宝玉',
        count: 1,
        monsterId: 'uth-duna',
        monsterName: 'ウズ・トゥナ',
        dropRatePerHuntPercent: 14,
        dropSources: [
          { action: '剥ぎ取り', ratePercent: 3 },
          { action: '捕獲/討伐枠', ratePercent: 5 },
          { action: '部位破壊', ratePercent: 4, targetPart: '尻尾切断' }
        ]
      }
    ]
  },
  {
    id: 'db-arkveld-raw',
    name: '【凶爪アルシュベルド】（双剣 / 物理・会心特化）',
    category: 'weapon',
    categoryLabel: '双剣・物理最強',
    weaponType: 'duablades',
    buildType: 'physical',
    buildTypeLabel: '物理・会心最強',
    requiredMaterials: [
      {
        materialId: 'ark-chain-blade',
        materialName: '鎖刃竜の凶刃',
        count: 6,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 85,
        dropSources: [
          { action: '部位破壊', ratePercent: 80, targetPart: '両翼刃破壊' }
        ]
      },
      {
        materialId: 'ark-gem',
        materialName: '鎖刃竜の碧玉',
        count: 1,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 15,
        dropSources: [
          { action: '剥ぎ取り', ratePercent: 3 },
          { action: '捕獲/討伐枠', ratePercent: 5 }
        ]
      }
    ]
  },
  {
    id: 'db-lala-barina',
    name: '【刺蜘蛛双剣ラバラ・バリナ】（双剣 / 麻痺・毒 / 多段拘束）',
    category: 'weapon',
    categoryLabel: '双剣・状態異常',
    weaponType: 'duablades',
    buildType: 'status',
    buildTypeLabel: '麻痺特化',
    requiredMaterials: [
      {
        materialId: 'lala-needle',
        materialName: '刺花蜘蛛の猛毒針',
        count: 4,
        monsterId: 'lala-barina',
        monsterName: 'ラバラ・バリナ',
        dropRatePerHuntPercent: 80,
        dropSources: [
          { action: '部位破壊', ratePercent: 85, targetPart: '腹部針破壊' },
          { action: '剥ぎ取り', ratePercent: 20 }
        ]
      },
      {
        materialId: 'lala-silk',
        materialName: '刺花蜘蛛の粘着糸',
        count: 5,
        monsterId: 'lala-barina',
        monsterName: 'ラバラ・バリナ',
        dropRatePerHuntPercent: 100,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 60 },
          { action: '落とし物', ratePercent: 30 }
        ]
      }
    ]
  },

  // ==========================================
  // 5. ハンマー（Hammer）
  // ==========================================
  {
    id: 'hammer-arkveld',
    name: '【剛槌アルシュベルド】（ハンマー / 物理打撃・スタン破壊）',
    category: 'weapon',
    categoryLabel: 'ハンマー・物理最強',
    weaponType: 'hammer',
    buildType: 'physical',
    buildTypeLabel: '物理・打撃最強',
    requiredMaterials: [
      {
        materialId: 'ark-sharp-horn',
        materialName: '鎖刃竜の鋭刃角',
        count: 4,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 75,
        dropSources: [
          { action: '部位破壊', ratePercent: 85, targetPart: '角破壊' }
        ]
      },
      {
        materialId: 'ark-gem',
        materialName: '鎖刃竜の碧玉',
        count: 1,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 15,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 5 },
          { action: '剥ぎ取り', ratePercent: 3 }
        ]
      }
    ]
  },
  {
    id: 'hammer-ajarakan',
    name: '【赫炎槌アジャラカン】（ハンマー / 火属性 / 溶岩強打）',
    category: 'weapon',
    categoryLabel: 'ハンマー・属性特化',
    weaponType: 'hammer',
    buildType: 'elemental',
    buildTypeLabel: '火属性特化',
    requiredMaterials: [
      {
        materialId: 'aj-tail-shell',
        materialName: '赫猿獣の熱甲殻',
        count: 5,
        monsterId: 'ajarakan',
        monsterName: 'アジャラカン',
        dropRatePerHuntPercent: 95,
        dropSources: [
          { action: '部位破壊', ratePercent: 85, targetPart: '尻尾熱甲殻' }
        ]
      },
      {
        materialId: 'aj-molten-gem',
        materialName: '赫猿獣の溶岩玉',
        count: 1,
        monsterId: 'ajarakan',
        monsterName: 'アジャラカン',
        dropRatePerHuntPercent: 15,
        dropSources: [
          { action: '部位破壊', ratePercent: 5 },
          { action: '剥ぎ取り', ratePercent: 3 }
        ]
      }
    ]
  },

  // ==========================================
  // 6. 狩猟笛（Hunting Horn）
  // ==========================================
  {
    id: 'hh-zoh-shia',
    name: '【神笛ゾ・シア】（狩猟笛 / 攻撃UP旋律・響音波特化）',
    category: 'weapon',
    categoryLabel: '狩猟笛・物理支援最強',
    weaponType: 'huntinghorn',
    buildType: 'physical',
    buildTypeLabel: '旋律支援・攻撃UP',
    requiredMaterials: [
      {
        materialId: 'zoh-horn',
        materialName: '白熾龍の神角',
        count: 3,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 65,
        dropSources: [
          { action: '部位破壊', ratePercent: 100, targetPart: '頭部角破壊' }
        ]
      },
      {
        materialId: 'zoh-milk-gem',
        materialName: '白熾の竜乳宝玉',
        count: 1,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 18,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 5 },
          { action: '剥ぎ取り', ratePercent: 3 }
        ]
      }
    ]
  },
  {
    id: 'hh-balahara-para',
    name: '【沙海笛バーラハーラ】（狩猟笛 / 麻痺・スタミナ軽減旋律）',
    category: 'weapon',
    categoryLabel: '狩猟笛・状態異常',
    weaponType: 'huntinghorn',
    buildType: 'status',
    buildTypeLabel: '麻痺・快適旋律',
    requiredMaterials: [
      {
        materialId: 'bala-spiral-tooth',
        materialName: '沙海竜の螺旋牙',
        count: 4,
        monsterId: 'balahara',
        monsterName: 'バーラハーラ',
        dropRatePerHuntPercent: 80,
        dropSources: [
          { action: '部位破壊', ratePercent: 85, targetPart: '頭部螺旋牙破壊' }
        ]
      },
      {
        materialId: 'wyvern-gem',
        materialName: '竜玉',
        count: 1,
        monsterId: 'balahara',
        monsterName: 'バーラハーラ / ドシャグマ',
        dropRatePerHuntPercent: 25,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 10 }
        ]
      }
    ]
  },

  // ==========================================
  // 7. ランス（Lance）
  // ==========================================
  {
    id: 'lance-arkveld',
    name: '【剛槍アルシュベルド】（ランス / 守勢Lv3・鉄壁突進）',
    category: 'weapon',
    categoryLabel: 'ランス・物理最強',
    weaponType: 'lance',
    buildType: 'physical',
    buildTypeLabel: '守勢・物理最強',
    requiredMaterials: [
      {
        materialId: 'ark-sharp-horn',
        materialName: '鎖刃竜の鋭刃角',
        count: 4,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 75,
        dropSources: [
          { action: '部位破壊', ratePercent: 85, targetPart: '角破壊' }
        ]
      },
      {
        materialId: 'ark-chain-blade',
        materialName: '鎖刃竜の凶刃',
        count: 4,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 85,
        dropSources: [
          { action: '部位破壊', ratePercent: 80, targetPart: '両翼刃破壊' }
        ]
      }
    ]
  },
  {
    id: 'lance-nu-ugdra',
    name: '【黒炎槍ヌ・エグドラ】（ランス / 爆破属性 / 剛ガード）',
    category: 'weapon',
    categoryLabel: 'ランス・状態異常',
    weaponType: 'lance',
    buildType: 'status',
    buildTypeLabel: '爆破特化',
    requiredMaterials: [
      {
        materialId: 'nu-black-flame-shell',
        materialName: '黒炎油泥殻',
        count: 5,
        monsterId: 'nu-ugdra',
        monsterName: 'ヌ・エグドラ',
        dropRatePerHuntPercent: 85,
        dropSources: [
          { action: '部位破壊', ratePercent: 80, targetPart: '泥殻破壊' }
        ]
      },
      {
        materialId: 'nu-core-gem',
        materialName: '黒熱の油神玉',
        count: 1,
        monsterId: 'nu-ugdra',
        monsterName: 'ヌ・エグドラ',
        dropRatePerHuntPercent: 15,
        dropSources: [
          { action: '剥ぎ取り', ratePercent: 3 },
          { action: '捕獲/討伐枠', ratePercent: 5 }
        ]
      }
    ]
  },

  // ==========================================
  // 8. ガンランス（Gunlance）
  // ==========================================
  {
    id: 'gl-zoh-shia',
    name: '【神銃槍ゾ・シア】（ガンランス / 放射型Lv8・竜杭フルバースト）',
    category: 'weapon',
    categoryLabel: 'ガンランス・砲撃最強',
    weaponType: 'gunlance',
    buildType: 'physical',
    buildTypeLabel: '放射型Lv8最強',
    requiredMaterials: [
      {
        materialId: 'zoh-horn',
        materialName: '白熾龍の神角',
        count: 4,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 65,
        dropSources: [
          { action: '部位破壊', ratePercent: 100, targetPart: '頭部角破壊' }
        ]
      },
      {
        materialId: 'zoh-milk-gem',
        materialName: '白熾の竜乳宝玉',
        count: 1,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 18,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 5 },
          { action: '剥ぎ取り', ratePercent: 3 }
        ]
      }
    ]
  },
  {
    id: 'gl-pukei-poison',
    name: '【毒妖銃槍プケプケ】（ガンランス / 拡散型Lv8・毒散布砲）',
    category: 'weapon',
    categoryLabel: 'ガンランス・状態異常',
    weaponType: 'gunlance',
    buildType: 'status',
    buildTypeLabel: '拡散型毒特化',
    requiredMaterials: [
      {
        materialId: 'pukei-sac',
        materialName: '毒妖鳥の極大毒袋',
        count: 4,
        monsterId: 'pukei-pukei',
        monsterName: 'プケプケ',
        dropRatePerHuntPercent: 90,
        dropSources: [
          { action: '部位破壊', ratePercent: 85, targetPart: '頭部・舌破壊' }
        ]
      }
    ]
  },

  // ==========================================
  // 9. スラッシュアックス（Switch Axe）
  // ==========================================
  {
    id: 'sa-zoh-shia',
    name: '【神斧ゾ・シア】（スラアク / 強撃ビン・零距離属性解放）',
    category: 'weapon',
    categoryLabel: 'スラアク・物理最強',
    weaponType: 'switchaxe',
    buildType: 'physical',
    buildTypeLabel: '強撃ビン最強',
    requiredMaterials: [
      {
        materialId: 'zoh-horn',
        materialName: '白熾龍の神角',
        count: 3,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 65,
        dropSources: [
          { action: '部位破壊', ratePercent: 100 }
        ]
      },
      {
        materialId: 'zoh-milk-gem',
        materialName: '白熾の竜乳宝玉',
        count: 1,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 18,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 5 }
        ]
      }
    ]
  },
  {
    id: 'sa-rey-dau',
    name: '【雷迅斧レ・ダウ】（スラアク / 強属性ビン・高出力雷斬）',
    category: 'weapon',
    categoryLabel: 'スラアク・属性特化',
    weaponType: 'switchaxe',
    buildType: 'elemental',
    buildTypeLabel: '強属性雷特化',
    requiredMaterials: [
      {
        materialId: 'rey-horn',
        materialName: '雷迅竜の二股尖角',
        count: 3,
        monsterId: 'rey-dau',
        monsterName: 'レ・ダウ',
        dropRatePerHuntPercent: 80,
        dropSources: [
          { action: '部位破壊', ratePercent: 90 }
        ]
      },
      {
        materialId: 'rey-fulgurite',
        materialName: '雷迅竜の雷晶玉',
        count: 1,
        monsterId: 'rey-dau',
        monsterName: 'レ・ダウ',
        dropRatePerHuntPercent: 16,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 5 }
        ]
      }
    ]
  },

  // ==========================================
  // 10. チャージアックス（Charge Blade）
  // ==========================================
  {
    id: 'cb-arkveld',
    name: '【剛盾斧アルシュベルド】（チャアク / 榴弾ビン・超高出力解放）',
    category: 'weapon',
    categoryLabel: 'チャアク・物理最強',
    weaponType: 'chargeblade',
    buildType: 'physical',
    buildTypeLabel: '榴弾ビン最強',
    requiredMaterials: [
      {
        materialId: 'ark-sharp-horn',
        materialName: '鎖刃竜の鋭刃角',
        count: 4,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 75,
        dropSources: [
          { action: '部位破壊', ratePercent: 85, targetPart: '角破壊' }
        ]
      },
      {
        materialId: 'ark-gem',
        materialName: '鎖刃竜の碧玉',
        count: 1,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 15,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 5 }
        ]
      }
    ]
  },
  {
    id: 'cb-uth-duna',
    name: '【波紋盾斧ウズ・トゥナ】（チャアク / 強属性水・超高出力特化）',
    category: 'weapon',
    categoryLabel: 'チャアク・属性特化',
    weaponType: 'chargeblade',
    buildType: 'elemental',
    buildTypeLabel: '強属性水特化',
    requiredMaterials: [
      {
        materialId: 'uth-veil-fin',
        materialName: '波衣竜の秘大ヒレ',
        count: 4,
        monsterId: 'uth-duna',
        monsterName: 'ウズ・トゥナ',
        dropRatePerHuntPercent: 70,
        dropSources: [
          { action: '部位破壊', ratePercent: 80 }
        ]
      },
      {
        materialId: 'uth-gem',
        materialName: '波衣竜の水宝玉',
        count: 1,
        monsterId: 'uth-duna',
        monsterName: 'ウズ・トゥナ',
        dropRatePerHuntPercent: 14,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 5 }
        ]
      }
    ]
  },

  // ==========================================
  // 11. 操虫棍（Insect Glaive）
  // ==========================================
  {
    id: 'ig-zoh-shia',
    name: '【神棍ゾ・シア】（操虫棍 / 猟虫Lv8・空中飛燕乱舞）',
    category: 'weapon',
    categoryLabel: '操虫棍・物理最強',
    weaponType: 'insectglaive',
    buildType: 'physical',
    buildTypeLabel: '物理・空中最強',
    requiredMaterials: [
      {
        materialId: 'zoh-horn',
        materialName: '白熾龍の神角',
        count: 3,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 65,
        dropSources: [
          { action: '部位破壊', ratePercent: 100 }
        ]
      },
      {
        materialId: 'zoh-milk-gem',
        materialName: '白熾の竜乳宝玉',
        count: 1,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 18,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 5 }
        ]
      }
    ]
  },
  {
    id: 'ig-jin-dahad',
    name: '【霜晶棍ジン・ダハド】（操虫棍 / 氷属性 / 氷急襲斬）',
    category: 'weapon',
    categoryLabel: '操虫棍・属性特化',
    weaponType: 'insectglaive',
    buildType: 'elemental',
    buildTypeLabel: '氷属性特化',
    requiredMaterials: [
      {
        materialId: 'jin-frost-horn',
        materialName: '霜晶竜の氷砕角',
        count: 3,
        monsterId: 'jin-dahad',
        monsterName: 'ジン・ダハド',
        dropRatePerHuntPercent: 70,
        dropSources: [
          { action: '部位破壊', ratePercent: 80 }
        ]
      },
      {
        materialId: 'jin-frost-gem',
        materialName: '霜晶竜の凍氷玉',
        count: 1,
        monsterId: 'jin-dahad',
        monsterName: 'ジン・ダハド',
        dropRatePerHuntPercent: 16,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 5 }
        ]
      }
    ]
  },

  // ==========================================
  // 12. ライトボウガン（Light Bowgun）
  // ==========================================
  {
    id: 'lbg-arkveld',
    name: '【剛弩アルシュベルド】（ライト / 通常弾・貫通弾Lv2速射）',
    category: 'weapon',
    categoryLabel: 'ライト・物理速射最強',
    weaponType: 'lightbowgun',
    buildType: 'physical',
    buildTypeLabel: '通常・貫通速射最強',
    requiredMaterials: [
      {
        materialId: 'ark-chain-blade',
        materialName: '鎖刃竜の凶刃',
        count: 5,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 85,
        dropSources: [
          { action: '部位破壊', ratePercent: 80 }
        ]
      },
      {
        materialId: 'ark-gem',
        materialName: '鎖刃竜の碧玉',
        count: 1,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 15,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 5 }
        ]
      }
    ]
  },
  {
    id: 'lbg-rey-dau',
    name: '【雷迅弩レ・ダウ】（ライト / 貫通電撃弾速射・属性支配）',
    category: 'weapon',
    categoryLabel: 'ライト・属性弾速射',
    weaponType: 'lightbowgun',
    buildType: 'elemental',
    buildTypeLabel: '貫通電撃速射',
    requiredMaterials: [
      {
        materialId: 'rey-horn',
        materialName: '雷迅竜の二股尖角',
        count: 3,
        monsterId: 'rey-dau',
        monsterName: 'レ・ダウ',
        dropRatePerHuntPercent: 80,
        dropSources: [
          { action: '部位破壊', ratePercent: 90 }
        ]
      },
      {
        materialId: 'rey-fulgurite',
        materialName: '雷迅竜の雷晶玉',
        count: 1,
        monsterId: 'rey-dau',
        monsterName: 'レ・ダウ',
        dropRatePerHuntPercent: 16,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 5 }
        ]
      }
    ]
  },

  // ==========================================
  // 13. ヘビィボウガン（Heavy Bowgun）
  // ==========================================
  {
    id: 'hbg-arkveld',
    name: '【剛重砲アルシュベルド】（ヘビィ / 散弾Lv3・竜撃砲シールド）',
    category: 'weapon',
    categoryLabel: 'ヘビィ・物理重砲最強',
    weaponType: 'heavybowgun',
    buildType: 'physical',
    buildTypeLabel: '散弾・竜撃砲最強',
    requiredMaterials: [
      {
        materialId: 'ark-sharp-horn',
        materialName: '鎖刃竜の鋭刃角',
        count: 4,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 75,
        dropSources: [
          { action: '部位破壊', ratePercent: 85 }
        ]
      },
      {
        materialId: 'ark-gem',
        materialName: '鎖刃竜の碧玉',
        count: 1,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 15,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 5 }
        ]
      }
    ]
  },
  {
    id: 'hbg-uth-duna',
    name: '【波紋重砲ウズ・トゥナ】（ヘビィ / 貫通水冷弾圧縮重砲）',
    category: 'weapon',
    categoryLabel: 'ヘビィ・属性重砲',
    weaponType: 'heavybowgun',
    buildType: 'elemental',
    buildTypeLabel: '貫通水冷弾特化',
    requiredMaterials: [
      {
        materialId: 'uth-veil-fin',
        materialName: '波衣竜の秘大ヒレ',
        count: 4,
        monsterId: 'uth-duna',
        monsterName: 'ウズ・トゥナ',
        dropRatePerHuntPercent: 70,
        dropSources: [
          { action: '部位破壊', ratePercent: 80 }
        ]
      },
      {
        materialId: 'uth-gem',
        materialName: '波衣竜の水宝玉',
        count: 1,
        monsterId: 'uth-duna',
        monsterName: 'ウズ・トゥナ',
        dropRatePerHuntPercent: 14,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 5 }
        ]
      }
    ]
  },

  // ==========================================
  // 14. 弓（Bow）
  // ==========================================
  {
    id: 'bow-rey-dau',
    name: '【雷迅弓レ・ダウ】（弓 / 雷属性・連射剛射会心特化）',
    category: 'weapon',
    categoryLabel: '弓・雷属性特化',
    weaponType: 'bow',
    buildType: 'elemental',
    buildTypeLabel: '雷連射特化',
    requiredMaterials: [
      {
        materialId: 'rey-horn',
        materialName: '雷迅竜の二股尖角',
        count: 3,
        monsterId: 'rey-dau',
        monsterName: 'レ・ダウ',
        dropRatePerHuntPercent: 80,
        dropSources: [
          { action: '部位破壊', ratePercent: 90 }
        ]
      },
      {
        materialId: 'rey-fulgurite',
        materialName: '雷迅竜の雷晶玉',
        count: 1,
        monsterId: 'rey-dau',
        monsterName: 'レ・ダウ',
        dropRatePerHuntPercent: 16,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 5 }
        ]
      }
    ]
  },
  {
    id: 'bow-uth-duna',
    name: '【波紋弓ウズ・トゥナ】（弓 / 水属性・拡散剛射特化）',
    category: 'weapon',
    categoryLabel: '弓・水属性特化',
    weaponType: 'bow',
    buildType: 'elemental',
    buildTypeLabel: '水拡散特化',
    requiredMaterials: [
      {
        materialId: 'uth-veil-fin',
        materialName: '波衣竜の秘大ヒレ',
        count: 3,
        monsterId: 'uth-duna',
        monsterName: 'ウズ・トゥナ',
        dropRatePerHuntPercent: 70,
        dropSources: [
          { action: '部位破壊', ratePercent: 80 }
        ]
      },
      {
        materialId: 'uth-gem',
        materialName: '波衣竜の水宝玉',
        count: 1,
        monsterId: 'uth-duna',
        monsterName: 'ウズ・トゥナ',
        dropRatePerHuntPercent: 14,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 5 }
        ]
      }
    ]
  },
  {
    id: 'bow-arkveld-raw',
    name: '【剛弓アルシュベルド】（弓 / 強撃ビン・貫通矢会心100%）',
    category: 'weapon',
    categoryLabel: '弓・物理最強',
    weaponType: 'bow',
    buildType: 'physical',
    buildTypeLabel: '強撃物理最強',
    requiredMaterials: [
      {
        materialId: 'ark-sharp-horn',
        materialName: '鎖刃竜の鋭刃角',
        count: 4,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 75,
        dropSources: [
          { action: '部位破壊', ratePercent: 85 }
        ]
      },
      {
        materialId: 'ark-gem',
        materialName: '鎖刃竜の碧玉',
        count: 1,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 15,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 5 }
        ]
      }
    ]
  },

  // ==========================================
  // 防具一式・装飾品・護石
  // ==========================================
  {
    id: 'zoh-shia-armor-set',
    name: '【白熾龍防具】ゾ・シア一式（白熾の波動・ラスボス防具）',
    category: 'armor',
    categoryLabel: '防具一式',
    buildType: 'general',
    buildTypeLabel: 'ラスボス防具一式',
    requiredMaterials: [
      {
        materialId: 'zoh-horn',
        materialName: '白熾龍の神角',
        count: 6,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 65,
        dropSources: [
          { action: '部位破壊', ratePercent: 100, targetPart: '頭部角破壊（2段階）' },
          { action: '剥ぎ取り', ratePercent: 12 }
        ]
      },
      {
        materialId: 'zoh-wing-claw',
        materialName: '白熾龍の剛翼腕',
        count: 8,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 90,
        dropSources: [
          { action: '部位破壊', ratePercent: 70, targetPart: '両翼腕破壊' },
          { action: '剥ぎ取り', ratePercent: 20 }
        ]
      },
      {
        materialId: 'zoh-milk-gem',
        materialName: '白熾の竜乳宝玉',
        count: 1,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 18,
        dropSources: [
          { action: '剥ぎ取り', ratePercent: 3 },
          { action: '捕獲/討伐枠', ratePercent: 5 },
          { action: '部位破壊', ratePercent: 5, targetPart: '尻尾切断' }
        ]
      }
    ]
  },
  {
    id: 'artian-full-set',
    name: '【古代遺構防具】アーティア一式（古代の英知・超スロット特化）',
    category: 'armor',
    categoryLabel: '防具一式',
    buildType: 'general',
    buildTypeLabel: '超スロット特化',
    requiredMaterials: [
      {
        materialId: 'ancient-fragment',
        materialName: '太古の破片',
        count: 14,
        monsterId: 'quematrice',
        monsterName: '古代遺跡調査・砂原/油涌き谷',
        dropRatePerHuntPercent: 150,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 75 },
          { action: '落とし物', ratePercent: 50, targetPart: '古代発掘ポイント' }
        ]
      },
      {
        materialId: 'nova-crystal',
        materialName: 'ノヴァクリスタル',
        count: 6,
        monsterId: 'chatacabra',
        monsterName: '鉱脈採取 / チャタカブラ前脚',
        dropRatePerHuntPercent: 90,
        dropSources: [
          { action: '部位破壊', ratePercent: 40, targetPart: 'チャタカブラ前脚鉱石' },
          { action: '落とし物', ratePercent: 50, targetPart: '青鉱脈' }
        ]
      },
      {
        materialId: 'wyvern-gem',
        materialName: '竜玉',
        count: 3,
        monsterId: 'doshaguma',
        monsterName: 'ドシャグマ / バーラハーラ等',
        dropRatePerHuntPercent: 25,
        dropSources: [
          { action: '剥ぎ取り', ratePercent: 5 },
          { action: '捕獲/討伐枠', ratePercent: 10 }
        ]
      }
    ]
  },
  {
    id: 'arkveld-armor-set',
    name: '【鎖刃竜防具】アルシュベルド一式（会心特化）',
    category: 'armor',
    categoryLabel: '防具一式',
    buildType: 'general',
    buildTypeLabel: '会心特化防具',
    requiredMaterials: [
      {
        materialId: 'ark-sharp-horn',
        materialName: '鎖刃竜の鋭刃角',
        count: 5,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 75,
        dropSources: [
          { action: '部位破壊', ratePercent: 85, targetPart: '角破壊' },
          { action: '剥ぎ取り', ratePercent: 15 }
        ]
      },
      {
        materialId: 'ark-chain-blade',
        materialName: '鎖刃竜の凶刃',
        count: 6,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 85,
        dropSources: [
          { action: '部位破壊', ratePercent: 80, targetPart: '両翼刃破壊' }
        ]
      },
      {
        materialId: 'ark-gem',
        materialName: '鎖刃竜の碧玉',
        count: 1,
        monsterId: 'arkveld',
        monsterName: 'アルシュベルド',
        dropRatePerHuntPercent: 15,
        dropSources: [
          { action: '剥ぎ取り', ratePercent: 3 },
          { action: '捕獲/討伐枠', ratePercent: 5 }
        ]
      }
    ]
  },
  {
    id: 'tenderizer-jewel',
    name: '【必須装飾品】痛撃珠【2】（弱点特効）×3個',
    category: 'decoration',
    categoryLabel: '装飾品',
    buildType: 'general',
    buildTypeLabel: '必須装飾品',
    requiredMaterials: [
      {
        materialId: 'blood-gem-large',
        materialName: '大竜玉',
        count: 3,
        monsterId: 'rey-dau',
        monsterName: '危険度★5モンスター（レ・ダウ / アルシュベルド）',
        dropRatePerHuntPercent: 30,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 15 },
          { action: '剥ぎ取り', ratePercent: 8 }
        ]
      },
      {
        materialId: 'lapis-lazuli',
        materialName: '瑠璃原珠',
        count: 9,
        monsterId: 'doshaguma',
        monsterName: '上位★4〜5クエスト全般',
        dropRatePerHuntPercent: 180,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 100 }
        ]
      }
    ]
  },
  {
    id: 'critical-jewel',
    name: '【必須装飾品】超心珠【2】（超会心）×3個',
    category: 'decoration',
    categoryLabel: '装飾品',
    buildType: 'general',
    buildTypeLabel: '必須装飾品',
    requiredMaterials: [
      {
        materialId: 'blood-gem-large',
        materialName: '大竜玉',
        count: 3,
        monsterId: 'rey-dau',
        monsterName: '危険度★5モンスター（レ・ダウ / ゾ・シア）',
        dropRatePerHuntPercent: 30,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 15 },
          { action: '剥ぎ取り', ratePercent: 8 }
        ]
      },
      {
        materialId: 'lapis-lazuli',
        materialName: '瑠璃原珠',
        count: 9,
        monsterId: 'doshaguma',
        monsterName: '上位★4〜5クエスト全般',
        dropRatePerHuntPercent: 180,
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 100 }
        ]
      }
    ]
  }
];

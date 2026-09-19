import { CraftableTarget } from '../types';

export const craftableTargetsData: CraftableTarget[] = [
  {
    id: 'zoh-shia-sword',
    name: '【白熾龍武器】神剣ゾ・シア（片手剣 / 龍属性）',
    category: 'weapon',
    categoryLabel: '白熾龍武器',
    weaponType: 'swordandshield',
    requiredMaterials: [
      {
        materialId: 'zoh-horn',
        materialName: '白熾龍の神角',
        count: 3,
        monsterId: 'zoh-shia',
        monsterName: 'ゾ・シア',
        dropRatePerHuntPercent: 65, // 頭部破壊で確定1個+剥ぎ取り12%
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
        dropRatePerHuntPercent: 18, // 剥ぎ取り3% + 討伐報酬5% + 尻尾切断5% + 傷口5%
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
    id: 'arkveld-armor-set',
    name: '【鎖刃竜防具】アルシュベルド一式（会心特化）',
    category: 'armor',
    categoryLabel: '防具一式',
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
          { action: '傷口破壊', ratePercent: 20, targetPart: '頭部' },
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
          { action: '部位破壊', ratePercent: 4, targetPart: '尻尾切断' },
          { action: '傷口破壊', ratePercent: 3, targetPart: '翼刃コア' }
        ]
      }
    ]
  },
  {
    id: 'rey-dau-sword',
    name: '【雷迅竜武器】雷迅刀レ・ダウ（太刀 / 雷属性）',
    category: 'weapon',
    categoryLabel: '雷迅竜武器',
    weaponType: 'longsword',
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
        dropRatePerHuntPercent: 110, // 1狩猟で平均1個以上
        dropSources: [
          { action: '部位破壊', ratePercent: 60, targetPart: '翼膜' },
          { action: '剥ぎ取り', ratePercent: 30 },
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
          { action: '落とし物', ratePercent: 2, targetPart: 'ガラス化破裂時' },
          { action: '部位破壊', ratePercent: 6, targetPart: '尻尾切断' }
        ]
      }
    ]
  },
  {
    id: 'artian-full-set',
    name: '【古代遺構防具】アーティア一式（スロット特化）',
    category: 'armor',
    categoryLabel: '古代遺構防具',
    requiredMaterials: [
      {
        materialId: 'ancient-fragment',
        materialName: '太古の破片',
        count: 14,
        monsterId: 'quematrice',
        monsterName: '古代遺跡調査・砂原/油涌き谷',
        dropRatePerHuntPercent: 150, // 調査クエ1回で2〜3個
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
          { action: '捕獲/討伐枠', ratePercent: 10 },
          { action: '傷口破壊', ratePercent: 10 }
        ]
      }
    ]
  },
  {
    id: 'uth-duna-sns',
    name: '【波衣竜武器】波衣剣ウズ・トゥナ（片手剣 / 水属性）',
    category: 'weapon',
    categoryLabel: '波衣竜武器',
    weaponType: 'swordandshield',
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
          { action: '部位破壊', ratePercent: 4, targetPart: '尻尾切断' },
          { action: '傷口破壊', ratePercent: 2, targetPart: '胸部' }
        ]
      }
    ]
  },
  {
    id: 'tenderizer-jewel',
    name: '【必須装飾品】痛撃珠【2】（弱点特効）×3個',
    category: 'decoration',
    categoryLabel: '装飾品',
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
          { action: '剥ぎ取り', ratePercent: 8 },
          { action: '傷口破壊', ratePercent: 7 }
        ]
      },
      {
        materialId: 'lapis-lazuli',
        materialName: '瑠璃原珠',
        count: 9,
        monsterId: 'doshaguma',
        monsterName: '上位★4〜5クエスト全般',
        dropRatePerHuntPercent: 180, // クエスト1回で1〜3個確定
        dropSources: [
          { action: '捕獲/討伐枠', ratePercent: 100 }
        ]
      }
    ]
  },
  {
    id: 'ajarakan-sns',
    name: '【赫炎剣アジャラカン】（片手剣 / 火属性）',
    category: 'weapon',
    categoryLabel: '赫猿獣武器',
    weaponType: 'swordandshield',
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
          { action: '部位破壊', ratePercent: 5, targetPart: '腕部溶岩破壊' },
          { action: '落とし物', ratePercent: 2 }
        ]
      }
    ]
  },
  {
    id: 'jin-dahad-sns',
    name: '【霜晶剣ジン・ダハド】（片手剣 / 氷属性）',
    category: 'weapon',
    categoryLabel: '氷晶竜武器',
    weaponType: 'swordandshield',
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
          { action: '部位破壊', ratePercent: 5, targetPart: '尻尾切断' },
          { action: '傷口破壊', ratePercent: 3 }
        ]
      }
    ]
  }
];

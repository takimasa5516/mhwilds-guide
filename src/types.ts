// モンハンワイルズ 攻略データベースの型定義

export type WeaponType = 
  | 'greatsword'      // 大剣
  | 'longsword'       // 太刀
  | 'swordandshield'  // 片手剣
  | 'duablades'       // 双剣
  | 'hammer'          // ハンマー
  | 'huntinghorn'     // 狩猟笛
  | 'lance'           // ランス
  | 'gunlance'        // ガンランス
  | 'switchaxe'       // スラッシュアックス
  | 'chargeblade'     // チャージアックス
  | 'insectglaive'    // 操虫棍
  | 'lightbowgun'     // ライトボウガン
  | 'heavybowgun'     // ヘビィボウガン
  | 'bow';            // 弓

export interface WeaponInfo {
  id: WeaponType;
  name: string;
  nameEn: string;
  category: 'melee' | 'ranged';
  icon: string;
  summary: string;
  wildsFeatures: string[]; // ワイルズでの新要素（集中モード、相殺など）
  tacticalAdvantages?: {
    title: string;
    description: string;
    howToGainAdvantage: string;
  }[]; // コンボだけじゃない立ち回りの優位性（相殺判定、集中定点、位置取り、ジャストガード）
  elementalWeapons?: {
    element: 'fire' | 'water' | 'thunder' | 'ice' | 'dragon';
    elementLabel: string;
    weaponName: string;
    attack: number;
    elementValue: number;
    affinity: number;
    sharpnessOrAmmo: string;
    monsterSource: string;
    recommendedSkills: string[];
    description: string;
  }[]; // 武器種×5属性特化装備一覧
  builds: WeaponBuild[];
  combos: WeaponCombo[];
  tips: string[];
}

export interface WeaponBuild {
  id: string;
  title: string;
  type: 'physical' | 'elemental' | 'status' | 'comfort';
  typeLabel: string;
  weaponName: string;
  attack: number;
  element?: string;
  affinity: number; // 会心率 (%)
  sharpnessOrAmmo: string;
  description: string;
  armorPieces: {
    head: string;
    chest: string;
    arms: string;
    waist: string;
    legs: string;
    talisman: string;
  };
  keySkills: {
    name: string;
    level: number;
    description: string;
  }[];
  decorations: string[];
  craftingSteps: {
    baseWeapon: string;
    derivedTree: string;
    keyMaterials: string[];
    tips: string;
  };
}

export interface WeaponCombo {
  name: string;
  situation: 'neutral' | 'down' | 'wound' | 'counter';
  situationLabel: string;
  inputs: string[];
  description: string;
  damageRating: 'high' | 'very-high' | 'extreme';
}

export type ElementType = 'fire' | 'water' | 'thunder' | 'ice' | 'dragon' | 'none';

export interface MonsterData {
  id: string;
  name: string;
  nameEn: string;
  species: string; // 種族（牙獣種、飛竜種、海竜種など）
  threatLevel: number; // 危険度 (1-5)
  habitat: string[]; // 出現フィールド
  description: string;
  weaknessElements: {
    fire: number;    // 0-3 (星の数)
    water: number;
    thunder: number;
    ice: number;
    dragon: number;
  };
  statusWeakness: {
    poison: number;
    paralysis: number;
    sleep: number;
    blast: number;
    stun: number;
  };
  weakParts: string[]; // 主な弱点部位
  severableParts: string[]; // 切断・破壊可能部位
  gimmicks: string[]; // 固有ギミック（砂嵐落雷、泥纏い、群れ行動など）
  dangerMoves: {
    name: string;
    cue: string; // 予備動作
    countermeasure: string; // 対処法・反撃チャンス
  }[];
  huntingTips: string[];
}

export interface QuestMission {
  id: string;
  title: string;
  category: 'main' | 'sub' | 'unlock';
  chapter?: string;
  target: string;
  location: string;
  rewardUnlocks: string[];
  tips: string;
  difficulty: number;
}

export interface MetaEnvironmentTopic {
  id: string;
  title: string;
  category: 'element_vs_raw' | 'focus_mode' | 'secondary_weapon' | 'status_meta' | 'gear_progression';
  categoryLabel: string;
  summary: string;
  analysis: string[];
  recommendations: string[];
  prosAndCons?: {
    pros: string[];
    cons: string[];
  };
}

// アーティア装備・護石システム型定義
export interface ArtianGearInfo {
  seriesName: string;
  description: string;
  unlockCondition: string;
  setBonus: {
    name: string;
    requirement: string;
    effect: string;
  };
  pieces: {
    part: '頭' | '胴' | '腕' | '腰' | '脚';
    name: string;
    slots: string; // 例: "④ ② ①"
    builtInSkills: { name: string; level: number }[];
    craftingMaterials: { material: string; count: number }[];
    recommendedUse: string;
  }[];
}

export interface TalismanSystemInfo {
  alchemyMethods: {
    name: string;
    cost: string;
    unlockTiming: string;
    description: string;
    targetSkills: string[];
  }[];
  metaTalismans: {
    name: string;
    idealSkills: string;
    slots: string;
    recommendedFor: string;
    difficultyRating: string;
  }[];
  limitBreakGuide: {
    title: string;
    steps: string[];
    tips: string;
  };
}

// ウィッシュリスト・素材計算シミュレーター型定義
export interface CraftableTarget {
  id: string;
  name: string;
  category: 'weapon' | 'armor' | 'decoration' | 'talisman';
  categoryLabel: string;
  weaponType?: WeaponType;
  requiredMaterials: {
    materialId: string;
    materialName: string;
    count: number;
    monsterId: string;
    monsterName: string;
    dropRatePerHuntPercent: number; // 1狩猟あたりの期待ドロップ個数 / 確率%
    dropSources: {
      action: '剥ぎ取り' | '部位破壊' | '捕獲/討伐枠' | '傷口破壊' | '落とし物';
      ratePercent: number;
      targetPart?: string;
    }[];
  }[];
}

import React, { useState, useMemo } from 'react';
import { craftableTargetsData } from '../data/materialsData';
import { CraftableTarget, WeaponType } from '../types';
import { Calculator, Plus, Trash2, CheckCircle2, Sparkles, Crosshair, HelpCircle, Filter, Swords, Shield, Flame, Zap, Award } from 'lucide-react';

interface WishlistItem {
  targetId: string;
  quantity: number;
}

// 二項分布・ポアソン近似による 90% 安心討伐数計算
function calculateSafeHunts(needed: number, dropRatePerHunt: number): number {
  if (needed <= 0) return 0;
  const p = Math.min(Math.max(dropRatePerHunt / 100, 0.01), 3.0);

  if (p >= 1.0) {
    return Math.ceil(needed / p * 1.3);
  }

  if (needed === 1) {
    const n = Math.log(0.10) / Math.log(1 - p);
    return Math.ceil(n);
  }

  let n = Math.max(needed, Math.ceil(needed / p));
  for (; n < 100; n++) {
    const lambda = n * p;
    let cumulativeProb = 0;
    let term = Math.exp(-lambda);
    cumulativeProb += term;
    for (let k = 1; k < needed; k++) {
      term = (term * lambda) / k;
      cumulativeProb += term;
    }
    const probAtLeastNeeded = 1 - cumulativeProb;
    if (probAtLeastNeeded >= 0.90) {
      return n;
    }
  }
  return n;
}

// 武器種ラベルマッピング
const weaponTypeLabels: Record<string, string> = {
  all: '全武器・防具',
  greatsword: '大剣',
  longsword: '太刀',
  swordandshield: '片手剣',
  duablades: '双剣',
  hammer: 'ハンマー',
  huntinghorn: '狩猟笛',
  lance: 'ランス',
  gunlance: 'ガンランス',
  switchaxe: 'スラアク',
  chargeblade: 'チャアク',
  insectglaive: '操虫棍',
  lightbowgun: 'ライト',
  heavybowgun: 'ヘビィ',
  bow: '弓',
  armor_deco: '防具・装飾品'
};

export const MaterialCalculatorSection: React.FC = () => {
  // 初期ウィッシュリスト
  const [wishlist, setWishlist] = useState<WishlistItem[]>([
    { targetId: 'zoh-shia-sword', quantity: 1 },
    { targetId: 'artian-full-set', quantity: 1 },
    { targetId: 'gs-zoh-shia', quantity: 1 }
  ]);

  // 各素材の手持ち所持数
  const [ownedCounts, setOwnedCounts] = useState<Record<string, number>>({
    'zoh-horn': 2,
    'zoh-milk-gem': 0,
    'ancient-fragment': 8
  });

  // フィルター状態
  const [selectedWeaponFilter, setSelectedWeaponFilter] = useState<string>('all');
  const [selectedBuildTypeFilter, setSelectedBuildTypeFilter] = useState<string>('all');

  // ウィッシュリスト追加
  const addToWishlist = (targetId: string) => {
    setWishlist(prev => {
      const existing = prev.find(item => item.targetId === targetId);
      if (existing) {
        return prev.map(item =>
          item.targetId === targetId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { targetId, quantity: 1 }];
    });
  };

  // ウィッシュリストから削除
  const removeFromWishlist = (targetId: string) => {
    setWishlist(prev => prev.filter(item => item.targetId !== targetId));
  };

  // 数量増減
  const updateQuantity = (targetId: string, delta: number) => {
    setWishlist(prev =>
      prev
        .map(item => {
          if (item.targetId === targetId) {
            const newQty = Math.max(1, Math.min(10, item.quantity + delta));
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter(item => item.quantity > 0)
    );
  };

  // 所持数更新
  const updateOwned = (materialId: string, val: number) => {
    setOwnedCounts(prev => ({
      ...prev,
      [materialId]: Math.max(0, val)
    }));
  };

  // プリセット一括設定
  const applyPreset = (presetName: 'sns-elements' | 'gs-meta' | 'ls-meta' | 'all-zoh') => {
    switch (presetName) {
      case 'sns-elements':
        setWishlist([
          { targetId: 'zoh-shia-sword', quantity: 1 },
          { targetId: 'uth-duna-sns', quantity: 1 },
          { targetId: 'ajarakan-sns', quantity: 1 },
          { targetId: 'jin-dahad-sns', quantity: 1 },
          { targetId: 'chatacabra-sns-para', quantity: 1 }
        ]);
        break;
      case 'gs-meta':
        setWishlist([
          { targetId: 'gs-zoh-shia', quantity: 1 },
          { targetId: 'artian-full-set', quantity: 1 },
          { targetId: 'critical-jewel', quantity: 1 }
        ]);
        break;
      case 'ls-meta':
        setWishlist([
          { targetId: 'ls-zoh-shia', quantity: 1 },
          { targetId: 'ls-rey-dau', quantity: 1 },
          { targetId: 'arkveld-armor-set', quantity: 1 }
        ]);
        break;
      case 'all-zoh':
        setWishlist([
          { targetId: 'zoh-shia-sword', quantity: 1 },
          { targetId: 'gs-zoh-shia', quantity: 1 },
          { targetId: 'ls-zoh-shia', quantity: 1 },
          { targetId: 'zoh-shia-armor-set', quantity: 1 }
        ]);
        break;
    }
  };

  // フィルター済みターゲットアイテム一覧
  const filteredTargets = useMemo(() => {
    return craftableTargetsData.filter(target => {
      // 武器種フィルター
      if (selectedWeaponFilter !== 'all') {
        if (selectedWeaponFilter === 'armor_deco') {
          if (target.category !== 'armor' && target.category !== 'decoration') return false;
        } else {
          if (target.weaponType !== selectedWeaponFilter) return false;
        }
      }
      // ビルドタイプフィルター
      if (selectedBuildTypeFilter !== 'all') {
        if (selectedBuildTypeFilter === 'physical' && target.buildType !== 'physical') return false;
        if (selectedBuildTypeFilter === 'elemental' && target.buildType !== 'elemental') return false;
        if (selectedBuildTypeFilter === 'status' && target.buildType !== 'status') return false;
        if (selectedBuildTypeFilter === 'general' && target.buildType !== 'general') return false;
      }
      return true;
    });
  }, [selectedWeaponFilter, selectedBuildTypeFilter]);

  // 全素材の集計
  const aggregatedMaterials = useMemo(() => {
    const map = new Map<string, {
      materialId: string;
      materialName: string;
      totalRequired: number;
      monsterId: string;
      monsterName: string;
      dropRatePerHuntPercent: number;
      dropSources: {
        action: string;
        ratePercent: number;
        targetPart?: string;
      }[];
    }>();

    wishlist.forEach(item => {
      const target = craftableTargetsData.find(t => t.id === item.targetId);
      if (!target) return;

      target.requiredMaterials.forEach(mat => {
        const existing = map.get(mat.materialId);
        const countToAdd = mat.count * item.quantity;
        if (existing) {
          existing.totalRequired += countToAdd;
        } else {
          map.set(mat.materialId, {
            materialId: mat.materialId,
            materialName: mat.materialName,
            totalRequired: countToAdd,
            monsterId: mat.monsterId,
            monsterName: mat.monsterName,
            dropRatePerHuntPercent: mat.dropRatePerHuntPercent,
            dropSources: mat.dropSources
          });
        }
      });
    });

    return Array.from(map.values()).map(mat => {
      const owned = ownedCounts[mat.materialId] || 0;
      const deficit = Math.max(0, mat.totalRequired - owned);
      const expectedHunts = deficit > 0 ? Math.ceil(deficit / (mat.dropRatePerHuntPercent / 100)) : 0;
      const safeHunts = calculateSafeHunts(deficit, mat.dropRatePerHuntPercent);

      return {
        ...mat,
        owned,
        deficit,
        expectedHunts,
        safeHunts
      };
    });
  }, [wishlist, ownedCounts]);

  // モンスター別討伐数サマリー
  const monsterSummary = useMemo(() => {
    const summaryMap = new Map<string, {
      monsterId: string;
      monsterName: string;
      maxExpectedHunts: number;
      maxSafeHunts: number;
      bottleneckMaterial: string;
      materials: { name: string; needed: number; owned: number }[];
    }>();

    aggregatedMaterials.forEach(mat => {
      if (mat.deficit <= 0) return;

      const existing = summaryMap.get(mat.monsterName);
      if (existing) {
        if (mat.safeHunts > existing.maxSafeHunts) {
          existing.maxSafeHunts = mat.safeHunts;
          existing.maxExpectedHunts = mat.expectedHunts;
          existing.bottleneckMaterial = mat.materialName;
        }
        existing.materials.push({ name: mat.materialName, needed: mat.totalRequired, owned: mat.owned });
      } else {
        summaryMap.set(mat.monsterName, {
          monsterId: mat.monsterId,
          monsterName: mat.monsterName,
          maxExpectedHunts: mat.expectedHunts,
          maxSafeHunts: mat.safeHunts,
          bottleneckMaterial: mat.materialName,
          materials: [{ name: mat.materialName, needed: mat.totalRequired, owned: mat.owned }]
        });
      }
    });

    return Array.from(summaryMap.values()).sort((a, b) => b.maxSafeHunts - a.maxSafeHunts);
  }, [aggregatedMaterials]);

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Calculator className="w-4 h-4" />
          <span>Wishlist & Probability Simulator (All 14 Weapons)</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
          全14武器種対応 ウィッシュリスト × 必要素材 × 討伐数シミュレーター
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
          大剣・太刀・片手剣・双剣・ガンナー等【全14武器種】の「物理最強」「属性特化」「状態異常」装備に対応！手持ち素材を入力するだけで期待討伐数＆90%安心討伐数を瞬時に算出します。
        </p>
      </div>

      {/* プリセット一括登録ボタン */}
      <div className="bg-[#121622] border border-slate-800 rounded-2xl p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center space-x-2 text-xs font-bold text-slate-300">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>人気ウィッシュリスト即時プリセット:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => applyPreset('sns-elements')}
            className="bg-[#181d2a] hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 border border-slate-700 hover:border-amber-500/40 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all"
          >
            片手剣 5属性特化一式
          </button>
          <button
            onClick={() => applyPreset('gs-meta')}
            className="bg-[#181d2a] hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 border border-slate-700 hover:border-amber-500/40 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all"
          >
            大剣 真溜め物理セット
          </button>
          <button
            onClick={() => applyPreset('ls-meta')}
            className="bg-[#181d2a] hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 border border-slate-700 hover:border-amber-500/40 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all"
          >
            太刀 居合兜割りセット
          </button>
          <button
            onClick={() => applyPreset('all-zoh')}
            className="bg-[#181d2a] hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 border border-slate-700 hover:border-amber-500/40 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all"
          >
            白熾龍ゾ・シア 武器防具一式
          </button>
        </div>
      </div>

      {/* 現在のウィッシュリスト */}
      <div className="bg-[#121622] border border-slate-800 rounded-2xl p-4 sm:p-6 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center space-x-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>登録中のウィッシュリスト</span>
            </h3>
            <span className="text-xs text-slate-400">作成予定の装備・装飾品（数量の変更や削除が可能）</span>
          </div>
          {wishlist.length > 0 && (
            <button
              onClick={() => setWishlist([])}
              className="text-xs text-slate-400 hover:text-rose-400 transition-colors self-start sm:self-auto"
            >
              すべてクリア
            </button>
          )}
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-6 text-slate-500 text-sm">
            ウィッシュリストにアイテムがありません。下記の装備一覧から追加してください。
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {wishlist.map(item => {
              const target = craftableTargetsData.find(t => t.id === item.targetId);
              if (!target) return null;
              return (
                <div
                  key={item.targetId}
                  className="bg-[#171c2a] border border-slate-800 rounded-xl p-3.5 flex items-center justify-between hover:border-slate-700 transition-colors"
                >
                  <div className="min-w-0 pr-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                      {target.categoryLabel}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white mt-1 truncate">
                      {target.name}
                    </h4>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <div className="flex items-center bg-[#0e121a] border border-slate-700 rounded-lg px-2 py-1 space-x-2 text-xs">
                      <button
                        onClick={() => updateQuantity(item.targetId, -1)}
                        className="text-slate-400 hover:text-white font-bold px-1"
                      >
                        -
                      </button>
                      <span className="font-bold text-amber-300">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.targetId, 1)}
                        className="text-slate-400 hover:text-white font-bold px-1"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromWishlist(item.targetId)}
                      className="text-slate-500 hover:text-rose-400 p-1.5 rounded-lg hover:bg-rose-500/10 transition-colors"
                      title="削除"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 装備カタログ・選択追加セクション */}
      <div className="bg-[#121622] border border-slate-800 rounded-2xl p-4 sm:p-6 space-y-4 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center space-x-2">
              <Plus className="w-4 h-4 text-emerald-400" />
              <span>全14武器種＆装備カタログから追加</span>
            </h3>
            <span className="text-xs text-slate-400">
              武器種やビルドタイプ（物理最強・属性特化・状態異常）で絞り込み、ワンクリックで追加
            </span>
          </div>

          {/* ビルドタイプフィルター */}
          <div className="flex items-center bg-[#0e121a] p-1 rounded-lg border border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedBuildTypeFilter('all')}
              className={`px-2.5 py-1 rounded text-xs font-semibold whitespace-nowrap ${
                selectedBuildTypeFilter === 'all' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'
              }`}
            >
              全ビルド
            </button>
            <button
              onClick={() => setSelectedBuildTypeFilter('physical')}
              className={`px-2.5 py-1 rounded text-xs font-semibold whitespace-nowrap ${
                selectedBuildTypeFilter === 'physical' ? 'bg-orange-500 text-white font-bold' : 'text-orange-400'
              }`}
            >
              ⚔️ 物理・会心最強
            </button>
            <button
              onClick={() => setSelectedBuildTypeFilter('elemental')}
              className={`px-2.5 py-1 rounded text-xs font-semibold whitespace-nowrap ${
                selectedBuildTypeFilter === 'elemental' ? 'bg-sky-500 text-white font-bold' : 'text-sky-400'
              }`}
            >
              🔥 属性特化
            </button>
            <button
              onClick={() => setSelectedBuildTypeFilter('status')}
              className={`px-2.5 py-1 rounded text-xs font-semibold whitespace-nowrap ${
                selectedBuildTypeFilter === 'status' ? 'bg-purple-500 text-white font-bold' : 'text-purple-400'
              }`}
            >
              🟣 状態異常
            </button>
            <button
              onClick={() => setSelectedBuildTypeFilter('general')}
              className={`px-2.5 py-1 rounded text-xs font-semibold whitespace-nowrap ${
                selectedBuildTypeFilter === 'general' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-emerald-400'
              }`}
            >
              🛡️ 防具・装飾品
            </button>
          </div>
        </div>

        {/* 武器種クイック選択ピル（スマホ横スクロール対応） */}
        <div className="overflow-x-auto pb-1 scrollbar-thin">
          <div className="flex items-center space-x-1.5 min-w-max">
            {Object.entries(weaponTypeLabels).map(([key, label]) => {
              const isSelected = selectedWeaponFilter === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedWeaponFilter(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-[#151a26] text-slate-300 hover:bg-[#1a2030] hover:text-white border border-slate-800'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ターゲット一覧グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto pr-1">
          {filteredTargets.map(target => {
            const isAdded = wishlist.some(item => item.targetId === target.id);
            return (
              <div
                key={target.id}
                className="bg-[#151a26] border border-slate-800 rounded-xl p-3 space-y-2 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                      {target.categoryLabel}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {target.buildTypeLabel}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mt-1.5 line-clamp-2">
                    {target.name}
                  </h4>
                  <div className="text-[11px] text-slate-400 mt-1">
                    必要素材: {target.requiredMaterials.map(m => m.materialName).join(' / ')}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400">
                    対象: {target.requiredMaterials[0]?.monsterName}
                  </span>
                  <button
                    onClick={() => addToWishlist(target.id)}
                    className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      isAdded
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm'
                    }`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{isAdded ? '追加 (+1)' : 'ウィッシュリストへ'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 討伐目標サマリー：今どのモンスターを何体狩るべきか？ */}
      {monsterSummary.length > 0 && (
        <div className="bg-gradient-to-br from-[#1a2032] to-[#121622] border border-amber-500/40 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Crosshair className="w-5 h-5 text-amber-400" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                【逆引き】今狩るべきモンスター ＆ 総合必要討伐数
              </h3>
            </div>
            <span className="text-[11px] text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
              ※90%安心討伐数は低確率素材の偏りを考慮した数値
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {monsterSummary.map(m => (
              <div
                key={m.monsterName}
                className="bg-[#0e121a]/90 border border-slate-800 rounded-xl p-4 space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-base font-black text-white">{m.monsterName}</span>
                  <span className="text-[10px] text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 font-bold">
                    ボトルネック: {m.bottleneckMaterial}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center py-1">
                  <div className="bg-[#141926] p-2.5 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">期待討伐数（平均）</span>
                    <span className="text-xl font-black text-amber-400">
                      約 {m.maxExpectedHunts} <span className="text-xs text-slate-300">体</span>
                    </span>
                  </div>
                  <div className="bg-[#141926] p-2.5 rounded-lg border border-amber-500/30">
                    <span className="text-[10px] text-emerald-400 font-bold block">90%安心討伐数</span>
                    <span className="text-xl font-black text-emerald-400">
                      約 {m.maxSafeHunts} <span className="text-xs text-slate-300">体</span>
                    </span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 space-y-1">
                  <span className="text-slate-300 font-bold block">必要素材集計:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {m.materials.map((mat, i) => (
                      <span key={i} className="bg-slate-800/80 px-2 py-0.5 rounded text-[10px] text-slate-300">
                        {mat.name}: 残り{Math.max(0, mat.needed - mat.owned)}個
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 必要素材詳細テーブル＆確率内訳 */}
      <div className="bg-[#121622] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-4 sm:p-5 bg-[#171c2a] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calculator className="w-4 h-4 text-amber-400" />
            <h3 className="text-base font-bold text-white">
              全素材一覧・手持ちカウンター ＆ 討伐数シミュレーション
            </h3>
          </div>
          <span className="text-xs text-slate-400">
            全{aggregatedMaterials.length}種類の素材
          </span>
        </div>

        {aggregatedMaterials.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-sm">
            対象素材がありません。上のカタログから装備を追加してください。
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#0e121a] text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                  <th className="p-3 sm:p-4">素材名</th>
                  <th className="p-3 sm:p-4">対象モンスター / 入手元</th>
                  <th className="p-3 sm:p-4 text-center">必要数</th>
                  <th className="p-3 sm:p-4 text-center">手持ち所持数</th>
                  <th className="p-3 sm:p-4 text-center">不足数</th>
                  <th className="p-3 sm:p-4">ドロップ内訳 & 確率</th>
                  <th className="p-3 sm:p-4 text-center bg-amber-500/5 text-amber-300 font-bold">期待討伐数</th>
                  <th className="p-3 sm:p-4 text-center bg-emerald-500/5 text-emerald-300 font-bold">90%安心数</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {aggregatedMaterials.map((mat) => {
                  const isCompleted = mat.deficit === 0;
                  return (
                    <tr
                      key={mat.materialId}
                      className={`hover:bg-[#161b28] transition-colors ${
                        isCompleted ? 'bg-emerald-950/10' : ''
                      }`}
                    >
                      <td className="p-3 sm:p-4 font-bold text-slate-200">
                        <div className="flex items-center space-x-1.5">
                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0"></span>
                          )}
                          <span className={isCompleted ? 'line-through text-slate-400' : ''}>
                            {mat.materialName}
                          </span>
                        </div>
                      </td>

                      <td className="p-3 sm:p-4 text-slate-300">
                        <span className="font-semibold text-amber-300">{mat.monsterName}</span>
                      </td>

                      <td className="p-3 sm:p-4 text-center font-bold text-white">
                        {mat.totalRequired}
                      </td>

                      <td className="p-3 sm:p-4 text-center">
                        <input
                          type="number"
                          min="0"
                          value={mat.owned}
                          onChange={(e) => updateOwned(mat.materialId, parseInt(e.target.value) || 0)}
                          className="w-16 bg-[#0e121a] border border-slate-700 rounded px-2 py-1 text-center text-xs text-white font-bold focus:outline-none focus:border-amber-500"
                        />
                      </td>

                      <td className="p-3 sm:p-4 text-center font-bold">
                        {isCompleted ? (
                          <span className="text-emerald-400">達成済</span>
                        ) : (
                          <span className="text-rose-400 text-sm">{mat.deficit}</span>
                        )}
                      </td>

                      <td className="p-3 sm:p-4">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-1 text-[11px] text-amber-300 font-bold">
                            <span>1回あたり期待値:</span>
                            <span>約 {mat.dropRatePerHuntPercent}%</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {mat.dropSources.map((ds, idx) => (
                              <span
                                key={idx}
                                className="bg-[#0e121a] border border-slate-800 text-[10px] px-1.5 py-0.5 rounded text-slate-300"
                              >
                                {ds.action}{ds.targetPart ? `(${ds.targetPart})` : ''}: {ds.ratePercent}%
                              </span>
                            ))}
                          </div>
                        </div>
                      </td>

                      <td className="p-3 sm:p-4 text-center font-black text-amber-400 text-sm bg-amber-500/5">
                        {isCompleted ? '-' : `${mat.expectedHunts} 体`}
                      </td>

                      <td className="p-3 sm:p-4 text-center font-black text-emerald-400 text-sm bg-emerald-500/5">
                        {isCompleted ? '-' : `${mat.safeHunts} 体`}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        <div className="p-4 bg-[#0e121a] border-t border-slate-800 text-xs text-slate-400 flex items-start space-x-2">
          <HelpCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-slate-300">【全14武器種対応 討伐数算出ロジック】</span>
            <p className="leading-relaxed text-[11px]">
              ・大剣・太刀・片手剣・双剣・ハンマー・狩猟笛・ランス・ガンランス・スラアク・チャアク・操虫棍・ライト・ヘビィ・弓の各武器種における物理・属性・状態異常の必要素材をリアルタイムにマージして集計しています。<br />
              ・複数の装備を作成する場合でも、同一素材（白熾龍の神角、竜玉、大竜玉等）は合算され、効率的に並行狩猟計画を立てられます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

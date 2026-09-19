import React, { useState } from 'react';
import { weaponsData } from '../data/weaponsData';
import { WeaponInfo, WeaponType } from '../types';
import { Swords, Shield, Sparkles, Award, Crosshair, Wrench, BookOpen, Zap, Flame, Droplets, Snowflake, Disc3, CheckCircle2 } from 'lucide-react';

interface WeaponGuideSectionProps {
  initialWeapon?: WeaponType;
}

export const WeaponGuideSection: React.FC<WeaponGuideSectionProps> = ({ initialWeapon = 'swordandshield' }) => {
  const [selectedWeaponId, setSelectedWeaponId] = useState<WeaponType>(initialWeapon);
  const [viewMode, setViewMode] = useState<'builds' | 'elements' | 'tactics' | 'combos'>('builds');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'melee' | 'ranged'>('all');
  const [selectedElementFilter, setSelectedElementFilter] = useState<'all' | 'fire' | 'water' | 'thunder' | 'ice' | 'dragon'>('all');

  const selectedWeapon = weaponsData.find(w => w.id === selectedWeaponId) || weaponsData[0];

  const filteredWeapons = weaponsData.filter(w => {
    if (categoryFilter === 'melee') return w.category === 'melee';
    if (categoryFilter === 'ranged') return w.category === 'ranged';
    return true;
  });

  return (
    <div className="space-y-6">
      {/* セクションヘッダー */}
      <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Swords className="w-4 h-4" />
            <span>Latest Meta & Weapons Database</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            全14武器種 最新最強装備 ＆ 立ち回り・操作優位性
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            白熾龍ゾ・シア＆古代遺構アーティアを組み込んだ最新環境Tier SS構成から、5属性特化・相殺立ち回りまで完全網羅
          </p>
        </div>

        {/* 近接・遠距離フィルター */}
        <div className="flex items-center bg-[#131722] p-1 rounded-lg border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
              categoryFilter === 'all'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            全14種
          </button>
          <button
            onClick={() => setCategoryFilter('melee')}
            className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
              categoryFilter === 'melee'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            近接武器
          </button>
          <button
            onClick={() => setCategoryFilter('ranged')}
            className={`px-3 py-1 rounded text-xs font-semibold transition-all ${
              categoryFilter === 'ranged'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            遠距離武器
          </button>
        </div>
      </div>

      {/* 武器選択グリッド（スマホ横スクロール対応） */}
      <div className="overflow-x-auto pb-2 scrollbar-thin">
        <div className="flex sm:grid sm:grid-cols-7 lg:grid-cols-7 gap-2 min-w-max sm:min-w-0">
          {filteredWeapons.map((weapon) => {
            const isSelected = weapon.id === selectedWeaponId;
            return (
              <button
                key={weapon.id}
                onClick={() => setSelectedWeaponId(weapon.id)}
                className={`flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl border text-center transition-all ${
                  isSelected
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-md shadow-amber-500/10'
                    : 'bg-[#141824] border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-[#1a2030]'
                }`}
              >
                <span className="text-xl sm:text-2xl mb-1">{weapon.icon}</span>
                <span className="text-xs font-bold whitespace-nowrap">{weapon.name}</span>
                <span className="text-[10px] text-slate-400 whitespace-nowrap hidden sm:block">
                  {weapon.category === 'melee' ? '近接' : '遠距離'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 選択された武器のメインカード */}
      <div className="bg-[#121622] rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
        {/* 武器サマリーヘッダー */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-[#171c2b] to-[#121622] border-b border-slate-800/80">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-700/20 border border-amber-500/40 flex items-center justify-center text-3xl sm:text-4xl shadow-inner">
                {selectedWeapon.icon}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {selectedWeapon.name}
                  </h3>
                  <span className="text-xs text-slate-400 font-cinzel">
                    {selectedWeapon.nameEn}
                  </span>
                  <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                    最新環境パッチ対応（ゾ・シア＆アーティア）
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  {selectedWeapon.summary}
                </p>
              </div>
            </div>

            {/* モード切り替え4大タブ（スマホ横スクロール対応） */}
            <div className="flex items-center bg-[#0c0f16] p-1.5 rounded-xl border border-slate-800 self-start lg:self-center overflow-x-auto max-w-full">
              <button
                onClick={() => setViewMode('builds')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  viewMode === 'builds'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>最新最強装備</span>
              </button>

              {selectedWeapon.elementalWeapons && (
                <button
                  onClick={() => setViewMode('elements')}
                  className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    viewMode === 'elements'
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5" />
                  <span>5属性特化装備</span>
                </button>
              )}

              {selectedWeapon.tacticalAdvantages && (
                <button
                  onClick={() => setViewMode('tactics')}
                  className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    viewMode === 'tactics'
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>操作・立ち回り優位性</span>
                </button>
              )}

              <button
                onClick={() => setViewMode('combos')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  viewMode === 'combos'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Crosshair className="w-3.5 h-3.5" />
                <span>コンボ＆操作表</span>
              </button>
            </div>
          </div>

          {/* ワイルズ新要素ハイライト */}
          <div className="mt-4 pt-4 border-t border-slate-800/60">
            <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>『ワイルズ』における新要素・強化ポイント</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              {selectedWeapon.wildsFeatures.map((feat, idx) => (
                <div key={idx} className="bg-[#0e111a] border border-slate-800/80 p-2.5 rounded-lg text-xs text-slate-300">
                  <span className="text-amber-400 font-bold mr-1">✦</span>
                  {feat}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* メインコンテンツエリア */}
        <div className="p-4 sm:p-6">
          {/* 1. 最強装備タブ */}
          {viewMode === 'builds' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    最新環境 推奨ビルド構成（エンドコンテンツ結論構成）
                  </h4>
                </div>
                <span className="text-xs text-slate-400">
                  全{selectedWeapon.builds.length}構成
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {selectedWeapon.builds.map((build) => (
                  <div
                    key={build.id}
                    className="bg-[#161a26] border border-slate-800 rounded-xl p-4 sm:p-5 space-y-4 hover:border-slate-700 transition-colors shadow-lg"
                  >
                    {/* ビルドタイトル・概要 */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            build.typeLabel.includes('Tier SS')
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-black'
                              : build.type === 'physical'
                              ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30'
                              : build.type === 'elemental'
                              ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          }`}>
                            {build.typeLabel}
                          </span>
                          <h5 className="text-base sm:text-lg font-bold text-white">
                            {build.title}
                          </h5>
                        </div>
                        <p className="text-xs text-slate-300 mt-1">
                          {build.description}
                        </p>
                      </div>

                      {/* 武器ステータスバッジ */}
                      <div className="bg-[#0e121a] px-3 py-2 rounded-lg border border-slate-800 flex items-center space-x-3 text-xs self-start sm:self-auto">
                        <div>
                          <span className="text-[10px] text-slate-400 block">指定武器</span>
                          <span className="font-bold text-amber-300 truncate max-w-[150px] block">{build.weaponName}</span>
                        </div>
                        <div className="border-l border-slate-800 pl-3">
                          <span className="text-[10px] text-slate-400 block">攻撃力 / 会心</span>
                          <span className="font-bold text-white">{build.attack} / {build.affinity}%</span>
                        </div>
                        {build.element && (
                          <div className="border-l border-slate-800 pl-3">
                            <span className="text-[10px] text-slate-400 block">属性</span>
                            <span className="font-bold text-sky-400">{build.element}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* 防具パーツ構成 ＆ 発動スキル（2カラム） */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* 防具一式 */}
                      <div className="bg-[#0e121a] p-3.5 rounded-lg border border-slate-800 space-y-2">
                        <div className="text-xs font-bold text-amber-400 flex items-center space-x-1.5 mb-2">
                          <Shield className="w-3.5 h-3.5" />
                          <span>防具・護石構成（ゾ・シア/アーティアキメラ）</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-[#131824] p-2 rounded border border-slate-800">
                            <span className="text-[10px] text-slate-400 block">頭</span>
                            <span className="text-slate-200 font-medium">{build.armorPieces.head}</span>
                          </div>
                          <div className="bg-[#131824] p-2 rounded border border-slate-800">
                            <span className="text-[10px] text-slate-400 block">胴</span>
                            <span className="text-slate-200 font-medium">{build.armorPieces.chest}</span>
                          </div>
                          <div className="bg-[#131824] p-2 rounded border border-slate-800">
                            <span className="text-[10px] text-slate-400 block">腕</span>
                            <span className="text-slate-200 font-medium">{build.armorPieces.arms}</span>
                          </div>
                          <div className="bg-[#131824] p-2 rounded border border-slate-800">
                            <span className="text-[10px] text-slate-400 block">腰</span>
                            <span className="text-slate-200 font-medium">{build.armorPieces.waist}</span>
                          </div>
                          <div className="bg-[#131824] p-2 rounded border border-slate-800">
                            <span className="text-[10px] text-slate-400 block">脚</span>
                            <span className="text-slate-200 font-medium">{build.armorPieces.legs}</span>
                          </div>
                          <div className="bg-[#131824] p-2 rounded border border-amber-900/40 bg-amber-950/10">
                            <span className="text-[10px] text-amber-400 block">護石（神おま）</span>
                            <span className="text-amber-200 font-bold">{build.armorPieces.talisman}</span>
                          </div>
                        </div>

                        {/* おすすめ装飾品 */}
                        <div className="pt-2">
                          <span className="text-[11px] text-slate-400 block mb-1">推奨装飾品スロット例:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {build.decorations.map((deco, idx) => (
                              <span key={idx} className="text-[11px] bg-[#1a2030] text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                                {deco}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* 主要発動スキル */}
                      <div className="bg-[#0e121a] p-3.5 rounded-lg border border-slate-800 space-y-2">
                        <div className="text-xs font-bold text-sky-400 flex items-center space-x-1.5 mb-2">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>主要発動スキル＆効果</span>
                        </div>
                        <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                          {build.keySkills.map((skill, idx) => (
                            <div key={idx} className="bg-[#131824] p-2 rounded border border-slate-800 text-xs">
                              <div className="flex items-center justify-between mb-0.5">
                                <span className="font-bold text-white">{skill.name}</span>
                                <span className="text-amber-400 font-bold text-[11px]">Lv.{skill.level}</span>
                              </div>
                              <p className="text-[11px] text-slate-400">{skill.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* 作成方法・派生チャート・必要素材 */}
                    <div className="bg-[#10141f] p-3.5 rounded-lg border border-amber-500/20 space-y-2">
                      <div className="text-xs font-bold text-amber-400 flex items-center space-x-1.5">
                        <Wrench className="w-3.5 h-3.5" />
                        <span>武器の作成方法・派生ツリー＆必要素材</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                        <div>
                          <span className="text-[10px] text-slate-400 block">ベース武器 & 派生</span>
                          <span className="font-semibold text-slate-200">{build.craftingSteps.baseWeapon}</span>
                          <span className="text-slate-400 block text-[11px]">→ {build.craftingSteps.derivedTree}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 block">主要キー素材</span>
                          <div className="flex flex-wrap gap-1 mt-0.5">
                            {build.craftingSteps.keyMaterials.map((mat, i) => (
                              <span key={i} className="text-[10px] bg-slate-800 text-amber-300 px-1.5 py-0.5 rounded">
                                {mat}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-400 block">効率作成Tips</span>
                          <p className="text-[11px] text-slate-300">{build.craftingSteps.tips}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. 5属性特化装備タブ */}
          {viewMode === 'elements' && selectedWeapon.elementalWeapons && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-center space-x-2">
                    <Flame className="w-4 h-4 text-rose-400" />
                    <span>{selectedWeapon.name} 5大属性（火・水・雷・氷・龍）特化ラインナップ</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    ワイルズの属性環境に完全適合した、各属性の最高峰武器・推奨スキル・派生元
                  </p>
                </div>

                {/* 属性フィルターボタン */}
                <div className="flex items-center bg-[#0e121a] p-1 rounded-lg border border-slate-800 self-start sm:self-auto">
                  <button
                    onClick={() => setSelectedElementFilter('all')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold ${
                      selectedElementFilter === 'all' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'
                    }`}
                  >
                    全属性
                  </button>
                  <button
                    onClick={() => setSelectedElementFilter('fire')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold ${
                      selectedElementFilter === 'fire' ? 'bg-rose-500 text-white font-bold' : 'text-rose-400'
                    }`}
                  >
                    火
                  </button>
                  <button
                    onClick={() => setSelectedElementFilter('water')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold ${
                      selectedElementFilter === 'water' ? 'bg-sky-500 text-white font-bold' : 'text-sky-400'
                    }`}
                  >
                    水
                  </button>
                  <button
                    onClick={() => setSelectedElementFilter('thunder')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold ${
                      selectedElementFilter === 'thunder' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-amber-400'
                    }`}
                  >
                    雷
                  </button>
                  <button
                    onClick={() => setSelectedElementFilter('ice')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold ${
                      selectedElementFilter === 'ice' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-cyan-400'
                    }`}
                  >
                    氷
                  </button>
                  <button
                    onClick={() => setSelectedElementFilter('dragon')}
                    className={`px-2.5 py-1 rounded text-xs font-semibold ${
                      selectedElementFilter === 'dragon' ? 'bg-purple-500 text-white font-bold' : 'text-purple-400'
                    }`}
                  >
                    龍
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedWeapon.elementalWeapons
                  .filter(ew => selectedElementFilter === 'all' || ew.element === selectedElementFilter)
                  .map((ew) => {
                    const getElementColor = (el: string) => {
                      switch (el) {
                        case 'fire': return 'border-rose-500/40 bg-rose-500/10 text-rose-300';
                        case 'water': return 'border-sky-500/40 bg-sky-500/10 text-sky-300';
                        case 'thunder': return 'border-amber-500/40 bg-amber-500/10 text-amber-300';
                        case 'ice': return 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300';
                        case 'dragon': return 'border-purple-500/40 bg-purple-500/10 text-purple-300';
                        default: return 'border-slate-800 bg-slate-800 text-slate-300';
                      }
                    };

                    return (
                      <div
                        key={ew.element}
                        className="bg-[#141824] border border-slate-800 rounded-xl p-4 space-y-3 hover:border-slate-700 transition-colors shadow-lg"
                      >
                        <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                          <div>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${getElementColor(ew.element)}`}>
                              {ew.elementLabel}
                            </span>
                            <h5 className="text-base font-bold text-white mt-1">
                              {ew.weaponName}
                            </h5>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] text-slate-400 block">入手元</span>
                            <span className="text-xs font-semibold text-slate-200">{ew.monsterSource}</span>
                          </div>
                        </div>

                        {/* ステータス */}
                        <div className="grid grid-cols-3 gap-2 bg-[#0e121a] p-2.5 rounded-lg border border-slate-800 text-center text-xs">
                          <div>
                            <span className="text-[10px] text-slate-400 block">攻撃力</span>
                            <span className="font-bold text-white">{ew.attack}</span>
                          </div>
                          <div className="border-l border-slate-800">
                            <span className="text-[10px] text-slate-400 block">属性値</span>
                            <span className="font-bold text-amber-400">{ew.elementValue}</span>
                          </div>
                          <div className="border-l border-slate-800">
                            <span className="text-[10px] text-slate-400 block">会心率 / 切れ味</span>
                            <span className="font-bold text-slate-300">{ew.affinity}% / {ew.sharpnessOrAmmo}</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed">
                          {ew.description}
                        </p>

                        {/* 推奨スキル */}
                        <div className="text-xs space-y-1">
                          <span className="text-[10px] text-slate-400 font-bold block">推奨特化スキル:</span>
                          <div className="flex flex-wrap gap-1">
                            {ew.recommendedSkills.map((sk, idx) => (
                              <span key={idx} className="bg-[#1b2234] border border-slate-700 text-slate-200 text-[11px] px-2 py-0.5 rounded">
                                {sk}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* 3. 立ち回り優位性タブ */}
          {viewMode === 'tactics' && selectedWeapon.tacticalAdvantages && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3">
                <h4 className="text-sm sm:text-base font-bold text-white flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>コンボだけで勝てない理由：{selectedWeapon.name}の「操作・立ち回り優位性」</span>
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  相殺判定の奪取、集中モードでの弱点定点照射、ジャストガード守勢、抜刀アイテム即応等の実戦アドバンテージ
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedWeapon.tacticalAdvantages.map((tac, idx) => (
                  <div
                    key={idx}
                    className="bg-[#151a28] border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3 hover:border-slate-700 transition-colors shadow-lg"
                  >
                    <div className="flex items-start space-x-2.5">
                      <span className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-300 font-bold flex items-center justify-center text-xs flex-shrink-0 border border-amber-500/30">
                        {idx + 1}
                      </span>
                      <h5 className="text-sm sm:text-base font-bold text-white">
                        {tac.title}
                      </h5>
                    </div>

                    <div className="bg-[#0e121a] p-3 rounded-lg border border-slate-800 text-xs text-slate-300 leading-relaxed">
                      <strong className="text-slate-200 block mb-1">【メカニズムと優位性】</strong>
                      {tac.description}
                    </div>

                    <div className="bg-amber-500/5 border border-amber-500/20 p-3 rounded-lg text-xs text-amber-200/90 leading-relaxed">
                      <strong className="text-amber-400 block mb-1">【実戦でのアドバンテージ獲得法】</strong>
                      {tac.howToGainAdvantage}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. コンボ＆操作表タブ */}
          {viewMode === 'combos' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
                <h4 className="text-sm sm:text-base font-bold text-white flex items-center space-x-2">
                  <Crosshair className="w-4 h-4 text-emerald-400" />
                  <span>{selectedWeapon.name} 状況別コンボルート＆入力手順</span>
                </h4>
                <span className="text-xs text-slate-400">
                  全{selectedWeapon.combos.length}パターン
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedWeapon.combos.map((combo, idx) => (
                  <div
                    key={idx}
                    className="bg-[#151a26] border border-slate-800 rounded-xl p-4 space-y-3 hover:border-slate-700 transition-colors shadow-lg"
                  >
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                      <span className="text-sm font-bold text-white">{combo.name}</span>
                      <span className="text-[10px] bg-slate-800 text-amber-300 px-2 py-0.5 rounded border border-slate-700">
                        {combo.situationLabel}
                      </span>
                    </div>

                    {/* コマンド手順 */}
                    <div className="bg-[#0e121a] p-3 rounded-lg border border-slate-800 space-y-1.5">
                      <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">入力手順</span>
                      <div className="flex flex-wrap items-center gap-1.5 text-xs">
                        {combo.inputs.map((inp, i) => (
                          <React.Fragment key={i}>
                            <span className="bg-[#1b2234] border border-slate-700 text-amber-300 px-2 py-1 rounded font-mono font-bold">
                              {inp}
                            </span>
                            {i < combo.inputs.length - 1 && (
                              <span className="text-slate-500 font-bold">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {combo.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

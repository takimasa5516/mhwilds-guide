import React, { useState } from 'react';
import { monstersData } from '../data/monstersData';
import { MonsterData } from '../types';
import { ShieldAlert, Zap, Droplets, Flame, Snowflake, Skull, AlertCircle, Crosshair, MapPin, Eye, Award, Filter } from 'lucide-react';

export const MonsterDatabaseSection: React.FC = () => {
  const [selectedMonsterId, setSelectedMonsterId] = useState<string>('zoh-shia');
  const [elementFilter, setElementFilter] = useState<string>('all');
  const [habitatFilter, setHabitatFilter] = useState<string>('all');
  const [threatFilter, setThreatFilter] = useState<string>('all');

  const selectedMonster = monstersData.find(m => m.id === selectedMonsterId) || monstersData[0];

  const filteredMonsters = monstersData.filter(m => {
    // 属性弱点フィルター
    if (elementFilter === 'fire' && m.weaknessElements.fire < 2) return false;
    if (elementFilter === 'water' && m.weaknessElements.water < 2) return false;
    if (elementFilter === 'thunder' && m.weaknessElements.thunder < 2) return false;
    if (elementFilter === 'ice' && m.weaknessElements.ice < 2) return false;
    if (elementFilter === 'dragon' && m.weaknessElements.dragon < 2) return false;

    // 生息地フィルター
    if (habitatFilter !== 'all') {
      const matchHabitat = m.habitat.some(h => h.includes(habitatFilter));
      if (!matchHabitat) return false;
    }

    // 危険度フィルター
    if (threatFilter === 'high' && m.threatLevel < 5) return false;
    if (threatFilter === 'mid' && (m.threatLevel < 3 || m.threatLevel > 4)) return false;
    if (threatFilter === 'low' && m.threatLevel > 2) return false;

    return true;
  });

  const renderStars = (count: number) => {
    if (count === 0) return <span className="text-slate-600 font-bold">✕ (無効)</span>;
    return (
      <span className="text-amber-400 font-bold">
        {'★'.repeat(count)}
      </span>
    );
  };

  const getMainWeaknessBadge = (m: MonsterData) => {
    const list: { name: string; color: string; val: number }[] = [
      { name: '火', color: 'bg-red-500/20 text-red-300 border-red-500/30', val: m.weaknessElements.fire },
      { name: '水', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30', val: m.weaknessElements.water },
      { name: '雷', color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30', val: m.weaknessElements.thunder },
      { name: '氷', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30', val: m.weaknessElements.ice },
      { name: '龍', color: 'bg-purple-500/20 text-purple-300 border-purple-500/30', val: m.weaknessElements.dragon },
    ];
    list.sort((a, b) => b.val - a.val);
    const top = list[0];
    if (top.val === 0) return null;
    return (
      <span className={`text-[9px] px-1.5 py-0.2 rounded border font-semibold ${top.color}`}>
        {top.name}弱点 ★{top.val}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* セクションヘッダー */}
      <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>Monster Database & Tactics</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            全20体 モンスター生態・弱点属性＆立ち回り完全攻略
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            白熾龍ゾ・シア、鎖刃竜アルシュベルド、頂点捕食者、新種蛸・蜘蛛から復活人気モンスターまで完全網羅
          </p>
        </div>

        <div className="flex items-center space-x-2 self-start sm:self-auto">
          <span className="text-xs font-bold bg-[#151924] text-amber-300 px-3 py-1.5 rounded-lg border border-amber-500/30">
            登録数: {monstersData.length}体
          </span>
        </div>
      </div>

      {/* 多機能フィルターバー */}
      <div className="bg-[#121622] p-3.5 rounded-xl border border-slate-800 space-y-3">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
          
          {/* 弱点属性フィルター */}
          <div className="flex items-center space-x-1.5 overflow-x-auto scrollbar-none">
            <span className="text-slate-400 font-bold whitespace-nowrap">弱点属性:</span>
            <button
              onClick={() => setElementFilter('all')}
              className={`px-2.5 py-1 rounded text-xs font-semibold ${
                elementFilter === 'all' ? 'bg-amber-500 text-slate-950' : 'bg-[#181d2a] text-slate-400 hover:text-white'
              }`}
            >
              全員
            </button>
            <button
              onClick={() => setElementFilter('fire')}
              className={`px-2 py-1 rounded text-xs font-semibold flex items-center space-x-1 ${
                elementFilter === 'fire' ? 'bg-red-500 text-white' : 'bg-[#181d2a] text-red-400 hover:bg-red-950/40'
              }`}
            >
              <Flame className="w-3 h-3" />
              <span>火</span>
            </button>
            <button
              onClick={() => setElementFilter('water')}
              className={`px-2 py-1 rounded text-xs font-semibold flex items-center space-x-1 ${
                elementFilter === 'water' ? 'bg-blue-500 text-white' : 'bg-[#181d2a] text-blue-400 hover:bg-blue-950/40'
              }`}
            >
              <Droplets className="w-3 h-3" />
              <span>水</span>
            </button>
            <button
              onClick={() => setElementFilter('thunder')}
              className={`px-2 py-1 rounded text-xs font-semibold flex items-center space-x-1 ${
                elementFilter === 'thunder' ? 'bg-yellow-500 text-slate-950' : 'bg-[#181d2a] text-yellow-400 hover:bg-yellow-950/40'
              }`}
            >
              <Zap className="w-3 h-3" />
              <span>雷</span>
            </button>
            <button
              onClick={() => setElementFilter('ice')}
              className={`px-2 py-1 rounded text-xs font-semibold flex items-center space-x-1 ${
                elementFilter === 'ice' ? 'bg-cyan-500 text-slate-950' : 'bg-[#181d2a] text-cyan-400 hover:bg-cyan-950/40'
              }`}
            >
              <Snowflake className="w-3 h-3" />
              <span>氷</span>
            </button>
          </div>

          {/* 生息地フィルター */}
          <div className="flex items-center space-x-1.5 overflow-x-auto scrollbar-none border-l border-slate-800 pl-3">
            <span className="text-slate-400 font-bold whitespace-nowrap">生息地:</span>
            <button
              onClick={() => setHabitatFilter('all')}
              className={`px-2.5 py-1 rounded text-xs font-semibold ${
                habitatFilter === 'all' ? 'bg-amber-500 text-slate-950' : 'bg-[#181d2a] text-slate-400 hover:text-white'
              }`}
            >
              全域
            </button>
            <button
              onClick={() => setHabitatFilter('砂原')}
              className={`px-2 py-1 rounded text-xs font-semibold ${
                habitatFilter === '砂原' ? 'bg-amber-600 text-white' : 'bg-[#181d2a] text-amber-300'
              }`}
            >
              隔ての砂原
            </button>
            <button
              onClick={() => setHabitatFilter('森')}
              className={`px-2 py-1 rounded text-xs font-semibold ${
                habitatFilter === '森' ? 'bg-emerald-600 text-white' : 'bg-[#181d2a] text-emerald-300'
              }`}
            >
              緋の森
            </button>
            <button
              onClick={() => setHabitatFilter('油')}
              className={`px-2 py-1 rounded text-xs font-semibold ${
                habitatFilter === '油' ? 'bg-orange-600 text-white' : 'bg-[#181d2a] text-orange-300'
              }`}
            >
              油涌き谷
            </button>
            <button
              onClick={() => setHabitatFilter('禁足地')}
              className={`px-2 py-1 rounded text-xs font-semibold ${
                habitatFilter === '禁足地' ? 'bg-purple-600 text-white' : 'bg-[#181d2a] text-purple-300'
              }`}
            >
              禁足地
            </button>
          </div>

          {/* 危険度フィルター */}
          <div className="flex items-center space-x-1.5 border-l border-slate-800 pl-3">
            <span className="text-slate-400 font-bold whitespace-nowrap">危険度:</span>
            <button
              onClick={() => setThreatFilter('all')}
              className={`px-2.5 py-1 rounded text-xs font-semibold ${
                threatFilter === 'all' ? 'bg-amber-500 text-slate-950' : 'bg-[#181d2a] text-slate-400 hover:text-white'
              }`}
            >
              全て
            </button>
            <button
              onClick={() => setThreatFilter('high')}
              className={`px-2 py-1 rounded text-xs font-semibold ${
                threatFilter === 'high' ? 'bg-rose-600 text-white' : 'bg-[#181d2a] text-rose-400'
              }`}
            >
              ★5 古龍・頂点
            </button>
            <button
              onClick={() => setThreatFilter('mid')}
              className={`px-2 py-1 rounded text-xs font-semibold ${
                threatFilter === 'mid' ? 'bg-amber-600 text-white' : 'bg-[#181d2a] text-amber-400'
              }`}
            >
              ★3〜4 中上位
            </button>
          </div>

        </div>
      </div>

      {/* モンスター選択カルーセル/グリッド（全14体） */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {filteredMonsters.map((monster) => {
          const isSelected = monster.id === selectedMonsterId;
          return (
            <button
              key={monster.id}
              onClick={() => setSelectedMonsterId(monster.id)}
              className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-500/15 border-amber-500 text-white shadow-lg shadow-amber-500/10'
                  : 'bg-[#141824] border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-[#1a2030]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-amber-400 font-bold">
                    ★{monster.threatLevel}
                  </span>
                  <span className="text-[9px] px-1 py-0.2 rounded bg-slate-800 text-slate-400 truncate max-w-[60px]">
                    {monster.species.split('（')[0]}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white truncate">
                  {monster.name}
                </div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">
                  {monster.nameEn}
                </div>
              </div>

              {/* 主要弱点バッジ */}
              <div className="mt-2">
                {getMainWeaknessBadge(monster)}
              </div>
            </button>
          );
        })}
      </div>

      {/* 選択されたモンスターの詳細ビュー */}
      <div className="bg-[#121622] rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
        {/* モンスターヘッダー */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-[#181e2e] to-[#121622] border-b border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold">
                  危険度 ★{selectedMonster.threatLevel}
                </span>
                <span className="text-xs text-slate-400">
                  {selectedMonster.species}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {selectedMonster.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                {selectedMonster.description}
              </p>
            </div>

            {/* 生息地 */}
            <div className="bg-[#0e121a] p-3 rounded-xl border border-slate-800 flex items-center space-x-2 text-xs flex-shrink-0 self-start md:self-center">
              <MapPin className="w-4 h-4 text-amber-400" />
              <div>
                <span className="text-[10px] text-slate-400 block">主な出現フィールド</span>
                <span className="font-semibold text-slate-200">
                  {selectedMonster.habitat.join(' / ')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 弱点・肉質・耐性マトリクス */}
        <div className="p-4 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 属性弱点表 */}
            <div className="bg-[#161a26] p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="text-xs font-bold text-amber-400 flex items-center space-x-1.5 uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5" />
                <span>属性弱点耐性表（星が多いほど有効）</span>
              </div>
              <div className="grid grid-cols-5 gap-2 text-center text-xs">
                <div className="bg-[#0e121a] p-2.5 rounded-lg border border-slate-800">
                  <span className="text-[11px] text-red-400 font-bold block mb-1">火</span>
                  {renderStars(selectedMonster.weaknessElements.fire)}
                </div>
                <div className="bg-[#0e121a] p-2.5 rounded-lg border border-slate-800">
                  <span className="text-[11px] text-blue-400 font-bold block mb-1">水</span>
                  {renderStars(selectedMonster.weaknessElements.water)}
                </div>
                <div className="bg-[#0e121a] p-2.5 rounded-lg border border-slate-800">
                  <span className="text-[11px] text-yellow-400 font-bold block mb-1">雷</span>
                  {renderStars(selectedMonster.weaknessElements.thunder)}
                </div>
                <div className="bg-[#0e121a] p-2.5 rounded-lg border border-slate-800">
                  <span className="text-[11px] text-cyan-400 font-bold block mb-1">氷</span>
                  {renderStars(selectedMonster.weaknessElements.ice)}
                </div>
                <div className="bg-[#0e121a] p-2.5 rounded-lg border border-slate-800">
                  <span className="text-[11px] text-purple-400 font-bold block mb-1">龍</span>
                  {renderStars(selectedMonster.weaknessElements.dragon)}
                </div>
              </div>
            </div>

            {/* 状態異常耐性表 */}
            <div className="bg-[#161a26] p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="text-xs font-bold text-sky-400 flex items-center space-x-1.5 uppercase tracking-wider">
                <Skull className="w-3.5 h-3.5" />
                <span>状態異常有効度</span>
              </div>
              <div className="grid grid-cols-5 gap-2 text-center text-xs">
                <div className="bg-[#0e121a] p-2.5 rounded-lg border border-slate-800">
                  <span className="text-[11px] text-purple-400 font-bold block mb-1">毒</span>
                  {renderStars(selectedMonster.statusWeakness.poison)}
                </div>
                <div className="bg-[#0e121a] p-2.5 rounded-lg border border-slate-800">
                  <span className="text-[11px] text-amber-400 font-bold block mb-1">麻痺</span>
                  {renderStars(selectedMonster.statusWeakness.paralysis)}
                </div>
                <div className="bg-[#0e121a] p-2.5 rounded-lg border border-slate-800">
                  <span className="text-[11px] text-sky-400 font-bold block mb-1">睡眠</span>
                  {renderStars(selectedMonster.statusWeakness.sleep)}
                </div>
                <div className="bg-[#0e121a] p-2.5 rounded-lg border border-slate-800">
                  <span className="text-[11px] text-orange-400 font-bold block mb-1">爆破</span>
                  {renderStars(selectedMonster.statusWeakness.blast)}
                </div>
                <div className="bg-[#0e121a] p-2.5 rounded-lg border border-slate-800">
                  <span className="text-[11px] text-emerald-400 font-bold block mb-1">スタン</span>
                  {renderStars(selectedMonster.statusWeakness.stun)}
                </div>
              </div>
            </div>
          </div>

          {/* 弱点部位 & 部位破壊 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#10141f] p-3.5 rounded-xl border border-slate-800 text-xs space-y-2">
              <div className="font-bold text-amber-400 flex items-center space-x-1.5">
                <Crosshair className="w-3.5 h-3.5" />
                <span>主な弱点部位（集中弱点攻撃の狙い目）</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedMonster.weakParts.map((part, i) => (
                  <span key={i} className="bg-[#182030] text-amber-200 px-2.5 py-1 rounded-lg border border-amber-500/30">
                    {part}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#10141f] p-3.5 rounded-xl border border-slate-800 text-xs space-y-2">
              <div className="font-bold text-emerald-400 flex items-center space-x-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>破壊可能部位（報酬・弱体化）</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedMonster.severableParts.map((part, i) => (
                  <span key={i} className="bg-[#182030] text-emerald-200 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                    {part}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 固有ギミック解説 */}
          <div className="bg-[#151a26] p-4 rounded-xl border border-slate-800 space-y-2.5">
            <div className="text-xs font-bold text-yellow-400 flex items-center space-x-1.5 uppercase tracking-wider">
              <Eye className="w-3.5 h-3.5" />
              <span>固有ギミック＆形態変化の仕様</span>
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              {selectedMonster.gimmicks.map((gimmick, idx) => (
                <div key={idx} className="bg-[#0e121a] p-3 rounded-lg border border-slate-800 leading-relaxed">
                  {gimmick}
                </div>
              ))}
            </div>
          </div>

          {/* 危険技・予備動作＆反撃対策 */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-rose-400 flex items-center space-x-1.5 uppercase tracking-wider">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>要注意！危険な大技の予備動作と反撃対策</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedMonster.dangerMoves.map((move, idx) => (
                <div
                  key={idx}
                  className="bg-[#161a26] border border-rose-900/40 rounded-xl p-4 space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-rose-300 text-sm">
                      ⚠️ {move.name}
                    </span>
                    <span className="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-800">
                      即死・大ダメージ注意
                    </span>
                  </div>

                  <div className="bg-[#0e121a] p-2.5 rounded-lg border border-slate-800 text-xs">
                    <span className="text-amber-400 font-bold block mb-0.5">【予備動作】:</span>
                    <p className="text-slate-300">{move.cue}</p>
                  </div>

                  <div className="bg-emerald-950/20 p-2.5 rounded-lg border border-emerald-900/40 text-xs">
                    <span className="text-emerald-400 font-bold block mb-0.5">【回避＆反撃タイミング】:</span>
                    <p className="text-slate-200">{move.countermeasure}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 狩猟Tips */}
          <div className="bg-gradient-to-r from-amber-950/20 via-[#151a26] to-[#151a26] p-4 rounded-xl border border-amber-500/30 space-y-2">
            <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
              ハンターへの実践狩猟アドバイス
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
              {selectedMonster.huntingTips.map((tip, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

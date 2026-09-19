import React, { useState } from 'react';
import { weaponsData } from '../data/weaponsData';
import { WeaponType } from '../types';
import { Crosshair, Shield, Target, Zap, Sparkles, ChevronRight, BookOpen } from 'lucide-react';

export const CombosOverviewSection: React.FC = () => {
  const [selectedWeaponId, setSelectedWeaponId] = useState<WeaponType>('greatsword');
  const selectedWeapon = weaponsData.find(w => w.id === selectedWeaponId) || weaponsData[0];

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Crosshair className="w-4 h-4" />
          <span>Combat & Action Guide</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
          立ち回り極意・相殺＆集中弱点攻撃コンボ集
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
          新システム「集中モード」「傷口破壊」「相殺」をマスターし、ダメージ効率を極限まで高める
        </p>
      </div>

      {/* ワイルズ新戦闘システム 4大レクチャー */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-[#141824] border border-amber-500/30 p-4 rounded-xl space-y-2">
          <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs">
            <Target className="w-4 h-4" />
            <span>① 集中モード（L2長押し）</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            照準を向けた方向へダイレクトに攻撃・ガードが可能。大剣の溜め斬りや太刀の気刃斬りの向きを攻撃直前まで360度コントロール可能に。
          </p>
        </div>

        <div className="bg-[#141824] border border-rose-500/30 p-4 rounded-xl space-y-2">
          <div className="flex items-center space-x-2 text-rose-400 font-bold text-xs">
            <Zap className="w-4 h-4" />
            <span>② 傷口＆集中弱点攻撃（R1）</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            攻撃を重ねて赤く光った傷口へ集中弱点攻撃を放つと、確定で大ダメージ＋特殊ダウン＋モンスター素材の追加入手が発生！
          </p>
        </div>

        <div className="bg-[#141824] border border-sky-500/30 p-4 rounded-xl space-y-2">
          <div className="flex items-center space-x-2 text-sky-400 font-bold text-xs">
            <Shield className="w-4 h-4" />
            <span>③ 相殺（カウンター撃墜）</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            モンスターの攻撃モーションに特定の攻撃（大剣の相殺斬り上げ、ハンマーの相殺溜め等）を合わせると、攻撃を無効化し大怯みを奪う。
          </p>
        </div>

        <div className="bg-[#141824] border border-emerald-500/30 p-4 rounded-xl space-y-2">
          <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs">
            <Sparkles className="w-4 h-4" />
            <span>④ サブ武器持ち替え連携</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            セクレト（乗騎）から瞬時に武器をスイッチ。麻痺武器でモンスターを行動不能にした直後、高火力大剣に持ち替えて真・溜め斬りを放つ等の戦略が可能。
          </p>
        </div>
      </div>

      {/* 武器選択タブ */}
      <div className="bg-[#111520] p-3 rounded-2xl border border-slate-800">
        <div className="text-xs font-bold text-slate-400 mb-2 px-1">立ち回りを調べる武器種を選択:</div>
        <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-thin">
          {weaponsData.map((weapon) => (
            <button
              key={weapon.id}
              onClick={() => setSelectedWeaponId(weapon.id)}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedWeaponId === weapon.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-[#181d2c] text-slate-300 hover:bg-[#20273b] border border-slate-800'
              }`}
            >
              <span>{weapon.icon}</span>
              <span>{weapon.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 選択された武器の立ち回り＆コンボ表 */}
      <div className="bg-[#121622] rounded-2xl border border-slate-800 p-4 sm:p-6 space-y-6 shadow-xl">
        {/* 武器基本サマリー */}
        <div className="flex items-center space-x-3 border-b border-slate-800/80 pb-4">
          <span className="text-3xl">{selectedWeapon.icon}</span>
          <div>
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <span>{selectedWeapon.name}の戦闘マニュアル</span>
              <span className="text-xs text-slate-400 font-normal">({selectedWeapon.nameEn})</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">{selectedWeapon.summary}</p>
          </div>
        </div>

        {/* 立ち回りのコツ */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-emerald-400 flex items-center space-x-1.5 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>立ち回り・基本の心得</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {selectedWeapon.tips.map((tip, idx) => (
              <div key={idx} className="bg-[#0e121a] p-3 rounded-lg border border-slate-800 text-xs text-slate-200">
                <div className="text-emerald-400 font-bold mb-1">Point {idx + 1}</div>
                <p>{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* コンボ一覧 */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-amber-400 flex items-center space-x-1.5 uppercase tracking-wider">
            <Crosshair className="w-3.5 h-3.5" />
            <span>シチュエーション別 推奨コンボ（コマンド入力手順）</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedWeapon.combos.map((combo, idx) => (
              <div
                key={idx}
                className="bg-[#161a26] border border-slate-800 rounded-xl p-4 space-y-3 hover:border-amber-500/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      combo.situation === 'wound'
                        ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                        : combo.situation === 'counter'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : combo.situation === 'down'
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                        : 'bg-slate-700 text-slate-300'
                    }`}>
                      {combo.situationLabel}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {combo.name}
                    </h4>
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    combo.damageRating === 'extreme'
                      ? 'bg-rose-500/20 text-rose-300'
                      : 'bg-amber-500/20 text-amber-300'
                  }`}>
                    {combo.damageRating === 'extreme' ? '超火力 ★★★' : '高火力 ★★'}
                  </span>
                </div>

                {/* 入力ボタン手順 */}
                <div className="bg-[#0d1017] p-3 rounded-lg border border-slate-800/80">
                  <div className="text-[10px] text-slate-400 mb-1.5 font-medium">操作コマンド:</div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {combo.inputs.map((step, i) => (
                      <React.Fragment key={i}>
                        <span className="text-xs bg-[#1f2638] text-amber-300 px-2 py-1 rounded font-mono font-bold border border-slate-700 shadow-sm">
                          {step}
                        </span>
                        {i < combo.inputs.length - 1 && (
                          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
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
      </div>
    </div>
  );
};

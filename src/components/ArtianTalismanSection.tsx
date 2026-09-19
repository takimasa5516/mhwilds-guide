import React, { useState } from 'react';
import { artianGearData, talismanSystemData } from '../data/artianAndTalismanData';
import { Shield, Sparkles, Gem, ArrowUpCircle, Flame, Layers, Award, CheckCircle2, ChevronRight } from 'lucide-react';

export const ArtianTalismanSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'artian' | 'talisman' | 'limitBreak'>('artian');

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Gem className="w-4 h-4" />
            <span>Endgame Optimization Guide</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            古代遺構アーティア装備 ＆ 護石錬金・神おま完全攻略
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            エンドコンテンツのキメラ装備に必須となる「超スロット特化アーティア」と「護石厳選・限界突破」を徹底解説
          </p>
        </div>

        {/* タブ切り替え */}
        <div className="flex items-center bg-[#131722] p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('artian')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'artian'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>アーティア防具</span>
          </button>
          <button
            onClick={() => setActiveTab('talisman')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'talisman'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Gem className="w-4 h-4" />
            <span>護石錬金・神おま</span>
          </button>
          <button
            onClick={() => setActiveTab('limitBreak')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'limitBreak'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ArrowUpCircle className="w-4 h-4" />
            <span>限界突破強化</span>
          </button>
        </div>
      </div>

      {/* アーティア防具セクション */}
      {activeTab === 'artian' && (
        <div className="space-y-6">
          {/* アーティア概要バナー */}
          <div className="bg-gradient-to-r from-[#171e2e] via-[#141824] to-[#11141d] border border-amber-500/40 rounded-2xl p-4 sm:p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl">⚙️</span>
              <h3 className="text-lg sm:text-xl font-black text-white">
                {artianGearData.seriesName}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
              {artianGearData.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              <div className="bg-[#0e121a]/80 p-3 rounded-xl border border-slate-800 text-xs">
                <span className="text-amber-400 font-bold block mb-1">【解放条件】</span>
                <span className="text-slate-300">{artianGearData.unlockCondition}</span>
              </div>
              <div className="bg-[#0e121a]/80 p-3 rounded-xl border border-amber-500/30 text-xs">
                <span className="text-amber-300 font-bold flex items-center space-x-1 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>シリーズスキル: {artianGearData.setBonus.name}</span>
                </span>
                <span className="text-slate-200 block font-semibold">{artianGearData.setBonus.requirement}</span>
                <span className="text-slate-300 text-[11px] mt-0.5 block">{artianGearData.setBonus.effect}</span>
              </div>
            </div>
          </div>

          {/* 各部位（頭・胴・腕・腰・脚）カード一覧 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {artianGearData.pieces.map((piece) => (
              <div
                key={piece.part}
                className="bg-[#131722] border border-slate-800 rounded-2xl p-4 space-y-3 hover:border-slate-700 transition-colors shadow-lg"
              >
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                  <div className="flex items-center space-x-2">
                    <span className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center justify-center text-xs font-bold">
                      {piece.part}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {piece.name}
                    </h4>
                  </div>
                  {/* スロット表示 */}
                  <div className="bg-[#0c0f16] px-2.5 py-1 rounded-lg border border-slate-700 font-mono text-xs font-bold text-amber-400">
                    {piece.slots}
                  </div>
                </div>

                {/* 内蔵スキル */}
                <div className="bg-[#0e121a] p-2.5 rounded-xl border border-slate-800 space-y-1.5">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">内蔵スキル</span>
                  <div className="flex flex-wrap gap-1.5">
                    {piece.builtInSkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-[#171d2b] border border-slate-700 text-slate-200 text-xs px-2 py-0.5 rounded font-medium"
                      >
                        {skill.name} Lv{skill.level}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 必要素材 */}
                <div className="text-xs space-y-1">
                  <span className="text-[10px] text-slate-400 block font-bold">生産キー素材</span>
                  <div className="flex flex-wrap gap-1 text-[11px] text-slate-300">
                    {piece.craftingMaterials.map((mat, idx) => (
                      <span key={idx} className="bg-slate-800/60 px-2 py-0.5 rounded border border-slate-800">
                        {mat.material} ×{mat.count}
                      </span>
                    ))}
                  </div>
                </div>

                {/* キメラ採用理由 */}
                <div className="bg-amber-500/5 border border-amber-500/20 p-2.5 rounded-xl text-xs text-amber-200/90 leading-relaxed">
                  <strong className="text-amber-400 block mb-0.5">採用おすすめ理由:</strong>
                  {piece.recommendedUse}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 護石錬金・神おまセクション */}
      {activeTab === 'talisman' && (
        <div className="space-y-6">
          {/* 護石錬金の仕組み */}
          <div className="bg-[#121622] border border-slate-800 rounded-2xl p-4 sm:p-6 space-y-4 shadow-xl">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center space-x-2">
              <Flame className="w-5 h-5 text-amber-400" />
              <span>マカ錬金屋の3大錬金術と使い分け</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {talismanSystemData.alchemyMethods.map((method) => (
                <div
                  key={method.name}
                  className="bg-[#161a26] border border-slate-800 rounded-xl p-4 space-y-2.5 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {method.name}
                    </h4>
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                      {method.unlockTiming}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {method.description}
                  </p>
                  <div className="bg-[#0e121a] p-2 rounded-lg border border-slate-800 text-xs">
                    <span className="text-[10px] text-slate-400 block">消費コスト</span>
                    <span className="text-amber-300 font-medium">{method.cost}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    <span className="font-bold text-slate-300 block mb-1">排出対象スキル:</span>
                    <div className="flex flex-wrap gap-1">
                      {method.targetSkills.map((s, idx) => (
                        <span key={idx} className="bg-slate-800 px-1.5 py-0.5 rounded text-[10px] text-slate-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 神おま（理想護石）早見表 */}
          <div className="bg-[#121622] border border-slate-800 rounded-2xl p-4 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center space-x-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span>エンドコンテンツ「神おま（Sランク護石）」厳選早見表</span>
                </h3>
                <span className="text-xs text-slate-400">これが出たら即ゴール！ビルドの自由度を劇的に跳ね上げる至高の護石</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {talismanSystemData.metaTalismans.map((meta) => (
                <div
                  key={meta.name}
                  className="bg-[#161a26] border border-amber-500/30 rounded-xl p-4 space-y-2.5 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm sm:text-base font-bold text-white flex items-center space-x-1.5">
                      <span className="text-amber-400">★</span>
                      <span>{meta.name}</span>
                    </h4>
                    <span className="text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                      {meta.slots}
                    </span>
                  </div>

                  <div className="bg-[#0e121a] p-3 rounded-lg border border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-400 block font-bold">理想スキル構成</span>
                    <span className="text-sm font-bold text-emerald-400 block">{meta.idealSkills}</span>
                  </div>

                  <div className="text-xs text-slate-300 flex items-center justify-between pt-1">
                    <span>推奨武器種: <strong className="text-white">{meta.recommendedFor}</strong></span>
                    <span className="text-[10px] text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                      厳選難易度: {meta.difficultyRating}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 限界突破強化セクション */}
      {activeTab === 'limitBreak' && (
        <div className="bg-[#121622] border border-slate-800 rounded-2xl p-4 sm:p-6 space-y-5 shadow-xl">
          <div className="flex items-center space-x-2 text-amber-400">
            <ArrowUpCircle className="w-5 h-5" />
            <h3 className="text-base sm:text-lg font-bold text-white">
              {talismanSystemData.limitBreakGuide.title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            過去作の護石と異なり、ワイルズでは入手した護石を加工屋にて「限界突破強化」することが可能。スロットレベルの引き上げや第2スキルの効果値を底上げできます。
          </p>

          <div className="space-y-3">
            {talismanSystemData.limitBreakGuide.steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 bg-[#161a26] border border-slate-800 p-3.5 rounded-xl text-xs sm:text-sm text-slate-200"
              >
                <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-black flex-shrink-0 text-xs">
                  {idx + 1}
                </div>
                <div className="pt-0.5">
                  <span className="leading-relaxed">{step}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl text-xs sm:text-sm text-amber-200/90 flex items-start space-x-2.5">
            <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 block mb-1">限界突破の極意:</strong>
              <span>{talismanSystemData.limitBreakGuide.tips}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

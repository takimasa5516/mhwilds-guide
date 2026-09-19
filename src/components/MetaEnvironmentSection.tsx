import React, { useState } from 'react';
import { metaEnvironmentData } from '../data/metaData';
import { Flame, CheckCircle2, AlertTriangle, ChevronDown, ChevronUp, Layers, Crosshair, ArrowRight } from 'lucide-react';

interface MetaSectionProps {
  onSelectWeaponGuide: () => void;
}

export const MetaEnvironmentSection: React.FC<MetaSectionProps> = ({ onSelectWeaponGuide }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedTopic, setExpandedTopic] = useState<string | null>(metaEnvironmentData[0].id);

  const categories = [
    { id: 'all', label: 'すべて' },
    { id: 'element_vs_raw', label: '属性 vs 物理' },
    { id: 'status_meta', label: '状態異常武器' },
    { id: 'focus_mode', label: '集中モード・傷口' },
    { id: 'secondary_weapon', label: 'サブ武器運用' },
    { id: 'gear_progression', label: '進行度別チャート' },
  ];

  const filteredTopics = selectedCategory === 'all'
    ? metaEnvironmentData
    : metaEnvironmentData.filter(t => t.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* セクションタイトル */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4" />
            <span>Current Meta & Strategy</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            現状の攻略環境・戦闘システム分析
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            『ワイルズ』独自の「傷口」「集中モード」「武器2本持ち替え」が与える装備メタの徹底検証
          </p>
        </div>

        {/* 武器装備への誘導ボタン */}
        <button
          onClick={onSelectWeaponGuide}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-amber-600/20"
        >
          <span>武器種別 最強装備を見る</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* カテゴリフィルター */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === cat.id
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-700/60'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 環境トピック一覧 */}
      <div className="grid grid-cols-1 gap-4">
        {filteredTopics.map((topic) => {
          const isExpanded = expandedTopic === topic.id;
          return (
            <div
              key={topic.id}
              className={`rounded-xl border transition-all overflow-hidden ${
                isExpanded
                  ? 'bg-[#151924] border-amber-500/50 shadow-lg shadow-black/40'
                  : 'bg-[#12151e] border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* カードヘッダー */}
              <div
                onClick={() => setExpandedTopic(isExpanded ? null : topic.id)}
                className="p-4 sm:p-5 cursor-pointer select-none flex items-start justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {topic.categoryLabel}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {topic.summary}
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-slate-800/80 text-slate-300 flex-shrink-0 mt-1">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </div>

              {/* 展開される詳細コンテンツ */}
              {isExpanded && (
                <div className="px-4 sm:px-6 pb-5 pt-1 border-t border-slate-800/70 space-y-4">
                  {/* 詳細分析リスト */}
                  <div className="space-y-2 mt-2">
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1.5">
                      <Crosshair className="w-3.5 h-3.5" />
                      <span>環境メカニズム・詳細解説</span>
                    </div>
                    <div className="space-y-2 text-xs sm:text-sm text-slate-300 bg-[#0d1017] p-3.5 sm:p-4 rounded-lg border border-slate-800 leading-relaxed">
                      {topic.analysis.map((paragraph, idx) => (
                        <p key={idx} className="flex items-start space-x-2">
                          <span className="text-amber-500 font-bold mt-0.5">•</span>
                          <span>{paragraph}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* おすすめ方針・結論 */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>実践ハンター推奨ビルド方針</span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-200 bg-emerald-950/20 border border-emerald-900/40 p-3.5 sm:p-4 rounded-lg">
                      {topic.recommendations.map((rec, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* メリット＆デメリット（ある場合） */}
                  {topic.prosAndCons && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="bg-sky-950/20 border border-sky-900/40 p-3 rounded-lg text-xs space-y-1.5">
                        <div className="font-bold text-sky-400 flex items-center space-x-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>メリット</span>
                        </div>
                        {topic.prosAndCons.pros.map((pro, i) => (
                          <div key={i} className="text-slate-300 flex items-start space-x-1.5">
                            <span className="text-sky-400">•</span>
                            <span>{pro}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-rose-950/20 border border-rose-900/40 p-3 rounded-lg text-xs space-y-1.5">
                        <div className="font-bold text-rose-400 flex items-center space-x-1">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>デメリット・注意点</span>
                        </div>
                        {topic.prosAndCons.cons.map((con, i) => (
                          <div key={i} className="text-slate-300 flex items-start space-x-1.5">
                            <span className="text-rose-400">•</span>
                            <span>{con}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

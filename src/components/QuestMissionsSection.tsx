import React, { useState } from 'react';
import { questsData } from '../data/questsData';
import { Compass, CheckCircle2, Unlock, AlertCircle, MapPin, Sparkles, Trophy } from 'lucide-react';

export const QuestMissionsSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'main' | 'unlock'>('all');

  const filteredQuests = questsData.filter(q => {
    if (filterCategory === 'main') return q.category === 'main';
    if (filterCategory === 'unlock') return q.category === 'unlock' || q.category === 'sub';
    return true;
  });

  return (
    <div className="space-y-6">
      {/* セクションヘッダー */}
      <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Story & Missions Walkthrough</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            メインストーリー進行チャート＆重要解放サブクエスト
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            簡易キャンプ常設、食事場高級食材、装飾品精錬、武器重ね着などの解放手順を網羅
          </p>
        </div>

        {/* クエストカテゴリ切り替え */}
        <div className="flex items-center bg-[#131722] p-1 rounded-lg border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
              filterCategory === 'all'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            すべて ({questsData.length})
          </button>
          <button
            onClick={() => setFilterCategory('main')}
            className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
              filterCategory === 'main'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            メインストーリー
          </button>
          <button
            onClick={() => setFilterCategory('unlock')}
            className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
              filterCategory === 'unlock'
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            重要機能解放サブ
          </button>
        </div>
      </div>

      {/* 簡易キャンプ＆便利システム解説バナー */}
      <div className="bg-gradient-to-r from-amber-950/25 via-[#161b29] to-[#121622] p-4 sm:p-5 rounded-2xl border border-amber-500/30 space-y-3">
        <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
          <Sparkles className="w-4 h-4" />
          <span>【重要】攻略を10倍快適にするワイルズ新仕様</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-[#0e121a] p-3 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-white block">⛺ 簡易キャンプの自律設営</span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              各地の安全地帯（候補地）にテントを張ることで、ファストトラベルやアイテム補充が可能に。モンスターの縄張りに近すぎると襲撃されて崩壊するため注意。
            </p>
          </div>
          <div className="bg-[#0e121a] p-3 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-white block">🍳 携帯焚き火台での食事</span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              拠点に戻らずともフィールドでいつでも食事が可能。サブクエストで「極上チーズ」や「厳選肉」を解放すると、食事スキルが大幅にパワーアップ。
            </p>
          </div>
          <div className="bg-[#0e121a] p-3 rounded-xl border border-slate-800 space-y-1">
            <span className="font-bold text-white block">🦅 セクレトのオートナビ</span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              セクレト騎乗中はターゲットモンスターやマーキングした採取ポイントまで自動追尾可能。騎乗中の砥石使用・回復薬服用が超便利。
            </p>
          </div>
        </div>
      </div>

      {/* クエストリスト（進行タイムライン風） */}
      <div className="space-y-4">
        {filteredQuests.map((quest, idx) => (
          <div
            key={quest.id}
            className="bg-[#141824] border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3.5 hover:border-slate-700 transition-all"
          >
            {/* 上段：タイトル・カテゴリ・難易度 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div>
                <div className="flex items-center space-x-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    quest.category === 'main'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}>
                    {quest.category === 'main' ? 'メインクエスト' : '解放サブミッション'}
                  </span>
                  {quest.chapter && (
                    <span className="text-xs text-slate-400">
                      {quest.chapter}
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  {quest.title}
                </h3>
              </div>

              {/* 難易度 & 場所 */}
              <div className="flex items-center space-x-3 text-xs">
                <div className="flex items-center space-x-1 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{quest.location}</span>
                </div>
                <span className="bg-[#0e121a] px-2.5 py-1 rounded text-amber-400 font-bold border border-slate-800">
                  難易度: {'★'.repeat(quest.difficulty)}
                </span>
              </div>
            </div>

            {/* ターゲット目標 */}
            <div className="bg-[#0d1017] p-3 rounded-lg border border-slate-800 text-xs flex items-center space-x-2">
              <span className="text-slate-400 font-medium">討伐・調査ターゲット:</span>
              <span className="text-amber-300 font-bold">{quest.target}</span>
            </div>

            {/* 解放される重要報酬・機能 */}
            <div className="space-y-1.5">
              <div className="text-xs font-bold text-emerald-400 flex items-center space-x-1.5 uppercase tracking-wider">
                <Unlock className="w-3.5 h-3.5" />
                <span>クリアで解放される機能・要素</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {quest.rewardUnlocks.map((reward, i) => (
                  <div key={i} className="bg-[#182030] p-2 rounded border border-emerald-900/30 text-emerald-200 flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{reward}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 攻略アドバイス */}
            <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-800 text-xs text-slate-300 leading-relaxed">
              <span className="text-amber-400 font-bold mr-1.5">【攻略のポイント】:</span>
              {quest.tips}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

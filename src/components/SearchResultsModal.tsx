import React from 'react';
import { weaponsData } from '../data/weaponsData';
import { monstersData } from '../data/monstersData';
import { questsData } from '../data/questsData';
import { metaEnvironmentData } from '../data/metaData';
import { Search, X, Swords, ShieldAlert, Compass, Flame, ArrowRight } from 'lucide-react';
import { WeaponType } from '../types';

interface SearchResultsModalProps {
  query: string;
  onClose: () => void;
  onSelectWeapon: (weaponId: WeaponType) => void;
  onNavigateTab: (tab: string) => void;
}

export const SearchResultsModal: React.FC<SearchResultsModalProps> = ({
  query,
  onClose,
  onSelectWeapon,
  onNavigateTab,
}) => {
  if (!query.trim()) return null;

  const lowerQuery = query.toLowerCase();

  // 武器・ビルドの検索
  const matchedWeapons = weaponsData.filter(w => 
    w.name.toLowerCase().includes(lowerQuery) ||
    w.summary.toLowerCase().includes(lowerQuery) ||
    w.builds.some(b => 
      b.title.toLowerCase().includes(lowerQuery) ||
      b.weaponName.toLowerCase().includes(lowerQuery) ||
      b.keySkills.some(s => s.name.toLowerCase().includes(lowerQuery))
    ) ||
    w.combos.some(c => c.name.toLowerCase().includes(lowerQuery) || c.description.toLowerCase().includes(lowerQuery))
  );

  // モンスターの検索
  const matchedMonsters = monstersData.filter(m =>
    m.name.toLowerCase().includes(lowerQuery) ||
    m.nameEn.toLowerCase().includes(lowerQuery) ||
    m.species.toLowerCase().includes(lowerQuery) ||
    m.description.toLowerCase().includes(lowerQuery) ||
    m.weakParts.some(p => p.toLowerCase().includes(lowerQuery))
  );

  // クエストの検索
  const matchedQuests = questsData.filter(q =>
    q.title.toLowerCase().includes(lowerQuery) ||
    q.target.toLowerCase().includes(lowerQuery) ||
    q.location.toLowerCase().includes(lowerQuery) ||
    q.rewardUnlocks.some(r => r.toLowerCase().includes(lowerQuery))
  );

  // 環境メタの検索
  const matchedMeta = metaEnvironmentData.filter(m =>
    m.title.toLowerCase().includes(lowerQuery) ||
    m.summary.toLowerCase().includes(lowerQuery) ||
    m.categoryLabel.toLowerCase().includes(lowerQuery)
  );

  const totalResults = matchedWeapons.length + matchedMonsters.length + matchedQuests.length + matchedMeta.length;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 overflow-y-auto pt-16 sm:pt-20">
      <div className="bg-[#111520] border border-amber-500/40 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl space-y-4">
        {/* ヘッダー */}
        <div className="p-4 bg-[#171c2b] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Search className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">
              「{query}」の検索結果 ({totalResults} 件)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 max-h-[70vh] overflow-y-auto space-y-6">
          {totalResults === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <Search className="w-8 h-8 mx-auto mb-2 text-slate-600" />
              <p className="text-sm">該当する情報が見つかりませんでした。</p>
              <p className="text-xs text-slate-500 mt-1">別のキーワード（例：大剣、レ・ダウ、会心、キャンプ、麻痺）でお試しください。</p>
            </div>
          ) : (
            <>
              {/* 武器ヒット */}
              {matchedWeapons.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold text-amber-400 flex items-center space-x-1.5 uppercase">
                    <Swords className="w-4 h-4" />
                    <span>武器・最強装備 ({matchedWeapons.length}件)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {matchedWeapons.map(w => (
                      <div
                        key={w.id}
                        onClick={() => {
                          onSelectWeapon(w.id);
                          onNavigateTab('weapons');
                          onClose();
                        }}
                        className="p-3 bg-[#161a26] hover:bg-[#1f2638] border border-slate-800 hover:border-amber-500/50 rounded-xl cursor-pointer transition-all flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-2.5">
                          <span className="text-2xl">{w.icon}</span>
                          <div>
                            <div className="text-sm font-bold text-white">{w.name}</div>
                            <div className="text-[11px] text-slate-400">{w.builds[0]?.title}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* モンスターヒット */}
              {matchedMonsters.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold text-rose-400 flex items-center space-x-1.5 uppercase">
                    <ShieldAlert className="w-4 h-4" />
                    <span>モンスター情報 ({matchedMonsters.length}件)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {matchedMonsters.map(m => (
                      <div
                        key={m.id}
                        onClick={() => {
                          onNavigateTab('monsters');
                          onClose();
                        }}
                        className="p-3 bg-[#161a26] hover:bg-[#1f2638] border border-slate-800 hover:border-rose-500/50 rounded-xl cursor-pointer transition-all flex items-center justify-between"
                      >
                        <div>
                          <div className="text-sm font-bold text-white">{m.name}</div>
                          <div className="text-[11px] text-slate-400">{m.species} / 危険度★{m.threatLevel}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* クエストヒット */}
              {matchedQuests.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold text-emerald-400 flex items-center space-x-1.5 uppercase">
                    <Compass className="w-4 h-4" />
                    <span>クエスト・解放要素 ({matchedQuests.length}件)</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedQuests.map(q => (
                      <div
                        key={q.id}
                        onClick={() => {
                          onNavigateTab('quests');
                          onClose();
                        }}
                        className="p-3 bg-[#161a26] hover:bg-[#1f2638] border border-slate-800 hover:border-emerald-500/50 rounded-xl cursor-pointer transition-all flex items-center justify-between text-xs"
                      >
                        <div>
                          <div className="font-bold text-white">{q.title}</div>
                          <div className="text-slate-400 text-[11px]">{q.target} / {q.location}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 flex-shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 環境メタヒット */}
              {matchedMeta.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold text-yellow-400 flex items-center space-x-1.5 uppercase">
                    <Flame className="w-4 h-4" />
                    <span>環境メタ考察 ({matchedMeta.length}件)</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedMeta.map(mt => (
                      <div
                        key={mt.id}
                        onClick={() => {
                          onNavigateTab('meta');
                          onClose();
                        }}
                        className="p-3 bg-[#161a26] hover:bg-[#1f2638] border border-slate-800 hover:border-yellow-500/50 rounded-xl cursor-pointer transition-all flex items-center justify-between text-xs"
                      >
                        <div>
                          <div className="font-bold text-white">{mt.title}</div>
                          <div className="text-slate-400 text-[11px]">{mt.summary}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 flex-shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

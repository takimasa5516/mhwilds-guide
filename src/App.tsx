import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MetaEnvironmentSection } from './components/MetaEnvironmentSection';
import { WeaponGuideSection } from './components/WeaponGuideSection';
import { CombosOverviewSection } from './components/CombosOverviewSection';
import { MonsterDatabaseSection } from './components/MonsterDatabaseSection';
import { QuestMissionsSection } from './components/QuestMissionsSection';
import { MaterialCalculatorSection } from './components/MaterialCalculatorSection';
import { ArtianTalismanSection } from './components/ArtianTalismanSection';
import { InteractiveMapSection } from './components/InteractiveMapSection';
import { SearchResultsModal } from './components/SearchResultsModal';
import { Footer } from './components/Footer';
import { WeaponType } from './types';
import { Flame, Swords, Crosshair, Shield, Compass, Calculator, Gem, Map } from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('meta');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedWeaponId, setSelectedWeaponId] = useState<WeaponType>('swordandshield');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // 検索クエリ変更時に自動で検索モーダルを開く
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 0) {
      setIsSearchOpen(true);
    } else {
      setIsSearchOpen(false);
    }
  };

  const mobileNavItems = [
    { id: 'meta', label: '環境メタ', icon: Flame },
    { id: 'weapons', label: '最強装備', icon: Swords },
    { id: 'materials', label: '討伐計算', icon: Calculator },
    { id: 'map', label: '地図', icon: Map },
    { id: 'artian', label: 'アーティア', icon: Gem },
    { id: 'monsters', label: '図鑑', icon: Shield },
    { id: 'quests', label: 'クエスト', icon: Compass },
  ];

  return (
    <div className="min-h-screen bg-[#0a0c10] text-slate-100 flex flex-col font-sans pb-16 lg:pb-0">
      {/* グローバルヘッダー */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={handleSearchChange}
      />

      {/* ヒーローバナー */}
      <Hero onNavigate={(tab) => setActiveTab(tab)} />

      {/* メインコンテンツ */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {activeTab === 'meta' && (
          <MetaEnvironmentSection
            onSelectWeaponGuide={() => setActiveTab('weapons')}
          />
        )}

        {activeTab === 'weapons' && (
          <WeaponGuideSection initialWeapon={selectedWeaponId} />
        )}

        {activeTab === 'materials' && (
          <MaterialCalculatorSection />
        )}

        {activeTab === 'map' && (
          <InteractiveMapSection />
        )}

        {activeTab === 'artian' && (
          <ArtianTalismanSection />
        )}

        {activeTab === 'combos' && (
          <CombosOverviewSection />
        )}

        {activeTab === 'monsters' && (
          <MonsterDatabaseSection />
        )}

        {activeTab === 'quests' && (
          <QuestMissionsSection />
        )}
      </main>

      {/* 検索結果モーダル */}
      {isSearchOpen && (
        <SearchResultsModal
          query={searchQuery}
          onClose={() => setIsSearchOpen(false)}
          onSelectWeapon={(weaponId) => {
            setSelectedWeaponId(weaponId);
            setActiveTab('weapons');
          }}
          onNavigateTab={(tab) => setActiveTab(tab)}
        />
      )}

      {/* フッター */}
      <Footer onNavigate={(tab) => setActiveTab(tab)} />

      {/* スマホ用固定ボトムナビゲーションバー（親指操作の快適性） */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d1017]/95 backdrop-blur-lg border-t border-slate-800/80 px-2 py-1 flex items-center justify-around shadow-2xl">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center py-1 px-1.5 rounded-lg text-[9px] font-medium transition-all ${
                isActive
                  ? 'text-amber-400 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 mb-0.5 ${isActive ? 'text-amber-400 scale-110' : 'text-slate-400'}`} />
              <span className="truncate max-w-[48px]">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

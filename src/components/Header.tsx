import React, { useState } from 'react';
import { Flame, Shield, Swords, Compass, Search, Menu, X, Crosshair, Calculator, Gem, Map } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'meta', label: '攻略環境・メタ', icon: Flame, badge: '注目' },
    { id: 'weapons', label: '武器種別・最新最強装備', icon: Swords, badge: '全14種' },
    { id: 'materials', label: '素材・討伐数計算機', icon: Calculator, badge: 'シミュ' },
    { id: 'map', label: 'フィールド立体地図', icon: Map, badge: '気候連動' },
    { id: 'artian', label: 'アーティア・護石', icon: Gem, badge: '神おま' },
    { id: 'monsters', label: 'モンスター図鑑＆弱点', icon: Shield, badge: '全20体' },
    { id: 'quests', label: 'メイン・サブ攻略', icon: Compass, badge: 'チャート' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0c0f17]/95 backdrop-blur-md border-b border-[#242c3d] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* ロゴ */}
          <div 
            className="flex items-center space-x-3 cursor-pointer select-none group"
            onClick={() => setActiveTab('meta')}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-md shadow-amber-600/30 group-hover:scale-105 transition-transform">
              <span className="text-xl md:text-2xl font-black text-slate-950 font-cinzel">W</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-cinzel text-lg md:text-xl font-bold tracking-wider text-amber-400 group-hover:text-amber-300 transition-colors">
                  MH WILDS
                </span>
                <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-medium">
                  最新攻略DB
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">モンスターハンターワイルズ 総合戦略ポータル</p>
            </div>
          </div>

          {/* 検索バー（デスクトップ & タブレット） */}
          <div className="hidden md:flex items-center flex-1 max-w-xs lg:max-w-sm mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="武器、モンスター、スキル、素材を検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#151a24] border border-[#2e374b] rounded-full py-1.5 pl-9 pr-4 text-xs lg:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/80 focus:ring-1 focus:ring-amber-500/50 transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* ナビゲーション（デスクトップ） */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-sm shadow-amber-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[9px] px-1 py-0.2 rounded font-normal ${
                      isActive ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* モバイルハンバーガーボタン */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/60 focus:outline-none"
              aria-label="メニューを開く"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* モバイル検索バー */}
        <div className="pb-3 md:hidden">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="武器、モンスター、スキル、素材を検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#151a24] border border-[#2e374b] rounded-lg py-2 pl-9 pr-4 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* モバイルドロワーメニュー */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#0e121a]/98 px-4 pt-3 pb-5 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'text-slate-300 hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

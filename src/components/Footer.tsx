import React from 'react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-16 bg-[#080a0f] border-t border-slate-800/80 py-10 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-cinzel font-black text-slate-950 text-sm">
              W
            </div>
            <div>
              <span className="font-cinzel text-sm font-bold text-amber-400">MH WILDS STRATEGY GUIDE</span>
              <p className="text-[11px] text-slate-500">モンスターハンターワイルズ 非公式総合攻略データベース</p>
            </div>
          </div>

          {/* クイックリンク */}
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <button onClick={() => onNavigate('meta')} className="hover:text-amber-400 transition-colors">
              攻略環境メタ
            </button>
            <button onClick={() => onNavigate('weapons')} className="hover:text-amber-400 transition-colors">
              武器種別最強装備
            </button>
            <button onClick={() => onNavigate('combos')} className="hover:text-amber-400 transition-colors">
              立ち回り＆コンボ
            </button>
            <button onClick={() => onNavigate('monsters')} className="hover:text-amber-400 transition-colors">
              モンスター弱点図鑑
            </button>
            <button onClick={() => onNavigate('quests')} className="hover:text-amber-400 transition-colors">
              メイン・サブ進行チャート
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800/60 pt-4 text-center text-[11px] text-slate-500 space-y-1">
          <p>
            ※当サイトは『モンスターハンターワイルズ（Monster Hunter Wilds）』の非公式ファン攻略ポータルです。
          </p>
          <p>
            ゲーム内の画像・データ・商標等のすべての著作権は株式会社カプコンに帰属します。
          </p>
        </div>
      </div>
    </footer>
  );
};

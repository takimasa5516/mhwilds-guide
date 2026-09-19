import React from 'react';
import { Flame, Sparkles, Target, ShieldAlert, Award, Calculator, Gem } from 'lucide-react';

interface HeroProps {
  onNavigate: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#111520] via-[#0d1017] to-[#0b0d13] border-b border-[#212838] py-8 sm:py-12 lg:py-14">
      {/* 背景の光彩・テクスチャ装飾 */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* アップデートタグ */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>白熾龍ゾ・シア＆古代遺構アーティア・神おま最新環境アップデート完了</span>
        </div>

        {/* メインタイトル */}
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            荒野を生き抜き、頂点を討て。<br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent font-cinzel">
              MONSTER HUNTER WILDS
            </span>
            <span className="text-lg sm:text-2xl text-slate-300 block font-normal mt-1">
              総合攻略・最新最強装備・討伐シミュレーター
            </span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            「集中モード」と「傷口破壊」が支配する最新環境、全14武器種の白熾龍ゾ・シア＆アーティア複合キメラ、
            5属性特化装備、全20体モンスターの弱点・肉質、ウィッシュリスト必要討伐数シミュレーターを完全網羅。
          </p>
        </div>

        {/* クイック統計・ハイライトバナー（6グリッド） */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div 
            onClick={() => onNavigate('weapons')}
            className="cursor-pointer bg-[#141824]/90 hover:bg-[#1b2233] border border-[#2b354c] hover:border-amber-500/50 p-3 rounded-xl transition-all group shadow-sm"
          >
            <div className="flex items-center space-x-1.5 text-sky-400 mb-1">
              <Award className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">最強装備</span>
            </div>
            <div className="text-xs text-slate-200 font-bold">ゾ・シア＆アーティア</div>
            <div className="text-[10px] text-slate-400 mt-0.5">最新Tier SSテンプレ</div>
          </div>

          <div 
            onClick={() => onNavigate('materials')}
            className="cursor-pointer bg-[#141824]/90 hover:bg-[#1b2233] border border-amber-500/40 hover:border-amber-400 p-3 rounded-xl transition-all group shadow-sm bg-gradient-to-b from-amber-500/10 to-transparent"
          >
            <div className="flex items-center space-x-1.5 text-amber-400 mb-1">
              <Calculator className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">討伐数計算機</span>
            </div>
            <div className="text-xs text-amber-200 font-bold">必要討伐シミュ</div>
            <div className="text-[10px] text-amber-300/80 mt-0.5">確率二項分布で90%安心</div>
          </div>

          <div 
            onClick={() => onNavigate('artian')}
            className="cursor-pointer bg-[#141824]/90 hover:bg-[#1b2233] border border-[#2b354c] hover:border-amber-500/50 p-3 rounded-xl transition-all group shadow-sm"
          >
            <div className="flex items-center space-x-1.5 text-purple-400 mb-1">
              <Gem className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">アーティア＆護石</span>
            </div>
            <div className="text-xs text-slate-200 font-bold">神おま錬金＆突破</div>
            <div className="text-[10px] text-slate-400 mt-0.5">古代の英知＆スロット</div>
          </div>

          <div 
            onClick={() => onNavigate('monsters')}
            className="cursor-pointer bg-[#141824]/90 hover:bg-[#1b2233] border border-[#2b354c] hover:border-amber-500/50 p-3 rounded-xl transition-all group shadow-sm"
          >
            <div className="flex items-center space-x-1.5 text-rose-400 mb-1">
              <ShieldAlert className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">モンスター図鑑</span>
            </div>
            <div className="text-xs text-slate-200 font-bold">全20体完全網羅</div>
            <div className="text-[10px] text-slate-400 mt-0.5">ゾ・シア・弱点・肉質</div>
          </div>

          <div 
            onClick={() => onNavigate('combos')}
            className="cursor-pointer bg-[#141824]/90 hover:bg-[#1b2233] border border-[#2b354c] hover:border-amber-500/50 p-3 rounded-xl transition-all group shadow-sm"
          >
            <div className="flex items-center space-x-1.5 text-emerald-400 mb-1">
              <Target className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">立ち回り指南</span>
            </div>
            <div className="text-xs text-slate-200 font-bold">相殺＆集中弱点</div>
            <div className="text-[10px] text-slate-400 mt-0.5">操作アドバンテージ</div>
          </div>

          <div 
            onClick={() => onNavigate('meta')}
            className="cursor-pointer bg-[#141824]/90 hover:bg-[#1b2233] border border-[#2b354c] hover:border-amber-500/50 p-3 rounded-xl transition-all group shadow-sm"
          >
            <div className="flex items-center space-x-1.5 text-orange-400 mb-1">
              <Flame className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold">環境考察</span>
            </div>
            <div className="text-xs text-slate-200 font-bold">属性 vs 物理メタ</div>
            <div className="text-[10px] text-slate-400 mt-0.5">傷口と新DPS指標</div>
          </div>
        </div>

      </div>
    </div>
  );
};

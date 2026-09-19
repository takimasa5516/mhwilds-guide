import React, { useState, useEffect } from 'react';
import { fieldsMapData } from '../data/mapsData';
import { FieldMapData, ClimateSeason, OfficialCampSpot, AreaTopologyNode } from '../types';
import { 
  Map, Tent, Zap, Sparkles, Compass, Eye, AlertTriangle, Droplets, 
  Flame, Wind, Layers, ChevronRight, CheckCircle2, RotateCcw, Navigation
} from 'lucide-react';

export const InteractiveMapSection: React.FC = () => {
  const [selectedFieldId, setSelectedFieldId] = useState<string>('windward-plains');
  const [selectedClimate, setSelectedClimate] = useState<ClimateSeason>('anomaly');
  const [selectedLayer, setSelectedLayer] = useState<string>('all');
  const [selectedArea, setSelectedArea] = useState<AreaTopologyNode | null>(null);
  const [selectedCamp, setSelectedCamp] = useState<OfficialCampSpot | null>(null);
  
  // 設営中キャンプID（最大上限数まで管理）
  const [deployedCampIds, setDeployedCampIds] = useState<string[]>([]);

  const selectedField = fieldsMapData.find(f => f.id === selectedFieldId) || fieldsMapData[0];
  const climateInfo = selectedField.climates[selectedClimate];

  // フィールド切り替え時におすすめキャンプを初期設営
  useEffect(() => {
    const recommended = selectedField.officialCamps
      .filter(c => c.isRecommended)
      .slice(0, selectedField.maxCampCount)
      .map(c => c.id);
    setDeployedCampIds(recommended);
    setSelectedArea(null);
    setSelectedCamp(null);
    setSelectedLayer('all');
  }, [selectedFieldId]);

  // キャンプ設営トグル
  const toggleDeployCamp = (campId: string) => {
    if (deployedCampIds.includes(campId)) {
      setDeployedCampIds(deployedCampIds.filter(id => id !== campId));
    } else {
      if (deployedCampIds.length >= selectedField.maxCampCount) {
        alert(`このフィールドでの同時設営可能キャンプ数は最大${selectedField.maxCampCount}箇所までです。不要なキャンプを撤去してください。`);
        return;
      }
      setDeployedCampIds([...deployedCampIds, campId]);
    }
  };

  // おすすめ構成一括適用
  const applyRecommendedCamps = () => {
    const recommended = selectedField.officialCamps
      .filter(c => c.isRecommended)
      .slice(0, selectedField.maxCampCount)
      .map(c => c.id);
    setDeployedCampIds(recommended);
  };

  // 階層フィルター
  const visibleNodes = selectedField.areaNodes.filter(node => {
    if (selectedLayer === 'all') return true;
    return node.elevation === selectedLayer || node.elevation === 'all';
  });

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Map className="w-4 h-4" />
            <span>Interactive Field & Climate Map</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            全フィールド立体地図 ＆ 気候変動・環境ギミック攻略
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            「荒廃期」「異常気象」「豊穣期」で激変するフィールド環境、簡易キャンプ設営地、落雷・ダム・ガス罠、アーティア発掘ルートを網羅
          </p>
        </div>

        {/* フィールド切り替えタブ */}
        <div className="flex items-center bg-[#131722] p-1 rounded-xl border border-slate-800 self-start sm:self-auto overflow-x-auto max-w-full">
          {fieldsMapData.map(field => (
            <button
              key={field.id}
              onClick={() => {
                setSelectedFieldId(field.id);
                setSelectedArea(null);
                setSelectedCamp(null);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                selectedFieldId === field.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {field.name}
            </button>
          ))}
        </div>
      </div>

      {/* 気候変動シミュレーター（荒廃期・異常気象・豊穣期） */}
      <div className="bg-[#121622] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
          <div className="flex items-center space-x-2">
            <Compass className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm sm:text-base font-bold text-white">
              気候サイクル切り替えシミュレーター
            </h3>
          </div>

          {/* 気候選択ボタン */}
          <div className="flex items-center bg-[#0e121a] p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
            <button
              onClick={() => setSelectedClimate('barren')}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                selectedClimate === 'barren'
                  ? 'bg-amber-700/80 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Wind className="w-3.5 h-3.5" />
              <span>荒廃期</span>
            </button>
            <button
              onClick={() => setSelectedClimate('anomaly')}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                selectedClimate === 'anomaly'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30 font-black animate-pulse'
                  : 'text-purple-400 hover:text-white'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>異常気象（頂点覚醒）</span>
            </button>
            <button
              onClick={() => setSelectedClimate('abundant')}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                selectedClimate === 'abundant'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-emerald-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>豊穣期</span>
            </button>
          </div>
        </div>

        {/* 選択された気候の環境ステータス */}
        <div className={`p-4 rounded-xl border text-xs sm:text-sm space-y-2.5 transition-all ${
          selectedClimate === 'anomaly'
            ? 'bg-purple-950/20 border-purple-500/40 text-purple-200'
            : selectedClimate === 'abundant'
            ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
            : 'bg-amber-950/20 border-amber-500/30 text-amber-200'
        }`}>
          <div className="flex items-center justify-between">
            <span className="font-black text-white text-sm sm:text-base flex items-center space-x-2">
              <span>{climateInfo.name}</span>
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900/80 border border-slate-700 font-mono">
              生態系アクティブ中
            </span>
          </div>

          <p className="leading-relaxed text-xs text-slate-300">
            {climateInfo.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1 text-xs">
            <div className="bg-[#0e121a]/80 p-2.5 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block font-bold">出現・活発化モンスター</span>
              <span className="text-amber-300 font-bold mt-0.5 block">
                {climateInfo.activeMonsters.join(' / ')}
              </span>
            </div>
            <div className="bg-[#0e121a]/80 p-2.5 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block font-bold">環境ハザード（注意点）</span>
              <span className="text-rose-300 font-semibold mt-0.5 block">
                {climateInfo.environmentalHazard || 'なし（環境安定・恵みの気候）'}
              </span>
            </div>
            {'specialGimmick' in climateInfo && (
              <div className="bg-[#0e121a]/80 p-2.5 rounded-lg border border-purple-500/40 sm:col-span-2 lg:col-span-1">
                <span className="text-[10px] text-purple-300 block font-bold">異常気象限定ギミック</span>
                <span className="text-white font-bold mt-0.5 block">
                  {climateInfo.specialGimmick}
                </span>
              </div>
            )}
            {'specialGathering' in climateInfo && (
              <div className="bg-[#0e121a]/80 p-2.5 rounded-lg border border-emerald-500/40 sm:col-span-2 lg:col-span-1">
                <span className="text-[10px] text-emerald-300 block font-bold">豊穣期限定ボーナス</span>
                <span className="text-emerald-300 font-bold mt-0.5 block">
                  {climateInfo.specialGathering}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* インタラクティブ・ビジュアルマップ ＆ 詳細パネル */}
      {/* メインマップエリア ＆ 設営シミュレーター */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* 左側（7/12）：公式トポロジー・SVGタクティカルマップ */}
        <div className="lg:col-span-7 bg-[#121622] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
            <div>
              <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider block">
                Official Area Topology
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {selectedField.name} 公式エリア全体図
              </h3>
            </div>

            {/* 階層レイヤー切り替え */}
            {selectedField.availableLayers && (
              <div className="flex items-center bg-[#0e121a] p-1 rounded-lg border border-slate-800 text-xs">
                {selectedField.availableLayers.map(layer => (
                  <button
                    key={layer.id}
                    onClick={() => setSelectedLayer(layer.id)}
                    className={`px-2 py-1 rounded text-[11px] font-bold transition-all ${
                      selectedLayer === layer.id
                        ? 'bg-amber-500 text-slate-950 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {layer.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* SVG タクティカルマップ */}
          <div className="relative w-full aspect-[4/3] bg-[#090d14] rounded-xl border border-slate-800 overflow-hidden shadow-inner flex items-center justify-center select-none">
            {/* 方眼グリッド背景 */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d25_1px,transparent_1px),linear-gradient(to_bottom,#1f293d25_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none"></div>

            {/* コンパスローズ装飾 */}
            <div className="absolute top-3 right-3 text-slate-700 pointer-events-none flex flex-col items-center">
              <span className="text-[10px] font-black text-amber-500/60 mb-0.5">N</span>
              <Compass className="w-6 h-6 opacity-30 text-amber-400" />
            </div>

            {/* SVG キャンバス */}
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 800"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <radialGradient id="desertGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#d97706" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#78350f" stopOpacity="0.1" />
                </radialGradient>
                <radialGradient id="waterGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#0369a1" stopOpacity="0.15" />
                </radialGradient>
                <radialGradient id="caveGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#475569" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#1e293b" stopOpacity="0.2" />
                </radialGradient>
                <radialGradient id="forestGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#15803d" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#14532d" stopOpacity="0.15" />
                </radialGradient>
                <radialGradient id="volcanoGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#dc2626" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#991b1b" stopOpacity="0.15" />
                </radialGradient>
                <radialGradient id="ruinsGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#9333ea" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#581c87" stopOpacity="0.15" />
                </radialGradient>
              </defs>

              {/* 1. エリア接続ルート（ライン） */}
              {selectedField.connections.map((conn, idx) => {
                const nodeFrom = selectedField.areaNodes.find(n => n.areaNumber === conn.from);
                const nodeTo = selectedField.areaNodes.find(n => n.areaNumber === conn.to);
                if (!nodeFrom || !nodeTo) return null;

                const x1 = (nodeFrom.x * 10);
                const y1 = (nodeFrom.y * 8);
                const x2 = (nodeTo.x * 10);
                const y2 = (nodeTo.y * 8);

                return (
                  <line
                    key={idx}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#475569"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                );
              })}

              {/* 2. エリアノード（円形領土） */}
              {visibleNodes.map(node => {
                const isSelected = selectedArea?.areaNumber === node.areaNumber;
                const cx = node.x * 10;
                const cy = node.y * 8;
                const r = node.radius * 2.2;

                const getGradId = () => {
                  switch (node.terrainType) {
                    case 'oasis':
                    case 'water': return 'url(#waterGrad)';
                    case 'cave': return 'url(#caveGrad)';
                    case 'forest': return 'url(#forestGrad)';
                    case 'volcano':
                    case 'oil': return 'url(#volcanoGrad)';
                    case 'ruins': return 'url(#ruinsGrad)';
                    default: return 'url(#desertGrad)';
                  }
                };

                const getStrokeColor = () => {
                  if (isSelected) return '#fbbf24';
                  switch (node.terrainType) {
                    case 'oasis':
                    case 'water': return '#38bdf8';
                    case 'cave': return '#94a3b8';
                    case 'forest': return '#4ade80';
                    case 'volcano':
                    case 'oil': return '#f87171';
                    case 'ruins': return '#c084fc';
                    default: return '#f59e0b';
                  }
                };

                return (
                  <g
                    key={node.areaNumber}
                    onClick={() => {
                      setSelectedArea(node);
                      setSelectedCamp(null);
                    }}
                    className="cursor-pointer transition-transform hover:scale-105"
                  >
                    <circle
                      cx={cx}
                      cy={cy}
                      r={r}
                      fill={getGradId()}
                      stroke={getStrokeColor()}
                      strokeWidth={isSelected ? '3.5' : '1.5'}
                      strokeDasharray={node.elevation === 'underground' || node.elevation === 'lower' ? '4 3' : 'none'}
                    />

                    <text
                      x={cx}
                      y={cy - 4}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill="#ffffff"
                      fontSize="22"
                      fontWeight="900"
                      className="font-mono drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                    >
                      {node.areaNumber}
                    </text>

                    <text
                      x={cx}
                      y={cy + 18}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={isSelected ? '#fbbf24' : '#cbd5e1'}
                      fontSize="10"
                      fontWeight="bold"
                      className="drop-shadow"
                    >
                      {node.name.length > 7 ? `${node.name.slice(0, 6)}..` : node.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* 3. HTMLオーバーレイ：簡易キャンプ設営ピン */}
            {selectedField.officialCamps.map(camp => {
              const isDeployed = deployedCampIds.includes(camp.id);
              const isSelected = selectedCamp?.id === camp.id;
              
              const getSafetyBadgeStyle = () => {
                switch (camp.safety) {
                  case 'stable': return 'border-emerald-400 bg-emerald-500 text-slate-950 shadow-emerald-500/50';
                  case 'unstable': return 'border-amber-400 bg-amber-500 text-slate-950 shadow-amber-500/50';
                  case 'dangerous': return 'border-rose-400 bg-rose-500 text-white shadow-rose-500/50';
                }
              };

              return (
                <div
                  key={camp.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 group"
                  style={{ left: `${camp.coordinates.x}%`, top: `${camp.coordinates.y}%` }}
                >
                  <button
                    onClick={() => {
                      setSelectedCamp(camp);
                      const parentArea = selectedField.areaNodes.find(a => a.areaNumber === camp.areaNumber);
                      if (parentArea) setSelectedArea(parentArea);
                    }}
                    className={`relative flex items-center justify-center rounded-full border shadow-lg transition-all ${
                      isDeployed
                        ? 'w-7 h-7 bg-sky-500 border-white text-slate-950 ring-2 ring-sky-400/80 scale-110'
                        : `w-5 h-5 ${getSafetyBadgeStyle()} opacity-80 hover:opacity-100 hover:scale-125`
                    } ${isSelected ? 'ring-4 ring-amber-400 scale-125 z-30' : ''}`}
                    title={`${camp.name}（${camp.safetyLabel}）${isDeployed ? '【設営中】' : '【未設営】'}`}
                  >
                    {isDeployed ? (
                      <Tent className="w-4 h-4" />
                    ) : (
                      <span className="text-[9px] font-black leading-none">C</span>
                    )}
                  </button>

                  <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-0.5 rounded bg-slate-950/95 border border-slate-700 text-white text-[10px] font-bold whitespace-nowrap shadow-2xl pointer-events-none transition-all ${
                    isSelected ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
                  }`}>
                    {camp.name}
                    <span className={`ml-1 text-[9px] px-1 rounded ${
                      camp.safety === 'stable' ? 'bg-emerald-500/30 text-emerald-300' :
                      camp.safety === 'unstable' ? 'bg-amber-500/30 text-amber-300' : 'bg-rose-500/30 text-rose-300'
                    }`}>
                      {camp.safetyLabel}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* ガイド注記 */}
            <div className="absolute bottom-2.5 left-2.5 bg-[#0c0f16]/90 backdrop-blur border border-slate-700 px-2.5 py-1 rounded text-[10px] text-slate-300 pointer-events-none shadow-lg flex items-center space-x-2">
              <span>🎯 エリア円クリックで詳細情報</span>
              <span className="text-slate-500">|</span>
              <span className="text-sky-400">🏕️ 設営キャンプ</span>
              <span className="text-slate-500">|</span>
              <span className="text-emerald-400">● 安全</span>
              <span className="text-amber-400">● 不安定</span>
              <span className="text-rose-400">● 要注意</span>
            </div>
          </div>
        </div>

        {/* 右側（5/12）：簡易キャンプ設営シミュレーター ＆ スポット詳細 */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* キャンプ設営シミュレーター */}
          <div className="bg-[#121622] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
              <div className="flex items-center space-x-2">
                <Tent className="w-4 h-4 text-sky-400" />
                <h4 className="text-sm sm:text-base font-bold text-white">
                  簡易キャンプ設営シミュレーター
                </h4>
              </div>
              <span className="text-xs font-mono font-bold bg-sky-950/60 border border-sky-500/40 text-sky-300 px-2 py-0.5 rounded-full">
                設営中: {deployedCampIds.length} / {selectedField.maxCampCount}箇所
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <p className="text-slate-400 text-[11px]">
                全{selectedField.officialCamps.length}箇所の候補地から最大{selectedField.maxCampCount}箇所を選択
              </p>
              <button
                onClick={applyRecommendedCamps}
                className="text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1 underline"
              >
                <RotateCcw className="w-3 h-3" />
                <span>おすすめ一発適用</span>
              </button>
            </div>

            {/* キャンプ候補地スクロールリスト */}
            <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
              {selectedField.officialCamps.map(camp => {
                const isDeployed = deployedCampIds.includes(camp.id);
                const isSelected = selectedCamp?.id === camp.id;

                return (
                  <div
                    key={camp.id}
                    onClick={() => {
                      setSelectedCamp(camp);
                      const parentArea = selectedField.areaNodes.find(a => a.areaNumber === camp.areaNumber);
                      if (parentArea) setSelectedArea(parentArea);
                    }}
                    className={`flex items-center justify-between p-2 rounded-lg border text-xs cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#1e2538] border-amber-400/80 shadow-sm'
                        : isDeployed
                        ? 'bg-sky-950/20 border-sky-500/30'
                        : 'bg-[#151a26] border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDeployCamp(camp.id);
                        }}
                        className={`w-4 h-4 rounded flex items-center justify-center border transition-all ${
                          isDeployed
                            ? 'bg-sky-500 border-sky-400 text-slate-950'
                            : 'border-slate-600 bg-slate-900 hover:border-slate-400'
                        }`}
                      >
                        {isDeployed && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </button>
                      <span className={`font-bold ${isDeployed ? 'text-white' : 'text-slate-300'}`}>
                        {camp.name}
                      </span>
                      {camp.isRecommended && (
                        <span className="bg-amber-500/20 text-amber-300 text-[9px] px-1 py-0.2 rounded border border-amber-500/30">
                          推奨
                        </span>
                      )}
                    </div>

                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      camp.safety === 'stable' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' :
                      camp.safety === 'unstable' ? 'bg-amber-950 text-amber-300 border border-amber-500/30' :
                      'bg-rose-950 text-rose-300 border border-rose-500/30'
                    }`}>
                      {camp.safetyLabel}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 選択中のエリア or キャンプ詳細情報パネル */}
          <div className="bg-[#121622] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xl">
            <div className="border-b border-slate-800/80 pb-2.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider block">詳細タクティカル情報</span>
                <h4 className="text-base font-bold text-white">
                  {selectedCamp ? selectedCamp.name : selectedArea ? `エリア ${selectedArea.areaNumber}：${selectedArea.name}` : 'エリアまたはキャンプを選択'}
                </h4>
              </div>
              {selectedCamp && (
                <button
                  onClick={() => toggleDeployCamp(selectedCamp.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    deployedCampIds.includes(selectedCamp.id)
                      ? 'bg-rose-600 hover:bg-rose-500 text-white'
                      : 'bg-sky-500 hover:bg-sky-400 text-slate-950'
                  }`}
                >
                  {deployedCampIds.includes(selectedCamp.id) ? 'キャンプ撤去' : 'ここに設営'}
                </button>
              )}
            </div>

            {selectedCamp ? (
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="bg-[#0e121a] p-3 rounded-xl border border-slate-800 leading-relaxed">
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className="font-bold text-slate-200">位置: {selectedCamp.locationName}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                      selectedCamp.safety === 'stable' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' :
                      selectedCamp.safety === 'unstable' ? 'bg-amber-950 text-amber-300 border border-amber-500/30' :
                      'bg-rose-950 text-rose-300 border border-rose-500/30'
                    }`}>
                      安全度: {selectedCamp.safetyLabel}
                    </span>
                  </div>
                  <p>{selectedCamp.description}</p>
                </div>

                <div className="bg-sky-950/20 border border-sky-500/30 p-2.5 rounded-xl text-[11px] text-sky-200">
                  <strong className="text-sky-300 block mb-0.5">【簡易キャンプ設営方法】</strong>
                  現地で候補地を発見後、「キャンプ設営キット」を使用するか、ベースキャンプのアイルー（サポート窓口）に依頼して設営します。破壊されても一定時間後に自動修復されます。
                </div>
              </div>
            ) : selectedArea ? (
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="bg-[#0e121a] p-3 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-[11px]">地形・特徴</span>
                    <span className="text-amber-300 font-bold">{selectedArea.terrainLabel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-[11px]">生息・出没モンスター</span>
                    <span className="text-white font-bold">{selectedArea.monstersFound.join(' / ')}</span>
                  </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/20 p-2.5 rounded-xl text-[11px] text-amber-200">
                  <strong className="text-amber-300 block mb-0.5">【セクレト自動操縦】</strong>
                  マップ上でエリア{selectedArea.areaNumber}を目的地に設定すると、セクレトが自動で最速・最適ルートを疾走します。
                </div>
              </div>
            ) : (
              <div className="py-8 text-center text-slate-500 text-xs space-y-2">
                <Navigation className="w-7 h-7 mx-auto text-slate-600 animate-pulse" />
                <p>マップ上のエリア番号または右上のキャンプ一覧をクリックすると、詳細な地形特徴・安全度・モンスター情報が表示されます。</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 環境ギミック ＆ 太古の破片発掘ガイド */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 環境ギミック攻略 */}
        <div className="bg-[#121622] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xl">
          <div className="flex items-center space-x-2 text-amber-400 border-b border-slate-800 pb-2">
            <Zap className="w-4 h-4" />
            <h4 className="text-sm sm:text-base font-bold text-white">
              {selectedField.name}の環境ギミック・罠の使い方
            </h4>
          </div>

          <div className="space-y-3">
            {selectedField.environmentalGimmicks.map((gimmick, idx) => (
              <div key={idx} className="bg-[#161a26] border border-slate-800 rounded-xl p-3.5 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-300 text-sm">{gimmick.name}</span>
                  <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400">
                    エリア {gimmick.area}
                  </span>
                </div>
                <p className="text-slate-300 leading-relaxed">{gimmick.effect}</p>
                <div className="bg-[#0e121a] p-2 rounded-lg text-[11px] text-slate-400 border border-slate-800">
                  <strong className="text-amber-400">発動方法: </strong>{gimmick.howToTrigger}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 採取・太古の破片発掘ホットスポット */}
        <div className="bg-[#121622] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xl">
          <div className="flex items-center space-x-2 text-emerald-400 border-b border-slate-800 pb-2">
            <Sparkles className="w-4 h-4" />
            <h4 className="text-sm sm:text-base font-bold text-white">
              重要採取地 ＆ 太古の破片（アーティア素材）周回
            </h4>
          </div>

          <div className="space-y-3">
            {selectedField.gatheringHotspots.map((spot, idx) => (
              <div key={idx} className="bg-[#161a26] border border-slate-800 rounded-xl p-3.5 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-300 text-sm">{spot.category}</span>
                  <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400">
                    エリア {spot.area}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 py-1">
                  {spot.items.map((it, i) => (
                    <span key={i} className="bg-[#1b2234] border border-slate-700 text-slate-200 px-2 py-0.5 rounded text-[10px]">
                      {it}
                    </span>
                  ))}
                </div>
                <p className="text-slate-400 text-[11px]">{spot.tips}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

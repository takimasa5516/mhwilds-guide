import React, { useState, useEffect } from 'react';
import { fieldsMapData } from '../data/mapsData';
import { FieldMapData, ClimateSeason, OfficialCampSpot, AreaTopologyNode } from '../types';
import { 
  Map, Tent, Zap, Sparkles, Compass, Eye, AlertTriangle, Droplets, 
  Flame, Wind, Layers, ChevronRight, CheckCircle2, RotateCcw, Navigation,
  Maximize2, X
} from 'lucide-react';

export const InteractiveMapSection: React.FC = () => {
  const [selectedFieldId, setSelectedFieldId] = useState<string>('windward-plains');
  const [selectedClimate, setSelectedClimate] = useState<ClimateSeason>('anomaly');
  const [selectedLayer, setSelectedLayer] = useState<string>('all');
  const [selectedArea, setSelectedArea] = useState<AreaTopologyNode | null>(null);
  const [selectedCamp, setSelectedCamp] = useState<OfficialCampSpot | null>(null);
  
  // ピンフィルター（'all' | 'camps' | 'areas'）
  const [pinFilter, setPinFilter] = useState<'all' | 'camps' | 'areas'>('all');
  
  // 拡大モーダル
  const [isZoomModalOpen, setIsZoomModalOpen] = useState<boolean>(false);

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

  // 階層フィルター適用ノード
  const visibleNodes = selectedField.areaNodes.filter(node => {
    if (selectedLayer === 'all') return true;
    return node.elevation === selectedLayer || node.elevation === 'all';
  });

  // 公式ゲーム内マップ画像URL解決
  const getMapImageUrl = (layer: string = selectedLayer) => {
    const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
    const layerPath = selectedField.mapImages[layer] || selectedField.mapImages['all'] || Object.values(selectedField.mapImages)[0];
    return `${base}${layerPath}`;
  };

  const getSafetyBadgeStyle = (safety: string) => {
    switch (safety) {
      case 'stable': return 'border-emerald-400 bg-emerald-500 text-slate-950 shadow-emerald-500/50';
      case 'unstable': return 'border-amber-400 bg-amber-500 text-slate-950 shadow-amber-500/50';
      case 'dangerous': return 'border-rose-400 bg-rose-500 text-white shadow-rose-500/50';
      default: return 'border-slate-400 bg-slate-500 text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Map className="w-4 h-4" />
            <span>Official In-Game Field & Climate Map</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            公式立体フィールド地図 ＆ 簡易キャンプ設営シミュレーター
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            ゲーム内の公式全体マップテクスチャを完全実装。「荒廃期」「異常気象」「豊穣期」で激変するフィールド環境と、簡易キャンプ設営（安全度3段階）を攻略
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

      {/* メインマップエリア ＆ 設営シミュレーター */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* 左側（7/12）：公式高精細ゲーム内立体マップ */}
        <div className="lg:col-span-7 bg-[#121622] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
            <div>
              <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider block">
                Official In-Game Map
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center space-x-2">
                <span>{selectedField.name} 公式立体全体図</span>
              </h3>
            </div>

            {/* 階層レイヤー ＆ 表示フィルター */}
            <div className="flex flex-wrap items-center gap-2">
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

              {/* ピントグル */}
              <div className="flex items-center bg-[#0e121a] p-1 rounded-lg border border-slate-800 text-xs">
                <button
                  onClick={() => setPinFilter('all')}
                  className={`px-2 py-1 rounded text-[10px] font-bold transition-all ${
                    pinFilter === 'all' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="すべて表示"
                >
                  全ピン
                </button>
                <button
                  onClick={() => setPinFilter('camps')}
                  className={`px-2 py-1 rounded text-[10px] font-bold transition-all ${
                    pinFilter === 'camps' ? 'bg-sky-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="簡易キャンプのみ表示"
                >
                  🏕️ キャンプ
                </button>
                <button
                  onClick={() => setPinFilter('areas')}
                  className={`px-2 py-1 rounded text-[10px] font-bold transition-all ${
                    pinFilter === 'areas' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title="エリア番号のみ表示"
                >
                  🔢 エリア
                </button>
              </div>
            </div>
          </div>

          {/* 公式ゲーム内マップキャンバス */}
          <div className="relative w-full aspect-[4/3] bg-[#16120c] rounded-xl border border-amber-950/40 overflow-hidden shadow-2xl flex items-center justify-center select-none group">
            {/* カプコン公式ゲーム内マップテクスチャ */}
            <img
              src={getMapImageUrl()}
              alt={`${selectedField.name} 公式マップ`}
              className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] select-none pointer-events-none transition-opacity duration-300"
            />

            {/* 気候オーラオーバーレイ */}
            {selectedClimate === 'anomaly' && (
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/35 via-purple-900/10 to-indigo-950/20 pointer-events-none mix-blend-color-dodge animate-pulse"></div>
            )}
            {selectedClimate === 'abundant' && (
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/25 via-transparent to-amber-900/15 pointer-events-none mix-blend-screen"></div>
            )}

            {/* ズーム拡大ボタン */}
            <button
              onClick={() => setIsZoomModalOpen(true)}
              className="absolute top-3 left-3 bg-slate-900/90 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border border-slate-700 px-2.5 py-1 rounded-lg text-xs font-bold flex items-center space-x-1.5 shadow-lg transition-all z-30"
              title="地図を高解像度で全画面拡大"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>🔍 全画面拡大</span>
            </button>

            {/* コンパスローズ装飾 */}
            <div className="absolute top-3 right-3 text-slate-700 pointer-events-none flex flex-col items-center z-20">
              <span className="text-[10px] font-black text-amber-500/80 mb-0.5">N</span>
              <Compass className="w-6 h-6 opacity-40 text-amber-400" />
            </div>

            {/* エリア番号タクティカルバッジ */}
            {(pinFilter === 'all' || pinFilter === 'areas') && visibleNodes.map(node => {
              const isSelected = selectedArea?.areaNumber === node.areaNumber;
              return (
                <div
                  key={node.areaNumber}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 group/area"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <button
                    onClick={() => {
                      setSelectedArea(node);
                      setSelectedCamp(null);
                    }}
                    className={`relative flex items-center justify-center rounded-full font-mono font-black transition-all ${
                      isSelected
                        ? 'w-8 h-8 bg-amber-500 text-slate-950 border-2 border-white ring-4 ring-amber-400/60 shadow-2xl scale-125 z-20'
                        : 'w-6 h-6 bg-slate-950/85 hover:bg-slate-900 text-amber-300 border border-amber-500/60 hover:border-amber-300 hover:scale-115 shadow-lg backdrop-blur-sm'
                    }`}
                    title={`エリア${node.areaNumber}：${node.name}`}
                  >
                    <span className="text-[11px] font-black">{node.areaNumber}</span>
                  </button>

                  {/* ホバー吹き出し */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-0.5 rounded bg-slate-950/95 border border-slate-700 text-white text-[10px] font-bold whitespace-nowrap shadow-2xl pointer-events-none opacity-0 group-hover/area:opacity-100 transition-opacity z-40">
                    エリア{node.areaNumber}：{node.name}
                  </div>
                </div>
              );
            })}

            {/* 簡易キャンプ設営ピン */}
            {(pinFilter === 'all' || pinFilter === 'camps') && selectedField.officialCamps.map(camp => {
              const isDeployed = deployedCampIds.includes(camp.id);
              const isSelected = selectedCamp?.id === camp.id;

              return (
                <div
                  key={camp.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 group/camp"
                  style={{ left: `${camp.coordinates.x}%`, top: `${camp.coordinates.y}%` }}
                >
                  <button
                    onClick={() => {
                      setSelectedCamp(camp);
                      const parentArea = selectedField.areaNodes.find(a => a.areaNumber === camp.areaNumber);
                      if (parentArea) setSelectedArea(parentArea);
                    }}
                    className={`relative flex items-center justify-center rounded-full border shadow-xl transition-all ${
                      isDeployed
                        ? 'w-7 h-7 bg-sky-500 border-white text-slate-950 ring-2 ring-sky-300 shadow-sky-500/60 scale-115'
                        : `w-5 h-5 ${getSafetyBadgeStyle(camp.safety)} opacity-85 hover:opacity-100 hover:scale-125`
                    } ${isSelected ? 'ring-4 ring-amber-400 scale-125 z-30' : ''}`}
                    title={`${camp.name}（${camp.safetyLabel}）${isDeployed ? '【設営中】' : '【未設営】'}`}
                  >
                    {isDeployed ? (
                      <Tent className="w-3.5 h-3.5" />
                    ) : (
                      <span className="text-[9px] font-black leading-none">C</span>
                    )}
                  </button>

                  {/* ホバー吹き出し */}
                  <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-0.5 rounded bg-slate-950/95 border border-slate-700 text-white text-[10px] font-bold whitespace-nowrap shadow-2xl pointer-events-none transition-all z-40 ${
                    isSelected ? 'opacity-100 scale-100' : 'opacity-0 scale-95 group-hover/camp:opacity-100 group-hover/camp:scale-100'
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

            {/* ガイド注記バー */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#0c0f16]/90 backdrop-blur border border-slate-700 px-2.5 py-1 rounded text-[10px] text-slate-300 pointer-events-none shadow-lg flex items-center justify-between overflow-x-auto">
              <div className="flex items-center space-x-2 whitespace-nowrap">
                <span>🎯 エリア番号・キャンプピンをクリックで詳細連動</span>
                <span className="text-slate-500">|</span>
                <span className="text-sky-400">🏕️ 設営キャンプ</span>
                <span className="text-slate-500">|</span>
                <span className="text-emerald-400">● 安全</span>
                <span className="text-amber-400">● 不安定</span>
                <span className="text-rose-400">● 要注意</span>
              </div>
              <span className="text-amber-400 font-bold hidden sm:inline">カプコン公式マップ準拠</span>
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

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-[#0e121a] p-2 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">設営状況</span>
                    <span className={`font-bold ${deployedCampIds.includes(selectedCamp.id) ? 'text-sky-400' : 'text-slate-400'}`}>
                      {deployedCampIds.includes(selectedCamp.id) ? '✓ 設営済み（即時FT可能）' : '未設営'}
                    </span>
                  </div>
                  <div className="bg-[#0e121a] p-2 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">セクレト自動誘導</span>
                    <span className="text-amber-400 font-bold">全域マップからワンタップ移動可</span>
                  </div>
                </div>
              </div>
            ) : selectedArea ? (
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="bg-[#0e121a] p-3 rounded-xl border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 font-bold">地質: {selectedArea.terrainLabel}</span>
                    <span className="text-[10px] text-slate-400">
                      階層: {selectedArea.elevation === 'surface' ? '地表' : selectedArea.elevation === 'underground' ? '地下' : '全層'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">生息・徘徊モンスター:</span>
                    <span className="text-white font-bold">{selectedArea.monstersFound.join(', ')}</span>
                  </div>
                </div>

                {/* 該当エリアの環境ギミック */}
                {selectedField.environmentalGimmicks.filter(g => g.area === selectedArea.areaNumber).map((gimmick, idx) => (
                  <div key={idx} className="bg-purple-950/20 border border-purple-500/30 p-2.5 rounded-xl">
                    <div className="flex items-center space-x-1.5 text-purple-300 font-bold mb-1">
                      <Zap className="w-3.5 h-3.5 text-purple-400" />
                      <span>エリアギミック: {gimmick.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-300">{gimmick.effect}</p>
                    <p className="text-[10px] text-amber-300/90 mt-1">発動法: {gimmick.howToTrigger}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-slate-500 text-xs">
                <Navigation className="w-8 h-8 mx-auto mb-2 opacity-30 text-amber-400" />
                <p>マップ上のエリア番号または右上のキャンプ一覧をクリックすると、詳細な地形特徴・安全度・モンスター情報が表示されます。</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 環境ギミック ＆ 重要採取地（アーティア素材周回） */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 環境ギミック一覧 */}
        <div className="bg-[#121622] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xl">
          <div className="flex items-center space-x-2 border-b border-slate-800/80 pb-2.5">
            <Zap className="w-4 h-4 text-amber-400" />
            <h4 className="text-sm sm:text-base font-bold text-white">
              {selectedField.name}の環境ギミック・罠の使い方
            </h4>
          </div>

          <div className="space-y-2">
            {selectedField.environmentalGimmicks.map((gimmick, idx) => (
              <div key={idx} className="bg-[#0e121a] p-3 rounded-xl border border-slate-800/80 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-300">{gimmick.name}</span>
                  <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                    エリア {gimmick.area}
                  </span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {gimmick.effect}
                </p>
                <div className="bg-slate-900/90 px-2 py-1 rounded text-[10px] text-slate-400">
                  <span className="text-amber-400/90 font-bold">発動方法: </span>
                  {gimmick.howToTrigger}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 重要採取地 ＆ 太古の破片（アーティア素材）周回ルート */}
        <div className="bg-[#121622] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xl">
          <div className="flex items-center space-x-2 border-b border-slate-800/80 pb-2.5">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <h4 className="text-sm sm:text-base font-bold text-white">
              重要採取地 ＆ 太古の破片（アーティア素材）周回
            </h4>
          </div>

          <div className="space-y-2">
            {selectedField.gatheringHotspots.map((hotspot, idx) => (
              <div key={idx} className="bg-[#0e121a] p-3 rounded-xl border border-slate-800/80 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-300">{hotspot.category}</span>
                  <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                    エリア {hotspot.area}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {hotspot.items.map((item, i) => (
                    <span key={i} className="text-[10px] bg-slate-900 px-2 py-0.5 rounded text-slate-200 border border-slate-800">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {hotspot.tips}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 全画面地図拡大モーダル */}
      {isZoomModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-fadeIn"
          onClick={() => setIsZoomModalOpen(false)}
        >
          <div 
            className="relative bg-[#131722] border border-slate-700 rounded-2xl w-full max-w-5xl max-h-[95vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* モーダルヘッダー */}
            <div className="p-3 sm:p-4 border-b border-slate-800 flex items-center justify-between bg-[#0e121a]">
              <div className="flex items-center space-x-2">
                <Map className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {selectedField.name} 公式立体全体図（高解像度拡大）
                </h3>
              </div>

              {/* 階層切り替え */}
              <div className="flex items-center space-x-2">
                {selectedField.availableLayers && (
                  <div className="flex items-center bg-[#131722] p-1 rounded-lg border border-slate-800 text-xs">
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
                <button
                  onClick={() => setIsZoomModalOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* モーダルマップ画像 */}
            <div className="relative flex-1 bg-[#16120c] p-2 overflow-auto flex items-center justify-center min-h-[400px]">
              <div className="relative max-w-full max-h-full aspect-[4/3] flex items-center justify-center">
                <img
                  src={getMapImageUrl()}
                  alt={`${selectedField.name} 公式マップ高解像度`}
                  className="w-full h-full object-contain filter drop-shadow-2xl select-none"
                />

                {/* モーダル内ピン表示 */}
                {(pinFilter === 'all' || pinFilter === 'areas') && visibleNodes.map(node => (
                  <div
                    key={node.areaNumber}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  >
                    <div className="w-7 h-7 bg-slate-950/85 text-amber-300 border border-amber-500/80 rounded-full flex items-center justify-center font-mono font-black text-xs shadow-lg">
                      {node.areaNumber}
                    </div>
                  </div>
                ))}

                {(pinFilter === 'all' || pinFilter === 'camps') && selectedField.officialCamps.map(camp => {
                  const isDeployed = deployedCampIds.includes(camp.id);
                  return (
                    <div
                      key={camp.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
                      style={{ left: `${camp.coordinates.x}%`, top: `${camp.coordinates.y}%` }}
                    >
                      <div className={`flex items-center justify-center rounded-full border shadow-xl ${
                        isDeployed
                          ? 'w-7 h-7 bg-sky-500 border-white text-slate-950'
                          : `w-5 h-5 ${getSafetyBadgeStyle(camp.safety)}`
                      }`}>
                        {isDeployed ? <Tent className="w-3.5 h-3.5" /> : <span className="text-[9px] font-bold">C</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* モーダルフッター */}
            <div className="p-2.5 sm:p-3 border-t border-slate-800 bg-[#0e121a] text-center text-xs text-slate-400">
              ゲーム内全体マップと同様の公式仕様。右上の階層切り替えで地表・地下・各階層を切り替え可能。
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

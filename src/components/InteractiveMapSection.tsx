import React, { useState } from 'react';
import { fieldsMapData } from '../data/mapsData';
import { FieldMapData, ClimateSeason, MapPin } from '../types';
import { Map, Tent, Zap, Sparkles, Compass, Eye, AlertTriangle, Droplets, Flame, Wind, Layers, ChevronRight, CheckCircle2, Maximize2, X } from 'lucide-react';

export const InteractiveMapSection: React.FC = () => {
  const [selectedFieldId, setSelectedFieldId] = useState<string>('windward-plains');
  const [selectedClimate, setSelectedClimate] = useState<ClimateSeason>('anomaly');
  const [pinFilter, setPinFilter] = useState<'all' | 'camp' | 'gimmick' | 'gathering' | 'nest'>('all');
  const [activePin, setActivePin] = useState<MapPin | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const selectedField = fieldsMapData.find(f => f.id === selectedFieldId) || fieldsMapData[0];
  const climateInfo = selectedField.climates[selectedClimate];

  // フィルター済みピン一覧
  const filteredPins = selectedField.mapPins.filter(pin => {
    if (pinFilter === 'all') return true;
    return pin.type === pinFilter;
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
                setActivePin(null);
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 地図キャンバス（左2カラム） */}
        <div className="lg:col-span-2 bg-[#10141f] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
            <div>
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <span>{selectedField.name} 戦術タクティカルマップ</span>
              </h3>
              <span className="text-[11px] text-slate-400">ピンをクリックすると詳細情報と攻略手順が表示されます</span>
            </div>

            {/* ピン種別フィルター */}
            <div className="flex items-center bg-[#0c0f16] p-1 rounded-lg border border-slate-800 overflow-x-auto">
              <button
                onClick={() => setPinFilter('all')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold whitespace-nowrap ${
                  pinFilter === 'all' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'
                }`}
              >
                全て
              </button>
              <button
                onClick={() => setPinFilter('camp')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold whitespace-nowrap ${
                  pinFilter === 'camp' ? 'bg-sky-500 text-white font-bold' : 'text-sky-400'
                }`}
              >
                🏕️ キャンプ
              </button>
              <button
                onClick={() => setPinFilter('gimmick')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold whitespace-nowrap ${
                  pinFilter === 'gimmick' ? 'bg-purple-500 text-white font-bold' : 'text-purple-400'
                }`}
              >
                ⚡ 罠ギミック
              </button>
              <button
                onClick={() => setPinFilter('gathering')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold whitespace-nowrap ${
                  pinFilter === 'gathering' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-emerald-400'
                }`}
              >
                💎 発掘採取
              </button>
              <button
                onClick={() => setPinFilter('nest')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold whitespace-nowrap ${
                  pinFilter === 'nest' ? 'bg-rose-500 text-white font-bold' : 'text-rose-400'
                }`}
              >
                🐲 巣穴
              </button>
            </div>
          </div>

          {/* マップビジュアルエリア（ゲーム内立体地形図 ＆ インタラクティブHUD） */}
          <div className="relative w-full aspect-[4/3] bg-[#0c0f17] rounded-xl border border-slate-700/80 overflow-hidden shadow-2xl flex items-center justify-center group">
            {/* 地形地図イラスト背景画像 */}
            <img
              src={selectedField.mapImageUrl}
              alt={`${selectedField.name} 立体フィールド地図`}
              className={`absolute inset-0 w-full h-full object-cover select-none transition-all duration-700 ${
                selectedClimate === 'barren'
                  ? 'sepia-[0.15] contrast-110 brightness-95'
                  : selectedClimate === 'anomaly'
                  ? 'brightness-90 contrast-125 saturate-110'
                  : 'saturate-125 brightness-105'
              }`}
            />

            {/* 気候連動オーラ・環境エフェクトオーバーレイ */}
            {selectedClimate === 'anomaly' && (
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-purple-900/10 to-purple-950/30 pointer-events-none mix-blend-overlay animate-pulse"></div>
            )}
            {selectedClimate === 'abundant' && (
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-amber-950/20 pointer-events-none"></div>
            )}

            {/* 周辺減光（ヴィネット）＆タクティカルHUDフレーム */}
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.7)] pointer-events-none"></div>
            <div className="absolute inset-0 border border-amber-500/20 rounded-xl pointer-events-none"></div>
            
            {/* HUDコーナーブラケット */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-400 pointer-events-none"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-400 pointer-events-none"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-400 pointer-events-none"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-400 pointer-events-none"></div>

            {/* 地図情報バッジ */}
            <div className="absolute top-3 left-3 bg-[#0c0f16]/90 backdrop-blur border border-amber-500/30 px-2.5 py-1 rounded-lg text-[10px] text-amber-300 font-bold shadow-lg flex items-center space-x-1.5 pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>{selectedField.name} 立体地形地図（{selectedField.nameEn}）</span>
            </div>

            {/* 拡大表示ボタン */}
            <button
              onClick={() => setIsZoomed(true)}
              className="absolute top-3 right-3 bg-[#0c0f16]/90 hover:bg-[#1a2030] backdrop-blur border border-slate-700 hover:border-amber-400 text-slate-300 hover:text-white px-2 py-1 rounded-lg text-[11px] font-semibold shadow-lg flex items-center space-x-1 transition-all z-20"
              title="地図を高解像度で全画面拡大"
            >
              <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">地図拡大</span>
            </button>

            {/* インタラクティブピン */}
            {filteredPins.map(pin => {
              const isSelected = activePin?.id === pin.id;
              const getPinStyle = (type: string) => {
                switch (type) {
                  case 'camp':
                    return 'bg-sky-500 text-slate-950 border-sky-200 shadow-sky-500/60 ring-2 ring-sky-400/40';
                  case 'gimmick':
                    return 'bg-purple-600 text-white border-purple-200 shadow-purple-600/60 ring-2 ring-purple-400/40';
                  case 'gathering':
                    return 'bg-emerald-500 text-slate-950 border-emerald-200 shadow-emerald-500/60 ring-2 ring-emerald-400/40';
                  case 'nest':
                    return 'bg-rose-600 text-white border-rose-200 shadow-rose-600/60 ring-2 ring-rose-400/40';
                  default:
                    return 'bg-amber-500 text-slate-950 border-amber-200 shadow-amber-500/60 ring-2 ring-amber-400/40';
                }
              };

              const getPinIcon = (type: string) => {
                switch (type) {
                  case 'camp': return '🏕️';
                  case 'gimmick': return '⚡';
                  case 'gathering': return '💎';
                  case 'nest': return '🐲';
                  default: return '📍';
                }
              };

              return (
                <div
                  key={pin.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 group/pin"
                  style={{ left: `${pin.coordinates.x}%`, top: `${pin.coordinates.y}%` }}
                >
                  {/* 選択中の波紋エフェクト */}
                  {isSelected && (
                    <span className="absolute -inset-2 rounded-full bg-amber-400/40 animate-ping pointer-events-none"></span>
                  )}

                  {/* ピンボタン */}
                  <button
                    onClick={() => setActivePin(pin)}
                    className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 shadow-2xl cursor-pointer transition-all hover:scale-125 ${getPinStyle(pin.type)} ${
                      isSelected ? 'ring-4 ring-amber-400 scale-125 z-30' : ''
                    }`}
                    title={`${pin.name} (エリア${pin.areaNumber})`}
                  >
                    <span className="text-xs filter drop-shadow">{getPinIcon(pin.type)}</span>
                  </button>

                  {/* ホバーまたは選択時の吹き出しラベル */}
                  <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 rounded bg-slate-950/95 border border-slate-700 text-white text-[10px] font-bold whitespace-nowrap shadow-2xl pointer-events-none transition-all ${
                    isSelected ? 'opacity-100 scale-100' : 'opacity-0 scale-90 group-hover/pin:opacity-100 group-hover/pin:scale-100'
                  }`}>
                    {pin.name}
                  </div>
                </div>
              );
            })}

            {/* ガイド注記 */}
            <div className="absolute bottom-2.5 left-2.5 bg-[#0c0f16]/90 backdrop-blur border border-slate-700 px-2.5 py-1 rounded text-[10px] text-slate-300 pointer-events-none shadow-lg">
              🎯 ピンをクリックで詳細情報・ギミック手順を表示
            </div>
          </div>
        </div>

        {/* 右側：選択ピンの詳細情報 / エリアガイド */}
        <div className="bg-[#121622] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <div className="border-b border-slate-800/80 pb-3">
              <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider block">スポット詳細情報</span>
              <h4 className="text-base sm:text-lg font-black text-white mt-0.5">
                {activePin ? activePin.name : '地図上のピンを選択してください'}
              </h4>
              {activePin && (
                <span className="text-xs text-slate-400">
                  エリア {activePin.areaNumber} ・ {activePin.typeLabel}
                </span>
              )}
            </div>

            {activePin ? (
              <div className="mt-4 space-y-3 text-xs">
                <div className="bg-[#0e121a] p-3 rounded-xl border border-slate-800 text-slate-300 leading-relaxed">
                  {activePin.description}
                </div>

                {activePin.gimmickEffect && (
                  <div className="bg-purple-950/20 border border-purple-500/30 p-3 rounded-xl text-purple-200 space-y-1">
                    <strong className="text-purple-300 block">【ギミック効果】</strong>
                    <p>{activePin.gimmickEffect}</p>
                  </div>
                )}

                {activePin.gatheringItems && (
                  <div className="bg-emerald-950/20 border border-emerald-500/30 p-3 rounded-xl text-emerald-200 space-y-1">
                    <strong className="text-emerald-300 block">【採取可能アイテム】</strong>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {activePin.gatheringItems.map((item, idx) => (
                        <span key={idx} className="bg-slate-900 px-2 py-0.5 rounded text-[11px] text-emerald-300 border border-emerald-500/20">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl text-amber-200 space-y-1">
                  <strong className="text-amber-300 block">【セクレト移動Tips】</strong>
                  <p>セクレト騎乗中にマップでピン留めすると、自動操縦でこの地点まで最速ルートで疾走します。</p>
                </div>
              </div>
            ) : (
              <div className="py-12 text-center text-slate-500 text-xs space-y-2">
                <Compass className="w-8 h-8 mx-auto text-slate-600 animate-pulse" />
                <p>左のマップ上に配置された「キャンプ」「罠」「発掘」のピンをクリックすると、ここに詳細な利用手順と効果が表示されます。</p>
              </div>
            )}
          </div>

          {/* ベースキャンプ設営クイック一覧 */}
          <div className="border-t border-slate-800/80 pt-3">
            <span className="text-[10px] text-slate-400 font-bold block mb-1.5">このフィールドのキャンプ一覧:</span>
            <div className="space-y-1.5 text-xs">
              {selectedField.baseCamps.map(camp => (
                <div key={camp.name} className="flex items-center justify-between bg-[#151a26] p-2 rounded-lg border border-slate-800">
                  <div className="flex items-center space-x-1.5">
                    <Tent className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                    <span className="font-bold text-slate-200">{camp.name}</span>
                  </div>
                  <span className="text-[10px] text-slate-400">エリア{camp.area}</span>
                </div>
              ))}
            </div>
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

      {/* 地図全画面・高解像度拡大モーダル */}
      {isZoomed && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-2 sm:p-4 animate-in fade-in duration-200">
          {/* モーダルヘッダー */}
          <div className="flex items-center justify-between px-3 py-2 bg-[#121622] border border-slate-800 rounded-t-xl">
            <div className="flex items-center space-x-2">
              <Map className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm sm:text-base font-bold text-white">
                【高精細立体地形図】{selectedField.name}（{selectedField.nameEn}）
              </h3>
              <span className="hidden sm:inline-block text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                {climateInfo.name}
              </span>
            </div>
            <button
              onClick={() => setIsZoomed(false)}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all flex items-center space-x-1"
            >
              <X className="w-5 h-5" />
              <span className="text-xs font-bold pr-1">閉じる</span>
            </button>
          </div>

          {/* モーダルマップキャンバス */}
          <div className="relative flex-1 bg-[#0c0f17] border-x border-b border-slate-800 rounded-b-xl overflow-hidden flex items-center justify-center">
            <img
              src={selectedField.mapImageUrl}
              alt={selectedField.name}
              className="w-full h-full object-contain select-none"
            />

            {/* モーダル内ピン配置 */}
            {filteredPins.map(pin => {
              const isSelected = activePin?.id === pin.id;
              const getPinIcon = (type: string) => {
                switch (type) {
                  case 'camp': return '🏕️';
                  case 'gimmick': return '⚡';
                  case 'gathering': return '💎';
                  case 'nest': return '🐲';
                  default: return '📍';
                }
              };

              return (
                <div
                  key={pin.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
                  style={{ left: `${pin.coordinates.x}%`, top: `${pin.coordinates.y}%` }}
                >
                  <button
                    onClick={() => setActivePin(pin)}
                    className={`relative flex items-center justify-center w-9 h-9 rounded-full border-2 shadow-2xl cursor-pointer transition-all hover:scale-125 ${
                      pin.type === 'camp' ? 'bg-sky-500 text-slate-950 border-white' :
                      pin.type === 'gimmick' ? 'bg-purple-600 text-white border-white' :
                      pin.type === 'gathering' ? 'bg-emerald-500 text-slate-950 border-white' :
                      'bg-rose-600 text-white border-white'
                    } ${isSelected ? 'ring-4 ring-amber-400 scale-125' : ''}`}
                    title={pin.name}
                  >
                    <span className="text-sm">{getPinIcon(pin.type)}</span>
                  </button>
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-1.5 py-0.5 rounded bg-black/90 border border-slate-700 text-white text-[10px] font-bold whitespace-nowrap shadow-lg">
                    {pin.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* 選択中のピン情報下部バー */}
          {activePin && (
            <div className="mt-2 bg-[#121622] border border-amber-500/40 p-3 rounded-xl flex items-center justify-between text-xs text-slate-200">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-amber-300 text-sm">{activePin.name}</span>
                <span className="text-slate-400">（エリア{activePin.areaNumber}・{activePin.typeLabel}）</span>
                <span className="hidden sm:inline text-slate-300">: {activePin.description}</span>
              </div>
              <button
                onClick={() => setIsZoomed(false)}
                className="text-amber-400 hover:underline text-xs whitespace-nowrap font-bold"
              >
                詳細パネルで見る →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

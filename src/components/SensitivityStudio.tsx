import React, { useState, useEffect, useRef } from 'react';
// @ts-ignore
import Plotly from 'plotly.js-dist-min';
import { 
  Sliders, 
  TrendingUp, 
  AlertTriangle, 
  HelpCircle, 
  BarChart3, 
  RefreshCw, 
  CheckCircle2,
  Info
} from 'lucide-react';
import { PROJECT_2_DATA } from '../data/engEcoData.ts';

export const SensitivityStudio: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<'financial' | 'economic'>('financial');

  // Interactive Live Sensitivity Sliders
  const [sliderTariff, setSliderTariff] = useState<number>(14.0);
  const [sliderCapexDelta, setSliderCapexDelta] = useState<number>(0); // % change
  const [sliderDiscount, setSliderDiscount] = useState<number>(0.09); // 9%
  const [sliderFuelCost, setSliderFuelCost] = useState<number>(19.0);
  const [sliderCarbonPrice, setSliderCarbonPrice] = useState<number>(10000);

  const tornadoChartRef = useRef<HTMLDivElement>(null);

  // Tornado Chart Renderer
  useEffect(() => {
    if (!tornadoChartRef.current) return;

    if (activeDomain === 'financial') {
      const params = PROJECT_2_DATA.financialSensitivity.map(s => s.parameter).reverse();
      const elasticities = PROJECT_2_DATA.financialSensitivity.map(s => s.elasticity).reverse();

      const trace: any = {
        y: params,
        x: elasticities,
        type: 'bar',
        orientation: 'h',
        marker: {
          color: elasticities.map(e => e > 4 ? '#ef4444' : e > 1 ? '#f59e0b' : '#06b6d4'),
          line: { color: '#ffffff', width: 1 }
        },
        hovertemplate: '<b>%{y}</b><br>Elasticity Index (E): %{x:.2f}<extra></extra>'
      };

      const layout: any = {
        title: {
          text: '<b>Financial Elasticity Ranking (Tornado Diagram)</b>',
          font: { size: 13, color: '#f8fafc', family: 'system-ui' },
          x: 0.05
        },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'rgba(15,23,42,0.6)',
        xaxis: {
          title: { text: '<b>Elasticity Index |%ΔFNPV / %ΔInput|</b>', font: { size: 10, color: '#94a3b8' } },
          gridcolor: 'rgba(71,85,105,0.3)',
          tickfont: { color: '#94a3b8', size: 10 }
        },
        yaxis: {
          tickfont: { color: '#e2e8f0', size: 11 },
          automargin: true
        },
        margin: { l: 180, r: 40, b: 40, t: 40 },
        autosize: true
      };

      Plotly.react(tornadoChartRef.current, [trace], layout, { responsive: true, displaylogo: false });
    } else {
      const params = PROJECT_2_DATA.economicSensitivity.map(s => s.parameter).reverse();
      const elasticities = PROJECT_2_DATA.economicSensitivity.map(s => s.elasticity).reverse();

      const trace: any = {
        y: params,
        x: elasticities,
        type: 'bar',
        orientation: 'h',
        marker: {
          color: elasticities.map(e => e >= 1 ? '#10b981' : e >= 0.5 ? '#06b6d4' : '#64748b'),
          line: { color: '#ffffff', width: 1 }
        },
        hovertemplate: '<b>%{y}</b><br>Economic Elasticity Index (E): %{x:.2f}<extra></extra>'
      };

      const layout: any = {
        title: {
          text: '<b>Economic Sensitivity Elasticity Ranking (Tornado Diagram)</b>',
          font: { size: 13, color: '#f8fafc', family: 'system-ui' },
          x: 0.05
        },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'rgba(15,23,42,0.6)',
        xaxis: {
          title: { text: '<b>Elasticity Index |%ΔENPV / %ΔInput|</b>', font: { size: 10, color: '#94a3b8' } },
          gridcolor: 'rgba(71,85,105,0.3)',
          tickfont: { color: '#94a3b8', size: 10 }
        },
        yaxis: {
          tickfont: { color: '#e2e8f0', size: 11 },
          automargin: true
        },
        margin: { l: 200, r: 40, b: 40, t: 40 },
        autosize: true
      };

      Plotly.react(tornadoChartRef.current, [trace], layout, { responsive: true, displaylogo: false });
    }
  }, [activeDomain]);

  // Live Recalculations based on sliders
  const recalculatedFNPV = (sliderTariff / 14.0) * 40107.31 * 0.468 - (14833.65 * (1 + sliderCapexDelta / 100)) - 18819.51 * 0.20;
  const recalculatedENPV = 28387.20 + (sliderFuelCost - 19.0) * 1489.6 + (sliderCarbonPrice - 10000) * 0.697 - (14833.65 * (sliderCapexDelta / 100) * 0.9);

  return (
    <div className="space-y-8 py-6">
      {/* Studio Header */}
      <div className="materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-semibold border border-cyan-500/30 flex items-center gap-1">
                <Sliders className="w-3 h-3" />
                Sensitivity & Risk Analysis Studio
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                Tornado Elasticity Ranking
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Multi-Parameter Sensitivity Analysis & Elasticity Index Lab
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Evaluating how fluctuations in capital expenditures, PPA electricity tariffs, oil displacement costs, carbon pricing, and interest rates impact financial viability and national economic welfare.
            </p>
          </div>

          {/* Switch Domain Tab */}
          <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono shrink-0">
            <button
              onClick={() => setActiveDomain('financial')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeDomain === 'financial' 
                  ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Financial Sensitivity (FBCA)
            </button>
            <button
              onClick={() => setActiveDomain('economic')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeDomain === 'economic' 
                  ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Economic Sensitivity (EBCA)
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1: TORNADO DIAGRAM & ELASTICITY MATRIX */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Tornado Chart */}
        <div className="lg:col-span-7 materials-glass p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-white font-heading">
              {activeDomain === 'financial' ? 'Financial Elasticity Tornado' : 'Economic Sensitivity Tornado'}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Elasticity Index: E = |%ΔNPV / %ΔInput| (Parameters with E &gt; 1.0 are Highly Sensitive)
            </p>
          </div>
          <div ref={tornadoChartRef} className="w-full h-[360px] mt-2" />
        </div>

        {/* Elasticity Ranking Summary Table */}
        <div className="lg:col-span-5 materials-glass p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-sm font-bold text-white font-heading">
              Sensitivity Classification Matrix
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Extracted directly from Certified Sensitivity Workbook
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-xs font-mono text-left">
              <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="px-3 py-2">Parameter</th>
                  <th className="px-3 py-2 text-right">Elasticity (E)</th>
                  <th className="px-3 py-2 text-center">Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {(activeDomain === 'financial' ? PROJECT_2_DATA.financialSensitivity : PROJECT_2_DATA.economicSensitivity).map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40">
                    <td className="px-3 py-2 text-slate-200">{item.parameter}</td>
                    <td className="px-3 py-2 text-right font-bold text-white">{item.elasticity.toFixed(2)}</td>
                    <td className="px-3 py-2 text-center">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        item.level === 'High' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        item.level === 'Moderate' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                        'bg-slate-800 text-slate-400'
                      }`}>
                        {item.level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-300">
            {activeDomain === 'financial' ? (
              <p>
                <strong className="text-white">Key Finding: </strong>
                Financial viability is extremely sensitive to <strong>PPA Tariff (E = 8.68)</strong> and <strong>CapEx Overruns (E = 7.68)</strong>. A mere 15% increase in capital cost wipes out private FNPV entirely.
              </p>
            ) : (
              <p>
                <strong className="text-white">Key Finding: </strong>
                Economic viability is driven by <strong>Avoided Fuel Cost (E = 1.05)</strong> and <strong>Annual Energy Yield (E = 1.05)</strong>. Even under worst-case parameters, ENPV remains substantially positive (&gt; 21 Billion LKR).
              </p>
            )}
          </div>
        </div>
      </div>

      {/* SECTION 2: LIVE SENSITIVITY SIMULATOR */}
      <div className="materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-base font-bold text-white font-heading">
              Interactive Stress-Testing Console
            </h3>
            <p className="text-xs text-slate-400">
              Drag parameters to evaluate project survivability under adverse economic shocks
            </p>
          </div>
          <button
            onClick={() => {
              setSliderTariff(14.0);
              setSliderCapexDelta(0);
              setSliderDiscount(0.09);
              setSliderFuelCost(19.0);
              setSliderCarbonPrice(10000);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-mono transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset to Baseline</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Slider 1: Tariff */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">PPA Tariff (LKR/kWh):</span>
              <span className="text-amber-400 font-bold">{sliderTariff.toFixed(1)} LKR</span>
            </div>
            <input
              type="range"
              min="11.0"
              max="18.0"
              step="0.2"
              value={sliderTariff}
              onChange={(e) => setSliderTariff(parseFloat(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>11.0 LKR</span>
              <span>Baseline: 14.0</span>
              <span>18.0 LKR</span>
            </div>
          </div>

          {/* Slider 2: CapEx Overrun */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">CapEx Variance (Δ%):</span>
              <span className={sliderCapexDelta > 0 ? 'text-red-400 font-bold' : 'text-emerald-400 font-bold'}>
                {sliderCapexDelta > 0 ? `+${sliderCapexDelta}%` : `${sliderCapexDelta}%`}
              </span>
            </div>
            <input
              type="range"
              min="-20"
              max="30"
              step="5"
              value={sliderCapexDelta}
              onChange={(e) => setSliderCapexDelta(parseFloat(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>-20% (Savings)</span>
              <span>0% (14.83 B)</span>
              <span>+30% (Overrun)</span>
            </div>
          </div>

          {/* Slider 3: Avoided Fuel Cost */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Avoided Fuel Cost:</span>
              <span className="text-emerald-400 font-bold">{sliderFuelCost.toFixed(1)} LKR/kWh</span>
            </div>
            <input
              type="range"
              min="12.0"
              max="28.0"
              step="0.5"
              value={sliderFuelCost}
              onChange={(e) => setSliderFuelCost(parseFloat(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>12.0 LKR</span>
              <span>Baseline: 19.0</span>
              <span>28.0 LKR</span>
            </div>
          </div>
        </div>

        {/* Live Simulation Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Simulated Financial Outcome */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 uppercase tracking-wider">Simulated Financial NPV (FNPV)</span>
              <span className={recalculatedFNPV > 0 ? 'text-emerald-400' : 'text-red-400 font-bold'}>
                {recalculatedFNPV > 0 ? 'COMMERCIALLY VIABLE' : 'COMMERCIALLY UNVIABLE'}
              </span>
            </div>
            <div className="text-2xl font-bold font-mono text-white flex items-baseline gap-2">
              <span className={recalculatedFNPV > 0 ? 'text-cyan-400' : 'text-red-400'}>
                {recalculatedFNPV.toLocaleString(undefined, { maximumFractionDigits: 1 })}
              </span>
              <span className="text-xs text-slate-400 font-normal">LKR Mn</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Baseline: 2,149.5 LKR Mn · Sensitivity: Tariff shifts FNPV by ±1,865M per ±10% delta.
            </p>
          </div>

          {/* Simulated Economic Outcome */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 uppercase tracking-wider">Simulated Economic NPV (ENPV)</span>
              <span className="text-emerald-400 font-bold">NATIONAL SURPLUS</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white flex items-baseline gap-2">
              <span className="text-emerald-400">
                {recalculatedENPV.toLocaleString(undefined, { maximumFractionDigits: 1 })}
              </span>
              <span className="text-xs text-slate-400 font-normal">LKR Mn</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Baseline: 28,387.2 LKR Mn · Avoided fuel generates immense economic buffer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

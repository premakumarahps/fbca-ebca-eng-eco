import React, { useState, useEffect, useRef } from 'react';
// @ts-ignore
import Plotly from 'plotly.js-dist-min';
import { 
  Sun, 
  Coins, 
  Leaf, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Table, 
  BarChart2, 
  Layers, 
  Clock, 
  Sparkles,
  ArrowRight,
  Info,
  Download
} from 'lucide-react';
import { PROJECT_2_DATA } from '../data/engEcoData.ts';

export const Project2SolarStudio: React.FC = () => {
  const [activeTableTab, setActiveTableTab] = useState<'economic' | 'financial'>('economic');
  const chartRef = useRef<HTMLDivElement>(null);

  // Render 20-Year Cumulative Cash Flow Comparison Chart using Plotly
  useEffect(() => {
    if (!chartRef.current) return;

    const years = PROJECT_2_DATA.annualCashFlows.map(c => `Yr ${c.year}`);
    const financialCumPV = PROJECT_2_DATA.annualCashFlows.map(c => c.fCumPV);
    const economicCumPV = PROJECT_2_DATA.annualCashFlows.map(c => c.eCumPV);
    const economicAnnualNet = PROJECT_2_DATA.annualCashFlows.map(c => c.eNet);
    const financialAnnualNet = PROJECT_2_DATA.annualCashFlows.map(c => c.fNet);

    const traceEcoCum: any = {
      x: years,
      y: economicCumPV,
      type: 'scatter',
      mode: 'lines+markers',
      name: 'Cumulative Economic Net (ENPV)',
      line: { color: '#10b981', width: 3.5 },
      marker: { size: 6, color: '#10b981' },
      hovertemplate: '<b>%{x}</b><br>Cumulative ENPV: %{y:,.1f} LKR Mn<extra></extra>'
    };

    const traceFinCum: any = {
      x: years,
      y: financialCumPV,
      type: 'scatter',
      mode: 'lines+markers',
      name: 'Cumulative Financial Net (FNPV)',
      line: { color: '#06b6d4', width: 2.5, dash: 'dash' },
      marker: { size: 5, color: '#06b6d4' },
      hovertemplate: '<b>%{x}</b><br>Cumulative FNPV: %{y:,.1f} LKR Mn<extra></extra>'
    };

    const traceEcoAnnual: any = {
      x: years,
      y: economicAnnualNet,
      type: 'bar',
      name: 'Annual Net Economic Benefit',
      marker: { color: 'rgba(16, 185, 129, 0.25)', line: { color: '#10b981', width: 1 } },
      yaxis: 'y2',
      hovertemplate: '<b>%{x}</b><br>Annual Economic Net: %{y:,.1f} LKR Mn<extra></extra>'
    };

    const layout: any = {
      title: {
        text: '<b>20-Year Discounted Cash Flow Trajectory & Payback Convergence</b>',
        font: { size: 14, color: '#f8fafc', family: 'system-ui' },
        x: 0.05,
        y: 0.96
      },
      paper_bgcolor: 'transparent',
      plot_bgcolor: 'rgba(15,23,42,0.6)',
      xaxis: {
        gridcolor: 'rgba(71,85,105,0.3)',
        tickfont: { color: '#94a3b8', size: 10 }
      },
      yaxis: {
        title: { text: '<b>Cumulative Discounted PV (LKR Mn)</b>', font: { size: 11, color: '#cbd5e1' } },
        gridcolor: 'rgba(71,85,105,0.3)',
        zerolinecolor: 'rgba(239,68,68,0.6)',
        zerolinewidth: 2,
        tickfont: { color: '#94a3b8', size: 10 }
      },
      yaxis2: {
        title: { text: '<b>Annual Net Flow (LKR Mn)</b>', font: { size: 10, color: '#94a3b8' } },
        overlaying: 'y',
        side: 'right',
        showgrid: false,
        tickfont: { color: '#94a3b8', size: 9 }
      },
      legend: {
        orientation: 'h',
        y: 1.15,
        x: 0.1,
        font: { color: '#e2e8f0', size: 11 }
      },
      margin: { l: 60, r: 60, b: 40, t: 60 },
      autosize: true
    };

    const config: any = {
      responsive: true,
      displaylogo: false
    };

    Plotly.react(chartRef.current, [traceEcoAnnual, traceEcoCum, traceFinCum], layout, config);

    const handleResize = () => {
      if (chartRef.current) Plotly.Plots.resize(chartRef.current);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="space-y-8 py-6">
      {/* Studio Header */}
      <div className="materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-semibold border border-amber-500/30 flex items-center gap-1">
                <Sun className="w-3 h-3" />
                Project 2: National Clean Energy Transition
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                100 MW Ground-Mounted Solar PV
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-semibold border border-cyan-500/30">
                Monaragala District · CEB Grid
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Siyambalanduwa 100 MW Solar PV Power Plant Appraisal
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Detailed 20-year financial and economic feasibility study for Sri Lanka’s flagship 100 MW solar park. Converts private financial cash flows into national economic values through shadow exchange (SERF 1.10), shadow wage (SWRF 0.80), and standard conversion (SCF 0.90) factors, accounting for avoided fossil fuels and carbon mitigation.
            </p>
          </div>

          {/* Key Parameters Pill Cluster */}
          <div className="grid grid-cols-2 gap-2 text-xs font-mono shrink-0">
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <span className="text-slate-400 text-[10px]">Total CapEx</span>
              <div className="text-sm font-bold text-white">14.83 B LKR</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <span className="text-slate-400 text-[10px]">PPA Tariff</span>
              <div className="text-sm font-bold text-amber-400">14.0 LKR/kWh</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <span className="text-slate-400 text-[10px]">Yr 1 Generation</span>
              <div className="text-sm font-bold text-cyan-400">180.0 GWh</div>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <span className="text-slate-400 text-[10px]">CO₂ Avoided</span>
              <div className="text-sm font-bold text-emerald-400">147.6k T/yr</div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: FINANCIAL VS ECONOMIC BENEFIT-COST DASHBOARD */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Commercial Financial BCA */}
        <div className="materials-glass p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <Coins className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-sm font-bold text-white font-heading">
                  Financial Benefit-Cost Analysis (FBCA)
                </h4>
                <p className="text-[11px] text-slate-400 font-mono">Commercial Developer Perspective (9% Hurdle)</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-cyan-400">Private Entity</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Financial NPV (FNPV)</div>
              <div className="text-xl font-bold text-cyan-400 mt-1">2,149.52 LKR Mn</div>
              <div className="text-[10px] text-slate-500">Commercial discounted net</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Financial IRR (FIRR)</div>
              <div className="text-xl font-bold text-white mt-1">11.07%</div>
              <div className="text-[10px] text-emerald-400">+2.07% above 9% discount rate</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Benefit-Cost Ratio</div>
              <div className="text-xl font-bold text-white mt-1">1.130</div>
              <div className="text-[10px] text-slate-500">Commercial viability &gt; 1.0</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Discounted Payback</div>
              <div className="text-xl font-bold text-amber-400 mt-1">14.20 Years</div>
              <div className="text-[10px] text-slate-500">Simple payback: 7.69 yrs</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 col-span-2">
              <div className="text-[10px] text-slate-400 uppercase">20-Year Financial Net Benefit</div>
              <div className="text-sm font-bold text-white mt-1">
                21,287.80 LKR Mn <span className="text-xs font-normal text-slate-400">(40,107M revenue - 18,820M costs)</span>
              </div>
            </div>
          </div>
        </div>

        {/* National Macroeconomic EBCA */}
        <div className="materials-glass p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <TrendingUp className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-sm font-bold text-white font-heading">
                  Economic Benefit-Cost Analysis (EBCA)
                </h4>
                <p className="text-[11px] text-slate-400 font-mono">National Welfare & CEB Macroeconomic Perspective</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400">National Welfare</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Economic NPV (ENPV)</div>
              <div className="text-xl font-bold text-emerald-400 mt-1">28,387.20 LKR Mn</div>
              <div className="text-[10px] text-emerald-400">13.2x higher than commercial NPV</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Economic IRR (EIRR)</div>
              <div className="text-xl font-bold text-white mt-1">33.95%</div>
              <div className="text-[10px] text-cyan-400">Massive societal return on capital</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Economic BCR</div>
              <div className="text-xl font-bold text-emerald-400 mt-1">2.691</div>
              <div className="text-[10px] text-slate-500">2.69 LKR benefit per 1 LKR spent</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Economic Payback</div>
              <div className="text-xl font-bold text-emerald-400 mt-1">3.53 Years</div>
              <div className="text-[10px] text-slate-500">Simple economic: 2.90 yrs</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 col-span-2">
              <div className="text-[10px] text-slate-400 uppercase">20-Year Total Economic Surplus</div>
              <div className="text-sm font-bold text-white mt-1">
                77,077.85 LKR Mn <span className="text-xs font-normal text-slate-400">(96,553M benefits - 19,475M costs)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: SHADOW PRICING CONVERSION & EXTERNALITIES BREAKDOWN */}
      <div className="materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="text-base font-bold text-white font-heading">
                Shadow Pricing Conversion Architecture & Monetized Externalities
              </h3>
              <p className="text-xs text-slate-400">
                Bridging commercial financial expenditure to actual opportunity cost for Sri Lanka's economy
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
            ADB & World Bank Guidelines
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Standard Conversion (SCF)</span>
              <strong className="text-emerald-400 text-sm">0.90</strong>
            </div>
            <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
              Applied to local non-traded goods and domestic services to remove tariff distortions and indirect local taxes.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Shadow Wage Rate (SWRF)</span>
              <strong className="text-cyan-400 text-sm">0.80</strong>
            </div>
            <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
              Accounts for rural underemployment in the Monaragala region; actual social opportunity cost of labor is lower than formal wage.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Shadow Exchange Rate (SERF)</span>
              <strong className="text-amber-400 text-sm">1.10</strong>
            </div>
            <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
              10% foreign currency premium reflecting scarcity value of foreign exchange reserves required to import PV panels and inverters.
            </p>
          </div>
        </div>

        {/* Externalities Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/30 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-xs">
              <Coins className="w-4 h-4" />
              <span>Avoided Thermal Fuel Cost</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white">64.04 B LKR</div>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
              19 LKR/kWh avoided cost by displacing thermal diesel and coal generation at the margin.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30 space-y-1.5">
            <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-xs">
              <Leaf className="w-4 h-4" />
              <span>Carbon Abatement Valuation</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white">29.52 B LKR</div>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
              147,582 tons/yr avoided emissions valued at Social Cost of Carbon (10,000 LKR/ton).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/30 space-y-1.5">
            <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-xs">
              <Users className="w-4 h-4" />
              <span>Direct Employment Generation</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white">3.00 B LKR</div>
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
              1,000 direct construction jobs in Year 0 plus 100 sustained permanent operations jobs in Monaragala.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: 20-YEAR CASH FLOW TRAJECTORY PLOT */}
      <div className="materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white font-heading">
              Interactive 20-Year Discounted Cash Flow & Payback Plot
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Hover curves to inspect annual cash values
          </span>
        </div>
        <div ref={chartRef} className="w-full h-[450px]" />
      </div>

      {/* SECTION 4: IN-BROWSER 20-YEAR CASH FLOW DATA TABLE */}
      <div className="materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Table className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white font-heading">
              Complete 20-Year Annual Cash Flow Ledger (Years 0 – 20)
            </h3>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setActiveTableTab('economic')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTableTab === 'economic' 
                  ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Economic Cash Flows (EBCA)
            </button>
            <button
              onClick={() => setActiveTableTab('financial')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTableTab === 'financial' 
                  ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Financial Cash Flows (FBCA)
            </button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800 max-h-[460px] scrollbar-thin">
          <table className="w-full text-xs font-mono text-left whitespace-nowrap">
            <thead className="bg-slate-900 sticky top-0 z-10 border-b border-slate-800 text-slate-400">
              <tr>
                <th className="px-3.5 py-2.5 bg-slate-900">Year</th>
                <th className="px-3.5 py-2.5">Energy (GWh)</th>
                {activeTableTab === 'economic' ? (
                  <>
                    <th className="px-3.5 py-2.5 text-right">Avoided Fuel (Mn)</th>
                    <th className="px-3.5 py-2.5 text-right">CO₂ Benefit (Mn)</th>
                    <th className="px-3.5 py-2.5 text-right">Employment (Mn)</th>
                    <th className="px-3.5 py-2.5 text-right font-bold text-white">Total Eco Benefits</th>
                    <th className="px-3.5 py-2.5 text-right">Eco CapEx</th>
                    <th className="px-3.5 py-2.5 text-right">Eco O&M</th>
                    <th className="px-3.5 py-2.5 text-right font-bold text-emerald-400">Net Economic Flow</th>
                    <th className="px-3.5 py-2.5 text-right font-bold text-emerald-300">Cumul. EPV Net</th>
                  </>
                ) : (
                  <>
                    <th className="px-3.5 py-2.5 text-right">Tariff Revenue (Mn)</th>
                    <th className="px-3.5 py-2.5 text-right font-bold text-white">Total Fin Benefit</th>
                    <th className="px-3.5 py-2.5 text-right">Capital Cost</th>
                    <th className="px-3.5 py-2.5 text-right">O&M Cost</th>
                    <th className="px-3.5 py-2.5 text-right font-bold text-cyan-400">Net Financial Flow</th>
                    <th className="px-3.5 py-2.5 text-right font-bold text-cyan-300">Cumul. PV Net</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {PROJECT_2_DATA.annualCashFlows.map((row) => (
                <tr key={row.year} className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-3.5 py-2 font-bold text-white">Yr {row.year}</td>
                  <td className="px-3.5 py-2">{row.energyGWh > 0 ? row.energyGWh.toFixed(1) : '-'}</td>

                  {activeTableTab === 'economic' ? (
                    <>
                      <td className="px-3.5 py-2 text-right text-slate-300">{row.avoidedFuel > 0 ? row.avoidedFuel.toFixed(1) : '-'}</td>
                      <td className="px-3.5 py-2 text-right text-slate-300">{row.co2Benefit > 0 ? row.co2Benefit.toFixed(1) : '-'}</td>
                      <td className="px-3.5 py-2 text-right text-slate-300">{row.empBenefit.toFixed(1)}</td>
                      <td className="px-3.5 py-2 text-right font-bold text-white">
                        {(row.avoidedFuel + row.co2Benefit + row.empBenefit).toFixed(1)}
                      </td>
                      <td className="px-3.5 py-2 text-right text-red-400">{row.ecoCapex > 0 ? row.ecoCapex.toFixed(1) : '-'}</td>
                      <td className="px-3.5 py-2 text-right text-slate-300">{row.ecoOM > 0 ? row.ecoOM.toFixed(1) : '-'}</td>
                      <td className={`px-3.5 py-2 text-right font-bold ${row.eNet > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {row.eNet.toFixed(1)}
                      </td>
                      <td className={`px-3.5 py-2 text-right font-bold ${row.eCumPV > 0 ? 'text-emerald-300' : 'text-slate-400'}`}>
                        {row.eCumPV.toFixed(1)}
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-3.5 py-2 text-right text-slate-300">{row.tariffRev > 0 ? row.tariffRev.toFixed(1) : '-'}</td>
                      <td className="px-3.5 py-2 text-right font-bold text-white">{row.tariffRev > 0 ? row.tariffRev.toFixed(1) : '-'}</td>
                      <td className="px-3.5 py-2 text-right text-red-400">{row.finCapex > 0 ? row.finCapex.toFixed(1) : '-'}</td>
                      <td className="px-3.5 py-2 text-right text-slate-300">{row.finOM > 0 ? row.finOM.toFixed(1) : '-'}</td>
                      <td className={`px-3.5 py-2 text-right font-bold ${row.fNet > 0 ? 'text-cyan-400' : 'text-red-400'}`}>
                        {row.fNet.toFixed(1)}
                      </td>
                      <td className={`px-3.5 py-2 text-right font-bold ${row.fCumPV > 0 ? 'text-cyan-300' : 'text-slate-400'}`}>
                        {row.fCumPV.toFixed(1)}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

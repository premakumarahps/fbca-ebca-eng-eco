import React, { useEffect, useRef } from 'react';
// @ts-ignore
import Plotly from 'plotly.js-dist-min';
import { 
  BarChart3, 
  Award, 
  Zap, 
  Scale, 
  ShieldCheck, 
  Leaf, 
  Clock, 
  Users,
  Info
} from 'lucide-react';
import { PROJECT_2_DATA } from '../data/engEcoData.ts';

export const McaBenchmarkStudio: React.FC = () => {
  const radarChartRef = useRef<HTMLDivElement>(null);
  const stackedChartRef = useRef<HTMLDivElement>(null);

  // Render Radar & Stacked Bar Charts
  useEffect(() => {
    // 1. Stacked Bar Breakdown Chart
    if (stackedChartRef.current) {
      const projects = PROJECT_2_DATA.ahpComparison.projects.map(p => p.name);
      const costScores = PROJECT_2_DATA.ahpComparison.projects.map(p => p.costScore);
      const envScores = PROJECT_2_DATA.ahpComparison.projects.map(p => p.envScore);
      const lifeScores = PROJECT_2_DATA.ahpComparison.projects.map(p => p.lifeScore);
      const socScores = PROJECT_2_DATA.ahpComparison.projects.map(p => p.socScore);
      const energyScores = PROJECT_2_DATA.ahpComparison.projects.map(p => p.energyScore);

      const traces: any = [
        { x: projects, y: costScores, name: 'Cost (45.8%)', type: 'bar', marker: { color: '#10b981' } },
        { x: projects, y: socScores, name: 'Social Impact (21.5%)', type: 'bar', marker: { color: '#06b6d4' } },
        { x: projects, y: energyScores, name: 'Energy Yield (13.1%)', type: 'bar', marker: { color: '#f59e0b' } },
        { x: projects, y: envScores, name: 'Environmental Impact (12.3%)', type: 'bar', marker: { color: '#8b5cf6' } },
        { x: projects, y: lifeScores, name: 'Asset Lifetime (7.2%)', type: 'bar', marker: { color: '#64748b' } },
      ];

      const layout: any = {
        title: {
          text: '<b>Weighted AHP Composite Score Breakdown</b>',
          font: { size: 13, color: '#f8fafc', family: 'system-ui' },
          x: 0.05
        },
        barmode: 'stack',
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'rgba(15,23,42,0.6)',
        xaxis: {
          tickfont: { color: '#e2e8f0', size: 10 }
        },
        yaxis: {
          title: { text: '<b>Composite Score (Out of 1.0)</b>', font: { size: 10, color: '#94a3b8' } },
          gridcolor: 'rgba(71,85,105,0.3)',
          tickfont: { color: '#94a3b8', size: 10 }
        },
        legend: {
          orientation: 'h',
          y: 1.15,
          font: { color: '#e2e8f0', size: 10 }
        },
        margin: { l: 50, r: 20, b: 50, t: 50 },
        autosize: true
      };

      Plotly.react(stackedChartRef.current, traces, layout, { responsive: true, displaylogo: false });
    }

    // 2. Radar Chart
    if (radarChartRef.current) {
      const categories = ['Cost', 'Social Impact', 'Energy Yield', 'Env. Impact', 'Lifetime', 'Cost'];

      const traces: any = PROJECT_2_DATA.ahpComparison.projects.map((p, idx) => {
        const colors = ['#10b981', '#06b6d4', '#f59e0b', '#8b5cf6'];
        return {
          type: 'scatterpolar',
          r: [p.costScore * 2, p.socScore * 4, p.energyScore * 7, p.envScore * 8, p.lifeScore * 13, p.costScore * 2],
          theta: categories,
          fill: idx === 0 ? 'toself' : 'none',
          name: p.name,
          line: { color: colors[idx], width: idx === 0 ? 3 : 1.5 }
        };
      });

      const layout: any = {
        title: {
          text: '<b>Multi-Dimensional Renewable Profile Radar</b>',
          font: { size: 13, color: '#f8fafc', family: 'system-ui' },
          x: 0.05
        },
        polar: {
          bgcolor: 'rgba(15,23,42,0.6)',
          radialaxis: { visible: true, linecolor: 'rgba(71,85,105,0.4)', tickfont: { color: '#94a3b8', size: 9 } },
          angularaxis: { linecolor: 'rgba(71,85,105,0.4)', tickfont: { color: '#e2e8f0', size: 10 } }
        },
        paper_bgcolor: 'transparent',
        legend: {
          orientation: 'h',
          y: -0.15,
          font: { color: '#e2e8f0', size: 10 }
        },
        margin: { l: 40, r: 40, b: 60, t: 40 },
        autosize: true
      };

      Plotly.react(radarChartRef.current, traces, layout, { responsive: true, displaylogo: false });
    }
  }, []);

  return (
    <div className="space-y-8 py-6">
      {/* Studio Header */}
      <div className="materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800">
        <div className="space-y-2 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30 flex items-center gap-1">
              <Award className="w-3 h-3" />
              AHP Multi-Criteria Decision Framework
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-semibold border border-cyan-500/30">
              National Renewable Energy Benchmark
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Analytic Hierarchy Process (AHP): National Renewable Projects Benchmark
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Pairwise comparison and eigenvector weight derivation across 5 core techno-economic criteria. Benchmarking the Siyambalanduwa 100 MW Solar PV Plant against Batticaloa Solar, Hambantota Wind, and Mannar Wind.
          </p>
        </div>
      </div>

      {/* SECTION 1: CRITERIA WEIGHTS BAR */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {PROJECT_2_DATA.ahpComparison.criteriaWeights.map((c, idx) => (
          <div key={idx} className="materials-card p-3.5 border-t-2 border-t-emerald-400 space-y-1">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{c.criterion}</div>
            <div className="text-2xl font-bold font-mono text-white">{(c.weight * 100).toFixed(1)}%</div>
            <p className="text-[10px] text-slate-400 line-clamp-2 leading-tight">{c.desc}</p>
          </div>
        ))}
      </div>

      {/* SECTION 2: COMPARATIVE VISUALIZATIONS (RADAR & STACKED BARS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 materials-glass p-6 rounded-2xl border border-slate-800">
          <div ref={stackedChartRef} className="w-full h-[380px]" />
        </div>
        <div className="lg:col-span-5 materials-glass p-6 rounded-2xl border border-slate-800">
          <div ref={radarChartRef} className="w-full h-[380px]" />
        </div>
      </div>

      {/* SECTION 3: AHP SYNTHESIS TABLE */}
      <div className="materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white font-heading">
              AHP Final Synthesis & Project Ranking Table
            </h3>
          </div>
          <span className="text-xs font-mono text-emerald-400">
            Certified MCA Workbook Data
          </span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-xs font-mono text-left">
            <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="px-4 py-3">Project Candidate</th>
                <th className="px-4 py-3">Capacity</th>
                <th className="px-4 py-3">Cost / MW (B LKR)</th>
                <th className="px-4 py-3">Annual Yield</th>
                <th className="px-4 py-3 text-right">Cost Score</th>
                <th className="px-4 py-3 text-right">Social Score</th>
                <th className="px-4 py-3 text-right">Env Score</th>
                <th className="px-4 py-3 text-right font-bold text-white">Composite Total</th>
                <th className="px-4 py-3 text-center">Rank</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {PROJECT_2_DATA.ahpComparison.projects.map((p) => (
                <tr 
                  key={p.name}
                  className={`transition-colors ${
                    p.rank === 1 ? 'bg-emerald-500/10 text-emerald-200 font-bold' : 'hover:bg-slate-800/40'
                  }`}
                >
                  <td className="px-4 py-3 text-white flex items-center gap-2">
                    {p.rank === 1 && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                    {p.name}
                  </td>
                  <td className="px-4 py-3 text-slate-300">100 MW</td>
                  <td className="px-4 py-3 text-slate-300">{p.capExPerMW.toFixed(3)}</td>
                  <td className="px-4 py-3 text-slate-300">{p.yieldGWh} GWh</td>
                  <td className="px-4 py-3 text-right">{p.costScore.toFixed(4)}</td>
                  <td className="px-4 py-3 text-right">{p.socScore.toFixed(4)}</td>
                  <td className="px-4 py-3 text-right">{p.envScore.toFixed(4)}</td>
                  <td className="px-4 py-3 text-right text-base text-emerald-400 font-bold">
                    {p.total.toFixed(4)}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      p.rank === 1 
                        ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/40' 
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      #{p.rank}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Why Siyambalanduwa Won Rank #1 (0.4364): </strong>
            Siyambalanduwa achieves the lowest capital cost per MW (0.148 Billion LKR/MW vs 0.330 B for Batticaloa and 0.427 B for Hambantota). Because <strong>Cost represents 45.84% of total decision weight</strong>, combined with significant social uplift in Monaragala District, it commands almost double the score of its nearest competitor.
          </p>
        </div>
      </div>
    </div>
  );
};

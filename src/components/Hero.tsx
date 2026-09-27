import React from 'react';
import { 
  Building2, 
  Sun, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  TrendingUp, 
  Leaf, 
  Coins, 
  Clock, 
  Users,
  Atom,
  FileCheck2,
  Download
} from 'lucide-react';
import { PROJECT_AUTHORS, INSTITUTIONAL_METADATA } from '../data/engEcoData.ts';
import { TabKey } from './Navbar.tsx';

interface HeroProps {
  setActiveTab: (tab: TabKey) => void;
  triggerConfetti?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab, triggerConfetti }) => {
  return (
    <div className="relative overflow-hidden pt-8 pb-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      {/* Background ambient radial glow accents */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-emerald-600/10 via-cyan-600/10 to-amber-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-br from-indigo-600/10 to-teal-600/10 blur-[110px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-6">
        {/* Academic Institutional Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs text-emerald-400 font-mono">
            <Atom className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Materials Science & Engineering · Semester 7 Portfolio</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs text-slate-300 font-mono">
            <FileCheck2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>MN 4023: Engineering Economics · University of Moratuwa</span>
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="space-y-3 max-w-5xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading leading-tight">
            Financial & Economic <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-400">Benefit-Cost Analysis (BCA)</span> & Sensitivity Optimization
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl font-normal">
            Dual-domain engineering economic appraisal bridging private commercial profitability (FBCA) and national macroeconomic welfare (EBCA). Featuring <span className="text-emerald-300 font-medium">NERDC Ferrocement Precast Modular Panels</span> and the national-scale <span className="text-amber-300 font-medium">Siyambalanduwa 100 MW Solar PV Power Plant</span> with shadow pricing, COMSOL FEA, AHP multi-criteria scoring, and multi-factor sensitivity analysis.
          </p>
        </div>

        {/* Student Investigator Team Card */}
        <div className="materials-glass p-4 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-amber-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold font-mono text-sm shadow-inner">
              HP
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-bold text-white">
                  {PROJECT_AUTHORS[0].name}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-semibold border border-emerald-500/30">
                  Index: {PROJECT_AUTHORS[0].index}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                  Lead Contributor
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Co-Investigators: <strong className="text-slate-200">Mayoorathan K.</strong> (210381E), <strong className="text-slate-200">Abhirami T.</strong> (210016R), <strong className="text-slate-200">Bibulewela P.A.C.</strong> (210070B), <strong className="text-slate-200">Themiya K.L.</strong> (210640A)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                if (triggerConfetti) triggerConfetti();
                setActiveTab('calculator');
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Launch Live Simulator</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="/docs/Engineering_Economics_Full_Project_Archive.zip"
              download="Engineering_Economics_Full_Project_Archive.zip"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-emerald-500/50 text-xs font-mono transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Download Archive (.ZIP)</span>
            </a>
          </div>
        </div>

        {/* 5 Core National Welfare & Economic Return Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {/* Metric 1: Combined ENPV */}
          <div className="materials-card p-3.5 border-l-4 border-l-emerald-400">
            <div className="flex items-center justify-between text-xs text-emerald-400 mb-1">
              <span className="font-semibold uppercase tracking-wider text-[10px]">Total Economic NPV</span>
              <Coins className="w-3.5 h-3.5" />
            </div>
            <div className="text-2xl font-black text-white font-heading">
              28,417 <span className="text-xs text-slate-400 font-normal">LKR Mn</span>
            </div>
            <div className="text-[11px] text-emerald-300/80 mt-1">
              Over 28.4 Billion LKR net societal surplus
            </div>
          </div>

          {/* Metric 2: Economic IRR */}
          <div className="materials-card p-3.5 border-l-4 border-l-cyan-400">
            <div className="flex items-center justify-between text-xs text-cyan-400 mb-1">
              <span className="font-semibold uppercase tracking-wider text-[10px]">Economic IRR</span>
              <TrendingUp className="w-3.5 h-3.5" />
            </div>
            <div className="text-2xl font-black text-white font-heading">
              33.95% <span className="text-xs text-slate-400 font-normal">to 37.4%</span>
            </div>
            <div className="text-[11px] text-cyan-300/80 mt-1">
              Substantially outpaces 9% social discount hurdle
            </div>
          </div>

          {/* Metric 3: Carbon Offset */}
          <div className="materials-card p-3.5 border-l-4 border-l-amber-400">
            <div className="flex items-center justify-between text-xs text-amber-400 mb-1">
              <span className="font-semibold uppercase tracking-wider text-[10px]">CO₂ Abatement</span>
              <Leaf className="w-3.5 h-3.5" />
            </div>
            <div className="text-2xl font-black text-white font-heading">
              147,582 <span className="text-xs text-slate-400 font-normal">Tons/yr</span>
            </div>
            <div className="text-[11px] text-amber-300/80 mt-1">
              Displacing expensive thermal diesel/coal power
            </div>
          </div>

          {/* Metric 4: Economic Payback */}
          <div className="materials-card p-3.5 border-l-4 border-l-purple-400">
            <div className="flex items-center justify-between text-xs text-purple-400 mb-1">
              <span className="font-semibold uppercase tracking-wider text-[10px]">Economic Payback</span>
              <Clock className="w-3.5 h-3.5" />
            </div>
            <div className="text-2xl font-black text-white font-heading">
              1.83 – 3.53 <span className="text-xs text-slate-400 font-normal">Yrs</span>
            </div>
            <div className="text-[11px] text-purple-300/80 mt-1">
              Rapid recovery of national capital allocation
            </div>
          </div>

          {/* Metric 5: Direct Employment */}
          <div className="materials-card p-3.5 border-l-4 border-l-teal-400">
            <div className="flex items-center justify-between text-xs text-teal-400 mb-1">
              <span className="font-semibold uppercase tracking-wider text-[10px]">Job Creation</span>
              <Users className="w-3.5 h-3.5" />
            </div>
            <div className="text-2xl font-black text-white font-heading">
              1,100+ <span className="text-xs text-slate-400 font-normal">Jobs</span>
            </div>
            <div className="text-[11px] text-teal-300/80 mt-1">
              1,000 installation + 100 full-time O&M
            </div>
          </div>
        </div>

        {/* Dual Project Jump Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Project 1 Banner */}
          <div 
            onClick={() => setActiveTab('project1')}
            className="p-5 rounded-2xl materials-glass border border-slate-800 hover:border-emerald-500/50 cursor-pointer transition-all duration-300 group hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30 flex items-center gap-1">
                  <Building2 className="w-3 h-3" />
                  Civil Modular Precast · NERDC & UoM
                </span>
                <span className="text-xs font-mono text-slate-400 group-hover:text-emerald-400 flex items-center gap-1 transition-colors">
                  Explore Project 1 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-white font-heading group-hover:text-emerald-300 transition-colors">
                Prefabricated Ferrocement Wall Panels for Modular Housing
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                COMSOL Multiphysics linear-elastic FEA self-weight bending analysis resolving handling cracking. Financial NPV of 12.45M LKR, Economic NPV of 30.10M LKR, and Multi-Criteria Analysis score of 4.475 outperforming clay and concrete bricks.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-4 pt-3 border-t border-slate-800/80 text-xs font-mono text-slate-400">
              <span>Unit Cost: <strong className="text-white">4,200 LKR</strong></span>
              <span>Selling: <strong className="text-emerald-400">7,000 LKR</strong></span>
              <span>FIRR: <strong className="text-cyan-400">26.36%</strong></span>
              <span>EIRR: <strong className="text-emerald-400">37.40%</strong></span>
            </div>
          </div>

          {/* Project 2 Banner */}
          <div 
            onClick={() => setActiveTab('project2')}
            className="p-5 rounded-2xl materials-glass border border-slate-800 hover:border-amber-500/50 cursor-pointer transition-all duration-300 group hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-semibold border border-amber-500/30 flex items-center gap-1">
                  <Sun className="w-3 h-3" />
                  National Grid Renewable · CEB Grid
                </span>
                <span className="text-xs font-mono text-slate-400 group-hover:text-amber-400 flex items-center gap-1 transition-colors">
                  Explore Project 2 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                Siyambalanduwa 100 MW Ground-Mounted Solar PV Power Plant
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                20-Year multi-parameter cash flow appraisal with shadow conversion (SCF, SWRF, SERF). 14.83 Billion LKR CapEx yielding 2.15 Billion LKR FNPV and 28.39 Billion LKR ENPV with 64 Billion LKR avoided thermal fuel savings.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-4 pt-3 border-t border-slate-800/80 text-xs font-mono text-slate-400">
              <span>CapEx: <strong className="text-white">14.83 B LKR</strong></span>
              <span>PPA Tariff: <strong className="text-amber-400">14 LKR/kWh</strong></span>
              <span>Yield: <strong className="text-cyan-400">180 GWh/yr</strong></span>
              <span>AHP Rank: <strong className="text-emerald-400">#1 (0.4364)</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

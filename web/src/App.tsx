import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Navbar, TabKey } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Project1FerrocementStudio } from './components/Project1FerrocementStudio.tsx';
import { Project2SolarStudio } from './components/Project2SolarStudio.tsx';
import { SensitivityStudio } from './components/SensitivityStudio.tsx';
import { McaBenchmarkStudio } from './components/McaBenchmarkStudio.tsx';
import { InteractiveEconomicsEngine } from './components/InteractiveEconomicsEngine.tsx';
import { DocumentRepositoryCenter } from './components/DocumentRepositoryCenter.tsx';
import { Footer } from './components/Footer.tsx';
import { 
  Building2, 
  Sun, 
  ArrowRight, 
  TrendingUp, 
  Scale, 
  ShieldCheck, 
  Layers, 
  Sparkles,
  Coins,
  Leaf
} from 'lucide-react';
import { PROJECT_1_DATA, PROJECT_2_DATA } from './data/engEcoData.ts';

export function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#10b981', '#06b6d4', '#f59e0b', '#8b5cf6']
    });
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Sticky Institutional Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Hero Header Dashboard */}
      <Hero setActiveTab={setActiveTab} triggerConfetti={triggerConfetti} />

      {/* Main Dynamic Workspace Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4">
        {/* OVERVIEW / EXECUTIVE HUB */}
        {activeTab === 'overview' && (
          <div className="space-y-8 py-4">
            {/* Dual Project Comparative Architecture Card */}
            <div className="materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                      Cross-Sector Portfolio
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
                      Dual-Project Engineering Economics Synthesis
                    </h2>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Side-by-side comparative analysis of precast civil infrastructure vs utility-scale clean energy generation
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span>Moratuwa MSE Portfolio</span>
                </div>
              </div>

              {/* Side-by-Side Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project 1 Summary Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      Project 1: Ferrocement Panels
                    </span>
                    <span className="text-xs font-mono text-slate-400">NERDC & UoM</span>
                  </div>

                  <h3 className="text-base font-bold text-white font-heading">
                    Precast Ferrocement Modular Wall Panels
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Solves demoulding and handling micro-cracking at NERDC. Uses COMSOL FEA to optimize a 60 mm 3-core hollow cross-section, reducing dead-weight by 32% while preserving stiffness.
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 text-[10px]">Financial NPV</span>
                      <div className="text-emerald-400 font-bold text-sm">12.45 LKR Mn</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 text-[10px]">Financial IRR</span>
                      <div className="text-white font-bold text-sm">26.36%</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 text-[10px]">Economic NPV</span>
                      <div className="text-emerald-400 font-bold text-sm">30.10 LKR Mn</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 text-[10px]">Economic Payback</span>
                      <div className="text-cyan-400 font-bold text-sm">1.83 Years</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setActiveTab('project1')}
                      className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold font-mono transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Explore Project 1 Studio & Slides</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Project 2 Summary Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40 flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5" />
                      Project 2: 100MW Solar PV
                    </span>
                    <span className="text-xs font-mono text-slate-400">CEB Grid · Monaragala</span>
                  </div>

                  <h3 className="text-base font-bold text-white font-heading">
                    Siyambalanduwa 100 MW Ground-Mounted Solar Plant
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    National utility-scale solar generation with 20-year multi-parameter cash flow appraisal. Employs shadow exchange (SERF 1.10) and shadow wage (SWRF 0.80) to capture 64 Billion LKR in avoided fuel savings.
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 text-[10px]">Financial NPV</span>
                      <div className="text-cyan-400 font-bold text-sm">2,149.5 LKR Mn</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 text-[10px]">Financial IRR</span>
                      <div className="text-white font-bold text-sm">11.07%</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 text-[10px]">Economic NPV</span>
                      <div className="text-emerald-400 font-bold text-sm">28,387.2 LKR Mn</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 text-[10px]">Economic Payback</span>
                      <div className="text-emerald-400 font-bold text-sm">3.53 Years</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setActiveTab('project2')}
                      className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold font-mono transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Explore Project 2 Studio & Cash Flows</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Feature Jump Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div 
                onClick={() => setActiveTab('sensitivity')}
                className="materials-card p-5 cursor-pointer hover:border-emerald-500/40 transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <TrendingUp className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-emerald-400 flex items-center gap-1">
                    Open Lab <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white font-heading">Sensitivity & Tornado Lab</h4>
                <p className="text-xs text-slate-400">
                  Analyze Elasticity Indices (E) for tariffs, CapEx, discount rates, and fuel prices under stress testing.
                </p>
              </div>

              <div 
                onClick={() => setActiveTab('mca')}
                className="materials-card p-5 cursor-pointer hover:border-cyan-500/40 transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    <Scale className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-cyan-400 flex items-center gap-1">
                    Open AHP <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white font-heading">AHP Renewable Benchmark</h4>
                <p className="text-xs text-slate-400">
                  Compare Siyambalanduwa vs Batticaloa Solar, Hambantota Wind, and Mannar Wind across 5 criteria.
                </p>
              </div>

              <div 
                onClick={() => setActiveTab('repository')}
                className="materials-card p-5 cursor-pointer hover:border-amber-500/40 transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    <Coins className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-amber-400 flex items-center gap-1">
                    View Files <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white font-heading">Document & Excel Archive</h4>
                <p className="text-xs text-slate-400">
                  Directly download presentation PDF/PPTX and all 5 certified financial/economic Excel (.xlsx) workbooks.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PROJECT 1 STUDIO */}
        {activeTab === 'project1' && (
          <Project1FerrocementStudio />
        )}

        {/* PROJECT 2 STUDIO */}
        {activeTab === 'project2' && (
          <Project2SolarStudio />
        )}

        {/* SENSITIVITY STUDIO */}
        {activeTab === 'sensitivity' && (
          <SensitivityStudio />
        )}

        {/* MCA BENCHMARK STUDIO */}
        {activeTab === 'mca' && (
          <McaBenchmarkStudio />
        )}

        {/* CALCULATOR STUDIO */}
        {activeTab === 'calculator' && (
          <InteractiveEconomicsEngine triggerConfetti={triggerConfetti} />
        )}

        {/* REPOSITORY & ARCHIVE STUDIO */}
        {activeTab === 'repository' && (
          <DocumentRepositoryCenter />
        )}
      </main>

      {/* Institutional Academic Footer */}
      <Footer />
    </div>
  );
}

export default App;

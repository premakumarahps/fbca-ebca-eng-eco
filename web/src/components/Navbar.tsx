import React from 'react';
import { 
  Layers, 
  Sun, 
  Building2, 
  Sliders, 
  BarChart3, 
  Calculator, 
  FileSpreadsheet, 
  Download,
  GraduationCap,
  Sparkles,
  Presentation
} from 'lucide-react';

export type TabKey = 
  | 'overview' 
  | 'project1' 
  | 'project2' 
  | 'sensitivity' 
  | 'mca' 
  | 'calculator' 
  | 'repository';

interface NavbarProps {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { key: 'overview' as TabKey, label: 'Executive Hub', icon: Layers },
    { key: 'project1' as TabKey, label: 'Project 1: Ferrocement Panels', icon: Building2 },
    { key: 'project2' as TabKey, label: 'Project 2: 100MW Solar PV', icon: Sun },
    { key: 'sensitivity' as TabKey, label: 'Sensitivity & Tornado Lab', icon: Sliders },
    { key: 'mca' as TabKey, label: 'AHP Multi-Criteria Benchmark', icon: BarChart3 },
    { key: 'calculator' as TabKey, label: 'Live Feasibility Engine', icon: Calculator },
    { key: 'repository' as TabKey, label: 'Repository & Downloads', icon: FileSpreadsheet },
  ];

  return (
    <header className="sticky top-0 z-50 w-full materials-glass border-b border-slate-800/80 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Academic Identifier */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('overview')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-amber-500/20 border border-emerald-500/40 p-1 flex items-center justify-center eco-glow">
              <img src="/eng_eco_logo.svg" alt="Engineering Economics Emblem" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white tracking-wide uppercase font-heading">
                  Engineering Economics
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-semibold border border-emerald-500/30">
                  MN 4023
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <GraduationCap className="w-3 h-3 text-cyan-400" />
                <span>Materials Science & Engineering · University of Moratuwa</span>
              </div>
            </div>
          </div>

          {/* Quick Document Download Buttons (PDF, PPTX, Master ZIP) */}
          <div className="hidden lg:flex items-center gap-2">
            <a 
              href="/docs/Eng_Economics_EBCA_and_FBCA.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-cyan-500/50 transition-colors font-mono"
              title="Open Project 1 Presentation PDF"
            >
              <Presentation className="w-3.5 h-3.5 text-cyan-400" />
              <span>Slides (PDF)</span>
            </a>
            <a 
              href="/docs/Eng_Economics_EBCA_and_FBCA.pptx" 
              download="Eng_Economics_EBCA_and_FBCA.pptx"
              className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-amber-500/50 transition-colors font-mono"
              title="Download Project 1 Presentation PPTX"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>Slides (PPTX)</span>
            </a>
            <a 
              href="/docs/Engineering_Economics_Full_Project_Archive.zip" 
              download="Engineering_Economics_Full_Project_Archive.zip"
              className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 transition-colors font-mono font-semibold"
              title="Download Master Archive (PDF, PPTX, 5 Excel Workbooks, JSON)"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Archive (.ZIP)</span>
            </a>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex space-x-1 overflow-x-auto py-2 scrollbar-none border-t border-slate-800/50">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-amber-500/20 text-white border border-emerald-500/50 shadow-[0_0_12px_rgba(16,185,129,0.25)] font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

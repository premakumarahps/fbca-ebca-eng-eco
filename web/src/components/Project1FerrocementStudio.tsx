import React, { useState } from 'react';
import { 
  Building2, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Download, 
  Presentation, 
  ShieldAlert, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  Sparkles, 
  FileText, 
  ExternalLink,
  Info,
  Scale
} from 'lucide-react';
import { PROJECT_1_DATA } from '../data/engEcoData.ts';

const SLIDE_COUNT = 14;

const SLIDE_TITLES = [
  'Title: Ferrocement Wall Panels for Construction (MN 4023)',
  'Introduction & Existing NERDC Prototype Handling Issues',
  'Technical Feasibility & Raw Materials Specification',
  'COMSOL FEA: 40mm Solid vs 60mm Solid vs 60mm 3-Core',
  'Financial Analysis: Cost Breakdown (4200 LKR vs 7000 LKR)',
  'Financial Performance Indicators (FNPV: 12.45M, FIRR: 26.36%)',
  'Economical Analysis: Societal Externalities (ENPV: 30.1M, EIRR: 37.4%)',
  'Multi Criteria Analysis (MCA) Ranking (Winner: 4.475)',
  'Sensitivity Analysis: Selling Price, Materials, Discount Rate',
  'Environmental Analysis: Benefits vs Footprint',
  'Social Analysis: Community Uplift, Employment & Skills',
  'Risk Assessment Matrix & Engineering Mitigation Strategies',
  'Final Recommendations & NERDC-UoM Industrial Scale-Up',
  'Conclusion & Acknowledgment'
];

export const Project1FerrocementStudio: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [activeProfile, setActiveProfile] = useState<'solid_40' | 'solid_60' | 'cored_60'>('cored_60');

  const nextSlide = () => {
    setCurrentSlide(prev => prev < SLIDE_COUNT ? prev + 1 : 1);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev > 1 ? prev - 1 : SLIDE_COUNT);
  };

  return (
    <div className="space-y-8 py-6">
      {/* Studio Header */}
      <div className="materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30 flex items-center gap-1">
                <Building2 className="w-3 h-3" />
                Project 1: Civil Modular Precast
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-semibold border border-cyan-500/30">
                NERDC & University of Moratuwa
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-semibold border border-amber-500/30">
                COMSOL FEA + FBCA + EBCA
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Prefabricated Ferrocement Wall Panels for Modular Construction
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Addressing the critical handling and dead-weight failure modes identified at the National Engineering Research and Development Centre (NERDC). Engineered utilizing M-sand, industrial ash pozzolans, and hollow-core geometry to deliver structural integrity, rapid assembly, and superior economic return.
            </p>
          </div>

          {/* Quick PDF & PPTX Download Actions */}
          <div className="flex flex-wrap lg:flex-col gap-2.5 shrink-0">
            <a
              href="/docs/Eng_Economics_EBCA_and_FBCA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold transition-all"
            >
              <Presentation className="w-4 h-4" />
              <span>Open Presentation (PDF)</span>
            </a>
            <a
              href="/docs/Eng_Economics_EBCA_and_FBCA.pptx"
              download="Eng_Economics_EBCA_and_FBCA.pptx"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Slides (PPTX)</span>
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 1: INTERACTIVE 14-SLIDE PRESENTATION VIEWER */}
      <div className="materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                Slide {currentSlide} of {SLIDE_COUNT}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white font-heading">
                {SLIDE_TITLES[currentSlide - 1]}
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              High-resolution 200 DPI slide render · University of Moratuwa & NERDC Evaluation
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <button
              onClick={() => setLightboxOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full Screen</span>
            </button>
            <button
              onClick={prevSlide}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-2 font-bold text-emerald-400">{currentSlide} / {SLIDE_COUNT}</span>
            <button
              onClick={nextSlide}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Slide Stage Image */}
        <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center min-h-[380px] sm:min-h-[480px]">
          <img 
            src={`/slides/slide_${currentSlide.toString().padStart(2, '0')}.png`} 
            alt={`Slide ${currentSlide}: ${SLIDE_TITLES[currentSlide - 1]}`}
            className="w-full h-auto max-h-[550px] object-contain cursor-pointer"
            onClick={() => setLightboxOpen(true)}
          />
          {/* Previous / Next Overlay Click Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 transition-all opacity-70 hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 transition-all opacity-70 hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail Filmstrip */}
        <div className="flex gap-2 overflow-x-auto py-2 scrollbar-thin border-t border-slate-800/80">
          {Array.from({ length: SLIDE_COUNT }).map((_, idx) => {
            const slideNum = idx + 1;
            const isSelected = slideNum === currentSlide;
            return (
              <button
                key={slideNum}
                onClick={() => setCurrentSlide(slideNum)}
                className={`relative shrink-0 w-20 sm:w-24 rounded-lg overflow-hidden border transition-all ${
                  isSelected 
                    ? 'border-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)] scale-105' 
                    : 'border-slate-800 opacity-60 hover:opacity-100'
                }`}
              >
                <img 
                  src={`/slides/slide_${slideNum.toString().padStart(2, '0')}.png`} 
                  alt={`Thumb ${slideNum}`} 
                  className="w-full h-12 sm:h-14 object-cover"
                />
                <span className="absolute bottom-0.5 right-1 text-[9px] font-mono font-bold bg-slate-950/80 px-1 rounded text-white">
                  {slideNum}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: COMSOL FEA STRUCTURAL SIMULATION EXPLORER */}
      <div className="materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
        <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-indigo-400" />
            <div>
              <h3 className="text-base font-bold text-white font-heading">
                COMSOL Multiphysics FEA: Self-Weight Bending & Profile Selection
              </h3>
              <p className="text-xs text-slate-400">
                Linear-elastic static analysis simply supported at short edges under gravitational self-weight
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            Slide 4 Verification
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROJECT_1_DATA.technicalFeasibility.profiles.map((p) => {
            const isSelected = activeProfile === p.id;
            return (
              <div
                key={p.id}
                onClick={() => setActiveProfile(p.id as any)}
                className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-800/90 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono">{p.thickness}</span>
                    {p.id === 'cored_60' && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/40">
                        OPTIMUM
                      </span>
                    )}
                  </div>

                  <h4 className="text-sm font-bold text-white font-heading">
                    {p.name}
                  </h4>

                  {/* Visual Cross Section Diagram */}
                  <div className="h-16 w-full rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center p-2 relative overflow-hidden">
                    {p.id === 'solid_40' && (
                      <div className="w-full h-3 bg-gradient-to-r from-indigo-500/40 to-indigo-600/40 border border-indigo-500 rounded text-[9px] text-center text-indigo-300 leading-3">
                        40mm Solid Core
                      </div>
                    )}
                    {p.id === 'solid_60' && (
                      <div className="w-full h-6 bg-gradient-to-r from-amber-500/40 to-amber-600/40 border border-amber-500 rounded text-[9px] text-center text-amber-300 leading-6">
                        60mm Dense Solid (Heavy)
                      </div>
                    )}
                    {p.id === 'cored_60' && (
                      <div className="w-full h-6 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 border border-emerald-500 rounded flex items-center justify-around px-2">
                        <div className="w-6 h-3 rounded-full bg-slate-950 border border-emerald-400" title="Core 1" />
                        <div className="w-6 h-3 rounded-full bg-slate-950 border border-emerald-400" title="Core 2" />
                        <div className="w-6 h-3 rounded-full bg-slate-950 border border-emerald-400" title="Core 3" />
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-300">
                    <strong className="text-slate-400 font-normal">Weight Characteristic: </strong>
                    <span className={p.id === 'cored_60' ? 'text-emerald-400 font-semibold' : 'text-slate-200'}>{p.weight}</span>
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                  Status: <span className={p.id === 'cored_60' ? 'text-emerald-300 font-bold' : 'text-amber-400'}>{p.status}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">COMSOL FEA Engineering Insight: </strong>
            Solid 40 mm panels experience excessive mid-span deflection and tensile micro-cracking when stripped from horizontal moulds. Solid 60 mm panels cure excessive deflection but incur an unsustainable self-weight penalty during crane handling. The <strong>60 mm 3-Core Hollow Geometry</strong> preserves the outer flange moment of inertia while eliminating 32% of dead-weight, completely arresting transport crack propagation.
          </p>
        </div>
      </div>

      {/* SECTION 3: DUAL BENEFIT-COST INDICATOR DASHBOARD (FBCA vs EBCA) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Financial BCA Card */}
        <div className="materials-glass p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <Scale className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-sm font-bold text-white font-heading">
                  Financial Benefit-Cost Analysis (FBCA)
                </h4>
                <p className="text-[11px] text-slate-400 font-mono">Commercial Investor Perspective (Slide 6)</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-cyan-400">PPA Commercial</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Unit Production Cost</div>
              <div className="text-lg font-bold text-white mt-1">4,200 LKR</div>
              <div className="text-[10px] text-slate-500">Materials, moulds & labor</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Selling Price / Unit</div>
              <div className="text-lg font-bold text-cyan-400 mt-1">7,000 LKR</div>
              <div className="text-[10px] text-emerald-400">+66.7% profit margin</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Financial NPV</div>
              <div className="text-lg font-bold text-emerald-400 mt-1">12.45 LKR Mn</div>
              <div className="text-[10px] text-slate-500">Commercial discounted net</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Financial IRR</div>
              <div className="text-lg font-bold text-white mt-1">26.36%</div>
              <div className="text-[10px] text-cyan-400">High private return</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Benefit-Cost Ratio</div>
              <div className="text-lg font-bold text-white mt-1">1.204</div>
              <div className="text-[10px] text-emerald-400">BCR &gt; 1.0 (Viable)</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Discounted Payback</div>
              <div className="text-lg font-bold text-white mt-1">3.25 Years</div>
              <div className="text-[10px] text-slate-500">Fast private recovery</div>
            </div>
          </div>
        </div>

        {/* Economic BCA Card */}
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
                <p className="text-[11px] text-slate-400 font-mono">National Society & Welfare Perspective (Slide 7)</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400">Societal Surplus</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Economic NPV</div>
              <div className="text-lg font-bold text-emerald-400 mt-1">30.10 LKR Mn</div>
              <div className="text-[10px] text-emerald-400">+141% over financial NPV</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Economic IRR</div>
              <div className="text-lg font-bold text-white mt-1">37.40%</div>
              <div className="text-[10px] text-cyan-400">Exceptional social return</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Economic BCR</div>
              <div className="text-lg font-bold text-emerald-400 mt-1">1.8792</div>
              <div className="text-[10px] text-slate-500">1.88x national welfare return</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Discounted Payback</div>
              <div className="text-lg font-bold text-white mt-1">1.83 Years</div>
              <div className="text-[10px] text-emerald-400">Nearly 50% faster payback</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 col-span-2">
              <div className="text-[10px] text-slate-400 uppercase">Key Externalities Monetized</div>
              <div className="text-xs text-slate-300 mt-1 leading-relaxed">
                Construction time savings, on-site mortar waste avoidance, local labor job creation, embodied energy reduction through RHA pozzolanic replacement.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: MULTI-CRITERIA ANALYSIS (MCA) BENCHMARK */}
      <div className="materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white font-heading">
              Multi-Criteria Analysis: Wall Walling System Ranking (Slide 8)
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Weighted Score Out of 5.000
          </span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800">
          <table className="w-full text-xs font-mono text-left">
            <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="px-4 py-3">Wall System Alternative</th>
                <th className="px-4 py-3">Cost (40%)</th>
                <th className="px-4 py-3">Time/Speed (25%)</th>
                <th className="px-4 py-3">Durability (20%)</th>
                <th className="px-4 py-3">Environmental (15%)</th>
                <th className="px-4 py-3 text-right">Weighted Score</th>
                <th className="px-4 py-3 text-center">Rank</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {PROJECT_1_DATA.multiCriteriaAnalysis.options.map((opt) => (
                <tr 
                  key={opt.name}
                  className={`transition-colors ${
                    opt.rank === 1 ? 'bg-emerald-500/10 text-emerald-200 font-bold' : 'hover:bg-slate-800/40'
                  }`}
                >
                  <td className="px-4 py-3 text-white flex items-center gap-2">
                    {opt.rank === 1 && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                    {opt.name}
                  </td>
                  <td className="px-4 py-3">{opt.scores[0].toFixed(1)}</td>
                  <td className="px-4 py-3">{opt.scores[1].toFixed(1)}</td>
                  <td className="px-4 py-3">{opt.scores[2].toFixed(1)}</td>
                  <td className="px-4 py-3">{opt.scores[3].toFixed(1)}</td>
                  <td className="px-4 py-3 text-right text-base text-emerald-400 font-bold">
                    {opt.total.toFixed(3)}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      opt.rank === 1 
                        ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/40' 
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      #{opt.rank}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 5: RISK ASSESSMENT & MITIGATION MATRIX */}
      <div className="materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-400" />
            <h3 className="text-base font-bold text-white font-heading">
              Risk Assessment & Engineering Mitigation Matrix (Slide 12)
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">
            7 Key Operational Risk Categories
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {PROJECT_1_DATA.riskMatrix.map((r, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                  <span className="text-slate-400 uppercase tracking-wider">{r.category}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    r.severity === 'High' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                    r.severity === 'Medium' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                    'bg-slate-800 text-slate-400'
                  }`}>
                    {r.severity} Risk
                  </span>
                </div>
                <h5 className="text-xs font-bold text-white">{r.risk}</h5>
              </div>

              <div className="pt-2 border-t border-slate-800/80 text-[11px] text-emerald-300">
                <strong className="text-slate-400 font-normal">Mitigation: </strong>
                {r.mitigation}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxOpen(false)}
        >
          <div 
            className="max-w-6xl w-full max-h-[92vh] flex flex-col items-center justify-between gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between text-white text-xs font-mono px-2">
              <span>{SLIDE_TITLES[currentSlide - 1]}</span>
              <button 
                onClick={() => setLightboxOpen(false)}
                className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
              >
                Close [Esc]
              </button>
            </div>
            <img 
              src={`/slides/slide_${currentSlide.toString().padStart(2, '0')}.png`} 
              alt="Fullscreen slide" 
              className="max-h-[80vh] w-auto object-contain rounded-xl border border-slate-700 shadow-2xl"
            />
            <div className="flex items-center gap-4 text-xs font-mono">
              <button 
                onClick={prevSlide}
                className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-white"
              >
                Previous Slide
              </button>
              <span className="text-emerald-400 font-bold">{currentSlide} / {SLIDE_COUNT}</span>
              <button 
                onClick={nextSlide}
                className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-white"
              >
                Next Slide
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

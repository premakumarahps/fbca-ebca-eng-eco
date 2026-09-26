import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Download, 
  Presentation, 
  Archive, 
  FileText, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Table,
  Eye,
  Info
} from 'lucide-react';

export const DocumentRepositoryCenter: React.FC = () => {
  const [copiedStatus, setCopiedStatus] = useState<boolean>(false);
  const [previewDoc, setPreviewDoc] = useState<'pdf' | 'excel_list'>('excel_list');

  const filesList = [
    {
      name: 'Eng_Economics_EBCA_and_FBCA.pdf',
      type: 'Presentation PDF (14 Slides)',
      size: '9.27 MB',
      path: '/docs/Eng_Economics_EBCA_and_FBCA.pdf',
      desc: 'Project 1 complete presentation deck covering NERDC ferrocement precast wall panels, COMSOL FEA, FBCA, EBCA, MCA, and risk matrices.',
      isPdf: true
    },
    {
      name: 'Eng_Economics_EBCA_and_FBCA.pptx',
      type: 'PowerPoint Presentation (.pptx)',
      size: '9.10 MB',
      path: '/docs/Eng_Economics_EBCA_and_FBCA.pptx',
      desc: 'Project 1 original editable PowerPoint presentation file including native slide layouts and graphics.',
      isPptx: true
    },
    {
      name: 'Siyambalanduwa_FBCA.xlsx',
      type: 'Excel Model (.xlsx)',
      size: '17.9 KB',
      path: '/docs/Siyambalanduwa_FBCA.xlsx',
      desc: 'Project 2 20-year commercial financial benefit-cost model with capital cost schedules, O&M escalations, and tariff revenues.',
      isExcel: true
    },
    {
      name: 'Siyambalanduwa_EBCA.xlsx',
      type: 'Excel Model (.xlsx)',
      size: '23.8 KB',
      path: '/docs/Siyambalanduwa_EBCA.xlsx',
      desc: 'Project 2 macroeconomic benefit-cost model with shadow pricing (SCF 0.90, SWRF 0.80, SERF 1.10) and avoided fossil fuel benefits.',
      isExcel: true
    },
    {
      name: 'Siyambalanduwa_FBCA_Sensitivity_Analysis.xlsx',
      type: 'Excel Model (.xlsx)',
      size: '24.5 KB',
      path: '/docs/Siyambalanduwa_FBCA___Sensitivity_Analysis.xlsx',
      desc: 'Project 2 financial elasticity ranking (Tornado diagram) across tariffs, capital expenditure, discount rates, and energy yields.',
      isExcel: true
    },
    {
      name: 'Siyambalanduwa_EBCA_Sensitivity_Analysis.xlsx',
      type: 'Excel Model (.xlsx)',
      size: '34.8 KB',
      path: '/docs/Siyambalanduwa_EBCA___Sensitivity_Analysis.xlsx',
      desc: 'Project 2 economic sensitivity matrix across 15 parameters including social cost of carbon, avoided fuel prices, and exchange rates.',
      isExcel: true
    },
    {
      name: 'Multi_criteria_analysis.xlsx',
      type: 'Excel Model (.xlsx)',
      size: '11.3 KB',
      path: '/docs/Multi_criteria_analysis.xlsx',
      desc: 'Analytic Hierarchy Process (AHP) pairwise comparison matrix benchmarking Siyambalanduwa against Batticaloa, Mannar, and Hambantota.',
      isExcel: true
    }
  ];

  const handleCopyBibtex = () => {
    const bibtex = `@misc{Premakumara2026EngEco,
  author       = {Premakumara, H. P. S. and Mayoorathan, K. and Abhirami, T. and Bibulewela, P. A. C. and Themiya, K. L.},
  title        = {Engineering Economics (MN 4023): Benefit-Cost Analysis of Ferrocement Panels and Siyambalanduwa 100MW Solar PV Plant},
  howpublished = {Department of Materials Science and Engineering, University of Moratuwa},
  year         = {2026},
  note         = {Faculty of Engineering, Semester 7}
}`;
    navigator.clipboard.writeText(bibtex);
    setCopiedStatus(true);
    setTimeout(() => setCopiedStatus(false), 2500);
  };

  return (
    <div className="space-y-8 py-6">
      {/* Repository Main Header & Master Bundle Download */}
      <div className="materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30 flex items-center gap-1">
                <Archive className="w-3 h-3" />
                Open Science & Academic Archive
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-semibold border border-cyan-500/30">
                PDF · PPTX · Excel (.xlsx)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-semibold border border-amber-500/30">
                100% Certified Data
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
              Engineering Economics Document & Data Publishing Center
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              In accordance with academic standards and user requirements, all native project files—including high-resolution presentation slides, editable PowerPoint (.pptx) decks, and all 5 certified financial/economic Excel (.xlsx) workbooks—are publicly hosted and freely downloadable.
            </p>
          </div>

          {/* Master ZIP Download Button */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <a
              href="/docs/Engineering_Economics_Full_Project_Archive.zip"
              download="Engineering_Economics_Full_Project_Archive.zip"
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Archive className="w-5 h-5 text-slate-950" />
              <span>Download Master Bundle (.ZIP)</span>
            </a>
            <div className="text-[11px] font-mono text-slate-400 text-center lg:text-right">
              Includes PDF, PPTX, 5 Excel Files & Manifest
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: ALL DOWNLOADABLE PROJECT FILES LIST */}
      <div className="materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white font-heading">
              Certified Project Files & Native Models ({filesList.length} Files)
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">
            Click any file to download directly
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filesList.map((f, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 flex flex-col justify-between space-y-3 transition-colors"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className={`px-2 py-0.5 rounded font-semibold ${
                    f.isPdf ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                    f.isPptx ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                    'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}>
                    {f.type}
                  </span>
                  <span className="text-slate-400">{f.size}</span>
                </div>

                <h4 className="text-sm font-bold text-white font-heading flex items-center gap-2">
                  {f.name}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {f.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                {f.isPdf ? (
                  <div className="flex items-center gap-2 w-full justify-between">
                    <a
                      href={f.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Open in PDF Viewer</span>
                    </a>
                    <a
                      href={f.path}
                      download={f.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center justify-end w-full">
                    <a
                      href={f.path}
                      download={f.name}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-slate-950" />
                      <span>Download File</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: ACADEMIC CITATION & ATTRIBUTION */}
      <div className="materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white font-heading">
              Academic Attribution & BibTeX Citation
            </h3>
          </div>
          <button
            onClick={handleCopyBibtex}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono transition-colors"
          >
            {copiedStatus ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy BibTeX</span>
              </>
            )}
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Please cite this work when referencing the NERDC ferrocement precast modular panels FEA/BCA or the Siyambalanduwa 100 MW solar economic appraisal:
        </p>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
          <pre>{`@misc{Premakumara2026EngEco,
  author       = {Premakumara, H. P. S. and Mayoorathan, K. and Abhirami, T. and Bibulewela, P. A. C. and Themiya, K. L.},
  title        = {Engineering Economics (MN 4023): Benefit-Cost Analysis of Ferrocement Panels and Siyambalanduwa 100MW Solar PV Plant},
  howpublished = {Department of Materials Science and Engineering, University of Moratuwa},
  year         = {2026},
  note         = {Faculty of Engineering, Semester 7}
}`}</pre>
        </div>
      </div>
    </div>
  );
};

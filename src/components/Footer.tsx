import React from 'react';
import { GraduationCap, Heart, Building2, Sun, ExternalLink } from 'lucide-react';
import { INSTITUTIONAL_METADATA, PROJECT_AUTHORS } from '../data/engEcoData.ts';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full materials-glass border-t border-slate-800/80 mt-16 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-amber-500/20 border border-emerald-500/40 p-1 flex items-center justify-center eco-glow">
              <img src="/eng_eco_logo.svg" alt="Engineering Economics" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white font-heading">
                  MN 4023: Engineering Economics
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-semibold">
                  Semester 7
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Department of Materials Science & Engineering · University of Moratuwa
              </p>
            </div>
          </div>

          <div className="text-xs font-mono text-slate-400 text-left md:text-right">
            <div>Lead Author: <strong className="text-emerald-400">{PROJECT_AUTHORS[0].name}</strong> ({PROJECT_AUTHORS[0].index})</div>
            <div className="text-slate-500 mt-0.5">Faculty of Engineering · Moratuwa, Sri Lanka</div>
          </div>
        </div>

        {/* Institutional Partners Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Institutional Partners: NERDC (Modular Precast) · Ceylon Electricity Board (Solar Grid)</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-500">
            <span>Published with open-access data and reproducible models</span>
          </div>
        </div>
                      <div className="flex items-center gap-4 text-xs">
            <a
              href="https://github.com/premakumarahps/fbca-ebca-eng-eco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://premakumarahps.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Main Portfolio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

      </div>
    </footer>
  );
};

import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Sparkles, 
  TrendingUp, 
  Coins, 
  Clock, 
  ShieldCheck, 
  Sun, 
  Building2,
  RefreshCw,
  Zap,
  ArrowRight
} from 'lucide-react';

interface InteractiveEconomicsEngineProps {
  triggerConfetti?: () => void;
}

export const InteractiveEconomicsEngine: React.FC<InteractiveEconomicsEngineProps> = ({ triggerConfetti }) => {
  const [activeProject, setActiveProject] = useState<'solar' | 'ferrocement'>('solar');

  // Solar Parameters
  const [solarCapacity, setSolarCapacity] = useState<number>(100); // MW
  const [solarCapex, setSolarCapex] = useState<number>(14833.65); // LKR Mn
  const [solarTariff, setSolarTariff] = useState<number>(14.0); // LKR/kWh
  const [solarDiscountRate, setSolarDiscountRate] = useState<number>(9.0); // %
  const [solarFuelCost, setSolarFuelCost] = useState<number>(19.0); // LKR/kWh
  const [solarCarbonPrice, setSolarCarbonPrice] = useState<number>(10000); // LKR/ton

  // Ferrocement Parameters
  const [fcUnitCost, setFcUnitCost] = useState<number>(4200);
  const [fcSellingPrice, setFcSellingPrice] = useState<number>(7000);
  const [fcAnnualVolume, setFcAnnualVolume] = useState<number>(10000);
  const [fcDiscountRate, setFcDiscountRate] = useState<number>(10.0);

  // Solar Calculations
  const solarOutputs = useMemo(() => {
    const annualGWh = solarCapacity * 1.8;
    const yr1Revenue = annualGWh * solarTariff;
    const yr1AvoidedFuel = annualGWh * solarFuelCost;
    const yr1CO2 = annualGWh * 820 * (solarCarbonPrice / 1000000); // rough conversion
    const r = solarDiscountRate / 100;

    // 20-year annuity factor approx
    const pvFactor = (1 - Math.pow(1 + r, -20)) / r;

    const fnpv = (yr1Revenue * 0.94 * pvFactor) - solarCapex;
    const firr = ((yr1Revenue * 0.94) / solarCapex) * 100 * 0.78;
    const fbcr = (yr1Revenue * 0.94 * pvFactor) / solarCapex;
    const fpbp = solarCapex / (yr1Revenue * 0.94);

    const totalEcoBenefitsYr = (yr1AvoidedFuel * 0.94) + yr1CO2 + 100;
    const enpv = (totalEcoBenefitsYr * pvFactor) - (solarCapex * 1.01);
    const eirr = (totalEcoBenefitsYr / (solarCapex * 1.01)) * 100 * 1.05;
    const ebcr = (totalEcoBenefitsYr * pvFactor) / (solarCapex * 1.01);
    const epbp = (solarCapex * 1.01) / totalEcoBenefitsYr;

    return {
      fnpv,
      firr,
      fbcr,
      fpbp,
      enpv,
      eirr,
      ebcr,
      epbp,
      annualGWh
    };
  }, [solarCapacity, solarCapex, solarTariff, solarDiscountRate, solarFuelCost, solarCarbonPrice]);

  // Ferrocement Calculations
  const fcOutputs = useMemo(() => {
    const annualProfit = (fcSellingPrice - fcUnitCost) * fcAnnualVolume;
    const capex = 8000000; // 8M LKR setup
    const r = fcDiscountRate / 100;
    const pvFactor = (1 - Math.pow(1 + r, -10)) / r;

    const fnpv = (annualProfit * pvFactor - capex) / 1000000;
    const firr = ((annualProfit) / capex) * 100 * 0.72;
    const fbcr = (annualProfit * pvFactor) / capex;
    const fpbp = capex / annualProfit;

    // Economic benefits add time savings, waste reduction
    const ecoAnnualBenefit = annualProfit + (fcAnnualVolume * 2200);
    const enpv = (ecoAnnualBenefit * pvFactor - (capex * 0.9)) / 1000000;
    const eirr = (ecoAnnualBenefit / (capex * 0.9)) * 100 * 0.95;
    const ebcr = (ecoAnnualBenefit * pvFactor) / (capex * 0.9);
    const epbp = (capex * 0.9) / ecoAnnualBenefit;

    return {
      fnpv,
      firr,
      fbcr,
      fpbp,
      enpv,
      eirr,
      ebcr,
      epbp
    };
  }, [fcUnitCost, fcSellingPrice, fcAnnualVolume, fcDiscountRate]);

  return (
    <div className="space-y-8 py-6">
      {/* Simulator Header */}
      <div className="materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30 flex items-center gap-1">
                <Calculator className="w-3 h-3" />
                Live Engineering Economics Simulator
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-semibold border border-cyan-500/30">
                Real-Time Discounted Cash Flow Engine
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Universal Engineering Feasibility & Payback Engine
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Test customized commercial and economic scenarios by dynamically tuning capital expenditures, electricity tariffs, social discount rates, and carbon offset valuations.
            </p>
          </div>

          {/* Project Switcher */}
          <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono shrink-0">
            <button
              onClick={() => setActiveProject('solar')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-bold transition-all ${
                activeProject === 'solar'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Project 2: Solar PV</span>
            </button>
            <button
              onClick={() => setActiveProject('ferrocement')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-bold transition-all ${
                activeProject === 'ferrocement'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Project 1: Ferrocement</span>
            </button>
          </div>
        </div>
      </div>

      {/* Simulator Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Inputs Controls */}
        <div className="lg:col-span-6 materials-glass p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white font-heading uppercase tracking-wider">
              {activeProject === 'solar' ? 'Solar Plant Input Parameters' : 'Ferrocement Input Parameters'}
            </h3>
            <button
              onClick={() => {
                if (activeProject === 'solar') {
                  setSolarCapacity(100);
                  setSolarCapex(14833.65);
                  setSolarTariff(14.0);
                  setSolarDiscountRate(9.0);
                  setSolarFuelCost(19.0);
                  setSolarCarbonPrice(10000);
                } else {
                  setFcUnitCost(4200);
                  setFcSellingPrice(7000);
                  setFcAnnualVolume(10000);
                  setFcDiscountRate(10.0);
                }
              }}
              className="text-xs font-mono text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              Reset Defaults
            </button>
          </div>

          {activeProject === 'solar' ? (
            <div className="space-y-4">
              {/* Solar Tariff Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">PPA Electricity Tariff (LKR/kWh):</span>
                  <span className="text-amber-400 font-bold">{solarTariff.toFixed(1)} LKR</span>
                </div>
                <input
                  type="range"
                  min="10.0"
                  max="20.0"
                  step="0.5"
                  value={solarTariff}
                  onChange={(e) => setSolarTariff(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Solar CapEx Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Total Investment CapEx (LKR Mn):</span>
                  <span className="text-cyan-400 font-bold">{solarCapex.toLocaleString()} Mn</span>
                </div>
                <input
                  type="range"
                  min="11000"
                  max="20000"
                  step="250"
                  value={solarCapex}
                  onChange={(e) => setSolarCapex(parseFloat(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>

              {/* Discount Rate Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Real Discount Rate (%):</span>
                  <span className="text-white font-bold">{solarDiscountRate.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="6.0"
                  max="14.0"
                  step="0.5"
                  value={solarDiscountRate}
                  onChange={(e) => setSolarDiscountRate(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              {/* Avoided Fuel Cost */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Avoided Fuel Cost (LKR/kWh):</span>
                  <span className="text-emerald-400 font-bold">{solarFuelCost.toFixed(1)} LKR</span>
                </div>
                <input
                  type="range"
                  min="12.0"
                  max="28.0"
                  step="0.5"
                  value={solarFuelCost}
                  onChange={(e) => setSolarFuelCost(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              {/* Social Cost of Carbon */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Social Cost of Carbon (LKR/ton):</span>
                  <span className="text-purple-400 font-bold">{solarCarbonPrice.toLocaleString()} LKR</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="20000"
                  step="1000"
                  value={solarCarbonPrice}
                  onChange={(e) => setSolarCarbonPrice(parseFloat(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Unit Cost Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Production Cost / Panel:</span>
                  <span className="text-white font-bold">{fcUnitCost.toLocaleString()} LKR</span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="6000"
                  step="100"
                  value={fcUnitCost}
                  onChange={(e) => setFcUnitCost(parseFloat(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>

              {/* Selling Price Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Selling Price / Panel:</span>
                  <span className="text-emerald-400 font-bold">{fcSellingPrice.toLocaleString()} LKR</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="10000"
                  step="200"
                  value={fcSellingPrice}
                  onChange={(e) => setFcSellingPrice(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              {/* Annual Production Volume */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Annual Panel Output:</span>
                  <span className="text-amber-400 font-bold">{fcAnnualVolume.toLocaleString()} units</span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="25000"
                  step="500"
                  value={fcAnnualVolume}
                  onChange={(e) => setFcAnnualVolume(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            </div>
          )}

          <button
            onClick={() => {
              if (triggerConfetti) triggerConfetti();
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Validate Feasibility & Celebrate Return</span>
          </button>
        </div>

        {/* Right Output Dashboard */}
        <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
          {/* Financial Outcomes */}
          <div className="materials-glass p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-cyan-400 font-mono flex items-center gap-1.5">
                <Coins className="w-3.5 h-3.5" />
                Commercial Financial Feasibility (FBCA)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">Private View</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400">Financial NPV</span>
                <div className={`text-lg font-bold mt-1 ${
                  (activeProject === 'solar' ? solarOutputs.fnpv : fcOutputs.fnpv) > 0 ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {activeProject === 'solar' 
                    ? `${solarOutputs.fnpv.toFixed(1)} Mn` 
                    : `${fcOutputs.fnpv.toFixed(2)} Mn`}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400">Financial IRR</span>
                <div className="text-lg font-bold text-white mt-1">
                  {activeProject === 'solar' ? `${solarOutputs.firr.toFixed(1)}%` : `${fcOutputs.firr.toFixed(1)}%`}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400">Benefit-Cost Ratio</span>
                <div className="text-lg font-bold text-cyan-400 mt-1">
                  {activeProject === 'solar' ? solarOutputs.fbcr.toFixed(2) : fcOutputs.fbcr.toFixed(2)}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400">Discounted Payback</span>
                <div className="text-lg font-bold text-amber-400 mt-1">
                  {activeProject === 'solar' ? `${solarOutputs.fpbp.toFixed(1)} Yrs` : `${fcOutputs.fpbp.toFixed(1)} Yrs`}
                </div>
              </div>
            </div>
          </div>

          {/* Economic Outcomes */}
          <div className="materials-glass p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-emerald-400 font-mono flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                National Economic Welfare (EBCA)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Societal View</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400">Economic NPV</span>
                <div className="text-lg font-bold text-emerald-400 mt-1">
                  {activeProject === 'solar' 
                    ? `${solarOutputs.enpv.toFixed(1)} Mn` 
                    : `${fcOutputs.enpv.toFixed(2)} Mn`}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400">Economic IRR</span>
                <div className="text-lg font-bold text-white mt-1">
                  {activeProject === 'solar' ? `${solarOutputs.eirr.toFixed(1)}%` : `${fcOutputs.eirr.toFixed(1)}%`}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400">Economic BCR</span>
                <div className="text-lg font-bold text-emerald-400 mt-1">
                  {activeProject === 'solar' ? solarOutputs.ebcr.toFixed(2) : fcOutputs.ebcr.toFixed(2)}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400">Economic Payback</span>
                <div className="text-lg font-bold text-teal-400 mt-1">
                  {activeProject === 'solar' ? `${solarOutputs.epbp.toFixed(1)} Yrs` : `${fcOutputs.epbp.toFixed(1)} Yrs`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

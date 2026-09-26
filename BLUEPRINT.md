# Engineering Economics (MN 4023) Dual-Project Academic Web Platform
## Master Architectural Blueprint & Technical Specification

---

### 1. Executive Summary & Institutional Context
* **Module**: **MN 4023: Engineering Economics**
* **Institution**: Department of Materials Science & Engineering, Faculty of Engineering, **University of Moratuwa**, Sri Lanka
* **Industry & Research Partners**:
  * **National Engineering Research and Development Centre of Sri Lanka (NERDC)** (Modular Housing Division)
  * **Ceylon Electricity Board (CEB)** / Sustainable Energy Authority (Renewable Energy Generation)
* **Student Investigators**:
  * **H.P.S. Premakumara (Index: 210494D)** — Lead Contributor
  * **K. Mayoorathan (Index: 210381E)**
  * **T. Abhirami (Index: 210016R)**
  * **P.A.C. Bibulewela (Index: 210070B)**
  * **K.L. Themiya (Index: 210640A)**
* **Dual-Project Portfolio**:
  1. **Project 1**: *Prefabricated Ferrocement Wall Panels for Modular Infrastructure & Sustainable Construction* (FBCA, EBCA, COMSOL FEA, Multi-Criteria Analysis, Risk Assessment)
  2. **Project 2**: *Siyambalanduwa 100 MW Utility Solar PV Power Plant* (Financial & Economic BCA, Shadow Pricing Conversion, 20-Year Cash Flow Modeling, Multi-Parameter Sensitivity Analysis, AHP Multi-Criteria Renewable Benchmark)

---

### 2. Design Aesthetics & Visual Architecture
* **Theme & Atmosphere**:
  * Premium dark-mode engineering executive dashboard (`#070b14` slate-zinc obsidian background)
  * Vibrant, distinct color accents reflecting dual engineering disciplines:
    * **Solar Green / Emerald** (`#10b981`) & **Clean Tech Cyan** (`#06b6d4`): Renewable energy generation, carbon avoidance, economic surplus.
    * **Amber / Solar Gold** (`#f59e0b`): Tariff revenues, solar irradiation, financial yields.
    * **Structural Violet / Indigo** (`#8b5cf6`): Civil precast ferrocement, structural mechanics, COMSOL FEA stress fields.
  * Glassmorphic containers (`backdrop-blur-md`, subtle 1px border glows, refined box-shadows).
  * High-density typography (Google Fonts *Outfit* / *Inter* for headers and body, *JetBrains Mono* for currency figures, cash flows, and sensitivities).
* **Motion & Interactivity**:
  * Real-time cash flow and sensitivity graph updates using **Plotly.js** and **Lucide Icons**.
  * Interactive slide carousel with full-screen lightbox for Project 1 presentation.
  * Live parameter sliders enabling visitors to test arbitrary tariff, fuel price, and discount rates.

---

### 3. Detailed Project Breakdown & Verified Datasets

#### Project 1: Prefabricated Ferrocement Wall Panels (NERDC & UoM)
* **Technical Innovation**:
  * Substitution of river sand with crushed M-sand and industrial pozzolans (fly ash, bottom ash, rice husk ash).
  * High-tensile woven wire mesh reinforcement with tor steel connections.
  * COMSOL Multiphysics linear-elastic FEA self-weight bending analysis:
    * 40 mm solid panel (high flexibility)
    * 60 mm solid panel (high weight penalty)
    * 60 mm 3-core hollow panel (optimal strength-to-weight ratio).
* **Financial Benefit-Cost Analysis (FBCA)**:
  * Unit Production Cost: **4,200 LKR / panel**
  * Selling Price: **7,000 LKR / panel**
  * Financial NPV: **12.45 Million LKR**
  * Financial IRR: **26.36%**
  * Financial BCR: **1.204**
  * Discounted Payback Period: **3.25 Years**
* **Economic Benefit-Cost Analysis (EBCA)**:
  * National shadow pricing of foreign materials and unskilled labor.
  * Societal benefits: On-site waste elimination, embodied carbon reduction, local employment, fast modular assembly.
  * Economic NPV: **30.10 Million LKR**
  * Economic IRR: **37.40%**
  * Economic BCR: **1.8792**
  * Discounted Payback Period: **1.83 Years**
* **Multi-Criteria Analysis (MCA)**:
  * Weights: Cost (40%), Time/Speed (25%), Durability (20%), Environmental (15%).
  * Scores: Clay Brick (3.075), Concrete Brick (3.275), RC Panel (3.100) vs **Ferrocement Panel (4.475 - Selected Winner)**.
* **Risk Assessment Matrix**:
  * 7 categories: Technical, Testing/Process, Market/Social, Regulatory, Health & Safety, Environmental, Aesthetic with specific mitigation plans.

---

#### Project 2: Siyambalanduwa 100 MW Ground-Mounted Solar PV Plant
* **Technical Scope**:
  * 100 MW capacity in Siyambalanduwa, Monaragala District.
  * 180 GWh Year 1 generation (PR = 0.85).
  * 0.7% annual module degradation across 20-year lifespan.
  * Total Capital Cost: **14,833.652 Million LKR** (~14.83 Billion LKR).
* **Financial BCA (FBCA)**:
  * PPA Tariff: **14 LKR/kWh**
  * O&M: 1.0% CapEx (Yr 1) escalating at 3% p.a.
  * Financial NPV (9% discount): **2,149.52 Million LKR**
  * Financial IRR: **11.07%**
  * Financial BCR: **1.130**
  * Discounted Payback: **14.20 Years** (Simple Payback: 7.69 Years)
* **Economic Conversion & Shadow Pricing**:
  * Standard Conversion Factor (SCF): **0.90**
  * Shadow Wage Rate Factor (SWRF): **0.80**
  * Shadow Exchange Rate Factor (SERF): **1.10**
  * Avoided Thermal Generation Fuel Cost: **19 LKR/kWh** (Cumulative 20-yr benefit: 64,036.88 Million LKR)
  * CO₂ Abatement: **147,582 tons/year** @ Social Cost of Carbon **10,000 LKR/ton** (Cumulative 20-yr benefit: 29,516.40 Million LKR)
  * Direct Employment: 1,000 jobs (construction) + 100 jobs/yr (O&M) @ 1.0 LKR mn/yr (Cumulative 20-yr benefit: 3,000 Million LKR)
  * Environmental Impact One-Time Cost: **30 Million LKR**
  * Loss of Royalty / Land Rent: **15 Million LKR/year**
  * Economic CapEx: **14,981.99 Million LKR**
  * Economic NPV: **28,387.20 Million LKR**
  * Economic IRR: **33.95%**
  * Economic BCR: **2.691**
  * Discounted Economic Payback: **3.53 Years** (Simple Payback: 2.90 Years)
* **Sensitivity Analysis Matrices**:
  * Financial Sensitivity: Tariff ($E=8.68$), CapEx ($E=7.68$), Discount Rate ($E=4.92$), Generation ($E=4.34$), O&M ($E=0.43$).
  * Economic Sensitivity: Avoided Fuel Cost ($E=1.05$), Generation ($E=1.05$), CapEx ($E=0.59$), Discount Rate ($E=0.94$), Carbon Social Cost ($E=0.47$).
* **AHP Multi-Criteria Analysis of National Renewable Projects**:
  * Evaluated: Siyambalanduwa 100MW Solar, Batticaloa 100MW Solar, Hambantota 100MW Wind, Mannar 103.5MW Wind.
  * Weights: Cost (45.84%), Social Impact (21.53%), Energy Yield (13.10%), Environmental Impact (12.34%), Lifetime (7.18%).
  * Siyambalanduwa ranked **#1** with a composite score of **0.4364**.

---

### 4. Component Hierarchy & Navigation Map
1. **`Navbar.tsx`**: Top navigation with institutional branding, project switcher, and instant downloads.
2. **`HeroDashboard.tsx`**: Dual-project executive summary, high-impact key statistics, and quick navigation.
3. **`Project1FerrocementStudio.tsx`**:
   * Structural COMSOL FEA profile explorer (40mm, 60mm solid, 60mm cored)
   * High-resolution 14-slide presentation viewer (with full-screen modal)
   * FBCA vs EBCA indicator dashboard
   * Multi-Criteria Analysis matrix
   * Risk mitigation matrix
4. **`Project2SolarStudio.tsx`**:
   * Siyambalanduwa project specs and parameters
   * 20-Year Financial Cash Flow table & visualizer
   * 20-Year Economic Cash Flow table & shadow pricing breakdown
   * Tornado sensitivity explorer with interactive sliders
   * AHP Multi-Criteria Renewable Benchmark
5. **`DualComparisonEngine.tsx`**: Side-by-side comparison of private profitability (FBCA) vs national welfare (EBCA).
6. **`InteractiveEconomicsCalculator.tsx`**: Live simulation engine for custom tariffs, discount rates, and fuel prices.
7. **`DocumentRepositoryCenter.tsx`**: Direct download hub for all PDFs, PPTX slides, and 5 original Excel workbooks.
8. **`Footer.tsx`**: Institutional acknowledgments, Moratuwa MSE credentials, and citation guidelines.

---

### 5. Implementation Roadmap
1. Initialize Vite + React + TypeScript + TailwindCSS web project in `d:\1.Antigravity Projects\15_Engineering_Economics\web`.
2. Install dependencies (`lucide-react`, `plotly.js-dist-min`, `canvas-confetti`).
3. Stage all media assets: 14 rendered slides, original `.pdf`, `.pptx`, and `.xlsx` workbooks in `web/public/`.
4. Implement all structured TypeScript components with verified datasets.
5. Validate via `npm run build` and interactive browser subagent testing.

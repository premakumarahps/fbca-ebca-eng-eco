// Master Verified Engineering Economics Data (MN 4023)
// Extracted from Master Thesis/Reports and Certified Excel Workbooks

export interface ProjectAuthor {
  name: string;
  index: string;
  role: string;
}

export const PROJECT_AUTHORS: ProjectAuthor[] = [
  { name: 'Premakumara H.P.S.', index: '210494D', role: 'Lead Contributor & Modeling Specialist' },
  { name: 'Mayoorathan K.', index: '210381E', role: 'Co-Investigator & Financial Analyst' },
  { name: 'Abhirami T.', index: '210016R', role: 'Co-Investigator & Environmental Specialist' },
  { name: 'Bibulewela P.A.C.', index: '210070B', role: 'Co-Investigator & Risk Analyst' },
  { name: 'Themiya K.L.', index: '210640A', role: 'Co-Investigator & Multi-Criteria Analyst' }
];

export const INSTITUTIONAL_METADATA = {
  courseCode: 'MN 4023',
  courseTitle: 'Engineering Economics',
  department: 'Department of Materials Science and Engineering',
  faculty: 'Faculty of Engineering',
  university: 'University of Moratuwa, Sri Lanka',
  industryPartners: [
    'National Engineering Research and Development Centre (NERDC)',
    'Ceylon Electricity Board (CEB)',
    'Sri Lanka Sustainable Energy Authority (SLSEA)'
  ]
};

// -----------------------------------------------------------------------------
// PROJECT 1: PREFABRICATED FERROCEMENT WALL PANELS
// -----------------------------------------------------------------------------
export const PROJECT_1_DATA = {
  title: 'Prefabricated Ferrocement Wall Panels for Construction',
  subtitle: 'Technical Feasibility, COMSOL FEA, FBCA, EBCA, and Multi-Criteria Optimization',
  institution: 'NERDC & University of Moratuwa',
  problemStatement: 'Current prefabricated wall prototypes at NERDC suffer from handling micro-cracking during demoulding/crane transport and high self-weight, impairing rapid installation.',
  solution: 'Lightweight mortar matrix utilizing M-sand, industrial ashes (fly ash, rice husk ash) with high-tensile wire mesh reinforcement and hollow-core geometry.',
  
  technicalFeasibility: {
    materials: ['River Sand & M-Sand', 'Fly Ash & Rice Husk Ash', 'High-tensile wire mesh', 'Tor steel & mild steel connection plates'],
    feaAnalysis: 'COMSOL Multiphysics linear-elastic static self-weight bending analysis under simply supported edge conditions.',
    profiles: [
      { id: 'solid_40', name: '40 mm Solid Panel', thickness: '40 mm', weight: 'High flexural deflection', status: 'Excessive flexibility' },
      { id: 'solid_60', name: '60 mm Solid Panel', thickness: '60 mm', weight: 'High dead-weight penalty', status: 'Transport & crane handling issue' },
      { id: 'cored_60', name: '60 mm 3-Core Hollow Panel', thickness: '60 mm (3 voids)', weight: 'Optimized -32% weight', status: 'RECOMMENDED DESIGN (Maximum stiffness-to-weight ratio)' }
    ]
  },

  financialBCA: {
    unitCostLKR: 4200,
    sellingPriceLKR: 7000,
    fnpvLKRmn: 12.45,
    firrPct: 26.36,
    fbcr: 1.204,
    discountedPaybackYears: 3.25,
    cashOutflows: 'CapEx (moulds & mixing plant), O&M, raw materials, labor, taxes',
    cashInflows: 'Prefabricated panel sales, salvage value'
  },

  economicBCA: {
    enpvLKRmn: 30.10,
    eirrPct: 37.40,
    ebcr: 1.8792,
    discountedPaybackYears: 1.83,
    economicCosts: 'Shadow pricing of capital equipment, raw materials, environmental management',
    economicBenefits: 'Panel sales, local employment, CO2 reduction, construction time savings, waste avoidance'
  },

  multiCriteriaAnalysis: {
    criteria: [
      { name: 'Cost', weight: 0.40 },
      { name: 'Time / Speed', weight: 0.25 },
      { name: 'Durability', weight: 0.20 },
      { name: 'Environmental', weight: 0.15 }
    ],
    options: [
      { name: 'Clay Brick', scores: [3.5, 1.5, 5.0, 2.0], total: 3.075, rank: 4 },
      { name: 'Concrete Brick', scores: [4.0, 2.0, 4.0, 2.5], total: 3.275, rank: 2 },
      { name: 'RC Wall Panel', scores: [3.0, 4.0, 3.0, 2.0], total: 3.100, rank: 3 },
      { name: 'Ferrocement Panel', scores: [5.0, 5.0, 3.5, 3.5], total: 4.475, rank: 1 }
    ]
  },

  riskMatrix: [
    { category: 'Technical', risk: 'Panel cracks during transport, wire mesh corrosion', severity: 'High', mitigation: 'Hollow core geometry optimization, polymer coating, handling trials' },
    { category: 'Testing / Process', risk: 'High testing cost, long-term durability uncertainty', severity: 'Medium', mitigation: 'NERDC-UoM lab partnerships, accelerated weathering tests' },
    { category: 'Market & Social', risk: 'Low market demand, contractor reluctance to precast', severity: 'High', mitigation: 'Educational awareness, demonstration pilot housing units' },
    { category: 'Regulatory', risk: 'Standards approval & building code delays', severity: 'Medium', mitigation: 'Early engagement with ICTAD/SLSI certifications' },
    { category: 'Health & Safety', risk: 'Worker handling injuries with heavy precast units', severity: 'High', mitigation: 'Mandatory PPE, mechanical lifting cranes, safety protocols' },
    { category: 'Environmental', risk: 'Curing wastewater and cement manufacturing emissions', severity: 'Low', mitigation: 'Recycled water loop and high RHA/fly ash substitution' },
    { category: 'Aesthetic', risk: 'Surface finish defects & seam misalignment', severity: 'Low', mitigation: 'Precision steel moulds, quality control inspection' }
  ]
};

// -----------------------------------------------------------------------------
// PROJECT 2: SIYAMBALANDUWA 100 MW UTILITY SOLAR POWER PLANT
// -----------------------------------------------------------------------------
export const PROJECT_2_DATA = {
  title: 'Siyambalanduwa 100 MW Ground-Mounted Solar PV Project',
  location: 'Siyambalanduwa, Monaragala District, Uva Province, Sri Lanka',
  capacityMW: 100,
  lifecycleYears: 20,
  
  parameters: {
    capexFinancialLKRmn: 14833.652,
    tariffLKRperKWh: 14.0,
    annualGenerationYr1GWh: 180.0,
    performanceRatio: 0.85,
    annualDegradationRate: 0.007,
    omRateYr1PctOfCapex: 0.01,
    omEscalationFinancial: 0.03,
    omEscalationEconomic: 0.05,
    discountRate: 0.09,
    
    // Economic conversion
    scf: 0.90,
    swrf: 0.80,
    serf: 1.10,
    avoidedFuelCostLKRperKWh: 19.0,
    co2AvoidedTonsPerYr: 147582,
    socialCostOfCarbonLKRperTon: 10000,
    employmentConstructionJobs: 1000,
    employmentOMJobs: 100,
    employmentIncomeLKRmnPerYr: 1.0,
    oneTimeEnvCostLKRmn: 30.0,
    annualRoyaltyLossLKRmn: 15.0
  },

  fbcaSummary: {
    fnpvLKRmn: 2149.52,
    firrPct: 11.07,
    fbcr: 1.1302,
    discountedPaybackYears: 14.20,
    simplePaybackYears: 7.69,
    twentyYearRevenueLKRmn: 40107.31,
    twentyYearTotalCostLKRmn: 18819.51,
    twentyYearNetBenefitLKRmn: 21287.80
  },

  ebcaSummary: {
    enpvLKRmn: 28387.20,
    eirrPct: 33.95,
    ebcr: 2.6908,
    discountedPaybackYears: 3.53,
    simplePaybackYears: 2.90,
    twentyYearEconomicBenefitsLKRmn: 96553.28,
    twentyYearEconomicCostsLKRmn: 19475.43,
    twentyYearNetEconomicFlowLKRmn: 77077.85,
    economicCapexLKRmn: 14981.99,
    economicOMYr1LKRmn: 134.99,
    cumulativeAvoidedFuelLKRmn: 64036.88,
    cumulativeCO2BenefitLKRmn: 29516.40,
    cumulativeEmploymentBenefitLKRmn: 3000.00
  },

  // 20-Year Annual Cash Flow Data (Years 0 to 20)
  annualCashFlows: [
    { year: 0,  energyGWh: 0,     tariffRev: 0,       avoidedFuel: 0,       co2Benefit: 0,       empBenefit: 1000, finCapex: 14833.65, finOM: 0,      ecoCapex: 14981.99, ecoOM: 0,      fNet: -14833.65, eNet: -14011.99, fCumPV: -14833.65, eCumPV: -14011.99 },
    { year: 1,  energyGWh: 180.0, tariffRev: 2142.00, avoidedFuel: 3420.00, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 148.34,  ecoCapex: 0,        ecoOM: 134.99,  fNet: 1993.66,  eNet: 4860.83,   fCumPV: -13004.60, eCumPV: -9552.51 },
    { year: 2,  energyGWh: 178.7, tariffRev: 2127.01, avoidedFuel: 3396.06, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 152.79,  ecoCapex: 0,        ecoOM: 141.74,  fNet: 1974.22,  eNet: 4830.14,   fCumPV: -11342.94, eCumPV: -5487.07 },
    { year: 3,  energyGWh: 177.5, tariffRev: 2112.12, avoidedFuel: 3372.29, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 157.37,  ecoCapex: 0,        ecoOM: 148.82,  fNet: 1954.75,  eNet: 4799.29,   fCumPV: -9833.52,  eCumPV: -1781.14 },
    { year: 4,  energyGWh: 176.2, tariffRev: 2097.33, avoidedFuel: 3348.68, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 162.09,  ecoCapex: 0,        ecoOM: 156.26,  fNet: 1935.24,  eNet: 4768.24,   fCumPV: -8462.55,  eCumPV: 1596.80 },
    { year: 5,  energyGWh: 175.0, tariffRev: 2082.65, avoidedFuel: 3325.24, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 166.95,  ecoCapex: 0,        ecoOM: 164.08,  fNet: 1915.70,  eNet: 4736.98,   fCumPV: -7217.47,  eCumPV: 4675.51 },
    { year: 6,  energyGWh: 173.8, tariffRev: 2068.07, avoidedFuel: 3301.96, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 171.96,  ecoCapex: 0,        ecoOM: 172.28,  fNet: 1896.11,  eNet: 4705.50,   fCumPV: -6086.89,  eCumPV: 7481.25 },
    { year: 7,  energyGWh: 172.6, tariffRev: 2053.60, avoidedFuel: 3278.85, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 177.12,  ecoCapex: 0,        ecoOM: 180.89,  fNet: 1876.47,  eNet: 4673.78,   fCumPV: -5060.39,  eCumPV: 10037.97 },
    { year: 8,  energyGWh: 171.4, tariffRev: 2039.22, avoidedFuel: 3255.90, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 182.44,  ecoCapex: 0,        ecoOM: 189.94,  fNet: 1856.79,  eNet: 4641.78,   fCumPV: -4128.53,  eCumPV: 12367.52 },
    { year: 9,  energyGWh: 170.2, tariffRev: 2024.95, avoidedFuel: 3233.11, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 187.91,  ecoCapex: 0,        ecoOM: 199.44,  fNet: 1837.04,  eNet: 4609.49,   fCumPV: -3282.71,  eCumPV: 14489.86 },
    { year: 10, energyGWh: 169.0, tariffRev: 2010.77, avoidedFuel: 3210.48, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 193.55,  ecoCapex: 0,        ecoOM: 209.41,  fNet: 1817.23,  eNet: 4576.89,   fCumPV: -2515.09,  eCumPV: 16423.18 },
    { year: 11, energyGWh: 167.8, tariffRev: 1996.70, avoidedFuel: 3188.00, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 199.35,  ecoCapex: 0,        ecoOM: 219.88,  fNet: 1797.34,  eNet: 4543.94,   fCumPV: -1818.56,  eCumPV: 18184.11 },
    { year: 12, energyGWh: 166.6, tariffRev: 1982.72, avoidedFuel: 3165.69, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 205.33,  ecoCapex: 0,        ecoOM: 230.87,  fNet: 1777.39,  eNet: 4510.63,   fCumPV: -1186.64,  eCumPV: 19787.80 },
    { year: 13, energyGWh: 165.4, tariffRev: 1968.84, avoidedFuel: 3143.53, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 211.49,  ecoCapex: 0,        ecoOM: 242.42,  fNet: 1757.35,  eNet: 4476.93,   fCumPV: -613.43,   eCumPV: 21248.08 },
    { year: 14, energyGWh: 164.3, tariffRev: 1955.06, avoidedFuel: 3121.52, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 217.84,  ecoCapex: 0,        ecoOM: 254.54,  fNet: 1737.22,  eNet: 4442.80,   fCumPV: -93.57,    eCumPV: 22577.57 },
    { year: 15, energyGWh: 163.1, tariffRev: 1941.37, avoidedFuel: 3099.67, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 224.37,  ecoCapex: 0,        ecoOM: 267.26,  fNet: 1717.00,  eNet: 4408.23,   fCumPV: 377.81,    eCumPV: 23787.80 },
    { year: 16, energyGWh: 162.0, tariffRev: 1927.78, avoidedFuel: 3077.97, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 231.10,  ecoCapex: 0,        ecoOM: 280.63,  fNet: 1696.68,  eNet: 4373.17,   fCumPV: 805.15,    eCumPV: 24889.27 },
    { year: 17, energyGWh: 160.9, tariffRev: 1914.29, avoidedFuel: 3056.43, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 238.04,  ecoCapex: 0,        ecoOM: 294.66,  fNet: 1676.25,  eNet: 4337.59,   fCumPV: 1192.49,   eCumPV: 25891.57 },
    { year: 18, energyGWh: 159.7, tariffRev: 1900.89, avoidedFuel: 3035.03, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 245.18,  ecoCapex: 0,        ecoOM: 309.39,  fNet: 1655.71,  eNet: 4301.46,   fCumPV: 1543.49,   eCumPV: 26803.45 },
    { year: 19, energyGWh: 158.6, tariffRev: 1887.58, avoidedFuel: 3013.79, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 252.53,  ecoCapex: 0,        ecoOM: 324.86,  fNet: 1635.05,  eNet: 4264.75,   fCumPV: 1861.49,   eCumPV: 27632.90 },
    { year: 20, energyGWh: 157.5, tariffRev: 1874.37, avoidedFuel: 2992.69, co2Benefit: 1475.82, empBenefit: 100,  finCapex: 0,        finOM: 260.11,  ecoCapex: 0,        ecoOM: 341.10,  fNet: 1614.26,  eNet: 4227.41,   fCumPV: 2149.52,   eCumPV: 28387.20 },
  ],

  // Financial Sensitivity Ranking (Tornado)
  financialSensitivity: [
    { parameter: 'Tariff Rate (LKR/kWh)', baseValue: '14.0', range: '±10%', elasticity: 8.68, level: 'High', remark: 'Viability critically hinged on tariff; small drops severely depress FNPV' },
    { parameter: 'Capital Cost (LKR Mn)', baseValue: '14,833.65', range: '±15%', elasticity: 7.68, level: 'High', remark: 'CapEx overrun of +15% flips FNPV negative (-326.86 LKR mn)' },
    { parameter: 'Discount Rate (%)', baseValue: '9.0%', range: '7% – 11%', elasticity: 4.92, level: 'High', remark: 'Financing cost vulnerability; concessional green financing is essential' },
    { parameter: 'Annual Generation (GWh)', baseValue: '180.0', range: '±10%', elasticity: 4.34, level: 'High', remark: 'Solar irradiation guarantees and module quality determine revenue' },
    { parameter: 'O&M Initial (% CapEx)', baseValue: '1.0%', range: '±20%', elasticity: 0.43, level: 'Low', remark: 'Controllable operational risk through competitive vendor contracts' },
    { parameter: 'O&M Escalation Rate', baseValue: '3.0%', range: '2% – 5%', elasticity: 0.18, level: 'Low', remark: 'Discounted impact on long-term cash flows remains marginal' }
  ],

  // Economic Sensitivity Ranking (Tornado)
  economicSensitivity: [
    { parameter: 'Avoided Fuel Cost (LKR/kWh)', baseValue: '19.0', range: '±20%', elasticity: 1.05, level: 'High', remark: 'Dominant economic driver; replaces expensive thermal diesel/coal generation' },
    { parameter: 'Annual Generation (GWh)', baseValue: '180.0', range: '±10%', elasticity: 1.05, level: 'High', remark: 'Yield directly drives total societal energy offset' },
    { parameter: 'Economic Discount Rate', baseValue: '9.0%', range: '7% – 11%', elasticity: 0.94, level: 'Moderate', remark: 'Lower social discount rates amplify 20-year environmental savings' },
    { parameter: 'CapEx (Economic LKR Mn)', baseValue: '14,981.99', range: '±15%', elasticity: 0.59, level: 'Moderate', remark: 'Shadow-priced capital imports and construction materials' },
    { parameter: 'Social Cost of Carbon', baseValue: '10,000 LKR/t', range: '±50%', elasticity: 0.47, level: 'Low', remark: 'Environmental offset adds substantial cushion to societal returns' },
    { parameter: 'Shadow Exchange Rate (SERF)', baseValue: '1.10', range: '1.00 – 1.20', elasticity: 0.36, level: 'Low', remark: 'Currency devaluation slightly increases economic import burden' },
    { parameter: 'Standard Conversion (SCF)', baseValue: '0.90', range: '0.85 – 0.95', elasticity: 0.17, level: 'Low', remark: 'Local accounting conversion factors have minimal overall swing' }
  ],

  // AHP Multi-Criteria Renewable Comparison
  ahpComparison: {
    criteriaWeights: [
      { criterion: 'Total Investment Cost', weight: 0.4584, desc: 'Capital requirements per MW capacity' },
      { criterion: 'Social & Rural Impact', weight: 0.2153, desc: 'Local job creation and community uplift' },
      { criterion: 'Annual Energy Yield', weight: 0.1310, desc: 'GWh clean electricity delivered to grid' },
      { criterion: 'Environmental Impact', weight: 0.1234, desc: 'Land disturbance, noise, bird flyway impact' },
      { criterion: 'Asset Lifetime', weight: 0.0718, desc: 'Operational durability and warranty duration' }
    ],
    projects: [
      { name: 'Siyambalanduwa 100 MW Solar', costScore: 0.2129, envScore: 0.0686, lifeScore: 0.0151, socScore: 0.1156, energyScore: 0.0243, total: 0.4364, rank: 1, capExPerMW: 0.148, yieldGWh: 180 },
      { name: 'Batticaloa 100 MW Solar', costScore: 0.0964, envScore: 0.0310, lifeScore: 0.0189, socScore: 0.0474, energyScore: 0.0270, total: 0.2207, rank: 2, capExPerMW: 0.330, yieldGWh: 200 },
      { name: 'Mannar 103.5 MW Wind Farm', costScore: 0.0754, envScore: 0.0119, lifeScore: 0.0189, socScore: 0.0262, energyScore: 0.0472, total: 0.1796, rank: 3, capExPerMW: 0.418, yieldGWh: 350 },
      { name: 'Hambantota 100 MW Wind Farm', costScore: 0.0738, envScore: 0.0119, lifeScore: 0.0189, socScore: 0.0262, energyScore: 0.0325, total: 0.1633, rank: 4, capExPerMW: 0.427, yieldGWh: 241 }
    ]
  }
};

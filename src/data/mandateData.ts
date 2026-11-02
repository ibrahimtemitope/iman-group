export type RegionId = 'uae' | 'pakistan' | 'gcc-europe' | 'africa';

export interface GeographicMandate {
  id: RegionId;
  code: string;
  region: string;
  role: string;
  coordinatesLabel: string;
  lat: number;
  lon: number;
  statusTag: string;
  focusAreas: string[];
  summary: string;
}

export const GEOGRAPHIC_MANDATES: GeographicMandate[] = [
  {
    id: 'uae',
    code: 'UAE · HQ',
    region: 'United Arab Emirates (HQ)',
    role: 'Treasury, Governance & Strategic Capital Management',
    coordinatesLabel: '25.2048° N · 55.2708° E',
    lat: 25.2048,
    lon: 55.2708,
    statusTag: 'Principal Headquarters',
    focusAreas: [
      'Registered Free Zone Holding Structure',
      'AAOIFI Shariah Governance Oversight',
      'Group Treasury & Equity Allocation',
    ],
    summary:
      'Central capital command and holding governance domiciled in the United Arab Emirates, structuring cross-border private equity across real-asset infrastructure and digital platforms.',
  },
  {
    id: 'pakistan',
    code: 'PK · SOLAR',
    region: 'Pakistan',
    role: 'Infrastructure, Solar Energy Generation & Real Assets',
    coordinatesLabel: '33.6844° N · 73.0479° E',
    lat: 33.6844,
    lon: 73.0479,
    statusTag: 'Primary Energy Mandate',
    focusAreas: [
      'Utility-Scale Solar Photovoltaic Assets',
      'Commercial & Industrial Grid Resilience',
      'Local EPC & Operational Co-Execution',
    ],
    summary:
      'Primary South Asia concentration directing asset-backed equity into long-term, yield-generating solar power infrastructure alongside local engineering and operational specialists.',
  },
  {
    id: 'gcc-europe',
    code: 'GCC · EUR',
    region: 'GCC & Western Europe',
    role: 'Digital Consumer Platforms & Trade Networks',
    coordinatesLabel: '55.6761° N · 12.5683° E',
    lat: 50.5,
    lon: 14.0,
    statusTag: 'Operating Platforms',
    focusAreas: [
      'Cross-Border Mobility & Relocation Advisory',
      'Faith-Inspired Specialized E-Commerce',
      'European & Gulf Distribution Corridors',
    ],
    summary:
      'Strategic ownership in high-margin digital consumer platforms, ethical lifestyle retail, and international establishment services connecting Western Europe and the OIC.',
  },
  {
    id: 'africa',
    code: 'AFR · PIPE',
    region: 'Emerging Africa',
    role: 'Target Expansion Pipeline for Infrastructure Co-Investments',
    coordinatesLabel: '09.0765° N · 07.3986° E',
    lat: 9.0765,
    lon: 7.3986,
    statusTag: 'Target Expansion Pipeline',
    focusAreas: [
      'Real-Asset & Productive Infrastructure Co-Investments',
      'Partner-Operated Frontier Mandates',
      'Asset-Backed Zero-Debt Structures',
    ],
    summary:
      'Disciplined frontier pipeline evaluating real-asset co-investments and essential infrastructure partnerships across high-growth African corridors.',
  },
];

export const INFRASTRUCTURE_PILLARS = [
  {
    num: '01',
    title: 'Utility-Scale Solar Assets',
    body: 'Capital allocation into power generation facilities that strengthen regional grids and drive industrial productivity.',
  },
  {
    num: '02',
    title: 'Sustainable Impact',
    body: 'Fulfilling ecological stewardship by lowering carbon intensity while producing resilient financial returns.',
  },
  {
    num: '03',
    title: 'Strategic Partnerships',
    body: 'Structuring projects alongside local operational partners and engineering specialists to execute high-efficiency energy projects.',
  },
];

export const DIGITAL_DIVISIONS = [
  {
    code: 'DIVISION I · MOBILITY & ADVISORY',
    title: 'Cross-Border Mobility & Advisory',
    body: 'Infrastructure and digital services enabling international relocation, cross-border establishment, and asset positioning within the GCC and broader OIC region.',
    highlights: ['International Relocation Infrastructure', 'GCC & OIC Establishment', 'Cross-Border Positioning'],
  },
  {
    code: 'DIVISION II · ETHICAL RETAIL',
    title: 'Faith-Inspired E-Commerce & Retail',
    body: 'Digital consumer platforms focused on ethical retail, specialized lifestyle goods, and international distribution across Europe and the GCC.',
    highlights: ['Specialized Ethical Consumer Goods', 'Direct-to-Consumer Digital Architecture', 'Europe & GCC Fulfillment'],
  },
];

export const GOVERNANCE_CHARTER = [
  {
    code: 'CHARTER I',
    title: 'AAOIFI Standards',
    body: 'All investment structures, capital allocations, and equity participation framework strictly align with global Islamic finance standards (AAOIFI).',
  },
  {
    code: 'CHARTER II',
    title: 'Risk Management & Asset Protection',
    body: 'Portfolio diversification across defensive real-world infrastructure (energy) and cash-flow generating digital retail.',
  },
  {
    code: 'CHARTER III',
    title: 'Zero-Debt Leverage Model',
    body: 'Capital preservation prioritized through non-speculative, asset-backed equity deployment.',
  },
];

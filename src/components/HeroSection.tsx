import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { GEOGRAPHIC_MANDATES, RegionId } from '../data/mandateData';
import { SovereignGlobe3D } from './SovereignGlobe3D';

interface Props {
  isLight: boolean;
  activeRegion: RegionId;
  onSelectRegion: (id: RegionId) => void;
  onOpenDesk: () => void;
}

export const HeroSection: React.FC<Props> = ({
  isLight,
  activeRegion,
  onSelectRegion,
  onOpenDesk,
}) => {
  const currentMandate =
    GEOGRAPHIC_MANDATES.find((m) => m.id === activeRegion) || GEOGRAPHIC_MANDATES[0];

  return (
    <section
      id="top"
      className={`relative overflow-hidden pb-16 pt-8 transition-colors duration-300 sm:pb-28 sm:pt-16 ${
        isLight
          ? 'bg-ivory-50 bg-ivory-grid text-obsidian-950'
          : 'bg-obsidian-950 bg-sovereign-grid text-ivory-50'
      }`}
    >
      {/* Ambient Radial Gold Glow */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[620px] w-[620px] rounded-full opacity-25 blur-[130px]"
        style={{
          background: isLight
            ? 'radial-gradient(circle, rgba(207,166,87,0.38) 0%, rgba(252,251,248,0) 70%)'
            : 'radial-gradient(circle, rgba(223,190,120,0.48) 0%, rgba(4,6,9,0) 70%)',
        }}
      />

      <div className="relative mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10">
          {/* Left Institutional Copy (7 of 12 cols) */}
          <div className="lg:col-span-7">
            <div
              className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 ${
                isLight
                  ? 'border-gold-500/35 bg-white shadow-sm'
                  : 'border-gold-400/30 bg-obsidian-900/90'
              }`}
            >
              <span
                className={`font-mono text-[10.5px] font-semibold tracking-[0.2em] uppercase sm:text-[11px] ${
                  isLight ? 'text-gold-700' : 'text-gold-300'
                }`}
              >
                Iman Global · United Arab Emirates
              </span>
            </div>

            <h1
              className={`mt-5 font-serif text-[2.4rem] font-semibold leading-[1.06] tracking-[-0.01em] sm:mt-6 sm:text-[3.85rem] lg:text-[4.35rem] ${
                isLight ? 'text-obsidian-950' : 'text-ivory-50'
              }`}
            >
              Deploying Institutional Capital Across{' '}
              <span className={isLight ? 'text-gold-metallic-light italic' : 'text-gold-metallic italic'}>
                Emerging Markets &amp; Infrastructure.
              </span>
            </h1>

            <p
              className={`mt-5 max-w-2xl text-[16px] leading-[1.75] sm:mt-6 sm:text-[18px] ${
                isLight ? 'text-obsidian-800/85' : 'text-ivory-200/82'
              }`}
            >
              Headquartered in the United Arab Emirates, Iman Global is a private investment
              holding entity focused on real-asset infrastructure, renewable energy deployment,
              and scalable digital enterprises across South Asia, the GCC, and high-growth
              frontier markets.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:mt-9 sm:flex-row sm:items-center">
              <a
                href="#infrastructure"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gold-200/60 bg-gradient-to-b from-gold-100 via-gold-300 to-gold-500 px-8 py-4 text-[13.5px] font-bold tracking-[0.12em] text-obsidian-950 uppercase shadow-gold transition-all hover:brightness-110"
              >
                <span>Explore Mandates</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={onOpenDesk}
                className={`inline-flex items-center justify-center gap-2.5 rounded-full border px-7 py-4 text-[13.5px] font-semibold tracking-[0.1em] uppercase transition-all ${
                  isLight
                    ? 'border-gold-500/40 bg-white text-obsidian-900 hover:border-gold-600 hover:bg-ivory-100'
                    : 'border-gold-400/35 bg-obsidian-900/80 text-gold-100 hover:border-gold-300 hover:bg-obsidian-800'
                }`}
              >
                <span>Corporate Desk</span>
                <ArrowUpRight className={`h-4 w-4 ${isLight ? 'text-gold-700' : 'text-gold-300'}`} />
              </button>
            </div>

            {/* Active 3D Corridor Readout Bar */}
            <div
              className={`mt-9 rounded-2xl p-4 sm:mt-10 sm:p-5 ${
                isLight ? 'glass-ivory' : 'glass-obsidian'
              }`}
            >
              <div
                className={`flex flex-wrap items-center justify-between gap-2 border-b pb-3 ${
                  isLight ? 'border-gold-500/20' : 'border-gold-400/15'
                }`}
              >
                <span
                  className={`font-mono text-[11px] font-semibold tracking-[0.18em] uppercase ${
                    isLight ? 'text-gold-700' : 'text-gold-300'
                  }`}
                >
                  Active Corridor // {currentMandate.region}
                </span>
                <span
                  className={`font-mono text-[11px] ${
                    isLight ? 'text-obsidian-700/70' : 'text-ivory-200/65'
                  }`}
                >
                  {currentMandate.coordinatesLabel}
                </span>
              </div>
              <p
                className={`mt-3 text-[14px] leading-relaxed ${
                  isLight ? 'text-obsidian-900/90' : 'text-ivory-100/90'
                }`}
              >
                <strong className={`font-semibold ${isLight ? 'text-gold-700' : 'text-gold-200'}`}>
                  {currentMandate.role}:
                </strong>{' '}
                {currentMandate.summary}
              </p>
            </div>
          </div>

          {/* Right Live 3D Obsidian Globe + 24K Gold Rub el Hizb Gyroscope (5 of 12 cols) */}
          <div className="lg:col-span-5">
            <SovereignGlobe3D
              isLight={isLight}
              activeRegion={activeRegion}
              onSelectRegion={onSelectRegion}
            />
          </div>
        </div>

        {/* Institutional Structural Pillars Strip */}
        <div
          className={`mt-14 grid grid-cols-2 gap-3.5 border-t pt-9 sm:mt-16 sm:gap-4 sm:pt-10 lg:grid-cols-4 ${
            isLight ? 'border-gold-500/25' : 'border-gold-400/20'
          }`}
        >
          {[
            { label: 'Domicile & HQ', value: 'United Arab Emirates', sub: 'Registered Free Zone Authority' },
            { label: 'Primary Energy Focus', value: 'Pakistan Solar PV', sub: 'Utility-Scale Clean Infrastructure' },
            { label: 'Shariah Framework', value: 'AAOIFI Aligned', sub: 'Strict Islamic Finance Governance' },
            { label: 'Capital Structure', value: '0% Debt Leverage', sub: '100% Asset-Backed Equity' },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`rounded-2xl border px-4 py-4 sm:px-5 ${
                isLight
                  ? 'border-gold-500/25 bg-white shadow-ivory'
                  : 'border-gold-400/15 bg-obsidian-900/55'
              }`}
            >
              <span
                className={`font-mono text-[10px] tracking-[0.15em] uppercase sm:text-[10.5px] ${
                  isLight ? 'text-gold-700' : 'text-gold-300/80'
                }`}
              >
                {stat.label}
              </span>
              <p
                className={`mt-1.5 font-serif text-xl font-semibold sm:text-[1.65rem] ${
                  isLight ? 'text-obsidian-950' : 'text-ivory-50'
                }`}
              >
                {stat.value}
              </p>
              <p
                className={`mt-0.5 text-[12px] sm:text-[12.5px] ${
                  isLight ? 'text-obsidian-700/75' : 'text-ivory-200/65'
                }`}
              >
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

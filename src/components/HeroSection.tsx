import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { GEOGRAPHIC_MANDATES, RegionId } from '../data/mandateData';
import { SovereignGlobe3D } from './SovereignGlobe3D';

interface Props {
  activeRegion: RegionId;
  onSelectRegion: (id: RegionId) => void;
  onOpenDesk: () => void;
}

export const HeroSection: React.FC<Props> = ({
  activeRegion,
  onSelectRegion,
  onOpenDesk,
}) => {
  const currentMandate =
    GEOGRAPHIC_MANDATES.find((m) => m.id === activeRegion) || GEOGRAPHIC_MANDATES[0];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-obsidian-950 bg-sovereign-grid pb-20 pt-10 sm:pb-28 sm:pt-16"
    >
      {/* Ambient Radial Gold Glow */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[620px] w-[620px] rounded-full opacity-25 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(223,190,120,0.48) 0%, rgba(4,6,9,0) 70%)',
        }}
      />

      <div className="relative mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Institutional Copy (7 of 12 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/30 bg-obsidian-900/90 px-4 py-1.5">
              <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-gold-300 uppercase">
                Iman Global · United Arab Emirates
              </span>
            </div>

            <h1 className="mt-6 font-serif text-[2.65rem] font-semibold leading-[1.06] tracking-[-0.01em] text-ivory-50 sm:text-[3.85rem] lg:text-[4.35rem]">
              Deploying Institutional Capital Across{' '}
              <span className="text-gold-metallic italic">
                Emerging Markets &amp; Infrastructure.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-[16.5px] leading-[1.75] text-ivory-200/82 sm:text-[18px]">
              Headquartered in the United Arab Emirates, Iman Global is a private investment
              holding entity focused on real-asset infrastructure, renewable energy deployment,
              and scalable digital enterprises across South Asia, the GCC, and high-growth
              frontier markets.
            </p>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
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
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gold-400/35 bg-obsidian-900/80 px-7 py-4 text-[13.5px] font-semibold tracking-[0.1em] text-gold-100 uppercase transition-all hover:border-gold-300 hover:bg-obsidian-800"
              >
                <span>Corporate Desk</span>
                <ArrowUpRight className="h-4 w-4 text-gold-300" />
              </button>
            </div>

            {/* Active 3D Corridor Readout Bar */}
            <div className="mt-10 rounded-2xl glass-obsidian p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gold-400/15 pb-3">
                <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-gold-300 uppercase">
                  Active Corridor // {currentMandate.region}
                </span>
                <span className="font-mono text-[11px] text-ivory-200/65">
                  {currentMandate.coordinatesLabel}
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-ivory-100/90">
                <strong className="font-semibold text-gold-200">{currentMandate.role}:</strong>{' '}
                {currentMandate.summary}
              </p>
            </div>
          </div>

          {/* Right Live 3D Obsidian Globe + 24K Gold Rub el Hizb Gyroscope (5 of 12 cols) */}
          <div className="lg:col-span-5">
            <SovereignGlobe3D
              activeRegion={activeRegion}
              onSelectRegion={onSelectRegion}
            />
          </div>
        </div>

        {/* Institutional Structural Pillars Strip (100% factual, zero exaggerated claims) */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-gold-400/20 pt-10 lg:grid-cols-4">
          {[
            { label: 'Domicile & HQ', value: 'United Arab Emirates', sub: 'Registered Free Zone Authority' },
            { label: 'Primary Energy Focus', value: 'Pakistan Solar PV', sub: 'Utility-Scale Clean Infrastructure' },
            { label: 'Shariah Framework', value: 'AAOIFI Aligned', sub: 'Strict Islamic Finance Governance' },
            { label: 'Capital Structure', value: '0% Debt Leverage', sub: '100% Asset-Backed Equity' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gold-400/15 bg-obsidian-900/55 px-5 py-4"
            >
              <span className="font-mono text-[10.5px] tracking-[0.16em] text-gold-300/80 uppercase">
                {stat.label}
              </span>
              <p className="mt-1.5 font-serif text-2xl font-semibold text-ivory-50 sm:text-[1.65rem]">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[12.5px] text-ivory-200/65">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

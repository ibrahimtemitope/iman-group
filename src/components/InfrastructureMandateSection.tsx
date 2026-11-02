import React from 'react';
import { Sun, Leaf, Handshake } from 'lucide-react';
import { INFRASTRUCTURE_PILLARS } from '../data/mandateData';

interface Props {
  isLight: boolean;
}

export const InfrastructureMandateSection: React.FC<Props> = ({ isLight }) => {
  const icons = [Sun, Leaf, Handshake];

  return (
    <section
      id="infrastructure"
      className={`relative border-t py-20 transition-colors duration-300 sm:py-28 ${
        isLight
          ? 'border-gold-500/25 bg-ivory-100 text-obsidian-950'
          : 'border-gold-400/20 bg-obsidian-900 text-ivory-50'
      }`}
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p
              className={`font-mono text-[11.5px] font-semibold tracking-[0.2em] uppercase ${
                isLight ? 'text-gold-700' : 'text-gold-300'
              }`}
            >
              [ 01 // Infrastructure &amp; Clean Energy Mandate ]
            </p>
            <h2
              className={`mt-3 font-serif text-4xl font-semibold leading-[1.1] sm:text-5xl ${
                isLight ? 'text-obsidian-950' : 'text-ivory-50'
              }`}
            >
              South Asia Infrastructure &amp;{' '}
              <span className={isLight ? 'text-gold-metallic-light italic' : 'text-gold-metallic italic'}>
                Renewable Energy
              </span>
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p
              className={`text-[16px] leading-[1.75] ${
                isLight ? 'text-obsidian-800/85' : 'text-ivory-200/82'
              }`}
            >
              Iman Global actively directs private equity into utility-scale solar and clean
              energy infrastructure across South Asia, with a primary concentration on Pakistan.
              Driven by favorable macroeconomic tailwinds and a structural demand for reliable
              energy, our mandate focuses on building long-term, yield-generating energy assets.
            </p>
          </div>
        </div>

        {/* Golden-Hour Pakistan Utility-Scale Solar Showcase */}
        <div
          className={`mt-12 overflow-hidden rounded-[2rem] border p-2.5 sm:p-3.5 ${
            isLight
              ? 'border-gold-500/35 bg-white shadow-ivory'
              : 'border-gold-300/35 bg-obsidian-950 shadow-obsidian'
          }`}
        >
          <div className="relative overflow-hidden rounded-[1.45rem]">
            <img
              src="/assets/pakistan-solar-mandate.jpg"
              alt="Utility-scale solar photovoltaic power infrastructure in South Asia"
              className="aspect-[16/8.2] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/20 to-transparent" />

            <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-3 sm:inset-x-8 sm:bottom-7">
              <div>
                <span className="inline-block rounded-full border border-gold-300/45 bg-obsidian-950/85 px-3.5 py-1 font-mono text-[10px] font-semibold tracking-[0.18em] text-gold-200 uppercase backdrop-blur-md sm:text-[10.5px]">
                  Primary Concentration · Pakistan
                </span>
                <p className="mt-2 font-serif text-xl font-medium text-ivory-50 sm:text-3xl">
                  Long-Term, Yield-Generating Clean Power Infrastructure
                </p>
              </div>

              <div className="hidden rounded-xl border border-gold-400/30 bg-obsidian-950/85 px-4 py-2.5 font-mono text-[11px] text-gold-200 backdrop-blur-md sm:block">
                ASSET-BACKED PRIVATE EQUITY · GRID &amp; INDUSTRIAL PRODUCTIVITY
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {INFRASTRUCTURE_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx] || Sun;
            return (
              <article
                key={pillar.num}
                className={`flex flex-col justify-between rounded-[1.75rem] p-7 sm:p-8 ${
                  isLight
                    ? 'glass-ivory glass-ivory-hover'
                    : 'glass-obsidian glass-obsidian-hover'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[12px] font-semibold tracking-[0.2em] ${
                        isLight ? 'text-gold-700' : 'text-gold-300'
                      }`}
                    >
                      MANDATE // {pillar.num}
                    </span>
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                        isLight
                          ? 'border-gold-500/35 bg-ivory-100 text-gold-700'
                          : 'border-gold-300/35 bg-obsidian-950/80 text-gold-300'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3
                    className={`mt-6 font-serif text-[1.65rem] font-semibold leading-snug ${
                      isLight ? 'text-obsidian-950' : 'text-ivory-50'
                    }`}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    className={`mt-3 text-[15px] leading-[1.7] ${
                      isLight ? 'text-obsidian-800/85' : 'text-ivory-200/80'
                    }`}
                  >
                    {pillar.body}
                  </p>
                </div>

                <div className={`mt-7 ${isLight ? 'gold-hairline-light' : 'gold-hairline'}`} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

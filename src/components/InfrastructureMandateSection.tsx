import React from 'react';
import { Sun, Leaf, Handshake } from 'lucide-react';
import { INFRASTRUCTURE_PILLARS } from '../data/mandateData';

export const InfrastructureMandateSection: React.FC = () => {
  const icons = [Sun, Leaf, Handshake];

  return (
    <section
      id="infrastructure"
      className="relative border-t border-gold-400/20 bg-obsidian-900 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-mono text-[11.5px] font-semibold tracking-[0.2em] text-gold-300 uppercase">
              [ 01 // Infrastructure &amp; Clean Energy Mandate ]
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-[1.1] text-ivory-50 sm:text-5xl">
              South Asia Infrastructure &amp;{' '}
              <span className="text-gold-metallic italic">Renewable Energy</span>
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-[16px] leading-[1.75] text-ivory-200/82">
              Iman Global actively directs private equity into utility-scale solar and clean
              energy infrastructure across South Asia, with a primary concentration on Pakistan.
              Driven by favorable macroeconomic tailwinds and a structural demand for reliable
              energy, our mandate focuses on building long-term, yield-generating energy assets.
            </p>
          </div>
        </div>

        {/* Golden-Hour Pakistan Utility-Scale Solar Showcase */}
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-gold-300/35 bg-obsidian-950 p-2.5 shadow-obsidian sm:p-3.5">
          <div className="relative overflow-hidden rounded-[1.45rem]">
            <img
              src="/assets/pakistan-solar-mandate.jpg"
              alt="Utility-scale solar photovoltaic power infrastructure in South Asia"
              className="aspect-[16/8.2] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/20 to-transparent" />

            <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-end justify-between gap-4 sm:inset-x-8 sm:bottom-7">
              <div>
                <span className="inline-block rounded-full border border-gold-300/45 bg-obsidian-950/85 px-3.5 py-1 font-mono text-[10.5px] font-semibold tracking-[0.18em] text-gold-200 uppercase backdrop-blur-md">
                  Primary Concentration · Pakistan
                </span>
                <p className="mt-2 font-serif text-2xl font-medium text-ivory-50 sm:text-3xl">
                  Long-Term, Yield-Generating Clean Power Infrastructure
                </p>
              </div>

              <div className="rounded-xl border border-gold-400/30 bg-obsidian-950/85 px-4 py-2.5 font-mono text-[11px] text-gold-200 backdrop-blur-md">
                ASSET-BACKED PRIVATE EQUITY · GRID &amp; INDUSTRIAL PRODUCTIVITY
              </div>
            </div>
          </div>
        </div>

        {/* 3 Liquid-Glass & Brushed-Gold Pillars */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {INFRASTRUCTURE_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx] || Sun;
            return (
              <article
                key={pillar.num}
                className="glass-obsidian glass-obsidian-hover flex flex-col justify-between rounded-[1.75rem] p-7 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[12px] font-semibold tracking-[0.2em] text-gold-300">
                      MANDATE // {pillar.num}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-300/35 bg-obsidian-950/80 text-gold-300">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-6 font-serif text-[1.65rem] font-semibold leading-snug text-ivory-50">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.7] text-ivory-200/80">
                    {pillar.body}
                  </p>
                </div>

                <div className="mt-7 gold-hairline" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

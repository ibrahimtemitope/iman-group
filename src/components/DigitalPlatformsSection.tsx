import React from 'react';
import { Compass, Globe2, ShoppingBag } from 'lucide-react';
import { DIGITAL_DIVISIONS } from '../data/mandateData';

interface Props {
  isLight?: boolean;
}

export const DigitalPlatformsSection: React.FC<Props> = ({ isLight = false }) => {
  return (
    <section
      id="platforms"
      className={`relative border-t border-gold-500/30 bg-ivory-grid py-20 text-obsidian-900 sm:py-28 ${
        isLight ? 'bg-ivory-50' : 'bg-ivory-100'
      }`}
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Editorial Overview + UAE Holding Architecture Visual */}
          <div className="lg:col-span-5">
            <p className="font-mono text-[11.5px] font-semibold tracking-[0.2em] text-gold-700 uppercase">
              [ 02 // Consumer &amp; Digital Platforms ]
            </p>

            <h2 className="mt-3 font-serif text-4xl font-semibold leading-[1.1] text-obsidian-900 sm:text-5xl">
              Cross-Border Digital Platforms &amp;{' '}
              <span className="italic text-gold-600">Consumer Assets</span>
            </h2>

            <p className="mt-5 text-[16px] leading-[1.75] text-obsidian-800/85">
              Beyond core infrastructure, Iman Global maintains strategic ownership in high-margin
              digital platform companies serving the global Muslim demographic.
            </p>

            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-gold-500/35 bg-white p-2.5 shadow-ivory">
              <div className="relative overflow-hidden rounded-[1.25rem]">
                <img
                  src="/assets/uae-hq-architecture.jpg"
                  alt="United Arab Emirates financial architecture at dusk"
                  className="aspect-[4/3.1] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-ivory-50">
                  <span className="font-mono text-[10.5px] tracking-[0.16em] text-gold-200 uppercase">
                    GCC · Western Europe · OIC Corridors
                  </span>
                  <Globe2 className="h-4 w-4 text-gold-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Private-Equity Operating Divisions */}
          <div className="space-y-6 lg:col-span-7">
            {DIGITAL_DIVISIONS.map((div, idx) => {
              const Icon = idx === 0 ? Compass : ShoppingBag;
              return (
                <article
                  key={div.code}
                  className="rounded-[2rem] border border-gold-500/30 bg-ivory-50 p-7 shadow-ivory transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-600/60 sm:p-10"
                >
                  <div className="flex items-center justify-between gap-4 border-b border-ivory-300 pb-4">
                    <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-gold-700 uppercase">
                      {div.code}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-500/30 bg-ivory-100 text-gold-700">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-serif text-3xl font-semibold text-obsidian-900">
                    {div.title}
                  </h3>

                  <p className="mt-3 text-[15.5px] leading-[1.75] text-obsidian-800/85">
                    {div.body}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {div.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-gold-500/25 bg-ivory-100 px-3.5 py-1 text-[12px] font-semibold text-obsidian-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

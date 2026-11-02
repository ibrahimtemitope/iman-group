import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { GEOGRAPHIC_MANDATES, RegionId } from '../data/mandateData';

interface Props {
  isLight: boolean;
  activeRegion: RegionId;
  onSelectRegion: (id: RegionId) => void;
  onOpenDesk: () => void;
}

export const GeographicFootprintSection: React.FC<Props> = ({
  isLight,
  activeRegion,
  onSelectRegion,
  onOpenDesk,
}) => {
  const selected =
    GEOGRAPHIC_MANDATES.find((m) => m.id === activeRegion) || GEOGRAPHIC_MANDATES[0];

  return (
    <section
      id="footprint"
      className={`border-t border-gold-500/30 bg-ivory-grid py-20 text-obsidian-900 sm:py-28 ${
        isLight ? 'bg-ivory-50' : 'bg-ivory-100'
      }`}
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[11.5px] font-semibold tracking-[0.2em] text-gold-700 uppercase">
              [ 04 // Geographic Allocation ]
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-[1.1] text-obsidian-900 sm:text-5xl">
              Geographic Asset <span className="italic text-gold-600">Footprint</span>
            </h2>
          </div>

          <p className="max-w-md text-[14.5px] text-obsidian-800/80">
            Select any jurisdiction below to inspect Iman Global’s regional mandate and operating
            posture.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Left 4 Jurisdiction Rows */}
          <div className="space-y-3.5 lg:col-span-7">
            {GEOGRAPHIC_MANDATES.map((m) => {
              const isSelected = m.id === activeRegion;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => onSelectRegion(m.id)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all sm:p-6 ${
                    isSelected
                      ? isLight
                        ? 'border-gold-600 bg-ivory-200/75 text-obsidian-950 shadow-ivory'
                        : 'border-obsidian-900 bg-obsidian-950 text-ivory-50 shadow-obsidian'
                      : 'border-gold-500/30 bg-white text-obsidian-900 hover:border-gold-600/60'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`font-mono text-[11px] font-semibold tracking-[0.18em] uppercase ${
                        isSelected && !isLight ? 'text-gold-300' : 'text-gold-700'
                      }`}
                    >
                      {m.code} · {m.coordinatesLabel}
                    </span>
                    <span
                      className={`rounded-full px-3 py-0.5 text-[11px] font-semibold ${
                        isSelected && !isLight
                          ? 'border border-gold-300/40 bg-obsidian-800 text-gold-200'
                          : 'bg-ivory-100 text-obsidian-800 border border-gold-500/25'
                      }`}
                    >
                      {m.statusTag}
                    </span>
                  </div>

                  <h3 className="mt-2 font-serif text-2xl font-semibold sm:text-[1.7rem]">
                    {m.region}
                  </h3>
                  <p
                    className={`mt-1 text-[14.5px] ${
                      isSelected && !isLight ? 'text-ivory-200/85' : 'text-obsidian-800/80'
                    }`}
                  >
                    {m.role}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Regional Dossier Panel */}
          <div className="lg:col-span-5">
            <div
              className={`flex h-full flex-col justify-between rounded-[2rem] border p-7 sm:p-9 ${
                isLight
                  ? 'border-gold-500/40 bg-white text-obsidian-950 shadow-ivory'
                  : 'border-gold-400/35 bg-obsidian-950 text-ivory-50 shadow-obsidian'
              }`}
            >
              <div>
                <div
                  className={`flex items-center justify-between border-b pb-4 ${
                    isLight ? 'border-gold-500/20' : 'border-gold-400/20'
                  }`}
                >
                  <span
                    className={`inline-flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.18em] uppercase ${
                      isLight ? 'text-gold-700' : 'text-gold-300'
                    }`}
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    Regional Mandate Dossier
                  </span>
                  <span
                    className={`font-mono text-[11px] ${
                      isLight ? 'text-obsidian-700/70' : 'text-ivory-200/65'
                    }`}
                  >
                    {selected.coordinatesLabel}
                  </span>
                </div>

                <h3
                  className={`mt-6 font-serif text-3xl font-semibold sm:text-4xl ${
                    isLight ? 'text-obsidian-950' : 'text-ivory-50'
                  }`}
                >
                  {selected.region}
                </h3>
                <p
                  className={`mt-2 text-[15px] font-semibold ${
                    isLight ? 'text-gold-700' : 'text-gold-200'
                  }`}
                >
                  {selected.role}
                </p>

                <p
                  className={`mt-4 text-[15px] leading-[1.75] ${
                    isLight ? 'text-obsidian-800/85' : 'text-ivory-200/82'
                  }`}
                >
                  {selected.summary}
                </p>

                <div
                  className={`mt-6 space-y-2.5 border-t pt-5 ${
                    isLight ? 'border-gold-500/20' : 'border-gold-400/15'
                  }`}
                >
                  {selected.focusAreas.map((fa) => (
                    <div
                      key={fa}
                      className={`flex items-center gap-2.5 text-[13.5px] ${
                        isLight ? 'text-obsidian-900' : 'text-ivory-100'
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                          isLight ? 'bg-gold-600' : 'bg-gold-300'
                        }`}
                      />
                      <span>{fa}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenDesk}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold-300/50 bg-gradient-to-b from-gold-100 via-gold-300 to-gold-500 px-6 py-3.5 text-[12.5px] font-bold tracking-[0.14em] text-obsidian-950 uppercase transition-all hover:brightness-110"
              >
                <span>Inquire Regarding {selected.code}</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

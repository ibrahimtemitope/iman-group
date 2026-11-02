import React from 'react';
import { Scale, Shield, Lock } from 'lucide-react';
import { GOVERNANCE_CHARTER } from '../data/mandateData';
import { GovernanceVault3D } from './GovernanceVault3D';

interface Props {
  isLight: boolean;
}

export const GovernanceCharterSection: React.FC<Props> = ({ isLight }) => {
  const icons = [Scale, Shield, Lock];

  return (
    <section
      id="governance"
      className={`relative overflow-hidden border-t py-20 transition-colors duration-300 sm:py-28 ${
        isLight
          ? 'border-gold-500/25 bg-ivory-100 bg-ivory-grid text-obsidian-950'
          : 'border-gold-400/25 bg-obsidian-950 bg-sovereign-grid text-ivory-50'
      }`}
    >
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left: Live 3D Brushed-Gold AAOIFI Sovereign Sculpture */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div
              className={`rounded-[2.25rem] p-6 sm:p-8 ${
                isLight ? 'glass-ivory' : 'glass-obsidian'
              }`}
            >
              <GovernanceVault3D isLight={isLight} />
              <p
                className={`mt-4 text-center text-[13px] leading-relaxed ${
                  isLight ? 'text-obsidian-700/80' : 'text-ivory-200/70'
                }`}
              >
                Operating as a value-driven family office and holding entity, Iman Global enforces
                rigorous corporate governance and non-speculative capital stewardship.
              </p>
            </div>
          </div>

          {/* Right: 3 Governance Charter Pillars */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <p
              className={`font-mono text-[11.5px] font-semibold tracking-[0.2em] uppercase ${
                isLight ? 'text-gold-700' : 'text-gold-300'
              }`}
            >
              [ 03 // Governance &amp; Shariah Compliance ]
            </p>

            <h2
              className={`mt-3 font-serif text-4xl font-semibold leading-[1.1] sm:text-5xl ${
                isLight ? 'text-obsidian-950' : 'text-ivory-50'
              }`}
            >
              Institutional Governance &amp;{' '}
              <span className={isLight ? 'text-gold-metallic-light italic' : 'text-gold-metallic italic'}>
                AAOIFI Alignment
              </span>
            </h2>

            <p
              className={`mt-4 max-w-2xl text-[16px] leading-[1.75] ${
                isLight ? 'text-obsidian-800/85' : 'text-ivory-200/82'
              }`}
            >
              Operating as a value-driven family office and holding entity, Iman Global enforces
              rigorous corporate governance standards:
            </p>

            <div className="mt-8 space-y-4">
              {GOVERNANCE_CHARTER.map((item, idx) => {
                const Icon = icons[idx] || Scale;
                return (
                  <article
                    key={item.code}
                    className={`rounded-2xl p-6 sm:p-7 ${
                      isLight
                        ? 'glass-ivory glass-ivory-hover'
                        : 'glass-obsidian glass-obsidian-hover'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                          isLight
                            ? 'border-gold-500/35 bg-ivory-100 text-gold-700'
                            : 'border-gold-300/35 bg-obsidian-950 text-gold-300'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span
                          className={`font-mono text-[10.5px] font-semibold tracking-[0.2em] uppercase ${
                            isLight ? 'text-gold-700' : 'text-gold-300'
                          }`}
                        >
                          {item.code}
                        </span>
                        <h3
                          className={`mt-1 font-serif text-2xl font-semibold ${
                            isLight ? 'text-obsidian-950' : 'text-ivory-50'
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`mt-2 text-[15px] leading-[1.7] ${
                            isLight ? 'text-obsidian-800/85' : 'text-ivory-200/80'
                          }`}
                        >
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

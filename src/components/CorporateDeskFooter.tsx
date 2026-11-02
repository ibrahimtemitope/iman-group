import React, { useState } from 'react';
import { Check, Copy, Mail, Send, X } from 'lucide-react';
import { SovereignCrest } from './SovereignHeader';

interface Props {
  isLight: boolean;
  deskOpen: boolean;
  onCloseDesk: () => void;
  onOpenDesk: () => void;
}

export const CorporateDeskFooter: React.FC<Props> = ({
  isLight,
  deskOpen,
  onCloseDesk,
  onOpenDesk,
}) => {
  const [copied, setCopied] = useState(false);
  const [orgName, setOrgName] = useState('');
  const [mandateTopic, setMandateTopic] = useState('Pakistan Solar & Clean Energy Co-Investment');
  const [message, setMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard?.writeText('contact@imanglobal.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleCompose = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Corporate Desk Inquiry] ${mandateTopic}${orgName ? ` — ${orgName}` : ''}`
    );
    const body = encodeURIComponent(
      `Assalamu Alaykum / Dear Iman Global Corporate Desk,\n\nOrganization / Principal: ${
        orgName || 'N/A'
      }\nMandate Area: ${mandateTopic}\n\nInquiry Summary:\n${message}\n`
    );
    window.location.href = `mailto:contact@imanglobal.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <footer
        className={`border-t transition-colors duration-300 ${
          isLight
            ? 'border-gold-500/30 bg-ivory-200/65 text-obsidian-950'
            : 'border-gold-400/25 bg-obsidian-950 text-ivory-100'
        }`}
      >
        {/* Executive Corporate Desk Banner */}
        <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div
            className={`rounded-[2.25rem] p-7 sm:p-12 ${
              isLight ? 'glass-ivory' : 'glass-obsidian'
            }`}
          >
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span
                  className={`font-mono text-[11px] font-semibold tracking-[0.2em] uppercase ${
                    isLight ? 'text-gold-700' : 'text-gold-300'
                  }`}
                >
                  Institutional &amp; Operational Counterparties
                </span>
                <h2
                  className={`mt-3 font-serif text-3xl font-semibold sm:text-4xl ${
                    isLight ? 'text-obsidian-950' : 'text-ivory-50'
                  }`}
                >
                  Connect With the{' '}
                  <span
                    className={
                      isLight ? 'text-gold-metallic-light italic' : 'text-gold-metallic italic'
                    }
                  >
                    Corporate Desk
                  </span>
                </h2>
                <p
                  className={`mt-3 max-w-xl text-[15px] leading-relaxed ${
                    isLight ? 'text-obsidian-800/85' : 'text-ivory-200/80'
                  }`}
                >
                  For utility-scale solar engineering partnerships in Pakistan, institutional
                  co-investment mandates, or digital portfolio inquiries, reach our UAE corporate
                  desk directly.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
                <button
                  type="button"
                  onClick={onOpenDesk}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-200/60 bg-gradient-to-b from-gold-100 via-gold-300 to-gold-500 px-7 py-4 text-[13px] font-bold tracking-[0.12em] text-obsidian-950 uppercase shadow-gold transition-all hover:brightness-110"
                >
                  <Mail className="h-4 w-4" />
                  <span>Transmit Memorandum</span>
                </button>

                <button
                  type="button"
                  onClick={copyEmail}
                  className={`inline-flex items-center justify-center gap-2 rounded-full border px-6 py-4 font-mono text-[12px] transition-colors ${
                    isLight
                      ? 'border-gold-500/40 bg-white text-obsidian-900 hover:border-gold-600'
                      : 'border-gold-400/35 bg-obsidian-900 text-gold-200 hover:border-gold-300'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className={`h-4 w-4 ${isLight ? 'text-gold-700' : 'text-gold-300'}`} />
                      <span>Copied Desk Email</span>
                    </>
                  ) : (
                    <>
                      <Copy className={`h-4 w-4 ${isLight ? 'text-gold-700' : 'text-gold-300'}`} />
                      <span>contact@imanglobal.com</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Exact Official Holding Footer */}
          <div
            className={`mt-14 flex flex-col justify-between gap-8 border-t pt-10 md:flex-row md:items-center ${
              isLight ? 'border-gold-500/25' : 'border-gold-400/15'
            }`}
          >
            <div className="flex items-start gap-4">
              <SovereignCrest isLight={isLight} className="h-11 w-11 shrink-0" />
              <div>
                <p
                  className={`font-serif text-xl font-semibold tracking-[0.14em] uppercase ${
                    isLight ? 'text-obsidian-950' : 'text-ivory-50'
                  }`}
                >
                  Iman Global Holding
                </p>
                <p
                  className={`mt-1 text-[13.5px] ${
                    isLight ? 'text-obsidian-800/80' : 'text-ivory-200/75'
                  }`}
                >
                  Registered Free Zone Authority | United Arab Emirates
                </p>
                <p
                  className={`mt-0.5 font-mono text-[11.5px] tracking-wider ${
                    isLight ? 'text-gold-700' : 'text-gold-300'
                  }`}
                >
                  Shariah Governance: AAOIFI Aligned
                </p>
              </div>
            </div>

            <div className="text-left md:text-right">
              <p
                className={`font-mono text-[12px] tracking-wider uppercase ${
                  isLight ? 'text-obsidian-900' : 'text-gold-200'
                }`}
              >
                Corporate Desk:{' '}
                <a
                  href="mailto:contact@imanglobal.com"
                  className={`underline underline-offset-4 ${
                    isLight
                      ? 'decoration-gold-600/50 hover:text-gold-700'
                      : 'decoration-gold-400/50 hover:text-ivory-50'
                  }`}
                >
                  contact@imanglobal.com
                </a>
              </p>
              <p
                className={`mt-2 text-[13px] ${
                  isLight ? 'text-obsidian-700/70' : 'text-ivory-200/60'
                }`}
              >
                © 2026 Iman Global. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Corporate Desk Modal */}
      {deskOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md">
          <div
            className={`w-full max-w-lg rounded-[2rem] p-6 sm:p-8 ${
              isLight ? 'glass-ivory text-obsidian-950' : 'glass-obsidian text-ivory-50'
            }`}
          >
            <div
              className={`flex items-center justify-between border-b pb-4 ${
                isLight ? 'border-gold-500/25' : 'border-gold-400/20'
              }`}
            >
              <div>
                <span
                  className={`font-mono text-[10.5px] tracking-[0.2em] uppercase ${
                    isLight ? 'text-gold-700' : 'text-gold-300'
                  }`}
                >
                  Iman Global Holding · UAE
                </span>
                <h3 className="mt-0.5 font-serif text-2xl font-semibold">
                  Corporate Desk Dispatch
                </h3>
              </div>
              <button
                type="button"
                onClick={onCloseDesk}
                aria-label="Close modal"
                className={`rounded-full border p-2 ${
                  isLight
                    ? 'border-gold-500/30 text-obsidian-800 hover:border-gold-600'
                    : 'border-gold-400/25 text-ivory-200 hover:border-gold-300 hover:text-gold-200'
                }`}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleCompose} className="mt-5 space-y-4">
              <div>
                <label
                  className={`block font-mono text-[11px] tracking-wider uppercase ${
                    isLight ? 'text-gold-700' : 'text-gold-200'
                  }`}
                >
                  Entity / Principal Name
                </label>
                <input
                  type="text"
                  required
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="e.g., Meridian Solar EPC / Family Office"
                  className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-[14px] focus:outline-none ${
                    isLight
                      ? 'border-gold-500/35 bg-white text-obsidian-950 placeholder-obsidian-700/40 focus:border-gold-600'
                      : 'border-gold-400/25 bg-obsidian-950/90 text-ivory-50 placeholder-ivory-200/35 focus:border-gold-300'
                  }`}
                />
              </div>

              <div>
                <label
                  className={`block font-mono text-[11px] tracking-wider uppercase ${
                    isLight ? 'text-gold-700' : 'text-gold-200'
                  }`}
                >
                  Mandate Desk
                </label>
                <select
                  value={mandateTopic}
                  onChange={(e) => setMandateTopic(e.target.value)}
                  className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-[14px] focus:outline-none ${
                    isLight
                      ? 'border-gold-500/35 bg-white text-obsidian-950 focus:border-gold-600'
                      : 'border-gold-400/25 bg-obsidian-950/90 text-ivory-50 focus:border-gold-300'
                  }`}
                >
                  <option>Pakistan Solar &amp; Clean Energy Co-Investment</option>
                  <option>Utility-Scale EPC &amp; Technical Partnership</option>
                  <option>Cross-Border Digital &amp; Consumer Platforms</option>
                  <option>Emerging Africa Infrastructure Pipeline</option>
                  <option>General Institutional Governance Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  className={`block font-mono text-[11px] tracking-wider uppercase ${
                    isLight ? 'text-gold-700' : 'text-gold-200'
                  }`}
                >
                  Executive Summary
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Provide a brief overview of your project, capital mandate, or operational proposal..."
                  className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-[14px] focus:outline-none ${
                    isLight
                      ? 'border-gold-500/35 bg-white text-obsidian-950 placeholder-obsidian-700/40 focus:border-gold-600'
                      : 'border-gold-400/25 bg-obsidian-950/90 text-ivory-50 placeholder-ivory-200/35 focus:border-gold-300'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold-200/60 bg-gradient-to-b from-gold-100 via-gold-300 to-gold-500 px-6 py-3.5 text-[13px] font-bold tracking-[0.14em] text-obsidian-950 uppercase shadow-gold transition-all hover:brightness-110"
              >
                <Send className="h-4 w-4" />
                <span>Open Addressed to contact@imanglobal.com</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

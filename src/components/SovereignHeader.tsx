import React, { useState } from 'react';
import { ArrowUpRight, Menu, ShieldCheck, X } from 'lucide-react';

interface Props {
  onOpenDesk: () => void;
}

export const SovereignCrest: React.FC<{ className?: string }> = ({ className = 'h-9 w-9' }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="crestGold" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FCF8EE" />
        <stop offset="45%" stopColor="#DFBE78" />
        <stop offset="100%" stopColor="#946E2B" />
      </linearGradient>
    </defs>
    <rect
      x="4"
      y="4"
      width="56"
      height="56"
      rx="12"
      fill="#070A10"
      stroke="url(#crestGold)"
      strokeOpacity="0.55"
      strokeWidth="1.3"
    />
    <rect x="18" y="18" width="28" height="28" stroke="url(#crestGold)" strokeWidth="1.9" />
    <rect
      x="18"
      y="18"
      width="28"
      height="28"
      transform="rotate(45 32 32)"
      stroke="url(#crestGold)"
      strokeWidth="1.9"
    />
    <circle cx="32" cy="32" r="5" stroke="url(#crestGold)" strokeWidth="1.6" fill="#070A10" />
    <circle cx="32" cy="32" r="1.9" fill="#FCF8EE" />
  </svg>
);

export const SovereignHeader: React.FC<Props> = ({ onOpenDesk }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: '#infrastructure', label: 'Infrastructure & Solar' },
    { href: '#platforms', label: 'Digital Platforms' },
    { href: '#governance', label: 'Shariah Governance' },
    { href: '#footprint', label: 'Asset Footprint' },
  ];

  return (
    <>
      {/* Top Institutional Jurisdiction Bar */}
      <div className="border-b border-gold-400/15 bg-obsidian-950 px-4 py-2 text-[11px] font-medium tracking-[0.16em] text-gold-200/85 uppercase">
        <div className="mx-auto flex max-w-[1340px] flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
            <span>United Arab Emirates · Private Investment Holding</span>
          </div>
          <div className="hidden items-center gap-5 font-mono text-[10.5px] text-gold-200/75 sm:flex">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-gold-300" />
              AAOIFI Aligned
            </span>
            <span>·</span>
            <span>Zero-Debt Equity Mandate</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Smoked-Obsidian Glass Header */}
      <header className="sticky top-0 z-40 border-b border-gold-400/20 bg-obsidian-950/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-[1340px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a href="#top" className="group flex items-center gap-3.5">
            <SovereignCrest className="h-10 w-10 transition-transform duration-500 group-hover:scale-105" />
            <div>
              <span className="block font-serif text-[21px] font-semibold tracking-[0.18em] text-ivory-50 uppercase">
                Iman Global
              </span>
              <span className="block font-mono text-[9.5px] tracking-[0.22em] text-gold-300/85 uppercase">
                Holding · UAE
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13.5px] font-medium tracking-wide text-ivory-200/80 transition-colors hover:text-gold-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenDesk}
              className="inline-flex items-center gap-2 rounded-full border border-gold-300/55 bg-gradient-to-b from-gold-200 via-gold-300 to-gold-500 px-5 py-2.5 text-[12.5px] font-bold tracking-wider text-obsidian-950 uppercase shadow-gold transition-all hover:brightness-110"
            >
              <span>Corporate Desk</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Toggle navigation"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/30 bg-obsidian-900 text-gold-200 lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-gold-400/20 bg-obsidian-950/98 px-5 py-4 lg:hidden">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3.5 py-2.5 text-[15px] font-medium text-ivory-100 hover:bg-obsidian-800 hover:text-gold-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

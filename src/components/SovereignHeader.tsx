import React, { useId, useState } from 'react';
import { ArrowUpRight, Menu, Moon, ShieldCheck, Sun, X } from 'lucide-react';

interface Props {
  isLight: boolean;
  onToggleTheme: () => void;
  onOpenDesk: () => void;
}

export const SovereignCrest: React.FC<{ className?: string; isLight?: boolean }> = ({
  className = 'h-9 w-9',
  isLight = false,
}) => {
  const gradId = useId();
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={isLight ? '#D4AC5D' : '#FCF8EE'} />
          <stop offset="45%" stopColor={isLight ? '#A87C31' : '#DFBE78'} />
          <stop offset="100%" stopColor="#70511D" />
        </linearGradient>
      </defs>
      <rect
        x="4"
        y="4"
        width="56"
        height="56"
        rx="12"
        fill={isLight ? '#FCFBF8' : '#070A10'}
        stroke={`url(#${gradId})`}
        strokeOpacity={isLight ? '0.75' : '0.55'}
        strokeWidth="1.4"
      />
      <rect x="18" y="18" width="28" height="28" stroke={`url(#${gradId})`} strokeWidth="1.9" />
      <rect
        x="18"
        y="18"
        width="28"
        height="28"
        transform="rotate(45 32 32)"
        stroke={`url(#${gradId})`}
        strokeWidth="1.9"
      />
      <circle
        cx="32"
        cy="32"
        r="5"
        stroke={`url(#${gradId})`}
        strokeWidth="1.6"
        fill={isLight ? '#FCFBF8' : '#070A10'}
      />
      <circle cx="32" cy="32" r="1.9" fill={isLight ? '#946E2B' : '#FCF8EE'} />
    </svg>
  );
};

export const SovereignHeader: React.FC<Props> = ({
  isLight,
  onToggleTheme,
  onOpenDesk,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: '#infrastructure', label: 'Infrastructure & Solar' },
    { href: '#platforms', label: 'Digital Platforms' },
    { href: '#governance', label: 'Shariah Governance' },
    { href: '#footprint', label: 'Asset Footprint' },
  ];

  return (
    <>
      {/* Slim Top Institutional Jurisdiction Bar */}
      <div
        className={`border-b px-3 py-1.5 text-[9.5px] font-medium tracking-[0.14em] uppercase sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.16em] ${
          isLight
            ? 'border-gold-500/20 bg-ivory-200/80 text-obsidian-800'
            : 'border-gold-400/15 bg-obsidian-950 text-gold-200/85'
        }`}
      >
        <div className="mx-auto flex max-w-[1340px] items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 truncate">
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                isLight ? 'bg-gold-600' : 'bg-gold-300'
              }`}
            />
            <span className="truncate">UAE · Private Investment Holding</span>
          </div>
          <div
            className={`hidden items-center gap-5 font-mono text-[10.5px] sm:flex ${
              isLight ? 'text-gold-700' : 'text-gold-200/75'
            }`}
          >
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              AAOIFI Aligned
            </span>
            <span>·</span>
            <span>Zero-Debt Equity Mandate</span>
          </div>
        </div>
      </div>

      {/* Slim, Sleek Sticky Header (Compact 54px on Android/Mobile, 70px on Desktop) */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-xl transition-colors duration-300 ${
          isLight
            ? 'border-gold-500/25 bg-ivory-50/90'
            : 'border-gold-400/20 bg-obsidian-950/88'
        }`}
      >
        <div className="mx-auto flex h-[54px] max-w-[1340px] items-center justify-between gap-2 px-3.5 sm:h-[70px] sm:gap-4 sm:px-6 lg:px-8">
          <a href="#top" className="group flex min-w-0 items-center gap-2 sm:gap-3.5">
            <SovereignCrest
              isLight={isLight}
              className="h-7 w-7 shrink-0 transition-transform duration-500 group-hover:scale-105 sm:h-10 sm:w-10"
            />
            <div className="min-w-0 leading-none">
              <span
                className={`block truncate font-serif text-[14.5px] font-semibold tracking-[0.12em] uppercase sm:text-[20px] sm:tracking-[0.18em] ${
                  isLight ? 'text-obsidian-950' : 'text-ivory-50'
                }`}
              >
                Iman Global
              </span>
              <span
                className={`mt-0.5 block font-mono text-[8px] tracking-[0.18em] uppercase sm:text-[9.5px] sm:tracking-[0.22em] ${
                  isLight ? 'text-gold-700' : 'text-gold-300/85'
                }`}
              >
                Holding · UAE
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[13.5px] font-medium tracking-wide transition-colors ${
                  isLight
                    ? 'text-obsidian-800/85 hover:text-gold-700'
                    : 'text-ivory-200/80 hover:text-gold-200'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
            {/* Light / Dark Theme Toggle */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isLight ? 'Switch to dark obsidian theme' : 'Switch to light ivory theme'}
              title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              className={`inline-flex h-8 w-8 items-center justify-center rounded-full border transition-all sm:h-9 sm:w-9 ${
                isLight
                  ? 'border-gold-500/35 bg-ivory-100 text-obsidian-900 hover:border-gold-600'
                  : 'border-gold-400/30 bg-obsidian-900 text-gold-200 hover:border-gold-300'
              }`}
            >
              {isLight ? <Moon className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> : <Sun className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
            </button>

            <button
              type="button"
              onClick={onOpenDesk}
              className="inline-flex items-center gap-1 rounded-full border border-gold-300/60 bg-gradient-to-b from-gold-200 via-gold-300 to-gold-500 px-3 py-1.5 text-[10.5px] font-bold tracking-wider text-obsidian-950 uppercase shadow-gold transition-all hover:brightness-110 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-[12px]"
            >
              <span className="sm:hidden">Desk</span>
              <span className="hidden sm:inline">Corporate Desk</span>
              <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Toggle navigation"
              className={`inline-flex h-8 w-8 items-center justify-center rounded-full border sm:h-9 sm:w-9 lg:hidden ${
                isLight
                  ? 'border-gold-500/35 bg-ivory-100 text-obsidian-900'
                  : 'border-gold-400/30 bg-obsidian-900 text-gold-200'
              }`}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div
            className={`border-t px-4 py-3 lg:hidden ${
              isLight
                ? 'border-gold-500/20 bg-ivory-50/98'
                : 'border-gold-400/20 bg-obsidian-950/98'
            }`}
          >
            <div className="flex flex-col space-y-0.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-3 py-2 text-[14px] font-medium ${
                    isLight
                      ? 'text-obsidian-900 hover:bg-ivory-200/70 hover:text-gold-700'
                      : 'text-ivory-100 hover:bg-obsidian-800 hover:text-gold-200'
                  }`}
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

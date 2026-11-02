import React, { useEffect, useState } from 'react';
import { RegionId } from './data/mandateData';
import { SovereignHeader } from './components/SovereignHeader';
import { HeroSection } from './components/HeroSection';
import { InfrastructureMandateSection } from './components/InfrastructureMandateSection';
import { DigitalPlatformsSection } from './components/DigitalPlatformsSection';
import { GovernanceCharterSection } from './components/GovernanceCharterSection';
import { GeographicFootprintSection } from './components/GeographicFootprintSection';
import { CorporateDeskFooter } from './components/CorporateDeskFooter';

export const App: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<RegionId>('pakistan');
  const [deskOpen, setDeskOpen] = useState(false);
  const [isLight, setIsLight] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem('iman-global-theme') === 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isLight) {
      root.classList.add('theme-light');
    } else {
      root.classList.remove('theme-light');
    }
    try {
      window.localStorage.setItem('iman-global-theme', isLight ? 'light' : 'dark');
    } catch {
      // Ignore storage errors
    }
  }, [isLight]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isLight ? 'bg-ivory-50 text-obsidian-950' : 'bg-obsidian-950 text-ivory-100'
      }`}
    >
      <SovereignHeader
        isLight={isLight}
        onToggleTheme={() => setIsLight((prev) => !prev)}
        onOpenDesk={() => setDeskOpen(true)}
      />

      <main>
        <HeroSection
          isLight={isLight}
          activeRegion={activeRegion}
          onSelectRegion={setActiveRegion}
          onOpenDesk={() => setDeskOpen(true)}
        />

        <InfrastructureMandateSection isLight={isLight} />

        <DigitalPlatformsSection isLight={isLight} />

        <GovernanceCharterSection isLight={isLight} />

        <GeographicFootprintSection
          isLight={isLight}
          activeRegion={activeRegion}
          onSelectRegion={setActiveRegion}
          onOpenDesk={() => setDeskOpen(true)}
        />
      </main>

      <CorporateDeskFooter
        isLight={isLight}
        deskOpen={deskOpen}
        onCloseDesk={() => setDeskOpen(false)}
        onOpenDesk={() => setDeskOpen(true)}
      />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
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

  return (
    <div className="min-h-screen bg-obsidian-950 text-ivory-100">
      <SovereignHeader onOpenDesk={() => setDeskOpen(true)} />

      <main>
        <HeroSection
          activeRegion={activeRegion}
          onSelectRegion={setActiveRegion}
          onOpenDesk={() => setDeskOpen(true)}
        />

        <InfrastructureMandateSection />

        <DigitalPlatformsSection />

        <GovernanceCharterSection />

        <GeographicFootprintSection
          activeRegion={activeRegion}
          onSelectRegion={setActiveRegion}
          onOpenDesk={() => setDeskOpen(true)}
        />
      </main>

      <CorporateDeskFooter
        deskOpen={deskOpen}
        onCloseDesk={() => setDeskOpen(false)}
        onOpenDesk={() => setDeskOpen(true)}
      />
    </div>
  );
};

export default App;

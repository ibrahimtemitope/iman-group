import React from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DestinationsAndPillarsSection } from './components/DestinationsAndPillarsSection';
import { BudgetAnalyzerSection } from './components/BudgetAnalyzerSection';
import { NoFundsSection } from './components/NoFundsSection';
import { ProcessAndAdviceSection } from './components/ProcessAndAdviceSection';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';
import { MobileBottomDock } from './components/MobileBottomDock';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen bg-ivory-50 text-ink">
        <Navbar />

        <main>
          {/* 1. Ultra-Crisp Hero (1 short headline + 1 short subtext + Sharjah/Indonesia pills) */}
          <HeroSection />

          {/* 2. Equal 50/50 Sharjah (UAE) & Indonesia + 3 Compact Service Cards */}
          <DestinationsAndPillarsSection />

          {/* 3. Interactive #budget-analyzer (Sharjah UAE <-> Indonesia) */}
          <BudgetAnalyzerSection />

          {/* 4. Dedicated Compact "Ingen opsparing endnu?" Guidance Section */}
          <NoFundsSection />

          {/* 5. 5 Simple Steps + 6 Tight "Gode Råd" Cards + 3 Quick FAQs */}
          <ProcessAndAdviceSection />

          {/* 6. Free 30-Min Non-Binding Calendly Consultation */}
          <ConsultationSection />
        </main>

        <Footer />

        <MobileBottomDock />
      </div>
    </AppProvider>
  );
};

export default App;

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HeroSection: React.FC = () => {
  const { t, jumpToBudgetCorridor, scrollToBookingWithSituation } = useApp();
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      src: '/images/sharjah-waterfront-mosque.jpg',
      caption: t.hero.galleryCaptions.waterfront,
    },
    {
      src: '/images/sharjah-mosque-courtyard.jpg',
      caption: t.hero.galleryCaptions.mosque,
    },
    {
      src: '/images/sharjah-residence.jpg',
      caption: t.hero.galleryCaptions.residence,
    },
  ];

  return (
    <section id="top" className="bg-ivory-50 pb-12 pt-7 sm:pb-16 sm:pt-11">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Short, Sharp, Warm */}
          <div className="lg:col-span-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-sage-700">
              {t.hero.eyebrow}
            </p>

            <h1 className="heading-hero mt-3 font-medium text-navy-900">
              {t.hero.headline}
            </h1>

            <p className="body-prose mt-4 max-w-xl">
              {t.hero.subtext}
            </p>

            {/* Quick Clickable Sharjah & Indonesia Pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => jumpToBudgetCorridor('sharjah')}
                className="rounded-full border border-sage-200 bg-sage-50 px-3.5 py-1.5 text-[13px] font-semibold text-sage-800 transition-colors hover:bg-sage-100"
              >
                {t.hero.sharjahPill}
              </button>
              <button
                type="button"
                onClick={() => jumpToBudgetCorridor('indonesia')}
                className="rounded-full border border-ivory-300 bg-white px-3.5 py-1.5 text-[13px] font-semibold text-navy-900 transition-colors hover:bg-ivory-100"
              >
                {t.hero.indonesiaPill}
              </button>
            </div>

            {/* Dual CTAs */}
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => scrollToBookingWithSituation('exploring')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sage-700 px-6 py-3.5 text-[15px] font-semibold text-ivory-50 transition-colors hover:bg-sage-800"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#budget-analyzer"
                className="inline-flex items-center justify-center rounded-full border border-ivory-300 bg-white px-6 py-3.5 text-[15px] font-semibold text-navy-900 transition-colors hover:border-ivory-400 hover:bg-ivory-100"
              >
                {t.hero.secondaryCta}
              </a>
            </div>

            {/* Free 30-Min Call Badge */}
            <p className="mt-3.5 inline-flex items-center gap-2 text-[14px] font-medium text-sage-800">
              <Clock className="h-4 w-4 shrink-0 text-sage-700" />
              <span>{t.hero.freeMeetingNote}</span>
            </p>
          </div>

          {/* Right Column: Clean Visual Frame */}
          <div className="lg:col-span-6">
            <div className="rounded-[1.6rem] border border-ivory-300/90 bg-white p-2.5 shadow-warm sm:p-3">
              <div className="overflow-hidden rounded-[1.25rem] bg-ivory-100">
                <img
                  src={heroSlides[activeSlide].src}
                  alt={heroSlides[activeSlide].caption}
                  className="aspect-[16/10.5] w-full object-cover"
                />
              </div>

              <div className="mt-2.5 grid grid-cols-3 gap-2">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`overflow-hidden rounded-xl border transition-all ${
                      idx === activeSlide
                        ? 'border-sage-700 ring-2 ring-sage-700/20'
                        : 'border-ivory-300 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={slide.src}
                      alt={slide.caption}
                      className="aspect-[16/9] w-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <div className="mt-2.5 flex items-center gap-2.5 rounded-xl bg-ivory-50 px-3.5 py-2.5 text-[13.5px] font-medium text-navy-900">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-sage-700" />
                <span>{t.hero.localAgentsLine}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

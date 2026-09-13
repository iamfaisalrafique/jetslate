'use client';

import React from 'react';
import { 
  Users, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  MessageSquare, 
  PhoneCall, 
  Hammer, 
  CloudSun,
  Globe,
  Clock
} from 'lucide-react';
import { JETSLATE_BRAND, JETSLATE_LOCATIONS, JETSLATE_PROCESS_STEPS } from '../data/jetslateAgencyData';

interface AboutTeamSectionProps {
  onOpenConsultation: () => void;
}

export const AboutTeamSection: React.FC<AboutTeamSectionProps> = ({ onOpenConsultation }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'PhoneCall': return <PhoneCall className="w-5 h-5" />;
      case 'Hammer': return <Hammer className="w-5 h-5" />;
      case 'CloudSun': return <CloudSun className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 border-b border-jet_black-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header & About Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bright_gold/10 border border-bright_gold/30 text-xs font-bold text-bright_gold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-bright_gold" />
              <span>About Jet Slate Enterprises</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-platinum-900 tracking-tight font-space leading-[1.15]">
              Defining Website Design Excellence
            </h2>

            <div className="space-y-4 text-platinum-400 text-sm sm:text-base leading-relaxed">
              <p>
                At <strong className="text-platinum-900">Jet Slate Enterprises</strong>, we are passionate about creating 
                exceptional online experiences. As a leading full-service AI and website design agency, we specialize in 
                translating your unique brand story into captivating digital platforms.
              </p>
              <p>
                Our team of skilled professionals is dedicated to delivering outstanding results. We merge creativity with 
                technical expertise to craft visually stunning websites that engage your visitors from the very first click. 
                With a track record of success, we have empowered clients across various industries with websites that not only 
                look impressive but also drive tangible revenue and conversions.
              </p>
              <p className="text-platinum-500">
                <strong className="text-bright_gold">Stop chasing that next project:</strong> start living your life while we 
                engineer your digital engine.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl bg-gold-gradient text-onyx-100 font-bold text-xs shadow-gold-glow cursor-pointer transition-all hover:scale-[1.02] flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Strategy Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-onyx-100 border border-jet_black-400 shadow-dark-card space-y-6">
              <h3 className="text-xl font-bold text-platinum-900 font-space flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-bright_gold" />
                <span>The Jet Slate Standard</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-bright_gold/15 text-bright_gold flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-platinum-900 block">Performance-First Architecture:</strong>
                    Every website built by Jet Slate scores 95+ on Google Lighthouse with sub-0.4s LCP.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-bright_gold/15 text-bright_gold flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-platinum-900 block">Future-Proof Clean Architecture:</strong>
                    Clean hooks & modular components mean your theme and plugins update with zero breaking changes.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-bright_gold/15 text-bright_gold flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-platinum-900 block">AI & Data Science Scalability:</strong>
                    Headless scraping, automated catalog ingestion, and intelligent workflows built into WordPress.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Agency Workflow */}
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-bright_gold">
              The Collaboration Path
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-platinum-900 font-space">
              Let’s Get To Know Each Other!
            </h3>
            <p className="text-xs sm:text-sm text-platinum-400">
              A transparent, high-efficiency journey from initial concept to Cloud 9 launch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {JETSLATE_PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-3xl bg-onyx-100 border border-jet_black-400 space-y-4 hover:border-jet_black-500 transition-colors shadow-dark-card"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-bright_gold font-mono">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-jet_black-200 text-bright_gold flex items-center justify-center border border-jet_black-400">
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <h4 className="text-sm font-bold text-platinum-900 font-space">
                  {step.title}
                </h4>

                <p className="text-xs text-platinum-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Agency Locations: Kailua, Las Vegas, Olympia */}
        <div className="space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-bright_gold">
              Nationwide Presence
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-platinum-900 font-space">
              Our 3 Agency Hubs
            </h3>
            <p className="text-xs sm:text-sm text-platinum-400">
              Serving clients globally from Hawaii to Washington and Nevada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JETSLATE_LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="rounded-3xl overflow-hidden bg-onyx-100 border border-jet_black-400 hover:border-jet_black-500 transition-colors flex flex-col justify-between shadow-dark-card"
              >
                <div className="h-44 relative">
                  <img
                    src={loc.image}
                    alt={loc.city}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-onyx-100/90 backdrop-blur-sm border border-jet_black-400 text-[10px] font-bold text-bright_gold uppercase">
                    {loc.regionType}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-onyx-100/90 text-[10px] text-platinum-400 font-mono flex items-center gap-1 border border-jet_black-400">
                    <Clock className="w-3 h-3 text-bright_gold" />
                    <span>{loc.localTimezone}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <h4 className="text-lg font-bold text-platinum-900 font-space">
                      {loc.city} — {loc.state}
                    </h4>
                    <p className="text-xs text-bright_gold font-medium">
                      {loc.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-platinum-400">
                    {loc.addressSummary}
                  </p>

                  <div className="text-[10px] font-mono text-platinum-400 pt-1 border-t border-jet_black-400">
                    Geo: {loc.coordinates}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

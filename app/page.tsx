'use client';

import React, { useState } from 'react';
import { Navigation, NavTabType } from '@/src/components/Navigation';
import { HeroAgencySection } from '@/src/components/HeroAgencySection';
import { ServicesAgencySection } from '@/src/components/ServicesAgencySection';
import { SpeedAiLab } from '@/src/components/SpeedAiLab';
import { CaseStudiesSection } from '@/src/components/CaseStudiesSection';
import { AboutTeamSection } from '@/src/components/AboutTeamSection';
import { ContactSection } from '@/src/components/ContactSection';
import { FooterAgency } from '@/src/components/FooterAgency';
import { ConsultationModal } from '@/src/components/ConsultationModal';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<NavTabType>('overview');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPreset, setConsultationPreset] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (preset?: string) => {
    setConsultationPreset(preset);
    setIsConsultationOpen(true);
  };

  const handleOpenSpeedTest = () => {
    setActiveTab('speed-ai');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-onyx-200 text-platinum-500 flex flex-col font-sans">
      {/* Sticky Navigation Header */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenConsultation={handleOpenConsultation}
        onOpenSpeedTest={handleOpenSpeedTest}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {activeTab === 'overview' && (
          <>
            <HeroAgencySection
              onOpenConsultation={handleOpenConsultation}
              onExploreServices={() => {
                setActiveTab('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenSpeedTest={handleOpenSpeedTest}
            />
            <ServicesAgencySection
              onOpenConsultation={handleOpenConsultation}
              onOpenSpeedTest={handleOpenSpeedTest}
            />
            <SpeedAiLab
              onOpenConsultation={handleOpenConsultation}
            />
            <CaseStudiesSection
              onOpenConsultation={handleOpenConsultation}
            />
            <AboutTeamSection
              onOpenConsultation={() => handleOpenConsultation()}
            />
            <ContactSection
              initialServicePreset={consultationPreset}
            />
          </>
        )}

        {activeTab === 'services' && (
          <ServicesAgencySection
            onOpenConsultation={handleOpenConsultation}
            onOpenSpeedTest={handleOpenSpeedTest}
          />
        )}

        {activeTab === 'speed-ai' && (
          <SpeedAiLab
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {activeTab === 'portfolio' && (
          <CaseStudiesSection
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {activeTab === 'about' && (
          <AboutTeamSection
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {activeTab === 'contact' && (
          <ContactSection
            initialServicePreset={consultationPreset}
          />
        )}
      </main>

      {/* Direct 20-Minute Strategy Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        servicePreset={consultationPreset}
      />

      {/* Official Footer with verified jetslate.com links & copyright */}
      <FooterAgency
        setActiveTab={setActiveTab}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenSpeedTest={handleOpenSpeedTest}
      />
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Navigation } from '@/src/components/Navigation';
import { ServicesAgencySection } from '@/src/components/ServicesAgencySection';
import { FooterAgency } from '@/src/components/FooterAgency';
import { ConsultationModal } from '@/src/components/ConsultationModal';

export default function ServicesPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPreset, setConsultationPreset] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (preset?: string) => {
    setConsultationPreset(preset);
    setIsConsultationOpen(true);
  };

  const handleOpenSpeedTest = () => {
    window.location.href = '/speed-ai';
  };

  return (
    <div className="min-h-screen bg-onyx-200 text-platinum-500 flex flex-col font-sans">
      <Navigation
        activeTab="services"
        onOpenConsultation={handleOpenConsultation}
        onOpenSpeedTest={handleOpenSpeedTest}
      />

      <main className="flex-1 py-6">
        <ServicesAgencySection
          onOpenConsultation={handleOpenConsultation}
          onOpenSpeedTest={handleOpenSpeedTest}
        />
      </main>

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        servicePreset={consultationPreset}
      />

      <FooterAgency
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenSpeedTest={handleOpenSpeedTest}
      />
    </div>
  );
}

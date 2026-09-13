'use client';

import React, { useState } from 'react';
import { Navigation } from '@/src/components/Navigation';
import { SpeedAiLab } from '@/src/components/SpeedAiLab';
import { FooterAgency } from '@/src/components/FooterAgency';
import { ConsultationModal } from '@/src/components/ConsultationModal';

export default function SpeedAiPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPreset, setConsultationPreset] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (preset?: string) => {
    setConsultationPreset(preset);
    setIsConsultationOpen(true);
  };

  const handleOpenSpeedTest = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-onyx-200 text-platinum-500 flex flex-col font-sans">
      <Navigation
        activeTab="speed-ai"
        onOpenConsultation={handleOpenConsultation}
        onOpenSpeedTest={handleOpenSpeedTest}
      />

      <main className="flex-1 py-6">
        <SpeedAiLab
          onOpenConsultation={handleOpenConsultation}
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

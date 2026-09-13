'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Code2, 
  Layers, 
  BarChart3, 
  Calendar,
  Calculator,
  ChevronRight
} from 'lucide-react';
import { JETSLATE_BRAND, JETSLATE_SERVICES } from '../data/jetslateAgencyData';

interface HeroAgencySectionProps {
  onOpenConsultation: (servicePreset?: string) => void;
  onExploreServices: () => void;
  onOpenSpeedTest: () => void;
}

export const HeroAgencySection: React.FC<HeroAgencySectionProps> = ({
  onOpenConsultation,
  onExploreServices,
  onOpenSpeedTest
}) => {
  // Interactive Project Scope Estimator state
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([
    'wordpress-hub',
    'custom-web-dev'
  ]);
  const [projectTimeline, setProjectTimeline] = useState<'rush' | 'standard' | 'flexible'>('standard');
  const [carePlanAddon, setCarePlanAddon] = useState(true);
  const [activeVisualIndex, setActiveVisualIndex] = useState(0);

  const toggleService = (id: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((s) => s !== id) : prev) : [...prev, id]
    );
  };

  // Calculate quick estimates
  const baseCost = selectedServiceIds.reduce((sum, id) => {
    const s = JETSLATE_SERVICES.find((serv) => serv.id === id);
    if (!s) return sum;
    const num = parseInt(s.startingPrice.replace(/[^0-9]/g, ''), 10) || 500;
    return sum + num;
  }, 0);

  const timelineMultiplier = projectTimeline === 'rush' ? 1.25 : projectTimeline === 'flexible' ? 0.95 : 1.0;
  const estimatedTotal = Math.round(baseCost * timelineMultiplier) + (carePlanAddon ? 99 : 0);

  return (
    <section className="relative overflow-hidden pt-12 pb-20 border-b border-jet_black-400">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-bright_gold/10 via-transparent to-transparent pointer-events-none blur-3xl -z-10" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-saffron/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Main Agency Banner */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bright_gold/10 border border-bright_gold/30 text-xs font-bold text-bright_gold uppercase tracking-wider animate-in fade-in">
            <Sparkles className="w-4 h-4 text-bright_gold" />
            <span>{JETSLATE_BRAND.tagline}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-platinum-900 tracking-tight font-space leading-[1.1]">
            Transform Your Digital Presence With{' '}
            <span className="bg-gradient-to-r from-bright_gold via-saffron to-platinum-900 bg-clip-text text-transparent">
              Jet Slate
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-platinum-400 leading-relaxed max-w-3xl mx-auto">
            {JETSLATE_BRAND.mission}
          </p>

          <div className="p-4 rounded-2xl bg-onyx-100 border border-jet_black-400 text-platinum-400 text-sm max-w-2xl mx-auto flex items-center gap-3 shadow-dark-card">
            <div className="w-9 h-9 rounded-xl bg-bright_gold/15 text-bright_gold flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <p className="text-left text-xs sm:text-sm">
              <strong className="text-platinum-900 font-semibold">Good design means higher conversions:</strong>{' '}
              {JETSLATE_BRAND.philosophy}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultation()}
              className="px-6 py-3.5 rounded-xl bg-gold-gradient hover:opacity-95 text-onyx-100 font-bold text-sm flex items-center gap-2.5 shadow-gold-glow cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule 20-Min Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenSpeedTest}
              className="px-6 py-3.5 rounded-xl bg-jet_black-300 hover:bg-jet_black-400 text-platinum-900 border border-jet_black-400 font-bold text-sm flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Zap className="w-4 h-4 text-bright_gold" />
              <span>Test Your Site Speed (Free)</span>
            </button>
          </div>
        </div>

        {/* 3D Graphic Visual Showcase */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-bright_gold animate-ping" />
              <span className="text-xs font-mono uppercase tracking-widest text-bright_gold font-bold">
                Jet Slate 3D Visual Architecture Showcase
              </span>
            </div>

            {/* Visual Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-onyx-100 border border-jet_black-400 text-xs">
              {[
                { title: 'AI Neural Core', idx: 0 },
                { title: 'Autonomous Agents Lab', idx: 1 },
                { title: 'Enterprise Cloud Matrix', idx: 2 }
              ].map((tab) => (
                <button
                  key={tab.idx}
                  onClick={() => setActiveVisualIndex(tab.idx)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                    activeVisualIndex === tab.idx
                      ? 'bg-gold-gradient text-onyx-100 font-bold shadow-md shadow-bright_gold/20'
                      : 'text-platinum-400 hover:text-platinum-900 hover:bg-jet_black-300'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Master 3D Image Display Box */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-bright_gold/30 bg-onyx-100 shadow-2xl shadow-bright_gold/10 group">
            {/* Ambient Lighting Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-onyx-300 via-transparent to-transparent pointer-events-none z-10" />

            <div className="aspect-[16/9] w-full relative overflow-hidden bg-onyx-300">
              <img
                src={[
                  '/assets/images/hero-neural-core.jpg',
                  '/assets/images/ai-workflow-mesh.jpg',
                  '/assets/images/showcase-enterprise-saas.jpg'
                ][activeVisualIndex]}
                alt={[
                  'Jet Slate AI Neural Core 3D Graphic',
                  'Autonomous AI Agents Laboratory 3D Graphic',
                  'Enterprise Custom Software Cloud 3D Graphic'
                ][activeVisualIndex]}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating Info Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-6 z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 bg-gradient-to-t from-onyx-200/95 via-onyx-200/80 to-transparent backdrop-blur-sm border-t border-jet_black-400/80">
              <div className="space-y-1 max-w-xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-bright_gold/20 border border-bright_gold/40 text-[11px] font-mono text-bright_gold font-bold">
                  <span>
                    {[
                      '3D ART: JET SLATE NEURAL ARCHITECTURE',
                      '3D ART: AUTONOMOUS AGENT MESH',
                      '3D ART: HIGH-PERFORMANCE CLOUD MATRICES'
                    ][activeVisualIndex]}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-platinum-900 font-space">
                  {[
                    'AI Neural Core & Real-Time Intelligence Engine',
                    'Autonomous Agent Ecosystems & Robotic Workflows',
                    'Custom Enterprise Software & Next.js 15 Architectures'
                  ][activeVisualIndex]}
                </h3>
                <p className="text-xs text-platinum-400">
                  {[
                    'Custom tailored AI models, LLM pipelines, and neural workflows rendered in high-fidelity obsidian and gold.',
                    'Intelligent agents collaborating across tasks, reducing manual operations by 90% with precision accuracy.',
                    'Zero-compromise high-speed architecture delivering 100/100 Core Web Vitals and edge scalability.'
                  ][activeVisualIndex]}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenConsultation()}
                  className="px-4 py-2.5 rounded-xl bg-gold-gradient hover:opacity-95 text-onyx-100 font-bold text-xs flex items-center gap-1.5 shadow-gold-glow cursor-pointer transition-all"
                >
                  <span>Build This For Your Brand</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Instant Proposal & Scope Estimator */}
        <div className="p-6 sm:p-8 rounded-3xl bg-onyx-100 border border-jet_black-400 shadow-dark-card relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-jet_black-400">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bright_gold">
                <Calculator className="w-4 h-4" />
                <span>Interactive Agency Project Planner</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-platinum-900 font-space mt-1">
                Configure Your Custom Scope & Proposal
              </h3>
              <p className="text-xs text-platinum-400 mt-1">
                Select your desired WordPress architecture, custom web, mobile apps, SEO, or AI automation requirements for an instant scope breakdown.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-platinum-400">Project Urgency:</span>
              <div className="flex items-center gap-1 bg-onyx-300 p-1 rounded-xl border border-jet_black-400 text-xs">
                {(['standard', 'rush', 'flexible'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setProjectTimeline(t)}
                    className={`px-3 py-1.5 rounded-lg capitalize font-medium transition-all cursor-pointer ${
                      projectTimeline === t
                        ? 'bg-gold-gradient text-onyx-100 font-bold shadow-sm'
                        : 'text-platinum-400 hover:text-platinum-900'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
            {/* Service selector column */}
            <div className="lg:col-span-2 space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-platinum-400">
                1. Select Services Needed
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {JETSLATE_SERVICES.map((serv) => {
                  const isSelected = selectedServiceIds.includes(serv.id);
                  return (
                    <button
                      key={serv.id}
                      onClick={() => toggleService(serv.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-start justify-between gap-3 ${
                        isSelected
                          ? 'bg-bright_gold/10 border-bright_gold text-platinum-900 shadow-md shadow-bright_gold/10'
                          : 'bg-jet_black-200 border-jet_black-400 text-platinum-400 hover:border-jet_black-500 hover:text-platinum-900'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-platinum-900">{serv.title}</span>
                        </div>
                        <p className="text-[11px] text-platinum-400 line-clamp-2">
                          {serv.shortDesc}
                        </p>
                        <div className="text-[10px] font-mono text-bright_gold font-semibold pt-1">
                          Est. starting at {serv.startingPrice} • {serv.timeline}
                        </div>
                      </div>

                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected ? 'bg-gold-gradient border-bright_gold text-onyx-100' : 'border-jet_black-400 bg-onyx-200'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* WordPress Care Plan Addon Toggle */}
              <div className="p-4 rounded-xl bg-jet_black-200 border border-jet_black-400 flex items-center justify-between gap-4 mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-bright_gold/15 text-bright_gold flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-platinum-900">Include Proactive WordPress Care Retainer</h4>
                    <p className="text-[11px] text-platinum-400">
                      24/7 uptime monitoring, daily S3 backups, and staging update shield ($99/mo).
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setCarePlanAddon(!carePlanAddon)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    carePlanAddon
                      ? 'bg-gold-gradient text-onyx-100 shadow-sm'
                      : 'bg-jet_black-400 text-platinum-400 hover:text-platinum-900'
                  }`}
                >
                  {carePlanAddon ? 'Included' : 'Add ($99/mo)'}
                </button>
              </div>
            </div>

            {/* Scope Summary Box */}
            <div className="p-6 rounded-2xl bg-onyx-300 border border-jet_black-400 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-jet_black-400 pb-3">
                  <span className="text-xs text-platinum-400 font-semibold uppercase">Proposal Summary</span>
                  <span className="text-[10px] bg-bright_gold/15 text-bright_gold px-2 py-0.5 rounded font-bold">
                    {selectedServiceIds.length} Services Selected
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  {selectedServiceIds.map((id) => {
                    const serv = JETSLATE_SERVICES.find((s) => s.id === id);
                    if (!serv) return null;
                    return (
                      <div key={id} className="flex items-center justify-between text-platinum-400">
                        <span className="truncate pr-2">• {serv.title}</span>
                        <span className="font-mono text-bright_gold shrink-0">{serv.startingPrice}</span>
                      </div>
                    );
                  })}
                  {carePlanAddon && (
                    <div className="flex items-center justify-between text-platinum-400">
                      <span>• WordPress Care Plan (1st Mo)</span>
                      <span className="font-mono text-bright_gold">$99/mo</span>
                    </div>
                  )}
                </div>

                <div className="p-3 rounded-xl bg-onyx-100 border border-jet_black-400 space-y-1 text-xs">
                  <div className="flex justify-between text-platinum-400 text-[11px]">
                    <span>Estimated Delivery:</span>
                    <span className="font-semibold text-platinum-900">
                      {projectTimeline === 'rush' ? '2–4 business days' : '5–8 business days'}
                    </span>
                  </div>
                  <div className="flex justify-between text-platinum-400 text-[11px]">
                    <span>Code Guarantee:</span>
                    <span className="font-semibold text-bright_gold">100% Update-Proof</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-jet_black-400">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-platinum-400 font-medium">Estimated Project Budget:</span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-platinum-900 font-mono font-space">
                      ${estimatedTotal.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-platinum-400 block">approx. starting investment</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const serviceNames = selectedServiceIds
                      .map((id) => JETSLATE_SERVICES.find((s) => s.id === id)?.title)
                      .filter(Boolean)
                      .join(', ');
                    onOpenConsultation(serviceNames);
                  }}
                  className="w-full py-3.5 rounded-xl bg-gold-gradient hover:opacity-95 text-onyx-100 font-bold text-xs flex items-center justify-center gap-2 shadow-gold-glow cursor-pointer transition-all hover:scale-[1.01]"
                >
                  <span>Submit Scope & Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <p className="text-[10px] text-center text-platinum-400">
                  No commitment required • Joy & Faisal respond within hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Agency Pillars / Proof Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          <div className="p-5 rounded-2xl bg-onyx-100 border border-jet_black-400 text-center space-y-1 shadow-dark-card">
            <span className="text-2xl sm:text-3xl font-black text-platinum-900 font-space">
              99.8%
            </span>
            <p className="text-xs text-platinum-400 font-medium">Core Web Vitals Pass Rate</p>
            <span className="text-[10px] text-bright_gold font-semibold block">Sub-0.4s Google LCP</span>
          </div>

          <div className="p-5 rounded-2xl bg-onyx-100 border border-jet_black-400 text-center space-y-1 shadow-dark-card">
            <span className="text-2xl sm:text-3xl font-black text-platinum-900 font-space">
              450+
            </span>
            <p className="text-xs text-platinum-400 font-medium">Websites Engineered</p>
            <span className="text-[10px] text-bright_gold font-semibold block">Kadence, Divi, Elementor</span>
          </div>

          <div className="p-5 rounded-2xl bg-onyx-100 border border-jet_black-400 text-center space-y-1 shadow-dark-card">
            <span className="text-2xl sm:text-3xl font-black text-platinum-900 font-space">
              3 Hubs
            </span>
            <p className="text-xs text-platinum-400 font-medium">Nationwide Agency Presence</p>
            <span className="text-[10px] text-bright_gold font-semibold block">Hawaii • Nevada • Washington</span>
          </div>

          <div className="p-5 rounded-2xl bg-onyx-100 border border-jet_black-400 text-center space-y-1 shadow-dark-card">
            <span className="text-2xl sm:text-3xl font-black text-platinum-900 font-space">
              100%
            </span>
            <p className="text-xs text-platinum-400 font-medium">Clean Code Guarantee</p>
            <span className="text-[10px] text-bright_gold font-semibold block">Future-Proof Clean Stacks</span>
          </div>
        </div>
      </div>
    </section>
  );
};

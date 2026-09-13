'use client';

import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Palette, 
  LayoutGrid, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  ExternalLink,
  ChevronRight,
  HelpCircle,
  TrendingUp,
  Smartphone
} from 'lucide-react';
import { JETSLATE_SERVICES } from '../data/jetslateAgencyData';
import { AgencyService, ServiceCategory } from '../types';

interface ServicesAgencySectionProps {
  onOpenConsultation: (serviceTitle?: string) => void;
  onOpenSpeedTest: () => void;
}

export const ServicesAgencySection: React.FC<ServicesAgencySectionProps> = ({
  onOpenConsultation,
  onOpenSpeedTest
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [activeDetailService, setActiveDetailService] = useState<AgencyService | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'wordpress', label: 'WordPress Hub' },
    { id: 'custom-web', label: 'Custom Web' },
    { id: 'seo', label: 'SEO & Growth' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI Solutions' }
  ] as const;

  const filteredServices = selectedCategory === 'all'
    ? JETSLATE_SERVICES
    : JETSLATE_SERVICES.filter((s) => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 border-b border-jet_black-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bright_gold/10 border border-bright_gold/30 text-xs font-bold text-bright_gold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bright_gold" />
            <span>Specialized Agency Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-platinum-900 tracking-tight font-space">
            Our Core Services
          </h2>

          <p className="text-sm sm:text-base text-platinum-400 leading-relaxed">
            Learning the art of proper design will increase your revenue simply because{' '}
            <strong className="text-platinum-900 font-semibold">good design converts visitors into customers</strong>. 
            Explore our specialized development, performance, and AI services.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gold-gradient text-onyx-100 font-bold shadow-md shadow-bright_gold/20'
                  : 'bg-jet_black-200 text-platinum-400 hover:text-platinum-900 hover:bg-jet_black-300 border border-jet_black-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid: All 5 archives visible side-by-side in single screen view */}
        <div className={`grid gap-3 items-stretch ${
          filteredServices.length === 1 
            ? 'grid-cols-1 max-w-md mx-auto' 
            : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
        }`}>
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-4 rounded-2xl bg-onyx-100 border border-jet_black-400 flex flex-col justify-between hover:border-bright_gold/60 transition-all hover:shadow-gold-glow group shadow-dark-card"
            >
              <div className="space-y-2.5">
                {/* Icon + Highlight badge */}
                <div className="flex items-start justify-between gap-2">
                  <div className="w-9 h-9 rounded-xl bg-bright_gold/15 text-bright_gold flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm shadow-bright_gold/15 shrink-0">
                    {getServiceIcon(service.icon)}
                  </div>
                  {service.highlightBadge && (
                    <span className="text-[9px] bg-bright_gold/15 text-bright_gold border border-bright_gold/30 font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap">
                      {service.highlightBadge}
                    </span>
                  )}
                </div>

                {/* Title and description */}
                <div>
                  <h3 className="text-sm font-bold text-platinum-900 font-space group-hover:text-bright_gold transition-colors leading-snug min-h-[2.4rem] line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-[11px] text-platinum-400 mt-1 line-clamp-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Archive modules badge or key deliverables */}
                {service.subModules ? (
                  <div className="p-2 rounded-xl bg-jet_black-200/90 border border-jet_black-400 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-wider text-bright_gold font-bold">
                        5 Unified Modules
                      </span>
                      <span className="text-[9px] text-platinum-400 font-mono">Archive</span>
                    </div>
                    <p className="text-[10px] text-platinum-300 font-medium leading-tight">
                      Kadence • Divi • Elementor • Speed • Care
                    </p>
                  </div>
                ) : (
                  <div className="space-y-1 pt-1 border-t border-jet_black-400/80">
                    <ul className="space-y-1">
                      {service.deliverables.slice(0, 2).map((deliv, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-[11px] text-platinum-400">
                          <CheckCircle2 className="w-3 h-3 text-bright_gold shrink-0 mt-0.5" />
                          <span className="leading-tight line-clamp-1">{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Card Footer: Starting Price + Action Buttons */}
              <div className="space-y-2 pt-3 mt-3 border-t border-jet_black-400">
                <div className="flex items-baseline justify-between text-xs">
                  <span className="text-[10px] text-platinum-400">From:</span>
                  <span className="font-mono font-bold text-platinum-900 text-xs">
                    {service.startingPrice}{' '}
                    <span className="text-[9px] text-platinum-400 font-normal">({service.timeline})</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => setActiveDetailService(service)}
                    className="py-1.5 px-2 rounded-lg bg-jet_black-300 hover:bg-jet_black-400 text-platinum-900 text-[11px] font-semibold border border-jet_black-400 transition-colors cursor-pointer text-center"
                  >
                    Details
                  </button>

                  <button
                    onClick={() => onOpenConsultation(service.title)}
                    className="py-1.5 px-2 rounded-lg bg-gold-gradient hover:opacity-95 text-onyx-100 text-[11px] font-bold transition-all shadow-sm shadow-bright_gold/20 cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>Quote</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Multi-Platform Technology Comparison Matrix */}
        <div className="p-6 sm:p-8 rounded-3xl bg-onyx-100 border border-jet_black-400 space-y-6 shadow-dark-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-bright_gold">
                Engineering Standard
              </span>
              <h3 className="text-xl font-bold text-platinum-900 font-space mt-1">
                Multi-Platform Technology & Architecture Comparison
              </h3>
            </div>
            <button
              onClick={() => onOpenConsultation('Architecture Recommendation')}
              className="px-4 py-2 rounded-xl bg-jet_black-300 hover:bg-jet_black-400 text-platinum-900 border border-jet_black-400 text-xs font-bold cursor-pointer"
            >
              Ask Joy & Faisal for Architecture Advice
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-jet_black-400 text-platinum-400">
                  <th className="py-3 px-4 font-bold">Platform / Stack</th>
                  <th className="py-3 px-4 font-bold">Performance Benchmark</th>
                  <th className="py-3 px-4 font-bold">Scalability Target</th>
                  <th className="py-3 px-4 font-bold">Maintenance Model</th>
                  <th className="py-3 px-4 font-bold">Best Suited For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-jet_black-300 text-platinum-400">
                <tr className="hover:bg-jet_black-200/40">
                  <td className="py-3 px-4 font-bold text-platinum-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-bright_gold"></span>
                    Custom Next.js 15 & React
                  </td>
                  <td className="py-3 px-4 text-bright_gold font-semibold font-mono">100/100 (Sub-0.2s TTFB)</td>
                  <td className="py-3 px-4">Unlimited serverless scale</td>
                  <td className="py-3 px-4 text-bright_gold">Zero plugin bloat, Git CI/CD</td>
                  <td className="py-3 px-4">High-growth SaaS, custom portals, high-traffic apps</td>
                </tr>
                <tr className="hover:bg-jet_black-200/40">
                  <td className="py-3 px-4 font-bold text-platinum-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-saffron"></span>
                    WordPress Unified Hub (Kadence Pro)
                  </td>
                  <td className="py-3 px-4 text-bright_gold font-semibold font-mono">98-100 (Sub-0.4s LCP)</td>
                  <td className="py-3 px-4">Enterprise WP & WooCommerce</td>
                  <td className="py-3 px-4 text-bright_gold">24/7 Staged updates & backups</td>
                  <td className="py-3 px-4">Content teams, eCommerce & marketing sites</td>
                </tr>
                <tr className="hover:bg-jet_black-200/40">
                  <td className="py-3 px-4 font-bold text-platinum-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-platinum-400"></span>
                    Cross-Platform Mobile (iOS / Android)
                  </td>
                  <td className="py-3 px-4 text-bright_gold font-semibold font-mono">60 FPS Native Fluidity</td>
                  <td className="py-3 px-4">App Store & Google Play Store</td>
                  <td className="py-3 px-4 text-platinum-400">Over-the-air hot updates</td>
                  <td className="py-3 px-4">Mobile-first products, client apps & field tools</td>
                </tr>
                <tr className="hover:bg-jet_black-200/40">
                  <td className="py-3 px-4 font-bold text-platinum-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-platinum-600"></span>
                    AI & Autonomous Pipelines
                  </td>
                  <td className="py-3 px-4 text-bright_gold font-semibold font-mono">Real-time inference / scraping</td>
                  <td className="py-3 px-4">Millions of daily records</td>
                  <td className="py-3 px-4 text-platinum-400">Autonomous containerized runners</td>
                  <td className="py-3 px-4">Data intelligence, lead enrichment & automated AI</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeDetailService && (
        <div 
          onClick={(e) => { if (e.target === e.currentTarget) setActiveDetailService(null); }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-sm animate-in fade-in overflow-y-auto"
        >
          <div className="w-full max-w-2xl bg-onyx-100 border border-jet_black-400 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 space-y-4 relative my-auto max-h-[92vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-bright_gold/15 text-bright_gold flex items-center justify-center shadow-gold-glow">
                  {getServiceIcon(activeDetailService.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-platinum-900 font-space">
                    {activeDetailService.title}
                  </h3>
                  <span className="text-xs text-bright_gold font-semibold">
                    Starting at {activeDetailService.startingPrice} • {activeDetailService.timeline}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setActiveDetailService(null)}
                className="text-platinum-400 hover:text-platinum-900 text-sm p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-platinum-400 leading-relaxed">
              {activeDetailService.longDesc}
            </p>

            {/* Sub-Modules Breakdown in Modal */}
            {activeDetailService.subModules && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-bright_gold">
                  Unified Archive Modules Managed in this Solution:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeDetailService.subModules.map((sm) => (
                    <div key={sm.id} className="p-3 rounded-xl bg-jet_black-200 border border-jet_black-400 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-platinum-900">{sm.title}</span>
                        <span className="text-[9px] text-bright_gold bg-bright_gold/15 px-1.5 py-0.5 rounded border border-bright_gold/30 font-semibold">{sm.tag}</span>
                      </div>
                      <p className="text-[11px] text-platinum-400 leading-snug">{sm.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-platinum-400">
                Full Deliverables Scope:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-platinum-400">
                {activeDetailService.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-jet_black-200 border border-jet_black-400">
                    <CheckCircle2 className="w-4 h-4 text-bright_gold shrink-0 mt-0.5" />
                    <span className="text-platinum-900">{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-jet_black-200 border border-jet_black-400 text-xs space-y-1">
              <span className="text-platinum-400">Ideal Client Profile:</span>
              <p className="text-platinum-900 font-medium">{activeDetailService.targetAudience}</p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setActiveDetailService(null)}
                className="px-4 py-2.5 rounded-xl bg-jet_black-300 text-platinum-400 hover:text-platinum-900 text-xs font-semibold cursor-pointer border border-jet_black-400"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const sTitle = activeDetailService.title;
                  setActiveDetailService(null);
                  onOpenConsultation(sTitle);
                }}
                className="px-5 py-2.5 rounded-xl bg-gold-gradient text-onyx-100 text-xs font-bold shadow-gold-glow cursor-pointer flex items-center gap-1.5"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

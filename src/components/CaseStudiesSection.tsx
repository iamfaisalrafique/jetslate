'use client';

import React, { useState } from 'react';
import { 
  BarChart3, 
  ArrowRight, 
  Star, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Layers 
} from 'lucide-react';
import { JETSLATE_CASE_STUDIES, JETSLATE_TESTIMONIALS } from '../data/jetslateAgencyData';
import { CaseStudy } from '../types';

interface CaseStudiesSectionProps {
  onOpenConsultation: (caseTitle?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy>(JETSLATE_CASE_STUDIES[0]);

  return (
    <section className="py-20 border-b border-jet_black-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bright_gold/10 border border-bright_gold/30 text-xs font-bold text-bright_gold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5 text-bright_gold" />
            <span>Proven Agency Results</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-platinum-900 tracking-tight font-space">
            Case Studies & Real Client Impact
          </h2>

          <p className="text-sm sm:text-base text-platinum-400 leading-relaxed">
            Good design means higher conversions. See how our bespoke WordPress engineering, 
            Core Web Vitals acceleration, and custom high-performance web architectures drive measurable business growth.
          </p>
        </div>

        {/* Featured Interactive Case Study Showcase */}
        <div className="p-6 sm:p-8 rounded-3xl bg-onyx-100 border border-jet_black-400 shadow-dark-card space-y-8">
          {/* Selector Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none border-b border-jet_black-400">
            {JETSLATE_CASE_STUDIES.map((cs) => (
              <button
                key={cs.id}
                onClick={() => setSelectedCase(cs)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCase.id === cs.id
                    ? 'bg-gold-gradient text-onyx-100 font-bold shadow-md shadow-bright_gold/20'
                    : 'text-platinum-400 hover:text-platinum-900 hover:bg-jet_black-300'
                }`}
              >
                {cs.client}
              </button>
            ))}
          </div>

          {/* Detailed Study View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-bright_gold">
                  {selectedCase.serviceCategory}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-platinum-900 font-space">
                  {selectedCase.title}
                </h3>
              </div>

              {/* Metrics highlight row */}
              <div className="grid grid-cols-3 gap-3">
                {selectedCase.metrics.map((metric, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-jet_black-200 border border-jet_black-400">
                    <span className="text-[10px] text-platinum-400 font-medium block">{metric.label}</span>
                    <span className="text-xl font-black text-platinum-900 font-mono mt-0.5 block">{metric.value}</span>
                    <span className="text-[10px] text-bright_gold font-semibold">{metric.improvement}</span>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-3 text-xs sm:text-sm text-platinum-400">
                <p>
                  <strong className="text-platinum-900 font-semibold">The Challenge:</strong> {selectedCase.challenge}
                </p>
                <p>
                  <strong className="text-platinum-900 font-semibold">Jet Slate Solution:</strong> {selectedCase.solution}
                </p>
                <p className="text-platinum-400">
                  <strong className="text-bright_gold font-semibold">The Outcome:</strong> {selectedCase.result}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedCase.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-jet_black-200 text-platinum-400 px-2.5 py-1 rounded-lg border border-jet_black-400">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation(`Similar to ${selectedCase.client} (${selectedCase.serviceCategory})`)}
                  className="px-5 py-3 rounded-xl bg-gold-gradient hover:opacity-95 text-onyx-100 font-bold text-xs flex items-center gap-2 shadow-gold-glow cursor-pointer transition-all"
                >
                  <span>Build A Similar Solution For My Website</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Case Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-jet_black-400 shadow-dark-card aspect-video lg:aspect-square">
                <img
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-100 via-onyx-100/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs text-platinum-400 font-mono">Client Verification:</span>
                  <span className="text-lg font-bold text-platinum-900 font-space">
                    {selectedCase.client}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Testimonials from jetslate.com */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-bright_gold">
              Direct Client Feedback
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-platinum-900 font-space">
              What People Are Saying
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {JETSLATE_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-3xl bg-onyx-100 border border-jet_black-400 flex flex-col justify-between space-y-4 hover:border-jet_black-500 transition-colors shadow-dark-card"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-bright_gold text-bright_gold" />
                      ))}
                    </div>
                    <span className="text-[10px] bg-jet_black-200 text-platinum-400 px-2 py-0.5 rounded border border-jet_black-400 font-medium">
                      {t.projectType}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-platinum-400 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-jet_black-400">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-10 h-10 rounded-full object-cover border border-jet_black-400"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-platinum-900">{t.author}</h4>
                    <p className="text-[11px] text-platinum-400">
                      {t.role}, {t.company}
                    </p>
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

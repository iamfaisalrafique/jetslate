'use client';

import React, { useState } from 'react';
import { 
  Zap, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  BarChart2, 
  Search, 
  Database, 
  Cpu, 
  Globe, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';
import { SpeedAuditMetric } from '../types';

interface SpeedAiLabProps {
  onOpenConsultation: (preset?: string) => void;
}

export const SpeedAiLab: React.FC<SpeedAiLabProps> = ({ onOpenConsultation }) => {
  const [testUrl, setTestUrl] = useState('https://mystore.com');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditComplete, setAuditComplete] = useState(true);

  // Simulated metrics
  const metrics: SpeedAuditMetric[] = [
    {
      name: 'Largest Contentful Paint',
      acronym: 'LCP',
      score: 38,
      value: '3.9s',
      benchmark: 'Target: < 1.2s',
      status: 'poor',
      recommendation: 'Jet Slate Kadence critical CSS + WebP image optimization cuts this to 0.38s.'
    },
    {
      name: 'Interaction to Next Paint',
      acronym: 'INP',
      score: 52,
      value: '260ms',
      benchmark: 'Target: < 100ms',
      status: 'needs-improvement',
      recommendation: 'Eliminate heavy page builder DOM nodes and defer blocking third-party scripts.'
    },
    {
      name: 'Cumulative Layout Shift',
      acronym: 'CLS',
      score: 45,
      value: '0.24',
      benchmark: 'Target: < 0.05',
      status: 'poor',
      recommendation: 'Reserve aspect ratios on banner assets & inject system font fallbacks.'
    },
    {
      name: 'Time to First Byte',
      acronym: 'TTFB',
      score: 41,
      value: '820ms',
      benchmark: 'Target: < 150ms',
      status: 'poor',
      recommendation: 'Install Redis object caching and deploy Cloudflare Edge HTML caching rules.'
    }
  ];

  // AI Demo state
  const [scrapingQuery, setScrapingQuery] = useState('eCommerce market competitor pricing');
  const [aiOutput, setAiOutput] = useState<{
    recordsCount: number;
    latencyMs: number;
    insights: string[];
  }>({
    recordsCount: 14200,
    latencyMs: 142,
    insights: [
      'Identified 18% under-priced product clusters across regional competitors',
      'Automated nightly extraction via Jet Slate headless scraper pipeline',
      'Direct synchronization into WordPress WooCommerce database'
    ]
  });

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testUrl) return;
    setIsAuditing(true);
    setAuditComplete(false);

    setTimeout(() => {
      setIsAuditing(false);
      setAuditComplete(true);
    }, 1200);
  };

  return (
    <section className="py-20 border-b border-jet_black-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bright_gold/10 border border-bright_gold/30 text-xs font-bold text-bright_gold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-bright_gold" />
            <span>Interactive Performance & Intelligence Lab</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-platinum-900 tracking-tight font-space">
            Speed Optimization & AI Intelligence
          </h2>

          <p className="text-sm sm:text-base text-platinum-400 leading-relaxed">
            Slow pages kill conversion rates. Discover your site’s real Core Web Vitals bottlenecks, 
            and see how Jet Slate’s technical optimization and data science solutions supercharge your digital presence.
          </p>
        </div>

        {/* Speed Diagnostics Suite */}
        <div className="p-6 sm:p-8 rounded-3xl bg-onyx-100 border border-jet_black-400 shadow-dark-card space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-jet_black-400">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-bright_gold">
                Core Web Vitals Engine
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-platinum-900 font-space mt-1">
                Live Performance & Speed Diagnostic
              </h3>
              <p className="text-xs text-platinum-400 mt-1">
                Test any WordPress URL to analyze mobile Lighthouse performance and recovery potential.
              </p>
            </div>

            {/* URL Input Form */}
            <form onSubmit={handleRunAudit} className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Globe className="w-4 h-4 text-platinum-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={testUrl}
                  onChange={(e) => setTestUrl(e.target.value)}
                  placeholder="https://yourstore.com"
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-jet_black-200 border border-jet_black-400 text-xs text-platinum-900 placeholder-platinum-400 focus:outline-none focus:border-bright_gold"
                />
              </div>
              <button
                type="submit"
                disabled={isAuditing}
                className="px-4 py-2.5 rounded-xl bg-gold-gradient hover:opacity-95 text-onyx-100 font-bold text-xs shadow-gold-glow cursor-pointer flex items-center gap-1.5 shrink-0"
              >
                {isAuditing ? (
                  <>
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-onyx-100/30 border-t-onyx-100 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-3.5 h-3.5" />
                    <span>Run Test</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Diagnostic Results View */}
          {auditComplete && (
            <div className="space-y-6 animate-in fade-in">
              {/* Overall Score Comparison Header */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-jet_black-200 border border-jet_black-400">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-saffron/15 border border-saffron/30 flex flex-col items-center justify-center shrink-0">
                    <span className="text-2xl font-black text-saffron font-mono">44</span>
                    <span className="text-[9px] uppercase font-bold text-saffron">Current</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-platinum-900">Current Detected Speed: Failing</h4>
                    <p className="text-xs text-platinum-400">
                      Site suffers from heavy DOM trees, uncompressed scripts, and missing server object caching.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:border-l md:border-jet_black-400 md:pl-6">
                  <div className="w-16 h-16 rounded-2xl bg-bright_gold/15 border border-bright_gold/40 flex flex-col items-center justify-center shrink-0 shadow-gold-glow">
                    <span className="text-2xl font-black text-bright_gold font-mono">99</span>
                    <span className="text-[9px] uppercase font-bold text-bright_gold">JetSlate</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-platinum-900">Jet Slate Target: Passing CWV</h4>
                    <p className="text-xs text-platinum-400">
                      Guaranteed <strong className="text-bright_gold font-semibold">Sub-0.4s LCP</strong> with our custom high-performance Kadence architecture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((metric) => (
                  <div key={metric.acronym} className="p-4 rounded-2xl bg-jet_black-200 border border-jet_black-400 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-platinum-900">{metric.acronym}</span>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-saffron/15 text-saffron border border-saffron/30">
                        {metric.status}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-black text-saffron font-mono">{metric.value}</span>
                      <span className="text-[10px] text-platinum-400">{metric.benchmark}</span>
                    </div>

                    <p className="text-[11px] text-platinum-400 leading-snug pt-1 border-t border-jet_black-400">
                      <strong className="text-platinum-900">Fix:</strong> {metric.recommendation}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-bright_gold/15 via-jet_black-200 to-jet_black-200 border border-bright_gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-gold-glow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-bright_gold/15 text-bright_gold flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-platinum-900">
                      Guaranteed 95+ PageSpeed & Core Web Vitals Pass
                    </h4>
                    <p className="text-[11px] text-platinum-400">
                      Our speed team optimizes your live WordPress site without breaking plugins, styling, or checkout flows.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onOpenConsultation('WordPress Speed Optimization Overhaul')}
                  className="px-5 py-2.5 rounded-xl bg-gold-gradient text-onyx-100 text-xs font-bold shadow-gold-glow cursor-pointer whitespace-nowrap"
                >
                  Order Speed Overhaul ($499)
                </button>
              </div>
            </div>
          )}
        </div>

        {/* AI & Data Intelligence Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-onyx-100 border border-jet_black-400 space-y-6 shadow-dark-card">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bright_gold">
              <Cpu className="w-4 h-4" />
              <span>Data Intelligence & AI Engineering</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-platinum-900 font-space">
              Data Science, Scraping & Automation
            </h3>

            <p className="text-xs sm:text-sm text-platinum-400 leading-relaxed">
              We provide data-driven decisions with our expert services in data science, machine learning, 
              and deep learning for your business. Get valuable insights and streamline your data processing 
              with our custom data scraping and analyst services.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-platinum-400">
                <div className="w-6 h-6 rounded-lg bg-bright_gold/15 text-bright_gold flex items-center justify-center shrink-0">
                  <Database className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-platinum-900 block">Automated Web Scraping Pipelines:</strong>
                  Extract millions of structured catalog, real estate, or pricing records with zero IP bans.
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-platinum-400">
                <div className="w-6 h-6 rounded-lg bg-bright_gold/15 text-bright_gold flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-platinum-900 block">AI Workflow Automations:</strong>
                  Connect LLMs, internal databases, and WordPress workflows for instant categorization and automated publishing.
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-platinum-400">
                <div className="w-6 h-6 rounded-lg bg-bright_gold/15 text-bright_gold flex items-center justify-center shrink-0">
                  <BarChart2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-platinum-900 block">Actionable Business Analyst Dashboards:</strong>
                  Turn raw server and customer event streams into predictive revenue models.
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenConsultation('AI & Data Intelligence Solutions')}
              className="w-full py-3 rounded-xl bg-jet_black-300 hover:bg-jet_black-400 text-platinum-900 font-bold text-xs border border-jet_black-400 flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <span>Consult with Head of IT (Faisal Rafique)</span>
              <ArrowRight className="w-3.5 h-3.5 text-bright_gold" />
            </button>
          </div>

          {/* Interactive AI Pipeline Simulator */}
          <div className="p-6 sm:p-8 rounded-3xl bg-onyx-100 border border-jet_black-400 flex flex-col justify-between space-y-6 shadow-dark-card">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-jet_black-400 pb-3">
                <span className="text-xs text-platinum-400 font-bold uppercase">Live Pipeline Simulator</span>
                <span className="text-[10px] bg-bright_gold/15 text-bright_gold border border-bright_gold/30 px-2 py-0.5 rounded font-mono font-bold">
                  Pipeline Status: 100% Operational
                </span>
              </div>

              <div className="p-4 rounded-xl bg-jet_black-200 border border-jet_black-400 space-y-2">
                <span className="text-[10px] uppercase font-bold text-platinum-400">Target Pipeline Objective:</span>
                <input
                  type="text"
                  value={scrapingQuery}
                  onChange={(e) => setScrapingQuery(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-onyx-200 border border-jet_black-400 text-platinum-900 focus:outline-none focus:border-bright_gold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-jet_black-200 border border-jet_black-400">
                  <span className="text-platinum-400 text-[10px]">Records Processed</span>
                  <div className="text-lg font-bold text-platinum-900 font-mono mt-0.5">
                    {aiOutput.recordsCount.toLocaleString()}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-jet_black-200 border border-jet_black-400">
                  <span className="text-platinum-400 text-[10px]">Processing Latency</span>
                  <div className="text-lg font-bold text-bright_gold font-mono mt-0.5">
                    {aiOutput.latencyMs}ms
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <span className="text-[10px] uppercase font-bold text-platinum-400">Machine Intelligence Output:</span>
                <div className="space-y-1.5">
                  {aiOutput.insights.map((insight, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-jet_black-200 border border-jet_black-400 text-xs text-platinum-400 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-bright_gold shrink-0 mt-0.5" />
                      <span className="text-platinum-900">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[11px] text-platinum-400 text-center">
              Jet Slate customizes AI models and scrapers to your exact enterprise requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

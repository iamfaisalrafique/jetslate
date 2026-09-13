'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Calendar, 
  ArrowUp,
  ExternalLink,
  Sparkles,
  Heart
} from 'lucide-react';
import { JETSLATE_BRAND, JETSLATE_LOCATIONS } from '../data/jetslateAgencyData';

export type FooterTabType = 'overview' | 'services' | 'speed-ai' | 'portfolio' | 'about' | 'contact';

interface FooterAgencyProps {
  setActiveTab?: (tab: FooterTabType) => void;
  onOpenConsultation: () => void;
  onOpenSpeedTest: () => void;
}

export const FooterAgency: React.FC<FooterAgencyProps> = ({
  setActiveTab,
  onOpenConsultation,
  onOpenSpeedTest
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabClick = (tab: FooterTabType) => {
    if (setActiveTab && pathname === '/') {
      setActiveTab(tab);
      scrollToTop();
    } else {
      router.push(tab === 'overview' ? '/' : `/${tab}`);
    }
  };

  return (
    <footer className="bg-onyx-100 border-t border-jet_black-400 text-platinum-400 text-xs">
      {/* Upper Agency Call to Action Banner */}
      <div className="border-b border-jet_black-400 bg-gradient-to-b from-onyx-200 to-onyx-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-bright_gold">
              {JETSLATE_BRAND.closingCta}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-platinum-900 font-space">
              Transform Your Digital Presence With Jet Slate
            </h3>
            <p className="text-xs sm:text-sm text-platinum-400">
              {JETSLATE_BRAND.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-xl bg-gold-gradient hover:opacity-95 text-onyx-100 font-bold text-xs shadow-gold-glow cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book 20-Min Strategy Call</span>
            </button>
            <button
              onClick={onOpenSpeedTest}
              className="px-5 py-3 rounded-xl bg-jet_black-200 hover:bg-jet_black-300 text-platinum-900 border border-jet_black-400 font-bold text-xs cursor-pointer"
            >
              <span>Test Site Speed</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gold-gradient p-[1px] shadow-gold-glow">
                <div className="w-full h-full bg-onyx-100 rounded-[11px] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-bright_gold" />
                </div>
              </div>
              <span className="text-xl font-bold text-platinum-900 font-space">
                Jet<span className="text-bright_gold">Slate</span>
              </span>
            </div>

            <p className="text-xs text-platinum-400 leading-relaxed">
              Jet Slate is your full-service AI & design agency, dedicated to transforming your 
              digital presence and propelling your business to new heights.
            </p>

            <div className="p-3 rounded-xl bg-jet_black-200 border border-jet_black-400 text-[11px] text-platinum-400 space-y-1">
              <div className="text-platinum-900 font-semibold flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-bright_gold fill-bright_gold" />
                <span>Good design means higher conversions</span>
              </div>
              <p className="text-platinum-400">
                Learning the art of proper design will increase your revenue.
              </p>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-platinum-900">
              Agency Services
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleTabClick('services')}
                  className="hover:text-bright_gold transition-colors cursor-pointer text-left"
                >
                  WordPress Solutions & Architecture Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('services')}
                  className="hover:text-bright_gold transition-colors cursor-pointer text-left"
                >
                  Custom Full-Stack Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('services')}
                  className="hover:text-bright_gold transition-colors cursor-pointer text-left"
                >
                  SEO & Organic Growth Engineering
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('services')}
                  className="hover:text-bright_gold transition-colors cursor-pointer text-left"
                >
                  Mobile App Development (iOS & Android)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('speed-ai')}
                  className="hover:text-bright_gold transition-colors cursor-pointer text-left"
                >
                  AI Solutions & Intelligent Automation
                </button>
              </li>
            </ul>
          </div>

          {/* Agency Hubs */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-platinum-900">
              Agency Hubs
            </h4>
            <ul className="space-y-3">
              {JETSLATE_LOCATIONS.map((loc) => (
                <li key={loc.id} className="space-y-0.5">
                  <span className="text-[10px] text-platinum-400 uppercase block">{loc.regionType}</span>
                  <strong className="text-platinum-900 text-xs block">{loc.city} — {loc.state}</strong>
                  <span className="text-[10px] text-bright_gold block">{loc.localTimezone}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-platinum-900">
              Official Contact
            </h4>
            <div className="space-y-2.5">
              <a
                href={`mailto:${JETSLATE_BRAND.contact.primaryEmail}`}
                className="flex items-center gap-2 text-platinum-400 hover:text-bright_gold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-bright_gold shrink-0" />
                <span>{JETSLATE_BRAND.contact.primaryEmail}</span>
              </a>

              <a
                href={`mailto:${JETSLATE_BRAND.contact.secondaryEmail}`}
                className="flex items-center gap-2 text-platinum-400 hover:text-bright_gold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-saffron shrink-0" />
                <span>{JETSLATE_BRAND.contact.secondaryEmail}</span>
              </a>

              <div className="flex items-center gap-2 text-platinum-400">
                <Phone className="w-3.5 h-3.5 text-bright_gold shrink-0" />
                <span>{JETSLATE_BRAND.contact.phone}</span>
              </div>

              <div className="pt-2 border-t border-jet_black-400">
                <span className="text-[10px] text-platinum-400 block">Response Time:</span>
                <span className="text-bright_gold font-medium">Respond in a ♥ beat (&lt; 2 hours)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-jet_black-400 flex flex-col sm:flex-row items-center justify-between gap-4 text-platinum-400 text-[11px]">
          <div>
            &copy; 2026 Jet Slate - WordPress Theme by{' '}
            <a 
              href="https://www.kadencewp.com/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-bright_gold hover:text-saffron underline decoration-jet_black-500"
            >
              Kadence WP
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => handleTabClick('about')} className="hover:text-platinum-900 cursor-pointer">
              About Us
            </button>
            <span>•</span>
            <button onClick={() => handleTabClick('contact')} className="hover:text-platinum-900 cursor-pointer">
              Contact
            </button>
            <span>•</span>
            <button onClick={() => handleTabClick('portfolio')} className="hover:text-platinum-900 cursor-pointer">
              Case Studies
            </button>
            <span>•</span>
            <button onClick={scrollToTop} className="flex items-center gap-1 hover:text-bright_gold cursor-pointer">
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

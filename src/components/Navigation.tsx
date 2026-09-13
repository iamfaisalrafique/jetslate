'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  Zap, 
  Mail, 
  Menu, 
  X, 
  Calendar, 
  ArrowRight
} from 'lucide-react';
import { JETSLATE_BRAND } from '../data/jetslateAgencyData';

export type NavTabType = 'overview' | 'services' | 'speed-ai' | 'portfolio' | 'about' | 'contact';

interface NavigationProps {
  activeTab?: NavTabType;
  setActiveTab?: (tab: NavTabType) => void;
  onOpenConsultation: (servicePreset?: string) => void;
  onOpenSpeedTest: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
  onOpenConsultation,
  onOpenSpeedTest
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { id: 'overview', label: 'Agency', href: '/' },
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'speed-ai', label: 'Speed & AI Lab', href: '/speed-ai' },
    { id: 'portfolio', label: 'Case Studies', href: '/portfolio' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'contact', label: 'Contact', href: '/contact' }
  ] as const;

  // Determine current active id
  const currentTab = activeTab || (
    pathname === '/services' ? 'services' :
    pathname === '/speed-ai' ? 'speed-ai' :
    pathname === '/portfolio' ? 'portfolio' :
    pathname === '/about' ? 'about' :
    pathname === '/contact' ? 'contact' : 'overview'
  );

  const handleNavClick = (item: typeof navItems[number]) => {
    setMobileMenuOpen(false);
    if (setActiveTab && pathname === '/') {
      setActiveTab(item.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push(item.href);
    }
  };

  const handleBrandClick = () => {
    setMobileMenuOpen(false);
    if (setActiveTab && pathname === '/') {
      setActiveTab('overview');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-onyx-200/95 backdrop-blur-md border-b border-jet_black-400">
      {/* Top micro-announcement bar with generous padding */}
      <div className="bg-onyx-100 border-b border-jet_black-300 px-6 sm:px-8 lg:px-12 py-2.5 text-[11px] text-platinum-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-bright_gold/10 text-bright_gold font-semibold border border-bright_gold/30">
              <span className="w-1.5 h-1.5 rounded-full bg-bright_gold animate-pulse"></span>
              A FULL-SERVICE AI & DESIGN AGENCY
            </span>
            <span className="hidden md:inline text-jet_black-600">•</span>
            <span className="hidden md:inline text-platinum-400">
              Offices in Kailua (HI) • Las Vegas (NV) • Olympia (WA)
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`mailto:${JETSLATE_BRAND.contact.primaryEmail}`}
              className="flex items-center gap-1.5 text-platinum-400 hover:text-bright_gold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-bright_gold" />
              <span>{JETSLATE_BRAND.contact.primaryEmail}</span>
            </a>
            <span className="text-jet_black-500">|</span>
            <button
              onClick={onOpenSpeedTest}
              className="flex items-center gap-1.5 text-bright_gold hover:text-saffron font-medium transition-colors cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Free Speed Test</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation header with expanded height and padding */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-22 sm:h-24 flex items-center justify-between gap-6">
        {/* Brand identity */}
        <button
          onClick={handleBrandClick}
          className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none py-1"
        >
          <div className="w-11 h-11 rounded-xl bg-gold-gradient p-[1px] shadow-gold-glow">
            <div className="w-full h-full bg-onyx-100 rounded-[11px] flex items-center justify-center">
              <Zap className="w-5 h-5 text-bright_gold group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-platinum-900 tracking-tight font-space">
                Jet<span className="text-bright_gold">Slate</span>
              </span>
              <span className="text-[10px] bg-bright_gold/15 text-bright_gold font-bold px-2 py-0.5 rounded border border-bright_gold/30 uppercase tracking-wide">
                Agency
              </span>
            </div>
            <p className="text-[11px] text-platinum-400 font-medium hidden sm:block">
              Technology & Content Excellence
            </p>
          </div>
        </button>

        {/* Desktop nav tabs with generous breathing room */}
        <nav className="hidden lg:flex items-center gap-2 bg-onyx-300/90 p-2 rounded-2xl border border-jet_black-400">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                currentTab === item.id
                  ? 'bg-gold-gradient text-onyx-100 font-bold shadow-md shadow-bright_gold/25'
                  : 'text-platinum-400 hover:text-platinum-900 hover:bg-jet_black-400/60'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action button with expanded padding */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => onOpenConsultation()}
            className="px-6 py-3.5 rounded-xl bg-gold-gradient hover:opacity-95 text-onyx-100 font-bold text-xs flex items-center gap-2.5 shadow-gold-glow cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4" />
            <span>Book 20-Min Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => onOpenConsultation()}
            className="sm:hidden px-4 py-2 rounded-xl bg-gold-gradient text-onyx-100 text-xs font-bold"
          >
            Book Call
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-jet_black-300 text-platinum-400 hover:text-platinum-900 border border-jet_black-400"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-onyx-100 border-b border-jet_black-400 px-6 py-5 space-y-4 animate-in slide-in-from-top-3">
          <div className="grid grid-cols-2 gap-2.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`p-3.5 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer ${
                  currentTab === item.id
                    ? 'bg-gold-gradient text-onyx-100 font-bold'
                    : 'bg-jet_black-200 text-platinum-400 border border-jet_black-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-jet_black-400 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 rounded-xl bg-gold-gradient text-onyx-100 font-bold text-xs flex items-center justify-center gap-2 shadow-gold-glow cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book 20-Minute Strategy Call</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSpeedTest();
              }}
              className="w-full py-3 rounded-xl bg-jet_black-200 text-platinum-400 border border-jet_black-400 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-bright_gold" />
              <span>Run Free Speed & Core Web Vitals Audit</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

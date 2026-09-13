'use client';

import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  X, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Mail,
  Zap
} from 'lucide-react';
import { JETSLATE_BRAND } from '../data/jetslateAgencyData';
import { submitConsultationAction } from '@/app/actions';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  servicePreset?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  servicePreset
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    websiteUrl: '',
    serviceInterest: servicePreset || 'WordPress Solutions & Architecture Hub',
    projectScope: 'Full Website / App Build',
    preferredDate: '2026-09-15',
    timeSlot: '11:00 AM EST',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fd = new FormData();
    fd.append('name', formData.name);
    fd.append('email', formData.email);
    fd.append('websiteUrl', formData.websiteUrl);
    fd.append('serviceInterest', formData.serviceInterest);
    fd.append('projectScope', formData.projectScope);
    fd.append('preferredDate', formData.preferredDate);
    fd.append('timeSlot', formData.timeSlot);
    fd.append('notes', formData.notes);

    try {
      const res = await submitConsultationAction(fd);
      if (res.success) {
        setSubmitted(true);
      } else {
        alert(res.message);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-sm animate-in fade-in overflow-y-auto"
    >
      <div className="w-full max-w-lg bg-onyx-100 border border-jet_black-400 rounded-2xl sm:rounded-3xl shadow-dark-card p-4 sm:p-6 space-y-3.5 relative my-auto max-h-[94vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-platinum-400 hover:text-platinum-900 p-1.5 rounded-xl bg-jet_black-200 border border-jet_black-400 cursor-pointer transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-bright_gold/15 text-bright_gold border border-bright_gold/40 flex items-center justify-center mx-auto shadow-gold-glow">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-platinum-900 font-space">
              20-Minute Call Confirmed!
            </h3>
            <p className="text-xs text-platinum-400 max-w-sm mx-auto leading-relaxed">
              We have dispatched a calendar invitation to <strong className="text-platinum-900">{formData.email}</strong>. 
              Our team (Joy & Faisal) will join with initial insights prepared for your website.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-gold-gradient text-onyx-100 text-xs font-bold shadow-gold-glow cursor-pointer"
              >
                Close & Return To Platform
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="pr-8">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-bright_gold uppercase">
                <Calendar className="w-3.5 h-3.5 text-bright_gold" />
                <span>20-Minute Strategy Session</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-platinum-900 font-space leading-tight mt-0.5">
                Book A Call With Jet Slate Leadership
              </h3>
              <p className="text-[11px] text-platinum-400 mt-0.5">
                Direct consultation with Joy Hau'oli (CEO) and Faisal Rafique (Head of IT).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-platinum-400">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Alex Rivera"
                  className="w-full px-3 py-2 rounded-xl bg-jet_black-200 border border-jet_black-400 text-xs text-platinum-900 placeholder-platinum-400 focus:outline-none focus:border-bright_gold"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-platinum-400">Work Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-3 py-2 rounded-xl bg-jet_black-200 border border-jet_black-400 text-xs text-platinum-900 placeholder-platinum-400 focus:outline-none focus:border-bright_gold"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-platinum-400">Website URL (Optional)</label>
              <input
                type="url"
                value={formData.websiteUrl}
                onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                placeholder="https://mywebsite.com"
                className="w-full px-3 py-2 rounded-xl bg-jet_black-200 border border-jet_black-400 text-xs text-platinum-900 placeholder-platinum-400 focus:outline-none focus:border-bright_gold"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-platinum-400">Preferred Service</label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-jet_black-200 border border-jet_black-400 text-xs text-platinum-900 focus:outline-none focus:border-bright_gold"
                >
                  <option>WordPress Solutions & Architecture Hub</option>
                  <option>Custom Full-Stack Web Development</option>
                  <option>SEO & Organic Growth Engineering</option>
                  <option>Mobile App Development (iOS & Android)</option>
                  <option>AI Solutions & Intelligent Automation</option>
                  <option>Full Multi-Platform Technical Audit</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-platinum-400">Project Scale</label>
                <select
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-jet_black-200 border border-jet_black-400 text-xs text-platinum-900 focus:outline-none focus:border-bright_gold"
                >
                  <option>Full Website / App Build</option>
                  <option>WordPress Architecture Hub ($950)</option>
                  <option>Custom Next.js Web App ($2,400)</option>
                  <option>Mobile App Prototype / MVP ($3,200)</option>
                  <option>SEO & Organic Growth Overhaul ($850)</option>
                  <option>AI Automation & Agentic Pipelines ($1,800)</option>
                  <option>Monthly Care Plan Retainer ($99/mo)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-platinum-400">Preferred Date</label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-jet_black-200 border border-jet_black-400 text-xs text-platinum-900 focus:outline-none focus:border-bright_gold"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-platinum-400">Time Slot</label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-jet_black-200 border border-jet_black-400 text-xs text-platinum-900 focus:outline-none focus:border-bright_gold"
                >
                  <option>9:00 AM EST (HST / PST aligned)</option>
                  <option>11:00 AM EST (Recommended)</option>
                  <option>2:00 PM EST (Afternoon)</option>
                  <option>4:30 PM EST (West Coast prime)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-platinum-400">Project Goal / Pain Point (Optional)</label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="E.g., We need sub-0.4s speed and custom architecture for our platform."
                className="w-full px-3 py-2 rounded-xl bg-jet_black-200 border border-jet_black-400 text-xs text-platinum-900 placeholder-platinum-400 focus:outline-none focus:border-bright_gold resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 rounded-xl bg-gold-gradient hover:opacity-95 text-onyx-100 font-bold text-xs flex items-center justify-center gap-2 shadow-gold-glow cursor-pointer transition-all"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-onyx-100/30 border-t-onyx-100 animate-spin" />
                  <span>Locking In Calendar Slot...</span>
                </>
              ) : (
                <>
                  <Calendar className="w-4 h-4" />
                  <span>Confirm 20-Minute Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 text-[10px] text-platinum-400 pt-0.5">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-bright_gold" />
                100% Confidential
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-bright_gold" />
                Strict 20-Min Cap (No sales pressure)
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

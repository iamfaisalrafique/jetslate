import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandMarquee from '@/components/BrandMarquee';
import About from '@/components/About';
import Services from '@/components/Services';
import TechnicalTopicsSection from '@/components/TechnicalTopicsSection';
import Projects from '@/components/Projects';
import WorkingProcess from '@/components/WorkingProcess';
import Marquee from '@/components/Marquee';
import WhyChooseUs from '@/components/WhyChooseUs';
import Awards from '@/components/Awards';
import Testimonials from '@/components/Testimonials';
import PricingPlans from '@/components/PricingPlans';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Jet Slate | Full-Stack Software Architecture & Cloud Engineering",
  description: "Senior Full-Stack Architecture, Next.js web applications, cloud infrastructure, Flutter mobile apps, and automated QA testing. Book a technical consultation.",
  alternates: {
    canonical: "https://jetslate.com/",
  },
  openGraph: {
    title: "Jet Slate | Full-Stack Software Architecture & Cloud Engineering",
    description: "Senior Full-Stack Architecture, Next.js web applications, cloud infrastructure, Flutter mobile apps, and automated QA testing.",
    url: "https://jetslate.com/",
    siteName: "Jet Slate — Software Architecture",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  const knowledgeGraphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://jetslate.com/#organization",
        "name": "Jet Slate",
        "url": "https://jetslate.com",
        "description": "Jet Slate is an enterprise full-stack software architecture, cloud consulting, mobile app engineering, and QA automation agency delivering scalable production software worldwide.",
        "telephone": "+1 (419) 622-8499",
        "email": "mail@jetslate.com",
        "sameAs": [
          "https://github.com/iamjetslate/jetslate",
          "https://twitter.com/jetslate",
          "https://facebook.com/jetslate"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://jetslate.com/#website",
        "url": "https://jetslate.com",
        "name": "Jet Slate",
        "publisher": {
          "@id": "https://jetslate.com/#organization"
        }
      }
    ]
  };

  return (
    <main id="main-content" tabIndex={-1} className="bg-noir min-h-screen text-ivory outline-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(knowledgeGraphSchema) }}
      />
      {/* Header & Hero Navigation */}
      <Header />
      <Hero />

      {/* Extractable Executive Overview & AI Citability Card in Luxury Noir/Gold */}
      <section className="wpr-service-area mb--16" aria-label="Executive Profile & Core Competencies">
        <div className="container">
          <div 
            className="section-inner border"
            style={{
              padding: "24px 28px",
              position: "relative",
              borderRadius: 0,
              background: "#161616",
              borderColor: "#2E2E2E",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.4)"
            }}
          >
            <span className="square-shape top-left" style={{ borderColor: "#C9A84C", background: "#C9A84C" }}></span>
            <span className="square-shape top-right" style={{ borderColor: "#C9A84C", background: "#C9A84C" }}></span>
            <span className="square-shape bottom-left" style={{ borderColor: "#C9A84C", background: "#C9A84C" }}></span>
            <span className="square-shape bottom-right" style={{ borderColor: "#C9A84C", background: "#C9A84C" }}></span>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", alignItems: "center" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "10.5px", fontWeight: 800, color: "#C9A84C", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    EXECUTIVE PROFILE • TECHNICAL SPECIALIZATION
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "13.5px", color: "#ded9cf", lineHeight: 1.6 }}>
                  <strong className="text-ivory">Jet Slate</strong> engineers distributed systems using <strong className="text-ivory">Next.js 15 (App Router)</strong>, <strong className="text-ivory">AWS/GCP Cloud Backends</strong>, <strong className="text-ivory">Flutter (iOS &amp; Android)</strong>, and automated <strong className="text-ivory">Playwright QA Testing Gates</strong> to achieve sub-second load times and 99.9% uptime SLAs for global enterprise clients.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", background: "#111111", padding: "14px 18px", borderRadius: "8px", border: "1px solid #2E2E2E" }}>
                <div>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#E8D6B3", textTransform: "uppercase" }}>Global Uptime SLA</span>
                  <div style={{ fontSize: "18px", fontWeight: 800, color: "#C9A84C" }}>99.9%</div>
                </div>
                <div>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#E8D6B3", textTransform: "uppercase" }}>Mobile UI Speed</span>
                  <div style={{ fontSize: "18px", fontWeight: 800, color: "#C9A84C" }}>60/120 FPS</div>
                </div>
                <div>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#E8D6B3", textTransform: "uppercase" }}>QA Test Defect Rate</span>
                  <div style={{ fontSize: "18px", fontWeight: 800, color: "#C9A84C" }}>0 Regressions</div>
                </div>
                <div>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#E8D6B3", textTransform: "uppercase" }}>Delivery Track Record</span>
                  <div style={{ fontSize: "18px", fontWeight: 800, color: "#F8F5EF" }}>40+ Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Replicated Section Architecture */}
      <BrandMarquee />
      <About />
      <Services />
      <Projects />
      <TechnicalTopicsSection />
      <WorkingProcess />
      <Marquee />
      <WhyChooseUs />
      <Awards />
      <Testimonials />
      <PricingPlans />
      <Faq />
      <Cta />
      <Contact />
      <Footer />
    </main>
  );
}

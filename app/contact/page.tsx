import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Faq from '@/components/Faq';
import BrandMarquee from '@/components/BrandMarquee';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    absolute: "Contact Jet Slate | Software Consulting",
  },
  description: "Get in touch with Jet Slate for software architecture consulting, Next.js web development, Flutter apps, and QA automation projects.",
  alternates: {
    canonical: "https://jetslate.com/contact",
  },
  openGraph: {
    title: "Contact Jet Slate | Software Consulting",
    description: "Get in touch with Jet Slate for software architecture consulting, Next.js web development, Flutter apps, and QA automation projects.",
    type: "website",
    url: "https://jetslate.com/contact",
    images: [
      {
        url: "https://jetslate.com/assets/images/about/01.webp",
        width: 1200,
        height: 896,
        alt: "Contact Jet Slate",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Jet Slate | Consult on Web, Mobile & QA Projects",
    description: "Get in touch with Jet Slate for software architecture consulting, Next.js web development, Flutter apps, and QA automation projects.",
    images: ["https://jetslate.com/assets/images/about/01.webp"],
  }
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://jetslate.com/contact#webpage",
        "url": "https://jetslate.com/contact",
        "name": "Contact Jet Slate | Consult on Web, Mobile & QA Projects",
        "description": "Direct communication channels, phone, executive email, physical address, and project proposal inquiries for Jet Slate.",
        "mainEntity": {
          "@type": "Person",
          "@id": "https://jetslate.com/#person",
          "name": "Jet Slate",
          "email": "contact@jetslate.com",
          "telephone": "+1 (419) 622-8499",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Street 3, Peoples Colony",
            "addressLocality": "Vehari",
            "addressRegion": "Punjab",
            "postalCode": "61100",
            "addressCountry": "PK"
          },
          "sameAs": [
            "https://github.com/jetslate",
            "https://linkedin.com/in/jetslate",
            "https://twitter.com/jetslate",
            "https://www.facebook.com/IamJet Slate/",
            "https://www.youtube.com/@jetslateue",
            "https://www.instagram.com/jetslate/",
            "https://wa.me/14196228499",
            "https://www.teacheron.com/tutor-profile/824p"
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://jetslate.com/contact#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://jetslate.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact",
            "item": "https://jetslate.com/contact"
          }
        ]
      }
    ]
  };

  return (
    <main style={{ background: "#111111", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Header />

      {/* Hero Contact Banner in Blueprint Card Format */}
      <section className="wpr-banner-area breadcrumb mb--16">
        <div className="container">
          <div 
            className="section-inner bg-[#161616] border"
            style={{
              padding: "48px 48px",
              position: "relative",
              borderRadius: 0,
              background: "#161616",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.45)"
            }}
          >
            {/* Blueprint Corner Dots */}
            <span className="square-shape top-left"></span>
            <span className="square-shape top-right"></span>
            <span className="square-shape bottom-left"></span>
            <span className="square-shape bottom-right"></span>

            {/* Breadcrumbs Navigation */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#E8D6B3", marginBottom: "18px" }}>
              <Link href="/" style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none" }}>Home</Link>
              <span>/</span>
              <span style={{ color: "#F8F5EF", fontWeight: 600 }}>Get In Touch</span>
            </div>

            {/* Pill Eyebrow */}
            <div 
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "8px", 
                padding: "6px 16px", 
                borderRadius: "9999px", 
                background: "rgba(201, 168, 76, 0.06)", 
                border: "1px solid rgba(201, 168, 76, 0.18)",
                marginBottom: "18px"
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10B981", display: "inline-block" }}></span>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#C9A84C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                AVAILABLE FOR NEW CONTRACTS &amp; BUILDS
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              style={{ 
                fontSize: "clamp(28px, 3.8vw, 46px)", 
                fontWeight: 800, 
                color: "#F8F5EF", 
                lineHeight: 1.18, 
                letterSpacing: "-0.025em", 
                margin: "0 0 16px 0",
                textTransform: "uppercase",
                maxWidth: "920px"
              }}
            >
              Let&apos;s Architect Your Next{" "}
              <span 
                style={{ 
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  display: "inline-block"
                }}
              >
                High-Performance System.
              </span>
            </h1>

            {/* Subtitle */}
            <p 
              style={{ 
                fontSize: "16px", 
                color: "#ded9cf", 
                lineHeight: 1.65, 
                margin: "0 0 28px 0",
                maxWidth: "780px"
              }}
            >
              Have a project roadmap, architecture inquiry, or need an exact milestone estimate? Reach out directly via the proposal form below or by direct telephone.
            </p>

            {/* Quick Contact Badges - 4 Columns */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
              <div 
                style={{
                  padding: "16px 20px",
                  borderRadius: "12px",
                  background: "#161616",
                  border: "1px solid #2E2E2E",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px"
                }}
              >
                <span style={{ fontSize: "22px" }}>📧</span>
                <div>
                  <div style={{ fontSize: "11px", color: "#E8D6B3", fontWeight: 700, textTransform: "uppercase" }}>Direct Email</div>
                  <a 
                    href="mailto:contact@jetslate.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ fontSize: "13.5px", fontWeight: 800, color: "#C9A84C", textDecoration: "none" }}
                  >
                    contact@jetslate.com
                  </a>
                </div>
              </div>

              <div 
                style={{
                  padding: "16px 20px",
                  borderRadius: "12px",
                  background: "#161616",
                  border: "1px solid #2E2E2E",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px"
                }}
              >
                <span style={{ fontSize: "22px" }}>📞</span>
                <div>
                  <div style={{ fontSize: "11px", color: "#E8D6B3", fontWeight: 700, textTransform: "uppercase" }}>Direct Telephone</div>
                  <a 
                    href="tel:+1 (419) 622-8499" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ fontSize: "13.5px", fontWeight: 800, color: "#C9A84C", textDecoration: "none" }}
                  >
                    +1 (419) 622-8499
                  </a>
                </div>
              </div>

              <div 
                style={{
                  padding: "16px 20px",
                  borderRadius: "12px",
                  background: "#161616",
                  border: "1px solid #2E2E2E",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px"
                }}
              >
                <span style={{ fontSize: "22px" }}>⚡</span>
                <div>
                  <div style={{ fontSize: "11px", color: "#E8D6B3", fontWeight: 700, textTransform: "uppercase" }}>Response SLA</div>
                  <div style={{ fontSize: "13.5px", fontWeight: 800, color: "#C9A84C" }}>
                    &lt; 2 Hours Guaranteed
                  </div>
                </div>
              </div>

              <div 
                style={{
                  padding: "16px 20px",
                  borderRadius: "12px",
                  background: "#161616",
                  border: "1px solid #2E2E2E",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px"
                }}
              >
                <span style={{ fontSize: "22px" }}>📍</span>
                <div>
                  <div style={{ fontSize: "11px", color: "#E8D6B3", fontWeight: 700, textTransform: "uppercase" }}>Physical Address</div>
                  <address style={{ fontStyle: "normal", fontSize: "12.5px", fontWeight: 800, color: "#F8F5EF", lineHeight: 1.35, margin: 0 }}>
                    Street 3, Peoples Colony, Vehari, Punjab, Pakistan
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Form Section */}
      <Contact />
      <BrandMarquee />
      <Faq />
      <Footer />
    </main>
  );
}

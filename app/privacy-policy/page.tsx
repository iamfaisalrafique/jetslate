import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Jet Slate",
  },
  description: "Privacy Policy and data protection standards for Jet Slate software engineering services and digital properties.",
  alternates: {
    canonical: "https://jetslate.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Jet Slate",
    description: "Privacy Policy and data protection standards for Jet Slate software engineering services and digital properties.",
    url: "https://jetslate.com/privacy-policy",
    type: "website",
    images: ["https://jetslate.com/assets/images/about/01.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Jet Slate",
    description: "Privacy Policy and data protection standards for Jet Slate software engineering services and digital properties.",
    images: ["https://jetslate.com/assets/images/about/01.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://jetslate.com/privacy-policy#webpage",
    "url": "https://jetslate.com/privacy-policy",
    "name": "Privacy Policy | Jet Slate",
    "description": "Privacy Policy and data protection terms for jetslate.com."
  };

  return (
    <main style={{ background: "#111111", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      
      <section className="wpr-banner-area breadcrumb mb--16">
        <div className="container">
          <div 
            className="section-inner bg-[#161616] border"
            style={{
              padding: "48px 48px",
              position: "relative",
              borderRadius: 0,
              background: "#161616"
            }}
          >
            <span className="square-shape top-left"></span>
            <span className="square-shape top-right"></span>
            <span className="square-shape bottom-left"></span>
            <span className="square-shape bottom-right"></span>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#E8D6B3", marginBottom: "16px" }}>
              <Link href="/" style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none" }}>Home</Link>
              <span>/</span>
              <span style={{ color: "#F8F5EF", fontWeight: 600 }}>Privacy Policy</span>
            </div>

            <h1 style={{ fontSize: "clamp(26px, 3.2vw, 36px)", fontWeight: 800, color: "#F8F5EF", marginBottom: "18px" }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: "15px", color: "#ded9cf", lineHeight: 1.7, maxWidth: "780px" }}>
              Last updated: August 2026. At jetslate.com, we respect your privacy and are committed to protecting any personal data you share when requesting proposals, communicating through email, or using our architectural consulting services.
            </p>
          </div>
        </div>
      </section>

      <section className="mb--16">
        <div className="container">
          <div 
            className="section-inner bg-[#161616] border"
            style={{
              padding: "48px 48px",
              position: "relative",
              borderRadius: 0,
              background: "#161616",
              fontSize: "15px",
              color: "#ded9cf",
              lineHeight: 1.8
            }}
          >
            <span className="square-shape top-left"></span>
            <span className="square-shape top-right"></span>
            <span className="square-shape bottom-left"></span>
            <span className="square-shape bottom-right"></span>

            <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#F8F5EF", marginBottom: "12px" }}>1. Information We Collect</h2>
            <p style={{ marginBottom: "24px" }}>
              We collect information that you provide voluntarily when submitting inquiries through our contact forms, such as your name, email address, project requirements, and technical specifications.
            </p>

            <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#F8F5EF", marginBottom: "12px" }}>2. How We Use Information</h2>
            <p style={{ marginBottom: "24px" }}>
              Your information is strictly used to evaluate project feasibility, prepare architectural estimates, communicate milestones, and provide software consulting services. We do not sell or rent personal information to third parties.
            </p>

            <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#F8F5EF", marginBottom: "12px" }}>3. Data Security &amp; Compliance</h2>
            <p style={{ marginBottom: "24px" }}>
              We implement industry-standard encryption, SSL protocols, and access controls compliant with GDPR and international data protection standards.
            </p>

            <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#F8F5EF", marginBottom: "12px" }}>4. Contact</h2>
            <p>
              For privacy-related inquiries, contact us directly at <a href="mailto:contact@jetslate.com" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C" }}>contact@jetslate.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

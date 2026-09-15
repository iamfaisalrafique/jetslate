import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    absolute: "Terms of Service | Jet Slate",
  },
  description: "Terms of Service, consulting agreements, delivery standards, and engagement conditions for Jet Slate software consulting.",
  alternates: {
    canonical: "https://jetslate.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Jet Slate",
    description: "Terms of Service, consulting agreements, delivery standards, and engagement conditions for Jet Slate software consulting.",
    url: "https://jetslate.com/terms-of-service",
    type: "website",
    images: ["https://jetslate.com/assets/images/about/01.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Jet Slate",
    description: "Terms of Service, consulting agreements, delivery standards, and engagement conditions for Jet Slate software consulting.",
    images: ["https://jetslate.com/assets/images/about/01.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://jetslate.com/terms-of-service#webpage",
    "url": "https://jetslate.com/terms-of-service",
    "name": "Terms of Service | Jet Slate",
    "description": "Terms of Service and consulting agreements for jetslate.com."
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
              <span style={{ color: "#F8F5EF", fontWeight: 600 }}>Terms of Service</span>
            </div>

            <h1 style={{ fontSize: "clamp(26px, 3.2vw, 36px)", fontWeight: 800, color: "#F8F5EF", marginBottom: "18px" }}>
              Terms of Service
            </h1>
            <p style={{ fontSize: "15px", color: "#ded9cf", lineHeight: 1.7, maxWidth: "780px" }}>
              Last updated: August 2026. These terms govern software architecture, full-stack web engineering, mobile development, and QA testing engagements provided by Jet Slate.
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

            <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#F8F5EF", marginBottom: "12px" }}>1. Engineering Engagements &amp; Milestones</h2>
            <p style={{ marginBottom: "24px" }}>
              All software development services are performed according to mutually agreed scope documents, milestone delivery schedules, and technical architecture specifications.
            </p>

            <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#F8F5EF", marginBottom: "12px" }}>2. Code Ownership &amp; Intellectual Property</h2>
            <p style={{ marginBottom: "24px" }}>
              Upon full settlement of milestone invoices, 100% of custom source code, documentation, and related digital assets created specifically for the client are assigned directly to the client.
            </p>

            <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#F8F5EF", marginBottom: "12px" }}>3. Quality Assurance &amp; Warranty</h2>
            <p style={{ marginBottom: "24px" }}>
              Deliverables include comprehensive automated test suites and a standard 30-day post-launch warranty for bug fixes within the agreed scope.
            </p>

            <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#F8F5EF", marginBottom: "12px" }}>4. Inquiries</h2>
            <p>
              For project agreements, contact <a href="mailto:contact@jetslate.com" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C" }}>contact@jetslate.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import React, { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
  category: string;
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: "Full-Stack Web",
      q: "What tech stack do you use for Full-Stack Web Development?",
      a: "I specialize in Next.js 15 (App Router, Server Actions, Edge SSR), React, TypeScript, Node.js, and PostgreSQL with Prisma ORM. For UI design, I combine modern vanilla CSS and responsive frameworks to achieve 100/100 Core Web Vitals, ultra-fast load times, and pixel-perfect responsiveness."
    },
    {
      category: "Mobile Engineering",
      q: "Do you build native or cross-platform Mobile Apps for iOS and Android?",
      a: "I build cross-platform mobile apps using Flutter & Dart, which compiles to 100% native ARM machine code on both iOS and Android. This guarantees fluid 60fps/120fps animations, full hardware integration (camera, GPS, biometrics), and single codebase efficiency that cuts development time in half."
    },
    {
      category: "Enterprise Software",
      q: "Can you build custom Desktop and Point-of-Sale (POS) / Inventory software?",
      a: "Yes! I have extensive experience building mission-critical business software including Enterprise POS suites (like UR Pharmacy POS), inventory management, invoicing, barcode scanning, and multi-branch SQLite synchronization for Windows, macOS, and Linux desktop environments."
    },
    {
      category: "QA & Testing",
      q: "How do you ensure zero-defect software and automated QA coverage?",
      a: "Every project incorporates automated Playwright E2E test suites, strict TypeScript type checking, and CI/CD validation. This tests real user journeys (authentication, checkout, form submissions, state management) to ensure zero regressions before production deployment."
    },
    {
      category: "Pricing & Scope",
      q: "How does pricing work for static sites vs full-stack database portals?",
      a: "Projects start at $100 for lightweight 1–3 page static websites with sub-second speeds. Dynamic websites with full PostgreSQL databases, admin CMS panels, and authentication start at $300. Complex mobile apps and custom enterprise SaaS start at $600+. All packages include upfront milestones with zero hidden fees."
    },
    {
      category: "Delivery & Support",
      q: "What is your typical project delivery timeline and post-launch support?",
      a: "Static sites are typically delivered in 3–5 business days. Full-stack database web portals take 7–12 days, and mobile apps take 14–21 days. Every project includes comprehensive handover documentation, code ownership, and 14–30 days of complimentary post-launch support."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="wpr-faq-area mb--16">
      <div className="container">
        <div 
          className="section-inner border"
          style={{
            padding: "54px 48px",
            position: "relative",
            borderRadius: 0,
            background: "#161616"
          }}
        >
          {/* Blueprint Corner Dots */}
          <span className="square-shape top-left"></span>
          <span className="square-shape top-right"></span>
          <span className="square-shape bottom-left"></span>
          <span className="square-shape bottom-right"></span>

          {/* Section Header */}
          <div style={{ maxWidth: "860px", marginBottom: "40px" }}>
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
                marginBottom: "16px"
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A84C", display: "inline-block" }}></span>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <h2 
              style={{ 
                fontSize: "clamp(26px, 3.2vw, 40px)", 
                fontWeight: 800, 
                color: "#F8F5EF", 
                lineHeight: 1.2, 
                letterSpacing: "-0.025em", 
                margin: "0 0 14px 0",
                textTransform: "uppercase"
              }}
            >
              Frequently Asked Questions:{" "}
              <span 
                style={{ 
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  display: "inline-block"
                }}
              >
                Architecture &amp; Engagements
              </span>
            </h2>

            <p style={{ fontSize: "15px", color: "#E8D6B3", lineHeight: 1.6, margin: 0, maxWidth: "680px" }}>
              Clear answers on tech stacks, mobile development, database architectures, pricing tiers, and delivery milestones.
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div 
                  key={idx}
                  style={{ 
                    border: isOpen ? "1px solid #C9A84C" : "1px solid #2E2E2E", 
                    borderRadius: "14px", 
                    background: isOpen ? "linear-gradient(180deg, #1C1C1C 0%, #151515 100%)" : "#161616",
                    boxShadow: isOpen ? "0 8px 24px rgba(201, 168, 76, 0.14)" : "0 2px 6px rgba(0, 0, 0, 0.5)",
                    overflow: "hidden",
                    transition: "all 0.25s ease"
                  }}
                  className="faq-card"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "16px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                      <span 
                        style={{ 
                          fontSize: "11px", 
                          fontWeight: 800, 
                          color: isOpen ? "#C9A84C" : "#E8D6B3", 
                          background: isOpen ? "rgba(201, 168, 76, 0.12)" : "#222222", 
                          padding: "3px 10px", 
                          borderRadius: "9999px",
                          letterSpacing: "0.02em",
                          border: isOpen ? "1px solid rgba(201, 168, 76, 0.25)" : "1px solid #2E2E2E"
                        }}
                      >
                        {item.category}
                      </span>
                      <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "#F8F5EF", lineHeight: 1.35 }}>
                        {item.q}
                      </h3>
                    </div>

                    <div 
                      style={{ 
                        width: "32px", 
                        height: "32px", 
                        borderRadius: "50%", 
                        background: isOpen ? "#C9A84C" : "#222222", 
                        color: isOpen ? "#111111" : "#E8D6B3", 
                        border: isOpen ? "1px solid #C9A84C" : "1px solid #2E2E2E",
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        fontSize: "16px",
                        fontWeight: 700,
                        transition: "all 0.2s ease",
                        flexShrink: 0
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </div>
                  </button>

                  {isOpen && (
                    <div 
                      style={{ 
                        padding: "0 24px 20px 24px", 
                        borderTop: "1px solid #2E2E2E", 
                        paddingTop: "16px" 
                      }}
                    >
                      <p style={{ margin: 0, fontSize: "14.5px", lineHeight: 1.7, color: "#ded9cf" }}>
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>

      <style jsx>{`
        .faq-card:hover {
          border-color: #C9A84C !important;
        }
      `}</style>
    </section>
  );
}

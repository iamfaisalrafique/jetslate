import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Software Engineering Pricing & Retainers | Jet Slate",
  },
  description: "Clear, milestone-based pricing for Next.js web applications, Flutter mobile apps, QA automation frameworks, and dedicated technical consulting.",
  alternates: {
    canonical: "https://jetslate.com/pricing",
  },
  openGraph: {
    title: "Software Engineering Pricing & Retainers | Jet Slate",
    description: "Clear, milestone-based pricing for Next.js web applications, Flutter mobile apps, QA automation frameworks, and dedicated technical consulting.",
    url: "https://jetslate.com/pricing",
    type: "website",
    images: [
      {
        url: "https://jetslate.com/assets/images/about/01.webp",
        width: 1200,
        height: 896,
        alt: "Jet Slate Pricing and Packages",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparent Software Engineering Pricing & Retainers",
    description: "Clear, milestone-based pricing for Next.js web applications, Flutter mobile apps, QA automation frameworks, and dedicated technical consulting.",
    images: ["https://jetslate.com/assets/images/about/01.webp"],
  }
};

export default function PricingPage() {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://jetslate.com/pricing#webpage",
        "url": "https://jetslate.com/pricing",
        "name": "Transparent Software Engineering Pricing & Retainers | Jet Slate",
        "description": "Clear, milestone-based pricing for Next.js web applications, Flutter mobile apps, QA automation frameworks, and dedicated technical consulting.",
        "publisher": {
          "@id": "https://jetslate.com/#person"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://jetslate.com/pricing#breadcrumb",
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
            "name": "Pricing",
            "item": "https://jetslate.com/pricing"
          }
        ]
      }
    ]
  };

  const allPackages = [
    {
      category: "Web Engineering & Landing Pages",
      items: [
        {
          name: "High-Speed Static Website (1–3 Pages)",
          price: "$100",
          delivery: "3–5 Days",
          desc: "Ultra-fast static website with Next.js SSG, custom modern CSS, 100/100 Core Web Vitals, and lead contact form.",
          ideal: "Personal Brands, Portfolios & Product Landing Pages"
        },
        {
          name: "Multi-Page Corporate & Business Site (4–8 Pages)",
          price: "$200",
          delivery: "5–8 Days",
          desc: "Full business website with services showcase, case study galleries, team pages, and structured schema SEO.",
          ideal: "Agencies, Clinics, Law Firms & Local Businesses"
        },
        {
          name: "Full-Stack Dynamic Web & Database Portal",
          price: "$300",
          delivery: "7–12 Days",
          desc: "Next.js 15 App Router web app with PostgreSQL/MySQL, Prisma ORM, Admin CMS dashboard, and user authentication.",
          ideal: "Startups, Directory Portals & Content Management"
        }
      ]
    },
    {
      category: "E-Commerce & Digital Commerce",
      items: [
        {
          name: "Direct-to-Consumer (D2C) E-Commerce Store",
          price: "$350",
          delivery: "8–14 Days",
          desc: "High-converting online store with Stripe/PayPal checkout, cart state, inventory tracking, and customer orders panel.",
          ideal: "Retailers, Boutique Brands & Digital Products"
        },
        {
          name: "Multi-Vendor Marketplace & Booking Platform",
          price: "$550+",
          delivery: "14–21 Days",
          desc: "Complex marketplace with split payments, vendor dashboards, dynamic scheduling calendar, and review systems.",
          ideal: "Service Marketplaces, Rental & Travel Portals"
        }
      ]
    },
    {
      category: "Mobile App Development (iOS & Android)",
      items: [
        {
          name: "Flutter MVP Mobile Application",
          price: "$450",
          delivery: "10–16 Days",
          desc: "60fps cross-platform mobile app for iOS & Android with native push notifications, user profiles, and cloud DB API.",
          ideal: "Early-Stage Startups & Product MVPs"
        },
        {
          name: "Full-Scale Production Mobile Ecosystem",
          price: "$600+",
          delivery: "18–28 Days",
          desc: "High-performance Flutter mobile app with offline-first SQLite sync, biometric auth, in-app purchases, and automated QA.",
          ideal: "Fintech, EdTech, Delivery & Health Apps"
        }
      ]
    },
    {
      category: "Enterprise Software & Cloud Systems",
      items: [
        {
          name: "Enterprise Point of Sale (POS) & Inventory Suite",
          price: "$500+",
          delivery: "14–20 Days",
          desc: "Desktop/web POS software with sub-second barcode scanning, receipt thermal printing, and multi-branch stock sync.",
          ideal: "Pharmacies, Supermarkets & Wholesale Stores"
        },
        {
          name: "Autonomous AI Agent & Workflow Pipeline",
          price: "$400+",
          delivery: "7–14 Days",
          desc: "Custom AI agent pipelines with vector embeddings, LLM tool integration, multi-tenant workspaces, and webhook triggers.",
          ideal: "AI Startups & Automation Teams"
        },
        {
          name: "Automated QA & Playwright E2E Testing Suite",
          price: "$250",
          delivery: "5–7 Days",
          desc: "Comprehensive automated test suites for web/mobile apps with CI/CD integration, visual regression, and load testing.",
          ideal: "Production Teams Needing Zero-Defect Releases"
        },
        {
          name: "Dedicated Engineering Retainer & Architecture SLA",
          price: "$500 / mo",
          delivery: "Ongoing Partnership",
          desc: "Ongoing full-stack engineering, performance audits, security patching, feature development, and priority technical support.",
          ideal: "Growing Businesses & Long-term Technical Roadmaps"
        }
      ]
    }
  ];

  return (
    <main style={{ background: "#111111", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <Header />

      <section style={{ padding: "60px 0 20px 0" }}>
        <div className="container">
          <div 
            className="section-inner bg-[#161616] border" 
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

            {/* Header */}
            <div style={{ maxWidth: "860px", marginBottom: "48px" }}>
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
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10B981", display: "inline-block" }}></span>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  TRANSPARENT ENGINEERING PACKAGES
                </span>
              </div>

              <h1 
                style={{ 
                  fontSize: "clamp(28px, 3.8vw, 44px)", 
                  fontWeight: 800, 
                  color: "#F8F5EF", 
                  lineHeight: 1.2, 
                  letterSpacing: "-0.025em", 
                  margin: "0 0 16px 0",
                  textTransform: "uppercase"
                }}
              >
                All 10+ Project Packages &amp;{" "}
                <span 
                  style={{ 
                    background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)", 
                    WebkitBackgroundClip: "text", 
                    WebkitTextFillColor: "transparent",
                    display: "inline-block"
                  }}
                >
                  Custom Pricing.
                </span>
              </h1>

              <p style={{ fontSize: "15.5px", color: "#E8D6B3", lineHeight: 1.65, margin: 0 }}>
                Transparent pricing starting from $100 for lightweight static sites up to comprehensive full-stack database architectures, Flutter mobile apps, and dedicated enterprise support.
              </p>
            </div>

            {/* Categorized Packages Grid */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              {allPackages.map((category, catIdx) => (
                <div key={catIdx}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", borderBottom: "2px solid #2E2E2E", paddingBottom: "10px" }}>
                    <span style={{ width: "10px", height: "10px", background: "#C9A84C", display: "inline-block" }}></span>
                    <h2 style={{ fontSize: "19px", fontWeight: 800, color: "#F8F5EF", margin: 0, textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                      {category.category}
                    </h2>
                  </div>

                  <div 
                    style={{ 
                      display: "grid", 
                      gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", 
                      gap: "18px" 
                    }}
                  >
                    {category.items.map((pkg, idx) => (
                      <div 
                        key={idx}
                        style={{ 
                          background: "#161616", 
                          border: "1px solid #2E2E2E", 
                          borderRadius: "14px", 
                          padding: "26px 24px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          transition: "all 0.25s ease"
                        }}
                        className="package-card"
                      >
                        <div>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "12px" }}>
                            <h3 style={{ fontSize: "16.5px", fontWeight: 800, color: "#F8F5EF", margin: 0, lineHeight: 1.35 }}>
                              {pkg.name}
                            </h3>
                            <span 
                              style={{ 
                                fontSize: "18px", 
                                fontWeight: 800, 
                                color: "#C9A84C",
                                background: "#161616",
                                padding: "4px 10px",
                                borderRadius: "8px",
                                border: "1px solid rgba(201, 168, 76, 0.2)",
                                whiteSpace: "nowrap"
                              }}
                            >
                              {pkg.price}
                            </span>
                          </div>

                          <p style={{ fontSize: "13.5px", color: "#ded9cf", lineHeight: 1.6, margin: "0 0 16px 0" }}>
                            {pkg.desc}
                          </p>
                        </div>

                        <div>
                          <div style={{ fontSize: "12px", color: "#E8D6B3", marginBottom: "14px", display: "flex", justifyContent: "space-between" }}>
                            <span><strong>Delivery:</strong> {pkg.delivery}</span>
                            <span><strong>Ideal For:</strong> {pkg.ideal.split(",")[0]}</span>
                          </div>

                          <Link 
                            href="/#contact"
                            style={{ 
                              display: "block", 
                              textAlign: "center", 
                              padding: "10px 18px", 
                              borderRadius: "9999px", 
                              background: "#161616", 
                              color: "#C9A84C", 
                              border: "1px solid #3A3A3A", 
                              fontSize: "13px", 
                              fontWeight: 700, 
                              textDecoration: "none",
                              transition: "all 0.2s ease"
                            }}
                            className="pkg-inquire-btn"
                          >
                            Book This Package →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Scope Kickoff Banner */}
            <div 
              style={{ 
                marginTop: "48px",
                background: "linear-gradient(135deg, #C9A84C 0%, #083E94 60%, #03245E 100%)", 
                borderRadius: "16px", 
                padding: "44px 38px",
                color: "#161616",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "28px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 12px 36px rgba(201, 168, 76, 0.22)",
                border: "1px solid rgba(255, 255, 255, 0.18)"
              }}
            >
              {/* Background ambient lighting */}
              <div 
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(201, 168, 76, 0) 70%)",
                  pointerEvents: "none"
                }}
              />

              <div style={{ position: "relative", zIndex: 2, maxWidth: "660px" }}>
                {/* Sleek Pill Eyebrow */}
                <div 
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "5px 14px",
                    borderRadius: "9999px",
                    background: "rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    marginBottom: "14px"
                  }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#38BDF8", display: "inline-block", boxShadow: "0 0 8px #38BDF8" }}></span>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#161616", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    BESPOKE ARCHITECTURE &amp; SCOPE
                  </span>
                </div>

                <h3 
                  style={{ 
                    fontSize: "clamp(20px, 2.4vw, 26px)", 
                    fontWeight: 800, 
                    color: "#161616 !important", 
                    lineHeight: 1.25, 
                    letterSpacing: "-0.02em", 
                    margin: "0 0 10px 0" 
                  }}
                >
                  Have a Unique Requirement or Custom Architecture?
                </h3>
                <p 
                  style={{ 
                    fontSize: "14.5px", 
                    color: "rgba(255, 255, 255, 0.9) !important", 
                    lineHeight: 1.6, 
                    margin: 0 
                  }}
                >
                  From specialized AI workflows and custom database pipelines to high-concurrency fintech backends — get an exact tailored estimate and milestone roadmap with zero obligation.
                </p>
              </div>

              <div style={{ position: "relative", zIndex: 2 }}>
                <Link 
                  href="/contact"
                  style={{ 
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: "10px", 
                    padding: "14px 30px", 
                    borderRadius: "9999px", 
                    background: "#161616", 
                    color: "#C9A84C", 
                    fontSize: "14px", 
                    fontWeight: 800, 
                    textDecoration: "none",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.18)",
                    whiteSpace: "nowrap",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease"
                  }}
                >
                  <span style={{ color: "#C9A84C" }}>Request Custom Quote</span>
                  <span style={{ color: "#C9A84C" }}>→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <style dangerouslySetInnerHTML={{ __html: `
        .package-card:hover {
          background: #161616 !important;
          border-color: #C9A84C !important;
          box-shadow: 0 8px 24px rgba(201, 168, 76, 0.08) !important;
          transform: translateY(-2px);
        }
        .pkg-inquire-btn:hover {
          background: #C9A84C !important;
          color: #161616 !important;
          border-color: #C9A84C !important;
        }
      `}} />
    </main>
  );
}

import React from "react";
import Link from "next/link";

export default function PricingPlans() {
  const plans = [
    {
      id: "starter",
      name: "Static Web & Landing Page",
      badge: "FAST TURNAROUND",
      price: "$100",
      period: "per project",
      highlight: false,
      desc: "Perfect for high-converting landing pages, personal portfolios, and fast static business websites.",
      features: [
        "1 to 3 Custom Static Pages",
        "Next.js SSG & Tailored Modern CSS",
        "100/100 Core Web Vitals & Sub-second Load",
        "100% Mobile & Tablet Responsive",
        "Working Lead Capture / Contact Form",
        "Semantic HTML & On-Page SEO Optimization",
        "Free Cloud Hosting Deployment (Vercel)",
        "7 Days Post-Launch Support"
      ],
      ctaText: "Start Static Site ($100)",
      ctaLink: "#contact"
    },
    {
      id: "fullstack",
      name: "Full-Stack Dynamic Web & DB",
      badge: "MOST POPULAR",
      price: "$300",
      period: "per project",
      highlight: true,
      desc: "Complete web application with dynamic backend database, custom admin CMS, and secure user flows.",
      features: [
        "Multi-Page Next.js 15 App Router Architecture",
        "PostgreSQL / MySQL Database with Prisma ORM",
        "Custom Admin Dashboard & Full CRUD CMS",
        "Secure NextAuth Authentication & Roles",
        "REST APIs & Server Actions Integration",
        "Automated Form Validation & Error Handling",
        "Schema.org Rich Snippets & Technical SEO",
        "Automated Playwright QA Smoke Tests",
        "14 Days Post-Launch Support & Walkthrough"
      ],
      ctaText: "Start Full-Stack Web ($300)",
      ctaLink: "#contact"
    },
    {
      id: "mobile-enterprise",
      name: "Mobile App & Enterprise Cloud",
      badge: "SCALE & PERFORMANCE",
      price: "$600+",
      period: "per project",
      highlight: false,
      desc: "Cross-platform mobile apps for iOS & Android, high-throughput POS suites, and scalable cloud SaaS.",
      features: [
        "60fps Flutter Mobile App (iOS & Android)",
        "Offline-First SQLite Sync & Cloud DB",
        "Real-Time WebSockets & Push Notifications",
        "Payment Gateway Integration (Stripe / PayPal)",
        "Enterprise POS & Barcode Scanner Modules",
        "Comprehensive Automated Playwright E2E Suite",
        "Docker / Cloud Infrastructure Deployment",
        "30 Days Priority Support & SLA"
      ],
      ctaText: "Start Mobile / Enterprise ($600+)",
      ctaLink: "#contact"
    }
  ];

  return (
    <section id="pricing" className="wpr-pricing-plans-area mb--16">
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
                TRANSPARENT PROJECT PACKAGES
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
              Predictable Pricing Built for{" "}
              <span 
                style={{ 
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  display: "inline-block"
                }}
              >
                Every Project Scope.
              </span>
            </h2>

            <p style={{ fontSize: "15px", color: "#E8D6B3", lineHeight: 1.6, margin: 0, maxWidth: "680px" }}>
              Honest, transparent project tiers starting from lightweight static sites to dynamic database systems and full-scale mobile software.
            </p>
          </div>

          {/* 3 Pricing Cards Grid */}
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", 
              gap: "24px",
              marginBottom: "36px"
            }}
          >
            {plans.map((plan) => (
              <div 
                key={plan.id}
                style={{ 
                  background: plan.highlight ? "linear-gradient(180deg, #1C1C1C 0%, #141414 100%)" : "#161616", 
                  border: plan.highlight ? "2px solid #C9A84C" : "1px solid #2E2E2E", 
                  borderRadius: "16px", 
                  padding: "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: plan.highlight ? "0 14px 35px rgba(201, 168, 76, 0.18)" : "0 4px 16px rgba(0, 0, 0, 0.5)",
                  position: "relative",
                  transition: "all 0.3s ease"
                }}
                className="pricing-plan-card"
              >
                {/* Popular Badge */}
                {plan.highlight && (
                  <div 
                    style={{ 
                      position: "absolute", 
                      top: "-12px", 
                      right: "24px", 
                      background: "#C9A84C", 
                      color: "#111111", 
                      fontSize: "10.5px", 
                      fontWeight: 800, 
                      padding: "4px 12px", 
                      borderRadius: "9999px", 
                      letterSpacing: "0.05em",
                      boxShadow: "0 4px 12px rgba(201, 168, 76, 0.35)"
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "6px" }}>
                    {!plan.highlight && plan.badge}
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#F8F5EF", marginBottom: "10px" }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#ded9cf", lineHeight: 1.55, minHeight: "42px", marginBottom: "20px" }}>
                    {plan.desc}
                  </p>

                  {/* Price */}
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "24px", borderBottom: "1px solid #2E2E2E", paddingBottom: "20px" }}>
                    <span style={{ fontSize: "40px", fontWeight: 800, color: "#F8F5EF", letterSpacing: "-0.03em" }}>
                      {plan.price}
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#E8D6B3" }}>
                      {plan.period}
                    </span>
                  </div>

                  {/* Features List (Compact, Bold & Line Dividers) */}
                  <div style={{ display: "flex", flexDirection: "column", margin: "0 0 24px 0" }}>
                    {plan.features.map((feat, idx) => (
                      <div 
                        key={idx} 
                        style={{ 
                          display: "flex", 
                          alignItems: "center", 
                          gap: "10px", 
                          fontSize: "13.5px", 
                          fontWeight: 700, 
                          color: "#F8F5EF", 
                          lineHeight: 1.3, 
                          padding: "8px 0",
                          borderBottom: idx === plan.features.length - 1 ? "none" : "1px solid #222222"
                        }}
                      >
                        <span 
                          style={{ 
                            width: "20px", 
                            height: "20px", 
                            borderRadius: "50%", 
                            background: "rgba(201, 168, 76, 0.12)", 
                            color: "#C9A84C", 
                            fontWeight: 900, 
                            fontSize: "12px", 
                            display: "inline-flex", 
                            alignItems: "center", 
                            justifyContent: "center",
                            flexShrink: 0 
                          }}
                        >
                          ✓
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link 
                  href={plan.ctaLink}
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    gap: "8px", 
                    padding: "13px 20px", 
                    borderRadius: "9999px", 
                    background: plan.highlight ? "#C9A84C" : "#222222", 
                    color: plan.highlight ? "#111111" : "#F8F5EF", 
                    border: plan.highlight ? "1px solid #C9A84C" : "1px solid #383838", 
                    fontSize: "13.5px", 
                    fontWeight: 700, 
                    textDecoration: "none",
                    boxShadow: plan.highlight ? "0 6px 18px rgba(201, 168, 76, 0.3)" : "0 2px 6px rgba(0, 0, 0, 0.4)",
                    transition: "all 0.25s ease",
                    textAlign: "center"
                  }}
                  className="pricing-btn"
                >
                  <span>{plan.ctaText}</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Custom Plans & 10+ Categorized Packages Callout */}
          <div 
            style={{ 
              background: "linear-gradient(135deg, rgba(201, 168, 76, 0.05) 0%, rgba(232, 214, 179, 0.08) 100%)", 
              border: "1px solid rgba(201, 168, 76, 0.2)", 
              borderRadius: "14px", 
              padding: "24px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px"
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span style={{ fontSize: "16px" }}>⚙️</span>
                <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#F8F5EF", margin: 0 }}>
                  Need a Custom Architecture or Specialized Enterprise Scope?
                </h4>
              </div>
              <p style={{ fontSize: "13.5px", color: "#ded9cf", margin: 0 }}>
                We offer 10+ tailored packages including E-Commerce, AI Pipelines, Mobile Apps, and Dedicated Engineering Retainers.
              </p>
            </div>

            <Link 
              href="/pricing"
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "8px", 
                padding: "11px 24px", 
                borderRadius: "9999px", 
                background: "#C9A84C", 
                color: "#FFFFFF", 
                fontSize: "13px", 
                fontWeight: 700, 
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(201, 168, 76, 0.25)",
                transition: "all 0.2s ease"
              }}
              className="custom-packages-btn"
            >
              <span>Explore All 10+ Pricing Packages</span>
              <span>→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

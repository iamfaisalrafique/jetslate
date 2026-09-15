"use client";

import React from "react";

export default function WhyChooseUs2() {
  const principles = [
    {
      num: "01",
      title: "Strategy-Driven Automation",
      desc: "Every software build is backed by automated QA testing, resilient architecture analysis, and CI/CD pipelines that eliminate regressions before production deployment.",
      icon: "🛡️"
    },
    {
      num: "02",
      title: "Sub-Second Performance & Scale",
      desc: "From normalized PostgreSQL database indexing to Next.js edge caching and 60fps Flutter rendering, every system is engineered for 100/100 Core Web Vitals.",
      icon: "⚡"
    },
    {
      num: "03",
      title: "Direct Senior Collaboration",
      desc: "You partner directly with a senior software architect — no junior handoffs, no account manager delays. Direct technical communication and weekly sprint updates.",
      icon: "🤝"
    },
    {
      num: "04",
      title: "Zero-Defect Production SLA",
      desc: "Complete strict TypeScript type safety, automated Playwright E2E coverage, secure authentication, and bulletproof transactional integrity for mission-critical apps.",
      icon: "💎"
    }
  ];

  return (
    <section id="principles" className="wpr-why-choose-us-area2 mb--16">
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
                CORE ARCHITECTURAL PRINCIPLES
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
              Engineering Software With{" "}
              <span 
                style={{ 
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  display: "inline-block"
                }}
              >
                Precision &amp; Reliability.
              </span>
            </h2>

            <p style={{ fontSize: "15px", color: "#E8D6B3", lineHeight: 1.6, margin: 0, maxWidth: "680px" }}>
              The non-negotiable engineering standards and architectural disciplines applied to every web system, mobile application, and database build.
            </p>
          </div>

          {/* 4 Core Principles Grid */}
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
              gap: "20px" 
            }}
          >
            {principles.map((item) => (
              <div 
                key={item.num}
                className="principle-card"
                style={{ 
                  background: "#111111", 
                  border: "1px solid #2E2E2E", 
                  borderRadius: "14px", 
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s ease",
                  position: "relative"
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                    <span style={{ fontSize: "28px" }}>{item.icon}</span>
                    <span 
                      style={{ 
                        fontSize: "12px", 
                        fontWeight: 800, 
                        color: "#C9A84C", 
                        background: "rgba(201, 168, 76, 0.08)", 
                        padding: "4px 10px", 
                        borderRadius: "9999px",
                        letterSpacing: "0.05em"
                      }}
                    >
                      {item.num}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "17px", fontWeight: 800, color: "#F8F5EF", marginBottom: "12px", lineHeight: 1.3 }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: "14px", color: "#ded9cf", lineHeight: 1.65, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style jsx>{`
        .principle-card:hover {
          background: #FFFFFF !important;
          border-color: #C9A84C !important;
          box-shadow: 0 10px 25px rgba(201, 168, 76, 0.1) !important;
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
}

import React from 'react';
import Link from 'next/link';

export default function OurApproach() {
  const steps = [
    {
      num: "01",
      title: "Discovery & System Blueprinting",
      desc: "Deep requirement analysis, normalized database schema modeling, API contract design, and cloud architecture planning to ensure infinite scalability from day one."
    },
    {
      num: "02",
      title: "Clean Code & High-Velocity Development",
      desc: "Engineering modern Next.js/React web platforms and Flutter iOS/Android applications with strict TypeScript type safety, modular design systems, and sub-second render speeds."
    },
    {
      num: "03",
      title: "Automated QA & Resilient Cloud Launch",
      desc: "Comprehensive automated testing (Playwright E2E & integration suites), 100/100 Core Web Vitals optimization, and automated CI/CD deployment with zero downtime."
    }
  ];

  return (
    <section id="approach" className="our-approch-area-style-one mb--16">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content Column */}
            <div>
              <div className="approch-area-left">
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
                    ENGINEERING METHODOLOGY
                  </span>
                </div>

                <h2 
                  style={{ 
                    fontSize: "clamp(26px, 3.2vw, 38px)", 
                    fontWeight: 800, 
                    color: "#F8F5EF", 
                    lineHeight: 1.2, 
                    letterSpacing: "-0.025em", 
                    margin: "0 0 16px 0",
                    textTransform: "uppercase"
                  }}
                >
                  From Conceptual Vision to{" "}
                  <span 
                    style={{ 
                      background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)", 
                      WebkitBackgroundClip: "text", 
                      WebkitTextFillColor: "transparent",
                      display: "inline-block"
                    }}
                  >
                    Production Reality.
                  </span>
                </h2>

                <p style={{ fontSize: "15px", color: "#E8D6B3", lineHeight: 1.65, margin: "0 0 28px 0" }}>
                  A disciplined, iterative engineering lifecycle designed to minimize technical debt, accelerate time-to-market, and deliver bulletproof software platforms.
                </p>

                <Link 
                  href="/services" 
                  className="wpr-btn btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 28px",
                    background: "#C9A84C",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "14px",
                    textDecoration: "none",
                    borderRadius: "9999px",
                    boxShadow: "0 4px 14px rgba(201, 168, 76, 0.25)",
                    transition: "all 0.25s ease"
                  }}
                >
                  <span>Explore All Solutions</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Approach Steps Column */}
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {steps.map((step) => (
                  <div 
                    key={step.num}
                    style={{
                      background: "#111111",
                      border: "1px solid #2E2E2E",
                      borderRadius: "14px",
                      padding: "24px 26px",
                      transition: "all 0.25s ease",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
                      display: "flex",
                      gap: "20px",
                      alignItems: "flex-start"
                    }}
                    className="approach-step-card"
                  >
                    <div 
                      style={{
                        flexShrink: 0,
                        width: "42px",
                        height: "42px",
                        borderRadius: "10px",
                        background: "#C9A84C",
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "15px",
                        fontFamily: "ui-monospace, SFMono-Regular, monospace"
                      }}
                    >
                      {step.num}
                    </div>

                    <div>
                      <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#F8F5EF", margin: "0 0 8px 0" }}>
                        {step.title}
                      </h3>
                      <p style={{ fontSize: "14px", color: "#E8D6B3", lineHeight: 1.6, margin: 0 }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

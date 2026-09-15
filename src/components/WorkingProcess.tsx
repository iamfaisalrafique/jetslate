"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const LIFECYCLE_STEPS = [
  {
    number: "//01",
    shortTitle: "System Architecture",
    title: "Discovery, Requirements & System Architecture",
    desc: "We analyze business requirements and engineer robust relational database schemas (PostgreSQL), high-throughput API contracts, and scalable cloud topology before writing a single line of code.",
    image: "/assets/images/working-process/01.webp?v=2",
    tags: ["PostgreSQL Schema", "API Contracts", "System Topology"]
  },
  {
    number: "//02",
    shortTitle: "UI/UX & Design Systems",
    title: "UI/UX Wireframing & Design Systems",
    desc: "We craft cohesive design systems with reusable component tokens, fluid responsive grid layouts, and interactive mobile prototypes tailored for high user conversion and retention.",
    image: "/assets/images/working-process/02.webp?v=2",
    tags: ["Design Tokens", "Responsive Grids", "Interactive Prototypes"]
  },
  {
    number: "//03",
    shortTitle: "Full-Stack Web & Mobile",
    title: "Full-Stack Web & Cross-Platform Mobile Build",
    desc: "We develop production-ready Next.js web applications, resilient Node.js backends, and high-performance Flutter mobile apps for iOS and Android with clean, maintainable code.",
    image: "/assets/images/working-process/03.webp?v=2",
    tags: ["Next.js & React", "Flutter (iOS/Android)", "REST & GraphQL"]
  },
  {
    number: "//04",
    shortTitle: "Automated QA & Security",
    title: "Automated QA Testing & Security Auditing",
    desc: "We implement automated Playwright and Selenium end-to-end test suites, API validation, and OWASP cybersecurity audits to guarantee 100% bug-free and hardened production releases.",
    image: "/assets/images/working-process/04.webp?v=2",
    tags: ["Playwright / Selenium", "OWASP Security", "Zero Regression"]
  },
  {
    number: "//05",
    shortTitle: "Cloud Infrastructure & CI/CD",
    title: "Cloud Infrastructure & CI/CD Deployment",
    desc: "We containerize workloads with Docker and orchestrate automated GitHub Actions CI/CD pipelines for zero-downtime deployments across Vercel, AWS, and App Store distributions.",
    image: "/assets/images/working-process/05.webp?v=2",
    tags: ["Docker & AWS", "GitHub Actions CI/CD", "Vercel Edge"]
  },
  {
    number: "//06",
    shortTitle: "24/7 Monitoring & Scaling",
    title: "24/7 Monitoring, Performance Tuning & Scaling",
    desc: "We monitor production systems with real-time telemetry, 99.9% uptime SLA tracking, database query optimization, and global CDN caching to support enterprise scale seamlessly.",
    image: "/assets/images/working-process/06.webp?v=2",
    tags: ["99.9% Uptime SLA", "Database Indexing", "Global CDN"]
  }
];

export default function WorkingProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const STEP_DURATION = 5500; // 5.5 seconds per step for comfortable reading

  // Manually select step
  const handleSelectStep = (idx: number) => {
    setActiveStep(idx);
  };

  // Timer to advance to next step every 5.5s (offloads progress animation to GPU CSS)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveStep((curr) => (curr + 1) % LIFECYCLE_STEPS.length);
    }, STEP_DURATION);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Smoothly scroll active pill into view within horizontal timeline
  useEffect(() => {
    const container = timelineRef.current;
    if (container) {
      const activeBtn = container.children[activeStep] as HTMLElement;
      if (activeBtn) {
        const scrollLeft = activeBtn.offsetLeft - container.offsetWidth / 2 + activeBtn.offsetWidth / 2;
        container.scrollTo({ left: Math.max(0, scrollLeft), behavior: "smooth" });
      }
    }
  }, [activeStep]);

  const current = LIFECYCLE_STEPS[activeStep];

  return (
    <section 
      id="process" 
      className="wpr-working-process mb--16"
    >
      <div className="container">
        <div 
          className="section-inner border"
          style={{
            padding: "54px 48px",
            position: "relative",
            borderRadius: 0,
            background: "#161616"
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Blueprint Corner Dots */}
          <span className="square-shape top-left"></span>
          <span className="square-shape top-right"></span>
          <span className="square-shape bottom-left"></span>
          <span className="square-shape bottom-right"></span>

          {/* Section Header */}
          <div style={{ maxWidth: "860px", marginBottom: "32px" }}>
            {/* Eyebrow Pill */}
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
              <span 
                style={{ 
                  width: "6px", 
                  height: "6px", 
                  borderRadius: "50%", 
                  background: "#C9A84C", 
                  display: "inline-block" 
                }}
              ></span>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                ENGINEERING LIFECYCLE • {isPaused ? "PAUSED (HOVER)" : "AUTO-PLAYING"}
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
              Software Engineering Lifecycle: From Architecture to{" "}
              <span 
                style={{ 
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  display: "inline-block"
                }}
              >
                Cloud Deployment
              </span>
            </h2>

            <p style={{ fontSize: "15px", color: "#E8D6B3", lineHeight: 1.6, margin: 0, maxWidth: "680px" }}>
              A rigorous 6-phase engineering lifecycle engineered for high-performance web platforms, cross-platform mobile apps, and mission-critical enterprise software.
            </p>
          </div>

          {/* 6 Step Horizontal Timeline Pills with Auto-Scroll Tracking */}
          <div 
            ref={timelineRef}
            style={{ 
              display: "flex", 
              gap: "8px", 
              overflowX: "auto", 
              paddingBottom: "14px", 
              marginBottom: "20px",
              scrollbarWidth: "none"
            }}
            className="lifecycle-timeline-nav"
          >
            {LIFECYCLE_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.shortTitle}
                  type="button"
                  onClick={() => handleSelectStep(idx)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "9999px",
                    background: isActive ? "#C9A84C" : "#1A1A1A",
                    color: isActive ? "#111111" : "#E8D6B3",
                    border: isActive ? "1px solid #C9A84C" : "1px solid #2E2E2E",
                    fontSize: "13px",
                    fontWeight: 700,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    display: "inline-flex",
                    alignItems: "center",
                    transition: "all 0.2s ease",
                    boxShadow: isActive ? "0 4px 14px rgba(201, 168, 76, 0.3)" : "none",
                    position: "relative"
                  }}
                  className={`lifecycle-pill-btn ${isActive ? "is-active" : ""}`}
                >
                  <span>{step.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Active Phase Smooth Progress Bar (GPU Accelerated) */}
          <div style={{ width: "100%", height: "4px", background: "#2E2E2E", borderRadius: "9999px", marginBottom: "28px", overflow: "hidden" }}>
            <div 
              key={activeStep}
              className="lifecycle-progress-bar-fill"
              style={{
                height: "100%",
                background: isPaused ? "linear-gradient(90deg, #F59E0B, #FBBF24)" : "linear-gradient(90deg, #C9A84C, #E8D6B3)",
                borderRadius: "9999px",
                animationPlayState: isPaused ? "paused" : "running",
              }}
            />
          </div>

          {/* Interactive Feature Display (Lag-Free GPU Accelerated) */}
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr", 
              gap: "36px", 
              alignItems: "center",
              background: "#111111",
              border: "1px solid #2E2E2E",
              borderRadius: "16px",
              padding: "40px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)"
            }}
            className="process-display-grid"
          >
            {/* Left Content */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <span 
                  style={{ 
                    fontSize: "12px", 
                    fontWeight: 800, 
                    color: "#C9A84C", 
                    background: "rgba(201, 168, 76, 0.08)", 
                    padding: "6px 14px", 
                    borderRadius: "9999px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase"
                  }}
                >
                  PHASE 0{activeStep + 1} OF 06
                </span>
              </div>

              <h3 
                style={{ 
                  fontSize: "clamp(20px, 2.2vw, 26px)", 
                  fontWeight: 800, 
                  color: "#F8F5EF", 
                  lineHeight: 1.3, 
                  marginBottom: "16px" 
                }}
              >
                {current.title}
              </h3>

              <p 
                style={{ 
                  fontSize: "15px", 
                  lineHeight: 1.7, 
                  color: "#ded9cf", 
                  marginBottom: "24px" 
                }}
              >
                {current.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
                {current.tags.map((tag) => (
                  <span 
                    key={tag}
                    style={{ 
                      fontSize: "12px", 
                      fontWeight: 700, 
                      padding: "5px 14px", 
                      borderRadius: "9999px", 
                      background: "#161616", 
                      color: "#C9A84C", 
                      border: "1px solid rgba(201, 168, 76, 0.2)",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)"
                    }}
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>

              {/* Action & Navigation Controls */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <button
                  onClick={() => setActiveStep((prev) => (prev === 0 ? LIFECYCLE_STEPS.length - 1 : prev - 1))}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1px solid #383838",
                    background: "#161616",
                    color: "#F8F5EF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontWeight: 800,
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)"
                  }}
                  aria-label="Previous step"
                >
                  ←
                </button>

                <button
                  onClick={() => setActiveStep((prev) => (prev === LIFECYCLE_STEPS.length - 1 ? 0 : prev + 1))}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1px solid #383838",
                    background: "#161616",
                    color: "#F8F5EF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontWeight: 800,
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)"
                  }}
                  aria-label="Next step"
                >
                  →
                </button>

                <Link
                  href="#contact"
                  style={{
                    padding: "10px 22px",
                    borderRadius: "9999px",
                    background: "#C9A84C",
                    color: "#FFFFFF",
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                    marginLeft: "8px",
                    boxShadow: "0 4px 12px rgba(201, 168, 76, 0.25)"
                  }}
                >
                  Start Phase 1 Consultation →
                </Link>
              </div>
            </div>

            {/* Right Image Illustration */}
            <div 
              style={{ 
                borderRadius: "14px", 
                overflow: "hidden", 
                border: "1px solid #383838",
                boxShadow: "0 12px 30px rgba(201, 168, 76, 0.12)",
                background: "#161616",
                position: "relative"
              }}
            >
              <img 
                src={current.image} 
                alt={current.title} 
                loading="lazy"
                decoding="async"
                width={800}
                height={533}
                style={{ 
                  width: "100%", 
                  height: "auto", 
                  display: "block",
                  transition: "transform 0.4s ease"
                }} 
              />
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .lifecycle-pill-btn:not(.is-active):hover {
          border-color: #C9A84C !important;
          color: #C9A84C !important;
          background: #222222 !important;
        }
        .lifecycle-pill-btn.is-active:hover {
          background: #d4b763 !important;
          color: #111111 !important;
          border-color: #d4b763 !important;
        }
        @keyframes progressAnim {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .lifecycle-progress-bar-fill {
          animation: progressAnim 5.5s linear forwards;
          will-change: width;
        }
        @media (max-width: 900px) {
          .process-display-grid {
            grid-template-columns: 1fr !important;
            padding: 24px !important;
          }
        }
        @media (max-width: 575px) {
          .process-display-grid {
            padding: 16px !important;
            border-radius: 12px !important;
          }
        }
      `}</style>
    </section>
  );
}

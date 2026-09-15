"use client";

import React, { useState } from "react";

interface AwardItem {
  id: string;
  date: string;
  organization: string;
  title: string;
  project: string;
  desc: string;
  badge: string;
  image: string;
}

export default function Awards() {
  const [activeId, setActiveId] = useState<string>("1");

  const awards: AwardItem[] = [
    {
      id: "1",
      date: "March 2025",
      organization: "Awwwards",
      title: "Site of the Day & System Architecture",
      project: "UK Quran Academy LMS",
      desc: "Recognized for ultra-responsive WebRTC interactive learning, high-concurrency student scheduling, and sub-second Next.js 15 SSR load speeds.",
      badge: "SITE OF THE DAY",
      image: "/assets/images/awards/award_01_awwwards.jpg"
    },
    {
      id: "2",
      date: "January 2025",
      organization: "Behance",
      title: "Featured in UI/UX & Mobile Engineering",
      project: "NovaPay Fintech Ecosystem",
      desc: "Awarded for exceptional 60fps Flutter mobile performance, biometric authentication security, and fluid micro-interaction design.",
      badge: "FEATURED WORK",
      image: "/assets/images/awards/02.webp"
    },
    {
      id: "3",
      date: "November 2024",
      organization: "CSS Design Awards",
      title: "Best UI Design & Technical Performance",
      project: "JetSlate Autonomous AI Suite",
      desc: "Honored for intuitive data visualization pipelines, dark/light system aesthetics, and 99/100 Core Web Vitals optimization.",
      badge: "BEST UI/UX",
      image: "/assets/images/awards/03.webp"
    },
    {
      id: "4",
      date: "October 2024",
      organization: "Webby Awards",
      title: "Honoree — Technical & Cloud Innovation",
      project: "Omni-Channel Enterprise POS",
      desc: "Celebrated for high-throughput barcode scanning, multi-branch offline SQLite sync, and zero-defect Playwright test automation.",
      badge: "HONOREE",
      image: "/assets/images/awards/04.webp"
    }
  ];

  return (
    <section id="awards" className="wpr-awards-area mb--16">
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
          {/* Blueprint Corner Shapes */}
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
                RECOGNITION &amp; INDUSTRY HONORS
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
              Industry Honors &amp; Verified Architecture{" "}
              <span 
                style={{ 
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  display: "inline-block"
                }}
              >
                Recognition
              </span>
            </h2>

            <p style={{ fontSize: "15px", color: "#E8D6B3", lineHeight: 1.6, margin: 0, maxWidth: "680px" }}>
              Verified design accolades, international awards, and technical performance distinctions awarded to our production software systems and digital architectures.
            </p>
          </div>

          {/* Interactive Award Accordion List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {awards.map((award) => {
              const isActive = activeId === award.id;

              return (
                <div 
                  key={award.id}
                  onClick={() => setActiveId(isActive ? "" : award.id)}
                  className={`award-item-row ${isActive ? "is-active" : ""}`}
                  style={{ 
                    border: isActive ? "1px solid #C9A84C" : "1px solid #2E2E2E", 
                    borderRadius: "14px", 
                    background: isActive ? "linear-gradient(180deg, #1C1C1C 0%, #151515 100%)" : "#161616",
                    boxShadow: isActive ? "0 10px 30px -5px rgba(201, 168, 76, 0.18)" : "0 2px 6px rgba(0, 0, 0, 0.5)",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  {/* Row Header Bar */}
                  <div 
                    style={{ 
                      padding: "24px 28px", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "16px"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
                      {/* Date Badge */}
                      <span 
                        style={{ 
                          fontSize: "12px", 
                          fontWeight: 700, 
                          color: isActive ? "#C9A84C" : "#E8D6B3", 
                          background: isActive ? "rgba(201, 168, 76, 0.12)" : "#222222", 
                          padding: "6px 14px", 
                          borderRadius: "9999px",
                          letterSpacing: "0.02em",
                          border: isActive ? "1px solid rgba(201, 168, 76, 0.25)" : "1px solid #2E2E2E"
                        }}
                      >
                        {award.date}
                      </span>

                      {/* Title & Project Info */}
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                          <h3 style={{ fontSize: "17px", fontWeight: 800, color: "#F8F5EF", margin: 0 }}>
                            {award.organization} — {award.title}
                          </h3>
                          <span 
                            style={{ 
                              fontSize: "10.5px", 
                              fontWeight: 800, 
                              color: "#111111", 
                              background: "#C9A84C", 
                              padding: "3px 8px", 
                              borderRadius: "6px",
                              letterSpacing: "0.05em"
                            }}
                          >
                            {award.badge}
                          </span>
                        </div>
                        <div style={{ fontSize: "13px", fontWeight: 600, color: "#C9A84C", marginTop: "4px" }}>
                          Project: {award.project}
                        </div>
                      </div>
                    </div>

                    {/* Expand / Collapse Icon */}
                    <div 
                      style={{ 
                        width: "36px", 
                        height: "36px", 
                        borderRadius: "50%", 
                        background: isActive ? "#C9A84C" : "#222222", 
                        color: isActive ? "#111111" : "#E8D6B3", 
                        border: isActive ? "1px solid #C9A84C" : "1px solid #2E2E2E",
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        fontSize: "18px",
                        fontWeight: 700,
                        transition: "all 0.2s ease"
                      }}
                    >
                      {isActive ? "−" : "+"}
                    </div>
                  </div>

                  {/* Expanded Content Drawer with 3D Award Trophy */}
                  {isActive && (
                    <div 
                      style={{ 
                        padding: "0 28px 28px 28px", 
                        borderTop: "1px solid #2E2E2E", 
                        paddingTop: "20px",
                        display: "grid",
                        gridTemplateColumns: "1fr 240px",
                        gap: "28px",
                        alignItems: "center"
                      }}
                      className="award-drawer-grid"
                    >
                      <div>
                        <p style={{ fontSize: "14.5px", lineHeight: 1.7, color: "#ded9cf", margin: "0 0 16px 0" }}>
                          {award.desc}
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ color: "#10B981", fontSize: "14px" }}>✓</span>
                          <span style={{ fontSize: "12.5px", fontWeight: 700, color: "#F8F5EF" }}>
                            Verified Award Distinction &amp; Production Deployment
                          </span>
                        </div>
                      </div>

                      {/* 3D Award Trophy Visual */}
                      <div 
                        style={{ 
                          borderRadius: "16px", 
                          overflow: "hidden", 
                          boxShadow: "0 12px 28px rgba(201, 168, 76, 0.15)",
                          border: "1px solid rgba(201, 168, 76, 0.2)",
                          background: "#161616"
                        }}
                      >
                        <img 
                          src={award.image} 
                          alt={`${award.organization} ${award.title}`} 
                          loading="lazy"
                          decoding="async"
                          width={600}
                          height={450}
                          style={{ width: "100%", height: "auto", display: "block" }} 
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>

      <style jsx>{`
        .award-item-row:hover {
          border-color: #C9A84C !important;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .award-drawer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

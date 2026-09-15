import React from "react";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="wpr-why-choose-us-area mb--16">
      <div className="container">
        <div 
          className="section-inner border" 
          style={{ 
            padding: '56px 48px', 
            borderRadius: 0, 
            position: 'relative',
            background: "#161616" 
          }}
        >
          {/* Blueprint Corner Dots */}
          <span className="square-shape top-left"></span>
          <span className="square-shape top-right"></span>
          <span className="square-shape bottom-left"></span>
          <span className="square-shape bottom-right"></span>

          {/* Section Header */}
          <div style={{ maxWidth: '820px', margin: '0 auto 44px auto', textAlign: 'center' }}>
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                padding: '6px 16px', 
                borderRadius: '9999px', 
                background: 'rgba(201, 168, 76, 0.06)', 
                border: '1px solid rgba(201, 168, 76, 0.15)',
                marginBottom: '16px'
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A84C', display: 'inline-block' }}></span>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#C9A84C', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                THE DIFFERENCE
              </span>
            </div>

            <h2 
              style={{ 
                fontSize: 'clamp(26px, 3.2vw, 38px)', 
                fontWeight: 800, 
                color: "#F8F5EF", 
                lineHeight: 1.25, 
                letterSpacing: '-0.02em', 
                margin: '0 0 16px 0' 
              }}
            >
              Why Engineering Leaders Choose{' '}
              <span 
                style={{ 
                  background: 'linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent' 
                }}
              >
                Jet Slate
              </span>
            </h2>

            <p style={{ fontSize: '15px', color: "#E8D6B3", lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
              High-velocity product delivery backed by enterprise software architecture, cross-platform mobile engineering, and automated QA rigor.
            </p>
          </div>

          {/* 5-Card Bento Architecture Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(12, 1fr)', 
              gap: '20px',
              marginBottom: '36px' 
            }}
          >
            {/* Card 1: Large Bento (Span 8) - Full-Stack Architecture */}
            <div 
              className="bento-card"
              style={{ 
                gridColumn: 'span 8',
                background: "#111111",
                border: '1px solid #2E2E2E',
                borderRadius: '20px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span 
                    style={{ 
                      fontSize: '11px', 
                      fontWeight: 700, 
                      color: '#C9A84C', 
                      background: 'rgba(201, 168, 76, 0.08)', 
                      padding: '4px 12px', 
                      borderRadius: '9999px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase'
                    }}
                  >
                    FULL-STACK ARCHITECTURE
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: "#E8D6B3" }}>01 // Core Engine</span>
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: 800, color: "#F8F5EF", lineHeight: 1.3, marginBottom: '10px' }}>
                  End-to-End System Integrity &amp; Strict Type Safety
                </h3>

                <p style={{ fontSize: '14px', lineHeight: 1.6, color: "#ded9cf", marginBottom: '24px', maxWidth: '640px' }}>
                  Complete architectural ownership across Next.js 15 App Router, PostgreSQL data schemas, high-throughput Node.js APIs, and strict TypeScript types — eliminating handoff friction and tech debt.
                </p>
              </div>

              {/* Interactive Visual Tech Pill Grid */}
              <div 
                style={{ 
                  background: "#161616", 
                  borderRadius: '14px', 
                  border: '1px solid #2E2E2E', 
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {["Next.js 15 SSR", "PostgreSQL", "Prisma ORM", "TypeScript", "Node.js", "Server Actions"].map((tech) => (
                    <span 
                      key={tech} 
                      style={{ 
                        fontSize: '11px', 
                        fontWeight: 600, 
                        color: "#F8F5EF", 
                        background: "#1c1c1c", 
                        padding: '4px 10px', 
                        borderRadius: '6px',
                        border: '1px solid #2E2E2E'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#10B981' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: "#C9A84C", boxShadow: "0 0 8px #C9A84C" }}></span>
                  100% Type-Safe Architecture
                </div>
              </div>
            </div>

            {/* Card 2: Medium Bento (Span 4) - Flutter Mobile Mastery */}
            <div 
              className="bento-card"
              style={{ 
                gridColumn: 'span 4',
                background: "#111111",
                border: '1px solid #2E2E2E',
                borderRadius: '20px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span 
                    style={{ 
                      fontSize: '11px', 
                      fontWeight: 700, 
                      color: '#C9A84C', 
                      background: 'rgba(201, 168, 76, 0.08)', 
                      padding: '4px 12px', 
                      borderRadius: '9999px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase'
                    }}
                  >
                    CROSS-PLATFORM MOBILE
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: "#E8D6B3" }}>02 // Mobile</span>
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 800, color: "#F8F5EF", lineHeight: 1.3, marginBottom: '10px' }}>
                  Native 60fps Flutter Apps
                </h3>

                <p style={{ fontSize: '14px', lineHeight: 1.6, color: "#ded9cf", margin: 0 }}>
                  Single-codebase mobile excellence for iOS and Android with offline SQLite caching, audio streaming sync, and buttery-smooth native gestures.
                </p>
              </div>

              <div 
                style={{ 
                  background: "#161616", 
                  borderRadius: '12px', 
                  border: '1px solid #2E2E2E', 
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '20px'
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 700, color: "#F8F5EF" }}>
                  iOS &amp; Android Unified
                </div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#C9A84C', background: 'rgba(201, 168, 76, 0.08)', padding: '2px 8px', borderRadius: '4px' }}>
                  60 FPS Fluid
                </div>
              </div>
            </div>

            {/* Card 3: Medium Bento (Span 4) - QA Test Automation */}
            <div 
              className="bento-card"
              style={{ 
                gridColumn: 'span 4',
                background: "#111111",
                border: '1px solid #2E2E2E',
                borderRadius: '20px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span 
                    style={{ 
                      fontSize: '11px', 
                      fontWeight: 700, 
                      color: '#C9A84C', 
                      background: 'rgba(201, 168, 76, 0.08)', 
                      padding: '4px 12px', 
                      borderRadius: '9999px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase'
                    }}
                  >
                    QA AUTOMATION
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: "#E8D6B3" }}>03 // Quality</span>
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 800, color: "#F8F5EF", lineHeight: 1.3, marginBottom: '10px' }}>
                  Zero-Defect Test Gates
                </h3>

                <p style={{ fontSize: '14px', lineHeight: 1.6, color: "#ded9cf", margin: 0 }}>
                  Automated Playwright and Selenium end-to-end regression suites integrated directly into CI/CD pipelines to catch defects before users ever do.
                </p>
              </div>

              <div 
                style={{ 
                  background: "#161616", 
                  borderRadius: '12px', 
                  border: '1px solid #2E2E2E', 
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#10B981' }}>
                  <span>✓</span> CI/CD Automated Gates
                </div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: "#E8D6B3" }}>
                  Playwright / E2E
                </div>
              </div>
            </div>

            {/* Card 4: Medium Bento (Span 4) - Cloud Speed & SLAs */}
            <div 
              className="bento-card"
              style={{ 
                gridColumn: 'span 4',
                background: "#111111",
                border: '1px solid #2E2E2E',
                borderRadius: '20px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span 
                    style={{ 
                      fontSize: '11px', 
                      fontWeight: 700, 
                      color: '#C9A84C', 
                      background: 'rgba(201, 168, 76, 0.08)', 
                      padding: '4px 12px', 
                      borderRadius: '9999px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase'
                    }}
                  >
                    CLOUD &amp; PERFORMANCE
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: "#E8D6B3" }}>04 // Reliability</span>
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 800, color: "#F8F5EF", lineHeight: 1.3, marginBottom: '10px' }}>
                  Sub-Second Speed &amp; 99.9% SLA
                </h3>

                <p style={{ fontSize: '14px', lineHeight: 1.6, color: "#ded9cf", margin: 0 }}>
                  Optimized database queries, global edge CDN caching, and 95+ Core Web Vitals scores built into every production release.
                </p>
              </div>

              <div 
                style={{ 
                  background: "#161616", 
                  borderRadius: '12px', 
                  border: '1px solid #2E2E2E', 
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '20px'
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 700, color: "#F8F5EF" }}>
                  Core Web Vitals: 95+
                </div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#C9A84C' }}>
                  99.9% Uptime SLA
                </div>
              </div>
            </div>

            {/* Card 5: Medium Bento (Span 4) - Direct Senior Access */}
            <div 
              className="bento-card"
              style={{ 
                gridColumn: 'span 4',
                background: "#111111",
                border: '1px solid #2E2E2E',
                borderRadius: '20px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span 
                    style={{ 
                      fontSize: '11px', 
                      fontWeight: 700, 
                      color: '#C9A84C', 
                      background: 'rgba(201, 168, 76, 0.08)', 
                      padding: '4px 12px', 
                      borderRadius: '9999px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase'
                    }}
                  >
                    DIRECT COLLABORATION
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: "#E8D6B3" }}>05 // Execution</span>
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 800, color: "#F8F5EF", lineHeight: 1.3, marginBottom: '10px' }}>
                  Zero Bureaucracy, Pure Speed
                </h3>

                <p style={{ fontSize: '14px', lineHeight: 1.6, color: "#ded9cf", margin: 0 }}>
                  Direct 1-on-1 collaboration with a senior software architect. No account managers, no game of telephone — just rapid milestone delivery.
                </p>
              </div>

              <div 
                style={{ 
                  background: "#161616", 
                  borderRadius: '12px', 
                  border: '1px solid #2E2E2E', 
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '20px'
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 700, color: "#F8F5EF" }}>
                  Direct Engineer Access
                </div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#10B981' }}>
                  Fast Turnarounds
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Action CTA */}
          <div style={{ textAlign: 'center', marginTop: '8px' }}>
            <Link 
              href="#contact" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '10px', 
                padding: '14px 32px', 
                background: '#C9A84C', 
                color: '#FFFFFF', 
                borderRadius: '9999px', 
                fontSize: '14px', 
                fontWeight: 700, 
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(201, 168, 76, 0.35)',
                transition: 'all 0.25s ease'
              }}
            >
              <span>Start Your Project With Jet Slate</span>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0V13.4751H16.5083V2.53591L1.0442 18L0 16.9061L15.4144 1.49171H4.47514V0H18Z" fill="#FFFFFF" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}

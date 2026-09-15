import React from "react";
import Link from "next/link";

export default function Hero() {
  const techStack = [
    { label: "Next.js 15", icon: "⚡", tag: "App Router SSR" },
    { label: "Flutter Mobile", icon: "📱", tag: "iOS & Android 60fps" },
    { label: "PostgreSQL", icon: "🐘", tag: "Prisma ORM" },
    { label: "Automated QA", icon: "🛡️", tag: "Playwright E2E" },
    { label: "TypeScript", icon: "🔷", tag: "Strict Type Safety" },
    { label: "Cloud & DevOps", icon: "☁️", tag: "99.9% SLA" }
  ];

  return (
    <section id="hero" className="wpr-hero-area mb--16">
      <div className="container">
        <div 
          className="section-inner border" 
          style={{ 
            position: "relative",
            borderRadius: 0,
            background: "#161616"
          }}
        >
          {/* Authentic Blueprint Corner Dots */}
          <span className="square-shape top-left"></span>
          <span className="square-shape top-right"></span>
          <span className="square-shape bottom-left"></span>
          <span className="square-shape bottom-right"></span>

          <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
            
            {/* Smooth Rounded Availability Badge */}
            <div 
              style={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "8px", 
                padding: "6px 16px", 
                borderRadius: "9999px", 
                background: "rgba(201, 168, 76, 0.06)", 
                border: "1px solid rgba(201, 168, 76, 0.18)",
                marginBottom: "20px"
              }}
            >
              <span className="live-status-beacon" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#C9A84C", boxShadow: "0 0 8px #C9A84C", display: "inline-block" }}></span>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                AVAILABLE FOR NEW ARCHITECTURE &amp; BUILDS
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              style={{ 
                fontSize: "clamp(26px, 3.8vw, 48px)", 
                fontWeight: 800, 
                color: "#F8F5EF", 
                lineHeight: 1.2, 
                letterSpacing: "-0.025em", 
                margin: "0 0 16px 0",
                textTransform: "uppercase"
              }}
            >
              Jet Slate — Enterprise Software Architecture{" "}
              <span 
                style={{ 
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  display: "inline-block"
                }}
              >
                &amp; Cloud Engineering
              </span>
            </h1>

            {/* Narrative Subtitle */}
            <p 
              style={{ 
                fontSize: "15px", 
                lineHeight: 1.65, 
                color: "#ded9cf", 
                maxWidth: "700px", 
                margin: "0 auto 28px auto" 
              }}
            >
              <strong>Jet Slate</strong> — Global engineering agency architecting mission-critical <strong>Next.js 15 web systems</strong>, <strong>distributed cloud backends</strong>, <strong>60fps Flutter mobile applications</strong>, and automated <strong>Playwright QA test gates</strong>.
            </p>

            {/* Smooth Rounded Action CTA Buttons */}
            <div 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                gap: "12px", 
                flexWrap: "wrap", 
                marginBottom: "36px" 
              }}
              className="hero-cta-group"
            >
              <Link 
                href="#contact" 
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  gap: "10px", 
                  padding: "13px 30px", 
                  background: "#C9A84C", 
                  color: "#FFFFFF", 
                  borderRadius: "9999px", 
                  fontSize: "13.5px", 
                  fontWeight: 700, 
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(201, 168, 76, 0.35)",
                  transition: "all 0.25s ease"
                }}
                className="hero-theme-btn-primary"
              >
                <span>Start a Project</span>
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 0V13.4751H16.5083V2.53591L1.0442 18L0 16.9061L15.4144 1.49171H4.47514V0H18Z" fill="#FFFFFF" />
                </svg>
              </Link>

              <Link 
                href="#work" 
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  gap: "8px", 
                  padding: "13px 26px", 
                  background: "#161616", 
                  color: "#F8F5EF", 
                  borderRadius: "9999px", 
                  fontSize: "13.5px", 
                  fontWeight: 700, 
                  textDecoration: "none",
                  border: "1px solid #383838", 
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
                  transition: "all 0.2s ease"
                }}
                className="hero-theme-btn-secondary"
              >
                <span>Explore 8 Client Projects</span>
              </Link>
            </div>

            {/* 6 Tech Stack Cards Grid */}
            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", 
                gap: "12px", 
                marginBottom: "32px",
                textAlign: "left"
              }}
            >
              {techStack.map((tech) => (
                <div 
                  key={tech.label}
                  className="hero-theme-tech-card"
                  style={{ 
                    background: "#161616", 
                    border: "1px solid #2E2E2E", 
                    borderRadius: "12px", 
                    padding: "14px 18px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "18px" }}>{tech.icon}</span>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#F8F5EF" }}>{tech.label}</div>
                      <div style={{ fontSize: "11px", color: "#E8D6B3", marginTop: "1px" }}>{tech.tag}</div>
                    </div>
                  </div>
                  <span style={{ color: "#C9A84C", fontSize: "13px", fontWeight: 700 }}>✓</span>
                </div>
              ))}
            </div>

            {/* 4 Trust Metrics Cards */}
            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 140px), 1fr))", 
                gap: "12px",
                paddingTop: "24px",
                borderTop: "1px solid #2E2E2E"
              }}
            >
              <div style={{ background: "#161616", padding: "14px", borderRadius: "12px", border: "1px solid #2E2E2E", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)" }}>
                <div style={{ fontSize: "22px", fontWeight: 800, color: "#C9A84C", lineHeight: 1.1 }}>100+</div>
                <div style={{ fontSize: "11px", fontWeight: 600, color: "#E8D6B3", marginTop: "3px" }}>Production Releases</div>
              </div>

              <div style={{ background: "#161616", padding: "14px", borderRadius: "12px", border: "1px solid #2E2E2E", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)" }}>
                <div style={{ fontSize: "22px", fontWeight: 800, color: "#C9A84C", lineHeight: 1.1 }}>50k+</div>
                <div style={{ fontSize: "11px", fontWeight: 600, color: "#E8D6B3", marginTop: "3px" }}>Mobile Users</div>
              </div>

              <div style={{ background: "#161616", padding: "14px", borderRadius: "12px", border: "1px solid #2E2E2E", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)" }}>
                <div style={{ fontSize: "22px", fontWeight: 800, color: "#C9A84C", lineHeight: 1.1 }}>99.9%</div>
                <div style={{ fontSize: "11px", fontWeight: 600, color: "#E8D6B3", marginTop: "3px" }}>System Uptime SLA</div>
              </div>

              <div style={{ background: "#161616", padding: "14px", borderRadius: "12px", border: "1px solid #2E2E2E", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)" }}>
                <div style={{ fontSize: "22px", fontWeight: 800, color: "#C9A84C", lineHeight: 1.1 }}>100%</div>
                <div style={{ fontSize: "11px", fontWeight: 600, color: "#E8D6B3", marginTop: "3px" }}>On-Time Delivery</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .hero-cta-group {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-cta-group a {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
          }
          .hero-theme-tech-card {
            padding: 12px 14px !important;
          }
        }
      `}</style>
    </section>
  );
}


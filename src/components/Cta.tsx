import React from "react";
import Link from "next/link";

export default function Cta() {
  return (
    <section id="cta" className="wpr-cta-area mb--16">
      <div className="container">
        <div 
          className="section-inner border"
          style={{
            position: "relative",
            borderRadius: 0,
            background: "#161616",
            padding: "64px 24px 60px 24px",
            textAlign: "center"
          }}
        >
          {/* Blueprint Corner Dots (unclipped and perfectly aligned on outer border) */}
          <span className="square-shape top-left"></span>
          <span className="square-shape top-right"></span>
          <span className="square-shape bottom-left"></span>
          <span className="square-shape bottom-right"></span>

          {/* Section Background Grid (isolated in overflow-hidden container) */}
          <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
            <div className="bg-shape" style={{ position: "absolute", top: 0, right: 0, opacity: 0.45, width: "100%" }}>
              <img src="/assets/images/cta/grid.svg" alt="Blueprint Grid Background" style={{ width: "100%", height: "auto" }} />
            </div>
          </div>

          <div className="section-title-area" style={{ position: "relative", zIndex: 2, maxWidth: "860px", margin: "0 auto", padding: "0 20px" }}>
            
            {/* Elegant Status Pill Badge */}
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
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#C9A84C", display: "inline-block" }}></span>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                AVAILABLE FOR NEW CONTRACTS &amp; ARCHITECTURAL BUILDS
              </span>
            </div>

            {/* Main Authentic Headline */}
            <h2 
              className="section-title"
              style={{
                fontSize: "clamp(30px, 4.5vw, 56px)",
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                margin: "0 0 16px 0",
                color: "#F8F5EF"
              }}
            >
              Let&apos;s build something <br />
              <span 
                style={{ 
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  display: "inline-block"
                }}
              >
                exceptional together
              </span>
            </h2>

            {/* Subtext incorporating target keyword Jet Slate */}
            <p 
              style={{ 
                fontSize: "15px", 
                lineHeight: 1.65, 
                color: "#ded9cf", 
                maxWidth: "660px", 
                margin: "0 auto 32px auto" 
              }}
            >
              Work directly with <strong>Jet Slate</strong> to architect and deliver high-performance Next.js 15 platforms, 60fps Flutter mobile applications, and enterprise automated QA testing pipelines.
            </p>

            {/* Action Buttons styled to exact theme buttons */}
            <div 
              className="cta-action-buttons"
              style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                gap: "14px", 
                flexWrap: "wrap", 
                marginBottom: "36px" 
              }}
            >
              <Link 
                href="/contact" 
                className="wpr-btn btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 30px",
                  borderRadius: "9999px",
                  background: "#C9A84C",
                  color: "#FFFFFF",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(201, 168, 76, 0.3)",
                  transition: "all 0.25s ease"
                }}
              >
                <span>Start a Project Consultation</span>
                <span>→</span>
              </Link>

              <Link 
                href="/guides" 
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 26px",
                  borderRadius: "9999px",
                  background: "#161616",
                  color: "#F8F5EF",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  textDecoration: "none",
                  border: "1px solid #383838",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)",
                  transition: "all 0.2s ease"
                }}
                className="wpr-btn btn-secondary"
              >
                <span>Explore Engineering Handbooks</span>
                <span>➔</span>
              </Link>
            </div>

            {/* 3 Value Pillars / Trust Indicators */}
            <div 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                gap: "28px", 
                flexWrap: "wrap",
                paddingTop: "24px",
                borderTop: "1px solid #2E2E2E"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: 700, color: "#ded9cf" }}>
                <span style={{ color: "#10B981", fontSize: "14px" }}>✓</span>
                <span>Direct Senior Architect Access</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: 700, color: "#ded9cf" }}>
                <span style={{ color: "#10B981", fontSize: "14px" }}>✓</span>
                <span>100% Code &amp; IP Ownership</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: 700, color: "#ded9cf" }}>
                <span style={{ color: "#10B981", fontSize: "14px" }}>✓</span>
                <span>Milestone-Based Global Delivery</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

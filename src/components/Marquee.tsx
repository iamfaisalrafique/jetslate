import React from "react";

export default function Marquee() {
  const tickerItems = [
    "NEXT.JS 15 APP ROUTER",
    "FLUTTER 60FPS MOBILE",
    "POSTGRESQL & PRISMA ORM",
    "AUTOMATED PLAYWRIGHT QA",
    "TYPESCRIPT STRICT SAFETY",
    "ENTERPRISE CLOUD ARCHITECTURE",
    "SUB-SECOND SSR PERFORMANCE",
    "ZERO-DOWNTIME CI/CD RELEASES",
    "99.9% PRODUCTION UPTIME SLA",
    "WEBRTC REAL-TIME CLASSROOMS"
  ];

  return (
    <section className="wpr-marquee-area mb--16">
      <div className="container">
        <div 
          className="section-inner border"
          style={{
            padding: "20px 0",
            position: "relative",
            borderRadius: 0,
            background: "#161616",
            overflow: "hidden"
          }}
        >
          {/* Blueprint Corner Dots */}
          <span className="square-shape top-left"></span>
          <span className="square-shape top-right"></span>
          <span className="square-shape bottom-left"></span>
          <span className="square-shape bottom-right"></span>

          {/* Marquee Track */}
          <div className="architectural-marquee-track">
            <div className="marquee-content-row">
              {tickerItems.concat(tickerItems).map((item, idx) => (
                <div key={idx} className="marquee-pill-item">
                  <span className="marquee-dot"></span>
                  <span className="marquee-text">{item}</span>
                </div>
              ))}
            </div>
            <div className="marquee-content-row" aria-hidden="true">
              {tickerItems.concat(tickerItems).map((item, idx) => (
                <div key={`dup-${idx}`} className="marquee-pill-item">
                  <span className="marquee-dot"></span>
                  <span className="marquee-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";

interface TestimonialItem {
  id: number;
  title: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  stats: string;
  tags: string[];
  image: string;
}

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      title: "Mission-Critical POS & High-Throughput Inventory",
      quote: "Jet Slate developed our UR Pharmacy POS and enterprise inventory software. It handles thousands of daily transactions, fast barcode scans, and real-time stock sync with zero downtime. An exceptional software architect.",
      author: "Dr. Anwaar",
      role: "Director of Operations & Owner",
      company: "UR Pharmacy Suite",
      stats: "15k+ Daily Transactions • 0% Downtime",
      tags: ["Electron / React", "SQLite Offline Sync", "Barcode Engine"],
      image: "/assets/images/testimonials/pos_system_preview.webp"
    },
    {
      id: 2,
      title: "Scalable Enterprise Mobile & Real-Time Sync",
      quote: "Working with Jet Slate on LVHConnect and our digital platforms was a game-changer. The architecture is robust, the user experience is fluid and lightning-fast, and our systems scale effortlessly under heavy production demand.",
      author: "JoyHouli Sutherland",
      role: "Founder & Leadership",
      company: "LVHConnect",
      stats: "Multi-Platform • Real-Time Cloud Sync",
      tags: ["React / Flutter", "Cloud Architecture", "Automated QA"],
      image: "/assets/images/testimonials/lvhconnect_preview.webp"
    },
    {
      id: 3,
      title: "Full-Stack Next.js Mastery & AI Automation",
      quote: "From initial multi-tenant architecture to the full Next.js App Router frontend and automated test pipelines, Jet Slate delivered our enterprise AI suite ahead of schedule with 99.9% test coverage and unmatched performance.",
      author: "JoyHouli Sutherland",
      role: "Executive Leadership & Founder",
      company: "Jet Slate Autonomous Systems",
      stats: "99/100 PageSpeed • 100% Type-Safe",
      tags: ["Next.js 15", "Turbopack", "AI Pipelines"],
      image: "/assets/images/testimonials/jetslate_preview.webp"
    },
    {
      id: 4,
      title: "Turnkey Global EdTech & Student LMS Delivery",
      quote: "The UK Quran Academy web platform and student portal built by Jet Slate transformed how we operate worldwide. Responsive, ultra-reliable, and backed by automated QA testing from day one.",
      author: "Khadija Ashraf",
      role: "Founder & Director",
      company: "UK Quran Academy",
      stats: "Global LMS • WebRTC Classrooms",
      tags: ["Next.js 15 SSR", "Stripe Billing", "WebRTC Audio"],
      image: "/assets/images/testimonials/uk_quran_preview.webp"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="wpr-testimonials-area mb--16">
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
                CLIENT ENDORSEMENTS &amp; CASE REVIEWS
              </span>
            </div>

            <h2 
              style={{ 
                fontSize: "clamp(24px, 3vw, 36px)", 
                fontWeight: 800, 
                color: "#F8F5EF", 
                lineHeight: 1.25, 
                letterSpacing: "-0.02em", 
                margin: "0 0 14px 0",
                textTransform: "uppercase"
              }}
            >
              Client Endorsements &amp; Reviews for{" "}
              <span 
                style={{ 
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  display: "inline-block"
                }}
              >
                Jet Slate
              </span>
            </h2>

            <p style={{ fontSize: "15px", color: "#E8D6B3", lineHeight: 1.6, margin: 0, maxWidth: "680px" }}>
              Direct feedback from business owners, directors, and CTOs who partnered with Jet Slate for mission-critical software systems and mobile apps.
            </p>
          </div>

          {/* Testimonial Feature Card Grid */}
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "1.1fr 0.9fr", 
              gap: "36px", 
              alignItems: "center",
              background: "#111111",
              border: "1px solid #2E2E2E",
              borderRadius: "16px",
              padding: "40px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)"
            }}
            className="testimonial-showcase-grid"
          >
            {/* Left Content Area */}
            <div>
              {/* Star Rating & Verified Pill */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
                <div style={{ color: "#F59E0B", fontSize: "16px", letterSpacing: "2px" }}>
                  ★★★★★
                </div>
                <span 
                  style={{ 
                    fontSize: "11px", 
                    fontWeight: 700, 
                    color: "#C9A84C", 
                    background: "rgba(201, 168, 76, 0.08)", 
                    padding: "3px 10px", 
                    borderRadius: "9999px",
                    letterSpacing: "0.05em"
                  }}
                >
                  VERIFIED DEPLOYMENT
                </span>
              </div>

              {/* Title */}
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

              {/* Quote */}
              <blockquote 
                style={{ 
                  fontSize: "15.5px", 
                  lineHeight: 1.7, 
                  color: "#ded9cf", 
                  margin: "0 0 24px 0",
                  fontStyle: "italic"
                }}
              >
                “{current.quote}”
              </blockquote>

              {/* Verified Metrics Badge */}
              <div 
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "8px", 
                  padding: "8px 14px", 
                  background: "#161616", 
                  border: "1px solid #383838", 
                  borderRadius: "8px",
                  marginBottom: "24px" 
                }}
              >
                <span style={{ color: "#10B981", fontSize: "14px" }}>📈</span>
                <span style={{ fontSize: "12.5px", fontWeight: 700, color: "#F8F5EF" }}>
                  {current.stats}
                </span>
              </div>

              {/* Author Profile */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
                <div 
                  style={{ 
                    width: "48px", 
                    height: "48px", 
                    borderRadius: "50%", 
                    background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)", 
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "16px",
                    boxShadow: "0 4px 12px rgba(201, 168, 76, 0.3)"
                  }}
                >
                  {current.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 800, color: "#F8F5EF" }}>
                    {current.author}
                  </div>
                  <div style={{ fontSize: "12.5px", color: "#E8D6B3", marginTop: "1px" }}>
                    {current.role}, <strong style={{ color: "#C9A84C" }}>{current.company}</strong>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <button 
                  onClick={prevSlide}
                  aria-label="Previous review"
                  style={{ 
                    width: "42px", 
                    height: "42px", 
                    borderRadius: "50%", 
                    border: "1px solid #383838", 
                    background: "#161616", 
                    color: "#F8F5EF",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: 700,
                    transition: "all 0.2s ease",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)"
                  }}
                  className="slider-nav-btn"
                >
                  ←
                </button>

                <div style={{ display: "flex", gap: "6px" }}>
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      style={{
                        width: idx === currentIndex ? "24px" : "8px",
                        height: "8px",
                        borderRadius: "9999px",
                        background: idx === currentIndex ? "#C9A84C" : "#383838",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        padding: 0
                      }}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextSlide}
                  aria-label="Next review"
                  style={{ 
                    width: "42px", 
                    height: "42px", 
                    borderRadius: "50%", 
                    border: "1px solid #383838", 
                    background: "#161616", 
                    color: "#F8F5EF",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: 700,
                    transition: "all 0.2s ease",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)"
                  }}
                  className="slider-nav-btn"
                >
                  →
                </button>
              </div>
            </div>

            {/* Right Visual Image Showcase */}
            <div 
              style={{ 
                borderRadius: "14px", 
                overflow: "hidden", 
                border: "1px solid #383838",
                boxShadow: "0 14px 34px rgba(201, 168, 76, 0.12)",
                background: "#161616",
                position: "relative"
              }}
            >
              <img 
                src={current.image} 
                alt={`${current.company} Production System`}
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
                className="testimonial-image-zoom"
              />

              {/* Overlay Tech Badges */}
              <div 
                style={{ 
                  position: "absolute", 
                  bottom: "16px", 
                  left: "16px", 
                  right: "16px",
                  display: "flex", 
                  gap: "6px", 
                  flexWrap: "wrap" 
                }}
              >
                {current.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      fontSize: "11px", 
                      fontWeight: 700, 
                      color: "#F8F5EF", 
                      background: "rgba(255, 255, 255, 0.92)", 
                      backdropFilter: "blur(8px)",
                      padding: "4px 10px", 
                      borderRadius: "6px",
                      border: "1px solid rgba(201, 168, 76, 0.15)",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)"
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .slider-nav-btn:hover {
          background: #C9A84C !important;
          color: #FFFFFF !important;
          border-color: #C9A84C !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(201, 168, 76, 0.3) !important;
        }
        .testimonial-image-zoom:hover {
          transform: scale(1.02);
        }
        @media (max-width: 900px) {
          .testimonial-showcase-grid {
            grid-template-columns: 1fr !important;
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}

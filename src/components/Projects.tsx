"use client";

import React, { useState } from "react";
import Link from "next/link";

export interface WorkItem {
  id: string;
  category: string;
  title: string;
  slug: string;
  coverImage: string;
  tags?: string[];
  outcomeText?: string;
  content?: string;
  [key: string]: any;
}

interface ProjectsProps {
  works?: WorkItem[];
}

export default function Projects({ works }: ProjectsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const displayWorks = works && works.length > 0 ? works : [
    {
      id: "1",
      category: "Full-Stack Web & LMS",
      title: "UK Quran Academy Web & LMS Platform",
      slug: "uk-quran-academy-web",
      coverImage: "/assets/images/portfolio/uk_quran_web.webp",
      tags: ["Next.js", "WebRTC", "PostgreSQL", "TailwindCSS"],
      outcomeText: "10k+|Active Learners|99.9%|Live Stream Uptime|4.9 / 5|Student Rating",
      content: "Full-stack Islamic education LMS and live recitation portal built with Next.js, WebRTC video streaming, interactive student dashboard, and automated progress analytics."
    },
    {
      id: "2",
      category: "Mobile Application",
      title: "UK Quran Academy Flutter Mobile App",
      slug: "uk-quran-academy-flutter-app",
      coverImage: "/assets/images/portfolio/uk_quran_app.webp",
      tags: ["Flutter", "Dart", "iOS & Android", "Offline Sync"],
      outcomeText: "4.9|App Store Rating|50k+|Mobile Downloads|60fps|Smooth Fluid UI",
      content: "Cross-platform mobile app built with Flutter for iOS & Android, featuring interactive Quran reader with synced audio recitation, daily prayer times, and offline caching."
    },
    {
      id: "3",
      category: "Travel & E-Commerce",
      title: "UK Umrah Package Booking Platform",
      slug: "uk-umrah-package",
      coverImage: "/assets/images/portfolio/uk_umrah_package.webp",
      tags: ["Next.js", "Hotel APIs", "Payment Gateway", "PostgreSQL"],
      outcomeText: "+85%|Booking Conversion|3.2x|Search Speed|0|Payment Failures",
      content: "Luxury travel & pilgrimage booking portal with real-time hotel API integration, flight scheduling, dynamic itinerary builders, and automated visa tracking."
    },
    {
      id: "4",
      category: "Enterprise Software",
      title: "Enterprise Cloud POS & Inventory Engine",
      slug: "enterprise-cloud-pos",
      coverImage: "/assets/images/portfolio/pos_system.webp",
      tags: ["Electron", "Node.js", "PostgreSQL", "Real-Time Sync"],
      outcomeText: "<0.3s|Barcode Scanning|100k+|Daily Transactions|99.99%|System Uptime",
      content: "Mission-critical retail & pharmacy Point of Sale desktop/web architecture with real-time stock alert matrix, receipt printing, and sales forecasting."
    },
    {
      id: "5",
      category: "AI & Cloud Architecture",
      title: "JetSlate AI Cloud Architecture & SaaS",
      slug: "jetslate-ai-cloud",
      coverImage: "/assets/images/portfolio/jetslate_ai.webp",
      tags: ["AI Agents", "Python", "Vector DB", "Docker & AWS"],
      outcomeText: "10x|Workflow Acceleration|99.95%|API Reliability|100%|Automated CI/CD",
      content: "Scalable cloud architecture for autonomous AI agent pipelines, multi-tenant workspace isolation, and high-throughput vector database search."
    },
    {
      id: "6",
      category: "Digital Agency & Media",
      title: "LVHConnect & Media Studios",
      slug: "lvhconnect-media-studios",
      coverImage: "/assets/images/portfolio/sunehri.webp",
      tags: ["Next.js", "Custom CMS", "Edge SSR", "Motion UI"],
      outcomeText: "+140%|Organic Traffic|100|PageSpeed Score|3x|Client Inquiries",
      content: "Modern digital agency and creative media platforms with interactive video showreels, custom CMS, and lightning-fast edge SSR performance."
    },
    {
      id: "7",
      category: "Commercial Architecture",
      title: "Jahnke Construction Architectural Portal",
      slug: "jahnke-construction",
      coverImage: "/assets/images/portfolio/vault.webp",
      tags: ["Web Platform", "CAD Spec Sheet", "Client Portal"],
      outcomeText: "100%|Client Satisfaction|+65%|Lead Inquiries|4.9|Review Score",
      content: "Enterprise commercial contracting and architecture web platform with dynamic project portfolio, material specification tables, and client inquiry workflows."
    },
    {
      id: "8",
      category: "E-Commerce & Wellness",
      title: "JoyHouli Sutherland & Hauoli Love",
      slug: "joyhouli-sutherland",
      coverImage: "/assets/images/portfolio/localbecho.webp",
      tags: ["Next.js", "Stripe Checkout", "TailwindCSS"],
      outcomeText: "+120%|Direct Sales|99.9%|Checkout Success|2.8x|Engagement Lift",
      content: "Luxury wellness and personal brand eCommerce portal featuring elegant editorial typography, subscription management, and friction-free payment flows."
    }
  ];

  const currentWork = displayWorks[currentSlide] || displayWorks[0];
  const workCategory = (currentWork as Record<string, unknown>).category as string || (currentWork as Record<string, unknown>).clientName as string || "Featured Case Study";
  const workTags = (currentWork as Record<string, unknown>).tags as string[] | undefined;
  
  const metrics: { value: string; label: string }[] = [];
  if (currentWork.outcomeText) {
    const parts = currentWork.outcomeText.split("|");
    for (let i = 0; i < parts.length; i += 2) {
      if (parts[i]) {
        metrics.push({ value: parts[i], label: parts[i + 1] || "" });
      }
    }
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? displayWorks.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === displayWorks.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="work" className="wpr-project-area mb--16">
      <div className="container">
        <div 
          className="section-inner border" 
          style={{ 
            padding: '48px 48px', 
            position: 'relative',
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
          <div style={{ marginBottom: '32px', maxWidth: '820px' }}>
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
                FEATURED WORK &amp; CASE STUDIES
              </span>
            </div>

            <h2 
              style={{ 
                fontSize: 'clamp(26px, 3vw, 36px)', 
                fontWeight: 800, 
                color: "#F8F5EF", 
                lineHeight: 1.25, 
                letterSpacing: '-0.02em', 
                margin: '0 0 12px 0' 
              }}
            >
              Production Case Studies: Proven Web, Mobile &amp;{' '}
              <span 
                style={{ 
                  background: 'linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent' 
                }}
              >
                Enterprise Architecture
              </span>
            </h2>

            <p style={{ fontSize: '15px', color: "#E8D6B3", lineHeight: 1.6, margin: 0 }}>
              From scalable Next.js web applications and cross-platform Flutter mobile apps to mission-critical business POS systems — built for performance, reliability, and business growth.
            </p>
          </div>

          {/* Fixed-Size Side-by-Side Showcase Card (Zero Layout Shift on Slide Change) */}
          <div 
            className="fixed-project-card"
            style={{ 
              background: "#111111", 
              borderRadius: '20px', 
              border: '1px solid #2E2E2E',
              boxShadow: '0 10px 30px -4px rgba(0, 0, 0, 0.4)',
              overflow: 'hidden',
              padding: '32px',
              marginBottom: '24px',
              minHeight: '520px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(12, 1fr)', 
                gap: '32px',
                alignItems: 'center',
                height: '100%'
              }}
            >
              {/* Left Column: Fixed-Height Details & Metrics (Span 5) */}
              <div 
                className="project-left-col"
                style={{ 
                  gridColumn: 'span 5', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  height: '440px',
                  gap: '14px' 
                }}
              >
                {/* Category Badge */}
                <div>
                  <span 
                    style={{ 
                      fontSize: '11px', 
                      fontWeight: 700, 
                      color: '#C9A84C', 
                      background: 'rgba(201, 168, 76, 0.08)', 
                      padding: '4px 12px', 
                      borderRadius: '9999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      border: '1px solid rgba(201, 168, 76, 0.15)',
                      display: 'inline-block'
                    }}
                  >
                    {workCategory}
                  </span>
                </div>

                {/* Fixed-Height Title */}
                <div style={{ height: '62px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                  <h3 
                    style={{ 
                      fontSize: 'clamp(20px, 2.2vw, 26px)', 
                      fontWeight: 800, 
                      color: "#F8F5EF", 
                      lineHeight: 1.25, 
                      margin: 0,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    <Link href={`/work/${currentWork.slug}`} style={{ color: "#F8F5EF", textDecoration: 'none' }}>
                      {currentWork.title}
                    </Link>
                  </h3>
                </div>

                {/* Fixed-Height Description */}
                <div style={{ height: '68px', overflow: 'hidden' }}>
                  <p 
                    style={{ 
                      fontSize: '14px', 
                      lineHeight: 1.6, 
                      color: "#ded9cf", 
                      margin: 0,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {currentWork.content}
                  </p>
                </div>

                {/* Fixed-Height Tech Tags */}
                <div style={{ height: '28px', overflow: 'hidden', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {workTags ? (
                    workTags.map((tag: string) => (
                      <span 
                        key={tag}
                        style={{ 
                          fontSize: '11px', 
                          fontWeight: 600, 
                          padding: '3px 10px', 
                          borderRadius: '9999px', 
                          background: "#161616", 
                          color: "#F8F5EF", 
                          border: '1px solid #383838',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {tag}
                      </span>
                    ))
                  ) : (
                    ["Next.js", "Flutter", "PostgreSQL", "Cloud"].map((tag) => (
                      <span 
                        key={tag}
                        style={{ 
                          fontSize: '11px', 
                          fontWeight: 600, 
                          padding: '3px 10px', 
                          borderRadius: '9999px', 
                          background: "#161616", 
                          color: "#F8F5EF", 
                          border: '1px solid #383838' 
                        }}
                      >
                        {tag}
                      </span>
                    ))
                  )}
                </div>

                {/* Fixed-Height Outcome Metrics */}
                <div 
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: `repeat(${metrics.length || 3}, 1fr)`, 
                    gap: '10px',
                    padding: '14px 0 0 0',
                    borderTop: '1px solid #2E2E2E',
                    height: '78px'
                  }}
                >
                  {metrics.map((metric, idx) => (
                    <div key={idx} style={{ background: "#161616", padding: '10px 12px', borderRadius: '12px', border: '1px solid #2E2E2E', overflow: 'hidden' }}>
                      <div style={{ fontSize: '18px', fontWeight: 800, color: '#C9A84C', lineHeight: 1.1, marginBottom: '2px', whiteSpace: 'nowrap' }}>
                        {metric.value}
                      </div>
                      <div style={{ fontSize: '10.5px', color: "#E8D6B3", fontWeight: 500, lineHeight: 1.2, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fixed Action CTA */}
                <div style={{ paddingTop: '4px' }}>
                  <Link 
                    href={`/work/${currentWork.slug}`}
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      padding: '10px 22px', 
                      background: '#C9A84C', 
                      color: '#FFFFFF', 
                      borderRadius: '9999px', 
                      fontSize: '13px', 
                      fontWeight: 700, 
                      textDecoration: 'none',
                      boxShadow: '0 6px 18px rgba(201, 168, 76, 0.3)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <span>Explore Case Study</span>
                    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 0V13.4751H16.5083V2.53591L1.0442 18L0 16.9061L15.4144 1.49171H4.47514V0H18Z" fill="#FFFFFF" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right Column: Fixed-Height 100% Unobscured Mockup Image (Span 7) */}
              <div 
                className="project-right-col"
                style={{ 
                  gridColumn: 'span 7',
                  height: '440px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div 
                  style={{ 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    boxShadow: '0 12px 32px -4px rgba(0, 0, 0, 0.4)', 
                    border: '1px solid #2E2E2E', 
                    background: "#161616",
                    width: '100%',
                    height: '100%',
                    position: 'relative'
                  }}
                >
                  <img 
                    src={
                      currentWork.coverImage 
                        ? (currentWork.coverImage.startsWith("/") || currentWork.coverImage.startsWith("http") 
                            ? currentWork.coverImage 
                            : `/${currentWork.coverImage}`) 
                        : "/assets/images/portfolio/uk_quran_web.webp"
                    } 
                    alt={`${currentWork.title} Mockup`}
                    width={800}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/assets/images/portfolio/uk_quran_web.webp";
                    }}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      display: 'block'
                    }} 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Control Bar — Locked in Place */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              paddingTop: '8px'
            }}
          >
            {/* Progress Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {displayWorks.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => setCurrentSlide(idx)}
                  style={{
                    width: currentSlide === idx ? '32px' : '10px',
                    height: '10px',
                    borderRadius: '9999px',
                    background: currentSlide === idx ? '#C9A84C' : '#383838',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              ))}
              <span style={{ marginLeft: '8px', fontSize: '13px', fontWeight: 700, color: "#E8D6B3" }}>
                0{currentSlide + 1} / 0{displayWorks.length}
              </span>
            </div>

            {/* Navigation Arrows */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button 
                type="button"
                aria-label="Previous Project"
                onClick={handlePrev}
                style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '50%', 
                  background: "#161616", 
                  border: '1px solid #383838', 
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.2s ease' 
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <button 
                type="button"
                aria-label="Next Project"
                onClick={handleNext}
                style={{ 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '50%', 
                  background: '#C9A84C', 
                  border: '1px solid #C9A84C', 
                  boxShadow: '0 6px 16px rgba(201, 168, 76, 0.35)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.2s ease' 
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          .fixed-project-card {
            min-height: auto !important;
            height: auto !important;
          }
          .project-left-col,
          .project-right-col {
            grid-column: span 12 !important;
            height: auto !important;
          }
        }
        @media (max-width: 640px) {
          .project-right-col > div {
            aspect-ratio: 16 / 10 !important;
            height: auto !important;
            max-height: 260px !important;
          }
        }
      `}</style>
    </section>
  );
}

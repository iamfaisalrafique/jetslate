import React from "react";

export default function About() {
  return (
    <section 
      id="about" 
      className="wpr-about-area mb--16" 
      itemScope 
      itemType="https://schema.org/Person"
    >
      {/* Hidden Schema Microdata Tags for Google Knowledge Graph Engine */}
      <meta itemProp="name" content="Jet Slate" />
      <meta itemProp="alternateName" content="Mian Jet Slate" />
      <meta itemProp="jobTitle" content="Full-Stack Software Architect & Engineer" />
      <meta itemProp="url" content="https://jetslate.com" />
      <meta itemProp="image" content="https://jetslate.com/assets/images/about/01.webp" />
      <meta itemProp="telephone" content="+1 (419) 622-8499" />
      <meta itemProp="address" content="Street 3, Peoples Colony, Vehari, Punjab, Pakistan" />
      <meta itemProp="sameAs" content="https://github.com/jetslateue" />
      <meta itemProp="sameAs" content="https://linkedin.com/in/jetslateue" />
      <meta itemProp="sameAs" content="https://twitter.com/jetslate" />
      <meta itemProp="sameAs" content="https://www.facebook.com/jetslateue/" />
      <meta itemProp="sameAs" content="https://www.youtube.com/@jetslateue" />
      <meta itemProp="sameAs" content="https://www.instagram.com/jetslateue/" />
      <div className="container">
        <div 
          className="section-inner border" 
          style={{ 
            padding: '44px 48px', 
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

          {/* Section Top Header — Redesigned for Proportional Elegance */}
          <div style={{ marginBottom: '36px', maxWidth: '860px' }}>
            {/* Sleek Pill Eyebrow */}
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
                ABOUT Jet Slate
              </span>
            </div>

            {/* Proportional Balanced Headline with Gradient Keyword Accent */}
            <h2 
              style={{ 
                fontSize: 'clamp(24px, 2.8vw, 36px)', 
                fontWeight: 800, 
                color: "#F8F5EF", 
                lineHeight: 1.25, 
                letterSpacing: '-0.02em', 
                margin: '0 0 14px 0' 
              }}
            >
              Full-Lifecycle Software Engineering: From Architecture to{' '}
              <span 
                style={{ 
                  background: 'linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent' 
                }}
              >
                Production Scale
              </span>
            </h2>

            {/* Editorial Lead Narrative (Replaces clunky banner box) */}
            <div style={{ borderLeft: '3px solid #C9A84C', paddingLeft: '16px', marginTop: '12px' }}>
              <p 
                style={{ 
                  fontSize: '12px', 
                  fontWeight: 700, 
                  color: '#C9A84C', 
                  letterSpacing: '0.06em', 
                  textTransform: 'uppercase',
                  margin: '0 0 4px 0'
                }}
              >
                Full-Stack Architect &amp; Cross-Platform Specialist
              </p>
              <p 
                itemProp="description"
                style={{ 
                  fontSize: '15px', 
                  lineHeight: 1.6, 
                  color: "#ded9cf", 
                  margin: 0 
                }}
              >
                Delivering production-grade code, scalable cloud architectures, and seamless user experiences across web, mobile, and custom business systems.
              </p>
            </div>
          </div>

          {/* 2-Column Split: Left Bio & Metrics, Right Illustration */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(12, 1fr)', 
              gap: '24px',
              alignItems: 'stretch',
              marginBottom: '44px'
            }}
          >
            {/* Left Content Area (Span 7) */}
            <div 
              className="about-left-col"
              style={{ 
                gridColumn: 'span 7',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '18px'
              }}
            >
              {/* Bio Card */}
              <div 
                style={{ 
                  background: "#111111", 
                  borderRadius: '16px', 
                  padding: '22px 26px', 
                  border: '1px solid #2E2E2E',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
                }}
              >
                <p 
                  style={{ 
                    fontSize: '15px', 
                    lineHeight: '1.65', 
                    color: "#ded9cf", 
                    margin: 0 
                  }}
                >
                  <strong itemProp="name" style={{ color: "#F8F5EF" }}>Jet Slate</strong>{" "}
                  is an independent software architect and engineering consultant specializing in building mission-critical web platforms (Next.js, React, Node.js), cross-platform mobile applications (Flutter for iOS &amp; Android), custom enterprise software, and resilient QA test automation pipelines.
                </p>

                <div style={{ marginTop: '14px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {["Software Architecture", "Next.js / React", "Flutter (iOS & Android)", "QA Automation", "PostgreSQL", "Cloud Systems"].map((tag) => (
                    <span 
                      key={tag} 
                      style={{ 
                        fontSize: '11px', 
                        fontWeight: 600, 
                        padding: '4px 12px', 
                        borderRadius: '9999px', 
                        background: "#161616", 
                        color: "#F8F5EF",
                        border: '1px solid #383838',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.4)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3 Metrics Row */}
              <div 
                className="about-metrics-grid"
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(3, 1fr)', 
                  gap: '12px' 
                }}
              >
                {/* Metric 1 */}
                <div 
                  className="about-metric-card"
                  style={{ 
                    background: "#161616", 
                    borderRadius: '14px', 
                    padding: '16px 14px', 
                    border: '1px solid #2E2E2E',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ width: '38px', height: '38px', marginBottom: '8px' }}>
                    <img src="/assets/images/about/icon/01.svg" alt="Uptime Icon" style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: "#F8F5EF", lineHeight: 1.1, marginBottom: '4px' }}>
                    <span className="odometer" data-count="99.9">99.9</span>%
                  </div>
                  <p style={{ margin: 0, fontSize: '11px', lineHeight: 1.3, color: "#E8D6B3", fontWeight: 500 }}>
                    System Uptime &amp; Reliability
                  </p>
                </div>

                {/* Metric 2 */}
                <div 
                  className="about-metric-card"
                  style={{ 
                    background: "#161616", 
                    borderRadius: '14px', 
                    padding: '16px 14px', 
                    border: '1px solid #2E2E2E',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ width: '38px', height: '38px', marginBottom: '8px' }}>
                    <img src="/assets/images/about/icon/02.svg" alt="Platforms Icon" style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: "#F8F5EF", lineHeight: 1.1, marginBottom: '4px' }}>
                    <span className="odometer" data-count="120">120</span>+
                  </div>
                  <p style={{ margin: 0, fontSize: '11px', lineHeight: 1.3, color: "#E8D6B3", fontWeight: 500 }}>
                    Platforms &amp; Apps Launched
                  </p>
                </div>

                {/* Metric 3 */}
                <div 
                  className="about-metric-card"
                  style={{ 
                    background: "#161616", 
                    borderRadius: '14px', 
                    padding: '16px 14px', 
                    border: '1px solid #2E2E2E',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ width: '38px', height: '38px', marginBottom: '8px' }}>
                    <img src="/assets/images/about/icon/03.svg" alt="Rating Icon" style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: "#F8F5EF", lineHeight: 1.1, marginBottom: '4px' }}>
                    <span className="odometer" data-count="4.9">4.9</span> <span style={{ fontSize: '13px', color: "#E8D6B3", fontWeight: 600 }}>/ 5</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '11px', lineHeight: 1.3, color: "#E8D6B3", fontWeight: 500 }}>
                    Client Satisfaction Rating
                  </p>
                </div>
              </div>

              {/* Verified Identity Bar */}
              <div 
                style={{ 
                  background: "#1c1c1c", 
                  borderRadius: '14px', 
                  padding: '12px 18px', 
                  border: '1px solid #2E2E2E',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '10px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ color: '#C9A84C', fontWeight: 700, fontSize: '14px' }}>✓</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: "#F8F5EF", textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Verified Entity
                  </span>
                  <span style={{ fontSize: '11px', color: "#ded9cf" }}>• Street 3, Peoples Colony, Vehari, Punjab, Pakistan</span>
                  <span style={{ fontSize: '11px', color: '#C9A84C', fontWeight: 700 }}>• Tel: +1 (419) 622-8499</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <a 
                    href="https://github.com/jetslateue" 
                    target="_blank" 
                    rel="me noopener noreferrer" 
                    itemProp="sameAs"
                    style={{ display: 'inline-flex', padding: '4px 10px', background: "#161616", border: '1px solid #383838', borderRadius: '6px', fontSize: '11px', fontWeight: 600, color: "#F8F5EF", textDecoration: 'none', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.4)' }}
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com/in/jetslateue" 
                    target="_blank" 
                    rel="me noopener noreferrer" 
                    itemProp="sameAs"
                    style={{ display: 'inline-flex', padding: '4px 10px', background: "#161616", border: '1px solid #383838', borderRadius: '6px', fontSize: '11px', fontWeight: 600, color: '#C9A84C', textDecoration: 'none', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.4)' }}
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://twitter.com/jetslate" 
                    target="_blank" 
                    rel="me noopener noreferrer" 
                    itemProp="sameAs"
                    style={{ display: 'inline-flex', padding: '4px 10px', background: "#161616", border: '1px solid #383838', borderRadius: '6px', fontSize: '11px', fontWeight: 600, color: '#E8D6B3', textDecoration: 'none', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.4)' }}
                  >
                    Twitter/X
                  </a>
                  <a 
                    href="https://www.facebook.com/jetslateue/" 
                    target="_blank" 
                    rel="me noopener noreferrer" 
                    itemProp="sameAs"
                    style={{ display: 'inline-flex', padding: '4px 10px', background: "#161616", border: '1px solid #383838', borderRadius: '6px', fontSize: '11px', fontWeight: 600, color: '#1877F2', textDecoration: 'none', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.4)' }}
                  >
                    Facebook
                  </a>
                  <a 
                    href="https://www.youtube.com/@jetslateue" 
                    target="_blank" 
                    rel="me noopener noreferrer" 
                    itemProp="sameAs"
                    style={{ display: 'inline-flex', padding: '4px 10px', background: "#161616", border: '1px solid #383838', borderRadius: '6px', fontSize: '11px', fontWeight: 600, color: '#DC2626', textDecoration: 'none', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.4)' }}
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Right Illustration Column (Span 5) - Full Height & Perfectly Aligned */}
            <div 
              className="about-right-col"
              style={{ 
                gridColumn: 'span 5',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div 
                style={{ 
                  borderRadius: '18px', 
                  overflow: 'hidden', 
                  boxShadow: '0 12px 40px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(201, 168, 76, 0.25)', 
                  border: '1px solid #2E2E2E', 
                  background: "#111111",
                  width: '100%',
                  height: '100%',
                  minHeight: '360px',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <picture style={{ width: '100%', height: '100%' }}>
                  <source media="(max-width: 768px)" srcSet="/assets/images/about/01-mobile.webp?v=3" width={640} height={478} />
                  <img 
                    itemProp="image"
                    src="/assets/images/about/01.webp?v=3" 
                    alt="Jet Slate Software Architecture & Global Cloud Engineering Workstation"
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={896}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      display: 'block' 
                    }} 
                  />
                </picture>
              </div>
            </div>
          </div>

          {/* Corner Blueprint Shapes */}
          <span className="square-shape top-left"></span>
          <span className="square-shape bottom-left"></span>
          <span className="square-shape top-right"></span>
          <span className="square-shape bottom-right"></span>
        </div>
      </div>
    </section>
  );
}

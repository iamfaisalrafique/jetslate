import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import BrandMarquee from "@/components/BrandMarquee";
import OurApproach from "@/components/OurApproach";
import WhyChooseUs2 from "@/components/WhyChooseUs2";
import Awards from "@/components/Awards";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "About Jet Slate | Software Architect",
  },
  description:
    "Explore the software architecture journey, technical principles, and track record of Senior Full-Stack Architect and QA Automation Lead Jet Slate.",
  alternates: {
    canonical: "https://jetslate.com/about",
  },
  openGraph: {
    title: "About Jet Slate | Software Architect",
    description:
      "Explore the software architecture journey, technical principles, and track record of Senior Full-Stack Architect and QA Automation Lead Jet Slate.",
    url: "https://jetslate.com/about",
    type: "profile",
    images: [
      {
        url: "https://jetslate.com/assets/images/about/01.webp",
        width: 1200,
        height: 896,
        alt: "Jet Slate — Full-Stack Software Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Jet Slate | Full-Stack Architect & QA Engineer",
    description:
      "8+ years engineering production Next.js platforms, Flutter mobile apps, automated QA test suites, and high-performance cloud architectures.",
    images: ["https://jetslate.com/assets/images/about/01.webp"],
  },
};

export default function AboutPage() {
  const profileSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://jetslate.com/about#webpage",
        "url": "https://jetslate.com/about",
        "name": "About Jet Slate — Software Architect",
        "mainEntity": {
          "@id": "https://jetslate.com/#person",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://jetslate.com/about#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://jetslate.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://jetslate.com/about",
          },
        ],
      },
      {
        "@type": "Person",
        "@id": "https://jetslate.com/#person",
        "name": "Jet Slate",
        "alternateName": ["Jet Slate", "Jet Slate Architecture", "Jet Slate Engineering"],
        "url": "https://jetslate.com",
        "image": "https://jetslate.com/assets/images/about/01.webp",
        "jobTitle": [
          "Full-Stack Software Architect",
          "QA Automation Lead",
          "Mobile App Specialist",
        ],
        "nationality": {
          "@type": "Country",
          "name": "Pakistan",
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Street 3, Peoples Colony",
          "addressLocality": "Vehari",
          "addressRegion": "Punjab",
          "postalCode": "61100",
          "addressCountry": "PK",
        },
        "telephone": "+1 (419) 622-8499",
        "email": "contact@jetslate.com",
        "sameAs": [
          "https://github.com/jetslate",
          "https://linkedin.com/in/jetslate",
          "https://twitter.com/jetslate",
          "https://www.facebook.com/IamJet Slate/",
          "https://www.youtube.com/@jetslateue",
        ],
      },
    ],
  };

  const corePillars = [
    {
      icon: "⚡",
      title: "Full-Stack Web Architecture",
      tech: "Next.js 15 • React 19 • TypeScript • PostgreSQL",
      desc: "Architecting sub-second, edge-optimized platforms using React Server Components, server actions, connection-pooled databases, and zero-bundle bloat patterns.",
    },
    {
      icon: "📱",
      title: "High-Performance Mobile Apps",
      tech: "Flutter • Dart • Riverpod • SQLite",
      desc: "Delivering native 60fps mobile applications across iOS and Android with robust offline-first synchronization, secure biometric auth, and clean architectural separation.",
    },
    {
      icon: "🛡️",
      title: "Autonomous QA & Test Automation",
      tech: "Playwright • Cypress • GitHub Actions CI/CD",
      desc: "Eliminating production defects before release through hermetic test suites, parallelized browser testing, and automated deployment gatekeeping.",
    },
    {
      icon: "☁️",
      title: "Cloud DevOps & Infrastructure",
      tech: "Docker • Coolify VPS • Traefik • Hetzner",
      desc: "Bypassing expensive serverless cold starts and memory caps by deploying multi-stage Docker containers to high-performance self-hosted VPS environments.",
    },
  ];

  return (
    <main style={{ background: "#111111", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      <Header />

      {/* Hero / Breadcrumb Header */}
      <section className="wpr-banner-area breadcrumb mb--16">
        <div className="container">
          <div
            className="section-inner bg-[#161616] border"
            style={{
              padding: "40px 44px",
              position: "relative",
              borderRadius: 0,
              background: "#161616",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.45)",
            }}
          >
            {/* Blueprint Corner Dots */}
            <span className="square-shape top-left"></span>
            <span className="square-shape top-right"></span>
            <span className="square-shape bottom-left"></span>
            <span className="square-shape bottom-right"></span>

            {/* Breadcrumb Links */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                color: "#E8D6B3",
                marginBottom: "16px",
              }}
            >
              <Link
                href="/"
                style={{
                  color: "#C9A84C",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Home
              </Link>
              <span>/</span>
              <span style={{ color: "#F8F5EF", fontWeight: 600 }}>
                About Jet Slate
              </span>
            </div>

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
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#C9A84C",
                  display: "inline-block",
                }}
              ></span>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  color: "#C9A84C",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                PRINCIPAL SOFTWARE ARCHITECT &amp; CONSULTANT
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 800,
                color: "#F8F5EF",
                lineHeight: 1.22,
                letterSpacing: "-0.025em",
                margin: "0 0 16px 0",
                maxWidth: "960px",
              }}
            >
              Engineering Production-Ready Web, Mobile &amp;{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Enterprise Systems
              </span>
            </h1>

            {/* Narrative Subtitle */}
            <p
              style={{
                fontSize: "16px",
                color: "#ded9cf",
                lineHeight: 1.65,
                margin: "0 0 24px 0",
                maxWidth: "820px",
              }}
            >
              Independent engineering consultant with 8+ years of production experience delivering mission-critical web platforms (Next.js 15, React, Node.js), high-performance cross-platform mobile apps (Flutter), and automated QA testing frameworks for global businesses.
            </p>

            {/* Quick Architectural Value Badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "28px",
              }}
            >
              {[
                { icon: "🚀", text: "8+ Years Production Experience" },
                { icon: "🌐", text: "100+ Systems Delivered" },
                { icon: "⚡", text: "Sub-Second Next.js & Edge Speeds" },
                { icon: "🛡️", text: "99.9% Automated QA Pass Rate" },
              ].map((badge, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 14px",
                    borderRadius: "8px",
                    background: "#161616",
                    border: "1px solid #2E2E2E",
                    fontSize: "12.5px",
                    fontWeight: 700,
                    color: "#F8F5EF",
                  }}
                >
                  <span>{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Header Action Buttons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  background: "#C9A84C",
                  color: "#161616",
                  fontWeight: 700,
                  fontSize: "14px",
                  textDecoration: "none",
                  borderRadius: "9999px",
                  boxShadow: "0 4px 14px rgba(201, 168, 76, 0.25)",
                  transition: "all 0.25s ease",
                }}
              >
                <span>Book Technical Consultation</span>
                <span>→</span>
              </Link>
              <Link
                href="/work"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  background: "#EFF6FF",
                  color: "#C9A84C",
                  fontWeight: 700,
                  fontSize: "14px",
                  textDecoration: "none",
                  borderRadius: "9999px",
                  border: "1px solid #BFDBFE",
                  transition: "all 0.25s ease",
                }}
              >
                <span>Explore Case Studies</span>
                <span>➔</span>
              </Link>
              <Link
                href="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  background: "#161616",
                  color: "#F8F5EF",
                  fontWeight: 700,
                  fontSize: "14px",
                  textDecoration: "none",
                  borderRadius: "9999px",
                  border: "1px solid #3A3A3A",
                  transition: "all 0.25s ease",
                }}
              >
                <span>View 8 Service Pillars</span>
                <span>➔</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Biography & Architectural Pillars Split */}
      <section className="mb--16">
        <div className="container">
          <div
            className="section-inner bg-[#161616] border"
            style={{
              padding: "48px 44px",
              position: "relative",
              borderRadius: 0,
              background: "#161616",
            }}
          >
            <span className="square-shape top-left"></span>
            <span className="square-shape top-right"></span>
            <span className="square-shape bottom-left"></span>
            <span className="square-shape bottom-right"></span>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gap: "36px",
                alignItems: "start",
              }}
              className="about-split-grid"
            >
              {/* Left Column: Portrait, Status & Quick Specs (Span 5) */}
              <div
                style={{
                  gridColumn: "span 5",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
                className="about-profile-col"
              >
                {/* Photo Card with Blueprint Styling */}
                <div
                  style={{
                    background: "#161616",
                    border: "1px solid #2E2E2E",
                    borderRadius: "16px",
                    padding: "20px",
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.45)",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      border: "1px solid #3A3A3A",
                      marginBottom: "16px",
                      position: "relative",
                      background: "#092272",
                    }}
                  >
                    <img
                      src="/assets/images/about/01.webp"
                      alt="Jet Slate — Full-Stack Software Architect"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "12px",
                        left: "12px",
                        background: "rgba(0, 0, 0, 0.45)",
                        backdropFilter: "blur(8px)",
                        color: "#161616",
                        padding: "6px 12px",
                        borderRadius: "9999px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "12px",
                        fontWeight: 700,
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <span
                        style={{
                          width: "7px",
                          height: "7px",
                          borderRadius: "50%",
                          background: "#22C55E",
                          display: "inline-block",
                        }}
                      ></span>
                      <span>Available for Consulting</span>
                    </div>
                  </div>

                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "#F8F5EF",
                      margin: "0 0 4px 0",
                    }}
                  >
                    Jet Slate
                  </h2>
                  <p
                    style={{
                      fontSize: "12.5px",
                      fontWeight: 700,
                      color: "#C9A84C",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      margin: "0 0 16px 0",
                    }}
                  >
                    Principal Software Architect &amp; QA Lead
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      fontSize: "13px",
                      color: "#ded9cf",
                      paddingTop: "14px",
                      borderTop: "1px solid #2E2E2E",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#E8D6B3" }}>Experience:</span>
                      <strong style={{ color: "#F8F5EF" }}>8+ Years Production</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#E8D6B3" }}>Engagement:</span>
                      <strong style={{ color: "#F8F5EF" }}>Direct Principal Partnership</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#E8D6B3" }}>Location:</span>
                      <strong style={{ color: "#F8F5EF" }}>Vehari, Pakistan (Global Delivery)</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#E8D6B3" }}>Direct Line:</span>
                      <a
                        href="https://wa.me/14196228499"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#16A34A", fontWeight: 700, textDecoration: "none" }}
                      >
                        +1 (419) 622-8499
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Verified Channels */}
                <div
                  style={{
                    background: "#161616",
                    border: "1px solid #2E2E2E",
                    borderRadius: "14px",
                    padding: "20px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.45)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "13px",
                      fontWeight: 800,
                      color: "#F8F5EF",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      margin: "0 0 12px 0",
                    }}
                  >
                    Verified Public Networks
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
                    <a
                      href="https://github.com/jetslate"
                      target="_blank"
                      rel="me noopener noreferrer"
                      style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none" }}
                    >
                      → GitHub (@jetslateue)
                    </a>
                    <a
                      href="https://linkedin.com/in/jetslate"
                      target="_blank"
                      rel="me noopener noreferrer"
                      style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none" }}
                    >
                      → LinkedIn (/in/jetslate)
                    </a>
                    <a
                      href="https://www.teacheron.com/tutor-profile/824p"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none" }}
                    >
                      → TeacherOn Verified Engineering Tutor (824p)
                    </a>
                    <a
                      href="https://twitter.com/jetslate"
                      target="_blank"
                      rel="me noopener noreferrer"
                      style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none" }}
                    >
                      → Twitter / X (@jetslate)
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Architectural Journey & Pillars (Span 7) */}
              <div
                style={{
                  gridColumn: "span 7",
                  display: "flex",
                  flexDirection: "column",
                  gap: "28px",
                }}
                className="about-content-col"
              >
                {/* Engineering Philosophy Narrative */}
                <div
                  style={{
                    background: "#161616",
                    border: "1px solid #2E2E2E",
                    borderRadius: "16px",
                    padding: "28px 32px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "#F8F5EF",
                      marginBottom: "14px",
                    }}
                  >
                    The Engineering Journey: Built on Rigor, Speed &amp; Precision
                  </h2>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#ded9cf",
                      lineHeight: 1.75,
                      marginBottom: "16px",
                    }}
                  >
                    Over the last 8+ years, I have seen too many software projects crumble under technical debt, unmaintainable monolithic codebases, fragile testing, and exorbitant serverless cloud bills. 
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#ded9cf",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    My practice as an independent architect is designed to provide the antidote: <strong>production-grade software engineered with end-to-end type safety</strong>, clean normalized schemas, hermetic QA automation pipelines, and cost-efficient self-hosted cloud infrastructure. When you work with me, you collaborate directly with the person designing the schemas and writing the mission-critical code.
                  </p>
                </div>

                {/* 4 Core Competency Cards */}
                <div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 800,
                      color: "#F8F5EF",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: "16px",
                    }}
                  >
                    Core Architectural Competencies
                  </h3>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "16px",
                    }}
                    className="about-pillars-grid"
                  >
                    {corePillars.map((pillar, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: "#161616",
                          border: "1px solid #2E2E2E",
                          borderRadius: "14px",
                          padding: "20px",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.45)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              marginBottom: "8px",
                            }}
                          >
                            <span style={{ fontSize: "18px" }}>{pillar.icon}</span>
                            <h4
                              style={{
                                fontSize: "14.5px",
                                fontWeight: 800,
                                color: "#F8F5EF",
                                margin: 0,
                              }}
                            >
                              {pillar.title}
                            </h4>
                          </div>
                          <p
                            style={{
                              fontSize: "11px",
                              fontWeight: 700,
                              color: "#C9A84C",
                              marginBottom: "10px",
                            }}
                          >
                            {pillar.tech}
                          </p>
                          <p
                            style={{
                              fontSize: "13px",
                              color: "#E8D6B3",
                              lineHeight: 1.6,
                              margin: 0,
                            }}
                          >
                            {pillar.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Trust, Governance & E-E-A-T Verification Grid */}
      <section className="mb--16">
        <div className="container">
          <div
            className="section-inner bg-[#161616] border"
            style={{
              padding: "44px 44px",
              position: "relative",
              borderRadius: 0,
              background: "#161616",
            }}
          >
            <span className="square-shape top-left"></span>
            <span className="square-shape top-right"></span>
            <span className="square-shape bottom-left"></span>
            <span className="square-shape bottom-right"></span>

            <div style={{ maxWidth: "800px", marginBottom: "32px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "5px 14px",
                  borderRadius: "9999px",
                  background: "rgba(201, 168, 76, 0.06)",
                  border: "1px solid rgba(201, 168, 76, 0.18)",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#C9A84C",
                    display: "inline-block",
                  }}
                ></span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 800,
                    color: "#C9A84C",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  TRANSPARENCY &amp; GOVERNANCE
                </span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  fontWeight: 800,
                  color: "#F8F5EF",
                  margin: "0 0 10px 0",
                }}
              >
                Institutional Trust, Physical Lab &amp; Legal Entity
              </h2>
              <p
                style={{
                  fontSize: "14.5px",
                  color: "#E8D6B3",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Clear organizational ownership, verified corporate headquarters, and direct direct access without agency intermediation.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
                gap: "20px",
              }}
            >
              {/* Card 1: Parent Entity */}
              <div
                style={{
                  background: "#161616",
                  border: "1px solid #2E2E2E",
                  borderRadius: "14px",
                  padding: "24px",
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "12px" }}>🏛️</div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "#F8F5EF",
                    marginBottom: "10px",
                  }}
                >
                  Parent Company &amp; Legal Governance
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "#ded9cf",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  <strong>Jet Slate Engineering Consulting</strong> is the parent operating organization governing JetSlate.com. The entity directs all technical architectures, enterprise client retainers, IP management, and global software delivery operations.
                </p>
              </div>

              {/* Card 2: Physical Lab */}
              <div
                style={{
                  background: "#161616",
                  border: "1px solid #2E2E2E",
                  borderRadius: "14px",
                  padding: "24px",
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "12px" }}>📍</div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "#F8F5EF",
                    marginBottom: "10px",
                  }}
                >
                  Physical Headquarters &amp; Lab
                </h3>
                <address
                  style={{
                    fontStyle: "normal",
                    fontSize: "13.5px",
                    color: "#ded9cf",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  <strong>Mailing &amp; Lab Address:</strong><br />
                  Street 3, Peoples Colony, Vehari, Punjab 61100, Pakistan.<br />
                  Equipped with dedicated local VPS test racks, multi-device mobile testing farms, and redundant gigabit connections.
                </address>
              </div>

              {/* Card 3: Direct Reachability */}
              <div
                style={{
                  background: "#161616",
                  border: "1px solid #2E2E2E",
                  borderRadius: "14px",
                  padding: "24px",
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "12px" }}>📞</div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "#F8F5EF",
                    marginBottom: "10px",
                  }}
                >
                  Direct Technical Access
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "#ded9cf",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  <strong>Direct Phone:</strong>{" "}
                  <a
                    href="tel:+1 (419) 622-8499"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none" }}
                  >
                    +1 (419) 622-8499
                  </a>
                  <br />
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:contact@jetslate.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none" }}
                  >
                    contact@jetslate.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Marquee: Trusted Technologies */}
      <BrandMarquee />

      {/* Engineering Methodology */}
      <OurApproach />

      {/* Why Work With Jet Slate */}
      <WhyChooseUs2 />

      {/* Awards & Verified Benchmarks */}
      <Awards />

      {/* Frequently Asked Questions */}
      <Faq />

      {/* High-Impact CTA */}
      <Cta />

      {/* Footer */}
      <Footer />

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 991px) {
          .about-split-grid {
            grid-template-columns: 1fr !important;
          }
          .about-profile-col,
          .about-content-col {
            grid-column: span 12 !important;
          }
        }
        @media (max-width: 640px) {
          .about-pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

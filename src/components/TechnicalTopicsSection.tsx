import React from "react";
import Link from "next/link";

export default function TechnicalTopicsSection() {
  const highlightedCategories = [
    {
      category: "Testing",
      title: "QA Automation & Playwright Frameworks",
      icon: "🛡️",
      desc: "End-to-end browser automation, Page Object Models, regression suites, and CI/CD quality gates.",
      topicSlug: "playwright-test-automation-frameworks",
      topicName: "Playwright Automation",
    },
    {
      category: "Web Apps",
      title: "Next.js & Full-Stack Web Architecture",
      icon: "⚡",
      desc: "Next.js App Router, React Server Components, sub-second TTFB, PostgreSQL, and 100/100 Core Web Vitals.",
      topicSlug: "nextjs-development-services",
      topicName: "Next.js Architecture",
    },
    {
      category: "Mobile Apps",
      title: "Flutter & Cross-Platform Mobile",
      icon: "📱",
      desc: "60fps/120fps native iOS & Android applications, BLoC state management, and offline SQLite synchronization.",
      topicSlug: "flutter-app-development-services",
      topicName: "Flutter Mobile",
    },
    {
      category: "AI Systems",
      title: "AI Automation, Agents & RAG Pipelines",
      icon: "🤖",
      desc: "Autonomous LLM agents, vector database retrieval (RAG), n8n workflow integrations, and guardrails.",
      topicSlug: "ai-agents-llm-apps-rag",
      topicName: "AI Agents & RAG",
    },
    {
      category: "Business Software",
      title: "Enterprise Cloud POS & Business Software",
      icon: "💼",
      desc: "High-speed barcode checkout, multi-branch cloud inventory sync, and hardware ESC/POS printer integrations.",
      topicSlug: "custom-pos-software-development",
      topicName: "Enterprise POS",
    },
    {
      category: "CMS & SEO",
      title: "Headless CMS, SEO & Remote Consulting",
      icon: "🌐",
      desc: "Decoupled WordPress with Next.js frontends, JSON-LD Schema.org graphs, and global remote client delivery.",
      topicSlug: "headless-wordpress-nextjs",
      topicName: "Headless CMS & SEO",
    },
  ];

  return (
    <section className="wpr-topics-cta-area mb--16">
      <div className="container">
        <div
          className="section-inner border"
          style={{
            padding: "54px 48px",
            position: "relative",
            borderRadius: 0,
            background: "#161616",
          }}
        >
          {/* Blueprint Corner Dots */}
          <span className="square-shape top-left"></span>
          <span className="square-shape top-right"></span>
          <span className="square-shape bottom-left"></span>
          <span className="square-shape bottom-right"></span>

          {/* Header Area */}
          <div style={{ maxWidth: "880px", marginBottom: "36px" }}>
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
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A84C", display: "inline-block" }}></span>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#C9A84C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                TECHNICAL KNOWLEDGE &amp; ARCHITECTURE HUB
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(26px, 3.4vw, 42px)",
                fontWeight: 800,
                color: "#F8F5EF",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                margin: "0 0 16px 0",
              }}
            >
              Explore 40 In-Depth{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Software Architecture &amp; QA Topic Guides.
              </span>
            </h2>

            <p style={{ fontSize: "15.5px", color: "#ded9cf", lineHeight: 1.7, margin: 0 }}>
              Dive into our comprehensive technical knowledge base covering Next.js 15 App Router, React Server Components, Flutter cross-platform mobile apps, automated Playwright/Selenium testing, AI agents, enterprise POS systems, headless CMS migrations, and remote software engineering.
            </p>
          </div>

          {/* Grid of Highlighted Bento Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "24px",
              marginBottom: "36px",
            }}
          >
            {highlightedCategories.map((item, idx) => (
              <div
                key={idx}
                className="tactile-card"
                style={{
                  padding: "30px 26px",
                  background: "#161616",
                  border: "1px solid #2E2E2E",
                  borderRadius: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(201, 168, 76, 0.15)",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "12px",
                        background: "rgba(201, 168, 76, 0.08)",
                        border: "1px solid rgba(201, 168, 76, 0.16)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                      }}
                    >
                      {item.icon}
                    </div>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#C9A84C",
                        background: "rgba(201, 168, 76, 0.06)",
                        border: "1px solid rgba(201, 168, 76, 0.15)",
                        padding: "4px 12px",
                        borderRadius: "9999px",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "17.5px",
                      fontWeight: 800,
                      color: "#F8F5EF",
                      lineHeight: 1.35,
                      marginBottom: "10px",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p style={{ fontSize: "13.5px", color: "#ded9cf", lineHeight: 1.65, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "22px",
                    paddingTop: "16px",
                    borderTop: "1px solid #F1F5F9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Link
                    href={`/topics/${item.topicSlug}`}
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#C9A84C",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <span>Read {item.topicName}</span>
                    <span>➔</span>
                  </Link>

                  <span style={{ fontSize: "11px", color: "#bfb9ad", fontWeight: 600 }}>
                    Guide
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Area with Rounded Bento Corners */}
          <div
            style={{
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
              padding: "32px 36px",
              background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
              border: "1px solid #334155",
              color: "#FFFFFF",
              boxShadow: "0 10px 30px -4px rgba(15, 23, 42, 0.2)",
            }}
          >
            <div style={{ maxWidth: "580px" }}>
              <h4 style={{ fontSize: "18px", fontWeight: 800, color: "#FFFFFF", margin: "0 0 6px 0" }}>
                Ready to Explore All 40 Architecture Guides?
              </h4>
              <p style={{ fontSize: "13.5px", color: "#383838", margin: 0, lineHeight: 1.6 }}>
                Structured specifications, technical blueprints, and verified case studies across 8 engineering disciplines.
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <Link
                href="/topics"
                style={{
                  background: "#C9A84C",
                  color: "#FFFFFF",
                  padding: "11px 24px",
                  borderRadius: "8px",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(201, 168, 76, 0.4)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>Explore Full Topics Directory</span>
                <span>➔</span>
              </Link>
              <Link
                href="/contact"
                style={{
                  background: "transparent",
                  color: "#FFFFFF",
                  border: "1px solid #475569",
                  padding: "11px 22px",
                  borderRadius: "8px",
                  fontSize: "13.5px",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Consult on Architecture
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import BrandMarquee from '@/components/BrandMarquee';
import WorkingProcess from '@/components/WorkingProcess';
import PricingPlans from '@/components/PricingPlans';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    absolute: "Software Engineering & QA Services | Jet Slate",
  },
  description: "Production-grade engineering services: Next.js web systems, Flutter mobile apps, QA automation, AI workflows, and enterprise POS architectures.",
  alternates: {
    canonical: "https://jetslate.com/services",
  },
  openGraph: {
    title: "Software Engineering & QA Services | Jet Slate",
    description: "Production-grade engineering services: Next.js web systems, Flutter mobile apps, QA automation, AI workflows, and enterprise POS architectures.",
    type: "website",
    url: "https://jetslate.com/services",
    images: [
      {
        url: "https://jetslate.com/assets/images/about/01.webp",
        width: 1200,
        height: 896,
        alt: "Jet Slate Software Engineering Services",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineering & QA Services | Jet Slate",
    description: "Production-grade engineering services: Next.js web systems, Flutter mobile apps, QA automation, AI workflows, and enterprise POS architectures.",
    images: ["https://jetslate.com/assets/images/about/01.webp"],
  }
};

export default function ServicesPage() {
  const serviceOfferings = [
    {
      id: "full-stack-web-development",
      title: "Next.js & Full-Stack Web Development",
      category: "Web Engineering & Database Architecture",
      icon: "⚡",
      desc: "Architecting sub-second Next.js 15 App Router web applications with React Server Components, Server Actions, PostgreSQL, and Prisma ORM. Engineered for 100/100 Core Web Vitals and global scale.",
      deliverables: ["Next.js 15 App Router Architecture", "PostgreSQL & Prisma ORM Modeling", "Edge SSR & Sub-Second Latency", "Admin CMS & Role Authentication"],
      pricing: "From $100 – $300",
      turnaround: "3–12 Days",
      popular: true
    },
    {
      id: "mobile-app-development",
      title: "Flutter & Cross-Platform Mobile Apps",
      category: "Mobile Engineering",
      icon: "📱",
      desc: "Building native-speed mobile applications with Flutter & Dart compiled to 100% ARM machine code. Fluid 60fps/120fps animations, biometric authentication, and offline SQLite synchronization.",
      deliverables: ["Unified iOS & Android Codebase", "State Management (Bloc/Riverpod)", "Native Camera, GPS & Biometrics", "App Store & Google Play Publishing"],
      pricing: "From $450 – $800+",
      turnaround: "10–21 Days",
      popular: false
    },
    {
      id: "qa-automation",
      title: "QA Automation & Playwright/Selenium",
      category: "E2E Testing & Quality Engineering",
      icon: "🛡️",
      desc: "Automated end-to-end testing frameworks designed with Playwright, Selenium, and GitHub Actions to ensure 100% regression-free codebases, cross-browser resilience, and continuous delivery.",
      deliverables: ["Playwright E2E Testing Suites", "Visual Regression Validation", "GitHub Actions CI/CD Integration", "API Contract & Load Testing"],
      pricing: "From $250+",
      turnaround: "5–10 Days",
      popular: true
    },
    {
      id: "ai-automations-and-integration",
      title: "AI Automation, LLM Agents & RAG",
      category: "AI Engineering & Process Automation",
      icon: "🤖",
      desc: "Embedding cutting-edge generative AI capabilities and autonomous agents into business workflows. Custom vector search, RAG pipelines, OpenAI / Anthropic APIs, and n8n webhook orchestration.",
      deliverables: ["Autonomous AI Agent Workflows", "Retrieval-Augmented Generation (RAG)", "Vector Database (pgvector/Pinecone)", "Automated Business Process Pipelines"],
      pricing: "From $500+",
      turnaround: "7–14 Days",
      popular: false
    },
    {
      id: "custom-software-solutions",
      title: "Enterprise POS & Custom Business Software",
      category: "Business Software",
      icon: "💼",
      desc: "Mission-critical retail Point-of-Sale (POS) engines, multi-branch inventory tracking, thermal receipt printing, and real-time cloud data sync built for high-uptime operations.",
      deliverables: ["Multi-Branch Retail Inventory Sync", "Barcode Scanning & Thermal Receipts", "Offline-First SQLite Database", "Automated Accounting & Analytics"],
      pricing: "From $600+",
      turnaround: "14–25 Days",
      popular: false
    },
    {
      id: "wordpress-and-headless-cms",
      title: "WordPress & Headless CMS Architecture",
      category: "WordPress & Headless CMS",
      icon: "🌐",
      desc: "High-speed custom WordPress development, decoupled Headless WordPress with Next.js frontend, WooCommerce speed optimization, and enterprise technical SEO architecture.",
      deliverables: ["Custom Gutenberg Blocks & Themes", "Headless WPGraphQL + Next.js", "WooCommerce Checkout Optimization", "Technical SEO & 301 Redirect Engines"],
      pricing: "From $200 – $500",
      turnaround: "4–10 Days",
      popular: false
    },
    {
      id: "data-analytics-and-machine-learning",
      title: "Data Science & Machine Learning",
      category: "Data Intelligence",
      icon: "📊",
      desc: "Actionable business intelligence, Python data pipelines, automated ETL workflows, predictive models, and real-time analytical dashboards.",
      deliverables: ["Python / Pandas ETL Pipelines", "Predictive Machine Learning Models", "Interactive Data Dashboards", "Statistical Trend Forecasting"],
      pricing: "From $400+",
      turnaround: "7–14 Days",
      popular: false
    },
    {
      id: "frontend-and-uiux-design",
      title: "Frontend Architecture & UI/UX Systems",
      category: "Frontend Architecture",
      icon: "🎨",
      desc: "Crafting modern, accessible, and high-converting user interfaces with TailwindCSS, component design tokens, and smooth 60fps micro-animations.",
      deliverables: ["Modular React/Next.js Component Library", "Responsive Mobile-First CSS Architecture", "WCAG 2.1 Accessibility Compliance", "Interactive Prototypes & Animations"],
      pricing: "From $200+",
      turnaround: "3–7 Days",
      popular: false
    }
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://jetslate.com/services#webpage",
        "url": "https://jetslate.com/services",
        "name": "Software Engineering & QA Automation Services | Jet Slate",
        "description": "Explore production-grade software engineering services: Next.js web development, Flutter mobile apps, QA test automation, AI workflows, and enterprise POS software.",
        "publisher": {
          "@id": "https://jetslate.com/#person"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://jetslate.com/services#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://jetslate.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://jetslate.com/services"
          }
        ]
      }
    ]
  };

  return (
    <main style={{ background: "#111111", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <Header />
      
      {/* Hero Banner Section */}
      <section className="wpr-banner-area breadcrumb mb--16">
        <div className="container">
          <div 
            className="section-inner bg-[#161616] border"
            style={{
              position: "relative",
              borderRadius: 0,
              background: "#161616",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.45)"
            }}
          >
            {/* Blueprint Corner Dots */}
            <span className="square-shape top-left"></span>
            <span className="square-shape top-right"></span>
            <span className="square-shape bottom-left"></span>
            <span className="square-shape bottom-right"></span>

            {/* Breadcrumb Navigation */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#E8D6B3", marginBottom: "18px" }}>
              <Link href="/" style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none" }}>Home</Link>
              <span>/</span>
              <span style={{ color: "#F8F5EF", fontWeight: 600 }}>Engineering Solutions</span>
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
                marginBottom: "18px"
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A84C", display: "inline-block" }}></span>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#C9A84C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                END-TO-END ARCHITECTURAL CAPABILITIES
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              style={{ 
                fontSize: "clamp(26px, 3.8vw, 46px)", 
                fontWeight: 800, 
                color: "#F8F5EF", 
                lineHeight: 1.18, 
                letterSpacing: "-0.025em", 
                margin: "0 0 16px 0",
                textTransform: "uppercase",
                maxWidth: "920px"
              }}
            >
              Production-Grade Engineering &amp;{" "}
              <span 
                style={{ 
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  display: "inline-block"
                }}
              >
                Custom Software Solutions.
              </span>
            </h1>

            {/* Narrative Subtitle */}
            <p 
              style={{ 
                fontSize: "15px", 
                color: "#ded9cf", 
                lineHeight: 1.65, 
                margin: "0 0 24px 0",
                maxWidth: "780px"
              }}
            >
              Transforming complex business logic into high-velocity web platforms, 60fps Flutter mobile applications, and zero-defect enterprise software architectures.
            </p>

            {/* Quick Architectural Value Highlights */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {[
                { icon: "⚡", text: "Sub-Second Next.js Latency" },
                { icon: "📱", text: "100% Native iOS & Android Code" },
                { icon: "💼", text: "Multi-Branch Enterprise POS" },
                { icon: "🛡️", text: "Zero-Defect QA SLAs" }
              ].map((highlight, idx) => (
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
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#F8F5EF"
                  }}
                >
                  <span>{highlight.icon}</span>
                  <span>{highlight.text}</span>
                </div>
              ))}
              <Link
                href="/topics"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 16px",
                  borderRadius: "8px",
                  background: "#EFF6FF",
                  border: "1px solid #BFDBFE",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#C9A84C",
                  textDecoration: "none"
                }}
              >
                <span>📚 Explore 40 Architecture Topics</span>
                <span>➔</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="wpr-service-area mb--16">
        <div className="container">
          <div 
            className="section-inner bg-[#161616] border"
            style={{
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

            <div style={{ maxWidth: "860px", marginBottom: "40px" }}>
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
                  SERVICES DIRECTORY
                </span>
              </div>

              <h2 
                style={{ 
                  fontSize: "clamp(26px, 3.2vw, 38px)", 
                  fontWeight: 800, 
                  color: "#F8F5EF", 
                  lineHeight: 1.2, 
                  letterSpacing: "-0.025em", 
                  margin: "0 0 14px 0",
                  textTransform: "uppercase"
                }}
              >
                Core Architecture &amp;{" "}
                <span 
                  style={{ 
                    background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)", 
                    WebkitBackgroundClip: "text", 
                    WebkitTextFillColor: "transparent",
                    display: "inline-block"
                  }}
                >
                  Engineering Domains.
                </span>
              </h2>

              <p style={{ fontSize: "15px", color: "#E8D6B3", lineHeight: 1.6, margin: 0, maxWidth: "680px" }}>
                Select a service below to explore complete architectural specifications, key deliverables, live tech stacks, and custom pricing models.
              </p>
            </div>

            {/* 6 Grid Cards */}
            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", 
                gap: "24px" 
              }}
            >
              {serviceOfferings.map((service, idx) => (
                <div 
                  key={idx}
                  className="service-blueprint-card"
                  style={{
                    border: "1px solid #2E2E2E",
                    borderRadius: "14px",
                    padding: "32px 28px",
                    background: "#161616",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    transition: "all 0.25s ease",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.45)"
                  }}
                >
                  {service.popular && (
                    <div 
                      style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        padding: "4px 10px",
                        borderRadius: "9999px",
                        background: "#C9A84C",
                        color: "#161616",
                        fontSize: "10px",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase"
                      }}
                    >
                      Most Requested
                    </div>
                  )}

                  <div>
                    {/* Icon & Category */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                      <div 
                        style={{ 
                          width: "44px", 
                          height: "44px", 
                          borderRadius: "10px", 
                          background: "rgba(201, 168, 76, 0.08)", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center",
                          fontSize: "22px"
                        }}
                      >
                        {service.icon}
                      </div>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "#E8D6B3", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        {service.category}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#F8F5EF", marginBottom: "12px", lineHeight: 1.3 }}>
                      {service.title}
                    </h3>

                    <p style={{ fontSize: "14px", color: "#ded9cf", lineHeight: 1.6, marginBottom: "20px" }}>
                      {service.desc}
                    </p>

                    {/* Deliverable Checkmarks */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px", borderTop: "1px solid #1e1e1e", paddingTop: "16px" }}>
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12.5px", color: "#ded9cf" }}>
                          <span style={{ color: "#C9A84C", fontWeight: 800 }}>✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Pricing & Link */}
                  <div 
                    style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "space-between", 
                      paddingTop: "18px", 
                      borderTop: "1px solid #2E2E2E" 
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "11px", color: "#c4bba8", fontWeight: 600, textTransform: "uppercase" }}>Investment</div>
                      <div style={{ fontSize: "15px", fontWeight: 800, color: "#C9A84C" }}>{service.pricing}</div>
                    </div>

                    <Link 
                      href={`/services/${service.id}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 18px",
                        borderRadius: "9999px",
                        background: "#1e1e1e",
                        color: "#F8F5EF",
                        fontSize: "13px",
                        fontWeight: 700,
                        textDecoration: "none",
                        transition: "all 0.2s ease"
                      }}
                      className="service-link-btn"
                    >
                      <span>Explore Specs</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Explore Related Technical Topics Section */}
            <div 
              style={{ 
                marginTop: "48px", 
                padding: "36px 40px", 
                background: "#161616", 
                border: "1px solid #2E2E2E",
                borderRadius: "4px"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "24px", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#C9A84C", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    DEEP-DIVE ARCHITECTURAL SPECIFICATIONS
                  </span>
                  <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F8F5EF", margin: "4px 0 0 0" }}>
                    Explore Related Technical Topics
                  </h2>
                </div>
                <Link
                  href="/topics"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "10px 20px",
                    background: "#C9A84C",
                    color: "#161616",
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                    borderRadius: "4px"
                  }}
                >
                  <span>View All 40 Engineering Topics</span>
                  <span>➔</span>
                </Link>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "16px" }}>
                {[
                  {
                    category: "QA Testing",
                    title: "QA Automation Strategy",
                    desc: "Test pyramid optimization, shift-left quality gates, and automated regression.",
                    slug: "qa-automation-services-strategy",
                  },
                  {
                    category: "Test Frameworks",
                    title: "Playwright Test Automation",
                    desc: "Resilient Page Object Models, auto-waiting locators, and sharded CI/CD execution.",
                    slug: "playwright-test-automation-frameworks",
                  },
                  {
                    category: "Full-Stack Web",
                    title: "Next.js Full-Stack Architecture",
                    desc: "React Server Components, sub-second TTFB, PostgreSQL, and Core Web Vitals.",
                    slug: "nextjs-development-services",
                  },
                  {
                    category: "Mobile Apps",
                    title: "Flutter Mobile Engineering",
                    desc: "60fps native compilation, BLoC state machines, and offline SQLite local cache.",
                    slug: "flutter-app-development-services",
                  },
                  {
                    category: "AI & RAG",
                    title: "AI Agents & Vector RAG",
                    desc: "Autonomous tool-calling agents, pgvector embeddings, and n8n webhook pipelines.",
                    slug: "ai-agents-llm-apps-rag",
                  },
                  {
                    category: "Business Software",
                    title: "Custom Cloud POS Software",
                    desc: "Sub-10ms barcode scanning, multi-branch cloud sync, and thermal printer integration.",
                    slug: "custom-pos-software-development",
                  },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={`/topics/${item.slug}`}
                    style={{
                      padding: "18px 20px",
                      background: "#161616",
                      border: "1px solid #3A3A3A",
                      textDecoration: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <div>
                      <span style={{ fontSize: "11px", fontWeight: 800, color: "#C9A84C", display: "block", marginBottom: "4px" }}>
                        {item.category}
                      </span>
                      <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#F8F5EF", marginBottom: "6px" }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: "12.5px", color: "#E8D6B3", lineHeight: 1.5, margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                    <div style={{ marginTop: "14px", fontSize: "12px", fontWeight: 700, color: "#C9A84C" }}>
                      Explore Topic ➔
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <span className="square-shape top-left"></span>
            <span className="square-shape top-right"></span>
            <span className="square-shape bottom-left"></span>
            <span className="square-shape bottom-right"></span>
          </div>
        </div>
      </section>

      <BrandMarquee />
      <WorkingProcess />
      <PricingPlans />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}

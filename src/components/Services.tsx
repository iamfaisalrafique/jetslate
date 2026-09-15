"use client";

import { useState } from "react";
import Link from "next/link";

export interface ServiceItem {
  id: string;
  title: string;
  slug?: string;
  [key: string]: any;
}

interface ServicesProps {
  services?: ServiceItem[];
}

type ServiceCategory = "all" | "web" | "mobile" | "enterprise" | "ai-qa";

interface EnhancedService {
  id: string;
  title: string;
  slug: string;
  category: "web" | "mobile" | "enterprise" | "ai-qa";
  categoryLabel: string;
  shortDescription: string;
  icon: string;
  pricingTag: string;
  techStack: string[];
  deliverables: string[];
}

export default function Services({ services = [] }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");

  const defaultServices: EnhancedService[] = [
    {
      id: "1",
      title: "Full-Stack Enterprise Web Apps",
      slug: "full-stack-web-development",
      category: "web",
      categoryLabel: "Web Architecture",
      shortDescription: "High-performance web apps built with Next.js App Router, Node.js, and PostgreSQL for maximum speed, security, and sub-second page loads.",
      icon: "/assets/images/service/service-web.webp",
      pricingTag: "$2,000+",
      techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Prisma"],
      deliverables: [
        "Sub-second SSR & Static Page Loads",
        "Role-Based Admin Dashboard & Full CRUD",
        "SEO Meta & Schema.org Rich Structured Data",
        "Automated CI/CD Deployment to Vercel/AWS"
      ]
    },
    {
      id: "2",
      title: "Flutter & Cross-Platform Mobile",
      slug: "mobile-app-development",
      category: "mobile",
      categoryLabel: "Mobile Engineering",
      shortDescription: "Cross-platform mobile apps for iOS & Android with Flutter & Dart for 60fps/120fps fluid speed, offline-first sync, and native device hardware access.",
      icon: "/assets/images/service/service-mobile.webp",
      pricingTag: "$2,500+",
      techStack: ["Flutter", "Dart", "iOS", "Android", "Firebase"],
      deliverables: [
        "Single Codebase for iOS & Android",
        "Offline-First Local Storage & Auto-Sync",
        "Push Notifications & In-App Purchases",
        "Turnkey App Store & Play Store Publishing"
      ]
    },
    {
      id: "3",
      title: "Enterprise POS & Business Software",
      slug: "custom-software-solutions",
      category: "enterprise",
      categoryLabel: "Enterprise Systems",
      shortDescription: "Mission-critical business software: Enterprise Point of Sale, real-time inventory tracking, thermal printing, barcode scanning, and multi-branch sync.",
      icon: "/assets/images/service/service-pos.webp",
      pricingTag: "$1,800+",
      techStack: ["React", "PostgreSQL", "Electron", "REST API", "Docker"],
      deliverables: [
        "Barcode Scanning & Invoice Thermal Printing",
        "Multi-Branch Real-Time Inventory Sync",
        "Automated Accounting & Profit/Loss Ledgers",
        "Local Offline Resilience & Cloud Backup"
      ]
    },
    {
      id: "4",
      title: "Automated QA & CI/CD Test Gates",
      slug: "qa-automation",
      category: "ai-qa",
      categoryLabel: "Quality Engineering",
      shortDescription: "Comprehensive Playwright & Selenium E2E automated test suites ensuring zero regression bugs and rapid PR test verification gates in CI/CD.",
      icon: "/assets/images/service/service-qa.webp",
      pricingTag: "$1,200+",
      techStack: ["Playwright", "Selenium", "TypeScript", "GitHub Actions", "Docker"],
      deliverables: [
        "End-to-End Cross-Browser Regression Tests",
        "Automated API Contract & Schema Validation",
        "CI/CD Pull-Request Blocking Gates",
        "Detailed HTML Video & Trace Reports"
      ]
    },
    {
      id: "5",
      title: "Autonomous AI Workflows & LLM Apps",
      slug: "ai-automations-and-integration",
      category: "ai-qa",
      categoryLabel: "AI & Automation",
      shortDescription: "Custom AI automation pipelines, OpenAI/Claude/Gemini LLM integrations, RAG search over proprietary data, and intelligent chat assistants.",
      icon: "/assets/images/service/service-ai-ml.webp",
      pricingTag: "$1,800+",
      techStack: ["OpenAI", "Gemini", "Python", "LangChain", "Vector DB"],
      deliverables: [
        "Custom RAG Search over Company Knowledge",
        "Automated Document Processing & Extraction",
        "Intelligent AI Chatbots with Tool Calling",
        "Cost-Optimized Prompt Engineering"
      ]
    },
    {
      id: "6",
      title: "Data Science & Predictive Analytics",
      slug: "data-analytics-and-machine-learning",
      category: "ai-qa",
      categoryLabel: "Data Engineering",
      shortDescription: "Custom machine learning models, predictive sales forecasting, automated data pipelines (ETL), and interactive business intelligence dashboards.",
      icon: "/assets/images/service/service-data.webp",
      pricingTag: "$2,200+",
      techStack: ["Python", "Pandas", "Scikit-Learn", "FastAPI", "PowerBI"],
      deliverables: [
        "Automated Data Cleaning & ETL Pipelines",
        "Predictive Customer & Sales Forecast Models",
        "Interactive Real-Time Analytics Dashboards",
        "REST API Microservice Deployment"
      ]
    },
    {
      id: "7",
      title: "WordPress & Modern Headless CMS",
      slug: "wordpress-and-headless-cms",
      category: "web",
      categoryLabel: "CMS Engineering",
      shortDescription: "Custom high-speed WordPress themes, scalable WooCommerce stores, and Headless WordPress architectures integrated with Next.js frontends.",
      icon: "/assets/images/service/service-wordpress.webp",
      pricingTag: "$1,500+",
      techStack: ["WordPress", "WooCommerce", "GraphQL", "PHP", "Next.js"],
      deliverables: [
        "Custom Block Theme & Plugin Architecture",
        "WooCommerce Payment & Inventory Sync",
        "Headless Next.js Frontend Integration",
        "95+ Google Core Web Vitals Optimization"
      ]
    },
    {
      id: "8",
      title: "Frontend & UI/UX Design Systems",
      slug: "frontend-and-uiux-design",
      category: "web",
      categoryLabel: "UI/UX & Frontend",
      shortDescription: "Pixel-perfect modern user interfaces, Figma design systems, interactive micro-animations, and conversion-optimized user experiences.",
      icon: "/assets/images/service/service-uiux.webp",
      pricingTag: "$1,400+",
      techStack: ["Figma", "TailwindCSS", "Framer Motion", "TypeScript", "React"],
      deliverables: [
        "Figma Design Systems & Interactive Prototypes",
        "100% Pixel-Perfect Mobile-First Layouts",
        "Accessible WCAG 2.1 AAA Compliant Design",
        "Fluid Micro-Animations & Dynamic States"
      ]
    }
  ];

  // Helper to normalize uppercase titles from DB to clean Title Case
  const toTitleCase = (str: string) => {
    if (!str) return "";
    if (str !== str.toUpperCase()) return str;
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .replace(/\bAnd\b/g, "&")
      .replace(/\bQa\b/g, "QA")
      .replace(/\bUi\/ux\b/g, "UI/UX")
      .replace(/\bCms\b/g, "CMS")
      .replace(/\bPos\b/g, "POS")
      .replace(/\bMl\b/g, "ML")
      .replace(/\bAi\b/g, "AI")
      .replace(/\bCi\/cd\b/g, "CI/CD");
  };

  // Helper function to map DB services to enhanced structure
  const resolveService = (service: ServiceItem, index: number): EnhancedService => {
    const rawPricing = service.pricing ? service.pricing.split("|") : [];
    const hasPrice = rawPricing.length > 0 && (rawPricing[0].includes("$") || rawPricing[0].toLowerCase().includes("starting"));
    let rawPriceText = hasPrice ? rawPricing[0] : `$${1500 + index * 300}+`;
    // Clean out any "Starting at" text
    const cleanPrice = rawPriceText.replace(/starting\s+at\s*/i, "").trim();
    const rawFeatures = hasPrice ? rawPricing.slice(1) : rawPricing;

    const slugLower = (service.slug || "").toLowerCase();
    let cat: "web" | "mobile" | "enterprise" | "ai-qa" = "web";
    let catLabel = "Web Architecture";
    let defaultTech = ["Next.js", "TypeScript", "PostgreSQL"];

    if (slugLower.includes("mobile") || slugLower.includes("flutter") || slugLower.includes("app")) {
      cat = "mobile";
      catLabel = "Mobile Engineering";
      defaultTech = ["Flutter", "Dart", "iOS", "Android"];
    } else if (slugLower.includes("pos") || slugLower.includes("software") || slugLower.includes("custom")) {
      cat = "enterprise";
      catLabel = "Enterprise Systems";
      defaultTech = ["React", "PostgreSQL", "Electron", "Docker"];
    } else if (slugLower.includes("qa") || slugLower.includes("test") || slugLower.includes("automation") || slugLower.includes("ai") || slugLower.includes("data")) {
      cat = "ai-qa";
      catLabel = "AI & QA Engineering";
      defaultTech = ["Playwright", "Python", "CI/CD", "OpenAI"];
    }

    const defaultFallbackIcon = `/assets/images/service/0${(index % 4) + 1}.webp`;
    const iconSrc = service.icon || defaultFallbackIcon;

    return {
      id: service.id,
      title: toTitleCase(service.title),
      slug: service.slug || `service-${index + 1}`,
      category: cat,
      categoryLabel: catLabel,
      shortDescription: service.shortDescription || "",
      icon: iconSrc.startsWith("/") ? iconSrc : `/${iconSrc}`,
      pricingTag: cleanPrice,
      techStack: defaultTech,
      deliverables: rawFeatures.length > 0 ? rawFeatures : [
        "Production-Grade Scalable Codebase",
        "100% Responsive & Tested Architecture",
        "Direct Senior Engineer Support & Handoff"
      ]
    };
  };

  const allDisplayServices = (services && services.length > 0) 
    ? services.map((s, idx) => resolveService(s, idx))
    : defaultServices;

  const filteredServices = activeCategory === "all"
    ? allDisplayServices
    : allDisplayServices.filter((s) => s.category === activeCategory);

  const counts = {
    all: allDisplayServices.length,
    web: allDisplayServices.filter((s) => s.category === "web").length,
    mobile: allDisplayServices.filter((s) => s.category === "mobile").length,
    enterprise: allDisplayServices.filter((s) => s.category === "enterprise").length,
    "ai-qa": allDisplayServices.filter((s) => s.category === "ai-qa").length,
  };

  return (
    <section id="services" className="wpr-services-area services-bento-section mb--16">
      <div className="container">
        <div 
          className="section-inner border"
          style={{ position: 'relative', borderRadius: 0, background: '#161616', padding: '54px 48px' }}
        >
          {/* Blueprint Corner Dots */}
          <span className="square-shape top-left"></span>
          <span className="square-shape top-right"></span>
          <span className="square-shape bottom-left"></span>
          <span className="square-shape bottom-right"></span>

          {/* Section Header with Authentic Pill Badge */}
          <div style={{ maxWidth: '820px', margin: '0 auto 36px auto', textAlign: 'center' }}>
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
                SOLUTIONS &amp; ARCHITECTURE
              </span>
            </div>

            <h2 
              style={{ 
                fontSize: 'clamp(26px, 3.2vw, 38px)', 
                fontWeight: 800, 
                color: "#F8F5EF", 
                lineHeight: 1.25, 
                letterSpacing: '-0.02em', 
                margin: '0 0 14px 0' 
              }}
            >
              Specialized Technical Consulting &amp; <br className="d-none d-md-block" />
              Engineering Solutions
            </h2>

            <p style={{ fontSize: '15px', color: "#E8D6B3", lineHeight: 1.65, maxWidth: '640px', margin: '0 auto' }}>
              End-to-end software engineering across modern web platforms, cross-platform mobile apps, enterprise POS software, and automated testing frameworks.
            </p>
          </div>

          {/* Category Filter Pills (Inline Row, Centered) */}
          <div className="category-filter-bar" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '32px', width: '100%' }}>
            {[
              { id: "all", label: "All Solutions", count: counts.all },
              { id: "web", label: "Full-Stack Web", count: counts.web },
              { id: "mobile", label: "Mobile Apps", count: counts.mobile },
              { id: "enterprise", label: "Enterprise POS & ERP", count: counts.enterprise },
              { id: "ai-qa", label: "AI & QA Automation", count: counts["ai-qa"] }
            ].map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`category-pill-btn ${isSelected ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat.id as typeof activeCategory)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '10px 22px',
                    borderRadius: '9999px',
                    fontSize: '13px',
                    fontWeight: 700,
                    background: isSelected ? '#C9A84C' : '#1A1A1A',
                    color: isSelected ? '#111111' : '#E8D6B3',
                    border: isSelected ? '1px solid #C9A84C' : '1px solid #2E2E2E',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    boxShadow: isSelected ? '0 4px 14px rgba(201, 168, 76, 0.3)' : '0 2px 6px rgba(0, 0, 0, 0.4)',
                    transition: 'all 0.2s ease',
                    flex: '0 0 auto'
                  }}
                >
                  <span>{cat.label}</span>
                  <span 
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      padding: '2px 8px', 
                      borderRadius: '9999px', 
                      fontSize: '11px', 
                      fontWeight: 800,
                      background: isSelected ? 'rgba(0,0,0,0.2)' : '#222222',
                      color: isSelected ? '#111111' : '#C9A84C'
                    }}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 3-Column Service Grid */}
          <div className="section-bottom-content square-dot" style={{ padding: '0 24px 36px', borderTop: 'none' }}>
            <div className="services-3col-grid">
              {filteredServices.map((service, index) => {
                return (
                  <div
                    key={service.id}
                    className="service-card-item"
                  >
                    <div>
                      {/* Top Category Badge */}
                      <div className="top-badge-row">
                        <span className="category-tag">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                          </svg>
                          {service.categoryLabel}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="card-title">{service.title}</h3>
                      <p className="card-desc">{service.shortDescription}</p>

                      {/* Tech Stack Badges */}
                      <div className="tech-stack-wrap">
                        {service.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="tech-badge">
                            <span style={{ fontSize: '9px', opacity: 0.6 }}>●</span> {tech}
                          </span>
                        ))}
                      </div>

                      {/* Deliverables Checklist */}
                      <ul 
                        className="deliverables-list" 
                        style={{ 
                          listStyle: 'none', 
                          padding: 0, 
                          margin: '0 0 16px 0', 
                          display: 'flex', 
                          flexDirection: 'column', 
                          gap: '6px' 
                        }}
                      >
                        {service.deliverables.map((item, dIdx) => (
                          <li 
                            key={dIdx} 
                            style={{ 
                              display: 'flex', 
                              alignItems: 'flex-start', 
                              gap: '8px', 
                              fontSize: '13px', 
                              lineHeight: '1.4', 
                              color: "#ded9cf", 
                              margin: 0, 
                              padding: 0 
                            }}
                          >
                            <svg 
                              width="15" 
                              height="15" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="#C9A84C" 
                              strokeWidth="2.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              style={{ flexShrink: 0, marginTop: '2px' }}
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Action Area */}
                    <div className="card-bottom-action">
                      <Link
                        href={`/services/${service.slug}`}
                        className="action-btn"
                        title={`Explore details for ${service.title}`}
                      >
                        Explore Solution
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Link to 40 Topics Index */}
            <div style={{ marginTop: "40px", textAlign: "center" }}>
              <Link
                href="/topics"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 28px",
                  background: "#1A1A1A",
                  border: "1px solid rgba(201, 168, 76, 0.3)",
                  color: "#C9A84C",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
                  transition: "all 0.2s ease"
                }}
              >
                <span>📚 Explore All 40 Architecture &amp; QA Topic Clusters</span>
                <span>➔</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

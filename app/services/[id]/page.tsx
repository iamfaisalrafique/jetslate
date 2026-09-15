import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import BrandMarquee from '@/components/BrandMarquee';
import WorkingProcess from '@/components/WorkingProcess';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import { topicalClusters } from '@/lib/topical-map-data';

interface ServiceDetail {
  id: string;
  title: string;
  category: string;
  badge: string;
  heroDesc: string;
  overview: string;
  architecturePoints: { title: string; desc: string; icon: string }[];
  deliverables: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  startingPrice: string;
  timeline: string;
  faqs: { q: string; a: string }[];
}

export const revalidate = 3600;

export async function generateStaticParams() {
  return Object.keys(serviceDatabase).map((id) => ({ id }));
}

const serviceDatabase: Record<string, ServiceDetail> = {
  "full-stack-web-development": {
    id: "full-stack-web-development",
    title: "Next.js & Full-Stack Web Development Services",
    category: "Web Engineering & Database Architecture",
    badge: "Next.js 15 • React 19 • PostgreSQL • Prisma ORM",
    heroDesc: "Architecting ultra-fast, database-driven web applications with Next.js App Router, React Server Components, and Prisma ORM — engineered for 100/100 Core Web Vitals and global scale.",
    overview: "Every web platform is built from the ground up to achieve sub-second page loads, resilient database queries, clean modular component architecture, and zero runtime layout shift. From high-converting landing pages to complex multi-tenant SaaS platforms with secure authentication and Stripe billing, I engineer production-grade systems ready for scale.",
    architecturePoints: [
      {
        icon: "⚡",
        title: "React Server Components & Streaming SSR",
        desc: "Leveraging Next.js 15 Server Components to minimize client JavaScript bundle size and stream dynamic UI instantly with sub-second TTFB."
      },
      {
        icon: "🗄️",
        title: "PostgreSQL & Prisma ORM Modeling",
        desc: "Strictly typed database schema modeling, connection pooling, indexed relational queries, and automated migration management."
      },
      {
        icon: "🛡️",
        title: "Role-Based Access & Server Actions",
        desc: "End-to-end type safety between client forms and backend server actions with JWT / NextAuth session handling and CSRF protection."
      },
      {
        icon: "📈",
        title: "Technical SEO & Schema.org JSON-LD",
        desc: "Built-in dynamic sitemaps, Open Graph metadata, semantic HTML5, and Google Rich Snippets for maximum organic search dominance."
      }
    ],
    deliverables: [
      "Custom Next.js 15 App Router codebase with TypeScript",
      "PostgreSQL / MySQL relational schema with Prisma ORM",
      "Full administrative CMS panel with data CRUD operations",
      "Authentication system (Google, GitHub, Email Magic Link)",
      "Automated Playwright E2E and visual test coverage",
      "100/100 Google PageSpeed & Core Web Vitals optimization"
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "TailwindCSS", "Playwright", "Docker"],
    metrics: [
      { label: "Core Web Vitals Score", value: "100/100" },
      { label: "Average Page Load Time", value: "< 0.4s" },
      { label: "Type Safety Coverage", value: "100%" }
    ],
    startingPrice: "$100 – $300",
    timeline: "3–12 Days",
    faqs: [
      {
        q: "What is the difference between a static website and a full-stack portal?",
        a: "A static website is built for high-speed marketing pages and portfolios using static site generation. A full-stack portal includes dynamic PostgreSQL databases, admin CMS dashboards, authentication, and custom business logic."
      },
      {
        q: "Will I have full ownership of the source code and database?",
        a: "Yes, 100%. Upon project completion, full repository ownership, deployment scripts, database credentials, and documentation are transferred directly to your GitHub and hosting accounts."
      }
    ]
  },
  "mobile-app-development": {
    id: "mobile-app-development",
    title: "Flutter & Cross-Platform Mobile App Development",
    category: "Mobile Engineering",
    badge: "Flutter 3 • Dart • Native ARM • 60fps/120fps",
    heroDesc: "Building native-speed mobile applications using Flutter & Dart. Single unified codebase compiling directly to native ARM machine code on both iOS and Android.",
    overview: "I design and develop responsive, high-performance mobile applications that look and feel completely native on Apple iOS and Google Android devices. By leveraging Flutter's Impeller rendering engine, your app achieves buttery smooth 60fps/120fps animations, full hardware sensor integration, and offline-first SQLite data persistence.",
    architecturePoints: [
      {
        icon: "📱",
        title: "Single Codebase, Dual Native Compilation",
        desc: "Zero webview wrappers. Dart compiles directly into native ARM64 assembly for unbeatable performance and memory efficiency."
      },
      {
        icon: "🔄",
        title: "Offline-First Sync & SQLite Local Cache",
        desc: "Users can seamlessly interact with the application offline; state changes are queued and automatically synchronized when connectivity returns."
      },
      {
        icon: "🔐",
        title: "Biometric & Hardware API Integration",
        desc: "Native FaceID, Fingerprint biometrics, camera scanning, GPS geolocation, push notifications, and bluetooth peripheral connectivity."
      },
      {
        icon: "🎨",
        title: "Custom Design System & Fluid 120fps UI",
        desc: "Pixel-perfect Flutter widget architecture supporting both Cupertino (iOS) and Material Design guidelines with smooth dark mode switching."
      }
    ],
    deliverables: [
      "Production-ready Flutter iOS & Android mobile application",
      "Clean Architecture state management (Bloc / Riverpod)",
      "RESTful / GraphQL backend API integration",
      "Push notification pipeline (Firebase Cloud Messaging)",
      "App Store & Google Play Store release build bundles",
      "Complete design tokens and responsive UI test suite"
    ],
    techStack: ["Flutter", "Dart", "iOS / Swift", "Android / Kotlin", "Firebase", "SQLite", "Bloc", "REST APIs"],
    metrics: [
      { label: "Target Frame Rate", value: "60–120 FPS" },
      { label: "Code Sharing Efficiency", value: "95%+" },
      { label: "App Store Ready", value: "iOS & Android" }
    ],
    startingPrice: "$450 – $800+",
    timeline: "10–21 Days",
    faqs: [
      {
        q: "Why choose Flutter over React Native or separate native apps?",
        a: "Flutter renders directly via its high-performance Impeller engine rather than relying on a JavaScript bridge. This guarantees consistent UI across all device sizes, faster compilation, and identical 60fps animations on both iOS and Android."
      },
      {
        q: "Do you help publish the app to Apple App Store and Google Play?",
        a: "Yes, I guide you through Apple Developer and Google Play Console setup, create all signed release builds (.ipa and .aab), configure privacy manifests, and submit for store review."
      }
    ]
  },
  "qa-automation": {
    id: "qa-automation",
    title: "QA Automation & Playwright/Selenium Testing Services",
    category: "E2E Testing & Quality Engineering",
    badge: "Playwright • Selenium • GitHub Actions • Zero Regression",
    heroDesc: "Resilient automated test suites and continuous verification pipelines designed with Playwright, Selenium, and GitHub Actions to ensure zero-defect deployments.",
    overview: "Eliminate manual testing bottlenecks with robust automated End-to-End (E2E), visual regression, and API testing suites. Every critical user journey (user registration, checkout funnels, database CRUD, state machines) is tested across Chromium, WebKit, and Firefox before code reaches production.",
    architecturePoints: [
      {
        icon: "🤖",
        title: "Playwright Cross-Browser Testing",
        desc: "Simulating authentic real-world user interactions across Chromium, Firefox, and Safari with automatic retries and network interception."
      },
      {
        icon: "👁️",
        title: "Pixel-Perfect Visual Regression",
        desc: "Automated snapshot comparisons catching unintended CSS drifts, broken layouts, and font rendering anomalies across viewport sizes."
      },
      {
        icon: "🚀",
        title: "GitHub Actions CI/CD Quality Gates",
        desc: "Automated test execution on every pull request, preventing regressions from ever merging into production branches."
      },
      {
        icon: "📊",
        title: "Detailed HTML Test Reports & Video Artifacts",
        desc: "Comprehensive execution artifacts with video recordings, console logs, and step-by-step trace viewer diagnostics on failures."
      }
    ],
    deliverables: [
      "Modular Playwright E2E test framework with TypeScript",
      "Page Object Model (POM) architecture for high maintainability",
      "GitHub Actions workflow pipeline with parallel execution",
      "Visual regression baselines and responsive checks",
      "API integration and database state fixture seeding",
      "Continuous test reporting dashboard setup"
    ],
    techStack: ["Playwright", "TypeScript", "GitHub Actions", "Docker", "Jest", "Selenium", "Allure Reports"],
    metrics: [
      { label: "Regression Prevention", value: "99.9%" },
      { label: "CI/CD Test Runtime", value: "< 2 Mins" },
      { label: "Browser Coverage", value: "100% (Chrome/Safari/FF)" }
    ],
    startingPrice: "$250+",
    timeline: "5–10 Days",
    faqs: [
      {
        q: "Can you integrate automated tests into an existing Next.js or React codebase?",
        a: "Yes. I can audit your current project, identify critical business paths, and set up a Page Object Model test suite with GitHub Actions without disrupting your development flow."
      }
    ]
  },
  "qa-test-automation": {
    id: "qa-automation",
    title: "QA Automation & Playwright/Selenium Testing Services",
    category: "E2E Testing & Quality Engineering",
    badge: "Playwright • Selenium • GitHub Actions • Zero Regression",
    heroDesc: "Resilient automated test suites and continuous verification pipelines designed with Playwright, Selenium, and GitHub Actions to ensure zero-defect deployments.",
    overview: "Eliminate manual testing bottlenecks with robust automated End-to-End (E2E), visual regression, and API testing suites. Every critical user journey (user registration, checkout funnels, database CRUD, state machines) is tested across Chromium, WebKit, and Firefox before code reaches production.",
    architecturePoints: [
      {
        icon: "🤖",
        title: "Playwright Cross-Browser Testing",
        desc: "Simulating authentic real-world user interactions across Chromium, Firefox, and Safari with automatic retries and network interception."
      },
      {
        icon: "👁️",
        title: "Pixel-Perfect Visual Regression",
        desc: "Automated snapshot comparisons catching unintended CSS drifts, broken layouts, and font rendering anomalies across viewport sizes."
      },
      {
        icon: "🚀",
        title: "GitHub Actions CI/CD Quality Gates",
        desc: "Automated test execution on every pull request, preventing regressions from ever merging into production branches."
      },
      {
        icon: "📊",
        title: "Detailed HTML Test Reports & Video Artifacts",
        desc: "Comprehensive execution artifacts with video recordings, console logs, and step-by-step trace viewer diagnostics on failures."
      }
    ],
    deliverables: [
      "Modular Playwright E2E test framework with TypeScript",
      "Page Object Model (POM) architecture for high maintainability",
      "GitHub Actions workflow pipeline with parallel execution",
      "Visual regression baselines and responsive checks",
      "API integration and database state fixture seeding",
      "Continuous test reporting dashboard setup"
    ],
    techStack: ["Playwright", "TypeScript", "GitHub Actions", "Docker", "Jest", "Selenium", "Allure Reports"],
    metrics: [
      { label: "Regression Prevention", value: "99.9%" },
      { label: "CI/CD Test Runtime", value: "< 2 Mins" },
      { label: "Browser Coverage", value: "100% (Chrome/Safari/FF)" }
    ],
    startingPrice: "$250+",
    timeline: "5–10 Days",
    faqs: [
      {
        q: "Can you integrate automated tests into an existing Next.js or React codebase?",
        a: "Yes. I can audit your current project, identify critical business paths, and set up a Page Object Model test suite with GitHub Actions without disrupting your development flow."
      }
    ]
  },
  "ai-automations-and-integration": {
    id: "ai-automations-and-integration",
    title: "AI Automation, Autonomous Agents & RAG Development",
    category: "AI Engineering & Process Automation",
    badge: "OpenAI • Anthropic • pgvector • RAG • n8n",
    heroDesc: "Supercharge your business with autonomous AI agents, Retrieval-Augmented Generation (RAG) over proprietary data, and automated multi-step LLM workflows.",
    overview: "Transform unstructured business documents, customer inquiries, and knowledge bases into intelligent, conversational AI tools. I integrate OpenAI, Anthropic Claude, and open-source LLM models using vector databases like pgvector and Pinecone with strict prompt guardrails and sub-second streaming answers.",
    architecturePoints: [
      {
        icon: "🧠",
        title: "Retrieval-Augmented Generation (RAG)",
        desc: "Connecting large language models to your custom business knowledge base with hybrid semantic and keyword search."
      },
      {
        icon: "📐",
        title: "Vector Embeddings & Semantic Indexing",
        desc: "High-dimensional vector storage with pgvector / Pinecone for lightning-fast similarity matching and knowledge retrieval."
      },
      {
        icon: "💬",
        title: "Streaming Conversational Interfaces",
        desc: "Real-time SSE token streaming UI with message history memory, markdown rendering, and exportable chat sessions."
      },
      {
        icon: "🔒",
        title: "Prompt Guardrails & Rate-Limiting",
        desc: "Defensive prompt engineering preventing prompt injections, hallucination controls, and token usage budget throttles."
      }
    ],
    deliverables: [
      "Custom AI RAG pipeline connected to your business documents",
      "Vector database implementation (pgvector / Pinecone)",
      "Next.js / Flutter streaming chat UI interface",
      "Prompt engineering templates with defensive guardrails",
      "Token usage analytics and cost monitoring hooks",
      "Automated document ingestion and chunking workers"
    ],
    techStack: ["OpenAI API", "Anthropic Claude", "pgvector", "LangChain", "Next.js", "TypeScript", "Python", "n8n"],
    metrics: [
      { label: "Token Streaming Latency", value: "< 250ms" },
      { label: "Vector Search Precision", value: "98%+" },
      { label: "Guardrail Compliance", value: "100%" }
    ],
    startingPrice: "$500+",
    timeline: "7–14 Days",
    faqs: [
      {
        q: "Can the AI model answer questions specifically from my company documents?",
        a: "Yes! Through Retrieval-Augmented Generation (RAG), the system searches your private documents using vector embeddings and instructs the LLM to answer strictly using that context, eliminating hallucinations."
      }
    ]
  },
  "ai-system-integration": {
    id: "ai-automations-and-integration",
    title: "AI Automation, Autonomous Agents & RAG Development",
    category: "AI Engineering & Process Automation",
    badge: "OpenAI • Anthropic • pgvector • RAG • n8n",
    heroDesc: "Supercharge your business with autonomous AI agents, Retrieval-Augmented Generation (RAG) over proprietary data, and automated multi-step LLM workflows.",
    overview: "Transform unstructured business documents, customer inquiries, and knowledge bases into intelligent, conversational AI tools.",
    architecturePoints: [
      { icon: "🧠", title: "RAG Systems", desc: "Custom knowledge bases." }
    ],
    deliverables: ["AI Agents", "RAG Pipeline"],
    techStack: ["OpenAI", "Anthropic", "Python", "Next.js"],
    metrics: [{ label: "Precision", value: "98%+" }],
    startingPrice: "$500+",
    timeline: "7–14 Days",
    faqs: [{ q: "How does it work?", a: "Via vector embeddings and RAG." }]
  },
  "custom-software-solutions": {
    id: "custom-software-solutions",
    title: "Enterprise POS & Custom Business Software",
    category: "Business Software",
    badge: "Point-of-Sale • Inventory Sync • Desktop Engines",
    heroDesc: "Mission-critical retail POS suites, multi-branch inventory tracking, thermal printing, and barcode engines built for high-uptime retail and pharmacy operations.",
    overview: "Built to withstand the high-velocity demands of multi-counter retail and medical businesses (such as UR Pharmacy POS). Engineered with offline-first SQLite databases, lightning-fast barcode lookup, batch expiration tracking, automated invoice generation, and real-time cloud data sync.",
    architecturePoints: [
      {
        icon: "🏪",
        title: "Multi-Branch Retail Inventory Sync",
        desc: "Centralized cloud inventory tracking with local cache resilience for continuous checkout even during internet outages."
      },
      {
        icon: "🖨️",
        title: "Thermal Receipt & Barcode Hardware",
        desc: "Seamless USB/Network thermal printer integration (ESC/POS), 2D barcode scanner inputs, and automated cash drawer triggers."
      },
      {
        icon: "📊",
        title: "Batch Tracking & Expiry Alerts",
        desc: "Granular stock batch management with automated profit margin calculations, supplier purchase orders, and expiry warnings."
      },
      {
        icon: "🔒",
        title: "Role-Based Cashier Security",
        desc: "Strict multi-user permission tiers, shift-closing cash reconciliations, audit logs, and fraud prevention controls."
      }
    ],
    deliverables: [
      "Custom Windows & macOS desktop POS / ERP application",
      "Local SQLite engine with cloud replication bridge",
      "Thermal receipt printing & label formatting module",
      "Barcode scanning and rapid checkout interface",
      "Supplier ledger, accounts receivable, and profit analytics",
      "User role permissions and cashier audit logs"
    ],
    techStack: ["Node.js / Electron", "React", "SQLite", "PostgreSQL", "ESC/POS", "TailwindCSS", "Prisma"],
    metrics: [
      { label: "Barcode Lookup Speed", value: "< 10ms" },
      { label: "Offline Availability", value: "100%" },
      { label: "Hardware Support", value: "Universal ESC/POS" }
    ],
    startingPrice: "$600+",
    timeline: "14–25 Days",
    faqs: [
      {
        q: "Can the POS system operate without an internet connection?",
        a: "Yes. The system uses an offline-first architecture with local SQLite storage. All sales and inventory adjustments are processed instantly offline and automatically synced to the central database once connection resumes."
      },
      {
        q: "Does it support custom receipt layouts and thermal printers?",
        a: "Yes, it supports all 58mm and 80mm ESC/POS thermal printers, custom store logos, tax breakdowns, and barcode printing on adhesive labels."
      }
    ]
  },
  "wordpress-and-headless-cms": {
    id: "wordpress-and-headless-cms",
    title: "WordPress & Headless CMS Architecture",
    category: "WordPress & Headless CMS",
    badge: "WordPress • Headless WPGraphQL • Next.js • WooCommerce",
    heroDesc: "High-speed custom WordPress development, decoupled Headless WordPress with Next.js frontend, WooCommerce speed optimization, and enterprise technical SEO architecture.",
    overview: "Empowering content creators with the familiar editorial ease of WordPress while serving visitors through ultra-fast Next.js React frontends. Features sub-second TTFB, bulletproof security against PHP vulnerabilities, custom Gutenberg blocks, and structured JSON-LD schema.",
    architecturePoints: [
      {
        icon: "🌐",
        title: "Decoupled Headless WPGraphQL + Next.js",
        desc: "Separating WordPress backend CMS from high-performance Next.js React frontend for maximum security and Core Web Vitals scores."
      },
      {
        icon: "🛒",
        title: "High-Converting WooCommerce Stores",
        desc: "Custom checkout flows, payment gateway integrations (Stripe, PayPal, regional gateways), and instant faceted filtering."
      },
      {
        icon: "⚡",
        title: "Speed Optimization & Core Web Vitals",
        desc: "Asset minification, database cleanup, Redis object caching, and Cloudflare CDN integration for sub-second load times."
      },
      {
        icon: "🛡️",
        title: "Technical SEO & 301 Migration Safety",
        desc: "Flawless URL preservation, structured JSON-LD schema, automated XML sitemaps, and canonical link integrity."
      }
    ],
    deliverables: [
      "Custom WordPress theme or Headless Next.js frontend",
      "Custom Gutenberg blocks tailored to brand design tokens",
      "WooCommerce setup with streamlined checkout",
      "Technical SEO audit and schema markup implementation",
      "Automated offsite backup and security hardening setup"
    ],
    techStack: ["WordPress", "PHP", "WPGraphQL", "Next.js", "WooCommerce", "MySQL", "Cloudflare", "TailwindCSS"],
    metrics: [
      { label: "Core Web Vitals Pass Rate", value: "100%" },
      { label: "Page Speed Score", value: "95+" },
      { label: "Security Hardening", value: "Enterprise" }
    ],
    startingPrice: "$200 – $500",
    timeline: "4–10 Days",
    faqs: [
      {
        q: "What are the benefits of Headless WordPress?",
        a: "Headless WordPress lets your editors use WordPress for blogging while Next.js handles the front-end display. This eliminates slow page loads, prevents WordPress security vulnerabilities, and yields perfect Core Web Vitals scores."
      }
    ]
  },
  "data-analytics-and-machine-learning": {
    id: "data-analytics-and-machine-learning",
    title: "Data Science & Predictive Machine Learning",
    category: "Data Intelligence",
    badge: "Python • Pandas • Scikit-Learn • Data Pipelines",
    heroDesc: "Actionable business intelligence, automated Python data pipelines, machine learning models, and real-time interactive analytical dashboards.",
    overview: "Extract valuable business insights from your operational data. I build automated ETL pipelines, predictive forecasting models, and interactive dashboard visualizations that empower data-driven decision making.",
    architecturePoints: [
      { icon: "📊", title: "Automated Data Pipelines", desc: "Clean ETL data extraction and transformation." },
      { icon: "📈", title: "Predictive Analytics", desc: "Machine learning forecasting and anomaly detection." }
    ],
    deliverables: [
      "Custom Python ETL scripts and data cleaning pipelines",
      "Predictive regression/classification models",
      "Interactive analytics dashboard integration"
    ],
    techStack: ["Python", "Pandas", "NumPy", "Scikit-Learn", "PostgreSQL", "Next.js"],
    metrics: [
      { label: "Pipeline Reliability", value: "99.9%" },
      { label: "Model Accuracy", value: "High Precision" }
    ],
    startingPrice: "$400+",
    timeline: "7–14 Days",
    faqs: [
      {
        q: "Can this connect to my existing database?",
        a: "Yes, data pipelines can securely connect to PostgreSQL, MySQL, CSVs, or REST API endpoints."
      }
    ]
  },
  "frontend-and-uiux-design": {
    id: "frontend-and-uiux-design",
    title: "Frontend Architecture & UI/UX Design Systems",
    category: "Frontend Architecture",
    badge: "React • TailwindCSS • Design Tokens • 60fps UI",
    heroDesc: "Crafting modern, accessible, and high-converting user interfaces with TailwindCSS, reusable component tokens, and smooth 60fps micro-animations.",
    overview: "Deliver exceptional visual clarity and user satisfaction. I create mobile-first responsive interfaces, interactive design prototypes, and accessible component design systems that delight users and drive conversions.",
    architecturePoints: [
      { icon: "🎨", title: "Design Token Architecture", desc: "Consistent spacing, typography, and color tokens." },
      { icon: "📱", title: "Mobile-First Responsiveness", desc: "Flawless rendering across phones, tablets, and desktops." }
    ],
    deliverables: [
      "TailwindCSS component design system",
      "Figma to Next.js pixel-perfect translation",
      "WCAG 2.1 accessible form and modal interactions"
    ],
    techStack: ["React", "Next.js", "TailwindCSS", "TypeScript", "CSS3"],
    metrics: [
      { label: "Responsive Accuracy", value: "100%" },
      { label: "Accessibility Score", value: "95+" }
    ],
    startingPrice: "$200+",
    timeline: "3–7 Days",
    faqs: [
      {
        q: "Do you design from scratch or implement Figma designs?",
        a: "Both. I can build fresh architectural designs from scratch or convert existing Figma/Adobe XD mockups into clean, production-ready React/Next.js code."
      }
    ]
  }
};

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { id } = await params;
  const service = serviceDatabase[id];

  if (!service) {
    const formattedTitle = id
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    return {
      title: `${formattedTitle} — Jet Slate`,
      description: `Production-grade ${formattedTitle} architectural solutions by Jet Slate.`,
      alternates: {
        canonical: `https://jetslate.com/services/${id}`,
      },
    };
  }

  return {
    title: `${service.title} — Technical Specifications & Architecture — Jet Slate`,
    description: service.heroDesc,
    alternates: {
      canonical: `https://jetslate.com/services/${id}`,
    },
    openGraph: {
      title: `${service.title} — Jet Slate`,
      description: service.heroDesc,
      url: `https://jetslate.com/services/${id}`,
      type: "website",
      images: [
        {
          url: "https://jetslate.com/assets/images/about/01.webp",
          width: 1200,
          height: 896,
          alt: service.title,
        }
      ],
    },
  };
}

export default async function ServiceDetailsPage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = serviceDatabase[id] || {
    id,
    title: id.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    category: "Software Engineering & Architecture",
    badge: "Production-Grade Engineering",
    heroDesc: `Specialized architectural solutions in ${id.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} by Senior Software Architect Jet Slate.`,
    overview: "Custom engineering tailored to your enterprise roadmap, utilizing modern technology stacks, clean code conventions, automated testing, and sub-second performance benchmarks.",
    architecturePoints: [
      {
        icon: "⚡",
        title: "High-Performance Architecture",
        desc: "Engineered for maximum throughput, low latency, and infinite scalability."
      },
      {
        icon: "🛡️",
        title: "Security & Clean Code Standards",
        desc: "Adhering to strict typing, OWASP guidelines, and modular design patterns."
      }
    ],
    deliverables: [
      "Complete source code repository with documentation",
      "Automated testing suite and CI/CD validation",
      "Cloud deployment setup and monitoring"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    metrics: [
      { label: "Performance SLA", value: "Sub-Second" },
      { label: "Type Safety", value: "100%" }
    ],
    startingPrice: "Custom Quote",
    timeline: "5–14 Days",
    faqs: [
      {
        q: "How do we get started on this project?",
        a: "Submit a project inquiry through the contact form with your technical requirements or wireframes. I will prepare an exact milestone breakdown, system blueprint, and fixed-cost proposal within 24 hours."
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://jetslate.com/services/${service.id}#service`,
        "name": service.title,
        "provider": {
          "@type": "Person",
          "@id": "https://jetslate.com/#person",
          "name": "Jet Slate"
        },
        "serviceType": service.title,
        "description": service.heroDesc,
        "areaServed": [
          "United States",
          "United Kingdom",
          "United Arab Emirates",
          "Saudi Arabia",
          "Oman",
          "Switzerland",
          "Australia",
          "Germany",
          "Pakistan"
        ],
        "url": `https://jetslate.com/services/${service.id}`
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://jetslate.com/services/${service.id}#breadcrumb`,
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": `https://jetslate.com/services/${service.id}`
          }
        ]
      }
    ]
  };

  return (
    <main style={{ background: "#111111", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      
      {/* Service Details Hero Banner in Blueprint Card Format */}
      <section className="wpr-banner-area breadcrumb mb--16">
        <div className="container">
          <div 
            className="section-inner bg-[#161616] border"
            style={{
              padding: "48px 48px",
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

            {/* Breadcrumb Trail */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#E8D6B3", marginBottom: "18px" }}>
              <Link href="/" style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none" }}>Home</Link>
              <span>/</span>
              <Link href="/services" style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none" }}>Solutions</Link>
              <span>/</span>
              <span style={{ color: "#F8F5EF", fontWeight: 600 }}>{service.title}</span>
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
                {service.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              style={{ 
                fontSize: "clamp(28px, 3.8vw, 44px)", 
                fontWeight: 800, 
                color: "#F8F5EF", 
                lineHeight: 1.18, 
                letterSpacing: "-0.025em", 
                margin: "0 0 16px 0",
                textTransform: "uppercase",
                maxWidth: "920px"
              }}
            >
              {service.title} &amp;{" "}
              <span 
                style={{ 
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  display: "inline-block"
                }}
              >
                Architecture.
              </span>
            </h1>

            {/* Narrative Subtitle */}
            <p 
              style={{ 
                fontSize: "16px", 
                color: "#ded9cf", 
                lineHeight: 1.65, 
                margin: "0 0 28px 0",
                maxWidth: "800px"
              }}
            >
              {service.heroDesc}
            </p>

            {/* Key Verified Metrics Bar */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "28px" }}>
              {service.metrics.map((m, idx) => (
                <div 
                  key={idx}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "10px",
                    background: "#161616",
                    border: "1px solid #2E2E2E",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px"
                  }}
                >
                  <span style={{ fontSize: "11px", color: "#E8D6B3", fontWeight: 700, textTransform: "uppercase" }}>{m.label}</span>
                  <span style={{ fontSize: "18px", fontWeight: 800, color: "#C9A84C" }}>{m.value}</span>
                </div>
              ))}
            </div>

            {/* Call to Action Row */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
              <Link 
                href="/contact" 
                className="wpr-btn btn-primary"
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
                  boxShadow: "0 4px 14px rgba(201, 168, 76, 0.25)"
                }}
              >
                <span>Request Custom Quote ({service.startingPrice})</span>
                <span>→</span>
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
                  border: "1px solid #3A3A3A"
                }}
              >
                <span>← All Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Technical Overview & Architecture Blueprint */}
      <section className="mb--16">
        <div className="container">
          <div 
            className="section-inner bg-[#161616] border"
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

            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "48px" }} className="service-content-grid">
              {/* Left Column: Architectural Pillars */}
              <div>
                <h2 style={{ fontSize: "26px", fontWeight: 800, color: "#F8F5EF", marginBottom: "16px", textTransform: "uppercase" }}>
                  Engineering Overview &amp; Execution Strategy
                </h2>
                <p style={{ fontSize: "15px", color: "#ded9cf", lineHeight: 1.7, marginBottom: "32px" }}>
                  {service.overview}
                </p>

                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#F8F5EF", marginBottom: "20px" }}>
                  Key Architectural Pillars
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "36px" }}>
                  {service.architecturePoints.map((item, idx) => (
                    <div 
                      key={idx}
                      style={{
                        padding: "20px",
                        borderRadius: "12px",
                        background: "#161616",
                        border: "1px solid #2E2E2E",
                        display: "flex",
                        gap: "16px",
                        alignItems: "flex-start"
                      }}
                    >
                      <span style={{ fontSize: "24px" }}>{item.icon}</span>
                      <div>
                        <h4 style={{ fontSize: "16px", fontWeight: 800, color: "#F8F5EF", margin: "0 0 6px 0" }}>
                          {item.title}
                        </h4>
                        <p style={{ fontSize: "13.5px", color: "#E8D6B3", lineHeight: 1.55, margin: 0 }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#F8F5EF", marginBottom: "14px" }}>
                  Verified Production Tech Stack
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "36px" }}>
                  {service.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      style={{
                        padding: "6px 14px",
                        borderRadius: "8px",
                        background: "#161616",
                        border: "1px solid #3A3A3A",
                        fontSize: "12.5px",
                        fontWeight: 700,
                        color: "#F8F5EF",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.4)"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* International Remote Delivery & Client Engagement Matrix */}
                <div style={{ padding: "28px", borderRadius: "12px", background: "#161616", border: "1px solid #2E2E2E", marginBottom: "32px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#F8F5EF", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>🌍</span> International Remote Client Delivery
                  </h3>
                  <p style={{ fontSize: "13.5px", color: "#ded9cf", lineHeight: 1.6, marginBottom: "16px" }}>
                    Delivering production software architecture to high-growth startups and established businesses across Tier 1 &amp; Tier 2 global markets:
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", fontSize: "13px" }}>
                    <div style={{ padding: "10px 14px", background: "#161616", borderRadius: "8px", border: "1px solid #2E2E2E" }}>
                      <strong style={{ color: "#F8F5EF" }}>🇺🇸 United States &amp; Canada:</strong>
                      <div style={{ color: "#E8D6B3", fontSize: "12px", marginTop: "2px" }}>EST/PST timezone overlap, async Loom standups, milestone invoicing in USD.</div>
                    </div>
                    <div style={{ padding: "10px 14px", background: "#161616", borderRadius: "8px", border: "1px solid #2E2E2E" }}>
                      <strong style={{ color: "#F8F5EF" }}>🇬🇧 UK &amp; European Union:</strong>
                      <div style={{ color: "#E8D6B3", fontSize: "12px", marginTop: "2px" }}>GMT / CET daily sync, GDPR data privacy compliance, strict delivery SLAs.</div>
                    </div>
                    <div style={{ padding: "10px 14px", background: "#161616", borderRadius: "8px", border: "1px solid #2E2E2E" }}>
                      <strong style={{ color: "#F8F5EF" }}>🇦🇪 🇸🇦 🇴🇲 UAE, KSA &amp; Oman:</strong>
                      <div style={{ color: "#E8D6B3", fontSize: "12px", marginTop: "2px" }}>GST/AST timezone parity, high-scale e-commerce, Arabic/English multilingual support.</div>
                    </div>
                    <div style={{ padding: "10px 14px", background: "#161616", borderRadius: "8px", border: "1px solid #2E2E2E" }}>
                      <strong style={{ color: "#F8F5EF" }}>🇨🇭 Switzerland &amp; 🇦🇺 Australia:</strong>
                      <div style={{ color: "#E8D6B3", fontSize: "12px", marginTop: "2px" }}>Precision engineering standards, bank-grade data security, and AEST sprint handoffs.</div>
                    </div>
                  </div>
                </div>

                {/* Related Topical Authority Clusters */}
                <div style={{ padding: "28px", borderRadius: "12px", background: "#161616", border: "1px solid #3A3A3A" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", flexWrap: "wrap", gap: "8px" }}>
                    <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#F8F5EF", margin: 0 }}>
                      📚 Related Engineering Topics
                    </h3>
                    <Link href="/topics" style={{ fontSize: "12px", fontWeight: 700, color: "#C9A84C", textDecoration: "none" }}>
                      View All 40 Topics ➔
                    </Link>
                  </div>
                  <p style={{ fontSize: "13.5px", color: "#E8D6B3", lineHeight: 1.6, marginBottom: "16px" }}>
                    Explore deep-dive architectural specifications, technical frameworks, and upcoming editorial guides related to this engineering domain:
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    {topicalClusters
                      .filter((c) => {
                        if (service.id === "qa-automation" || service.id === "qa-test-automation") {
                          return c.pillarId === "P01" || c.pillarId === "P02";
                        }
                        if (service.id === "full-stack-web-development") {
                          return c.pillarId === "P03";
                        }
                        if (service.id === "mobile-app-development") {
                          return c.pillarId === "P04";
                        }
                        if (service.id === "ai-automations-and-integration" || service.id === "data-analytics-and-machine-learning") {
                          return c.pillarId === "P05";
                        }
                        if (service.id === "custom-software-solutions") {
                          return c.pillarId === "P06";
                        }
                        if (service.id === "wordpress-and-headless-cms") {
                          return c.pillarId === "P07";
                        }
                        if (service.id === "frontend-and-uiux-design") {
                          return c.slug.includes("visual") || c.slug.includes("nextjs-performance") || c.slug.includes("headless-cms-frontend") || c.slug.includes("seo");
                        }
                        return c.parentServiceSlug === `/services/${service.id}` || c.pillarId === "P08";
                      })
                      .slice(0, 6)
                      .map((topic) => (
                        <Link
                          key={topic.slug}
                          href={`/topics/${topic.slug}`}
                          style={{
                            padding: "12px 14px",
                            background: "#161616",
                            border: "1px solid #2E2E2E",
                            borderRadius: "6px",
                            textDecoration: "none",
                            display: "block",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                            <span style={{ fontSize: "11px", fontWeight: 700, color: "#C9A84C" }}>
                              Technical Guide
                            </span>
                            <span style={{ fontSize: "11px", color: "#E8D6B3" }}>
                              Architecture
                            </span>
                          </div>
                          <span style={{ fontSize: "13px", fontWeight: 700, color: "#F8F5EF", display: "block", lineHeight: 1.3 }}>
                            {topic.clusterName} ➔
                          </span>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Deliverables Box & Package Summary */}
              <div>
                <div 
                  style={{
                    padding: "36px 30px",
                    borderRadius: "16px",
                    background: "linear-gradient(180deg, #161616 0%, #161616 100%)",
                    border: "1px solid #2E2E2E",
                    boxShadow: "0 10px 30px rgba(201, 168, 76, 0.06)",
                    position: "sticky",
                    top: "100px"
                  }}
                >
                  <div 
                    style={{ 
                      fontSize: "12px", 
                      fontWeight: 800, 
                      color: "#C9A84C", 
                      letterSpacing: "0.08em", 
                      textTransform: "uppercase", 
                      marginBottom: "8px" 
                    }}
                  >
                    PACKAGE SPECIFICATIONS
                  </div>

                  <div style={{ fontSize: "28px", fontWeight: 800, color: "#F8F5EF", marginBottom: "6px" }}>
                    {service.startingPrice}
                  </div>
                  <div style={{ fontSize: "13px", color: "#E8D6B3", marginBottom: "20px" }}>
                    Estimated Timeline: <strong>{service.timeline}</strong>
                  </div>

                  <div style={{ fontSize: "14px", fontWeight: 800, color: "#F8F5EF", marginBottom: "12px" }}>
                    Standard Package Inclusions:
                  </div>

                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {service.deliverables.map((item, idx) => (
                      <li 
                        key={idx} 
                        style={{ 
                          display: "flex", 
                          alignItems: "flex-start", 
                          gap: "10px", 
                          fontSize: "13.5px", 
                          lineHeight: "1.4", 
                          color: "#ded9cf", 
                          margin: 0, 
                          padding: "2px 0" 
                        }}
                      >
                        <span style={{ color: "#C9A84C", fontWeight: 800, lineHeight: "1.4", flexShrink: 0, fontSize: "14px" }}>✓</span>
                        <span style={{ margin: 0, padding: 0 }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/contact"
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "center",
                      padding: "14px 20px",
                      borderRadius: "9999px",
                      background: "#C9A84C",
                      color: "#161616",
                      fontSize: "14px",
                      fontWeight: 800,
                      textDecoration: "none",
                      boxShadow: "0 8px 20px rgba(201, 168, 76, 0.25)"
                    }}
                  >
                    Start This Project →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BrandMarquee />
      <WorkingProcess />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}

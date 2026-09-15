import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// prisma decoupled
import {
  Globe as FaGlobe,
  Check as FaCheck,
  Calendar as FaCalendarDays,
  ArrowRight as FaArrowRight,
  Code as FaCode,
  ArrowLeft as FaArrowLeft,
  GraduationCap as FaGraduationCap,
} from "lucide-react";

const FaGithub = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
const FaLinkedinIn = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const FaXTwitter = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const FaFacebookF = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export const revalidate = 3600;

const POSTS_PER_PAGE = 9;

export const metadata: Metadata = {
  title: {
    absolute: "Author Profile & Archive | Jet Slate",
  },
  description:
    "Author profile and article archive for Jet Slate: Senior Software Architect, QA Automation Lead, and Flutter mobile engineering consultant.",
  alternates: {
    canonical: "https://jetslate.com/authors/jetslate-team",
  },
  openGraph: {
    title: "Author Profile & Archive | Jet Slate",
    description:
      "Author profile and article archive for Jet Slate: Senior Software Architect, QA Automation Lead, and Flutter mobile engineering consultant.",
    url: "https://jetslate.com/authors/jetslate-team",
    type: "profile",
    images: [
      {
        url: "https://jetslate.com/assets/images/about/team-avatar.webp",
        width: 800,
        height: 800,
        alt: "Jet Slate — Author & Senior Software Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jet Slate — Author Archives & Technical Publications",
    description:
      "Explore 40+ technical deep-dives on Next.js 15, Flutter, and QA automation by Jet Slate.",
    images: ["https://jetslate.com/assets/images/about/team-avatar.webp"],
  },
};

function formatDate(date: Date | string | null): string {
  if (!date) return "Recently";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function cleanText(str?: string | null): string {
  if (!str) return "";
  return str
    .replace(/&#8230;/g, "...")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "-")
    .replace(/&#8212;/g, "—")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#038;/g, "&")
    .trim();
}

export default async function AuthorsArchivePage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const resolvedParams = searchParams ? await searchParams : {};
  const currentPage = Math.max(1, parseInt(resolvedParams.page || "1", 10));

  let author: any = null;
  let posts: any[] = [];
  let totalPosts = 0;

  try {
    author = {
      name: "Jet Slate Architecture",
      role: "Lead Systems Architect & QA Automation Lead",
      avatar: "/assets/images/about/team-avatar.webp",
      bio: "Senior Full-Stack Software Architect and QA Automation Specialist with 10+ years of engineering experience delivering enterprise Next.js 15 platforms, sub-second web applications, 60fps Flutter mobile solutions, and resilient CI/CD automated test suites."
    };
    totalPosts = 0;
    posts = [];
  } catch (err) {
    console.error("Error fetching author data:", err);
  }

  const totalPages = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE));

  // Fallbacks if database author record needs defaults
  const authorName = author?.name || "Jet Slate";
  const authorRole = author?.role || "Senior Full-Stack Architect & QA Automation Lead";
  const authorAvatar = author?.avatar || "/assets/images/about/team-avatar.webp";
  const authorBio =
    author?.bio ||
    "Senior Full-Stack Software Architect and QA Automation Specialist with 10+ years of engineering experience delivering enterprise Next.js 15 platforms, sub-second web applications, 60fps Flutter mobile solutions, and resilient CI/CD automated test suites.";

  const socials = [
    {
      name: "Facebook",
      handle: "jetslate",
      url: "https://facebook.com/jetslate",
      icon: FaFacebookF,
      color: "#1877F2",
    },
    {
      name: "LinkedIn",
      handle: "in/jetslate",
      url: "https://linkedin.com/in/jetslate",
      icon: FaLinkedinIn,
      color: "#0A66C2",
    },
    {
      name: "GitHub",
      handle: "jetslate",
      url: "https://github.com/jetslate",
      icon: FaGithub,
      color: "#F8F5EF",
    },
    {
      name: "Twitter / X",
      handle: "@jetslate",
      url: "https://twitter.com/jetslate",
      icon: FaXTwitter,
      color: "#000000",
    },
    {
      name: "TeacherOn",
      handle: "Tutor Profile 824p",
      url: "https://www.teacheron.com/tutor-profile/824p",
      icon: FaGraduationCap,
      color: "#16A34A",
    },
    {
      name: "Official Site",
      handle: "jetslate.com",
      url: "https://jetslate.com",
      icon: FaGlobe,
      color: "#C9A84C",
    },
  ];

  const competencies = [
    "Next.js 15 App Router",
    "React 19 & TypeScript",
    "Flutter iOS & Android (60fps)",
    "Playwright QA Automation",
    "Selenium End-to-End Testing",
    "PostgreSQL & Prisma ORM",
    "API & Microservices Architecture",
    "CI/CD Pipeline Automation",
    "Core Web Vitals Optimization",
    "Technical SEO & AEO / GEO Strategy",
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://jetslate.com/authors/jetslate-team#webpage",
        "url": "https://jetslate.com/authors/jetslate-team",
        "name": "Jet Slate | Senior Full-Stack Architect",
        "isPartOf": {
          "@id": "https://jetslate.com/#website",
        },
        "primaryImageOfPage": {
          "@id": "https://jetslate.com/authors/jetslate-team#primaryimage",
        },
        "image": {
          "@id": "https://jetslate.com/authors/jetslate-team#primaryimage",
        },
        "description":
          "Official author profile and article archives for Jet Slate: Senior Software Architect, QA Automation Specialist, and Flutter Developer. Read 40+ engineering deep dives and architecture guides.",
        "breadcrumb": {
          "@id": "https://jetslate.com/authors/jetslate-team#breadcrumb",
        },
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": ["https://jetslate.com/authors/jetslate-team"],
          },
        ],
        "mainEntity": {
          "@id": "https://jetslate.com/authors/jetslate-team#person",
        },
      },
      {
        "@type": "ImageObject",
        "inLanguage": "en-US",
        "@id": "https://jetslate.com/authors/jetslate-team#primaryimage",
        "url": "https://jetslate.com/assets/images/about/team-avatar.webp",
        "contentUrl": "https://jetslate.com/assets/images/about/team-avatar.webp",
        "caption": "Jet Slate",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://jetslate.com/authors/jetslate-team#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://jetslate.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Archives for Jet Slate",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://jetslate.com/#website",
        "url": "https://jetslate.com/",
        "name": "Jet Slate — Software Engineering Consulting",
        "publisher": {
          "@id": "https://jetslate.com/#organization",
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://jetslate.com/?s={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
        "inLanguage": "en-US",
      },
      {
        "@type": "Organization",
        "@id": "https://jetslate.com/#organization",
        "name": "Jet Slate — Software Engineering Consulting",
        "url": "https://jetslate.com/",
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": "https://jetslate.com/#/schema/logo/image/",
          "url": "https://jetslate.com/assets/images/favicon.png",
          "contentUrl": "https://jetslate.com/assets/images/favicon.png",
          "caption": "Jet Slate — Software Engineering Consulting",
        },
        "image": {
          "@id": "https://jetslate.com/#/schema/logo/image/",
        },
      },
      {
        "@type": "Person",
        "@id": "https://jetslate.com/authors/jetslate-team#person",
        "name": "Jet Slate",
        "jobTitle": "Senior Full-Stack Architect",
        "email": "contact@jetslate.com",
        "description":
          "Official author profile and article archives for Jet Slate: Senior Software Architect, QA Automation Specialist, and Flutter Developer. Read 40+ engineering deep dives and architecture guides.",
        "affiliation": {
          "@type": "Organization",
          "name": "Jet Slate — Software Engineering Consulting",
        },
        "worksFor": {
          "@type": "Organization",
          "name": "Jet Slate — Software Engineering Consulting",
        },
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Senior Full-Stack Architect",
          "skills": [
            "Software Architecture",
            "Next.js App Router",
            "React",
            "TypeScript",
            "Flutter",
          ],
        },
        "knowsAbout": [
          "Next.js 15 App Router",
          "React 19 & TypeScript",
          "Flutter iOS & Android (60fps)",
          "Playwright QA Automation",
          "Selenium End-to-End Testing",
        ],
        "knowsLanguage": ["English"],
        "workLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Street 3, Peoples Colony",
            "addressLocality": "Vehari",
            "addressRegion": "Punjab",
            "postalCode": "61100",
            "addressCountry": {
              "@type": "Country",
              "name": "PK",
            },
          },
        },
        "sameAs": [
          "https://facebook.com/jetslate",
          "https://github.com/jetslate",
          "https://linkedin.com/in/jetslate",
          "https://twitter.com/jetslate",
          "https://www.teacheron.com/tutor-profile/824p",
        ],
        "image": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": "https://jetslate.com/authors/jetslate-team#/schema/person/image/",
          "url": "https://jetslate.com/assets/images/about/team-avatar.webp",
          "contentUrl": "https://jetslate.com/assets/images/about/team-avatar.webp",
          "caption": "Jet Slate",
        },
        "mainEntityOfPage": {
          "@id": "https://jetslate.com/authors/jetslate-team",
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main style={{ minHeight: "100vh", paddingBottom: "80px" }}>
        {/* Breadcrumb — Blueprint Section */}
        <section className="mb--16">
          <div className="container">
            <div
              className="section-inner bg-[#161616] border"
              style={{
                position: "relative",
                borderRadius: 0,
                background: "#161616",
                padding: "16px 36px",
              }}
            >
              <span className="square-shape top-left"></span>
              <span className="square-shape top-right"></span>
              <span className="square-shape bottom-left"></span>
              <span className="square-shape bottom-right"></span>

              <nav
                aria-label="Breadcrumb"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#E8D6B3",
                }}
              >
                <Link href="/" style={{ color: "#E8D6B3", textDecoration: "none" }}>
                  Home
                </Link>
                <span>/</span>
                <span style={{ color: "#F8F5EF", fontWeight: 700 }}>Authors</span>
                <span>/</span>
                <span style={{ color: "#C9A84C", fontWeight: 800 }}>Jet Slate</span>
              </nav>
            </div>
          </div>
        </section>

        {/* Author Profile Hero — Blueprint Section */}
        <section className="mb--16">
          <div className="container">
            <div
              className="section-inner bg-[#161616] border"
              style={{
                position: "relative",
                borderRadius: 0,
                background: "#161616",
                padding: "44px 48px",
              }}
            >
              <span className="square-shape top-left"></span>
              <span className="square-shape top-right"></span>
              <span className="square-shape bottom-left"></span>
              <span className="square-shape bottom-right"></span>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "36px",
                  alignItems: "start",
                }}
                className="author-profile-grid"
              >
                {/* Avatar Column */}
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: "160px",
                      height: "160px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "4px solid #161616",
                      boxShadow: "0 12px 32px rgba(201, 168, 76, 0.2)",
                      margin: "0 auto 16px auto",
                      position: "relative",
                      background: "#1e1e1e",
                    }}
                  >
                    <Image
                      src={authorAvatar}
                      alt={authorName}
                      width={160}
                      height={160}
                      priority
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 14px",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(201, 168, 76, 0.08)",
                      border: "1px solid rgba(201, 168, 76, 0.2)",
                      color: "#C9A84C",
                      fontSize: "12px",
                      fontWeight: 800,
                    }}
                  >
                    <FaCheck style={{ fontSize: "11px" }} /> Verified Author
                  </div>
                </div>

                {/* Profile Information */}
                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                    <span
                      style={{
                        padding: "4px 12px",
                        borderRadius: "9999px",
                        backgroundColor: "#F8F5EF",
                        color: "#161616",
                        fontSize: "11px",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      E-E-A-T Certified Expert
                    </span>
                    <span style={{ fontSize: "13px", color: "#E8D6B3", fontWeight: 600 }}>
                      📍 Vehari, Pakistan • Global Remote Architecture
                    </span>
                  </div>

                  <h1
                    style={{
                      fontSize: "clamp(28px, 4vw, 38px)",
                      fontWeight: 900,
                      color: "#F8F5EF",
                      lineHeight: 1.15,
                      marginBottom: "10px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {authorName}
                  </h1>

                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "#C9A84C",
                      marginBottom: "16px",
                    }}
                  >
                    {authorRole}
                  </p>

                  <p
                    style={{
                      fontSize: "15.5px",
                      lineHeight: 1.75,
                      color: "#ded9cf",
                      marginBottom: "24px",
                      maxWidth: "880px",
                    }}
                  >
                    {authorBio}
                  </p>

                  {/* Stats Ribbon */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                      gap: "16px",
                      backgroundColor: "#161616",
                      borderRadius: "0",
                      padding: "16px 20px",
                      border: "1px solid #2E2E2E",
                      marginBottom: "28px",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "24px", fontWeight: 900, color: "#C9A84C", lineHeight: 1 }}>
                        {totalPosts}+
                      </div>
                      <div style={{ fontSize: "12px", fontWeight: 700, color: "#E8D6B3", marginTop: "4px" }}>
                        Technical Guides
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "24px", fontWeight: 900, color: "#F8F5EF", lineHeight: 1 }}>
                        10+
                      </div>
                      <div style={{ fontSize: "12px", fontWeight: 700, color: "#E8D6B3", marginTop: "4px" }}>
                        Years Experience
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "24px", fontWeight: 900, color: "#16A34A", lineHeight: 1 }}>
                        100%
                      </div>
                      <div style={{ fontSize: "12px", fontWeight: 700, color: "#E8D6B3", marginTop: "4px" }}>
                        Code Ownership
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "24px", fontWeight: 900, color: "#F8F5EF", lineHeight: 1 }}>
                        5.0 ★
                      </div>
                      <div style={{ fontSize: "12px", fontWeight: 700, color: "#E8D6B3", marginTop: "4px" }}>
                        Client Rating
                      </div>
                    </div>
                  </div>

                  {/* Social Profiles */}
                  <div>
                    <h3
                      style={{
                        fontSize: "13px",
                        fontWeight: 800,
                        color: "#E8D6B3",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "12px",
                      }}
                    >
                      Connect & Verified Profiles
                    </h3>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {socials.map((soc) => {
                        const IconComponent = soc.icon;
                        return (
                          <a
                            key={soc.name}
                            href={soc.url}
                            target="_blank"
                            rel="me noopener noreferrer"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "8px",
                              padding: "9px 16px",
                              borderRadius: "0",
                              backgroundColor: "#161616",
                              border: "1px solid #2E2E2E",
                              color: soc.color,
                              fontSize: "13px",
                              fontWeight: 700,
                              textDecoration: "none",
                              transition: "all 0.2s ease",
                            }}
                          >
                            <IconComponent style={{ fontSize: "15px" }} />
                            <span>{soc.name}</span>
                            <span style={{ fontSize: "11px", opacity: 0.7, fontWeight: 500 }}>
                              ({soc.handle})
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Competencies — Blueprint Section */}
        <section className="mb--16">
          <div className="container">
            <div
              className="section-inner bg-[#161616] border"
              style={{
                position: "relative",
                borderRadius: 0,
                background: "#161616",
                padding: "28px 36px",
              }}
            >
              <span className="square-shape top-left"></span>
              <span className="square-shape top-right"></span>
              <span className="square-shape bottom-left"></span>
              <span className="square-shape bottom-right"></span>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <FaCode style={{ color: "#C9A84C", fontSize: "18px" }} />
                <h2 style={{ fontSize: "18px", fontWeight: 800, color: "#F8F5EF", margin: 0 }}>
                  Verified Core Engineering Competencies
                </h2>
              </div>
              <p style={{ fontSize: "14px", color: "#E8D6B3", marginBottom: "16px", lineHeight: 1.6 }}>
                Every article published in this archive is authored directly by Jet Slate and backed by hands-on production code, benchmarks, and enterprise system deployments:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {competencies.map((comp) => (
                  <span
                    key={comp}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "6px 14px",
                      borderRadius: "0",
                      backgroundColor: "#161616",
                      border: "1px solid #3A3A3A",
                      color: "#F8F5EF",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    <span style={{ width: "6px", height: "6px", borderRadius: "0", backgroundColor: "#C9A84C" }} />
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Author Article Archives Grid — Blueprint Section */}
        <section className="mb--16">
          <div className="container">
            <div
              className="section-inner bg-[#161616] border"
              style={{
                position: "relative",
                borderRadius: 0,
                background: "#161616",
                padding: "44px 48px",
              }}
            >
              <span className="square-shape top-left"></span>
              <span className="square-shape top-right"></span>
              <span className="square-shape bottom-left"></span>
              <span className="square-shape bottom-right"></span>

              {/* Section Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "16px",
                  marginBottom: "28px",
                  borderBottom: "2px solid #2E2E2E",
                  paddingBottom: "16px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 800,
                      color: "#C9A84C",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "4px",
                    }}
                  >
                    Published Technical Literature
                  </div>
                  <h2
                    style={{
                      fontSize: "26px",
                      fontWeight: 900,
                      color: "#F8F5EF",
                      margin: 0,
                    }}
                  >
                    Author Archives ({totalPosts} Publications)
                    {currentPage > 1 && (
                      <span style={{ fontSize: "16px", fontWeight: 600, color: "#E8D6B3", marginLeft: "12px" }}>
                        — Page {currentPage} of {totalPages}
                      </span>
                    )}
                  </h2>
                </div>

                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    borderRadius: "9999px",
                    backgroundColor: "#C9A84C",
                    color: "#161616",
                    fontWeight: 800,
                    fontSize: "13.5px",
                    textDecoration: "none",
                    boxShadow: "0 6px 18px rgba(201, 168, 76, 0.3)",
                  }}
                >
                  <span>Consult With Jet Slate Architects</span>
                  <FaArrowRight style={{ fontSize: "12px" }} />
                </Link>
              </div>

              {/* Articles Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
                  gap: "24px",
                }}
              >
                {posts.map((post) => {
                  const category = post.categories?.[0]?.name || "Architecture";
                  const cleanTitle = cleanText(post.title);
                  const cleanExcerpt = cleanText(post.excerpt) || "Read this in-depth engineering blueprint covering system architecture, testing standards, and production implementations.";
                  const postImage = post.featuredImage || "/assets/images/about/01.webp";

                  return (
                    <article
                      key={post.id}
                      style={{
                        backgroundColor: "#161616",
                        border: "1px solid #2E2E2E",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      }}
                    >
                      {/* Card Image */}
                      <Link
                        href={`/${post.slug}`}
                        style={{
                          display: "block",
                          position: "relative",
                          aspectRatio: "16/9",
                          backgroundColor: "#1e1e1e",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={postImage}
                          alt={cleanTitle}
                          width={600}
                          height={338}
                          loading="lazy"
                          decoding="async"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                        <span
                          style={{
                            position: "absolute",
                            top: "12px",
                            left: "12px",
                            backgroundColor: "#C9A84C",
                            color: "#161616",
                            fontSize: "11px",
                            fontWeight: 800,
                            padding: "4px 10px",
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                          }}
                        >
                          {category}
                        </span>
                      </Link>

                      {/* Card Content */}
                      <div
                        style={{
                          padding: "24px",
                          display: "flex",
                          flexDirection: "column",
                          flex: 1,
                        }}
                      >
                        {/* Date & Author Row */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "12px",
                            color: "#E8D6B3",
                            fontWeight: 600,
                            marginBottom: "10px",
                          }}
                        >
                          <FaCalendarDays style={{ fontSize: "12px", color: "#C9A84C" }} />
                          <span>{formatDate(post.publishDate)}</span>
                          <span>•</span>
                          <span>By Jet Slate</span>
                        </div>

                        {/* Title */}
                        <h3
                          style={{
                            fontSize: "18px",
                            fontWeight: 800,
                            color: "#F8F5EF",
                            lineHeight: 1.35,
                            marginBottom: "10px",
                          }}
                        >
                          <Link
                            href={`/${post.slug}`}
                            style={{
                              color: "#F8F5EF",
                              textDecoration: "none",
                            }}
                          >
                            {cleanTitle}
                          </Link>
                        </h3>

                        {/* Excerpt */}
                        <p
                          style={{
                            fontSize: "13.5px",
                            lineHeight: 1.65,
                            color: "#ded9cf",
                            marginBottom: "18px",
                            flex: 1,
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {cleanExcerpt}
                        </p>

                        {/* Read Blueprint Link */}
                        <div
                          style={{
                            borderTop: "1px solid #1e1e1e",
                            paddingTop: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Link
                            href={`/${post.slug}`}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "6px",
                              fontSize: "13px",
                              fontWeight: 800,
                              color: "#C9A84C",
                              textDecoration: "none",
                            }}
                          >
                            <span>Read Full Blueprint</span>
                            <FaArrowRight style={{ fontSize: "11px" }} />
                          </Link>
                          <span
                            style={{
                              fontSize: "11.5px",
                              fontWeight: 700,
                              color: "#c4bba8",
                            }}
                          >
                            5 min read
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "40px", paddingTop: "24px", borderTop: "2px solid #2E2E2E" }}>
                  {currentPage > 1 && (
                    <Link
                      href={`/authors/jetslate-team?page=${currentPage - 1}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 16px",
                        background: "#161616",
                        border: "1px solid #3A3A3A",
                        color: "#F8F5EF",
                        fontSize: "13px",
                        fontWeight: 700,
                        textDecoration: "none",
                      }}
                    >
                      <FaArrowLeft style={{ fontSize: "11px" }} /> Previous
                    </Link>
                  )}

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    const isCurr = pageNum === currentPage;
                    return (
                      <Link
                        key={pageNum}
                        href={`/authors/jetslate-team?page=${pageNum}`}
                        style={{
                          width: "36px",
                          height: "36px",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: isCurr ? "#C9A84C" : "#161616",
                          color: isCurr ? "#161616" : "#ded9cf",
                          border: isCurr ? "1px solid #C9A84C" : "1px solid #3A3A3A",
                          fontSize: "13px",
                          fontWeight: 700,
                          textDecoration: "none",
                        }}
                      >
                        {pageNum}
                      </Link>
                    );
                  })}

                  {currentPage < totalPages && (
                    <Link
                      href={`/authors/jetslate-team?page=${currentPage + 1}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "8px 16px",
                        background: "#161616",
                        border: "1px solid #3A3A3A",
                        color: "#F8F5EF",
                        fontSize: "13px",
                        fontWeight: 700,
                        textDecoration: "none",
                      }}
                    >
                      Next <FaArrowRight style={{ fontSize: "11px" }} />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

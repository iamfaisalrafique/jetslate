import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
// prisma decoupled

export const metadata: Metadata = {
  title: {
    absolute: "Engineering Blog & Insights | Jet Slate",
  },
  description: "Technical deep-dives, architectural blueprints, and real-world guides on Next.js, Flutter, QA automation, and AI workflows by Jet Slate.",
  alternates: {
    canonical: "https://jetslate.com/blog",
  },
  openGraph: {
    title: "Engineering Blog & Insights | Jet Slate",
    description: "Technical deep-dives, architectural blueprints, and real-world guides on Next.js, Flutter, QA automation, and AI workflows by Jet Slate.",
    url: "https://jetslate.com/blog",
    siteName: "Jet Slate — Software Architect",
    type: "website",
    images: ["https://jetslate.com/assets/images/about/01.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Blog & Insights | Jet Slate",
    description: "Technical deep-dives, architectural blueprints, and real-world guides on Next.js, Flutter, QA automation, and AI workflows by Jet Slate.",
    images: ["https://jetslate.com/assets/images/about/01.webp"]
  }
};

export const revalidate = 3600;

const POSTS_PER_PAGE = 6;

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

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string; q?: string }>;
}) {
  const resolvedParams = await searchParams;
  const currentPage = Math.max(1, parseInt(resolvedParams.page || "1", 10));
  const categoryFilter = resolvedParams.category;
  const searchQuery = resolvedParams.q;

  let posts: any[] = [];
  let totalPosts = 0;
  let allCategories: any[] = [];
  let recentPosts: any[] = [];

  try {
    const whereClause: any = {};
    if (categoryFilter) {
      whereClause.categories = {
        some: { slug: categoryFilter }
      };
    }
    if (searchQuery) {
      whereClause.OR = [
        { title: { contains: searchQuery, mode: "insensitive" } },
        { excerpt: { contains: searchQuery, mode: "insensitive" } },
        { content: { contains: searchQuery, mode: "insensitive" } }
      ];
    }

    totalPosts = 0;
    posts = [];
    allCategories = [
      { name: "Web Architecture", slug: "web-architecture" },
      { name: "Cloud & DevOps", slug: "cloud-devops" },
      { name: "Mobile Engineering", slug: "mobile-engineering" },
      { name: "QA Automation", slug: "qa-automation" }
    ];
    recentPosts = [];

  } catch (err) {
    console.error("Database error fetching blog data:", err);
  }

  const totalPages = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE));

  // RankMath / Schema.org Graph JSON-LD Schema
  const blogGraphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://jetslate.com/#person",
        "name": "Jet Slate",
        "url": "https://jetslate.com",
        "jobTitle": "Senior Software Architect & QA Automation Specialist",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Vehari",
          "addressCountry": "Pakistan"
        },
        "image": {
          "@type": "ImageObject",
          "@id": "https://jetslate.com/#logo",
          "url": "https://jetslate.com/assets/images/about/01.webp",
          "caption": "Jet Slate"
        },
        "sameAs": [
          "https://github.com/jetslate",
          "https://linkedin.com/in/jetslate"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://jetslate.com/#website",
        "url": "https://jetslate.com",
        "name": "Jet Slate",
        "publisher": {
          "@id": "https://jetslate.com/#person"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": ["CollectionPage", "Blog"],
        "@id": "https://jetslate.com/blog/#webpage",
        "url": "https://jetslate.com/blog",
        "name": "Blog — Jet Slate",
        "description": "Technical insights, architectural blueprints, Next.js, and automated QA testing by Jet Slate.",
        "isPartOf": {
          "@id": "https://jetslate.com/#website"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
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
              "name": "Blog",
              "item": "https://jetslate.com/blog"
            }
          ]
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <main style={{ background: "#111111", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogGraphSchema) }}
      />
      <Header />

      {/* Banner / Header Area */}
      <section className="wpr-banner-area breadcrumb mb--16">
        <div className="container">
          <div 
            className="section-inner bg-[#161616] border"
            style={{
              padding: "54px 48px",
              position: "relative",
              borderRadius: 0,
              background: "#161616",
              textAlign: "center"
            }}
          >
            {/* Blueprint Corner Dots */}
            <span className="square-shape top-left"></span>
            <span className="square-shape top-right"></span>
            <span className="square-shape bottom-left"></span>
            <span className="square-shape bottom-right"></span>

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
                KNOWLEDGE HUB &amp; ENGINEERING INSIGHTS
              </span>
            </div>

            <h1 
              style={{ 
                fontSize: "clamp(32px, 3.8vw, 48px)", 
                fontWeight: 800, 
                color: "#F8F5EF", 
                lineHeight: 1.15, 
                letterSpacing: "-0.03em", 
                margin: "0 0 16px 0",
                textTransform: "uppercase"
              }}
            >
              Architectural Blueprints &amp;{" "}
              <span 
                style={{ 
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  display: "inline-block"
                }}
              >
                Deep-Dives.
              </span>
            </h1>

            <p style={{ fontSize: "15px", color: "#E8D6B3", lineHeight: 1.6, maxWidth: "680px", margin: "0 auto 24px auto" }}>
              Practical guides on Next.js App Router, Flutter mobile development, PostgreSQL optimization, and automated QA testing from real production systems.
            </p>

            {/* Quick Category Filter Pills */}
            <div 
              className="blog-category-filter-bar"
              style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", maxWidth: "840px", margin: "0 auto" }}
            >
              <Link
                href="/blog"
                style={{
                  padding: "6px 16px",
                  borderRadius: "9999px",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  textDecoration: "none",
                  background: !categoryFilter ? "#C9A84C" : "#1e1e1e",
                  color: !categoryFilter ? "#161616" : "#ded9cf",
                  border: !categoryFilter ? "1px solid #C9A84C" : "1px solid #2E2E2E",
                  transition: "all 0.2s ease"
                }}
              >
                All Articles ({totalPosts})
              </Link>
              {allCategories.slice(0, 6).map((cat) => {
                const isSelected = categoryFilter === cat.slug;
                return (
                  <Link
                    key={cat.id || cat.slug}
                    href={`/blog?category=${cat.slug}`}
                    style={{
                      padding: "6px 16px",
                      borderRadius: "9999px",
                      fontSize: "12.5px",
                      fontWeight: 700,
                      textDecoration: "none",
                      background: isSelected ? "#C9A84C" : "#1e1e1e",
                      color: isSelected ? "#161616" : "#ded9cf",
                      border: isSelected ? "1px solid #C9A84C" : "1px solid #2E2E2E",
                      transition: "all 0.2s ease"
                    }}
                  >
                    {cat.name} {cat._count?.posts ? `(${cat._count.posts})` : ""}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Content & Sidebar Grid */}
      <section className="wpr-blog-standard-area mb--16">
        <div className="container">
          <div 
            className="section-inner bg-[#161616] border"
            style={{
              padding: "48px 48px",
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

            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "1fr 340px", 
                gap: "48px",
                alignItems: "start"
              }}
              className="blog-layout-grid"
            >
              {/* Left Column: Articles List */}
              <div>
                {posts.length === 0 ? (
                  <div style={{ padding: "64px 32px", textAlign: "center", background: "#161616", borderRadius: "16px", border: "1px solid #2E2E2E" }}>
                    <div style={{ fontSize: "36px", marginBottom: "16px" }}>🔍</div>
                    <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#F8F5EF", marginBottom: "8px" }}>No Articles Found</h3>
                    <p style={{ fontSize: "14px", color: "#E8D6B3", marginBottom: "20px" }}>
                      We couldn&apos;t find any articles matching your search or category filter.
                    </p>
                    <Link
                      href="/blog"
                      style={{
                        display: "inline-block",
                        padding: "10px 22px",
                        background: "#C9A84C",
                        color: "#161616",
                        borderRadius: "9999px",
                        fontWeight: 700,
                        fontSize: "13px",
                        textDecoration: "none"
                      }}
                    >
                      View All Articles →
                    </Link>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                    {posts.map((post) => {
                      const category = post.categories && post.categories.length > 0 ? post.categories[0] : null;
                      const publishedFormatted = post.publishDate
                        ? new Date(post.publishDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                          })
                        : "Recent";
                      const updatedFormatted = post.updatedAt
                        ? new Date(post.updatedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                          })
                        : null;

                      return (
                        <article 
                          key={post.id}
                          style={{
                            display: "grid",
                            gridTemplateColumns: "280px 1fr",
                            gap: "28px",
                            background: "#161616",
                            border: "1px solid #2E2E2E",
                            borderRadius: "14px",
                            padding: "24px",
                            transition: "all 0.25s ease",
                            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.45)"
                          }}
                          className="blog-article-card"
                        >
                          {/* Featured Image */}
                          <Link 
                            href={`/${post.slug}`}
                            className="article-card-image-wrap"
                            style={{
                              borderRadius: "10px",
                              overflow: "hidden",
                              display: "block",
                              background: "#1e1e1e",
                              height: "190px",
                              position: "relative"
                            }}
                          >
                            <img
                              src={post.featuredImage || "/assets/images/blog/blog-1.jpg"}
                              alt={post.title}
                              width={600}
                              height={338}
                              loading="lazy"
                              decoding="async"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: "transform 0.35s ease"
                              }}
                              className="article-card-image"
                            />
                          </Link>

                          {/* Article Details */}
                          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <div>
                              {/* Meta Header */}
                              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
                                {category && (
                                  <Link
                                    href={`/blog?category=${category.slug}`}
                                    style={{
                                      fontSize: "11px",
                                      fontWeight: 800,
                                      color: "#C9A84C",
                                      background: "rgba(201, 168, 76, 0.08)",
                                      padding: "3px 10px",
                                      borderRadius: "9999px",
                                      textDecoration: "none",
                                      letterSpacing: "0.04em",
                                      textTransform: "uppercase"
                                    }}
                                  >
                                    {category.name}
                                  </Link>
                                )}
                                <span style={{ fontSize: "12px", color: "#c4bba8" }}>•</span>
                                <span style={{ fontSize: "12px", color: "#E8D6B3", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                                  <span style={{ color: "#c4bba8" }}>Published:</span> {publishedFormatted}
                                </span>
                                {updatedFormatted && updatedFormatted !== publishedFormatted && (
                                  <>
                                    <span style={{ fontSize: "12px", color: "#c4bba8" }}>•</span>
                                    <span style={{ 
                                      fontSize: "11px", 
                                      color: "#C9A84C", 
                                      background: "rgba(201, 168, 76, 0.06)", 
                                      padding: "2px 8px", 
                                      borderRadius: "6px", 
                                      fontWeight: 700,
                                      display: "inline-flex",
                                      alignItems: "center",
                                      gap: "4px"
                                    }}>
                                      <span>🔄 Updated:</span> {updatedFormatted}
                                    </span>
                                  </>
                                )}
                                <span style={{ fontSize: "12px", color: "#c4bba8" }}>•</span>
                                <span style={{ fontSize: "12px", color: "#E8D6B3", fontWeight: 600 }}>
                                  Jet Slate
                                </span>
                              </div>

                              {/* Title */}
                              <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#F8F5EF", lineHeight: 1.35, margin: "0 0 10px 0" }}>
                                <Link 
                                  href={`/${post.slug}`}
                                  style={{ color: "#F8F5EF", textDecoration: "none", transition: "color 0.2s ease" }}
                                  className="article-title-link"
                                >
                                  {cleanText(post.title)}
                                </Link>
                              </h2>

                              {/* Excerpt */}
                              <p style={{ fontSize: "14px", color: "#ded9cf", lineHeight: 1.6, margin: "0 0 16px 0" }}>
                                {post.excerpt ? cleanText(post.excerpt) : "Explore architecture principles, implementation blueprints, and production lessons in this deep dive."}
                              </p>
                            </div>

                            {/* Action Link */}
                            <div>
                              <Link 
                                href={`/${post.slug}`}
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "6px",
                                  fontSize: "13px",
                                  fontWeight: 700,
                                  color: "#C9A84C",
                                  textDecoration: "none"
                                }}
                              >
                                <span>Read Full Article</span>
                                <span style={{ transition: "transform 0.2s ease" }}>→</span>
                              </Link>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                )}

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "40px", paddingTop: "24px", borderTop: "1px solid #2E2E2E" }}>
                    {currentPage > 1 && (
                      <Link
                        href={`/blog?page=${currentPage - 1}${categoryFilter ? `&category=${categoryFilter}` : ""}${searchQuery ? `&q=${searchQuery}` : ""}`}
                        style={{
                          padding: "8px 16px",
                          borderRadius: "9999px",
                          background: "#161616",
                          border: "1px solid #3A3A3A",
                          color: "#F8F5EF",
                          fontSize: "13px",
                          fontWeight: 700,
                          textDecoration: "none"
                        }}
                      >
                        ← Previous
                      </Link>
                    )}

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                      const isCurr = pageNum === currentPage;
                      return (
                        <Link
                          key={pageNum}
                          href={`/blog?page=${pageNum}${categoryFilter ? `&category=${categoryFilter}` : ""}${searchQuery ? `&q=${searchQuery}` : ""}`}
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: isCurr ? "#C9A84C" : "#161616",
                            color: isCurr ? "#161616" : "#ded9cf",
                            border: isCurr ? "1px solid #C9A84C" : "1px solid #3A3A3A",
                            fontSize: "13px",
                            fontWeight: 700,
                            textDecoration: "none"
                          }}
                        >
                          {pageNum}
                        </Link>
                      );
                    })}

                    {currentPage < totalPages && (
                      <Link
                        href={`/blog?page=${currentPage + 1}${categoryFilter ? `&category=${categoryFilter}` : ""}${searchQuery ? `&q=${searchQuery}` : ""}`}
                        style={{
                          padding: "8px 16px",
                          borderRadius: "9999px",
                          background: "#161616",
                          border: "1px solid #3A3A3A",
                          color: "#F8F5EF",
                          fontSize: "13px",
                          fontWeight: 700,
                          textDecoration: "none"
                        }}
                      >
                        Next →
                      </Link>
                    )}
                  </div>
                )}
              </div>

              {/* Right Column: Architectural Sticky Sidebar */}
              <aside style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {/* Author Card Widget */}
                <div style={{ background: "#161616", border: "1px solid #2E2E2E", borderRadius: "14px", padding: "24px", textAlign: "center", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.45)" }}>
                  <div style={{ width: "72px", height: "72px", borderRadius: "50%", overflow: "hidden", margin: "0 auto 14px auto", border: "2px solid #C9A84C" }}>
                    <img 
                      src="/assets/images/about/team-avatar.webp?v=2" 
                      alt="Jet Slate" 
                      width={72} 
                      height={72} 
                      loading="lazy" 
                      decoding="async" 
                      style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                    />
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: 800, color: "#F8F5EF", margin: "0 0 4px 0" }}>Jet Slate</h3>
                  <p style={{ fontSize: "11.5px", fontWeight: 700, color: "#C9A84C", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px 0" }}>
                    Senior Software Architect
                  </p>
                  <p style={{ fontSize: "13px", color: "#E8D6B3", lineHeight: 1.55, margin: "0 0 16px 0" }}>
                    Engineering high-performance web systems, cross-platform mobile apps, and automated QA testing frameworks in Vehari, Pakistan.
                  </p>
                  <div style={{ display: "flex", justifyContent: "center", gap: "12px", fontSize: "13px" }}>
                    <a href="https://github.com/jetslate" target="_blank" rel="me noopener noreferrer" style={{ color: "#F8F5EF", fontWeight: 700, textDecoration: "none" }}>GitHub</a>
                    <span style={{ color: "#3A3A3A" }}>•</span>
                    <a href="https://linkedin.com/in/jetslate" target="_blank" rel="me noopener noreferrer" style={{ color: "#F8F5EF", fontWeight: 700, textDecoration: "none" }}>LinkedIn</a>
                    <span style={{ color: "#3A3A3A" }}>•</span>
                    <a href="mailto:contact@jetslate.com" target="_blank" rel="noopener noreferrer" style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none" }}>Email</a>
                  </div>
                </div>

                {/* Search Widget */}
                <div style={{ background: "#161616", border: "1px solid #2E2E2E", borderRadius: "14px", padding: "22px 20px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.45)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                    <span style={{ width: "7px", height: "7px", background: "#C9A84C", display: "inline-block" }}></span>
                    <h3 style={{ fontSize: "12px", fontWeight: 800, color: "#F8F5EF", letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>
                      Search Articles
                    </h3>
                  </div>
                  <form action="/blog" method="GET" style={{ width: "100%", margin: 0 }}>
                    <div style={{ position: "relative", display: "flex", alignItems: "center", width: "100%" }}>
                      <input
                        type="text"
                        name="q"
                        defaultValue={searchQuery || ""}
                        placeholder="Search keywords..."
                        style={{
                          width: "100%",
                          height: "44px",
                          padding: "0 46px 0 14px",
                          borderRadius: "8px",
                          border: "1px solid #3A3A3A",
                          background: "#161616",
                          fontSize: "13.5px",
                          color: "#F8F5EF",
                          outline: "none",
                          boxSizing: "border-box",
                          display: "block"
                        }}
                        className="custom-search-input"
                      />
                      <button
                        type="submit"
                        aria-label="Search"
                        style={{
                          position: "absolute",
                          right: "4px",
                          top: "4px",
                          bottom: "4px",
                          width: "36px",
                          height: "36px",
                          borderRadius: "6px",
                          background: "#C9A84C",
                          color: "#161616",
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: 0,
                          transition: "background 0.2s ease"
                        }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#161616" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Popular Categories Widget (Pill Chips Style) */}
                <div style={{ background: "#161616", border: "1px solid #2E2E2E", borderRadius: "14px", padding: "22px 20px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.45)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                    <span style={{ width: "7px", height: "7px", background: "#C9A84C", display: "inline-block" }}></span>
                    <h3 style={{ fontSize: "12px", fontWeight: 800, color: "#F8F5EF", letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>
                      Popular Categories
                    </h3>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {allCategories.map((cat) => {
                      const isSelected = categoryFilter === cat.slug;
                      return (
                        <Link
                          key={cat.id || cat.slug}
                          href={`/blog?category=${cat.slug}`}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "6px 14px",
                            borderRadius: "8px",
                            background: isSelected ? "#C9A84C" : "#161616",
                            color: isSelected ? "#161616" : "#F8F5EF",
                            border: isSelected ? "1px solid #C9A84C" : "1px solid #3A3A3A",
                            fontSize: "13px",
                            fontWeight: 700,
                            textDecoration: "none",
                            transition: "all 0.2s ease"
                          }}
                          className="category-pill-chip"
                        >
                          <span>#{cat.name}</span>
                          {cat._count?.posts ? (
                            <span 
                              style={{ 
                                fontSize: "11px", 
                                color: isSelected ? "rgba(255,255,255,0.85)" : "#E8D6B3", 
                                fontWeight: 600 
                              }}
                            >
                              ({cat._count.posts})
                            </span>
                          ) : null}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Recent Articles Widget */}
                {recentPosts.length > 0 && (
                  <div style={{ background: "#161616", border: "1px solid #2E2E2E", borderRadius: "14px", padding: "22px 20px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.45)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                      <span style={{ width: "7px", height: "7px", background: "#C9A84C", display: "inline-block" }}></span>
                      <h3 style={{ fontSize: "12px", fontWeight: 800, color: "#F8F5EF", letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>
                        Recent Articles
                      </h3>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                      {recentPosts.map((rec) => {
                        const recDate = rec.publishDate
                          ? new Date(rec.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                          : "Recent";
                        return (
                          <div key={rec.id} style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                            <Link href={`/${rec.slug}`} style={{ width: "54px", height: "54px", borderRadius: "8px", overflow: "hidden", flexShrink: 0, background: "#2E2E2E" }}>
                              <img 
                                src={rec.featuredImage || "/assets/images/blog/blog-1.jpg"} 
                                alt={rec.title} 
                                width={54} 
                                height={54} 
                                loading="lazy" 
                                decoding="async" 
                                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                              />
                            </Link>
                            <div>
                              <div style={{ fontSize: "11px", color: "#E8D6B3", fontWeight: 600, marginBottom: "3px" }}>{recDate}</div>
                              <h4 style={{ fontSize: "13px", fontWeight: 700, lineHeight: 1.35, margin: 0 }}>
                                <Link href={`/${rec.slug}`} style={{ color: "#F8F5EF", textDecoration: "none" }}>
                                  {rec.title}
                                </Link>
                              </h4>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .category-pill-chip:hover {
          border-color: #C9A84C !important;
          background: #C9A84C !important;
          color: #161616 !important;
          transform: translateY(-1px);
        }
        .category-pill-chip:hover span {
          color: #161616 !important;
        }
        .custom-search-input:focus {
          border-color: #C9A84C !important;
          background: #161616 !important;
          box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.12) !important;
        }
        .blog-article-card:hover {
          border-color: #C9A84C !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(201, 168, 76, 0.08) !important;
        }
        .blog-article-card:hover .article-card-image {
          transform: scale(1.04);
        }
        .blog-article-card:hover .article-title-link {
          color: #C9A84C !important;
        }
        @media (max-width: 991px) {
          .blog-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
        @media (max-width: 640px) {
          .blog-category-filter-bar {
            flex-wrap: nowrap !important;
            justify-content: flex-start !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 8px !important;
            width: 100% !important;
          }
          .blog-category-filter-bar > * {
            flex-shrink: 0 !important;
          }
          .blog-article-card {
            grid-template-columns: 1fr !important;
            padding: 16px !important;
            gap: 16px !important;
          }
          .article-card-image-wrap {
            height: auto !important;
            aspect-ratio: 16 / 9 !important;
          }
        }
      `}</style>
    </main>
  );
}

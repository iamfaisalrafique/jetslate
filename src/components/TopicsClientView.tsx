"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { TopicalCluster } from "@/lib/topical-map-data";

interface CategoryMeta {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  desc: string;
  serviceSlug: string;
}

interface TopicsClientViewProps {
  categories: CategoryMeta[];
  clusters: TopicalCluster[];
}

const TOPICS_PER_PAGE = 9;

export default function TopicsClientView({ categories, clusters }: TopicsClientViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter by category and search query
  const filteredClusters = clusters.filter((c) => {
    const matchesCategory = selectedCategory === "all" || c.pillarId === selectedCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      c.clusterName.toLowerCase().includes(q) ||
      c.overview.toLowerCase().includes(q) ||
      c.subtopicKeywords.some((kw) => kw.toLowerCase().includes(q)) ||
      c.relatedEntities.some((ent) => ent.toLowerCase().includes(q))
    );
  });

  const totalFiltered = filteredClusters.length;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / TOPICS_PER_PAGE));
  const validCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (validCurrentPage - 1) * TOPICS_PER_PAGE;
  const paginatedClusters = filteredClusters.slice(startIndex, startIndex + TOPICS_PER_PAGE);

  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return clusters.length;
    return clusters.filter((c) => c.pillarId === categoryId).length;
  };

  const categoryIcons: Record<string, string> = {
    P01: "🛡️",
    P02: "🎭",
    P03: "⚡",
    P04: "📱",
    P05: "🤖",
    P06: "💼",
    P07: "🌐",
    P08: "🏛️",
  };

  return (
    <div ref={containerRef}>
      {/* Category Filter Pills (Exact Blog & Services Bento Pill Styling) */}
      <div
        className="category-filter-bar"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          maxWidth: "1000px",
          margin: "0 auto 36px auto",
          width: "100%",
        }}
      >
        {/* All Topics Pill */}
        <button
          type="button"
          className={`category-pill-btn ${selectedCategory === "all" ? "active" : ""}`}
          onClick={() => handleCategorySelect("all")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            maxWidth: "fit-content",
            flex: "0 0 auto",
          }}
        >
          All Topics <span className="count-badge">{clusters.length}</span>
        </button>

        {/* Individual Category Pills */}
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const count = getCategoryCount(cat.id);

          return (
            <button
              key={cat.id}
              type="button"
              className={`category-pill-btn ${isSelected ? "active" : ""}`}
              onClick={() => handleCategorySelect(cat.id)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                maxWidth: "fit-content",
                flex: "0 0 auto",
              }}
            >
              {cat.shortName} <span className="count-badge">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Search Bar & Result Metrics Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "28px",
          flexWrap: "wrap",
          gap: "16px",
          background: "#111111",
          border: "1px solid #2E2E2E",
          borderRadius: "14px",
          padding: "16px 20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "14px", fontWeight: 700, color: "#F8F5EF" }}>
            Showing {totalFiltered === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + TOPICS_PER_PAGE, totalFiltered)} of {totalFiltered} {totalFiltered === 1 ? "Guide" : "Guides"}
          </span>
          {selectedCategory !== "all" && (
            <span
              style={{
                fontSize: "12px",
                color: "#C9A84C",
                background: "rgba(201, 168, 76, 0.08)",
                padding: "3px 10px",
                borderRadius: "9999px",
                fontWeight: 700,
              }}
            >
              {categories.find((c) => c.id === selectedCategory)?.shortName}
            </span>
          )}
          {searchQuery && (
            <span
              style={{
                fontSize: "12px",
                color: "#ded9cf",
                background: "#161616",
                border: "1px solid #383838",
                padding: "3px 10px",
                borderRadius: "9999px",
                fontWeight: 600,
              }}
            >
              Search: &ldquo;{searchQuery}&rdquo;
            </span>
          )}
        </div>

        {/* Live Search Input */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ position: "relative", minWidth: "220px" }}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search topic or tech..."
              style={{
                width: "100%",
                padding: "8px 14px 8px 34px",
                borderRadius: "9999px",
                border: "1px solid #383838",
                background: "#161616",
                fontSize: "13px",
                color: "#F8F5EF",
                outline: "none",
                transition: "border-color 0.2s ease",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "13px",
                color: "#bfb9ad",
                pointerEvents: "none",
              }}
            >
              🔍
            </span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  fontSize: "12px",
                  color: "#bfb9ad",
                  cursor: "pointer",
                  padding: "2px 4px",
                }}
              >
                ✕
              </button>
            )}
          </div>

          {(selectedCategory !== "all" || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setCurrentPage(1);
              }}
              style={{
                fontSize: "12.5px",
                color: "#C9A84C",
                fontWeight: 700,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px 8px",
                textDecoration: "underline",
                whiteSpace: "nowrap",
              }}
            >
              Reset All
            </button>
          )}
        </div>
      </div>

      {/* Topics Bento Grid Cards */}
      {paginatedClusters.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "64px 24px",
            background: "#161616",
            border: "1px solid #2E2E2E",
            borderRadius: "16px",
            marginBottom: "48px",
          }}
        >
          <div style={{ fontSize: "40px", marginBottom: "16px" }}>🔍</div>
          <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#F8F5EF", marginBottom: "8px" }}>
            No matching topics found
          </h3>
          <p style={{ fontSize: "14px", color: "#E8D6B3", marginBottom: "20px" }}>
            Try searching for another keyword or select a different discipline category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
              setCurrentPage(1);
            }}
            style={{
              padding: "10px 22px",
              borderRadius: "9999px",
              background: "#C9A84C",
              color: "#FFFFFF",
              fontSize: "13px",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(201, 168, 76, 0.3)",
            }}
          >
            Show All 40 Topics
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {paginatedClusters.map((cluster) => {
            const icon = categoryIcons[cluster.pillarId] || "📐";
            const catName = categories.find((c) => c.id === cluster.pillarId)?.shortName || cluster.pillarName;

            return (
              <div
                key={cluster.slug}
                className="tactile-card"
                style={{
                  borderRadius: "16px",
                  border: "1px solid #2E2E2E",
                  background: "#161616",
                  padding: "28px 26px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative",
                }}
              >
                <div>
                  {/* Eyebrow Category Pill */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "rgba(201, 168, 76, 0.06)",
                        border: "1px solid rgba(201, 168, 76, 0.15)",
                        padding: "4px 12px",
                        borderRadius: "9999px",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#C9A84C",
                      }}
                    >
                      <span>{icon}</span>
                      <span>{catName}</span>
                    </div>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#10B981",
                        background: "#ECFDF5",
                        border: "1px solid #A7F3D0",
                        padding: "3px 8px",
                        borderRadius: "9999px",
                      }}
                    >
                      Guide
                    </span>
                  </div>

                  {/* Topic Title */}
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 800,
                      color: "#F8F5EF",
                      lineHeight: 1.35,
                      marginBottom: "12px",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {cluster.clusterName}
                  </h3>

                  {/* Overview Text */}
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "#ded9cf",
                      lineHeight: 1.65,
                      marginBottom: "20px",
                    }}
                  >
                    {cluster.overview}
                  </p>

                  {/* Semantic Focus Keywords */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                    {cluster.subtopicKeywords.slice(0, 3).map((kw, kwIdx) => (
                      <span
                        key={kwIdx}
                        style={{
                          background: "#111111",
                          border: "1px solid #2E2E2E",
                          padding: "4px 10px",
                          borderRadius: "9999px",
                          fontSize: "11.5px",
                          color: "#ded9cf",
                          fontWeight: 600,
                        }}
                      >
                        {kw}
                      </span>
                    ))}
                    {cluster.subtopicKeywords.length > 3 && (
                      <span
                        style={{
                          background: "#1c1c1c",
                          padding: "4px 8px",
                          borderRadius: "9999px",
                          fontSize: "11px",
                          color: "#E8D6B3",
                          fontWeight: 700,
                        }}
                      >
                        +{cluster.subtopicKeywords.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer: Action Links */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "18px",
                    borderTop: "1px solid #F1F5F9",
                  }}
                >
                  <Link
                    href={cluster.parentServiceSlug}
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#E8D6B3",
                      textDecoration: "none",
                    }}
                  >
                    {cluster.parentServiceName.split("&")[0].trim()}
                  </Link>

                  <Link
                    href={`/topics/${cluster.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "#C9A84C",
                      color: "#FFFFFF",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      fontSize: "12.5px",
                      fontWeight: 700,
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      boxShadow: "0 2px 6px rgba(201, 168, 76, 0.2)",
                    }}
                  >
                    <span>Explore Guide</span>
                    <span>➔</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "48px",
            paddingTop: "24px",
            borderTop: "1px solid #2E2E2E",
            flexWrap: "wrap",
          }}
        >
          {/* Previous Button */}
          <button
            type="button"
            disabled={validCurrentPage === 1}
            onClick={() => handlePageChange(validCurrentPage - 1)}
            style={{
              padding: "9px 18px",
              borderRadius: "9999px",
              background: validCurrentPage === 1 ? "#F8FAFC" : "#FFFFFF",
              border: "1px solid #2E2E2E",
              color: validCurrentPage === 1 ? "#94A3B8" : "#0F172A",
              fontSize: "13px",
              fontWeight: 700,
              cursor: validCurrentPage === 1 ? "not-allowed" : "pointer",
              transition: "all 0.2s ease",
              boxShadow: validCurrentPage === 1 ? "none" : "0 2px 4px rgba(0, 0, 0, 0.4)",
            }}
          >
            ← Previous
          </button>

          {/* Page Number Buttons */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
            const isCurr = pageNum === validCurrentPage;
            return (
              <button
                key={pageNum}
                type="button"
                onClick={() => handlePageChange(pageNum)}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: isCurr
                    ? "linear-gradient(135deg, #C9A84C 0%, #084BB8 100%)"
                    : "#FFFFFF",
                  color: isCurr ? "#FFFFFF" : "#334155",
                  border: isCurr ? "1px solid rgba(255,255,255,0.2)" : "1px solid #2E2E2E",
                  fontSize: "13px",
                  fontWeight: isCurr ? 800 : 600,
                  cursor: "pointer",
                  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: isCurr
                    ? "0 4px 14px rgba(201, 168, 76, 0.3)"
                    : "0 2px 4px rgba(0, 0, 0, 0.4)",
                }}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            type="button"
            disabled={validCurrentPage === totalPages}
            onClick={() => handlePageChange(validCurrentPage + 1)}
            style={{
              padding: "9px 18px",
              borderRadius: "9999px",
              background: validCurrentPage === totalPages ? "#F8FAFC" : "#FFFFFF",
              border: "1px solid #2E2E2E",
              color: validCurrentPage === totalPages ? "#94A3B8" : "#0F172A",
              fontSize: "13px",
              fontWeight: 700,
              cursor: validCurrentPage === totalPages ? "not-allowed" : "pointer",
              transition: "all 0.2s ease",
              boxShadow: validCurrentPage === totalPages ? "none" : "0 2px 4px rgba(0, 0, 0, 0.4)",
            }}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

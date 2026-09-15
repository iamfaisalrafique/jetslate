"use client";

import React, { useState, useEffect } from "react";

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  // Clean hierarchical numbering (1., 1.1, 1.2, 2., 2.1, etc.)
  let majorCount = 0;
  let subCount = 0;
  let hasStartedMajor = false;

  const numberedItems = items.map((item) => {
    if (item.level <= 2) {
      majorCount++;
      subCount = 0;
      hasStartedMajor = true;
      return { ...item, num: `${majorCount}.` };
    } else {
      if (!hasStartedMajor) {
        majorCount++;
        subCount = 0;
        hasStartedMajor = true;
        return { ...item, num: `${majorCount}.` };
      }
      subCount++;
      return { ...item, num: `${majorCount}.${subCount}` };
    }
  });

  // Track active heading using IntersectionObserver (off main thread, zero forced reflows)
  useEffect(() => {
    if (!items || items.length === 0) return;

    const headingElements = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (headingElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-90px 0% -65% 0%",
        threshold: 0,
      }
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) {
    return null;
  }

  // Helper to limit to max 3 words
  const formatHeadingText = (text: string) => {
    const clean = text.replace(/<[^>]+>/g, "").trim();
    const words = clean.split(/\s+/);
    if (words.length <= 3) {
      return clean;
    }
    return words.slice(0, 3).join(" ") + "...";
  };

  const scrollToHeading = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <div
      style={{
        background: "#161616",
        border: "1px solid #2E2E2E",
        borderRadius: "14px",
        padding: "20px 18px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
        marginBottom: "24px"
      }}
      className="toc-static-card"
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px", paddingBottom: "10px", borderBottom: "1px solid #F1F5F9" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "7px", height: "7px", background: "#C9A84C", display: "inline-block" }}></span>
          <h3 style={{ fontSize: "12px", fontWeight: 800, color: "#F8F5EF", letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>
            Table of Contents
          </h3>
        </div>
        <span style={{ fontSize: "11px", fontWeight: 700, color: "#C9A84C", background: "rgba(201, 168, 76, 0.08)", padding: "2px 8px", borderRadius: "9999px" }}>
          {items.length} Sections
        </span>
      </div>

      {/* Headings List - Static, Clean, Perfectly Aligned on the Same Line */}
      <nav aria-label="Table of contents">
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "3px",
            maxHeight: "420px",
            overflowY: "auto"
          }}
          className="custom-toc-scroll"
        >
          {numberedItems.map((item) => {
            const isActive = item.id === activeId || (!activeId && item.id === numberedItems[0].id);
            const shortTitle = formatHeadingText(item.text);

            return (
              <li key={item.id} style={{ margin: 0, padding: 0 }}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => scrollToHeading(e, item.id)}
                  title={item.text}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "34px 1fr",
                    alignItems: "center",
                    padding: "6px 8px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: isActive ? 800 : 600,
                    color: isActive ? "#C9A84C" : "#334155",
                    background: isActive ? "rgba(201, 168, 76, 0.08)" : "transparent",
                    textDecoration: "none",
                    transition: "all 0.18s ease",
                    lineHeight: 1.35
                  }}
                  className="toc-link-item"
                >
                  {/* Number Column - exactly aligned */}
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 800,
                      color: isActive ? "#C9A84C" : "#64748B",
                      fontVariantNumeric: "tabular-nums"
                    }}
                  >
                    {item.num}
                  </span>

                  {/* Title Column - same line baseline start */}
                  <span
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "block"
                    }}
                  >
                    {shortTitle}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <style jsx>{`
        .custom-toc-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-toc-scroll::-webkit-scrollbar-track {
          background: #F1F5F9;
          border-radius: 4px;
        }
        .custom-toc-scroll::-webkit-scrollbar-thumb {
          background: #383838;
          border-radius: 4px;
        }
        .toc-link-item:hover {
          color: #C9A84C !important;
          background: rgba(201, 168, 76, 0.06) !important;
        }
      `}</style>
    </div>
  );
}

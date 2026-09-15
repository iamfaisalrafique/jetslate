"use client";

import React, { useState, useEffect } from "react";

export default function BackToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const checkScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isOver = window.scrollY > 280;
          setShowScrollTop((prev) => (prev !== isOver ? isOver : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      id="back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      style={{
        position: "fixed",
        bottom: "26px",
        right: "26px",
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        background: "#C9A84C",
        color: "#FFFFFF",
        border: "2px solid #FFFFFF",
        boxShadow: "0 4px 14px rgba(201, 168, 76, 0.4), 0 2px 6px rgba(15, 23, 42, 0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 99999,
        opacity: showScrollTop ? 1 : 0,
        transform: showScrollTop ? "translateY(0) scale(1)" : "translateY(16px) scale(0.8)",
        pointerEvents: showScrollTop ? "auto" : "none",
        transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className="back-to-top floating-back-to-top-btn"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 3.29688L7.64062 3.64062L1.39062 9.89062L2.10938 10.6094L8 4.71875L13.8906 10.6094L14.6094 9.89062L8.35938 3.64062L8 3.29688Z"
          fill="#FFFFFF"
          stroke="#FFFFFF"
          strokeWidth="0.6"
        />
      </svg>
    </button>
  );
}

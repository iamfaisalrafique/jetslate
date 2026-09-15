import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  isDark?: boolean;
  size?: "header" | "footer" | "large";
}

export default function BrandLogo({ isDark = false, size = "header" }: BrandLogoProps) {
  const heightMap = {
    header: 42,
    footer: 44,
    large: 58,
  };
  const markSizeMap = {
    header: 36,
    footer: 38,
    large: 50,
  };
  const nameSizeMap = {
    header: 18.5,
    footer: 19.5,
    large: 26,
  };
  const roleSizeMap = {
    header: 8.5,
    footer: 9,
    large: 11,
  };

  const currentHeight = heightMap[size] || 42;
  const markSize = markSizeMap[size] || 36;
  const nameSize = nameSizeMap[size] || 18.5;
  const roleSize = roleSizeMap[size] || 8.5;

  // Colors based on client luxury palette
  const firstNameColor = "#F8F5EF";
  const lastNameColor = "#C9A84C";
  const subtitleColor = "#E8D6B3";

  return (
    <Link
      href="/"
      className="brand-logo-link"
      title="Jet Slate — Software Architecture & Engineering"
      aria-label="Jet Slate — Software Architecture & Engineering"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: size === "large" ? "12px" : "10px",
        textDecoration: "none",
        userSelect: "none",
        padding: "2px 0",
        position: "relative",
        height: `${currentHeight}px`,
      }}
    >
      {/* Modern Squircle Badge with JS Monogram */}
      <span
        className="brand-logo-mark"
        aria-hidden="true"
        style={{
          width: `${markSize}px`,
          height: `${markSize}px`,
          borderRadius: "9px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #C9A84C 0%, #9e7f2b 100%)",
          color: "#111111",
          fontSize: `${Math.round(markSize * 0.48)}px`,
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          boxShadow: "0 4px 14px rgba(201, 168, 76, 0.4)",
          transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
          flexShrink: 0,
        }}
      >
        JS
      </span>

      {/* Typography: Jet Slate / Software Architecture */}
      <span
        style={{
          display: "inline-flex",
          flexDirection: "column",
          justifyContent: "center",
          minWidth: 0,
        }}
      >
        <span
          style={{
            display: "block",
            color: firstNameColor,
            fontSize: `${nameSize}px`,
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            whiteSpace: "nowrap",
          }}
        >
          Jet{" "}
          <span
            className="brand-last-name"
            style={{
              color: lastNameColor,
              transition: "color 0.2s ease",
            }}
          >
            Slate
          </span>
        </span>
        <span
          style={{
            display: "block",
            color: subtitleColor,
            fontSize: `${roleSize}px`,
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginTop: "2px",
            whiteSpace: "nowrap",
          }}
        >
          Software Architecture
        </span>
      </span>
    </Link>
  );
}

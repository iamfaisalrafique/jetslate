"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  };

  const solutions = [
    {
      title: "Full-Stack Web Development",
      desc: "Next.js 15, React, Node.js & PostgreSQL architectures",
      href: "/services/full-stack-web-development",
      icon: "⚡"
    },
    {
      title: "Mobile App Development",
      desc: "Cross-platform Flutter apps for iOS & Android",
      href: "/services/mobile-app-development",
      icon: "📱"
    },
    {
      title: "Enterprise POS & Software",
      desc: "Multi-branch retail pharmacy POS & desktop engines",
      href: "/services/custom-software-solutions",
      icon: "💼"
    },
    {
      title: "QA & Automated Testing",
      desc: "Playwright E2E suites & zero-defect CI/CD pipelines",
      href: "/services/qa-automation",
      icon: "🛡️"
    }
  ];

  return (
    <header className="header-style-one">
      {/* Top Notification Bar */}
      <div style={{ background: "#0C0C0C", borderBottom: "1px solid #222222", padding: "7px 16px" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#C9A84C", display: "inline-block", boxShadow: "0 0 10px #C9A84C" }}></span>
            <p style={{ margin: 0, fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", color: "#ded9cf", textTransform: "uppercase" }}>
              AVAILABLE FOR <span style={{ color: "#C9A84C" }}>ENTERPRISE WEB, FLUTTER &amp; QA PROJECTS</span>
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "11px", fontWeight: 700, color: "#ded9cf" }}>
            <a 
              href="tel:+14196228499" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: "#E8D6B3", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px" }}
            >
              <span>📞</span>
              <span>+1 (419) 622-8499</span>
            </a>
            <span style={{ color: "#3A3A3A" }}>|</span>
            <LanguageSelector variant="header" />
          </div>
        </div>
      </div>

      {/* Main Header Wrapper */}
      <div className="container">
        <div 
          className="header-style-one-wrapper" 
          style={{ 
            alignItems: "center", 
            background: "#161616", 
            border: "1px solid rgba(15, 23, 42, 0.12)",
            position: "relative",
            zIndex: 20
          }}
        >
          
          {/* Left Brand Logo Area with compact, balanced spacing */}
          <div className="left-area square-dot" style={{ overflow: "visible", padding: "14px 22px" }}>
            <div 
              className="logo-area" 
              style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: "140px", overflow: "visible" }}
            >
              <BrandLogo size="header" />
            </div>
            <span className="square-shape top-left"></span>
            <span className="square-shape bottom-left"></span>
            <span className="square-shape top-right"></span>
            <span className="square-shape bottom-right"></span>
          </div>

          {/* Center Desktop Navigation with Elegant Typography & Dead-Center Alignment */}
          <nav className="main-nav-area hidden lg:flex" style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: "0 16px" }}>
            <ul 
              className="list-unstyled wpr-desktop-menu" 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                gap: "28px",
                margin: "0 auto", 
                padding: 0,
                height: "100%"
              }}
            >
              <li className={`menu-item ${pathname === "/" ? "active" : ""}`}>
                <Link className="main-element" href="/">
                  <span className="nav-text">HOME</span>
                </Link>
              </li>

              <li className={`menu-item ${pathname === "/about" ? "active" : ""}`}>
                <Link className="main-element" href="/about">
                  <span className="nav-text">ABOUT</span>
                </Link>
              </li>

              {/* Solutions Mega-Dropdown */}
              <li 
                className={`menu-item has-dropdown ${pathname.startsWith("/services") ? "active" : ""}`}
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
                style={{ position: "relative" }}
              >
                <Link 
                  className="main-element wpr-dropdown-main-element" 
                  href="/services"
                  style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}
                >
                  <span className="nav-text">SERVICES</span>
                  <svg 
                    width="9" 
                    height="9" 
                    viewBox="0 0 10 10" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      transform: solutionsDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                      display: "inline-block",
                      verticalAlign: "middle"
                    }}
                  >
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>

                {/* Solutions Dropdown Card */}
                <div 
                  className="elegant-dropdown-popover"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: solutionsDropdownOpen 
                      ? "translateX(-50%) translateY(0px)" 
                      : "translateX(-50%) translateY(10px)",
                    width: "360px",
                    background: "#161616",
                    border: "1px solid #2E2E2E",
                    borderRadius: "14px",
                    boxShadow: "0 20px 45px -10px rgba(201, 168, 76, 0.15), 0 8px 16px -4px rgba(0, 0, 0, 0.4)",
                    padding: "10px",
                    zIndex: 999,
                    opacity: solutionsDropdownOpen ? 1 : 0,
                    visibility: solutionsDropdownOpen ? "visible" : "hidden",
                    transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
                    pointerEvents: solutionsDropdownOpen ? "auto" : "none"
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {solutions.map((item, idx) => (
                      <Link 
                        key={idx}
                        href={item.href}
                        onClick={() => setSolutionsDropdownOpen(false)}
                        className="popover-nav-row"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "10px 12px",
                          borderRadius: "10px",
                          textDecoration: "none",
                          transition: "all 0.18s ease"
                        }}
                      >
                        <div 
                          style={{ 
                            width: "36px", 
                            height: "36px", 
                            borderRadius: "8px", 
                            background: "rgba(201, 168, 76, 0.08)", 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "center",
                            fontSize: "18px",
                            flexShrink: 0
                          }}
                        >
                          {item.icon}
                        </div>
                        <div style={{ textAlign: "left" }}>
                          <div style={{ fontSize: "13px", fontWeight: 700, color: "#F8F5EF", lineHeight: 1.2, marginBottom: "2px" }}>
                            {item.title}
                          </div>
                          <div style={{ fontSize: "11.5px", color: "#E8D6B3", lineHeight: 1.35 }}>
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}

                    <div style={{ marginTop: "4px", paddingTop: "8px", borderTop: "1px solid #F1F5F9" }}>
                      <Link 
                        href="/services" 
                        onClick={() => setSolutionsDropdownOpen(false)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "8px 12px",
                          borderRadius: "8px",
                          background: "rgba(201, 168, 76, 0.04)",
                          color: "#C9A84C",
                          fontWeight: 700,
                          fontSize: "11.5px",
                          letterSpacing: "0.04em",
                          textDecoration: "none"
                        }}
                      >
                        <span>VIEW ALL 8 ENGINEERING SERVICES</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              {/* Pricing */}
              <li className={`menu-item ${pathname === "/pricing" ? "active" : ""}`}>
                <Link className="main-element" href="/pricing">
                  <span className="nav-text">PRICING</span>
                </Link>
              </li>

              {/* Blog */}
              <li className={`menu-item ${pathname.startsWith("/blog") ? "active" : ""}`}>
                <Link className="main-element" href="/blog">
                  <span className="nav-text">BLOG</span>
                </Link>
              </li>

              {/* Contact */}
              <li className={`menu-item ${pathname === "/contact" ? "active" : ""}`}>
                <Link className="main-element" href="/contact">
                  <span className="nav-text">CONTACT</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right Action Button & Mobile Hamburger */}
          <div className="button-area-start square-dot" style={{ padding: "12px 20px", display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Search Icon Button */}
            <Link
              href="/search"
              aria-label="Search jetslate.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "#111111",
                border: "1px solid #383838",
                color: "#F8F5EF",
                textDecoration: "none",
                transition: "all 0.2s ease",
                flexShrink: 0
              }}
              className="header-search-btn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </Link>

            <Link 
              href="/contact" 
              className="wpr-btn btn-primary header-desktop-cta"
              style={{
                alignItems: "center",
                gap: "6px",
                padding: "10px 22px",
                borderRadius: "9999px",
                background: "#C9A84C",
                color: "#FFFFFF",
                fontSize: "13.5px",
                fontWeight: 700,
                letterSpacing: "0.02em",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(201, 168, 76, 0.28)",
                whiteSpace: "nowrap"
              }}
            >
              <span>Start a Project</span>
              <span>→</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button 
              className={`menu-btn flex lg:hidden flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 p-2 cursor-pointer transition-all ${mobileMenuOpen ? "active" : ""}`} 
              id="menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              type="button"
            >
              <span className={`w-5 h-0.5 bg-slate-800 transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`w-5 h-0.5 bg-slate-800 transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-5 h-0.5 bg-slate-800 transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>

            <span className="square-shape top-left"></span>
            <span className="square-shape bottom-left"></span>
            <span className="square-shape top-right"></span>
            <span className="square-shape bottom-right"></span>
          </div>

          {/* Mobile Drawer Navigation */}
          <div 
            id="side-bar" 
            className={`side-bar ${mobileMenuOpen ? "show" : ""}`}
            style={{
              position: "fixed",
              top: 0,
              right: mobileMenuOpen ? 0 : "-100%",
              width: "320px",
              maxWidth: "85vw",
              height: "100vh",
              background: "#161616",
              boxShadow: mobileMenuOpen ? "-10px 0 35px rgba(15, 23, 42, 0.2)" : "none",
              transition: "right 0.32s cubic-bezier(0.16, 1, 0.3, 1)",
              zIndex: 1001,
              padding: "calc(env(safe-area-inset-top, 16px) + 20px) 20px 28px 20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflowY: "auto"
            }}
          >
            <div>
              {/* Drawer Header with Close Button */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", paddingBottom: "16px", borderBottom: "1px solid #F1F5F9" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "30px", height: "30px", borderRadius: "6px", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)", color: "#FFFFFF", fontSize: "16px", fontWeight: 900 }}>
                    FR
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: 800, color: "#F8F5EF" }}>
                    Jet Slate
                  </span>
                </div>

                <button
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                  style={{
                    width: "40px",
                    height: "40px",
                    minWidth: "40px",
                    minHeight: "40px",
                    borderRadius: "8px",
                    background: "#1c1c1c",
                    border: "1px solid #2E2E2E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    color: "#ded9cf",
                    cursor: "pointer"
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Mobile Search Bar */}
              <form action="/search" method="GET" style={{ marginBottom: "20px" }}>
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <input
                    type="search"
                    name="q"
                    placeholder="Search guides, topics, articles..."
                    style={{
                      width: "100%",
                      height: "44px",
                      minHeight: "44px",
                      padding: "0 40px 0 12px",
                      borderRadius: "8px",
                      border: "1px solid #383838",
                      background: "#111111",
                      fontSize: "16px",
                      color: "#F8F5EF",
                      outline: "none"
                    }}
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
                      border: "none",
                      background: "transparent",
                      color: "#C9A84C",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </button>
                </div>
              </form>

              {/* Navigation Links */}
              <nav className="nav-main mainmenu-nav">
                <ul className="list-unstyled" style={{ display: "flex", flexDirection: "column", gap: "6px", padding: 0, margin: 0 }}>
                  {[
                    { label: "HOME", href: "/" },
                    { label: "ABOUT", href: "/about" },
                    { label: "SERVICES", href: "/services" },
                    { label: "PRICING", href: "/pricing" },
                    { label: "BLOG", href: "/blog" },
                    { label: "AUTHORS", href: "/authors" },
                    { label: "CONTACT", href: "/contact" },
                    { label: "TERMS & CONDITIONS", href: "/terms-of-service" },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link 
                        onClick={closeMobileMenu} 
                        href={item.href}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          minHeight: "44px",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          fontSize: "13.5px",
                          fontWeight: 700,
                          color: pathname === item.href ? "#C9A84C" : "#F8F5EF",
                          background: pathname === item.href ? "rgba(201, 168, 76, 0.08)" : "transparent",
                          textDecoration: "none"
                        }}
                      >
                        <span>{item.label}</span>
                        {pathname === item.href && <span style={{ color: "#C9A84C" }}>●</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Bottom CTA in Drawer */}
            <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #F1F5F9", display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link 
                onClick={closeMobileMenu} 
                href="/contact" 
                className="wpr-btn btn-primary" 
                style={{ 
                  width: "100%", 
                  textAlign: "center", 
                  display: "inline-flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  padding: "12px 20px", 
                  borderRadius: "9999px", 
                  background: "#C9A84C", 
                  color: "#FFFFFF", 
                  fontWeight: 700, 
                  fontSize: "13.5px", 
                  textDecoration: "none" 
                }}
              >
                <span>Start a Project</span>
                <span style={{ marginLeft: "6px" }}>→</span>
              </Link>

              <div style={{ textAlign: "center", marginTop: "4px", fontSize: "11px", color: "#E8D6B3", lineHeight: 1.4 }}>
                📍 Street 3, Peoples Colony, Vehari, Punjab, Pakistan
              </div>
            </div>
          </div>

          {/* Backdrop Overlay for Mobile */}
          {mobileMenuOpen && (
            <div 
              onClick={closeMobileMenu}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(15, 23, 42, 0.5)",
                backdropFilter: "blur(4px)",
                zIndex: 1000
              }}
            />
          )}
        </div>
      </div>


      <style jsx>{`
        .popover-nav-row:hover {
          background: #F8FAFC !important;
          transform: translateX(3px);
        }
        .popover-nav-row:hover div:first-child {
          background: rgba(201, 168, 76, 0.14) !important;
        }
        @media (max-width: 639px) {
          :global(.header-desktop-cta) {
            display: none !important;
          }
        }
        @media (min-width: 640px) {
          :global(.header-desktop-cta) {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}

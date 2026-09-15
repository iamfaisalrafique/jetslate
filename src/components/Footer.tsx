import React from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import BackToTop from "./BackToTop";

export default function Footer() {
  return (
    <>
      <footer className="wpr-footer-area mb--16">
        <div className="container">
          <div 
            className="section-inner border"
            style={{ 
              padding: "36px 40px 22px 40px", 
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

            {/* Main Footer Content Grid - Harmonious Equal Columns */}
            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "1.25fr 1fr 1fr 1fr", 
                gap: "32px",
                alignItems: "start",
                paddingBottom: "24px",
                borderBottom: "1px solid #2E2E2E"
              }}
              className="footer-main-grid"
            >
              {/* Column 1: Brand & Overview */}
              <div>
                <div style={{ marginBottom: "12px" }}>
                  <BrandLogo isDark={false} size="footer" />
                </div>
                <p className="footer-description site-description" style={{ fontSize: "13px", color: "#ded9cf", lineHeight: 1.55, marginBottom: "12px", maxWidth: "320px" }}>
                  Senior Full-Stack Software Architect engineering production-grade Next.js web applications, Flutter mobile apps, and automated QA testing frameworks in Vehari, Punjab, Pakistan.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "12.5px", color: "#F8F5EF" }}>
                  <div>
                    <span style={{ fontWeight: 700 }}>📧 Email:</span>{" "}
                    <a 
                      href="mailto:contact@jetslate.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: "#C9A84C", textDecoration: "none", fontWeight: 700 }}
                    >
                      contact@jetslate.com
                    </a>
                  </div>
                  <div>
                    <span style={{ fontWeight: 700 }}>📞 Phone:</span>{" "}
                    <a 
                      href="tel:+14196228499" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: "#C9A84C", textDecoration: "none", fontWeight: 700 }}
                    >
                      +1 (419) 622-8499
                    </a>
                  </div>
                  <address className="mailing-address physical-address" style={{ fontStyle: "normal", margin: "4px 0 0 0", color: "#ded9cf", fontSize: "12px", lineHeight: 1.5 }}>
                    <span style={{ fontWeight: 700, color: "#F8F5EF" }}>📍 Physical &amp; Mailing Address:</span><br />
                    Street 3, Peoples Colony, Vehari, Punjab 61100, Pakistan
                  </address>
                  <div className="parent-company parent-entity" style={{ marginTop: "6px", fontSize: "11px", color: "#E8D6B3", lineHeight: 1.4 }}>
                    <strong>Parent Company / Operating Entity:</strong> Jet Slate Engineering Consulting (Private Entity). Operating entity for jetslate.com.
                  </div>
                </div>
              </div>

              {/* Column 2: Engineering Services */}
              <div>
                <h4 style={{ fontSize: "13px", fontWeight: 800, color: "#F8F5EF", letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 14px 0", height: "18px", display: "flex", alignItems: "center" }}>
                  Engineering Services
                </h4>
                <ul className="footer-link-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px", fontSize: "13px" }}>
                  <li style={{ margin: 0, padding: 0, lineHeight: 1.35 }}><Link href="/services/full-stack-web-development" style={{ color: "#ded9cf", textDecoration: "none", fontSize: "13px", lineHeight: 1.35, display: "inline-block", padding: "1px 0" }}>Full-Stack Web Development</Link></li>
                  <li style={{ margin: 0, padding: 0, lineHeight: 1.35 }}><Link href="/services/mobile-app-development" style={{ color: "#ded9cf", textDecoration: "none", fontSize: "13px", lineHeight: 1.35, display: "inline-block", padding: "1px 0" }}>Flutter Mobile Apps</Link></li>
                  <li style={{ margin: 0, padding: 0, lineHeight: 1.35 }}><Link href="/services/qa-automation" style={{ color: "#ded9cf", textDecoration: "none", fontSize: "13px", lineHeight: 1.35, display: "inline-block", padding: "1px 0" }}>QA &amp; Automated Testing</Link></li>
                  <li style={{ margin: 0, padding: 0, lineHeight: 1.35 }}><Link href="/services/cloud-devops" style={{ color: "#ded9cf", textDecoration: "none", fontSize: "13px", lineHeight: 1.35, display: "inline-block", padding: "1px 0" }}>Cloud Architecture &amp; DevOps</Link></li>
                  <li style={{ margin: 0, padding: 0, lineHeight: 1.35 }}><Link href="/services/pos-desktop-software" style={{ color: "#ded9cf", textDecoration: "none", fontSize: "13px", lineHeight: 1.35, display: "inline-block", padding: "1px 0" }}>Custom POS &amp; ERP Systems</Link></li>
                  <li style={{ margin: 0, padding: 0, lineHeight: 1.35 }}><Link href="/services/ai-agents-llm" style={{ color: "#ded9cf", textDecoration: "none", fontSize: "13px", lineHeight: 1.35, display: "inline-block", padding: "1px 0" }}>AI Agents &amp; Automation</Link></li>
                  <li style={{ margin: 0, padding: 0, lineHeight: 1.35 }}><Link href="/services" style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none", fontSize: "13px", lineHeight: 1.35, display: "inline-block", padding: "1px 0" }}>All 8 Engineering Services →</Link></li>
                </ul>
              </div>

              {/* Column 3: Company & Pricing */}
              <div>
                <h4 style={{ fontSize: "13px", fontWeight: 800, color: "#F8F5EF", letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 14px 0", height: "18px", display: "flex", alignItems: "center" }}>
                  Company &amp; Pricing
                </h4>
                <ul className="footer-link-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px", fontSize: "13px" }}>
                  <li style={{ margin: 0, padding: 0, lineHeight: 1.35 }}><Link href="/about" style={{ color: "#ded9cf", textDecoration: "none", fontSize: "13px", lineHeight: 1.35, display: "inline-block", padding: "1px 0" }}>About Jet Slate</Link></li>
                  <li style={{ margin: 0, padding: 0, lineHeight: 1.35 }}><Link href="/services" style={{ color: "#ded9cf", textDecoration: "none", fontSize: "13px", lineHeight: 1.35, display: "inline-block", padding: "1px 0" }}>Solutions &amp; Architecture</Link></li>
                  <li style={{ margin: 0, padding: 0, lineHeight: 1.35 }}><Link href="/pricing" style={{ color: "#ded9cf", textDecoration: "none", fontSize: "13px", lineHeight: 1.35, display: "inline-block", padding: "1px 0" }}>Transparent Pricing &amp; Retainers</Link></li>
                  <li style={{ margin: 0, padding: 0, lineHeight: 1.35 }}><Link href="/blog" style={{ color: "#ded9cf", textDecoration: "none", fontSize: "13px", lineHeight: 1.35, display: "inline-block", padding: "1px 0" }}>Engineering Blog &amp; Insights</Link></li>
                  <li style={{ margin: 0, padding: 0, lineHeight: 1.35 }}><Link href="/authors" style={{ color: "#ded9cf", textDecoration: "none", fontSize: "13px", lineHeight: 1.35, display: "inline-block", padding: "1px 0" }}>Authors &amp; Engineering Team</Link></li>
                  <li style={{ margin: 0, padding: 0, lineHeight: 1.35 }}><Link href="/contact" style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none", fontSize: "13px", lineHeight: 1.35, display: "inline-block", padding: "1px 0" }}>Start a Project Consultation →</Link></li>
                </ul>
              </div>

              {/* Column 4: Legal & Policies */}
              <div>
                <h4 style={{ fontSize: "13px", fontWeight: 800, color: "#F8F5EF", letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 14px 0", height: "18px", display: "flex", alignItems: "center" }}>
                  Legal &amp; Governance
                </h4>
                <ul className="footer-link-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px", fontSize: "13px" }}>
                  <li style={{ margin: 0, padding: 0, lineHeight: 1.35 }}><Link href="/terms-of-service" style={{ color: "#ded9cf", textDecoration: "none", fontSize: "13px", lineHeight: 1.35, display: "inline-block", padding: "1px 0" }}>Terms of Service &amp; Conditions</Link></li>
                  <li style={{ margin: 0, padding: 0, lineHeight: 1.35 }}><Link href="/privacy-policy" style={{ color: "#ded9cf", textDecoration: "none", fontSize: "13px", lineHeight: 1.35, display: "inline-block", padding: "1px 0" }}>Privacy &amp; Data Security</Link></li>
                  <li style={{ margin: 0, padding: 0, lineHeight: 1.35 }}><Link href="/contact" style={{ color: "#ded9cf", textDecoration: "none", fontSize: "13px", lineHeight: 1.35, display: "inline-block", padding: "1px 0" }}>Executive Contact Inquiries</Link></li>
                  <li style={{ margin: 0, padding: 0, lineHeight: 1.35 }}><Link href="/pricing" style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none", fontSize: "13px", lineHeight: 1.35, display: "inline-block", padding: "1px 0" }}>View Packages &amp; Pricing →</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom Copyright, Legal Navigation & Social Bar */}
            <div 
              style={{ 
                paddingTop: "18px",
                display: "flex", 
                flexDirection: "column",
                gap: "14px",
              }}
              className="footer-bottom-bar"
            >
              {/* Trust & Legal Quick Menu Navigation Bar */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", borderBottom: "1px solid #2E2E2E", paddingBottom: "12px" }}>
                <nav aria-label="Footer Trust & Legal Navigation" className="footer-trust-nav" style={{ display: "flex", gap: "10px", fontSize: "12px", color: "#E8D6B3", flexWrap: "wrap", alignItems: "center" }}>
                  <Link href="/privacy-policy" style={{ color: "#ded9cf", textDecoration: "none", fontWeight: 600 }}>Privacy Policy</Link>
                  <span style={{ color: "#383838" }}>•</span>
                  <Link href="/terms-of-service" style={{ color: "#ded9cf", textDecoration: "none", fontWeight: 600 }}>Terms of Service</Link>
                  <span style={{ color: "#383838" }}>•</span>
                  <Link href="/authors" style={{ color: "#ded9cf", textDecoration: "none", fontWeight: 600 }}>Authors &amp; Team</Link>
                  <span style={{ color: "#383838" }}>•</span>
                  <Link href="/contact" style={{ color: "#ded9cf", textDecoration: "none", fontWeight: 600 }}>Contact</Link>
                  <span style={{ color: "#383838" }}>•</span>
                  <a href="#top" className="back-to-top-link" id="footer-back-to-top" style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none" }}>Back to Top ↑</a>
                </nav>

                <form action="/search" method="GET" style={{ margin: 0, display: "flex", alignItems: "center" }}>
                  <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                    <input
                      type="search"
                      name="q"
                      placeholder="Search website..."
                      style={{
                        height: "32px",
                        padding: "0 32px 0 10px",
                        borderRadius: "6px",
                        border: "1px solid #383838",
                        background: "#111111",
                        fontSize: "12px",
                        color: "#F8F5EF",
                        outline: "none"
                      }}
                    />
                    <button
                      type="submit"
                      aria-label="Search"
                      style={{
                        position: "absolute",
                        right: "2px",
                        top: "2px",
                        bottom: "2px",
                        width: "28px",
                        height: "28px",
                        border: "none",
                        background: "transparent",
                        color: "#C9A84C",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              {/* Social Channels & Copyright Row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px", flexWrap: "wrap" }}>
                  <a href="https://github.com/jetslateue" target="_blank" rel="me noopener noreferrer" style={{ color: "#F8F5EF", fontWeight: 700, textDecoration: "none" }}>GitHub</a>
                  <span style={{ color: "#383838" }}>•</span>
                  <a href="https://linkedin.com/in/jetslateue" target="_blank" rel="me noopener noreferrer" style={{ color: "#F8F5EF", fontWeight: 700, textDecoration: "none" }}>LinkedIn</a>
                  <span style={{ color: "#383838" }}>•</span>
                  <a href="https://twitter.com/jetslate" target="_blank" rel="me noopener noreferrer" style={{ color: "#F8F5EF", fontWeight: 700, textDecoration: "none" }}>Twitter / X</a>
                  <span style={{ color: "#383838" }}>•</span>
                  <a href="https://www.facebook.com/jetslateue/" target="_blank" rel="me noopener noreferrer" style={{ color: "#F8F5EF", fontWeight: 700, textDecoration: "none" }}>Facebook</a>
                  <span style={{ color: "#383838" }}>•</span>
                  <a href="https://www.youtube.com/@jetslateue" target="_blank" rel="me noopener noreferrer" style={{ color: "#F8F5EF", fontWeight: 700, textDecoration: "none" }}>YouTube</a>
                  <span style={{ color: "#383838" }}>•</span>
                  <a href="https://www.instagram.com/jetslateue/" target="_blank" rel="me noopener noreferrer" style={{ color: "#F8F5EF", fontWeight: 700, textDecoration: "none" }}>Instagram</a>
                  <span style={{ color: "#383838" }}>•</span>
                  <a href="https://www.pinterest.com/jetslateue/" target="_blank" rel="me noopener noreferrer" style={{ color: "#F8F5EF", fontWeight: 700, textDecoration: "none" }}>Pinterest</a>
                  <span style={{ color: "#383838" }}>•</span>
                  <a href="https://www.tiktok.com/@jetslateue" target="_blank" rel="me noopener noreferrer" style={{ color: "#F8F5EF", fontWeight: 700, textDecoration: "none" }}>TikTok</a>
                  <span style={{ color: "#383838" }}>•</span>
                  <a href="/rss.xml" target="_blank" rel="alternate" type="application/rss+xml" style={{ color: "#F97316", fontWeight: 700, textDecoration: "none" }}>RSS Feed</a>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
                  {/* DMCA Protection Badge for EEAT Security Verification */}
                  <a 
                    href="https://www.dmca.com/Protection/Status.aspx?ID=jetslate-com" 
                    title="DMCA.com Protection Status" 
                    aria-label="DMCA.com Protection Status"
                    className="dmca-badge" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center" }}
                  >
                    <img 
                      src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-01.png?ID=jetslate-com" 
                      alt="DMCA.com Protection Status" 
                      width="100" 
                      height="20" 
                      loading="lazy"
                      decoding="async"
                      style={{ display: "block" }} 
                    />
                  </a>

                  <p style={{ margin: 0, fontSize: "12px", color: "#E8D6B3", textAlign: "center" }}>
                    © {new Date().getFullYear()} Jet Slate. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back-to-Top Button on Bottom Right */}
      <BackToTop />
    </>
  );
}

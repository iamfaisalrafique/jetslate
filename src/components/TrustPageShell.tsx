import Link from "next/link";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface TrustPageShellProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}

export default function TrustPageShell({ eyebrow, title, description, children }: TrustPageShellProps) {
  return (
    <main style={{ background: "#111111", minHeight: "100vh" }}>
      <Header />
      <section className="wpr-banner-area breadcrumb mb--16">
        <div className="container">
          <div
            className="section-inner border"
            style={{
              padding: "48px",
              position: "relative",
              borderRadius: 0,
              background: "#161616",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
            }}
          >
            <span className="square-shape top-left"></span>
            <span className="square-shape top-right"></span>
            <span className="square-shape bottom-left"></span>
            <span className="square-shape bottom-right"></span>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#E8D6B3", marginBottom: "18px" }}>
              <Link href="/" style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none" }}>Home</Link>
              <span>/</span>
              <span style={{ color: "#F8F5EF", fontWeight: 600 }}>{eyebrow}</span>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "9999px",
                background: "rgba(201, 168, 76, 0.06)",
                border: "1px solid rgba(201, 168, 76, 0.18)",
                marginBottom: "18px",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A84C", display: "inline-block" }}></span>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "#C9A84C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {eyebrow}
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(28px, 3.8vw, 46px)",
                fontWeight: 800,
                color: "#F8F5EF",
                lineHeight: 1.18,
                letterSpacing: "-0.025em",
                margin: "0 0 16px 0",
                textTransform: "uppercase",
                maxWidth: "920px",
              }}
            >
              {title}
            </h1>

            <p style={{ fontSize: "16px", color: "#ded9cf", lineHeight: 1.65, margin: 0, maxWidth: "820px" }}>
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="mb--16">
        <div className="container">
          <div
            className="section-inner border"
            style={{ padding: "48px", position: "relative", borderRadius: 0, background: "#161616" }}
          >
            <span className="square-shape top-left"></span>
            <span className="square-shape top-right"></span>
            <span className="square-shape bottom-left"></span>
            <span className="square-shape bottom-right"></span>
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CaseStudyData } from "@/src/types";

interface Props {
  project: CaseStudyData;
}

export default function CaseStudyInteractiveView({ project }: Props) {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const activePhase = project.phases[activePhaseIndex] || project.phases[0];

  return (
    <div style={{ padding: 0, margin: 0 }}>
      <section className="wpr-banner-area">
        <div className="container">
          <div 
            className="section-inner border"
            style={{
              padding: "48px 48px",
              position: "relative",
              borderRadius: 0,
              background: "#161616",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)"
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
              <Link href="/work" style={{ color: "#C9A84C", fontWeight: 700, textDecoration: "none" }}>Work</Link>
              <span>/</span>
              <span style={{ color: "#F8F5EF", fontWeight: 600 }}>{project.title}</span>
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
                {project.category}
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              style={{ 
                fontSize: "clamp(26px, 3.6vw, 42px)", 
                fontWeight: 800, 
                color: "#F8F5EF", 
                lineHeight: 1.2, 
                letterSpacing: "-0.025em", 
                margin: "0 0 16px 0",
                textTransform: "uppercase",
                maxWidth: "940px"
              }}
            >
              {project.title}
            </h1>

            {/* Subtitle */}
            <p 
              style={{ 
                fontSize: "16px", 
                color: "#ded9cf", 
                lineHeight: 1.65, 
                margin: "0 0 28px 0",
                maxWidth: "840px"
              }}
            >
              {project.heroDesc}
            </p>

            {/* Metadata Bar (Client, Role, Year) */}
            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", 
                gap: "16px", 
                padding: "20px 24px", 
                borderRadius: "12px", 
                background: "#111111", 
                border: "1px solid #2E2E2E",
                marginBottom: "36px"
              }}
            >
              <div>
                <div style={{ fontSize: "11px", color: "#E8D6B3", fontWeight: 700, textTransform: "uppercase" }}>Client</div>
                <div style={{ fontSize: "14px", fontWeight: 800, color: "#F8F5EF" }}>{project.client}</div>
              </div>
              <div>
                <div style={{ fontSize: "11px", color: "#E8D6B3", fontWeight: 700, textTransform: "uppercase" }}>Engineering Role</div>
                <div style={{ fontSize: "14px", fontWeight: 800, color: "#C9A84C" }}>{project.role}</div>
              </div>
              <div>
                <div style={{ fontSize: "11px", color: "#E8D6B3", fontWeight: 700, textTransform: "uppercase" }}>Deployment Year</div>
                <div style={{ fontSize: "14px", fontWeight: 800, color: "#F8F5EF" }}>{project.year}</div>
              </div>
            </div>

            {/* Featured Image Banner */}
            <div 
              style={{ 
                borderRadius: "14px", 
                overflow: "hidden", 
                marginBottom: "40px", 
                border: "1px solid #2E2E2E", 
                background: "linear-gradient(135deg, #1C1C1C 0%, #111111 100%)",
                boxShadow: "0 8px 30px rgba(201, 168, 76, 0.12)"
              }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                width={1200}
                height={675}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                style={{ 
                  width: "100%", 
                  height: "auto",
                  maxHeight: "520px", 
                  objectFit: "cover", 
                  display: "block" 
                }}
              />
            </div>

            {/* Executive Summary */}
            <div style={{ maxWidth: "900px", marginBottom: "44px" }}>
              <div 
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "8px", 
                  padding: "4px 14px", 
                  borderRadius: "9999px", 
                  background: "rgba(201, 168, 76, 0.06)", 
                  border: "1px solid rgba(201, 168, 76, 0.15)",
                  marginBottom: "14px"
                }}
              >
                <span style={{ fontSize: "11px", fontWeight: 800, color: "#C9A84C", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  EXECUTIVE BRIEFING
                </span>
              </div>
              <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#F8F5EF", marginBottom: "14px", textTransform: "uppercase" }}>
                Problem Space &amp; Project Scope
              </h2>
              <p style={{ fontSize: "15.5px", color: "#ded9cf", lineHeight: 1.75, margin: 0 }}>
                {project.executiveSummary}
              </p>
            </div>

            {/* 3. Interactive 4-Phase Lifecycle Architecture Explorer */}
            <div style={{ marginBottom: "50px" }}>
              <div style={{ marginBottom: "20px" }}>
                <div 
                  style={{ 
                    display: "inline-flex", 
                    alignItems: "center", 
                    gap: "8px", 
                    padding: "4px 14px", 
                    borderRadius: "9999px", 
                    background: "rgba(201, 168, 76, 0.06)", 
                    border: "1px solid rgba(201, 168, 76, 0.15)",
                    marginBottom: "12px"
                  }}
                >
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A84C", boxShadow: "0 0 8px #C9A84C", display: "inline-block" }}></span>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#C9A84C", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    INTERACTIVE ENGINEERING LIFECYCLE
                  </span>
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#F8F5EF", textTransform: "uppercase", margin: "0 0 8px 0" }}>
                  Explore the 4 Architecture &amp; Delivery Phases
                </h3>
                <p style={{ fontSize: "14px", color: "#E8D6B3", margin: 0 }}>
                  Click any phase below to inspect specific architectural deliverables, challenges encountered, and technical solutions implemented.
                </p>
              </div>

              {/* Phase Switcher Tabs */}
              <div 
                style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
                  gap: "10px", 
                  marginBottom: "24px" 
                }}
              >
                {project.phases.map((phase, idx) => {
                  const isSelected = activePhaseIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActivePhaseIndex(idx)}
                      style={{
                        padding: "16px 18px",
                        borderRadius: "12px",
                        border: isSelected ? "2px solid #C9A84C" : "1px solid #2E2E2E",
                        background: isSelected ? "#F0F6FF" : "#FFFFFF",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all 0.2s ease",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                        boxShadow: isSelected ? "0 4px 14px rgba(201, 168, 76, 0.12)" : "0 1px 3px rgba(0,0,0,0.02)"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontSize: "12px", fontWeight: 800, color: isSelected ? "#C9A84C" : "#64748B" }}>
                          PHASE {phase.number}
                        </span>
                        {isSelected && (
                          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A84C" }}></span>
                        )}
                      </div>
                      <div style={{ fontSize: "13.5px", fontWeight: 700, color: isSelected ? "#C9A84C" : "#0F172A", lineHeight: 1.2 }}>
                        {phase.name}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Phase Deep-Dive Card */}
              <div 
                style={{
                  border: "1px solid #C9A84C",
                  borderRadius: "16px",
                  padding: "36px 32px",
                  background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
                  boxShadow: "0 10px 30px rgba(201, 168, 76, 0.08)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <span 
                    style={{ 
                      padding: "4px 12px", 
                      borderRadius: "9999px", 
                      background: "#C9A84C", 
                      color: "#FFFFFF", 
                      fontSize: "11px", 
                      fontWeight: 800, 
                      letterSpacing: "0.05em" 
                    }}
                  >
                    PHASE {activePhase.number} DETAILS
                  </span>
                  <h4 style={{ fontSize: "20px", fontWeight: 800, color: "#F8F5EF", margin: 0 }}>
                    {activePhase.title}
                  </h4>
                </div>

                <p style={{ fontSize: "15px", color: "#ded9cf", lineHeight: 1.65, marginBottom: "28px" }}>
                  {activePhase.summary}
                </p>

                {/* Phase Deliverables Checklist */}
                <div style={{ marginBottom: "28px", padding: "18px 20px", borderRadius: "12px", background: "#161616", border: "1px solid #2E2E2E" }}>
                  <div style={{ fontSize: "12px", fontWeight: 800, color: "#F8F5EF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
                    Key Architectural Deliverables:
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}>
                    {activePhase.deliverables.map((del, dIdx) => (
                      <div key={dIdx} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#ded9cf" }}>
                        <span style={{ color: "#C9A84C", fontWeight: 800 }}>✓</span>
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenge & Solution Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "16px" }}>
                  {/* Challenge Box */}
                  <div 
                    style={{
                      padding: "20px",
                      borderRadius: "12px",
                      background: "#FEF2F2",
                      border: "1px solid #FEE2E2"
                    }}
                  >
                    <div style={{ fontSize: "11px", fontWeight: 800, color: "#DC2626", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                      ⚠️ Technical Challenge
                    </div>
                    <p style={{ fontSize: "13.5px", color: "#991B1B", lineHeight: 1.55, margin: 0 }}>
                      {activePhase.challenge}
                    </p>
                  </div>

                  {/* Solution Box */}
                  <div 
                    style={{
                      padding: "20px",
                      borderRadius: "12px",
                      background: "#F0FDF4",
                      border: "1px solid #DCFCE7"
                    }}
                  >
                    <div style={{ fontSize: "11px", fontWeight: 800, color: "#16A34A", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                      🛡️ Architectural Solution
                    </div>
                    <p style={{ fontSize: "13.5px", color: "#166534", lineHeight: 1.55, margin: 0 }}>
                      {activePhase.solution}
                    </p>
                  </div>
                </div>

                {/* Outcome Callout */}
                <div style={{ marginTop: "16px", padding: "14px 18px", borderRadius: "10px", background: "rgba(201, 168, 76, 0.05)", border: "1px solid rgba(201, 168, 76, 0.15)", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "18px" }}>⚡</span>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#C9A84C" }}>
                    Phase Outcome: {activePhase.outcome}
                  </span>
                </div>
              </div>
            </div>

            {/* 4. Verified Performance Benchmarks */}
            <div style={{ marginBottom: "50px" }}>
              <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#F8F5EF", marginBottom: "18px", textTransform: "uppercase" }}>
                Production Performance &amp; Scalability Benchmarks
              </h3>
              <div 
                style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
                  gap: "20px" 
                }}
              >
                {project.metrics.map((m, idx) => (
                  <div 
                    key={idx}
                    style={{
                      padding: "26px 24px",
                      borderRadius: "14px",
                      background: "#111111",
                      border: "1px solid #2E2E2E",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)"
                    }}
                  >
                    <div style={{ fontSize: "12px", color: "#E8D6B3", fontWeight: 700, textTransform: "uppercase", marginBottom: "8px" }}>
                      {m.label}
                    </div>
                    <div style={{ fontSize: "32px", fontWeight: 800, color: "#C9A84C", marginBottom: "6px", lineHeight: 1 }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: "12.5px", color: "#ded9cf" }}>
                      {m.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Production Tech Stack */}
            <div style={{ marginBottom: "44px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#F8F5EF", marginBottom: "14px", textTransform: "uppercase" }}>
                Production Technology Stack
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {project.techStack.map((tech, idx) => (
                  <span 
                    key={idx}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "8px",
                      background: "#161616",
                      border: "1px solid #383838",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#F8F5EF",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.03)"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 6. Action Bottom Bar */}
            <div 
              style={{ 
                paddingTop: "32px", 
                borderTop: "1px solid #2E2E2E", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between", 
                flexWrap: "wrap", 
                gap: "16px" 
              }}
            >
              <Link 
                href="/work" 
                style={{ 
                  color: "#C9A84C", 
                  fontWeight: 700, 
                  fontSize: "14px", 
                  textDecoration: "none", 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "6px" 
                }}
              >
                <span>← Back to All Case Studies</span>
              </Link>

              <Link 
                href="/contact" 
                className="wpr-btn btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  background: "#C9A84C",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "14px",
                  textDecoration: "none",
                  borderRadius: "9999px",
                  boxShadow: "0 4px 14px rgba(201, 168, 76, 0.25)"
                }}
              >
                <span>Build a Similar Architecture</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

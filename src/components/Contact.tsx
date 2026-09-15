"use client";

import React, { useState } from "react";
import { submitContactInquiryAction } from "@/app/actions";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("subject", "Project Inquiry from Homepage");

    try {
      const res = await submitContactInquiryAction(formData);
      if (res.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(res.message || "Failed to submit form.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("An unexpected error occurred.");
    }
  };

  return (
    <section id="contact" className="wpr-contact-area mb--16">
      <div className="container">
        <div 
          className="section-inner border"
          style={{
            padding: "54px 48px",
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
              gridTemplateColumns: "1fr 1.3fr", 
              gap: "48px",
              alignItems: "start"
            }}
            className="contact-layout-grid"
          >
            {/* Left Column: Direct Details */}
            <div>
              {/* Eyebrow Pill */}
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
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A84C", boxShadow: "0 0 8px #C9A84C", display: "inline-block" }}></span>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#C9A84C", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  START A CONVERSATION
                </span>
              </div>

              <h2 
                style={{ 
                  fontSize: "clamp(26px, 3vw, 38px)", 
                  fontWeight: 800, 
                  color: "#F8F5EF", 
                  lineHeight: 1.2, 
                  letterSpacing: "-0.025em", 
                  margin: "0 0 16px 0",
                  textTransform: "uppercase"
                }}
              >
                Let&apos;s Build Something{" "}
                <span 
                  style={{ 
                    background: "linear-gradient(135deg, #C9A84C 0%, #E8D6B3 100%)", 
                    WebkitBackgroundClip: "text", 
                    WebkitTextFillColor: "transparent",
                    display: "inline-block"
                  }}
                >
                  Exceptional.
                </span>
              </h2>

              <p style={{ fontSize: "15px", color: "#E8D6B3", lineHeight: 1.65, marginBottom: "32px" }}>
                Reach out directly with your project requirements, tech stack questions, or architecture RFP. I typically respond within 12 hours.
              </p>

              {/* Direct Info Blocks */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ background: "#111111", padding: "18px 20px", borderRadius: "12px", border: "1px solid #2E2E2E" }}>
                  <div style={{ fontSize: "11.5px", fontWeight: 800, color: "#C9A84C", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
                    DIRECT EMAIL
                  </div>
                  <a 
                    href="mailto:contact@jetslate.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ fontSize: "15px", fontWeight: 700, color: "#F8F5EF", textDecoration: "none" }}
                  >
                    contact@jetslate.com
                  </a>
                </div>

                <div style={{ background: "#111111", padding: "18px 20px", borderRadius: "12px", border: "1px solid #2E2E2E" }}>
                  <div style={{ fontSize: "11.5px", fontWeight: 800, color: "#C9A84C", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
                    DIRECT TELEPHONE
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ fontSize: "15px", fontWeight: 700, color: "#F8F5EF" }}>
                      <a 
                        href="tel:+14196228499" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: "#F8F5EF", textDecoration: "none" }}
                      >
                        📞 +1 (419) 622-8499
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ background: "#111111", padding: "18px 20px", borderRadius: "12px", border: "1px solid #2E2E2E" }}>
                  <div style={{ fontSize: "11.5px", fontWeight: 800, color: "#C9A84C", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
                    HEADQUARTERS &amp; PHYSICAL ADDRESS
                  </div>
                  <address style={{ fontStyle: "normal", fontSize: "14.5px", fontWeight: 700, color: "#F8F5EF", marginBottom: "4px", lineHeight: 1.4 }}>
                    Street 3, Peoples Colony, Vehari, Punjab, Pakistan
                  </address>
                  <div style={{ fontSize: "12.5px", color: "#E8D6B3", lineHeight: 1.45 }}>
                    Operating Entity: Jet Slate Engineering Consulting • Available worldwide for remote contracts &amp; technical advisory.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean White Form */}
            <div 
              style={{ 
                background: "#111111", 
                border: "1px solid #2E2E2E", 
                borderRadius: "16px", 
                padding: "36px 32px",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)"
              }}
            >
              <form id="contact-form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <input type="text" name="website" className="honeypot-field" tabIndex={-1} autoComplete="off" aria-label="Leave this field empty" style={{ display: "none" }} />

                <div>
                  <label htmlFor="form-name" style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#ded9cf", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    id="form-name" 
                    name="name" 
                    placeholder="e.g. JoyHouli Sutherland" 
                    required 
                    style={{ 
                      width: "100%", 
                      padding: "13px 16px", 
                      borderRadius: "8px", 
                      border: "1px solid #383838", 
                      background: "#161616", 
                      color: "#F8F5EF",
                      fontSize: "16px",
                      outline: "none"
                    }} 
                  />
                </div>

                <div>
                  <label htmlFor="form-email" style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#ded9cf", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Your Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="form-email" 
                    name="email" 
                    placeholder="e.g. name@company.com" 
                    required 
                    style={{ 
                      width: "100%", 
                      padding: "13px 16px", 
                      borderRadius: "8px", 
                      border: "1px solid #383838", 
                      background: "#161616", 
                      color: "#F8F5EF",
                      fontSize: "16px",
                      outline: "none"
                    }} 
                  />
                </div>

                <div>
                  <label htmlFor="form-message" style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#ded9cf", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "8px" }}>
                    Project Requirements &amp; Scope *
                  </label>
                  <textarea 
                    id="form-message" 
                    name="message" 
                    rows={4} 
                    placeholder="Describe your web, mobile, database, or automated QA requirements..." 
                    required 
                    style={{ 
                      width: "100%", 
                      padding: "13px 16px", 
                      borderRadius: "8px", 
                      border: "1px solid #383838", 
                      background: "#161616", 
                      color: "#F8F5EF",
                      fontSize: "16px",
                      outline: "none",
                      resize: "vertical"
                    }} 
                  />
                </div>

                {status === "success" && (
                  <div style={{ padding: "14px 18px", background: "rgba(201, 168, 76, 0.1)", border: "1px solid #C9A84C", color: "#E8D6B3", borderRadius: "8px", fontSize: "13.5px", fontWeight: 700 }}>
                    ✓ Thank you! Your message has been sent successfully. The Jet Slate architectural team will get back to you shortly.
                  </div>
                )}

                {status === "error" && (
                  <div style={{ padding: "14px 18px", background: "#FEF2F2", border: "1px solid #FECACA", color: "#991B1B", borderRadius: "8px", fontSize: "13.5px", fontWeight: 700 }}>
                    ✕ {errorMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === "submitting"} 
                  style={{ 
                    padding: "14px 28px", 
                    borderRadius: "9999px", 
                    background: "#C9A84C", 
                    color: "#111111", 
                    border: "none", 
                    fontSize: "14px", 
                    fontWeight: 800, 
                    cursor: status === "submitting" ? "not-allowed" : "pointer",
                    boxShadow: "0 6px 18px rgba(201, 168, 76, 0.3)",
                    transition: "all 0.25s ease",
                    opacity: status === "submitting" ? 0.7 : 1
                  }}
                  className="contact-submit-btn"
                >
                  {status === "submitting" ? "Sending Message..." : "Send Message →"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .contact-submit-btn:hover {
          background: #E8D6B3 !important;
          color: #111111 !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(201, 168, 76, 0.4) !important;
        }
        @media (max-width: 900px) {
          .contact-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 575px) {
          .contact-submit-btn {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}

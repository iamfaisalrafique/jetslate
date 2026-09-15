import React from "react";

interface TechBrand {
  name: string;
  tag: string;
  color: string;
  icon: React.ReactNode;
}

export default function BrandMarquee() {
  const techStack: TechBrand[] = [
    {
      name: "Next.js",
      tag: "Full-Stack Web",
      color: "#000000",
      icon: (
        <svg width="22" height="22" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="90" fill="#000000" />
          <path d="M149.508 157.438L69.1418 54H54V125.97H66.1136V69.3835L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="#FFFFFF" />
          <rect x="115" y="54" width="12" height="72" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: "React",
      tag: "Frontend",
      color: "#61DAFB",
      icon: (
        <svg width="24" height="22" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    },
    {
      name: "Flutter",
      tag: "iOS & Android",
      color: "#02569B",
      icon: (
        <svg width="18" height="22" viewBox="0 0 166 202" fill="none">
          <path d="M102.5 0L0 102.5L31.5 134L165.5 0H102.5Z" fill="#47C5FB" />
          <path d="M102.5 99.5L50.5 151.5L82 183L165.5 99.5H102.5Z" fill="#47C5FB" />
          <path d="M82 183L50.5 151.5L102.5 99.5L134 131L82 183Z" fill="#00569E" />
          <path d="M102.5 202H165.5L118 154.5L86.5 186L102.5 202Z" fill="#00B5F8" />
        </svg>
      )
    },
    {
      name: "TypeScript",
      tag: "Strict Types",
      color: "#3178C6",
      icon: (
        <svg width="22" height="22" viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="20" fill="#3178C6" />
          <path d="M74.5 98.7c2.5 1.5 5.5 2.5 8.7 2.5 7.8 0 12.8-4.2 12.8-11.8 0-6.8-4-10.2-11.3-13.4l-3.9-1.7c-9.5-4.1-14-9.3-14-18.4 0-11.2 8.7-19.3 22.3-19.3 4.2 0 8 1 10.8 2.3l-2.7 8.8c-2.3-1.1-5-1.9-8.3-1.9-7.1 0-11.6 3.9-11.6 9.8 0 5.8 3.5 8.8 10.3 11.8l3.9 1.7c10.5 4.6 15.3 9.8 15.3 20.1 0 12.3-9.5 20.5-24.1 20.5-5.2 0-9.9-1.2-13.3-2.8l2.9-9.1zM28.3 47.7H41v60.9h11.2V47.7H65V37.9H28.3v9.8z" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: "PostgreSQL",
      tag: "Database",
      color: "#336791",
      icon: (
        <svg width="22" height="22" viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="60" fill="#336791" />
          <path d="M96.3 75.8c-1.3-.4-3.1-.7-5.3-.8-1.5-.1-3.3 0-5.4.1-.7-3.9-2.3-7.5-4.8-10.4-2.8-3.3-6.5-5.4-10.7-6.1 1.7-2.6 2.6-5.8 2.6-9.1 0-8.9-6.9-16.1-15.5-16.1S42 40.6 42 49.5c0 3.3.9 6.4 2.6 9.1-4.2.7-7.9 2.8-10.7 6.1-2.5 2.9-4.1 6.5-4.8 10.4-2.1-.1-3.9-.2-5.4-.1-2.2.1-4 .4-5.3.8-3.4 1-5.4 3.7-5.4 7.2 0 4.3 3.1 7.8 7.3 8.3 1.2.1 2.5.2 4 .2 5.1 0 11.5-.7 18.2-2.1 4.5 4.8 10.7 7.8 17.5 7.8s13-3 17.5-7.8c6.7 1.4 13.1 2.1 18.2 2.1 1.5 0 2.8-.1 4-.2 4.2-.5 7.3-4 7.3-8.3 0-3.5-2-6.2-5.4-7.2z" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: "Node.js",
      tag: "Backend API",
      color: "#539E43",
      icon: (
        <svg width="22" height="22" viewBox="0 0 128 128" fill="none">
          <path d="M64 12L16 39.7v55.4L64 122.9l48-27.7V39.7L64 12z" fill="#539E43" />
          <path d="M64 24.3l37.2 21.5v43L64 110.3 26.8 88.8v-43L64 24.3z" fill="#333333" />
          <path d="M64 36.6l26.6 15.4v30.7L64 98.1 37.4 82.7V52L64 36.6z" fill="#539E43" />
        </svg>
      )
    },
    {
      name: "Playwright",
      tag: "QA Automation",
      color: "#45BA4B",
      icon: (
        <svg width="22" height="22" viewBox="0 0 128 128" fill="none">
          <circle cx="50" cy="64" r="38" fill="#45BA4B" />
          <circle cx="78" cy="64" r="38" fill="#E84438" fillOpacity="0.85" />
          <circle cx="64" cy="50" r="10" fill="#FFFFFF" />
          <path d="M46 76c6 6 18 6 24 0" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: "Prisma",
      tag: "ORM",
      color: "#2D3748",
      icon: (
        <svg width="20" height="22" viewBox="0 0 128 128" fill="none">
          <path d="M64 14l44 30v54L64 120 20 98V44l44-30z" fill="#0C344B" />
          <path d="M64 14l44 30-44 76-44-76 44-30z" fill="#16A394" />
          <path d="M64 14v106l44-22V44L64 14z" fill="#5A67D8" fillOpacity="0.4" />
        </svg>
      )
    },
    {
      name: "Docker",
      tag: "DevOps",
      color: "#2496ED",
      icon: (
        <svg width="24" height="22" viewBox="0 0 128 128" fill="none">
          <path d="M124.5 59.2c-2.3-1.6-7.2-2.7-12-1.3-.8-6.1-4.8-11.2-10.4-14.2l-3.2-1.7-2 3c-4.1 6.1-4.9 14.1-2.2 20.8-2.6 1.4-6.4 2.8-10.8 3.1H5.4c-2.8 14.3 2.1 28.5 12.8 37.4C30.3 118.4 51.5 121 73 118c21.8-3.1 40-15.6 47.9-36.4 6.8-.7 11.7-4.1 13.9-9.9.5-1.4.6-2.9.4-4.4-.1-2.8-3.4-6.2-10.7-8.1z" fill="#2496ED" />
          <rect x="49" y="52" width="12" height="10" rx="1.5" fill="#2496ED" />
          <rect x="34" y="52" width="12" height="10" rx="1.5" fill="#2496ED" />
          <rect x="64" y="52" width="12" height="10" rx="1.5" fill="#2496ED" />
          <rect x="49" y="39" width="12" height="10" rx="1.5" fill="#2496ED" />
          <rect x="64" y="39" width="12" height="10" rx="1.5" fill="#2496ED" />
          <rect x="49" y="26" width="12" height="10" rx="1.5" fill="#2496ED" />
          <rect x="19" y="52" width="12" height="10" rx="1.5" fill="#2496ED" />
        </svg>
      )
    },
    {
      name: "Python & AI",
      tag: "LLMs & ML",
      color: "#3776AB",
      icon: (
        <svg width="22" height="22" viewBox="0 0 128 128" fill="none">
          <path d="M63.6 6.8c-28.7 0-26.9 12.4-26.9 12.4l.1 12.9h27.4v3.9H25.3S6.8 33.9 6.8 62.6c0 28.8 16.1 27.8 16.1 27.8h9.6v-13.4s-.5-16.1 15.8-16.1h27.1v-3.9H47.8s-13.4.7-13.4-13.7c0-14.4 12.7-14 12.7-14h36.1s12.5.3 12.5-12.2c.1-12.4-12.6-10.3-32.1-10.3z" fill="#3776AB" />
          <path d="M64.4 121.2c28.7 0 26.9-12.4 26.9-12.4l-.1-12.9H63.8V92h38.9s18.5 2.1 18.5-26.6c0-28.8-16.1-27.8-16.1-27.8h-9.6v13.4s.5 16.1-15.8 16.1H62.6v3.9h27.6s13.4-.7 13.4 13.7c0 14.4-12.7 14-12.7 14H54.8s-12.5-.3-12.5 12.2c0 12.4 12.6 10.3 32.1 10.3z" fill="#FFD438" />
          <circle cx="48.5" cy="20.5" r="3.5" fill="#FFFFFF" />
          <circle cx="79.5" cy="107.5" r="3.5" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: "Tailwind CSS",
      tag: "UI Styling",
      color: "#06B6D4",
      icon: (
        <svg width="22" height="22" viewBox="0 0 128 128" fill="none">
          <path d="M32 64C36.4 46.4 46.4 37.6 62 37.6C81.5 37.6 84.7 53.1 94.5 56.6C101.1 59 106.9 54.6 112 43.4C107.6 61 97.6 69.8 82 69.8C62.5 69.8 59.3 54.3 49.5 50.8C42.9 48.4 37.1 52.8 32 64ZM16 96C20.4 78.4 30.4 69.6 46 69.6C65.5 69.6 68.7 85.1 78.5 88.6C85.1 91 90.9 86.6 96 75.4C91.6 93 81.6 101.8 66 101.8C46.5 101.8 43.3 86.3 33.5 82.8C26.9 80.4 21.1 84.8 16 96Z" fill="#E8D6B3" />
        </svg>
      )
    },
    {
      name: "Jet Slate",
      tag: "Enterprise Partner",
      color: "#C9A84C",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    {
      name: "UR Pharmacy POS",
      tag: "Enterprise System",
      color: "#059669",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      )
    },
    {
      name: "Sunehri Fintech",
      tag: "Web & Mobile Portal",
      color: "#D97706",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    }
  ];

  return (
    <div className="modern-tech-marquee-section" style={{ margin: 0, padding: 0 }}>
      <div className="container">
        <div className="section-inner border square-dot" style={{ padding: "16px 24px", display: "flex", alignItems: "center", gap: "20px", background: "#161616" }}>
          {/* Left Live Badge */}
          <div className="left-stack-badge">
            <span className="live-dot"></span>
            <span>Tech Stack &amp; Clients</span>
          </div>

          {/* Marquee Track */}
          <div className="tech-marquee-container">
            <div className="tech-marquee-track">
              {techStack.map((tech, idx) => (
                <div key={`tech-1-${idx}`} className="tech-brand-card">
                  <div className="tech-icon-wrap">{tech.icon}</div>
                  <span className="tech-name">{tech.name}</span>
                  <span className="tech-sub">{tech.tag}</span>
                </div>
              ))}
              {techStack.map((tech, idx) => (
                <div key={`tech-2-${idx}`} className="tech-brand-card">
                  <div className="tech-icon-wrap">{tech.icon}</div>
                  <span className="tech-name">{tech.name}</span>
                  <span className="tech-sub">{tech.tag}</span>
                </div>
              ))}
            </div>
          </div>

          <span className="square-shape top-left"></span>
          <span className="square-shape bottom-left"></span>
          <span className="square-shape top-right"></span>
          <span className="square-shape bottom-right"></span>
        </div>
      </div>
    </div>
  );
}

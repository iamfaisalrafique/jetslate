import { topicalClusters } from "@/src/lib/topical-map-data";

export interface PublicSiteLink {
  href: string;
  label: string;
  group: string;
  description?: string;
}

export const coreSiteLinks: PublicSiteLink[] = [
  { href: "/", label: "Home", group: "Core pages", description: "Official Jet Slate software architecture & cloud engineering agency homepage." },
  { href: "/about", label: "About Jet Slate", group: "Core pages", description: "Enterprise background, architectural philosophy, and engineering track record." },
  { href: "/services", label: "Services", group: "Core pages", description: "Software architecture, Next.js web applications, Flutter mobile apps, QA automation, and cloud DevOps." },
  { href: "/work", label: "Portfolio & Case Studies", group: "Core pages", description: "Enterprise web platforms, cross-platform apps, and automated QA systems." },
  { href: "/pricing", label: "Pricing & Retainers", group: "Core pages", description: "Transparent milestone pricing and dedicated retainer options." },
  { href: "/contact", label: "Contact", group: "Core pages", description: "Schedule a technical consultation or submit a project proposal." },
  { href: "/blog", label: "Engineering Insights", group: "Core pages", description: "Architecture insights and technical notes." },
  { href: "/authors", label: "Architects & Authors", group: "Core pages", description: "Senior architectural team credentials and publication standards." },
];

export const serviceSiteLinks: PublicSiteLink[] = [
  { href: "/services/full-stack-web-development", label: "Full-Stack Web Development", group: "Service pages", description: "Next.js 15, React Server Components, PostgreSQL, and scalable API architecture." },
  { href: "/services/mobile-app-development", label: "Mobile App Development", group: "Service pages", description: "Flutter iOS and Android native performance mobile apps." },
  { href: "/services/qa-automation", label: "QA Automation", group: "Service pages", description: "Playwright, visual regression, and CI/CD automated test gates." },
  { href: "/services/ai-automations-and-integration", label: "AI Automations & Integration", group: "Service pages", description: "LLM agents, vector databases, and enterprise workflow automation." },
  { href: "/services/custom-software-solutions", label: "Cloud & Custom Solutions", group: "Service pages", description: "High-uptime distributed backend systems and desktop POS software." },
];

export const trustSiteLinks: PublicSiteLink[] = [
  { href: "/authors", label: "Author & Expertise", group: "Trust & policy pages", description: "Author profile and engineering expertise behind the website." },
  { href: "/editorial-guidelines", label: "Editorial Guidelines", group: "Trust & policy pages", description: "Technical verification, code review, and publication standards." },
  { href: "/html-sitemap", label: "HTML Sitemap", group: "Trust & policy pages", description: "Structured index of all Jet Slate platform resources." },
  { href: "/privacy-policy", label: "Privacy Policy", group: "Trust & policy pages", description: "Enterprise data protection and privacy policies." },
  { href: "/cookies-policy", label: "Cookies Policy", group: "Trust & policy pages", description: "Transparent cookie usage and GDPR/PECR compliance." },
  { href: "/terms-of-service", label: "Terms of Service", group: "Trust & policy pages", description: "Client terms, IP ownership, and project governance." },
];

export const softwareSiteLinks: PublicSiteLink[] = [];

export const topicSiteLinks: PublicSiteLink[] = (topicalClusters || []).map((cluster) => ({
  href: `/topics/${cluster.slug}`,
  label: cluster.clusterName,
  group: "Technical topic cluster pages",
  description: `${cluster.pillarName}: ${cluster.overview}`,
}));

export const publicSiteLinks: PublicSiteLink[] = [
  ...coreSiteLinks,
  ...serviceSiteLinks,
  ...trustSiteLinks,
  ...topicSiteLinks,
  ...softwareSiteLinks,
];

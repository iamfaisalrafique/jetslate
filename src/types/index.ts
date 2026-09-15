export interface CaseStudyData {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  role: string;
  techStack: string[];
  image: string;
  heroDesc: string;
  executiveSummary: string;
  phases: {
    number: string;
    name: string;
    title: string;
    summary: string;
    deliverables: string[];
    challenge: string;
    solution: string;
    outcome: string;
  }[];
  metrics: { label: string; value: string; detail: string }[];
}

export type ServiceCategory = 
  | 'all'
  | 'wordpress'
  | 'custom-web'
  | 'seo'
  | 'mobile'
  | 'ai';

export interface ServiceSubModule {
  id: string;
  title: string;
  desc: string;
  tag: string;
}

export interface AgencyService {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  longDesc: string;
  icon: string;
  highlightBadge?: string;
  deliverables: string[];
  techStack: string[];
  startingPrice: string;
  timeline: string;
  targetAudience: string;
  subModules?: ServiceSubModule[];
  linkUrl?: string;
  image?: string;
}

export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: Author;
  category: string;
  readingTime: string;
  image?: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    facebook?: string;
    twitter?: string;
    youtube?: string;
    linkedin?: string;
  };
}

export interface OfficeLocation {
  id: string;
  regionType: string;
  city: string;
  state: string;
  country: string;
  tagline: string;
  coordinates: string;
  image: string;
  addressSummary: string;
  localTimezone: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  projectType: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  serviceCategory: string;
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  challenge: string;
  solution: string;
  result: string;
  image: string;
  tags: string[];
}

export interface SpeedAuditMetric {
  name: string;
  acronym: string;
  score: number; // 0-100
  value: string;
  benchmark: string;
  status: 'good' | 'needs-improvement' | 'poor';
  recommendation: string;
}

export interface ProjectScopeConfig {
  selectedServices: string[];
  projectTimeline: 'rush' | 'standard' | 'flexible';
  siteScale: 'starter' | 'business' | 'enterprise';
  additionalAiIntegration: boolean;
  carePlanAddon: boolean;
}

export interface ConsultationFormState {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  selectedService: string;
  websiteUrl?: string;
  preferredContact: 'email' | 'phone' | 'call';
  date?: string;
  timeSlot?: string;
}

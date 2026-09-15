import { BlogPost, Author } from '../types';

export const BLOG_AUTHORS: Record<string, Author> = {
  'jetslate': {
    slug: 'jetslate',
    name: 'Jet Slate',
    role: 'Principal Systems Architect',
    bio: 'Specialist in distributed Next.js systems, high-throughput cloud architectures, and algorithmic SEO engineering.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    socials: {
      twitter: 'https://twitter.com/jetslate',
      linkedin: 'https://linkedin.com/company/jetslate',
      github: 'https://github.com/jetslate'
    }
  },
  'joy-hauoli': {
    slug: 'joy-hauoli',
    name: 'Joy Hau’oli',
    role: 'CEO & Engineering Director',
    bio: 'Leading digital product transformation, human-AI operational workflows, and design systems for enterprise clients.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    socials: {
      twitter: 'https://twitter.com/jetslate',
      linkedin: 'https://linkedin.com/company/jetslate'
    }
  }
};

export const BLOG_CATEGORIES = [
  { id: 'all', name: 'All Insights', count: 2 },
  { id: 'engineering', name: 'Software Engineering', count: 1 },
  { id: 'ai-architecture', name: 'AI & Automations', count: 1 },
  { id: 'cloud-devops', name: 'Cloud & Infrastructure', count: 0 },
  { id: 'seo-growth', name: 'Algorithmic SEO', count: 0 }
];

export const STARTER_BLOG_POSTS: BlogPost[] = [
  {
    slug: 'architecting-nextjs-15-enterprise-performance',
    title: 'Architecting Next.js 15 for Sub-Second Enterprise Latency',
    excerpt: 'An inside look at how we eliminate server component waterfalls, structure dynamic caching layers, and maintain 99+ Core Web Vitals on high-throughput platforms.',
    content: `
Enterprise web applications require meticulous attention to network waterfalls, asset sizing, and edge computation. In this technical breakdown, we explore the architectural decisions powering modern high-speed Next.js platforms.

## The Problem with Waterfall Rendering
Traditional React single-page applications frequently encounter client-side waterfall chains where sequential data fetches delay meaningful content paint. Next.js 15 Server Components solve this by co-locating data queries with component render lifecycles directly at the edge.

## Edge Caching & Incremental Revalidation
By leveraging edge runtime configurations combined with granular revalidation tags, critical database queries can be resolved in single-digit milliseconds globally without risking stale transactional records.

## Conclusion
A luxury digital experience begins with performance. Sub-0.4s load times are not merely vanity metrics; they are direct multipliers for conversion and search index authority.
    `.trim(),
    date: 'September 14, 2026',
    author: BLOG_AUTHORS['jetslate'],
    category: 'engineering',
    readingTime: '4 min read',
    image: '/assets/images/service-fullstack.jpg',
    tags: ['Next.js 15', 'Performance', 'Web Architecture', 'Core Web Vitals']
  },
  {
    slug: 'autonomous-ai-agents-in-enterprise-workflows',
    title: 'Deploying Autonomous AI Agents in Production Pipelines',
    excerpt: 'From LLM orchestration to resilient API connectors: designing deterministic error boundaries around probabilistic machine learning models.',
    content: `
Integrating artificial intelligence into production software necessitates shifting from simple prompt wrappers to robust, deterministic agentic workflows.

## Trust Boundaries and Output Verification
Probabilistic models should never write directly to mission-critical state databases without structured validation layers. We implement strict Pydantic and Zod schema gates between LLM outputs and transactional APIs.

## Resilient Agentic Workflows
By decomposing multi-step operations into discreet, inspectable state machines, enterprises can automate complex customer service workflows and data extraction pipelines with 99.9% operational reliability.
    `.trim(),
    date: 'September 12, 2026',
    author: BLOG_AUTHORS['joy-hauoli'],
    category: 'ai-architecture',
    readingTime: '5 min read',
    image: '/assets/images/service-ai-automation.jpg',
    tags: ['AI Agents', 'LLM Architecture', 'Automation', 'Python']
  }
];

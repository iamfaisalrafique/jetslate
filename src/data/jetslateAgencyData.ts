import { AgencyService, TeamMember, OfficeLocation, Testimonial, CaseStudy } from '../types';

export const JETSLATE_BRAND = {
  name: 'Jet Slate',
  tagline: 'A FULL-SERVICE AI & Design AGENCY',
  subtitle: 'Your partner for excellence in technology and content services.',
  mission: 'Transform your digital presence with Jet Slate. A full-service AI and design agency that delivers innovative solutions to help your business soar to new heights.',
  philosophy: 'Good design means higher conversions. Learning the art of proper design will increase your revenue simply because good design converts visitors into customers.',
  closingCta: 'Stop Chasing that next project and start living your life!',
  contact: {
    primaryEmail: 'mail@jetslate.com',
    secondaryEmail: 'info@jetsalte.com',
    phone: '+1 (419) 622-8499',
    hours: 'Mon - Fri: 8:00 AM – 6:00 PM (HST / PST / EST Coverage)',
    consultationDuration: '20-Minute Strategy Call'
  },
  socials: {
    facebook: 'https://facebook.com/jetslate',
    twitter: 'https://twitter.com/jetslate',
    youtube: 'https://youtube.com/jetslate',
    kadencePartner: 'https://www.kadencewp.com/'
  }
};

export const JETSLATE_SERVICES: AgencyService[] = [
  {
    id: 'wordpress-hub',
    title: 'WordPress Solutions & Architecture Hub',
    category: 'wordpress',
    shortDesc: 'Complete WordPress architecture in one unified archive: Kadence Pro custom blocks, Divi polish, Elementor systems, sub-0.4s speed overhaul, and proactive monthly care retainers.',
    longDesc: 'Consolidated WordPress engineering designed for enterprises and high-growth brands. Rather than managing fragmented themes and plugins across multiple vendors, Jet Slate unifies your entire WordPress ecosystem into one high-performance, update-proof architecture. From lightning-fast Kadence Gutenberg templates to Divi/Elementor conversions, sub-second Core Web Vitals guarantees, and 24/7 proactive security care plans.',
    icon: 'Layers',
    highlightBadge: 'Unified Archive',
    subModules: [
      { id: 'kadence', title: 'Kadence WP & Gutenberg', desc: 'Lightning-fast native block patterns, sub-0.4s LCP, zero builder bloat.', tag: 'Core Stack' },
      { id: 'divi', title: 'Divi Polish & Customization', desc: 'Bespoke Theme Builder templates, animation polish, and asset unloader.', tag: 'Visual Builder' },
      { id: 'elementor', title: 'Elementor Pro Architecture', desc: 'Dynamic loops, custom post type archives, and high-converting funnels.', tag: 'Dynamic Funnels' },
      { id: 'speed', title: 'Website Speed Overhaul', desc: 'Redis object caching, critical CSS, database optimization, 95+ PageSpeed.', tag: 'Performance' },
      { id: 'care', title: 'Care Plan & 24/7 Security', desc: 'Safe staged updates, daily cloud backups, uptime monitoring, and retainer hours.', tag: 'Maintenance' }
    ],
    deliverables: [
      'Unified WordPress theme architecture (Kadence / Divi / Elementor)',
      'Guaranteed sub-0.4s Google Core Web Vitals pass rate',
      'Custom Gutenberg & dynamic template pattern library',
      'Database autoload optimization & Redis object cache setup',
      '24/7 security monitoring, daily offsite backups, and safe updates'
    ],
    techStack: ['WordPress Core', 'Kadence WP Pro', 'Divi', 'Elementor Pro', 'Redis', 'WAF Security'],
    startingPrice: '$950',
    timeline: '5–7 business days',
    targetAudience: 'Businesses and agencies seeking a single expert partner to design, build, accelerate, and manage their entire WordPress estate.',
    linkUrl: 'https://jetslate.com/'
  },
  {
    id: 'custom-web-dev',
    title: 'Custom Full-Stack Web Development',
    category: 'custom-web',
    shortDesc: 'Enterprise web applications, bespoke client portals, and modern SaaS platforms powered by Next.js 15, React, TypeScript, and serverless architectures.',
    longDesc: 'When off-the-shelf platforms cannot match your business logic, Jet Slate engineers custom web applications built for speed, scale, and uncompromising reliability. Leveraging modern Next.js 15 App Router, React Server Components, clean TypeScript APIs, and reactive databases, we build bespoke platforms that scale effortlessly to millions of users.',
    icon: 'Code2',
    highlightBadge: 'Enterprise Grade',
    deliverables: [
      'Custom Next.js 15 App Router & React full-stack architecture',
      'Type-safe TypeScript codebase with automated CI/CD pipeline',
      'Custom REST/GraphQL APIs, Server Actions, and webhook handlers',
      'High-converting interactive UI/UX with Tailwind CSS and Framer Motion',
      'Headless CMS integrations and cloud database scaling (PostgreSQL, Supabase)'
    ],
    techStack: ['Next.js 15', 'TypeScript', 'React 19', 'Tailwind CSS', 'PostgreSQL', 'Server Actions'],
    startingPrice: '$2,400',
    timeline: '2–3 weeks',
    targetAudience: 'Startups, enterprises, and innovators needing custom SaaS platforms, customer portals, or bespoke web apps.',
    linkUrl: 'https://jetslate.com/'
  },
  {
    id: 'seo-organic-growth',
    title: 'SEO & Organic Growth Engineering',
    category: 'seo',
    shortDesc: 'Data-driven technical SEO, sub-second Core Web Vitals optimization, programmatic SEO landing architectures, structured JSON-LD schema, and keyword dominance.',
    longDesc: 'Ranking on Google demands more than generic blog posts. Jet Slate applies algorithmic search engine optimization across your entire digital infrastructure. We diagnose and eliminate crawl errors, architect programmatic landing page pipelines, implement rich schema markup, and optimize Core Web Vitals so search engines prioritize your domain.',
    icon: 'TrendingUp',
    highlightBadge: 'High ROI',
    deliverables: [
      'Comprehensive technical SEO & crawlability audit with immediate fixes',
      'Google Core Web Vitals optimization for maximum ranking boost',
      'Programmatic SEO strategy & dynamic keyword-targeted landing pages',
      'Rich Schema.org JSON-LD structured data (Organizations, FAQs, Products)',
      'Search Console & GA4 conversion tracking with monthly growth reporting'
    ],
    techStack: ['Technical SEO', 'Schema JSON-LD', 'Core Web Vitals', 'Search Console', 'GA4 Analytics'],
    startingPrice: '$850',
    timeline: '3–5 business days',
    targetAudience: 'Businesses seeking high-intent organic traffic, top search visibility, and maximum organic conversion rates.',
    linkUrl: 'https://jetslate.com/'
  },
  {
    id: 'mobile-app-dev',
    title: 'Mobile App Development (iOS & Android)',
    category: 'mobile',
    shortDesc: 'High-performance cross-platform iOS and Android mobile applications built with React Native and Flutter, native device APIs, and frictionless UX.',
    longDesc: 'Turn your vision into a fluid, top-rated mobile experience in the App Store and Google Play. Jet Slate develops cross-platform mobile apps using modern React Native and Flutter frameworks. We implement native camera/biometrics access, push notifications, offline synchronization, secure payment checkouts, and responsive mobile architectures.',
    icon: 'Smartphone',
    highlightBadge: 'Cross-Platform',
    deliverables: [
      'Single unified codebase deployed to both Apple App Store and Google Play',
      'Native performance with 60 FPS fluid micro-animations & gesture support',
      'Biometric authentication (FaceID/Fingerprint), push notifications & geolocation',
      'Offline-first architecture with local encrypted SQLite/WatermelonDB sync',
      'App Store & Play Store submission, compliance, and launch support'
    ],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Firebase', 'iOS / Android SDKs'],
    startingPrice: '$3,200',
    timeline: '3–5 weeks',
    targetAudience: 'Brands and entrepreneurs launching new mobile services, e-commerce apps, or companion customer mobile tools.',
    linkUrl: 'https://jetslate.com/'
  },
  {
    id: 'ai-solutions-automation',
    title: 'AI Solutions & Intelligent Automation',
    category: 'ai',
    shortDesc: 'Empower autonomous workflows with custom AI integrations, LLM reasoning agents, automated data scraping pipelines, and predictive data intelligence.',
    longDesc: 'Jet Slate elevates your business with cutting-edge AI and data engineering. We design custom AI agents connected to your proprietary knowledge base, automate repetitive multi-system operations, build high-throughput data extraction web scrapers, and integrate smart LLM workflows that save hundreds of human hours every month.',
    icon: 'Sparkles',
    highlightBadge: 'Next-Gen',
    deliverables: [
      'Custom AI agents & LLM integrations tailored to your internal knowledge base',
      'Automated multi-source web scraping pipelines with anti-blocking resilience',
      'Autonomous workflow integrations linking CRMs, databases, and APIs',
      'Predictive business intelligence analytics dashboards and automated reporting',
      'Natural language search and semantic recommendation engines'
    ],
    techStack: ['Python', 'LLM APIs', 'Agentic Workflows', 'Pandas', 'Automated Scraping'],
    startingPrice: '$1,800',
    timeline: '1–2 weeks',
    targetAudience: 'Companies looking to automate operations, scrape market data, deploy proprietary AI agents, or cut operational costs.',
    linkUrl: 'https://jetslate.com/'
  }
];

export const JETSLATE_TEAM: TeamMember[] = [
  {
    id: 'joy-hauoli',
    name: 'Joy Hau’oli',
    role: 'CEO & Director',
    bio: 'Guiding Jet Slate Enterprises with a visionary commitment to digital excellence, client transformation, and forward-thinking agency leadership across all branches.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    socials: {
      facebook: 'https://facebook.com/jetslate',
      twitter: 'https://twitter.com/jetslate',
      youtube: 'https://youtube.com/jetslate'
    }
  },
  {
    id: 'faisal-rafique',
    name: 'Faisal Rafique',
    role: 'Head of IT & Engineering',
    bio: 'Leading Jet Slate’s technical infrastructure, performance engineering, advanced WordPress architecture, and data science operations.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    socials: {
      facebook: 'https://facebook.com/jetslate',
      twitter: 'https://twitter.com/jetslate',
      youtube: 'https://youtube.com/jetslate'
    }
  },
  {
    id: 'michael-patterson',
    name: 'Michael Patterson',
    role: 'UI/UX Designer',
    bio: 'Crafting intuitive user journeys, conversion-focused interface design, and high-impact visual design systems that turn visitors into loyal customers.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    socials: {
      facebook: 'https://facebook.com/jetslate',
      twitter: 'https://twitter.com/jetslate',
      youtube: 'https://youtube.com/jetslate'
    }
  },
  {
    id: 'angela-ogden',
    name: 'Angela Ogden',
    role: 'Digital Designer',
    bio: 'Designing engaging digital experiences, brand identities, and responsive web layouts that resonate with audiences across modern digital touchpoints.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    socials: {
      facebook: 'https://facebook.com/jetslate',
      twitter: 'https://twitter.com/jetslate',
      youtube: 'https://youtube.com/jetslate'
    }
  }
];

export const JETSLATE_LOCATIONS: OfficeLocation[] = [
  {
    id: 'kailua',
    regionType: 'Paradise Island',
    city: 'KAILUA',
    state: 'HAWAII',
    country: 'United States',
    tagline: 'Pacific Innovation & Creative Agency Hub',
    coordinates: '21.4022° N, 157.7394° W',
    image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=800&q=80',
    addressSummary: 'Kailua Beachside Studio, Oahu, HI 96734',
    localTimezone: 'HST (UTC-10)'
  },
  {
    id: 'las-vegas',
    regionType: 'City Lights',
    city: 'LAS VEGAS',
    state: 'NEVADA',
    country: 'United States',
    tagline: 'High-Impact Digital Production & Tech Operations',
    coordinates: '36.1716° N, 115.1391° W',
    image: 'https://images.unsplash.com/photo-1581351123004-757df051db8e?auto=format&fit=crop&w=800&q=80',
    addressSummary: 'Downtown Tech District, Las Vegas, NV 89101',
    localTimezone: 'PST (UTC-8)'
  },
  {
    id: 'olympia',
    regionType: 'Lake City',
    city: 'OLYMPIA',
    state: 'WASHINGTON',
    country: 'United States',
    tagline: 'Pacific Northwest Engineering & AI Research Base',
    coordinates: '47.0379° N, 122.9007° W',
    image: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80',
    addressSummary: 'Capitol Lake Technology Suites, Olympia, WA 98501',
    localTimezone: 'PST (UTC-8)'
  }
];

export const JETSLATE_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Jet Slate transformed our entire online presence. Their mastery of modern WordPress architecture and Kadence customization gave us a site that loads in under 0.4s and converted 3x more leads in our first month.',
    author: 'Jim Smith',
    role: 'Founder',
    company: 'TechWiz',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    projectType: 'Kadence & Speed Optimization'
  },
  {
    id: 't-2',
    quote: 'Working with Joy, Faisal, and the Jet Slate team has been the best agency experience we’ve had. They deliver clean, future-proof code that never breaks on updates. Absolute gold standard for WordPress!',
    author: 'Elizabeth Jones',
    role: 'Web Designer & Agency Owner',
    company: 'Jones Interactive',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    projectType: 'Divi Performance & Custom Redesign'
  },
  {
    id: 't-3',
    quote: 'Jet Slate’s deep knowledge of Core Web Vitals, caching, and modern web architecture is unmatched. They took our failing Lighthouse score straight to a 99 on mobile.',
    author: 'Tom Reeves',
    role: 'VP of Design',
    company: 'GitHub Ecosystem Partner',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    projectType: 'Speed Optimization & Infrastructure'
  },
  {
    id: 't-4',
    quote: 'From their initial 20-minute consultation call to the final cloud staging handoff, everything was flawless. Good design really does mean higher conversions!',
    author: 'Alexa Chase',
    role: 'Founder',
    company: 'Simply Design',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    projectType: 'Full-Service AI & Elementor Build'
  }
];

export const JETSLATE_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'Enterprise WooCommerce Core Web Vitals Overhaul',
    client: 'EcoHarvest Organics',
    serviceCategory: 'WordPress Speed & Kadence',
    metrics: [
      { label: 'Mobile LCP', value: '0.38s', improvement: '-3.8s reduction' },
      { label: 'PageSpeed Score', value: '99/100', improvement: '+58 points' },
      { label: 'Checkout Conversion', value: '+34.2%', improvement: 'Direct Revenue Uplift' }
    ],
    challenge: 'A high-traffic e-commerce store was suffering from 4.2s page load times, failing Google Core Web Vitals, and losing 60%+ of mobile shoppers at checkout.',
    solution: 'Jet Slate replaced bloated third-party page builders with custom Kadence Gutenberg components, configured Redis object caching, and rebuilt the checkout flow.',
    result: 'Google Core Web Vitals passed across 100% of URLs. Revenue jumped 34% within the first 30 days of deployment.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['Kadence Pro', 'Speed Optimization', 'Core Web Vitals', 'WooCommerce']
  },
  {
    id: 'cs-2',
    title: 'Scalable Enterprise Architecture & Multi-Site Framework',
    client: 'Veloce Global Consulting',
    serviceCategory: 'Enterprise WordPress Architecture',
    metrics: [
      { label: 'Codebase Weight', value: '42KB', improvement: '-82% bloat' },
      { label: 'Time-to-First-Byte', value: '64ms', improvement: 'Edge Cached' },
      { label: 'Lead Inquiries', value: '+180%', improvement: 'MoM Growth' }
    ],
    challenge: 'The client had an unstable WordPress setup with dozens of custom functions directly written in parent themes, which repeatedly crashed during core updates.',
    solution: 'Jet Slate re-engineered their entire design into a modular clean-code architecture with isolated hooks, custom templates, and automated Git deployments.',
    result: 'Zero downtime across 12 consecutive core updates and a lightning-fast responsive experience on all mobile devices.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
    tags: ['Enterprise WP', 'PHP 8.2', 'Clean Code', 'Multi-Site']
  },
  {
    id: 'cs-3',
    title: 'AI Data Intelligence & Automated Content Extraction',
    client: 'MarketPulse Intelligence',
    serviceCategory: 'AI & Data Services',
    metrics: [
      { label: 'Daily Records Processed', value: '250,000+', improvement: 'Automated' },
      { label: 'Staff Hours Saved', value: '45 hrs/wk', improvement: 'Labor Reduced' },
      { label: 'Data Accuracy', value: '99.8%', improvement: 'Machine Validated' }
    ],
    challenge: 'Manual extraction of market listings and competitor pricing was costing the research team 40+ hours per week with high human error rates.',
    solution: 'Jet Slate deployed an automated Python scraping engine with NLP categorization, anomaly detection, and automated WordPress dashboard feeds.',
    result: 'Real-time market insights delivered straight to the leadership team with zero manual labor.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    tags: ['AI Solutions', 'Data Scraping', 'Machine Learning', 'Automation']
  }
];

export const JETSLATE_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Submit Message & Free Discovery',
    description: 'Tell us about your website, goals, or pain points. We respond in a heartbeat with initial diagnostic insights.',
    icon: 'MessageSquare'
  },
  {
    step: '02',
    title: '20-Minute Strategy Consultation',
    description: 'We meet over a focused 20-minute strategy call to align on scope, architecture, tech stack, and clear milestones.',
    icon: 'PhoneCall'
  },
  {
    step: '03',
    title: 'Building Relationships & Staging',
    description: 'Rolling the ball up the hill together. We engineer your custom theme, optimize speed, and build on secure staging.',
    icon: 'Hammer'
  },
  {
    step: '04',
    title: 'Living In The Cloud & Launch',
    description: 'Deliverables are exceptional and you love being on Cloud 9. Your content rocks and drives lasting online success.',
    icon: 'CloudSun'
  }
];

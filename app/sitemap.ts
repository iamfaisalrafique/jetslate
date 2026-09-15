import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jetslate.com';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/pricing',
    '/contact',
    '/blog',
    '/authors',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceSlugs = [
    'full-stack-web-development',
    'mobile-app-development',
    'qa-automation',
    'cloud-devops',
    'pos-desktop-software',
    'ai-agents-llm',
  ];

  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}

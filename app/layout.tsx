import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jet Slate - Full-Service AI & Design Agency',
  description: 'Official platform for Jet Slate (jetslate.com) — full-service AI solutions, custom web development (Next.js), mobile app development (iOS & Android), technical SEO, and WordPress architecture hub.',
  metadataBase: new URL('https://jetslate.com'),
  openGraph: {
    title: 'Jet Slate - Full-Service AI & Design Agency',
    description: 'Transform your digital presence with Jet Slate. Custom Next.js web apps, mobile app development, technical SEO, AI automations, and unified WordPress architecture.',
    url: 'https://jetslate.com',
    siteName: 'Jet Slate',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jet Slate - Full-Service AI & Design Agency',
    description: 'Official platform for Jet Slate — full-service AI, custom web development, mobile apps, technical SEO, and WordPress architecture.',
  },
  keywords: [
    'Jet Slate',
    'Full-Service Agency',
    'Custom Web Development',
    'Next.js Web Applications',
    'Mobile App Development',
    'React Native',
    'Technical SEO',
    'Core Web Vitals Optimization',
    'AI Solutions & Automation',
    'WordPress Solutions Hub',
    'Kadence Theme Customization'
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-noir text-ivory antialiased font-sans flex flex-col selection:bg-antique_gold selection:text-noir">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2.5 focus:bg-[#C9A84C] focus:text-[#111111] focus:font-bold focus:rounded-md focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

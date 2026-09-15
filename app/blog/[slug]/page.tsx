import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { STARTER_BLOG_POSTS } from '@/src/data/blogData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, Clock, Sparkles, ArrowRight, Share2, Tag } from 'lucide-react';
import type { Metadata } from 'next';

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return STARTER_BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = STARTER_BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Article Not Found - Jet Slate' };

  return {
    title: `${post.title} | Jet Slate Engineering`,
    description: post.excerpt,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = STARTER_BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Schema.org BlogPosting structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `https://jetslate.com${post.image}` : undefined,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: `https://jetslate.com/authors/${post.author.slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Jet Slate',
      url: 'https://jetslate.com',
    },
  };

  return (
    <div className="min-h-screen bg-noir text-ivory flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-12">
        {/* Breadcrumb */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-antique_gold hover:text-champagne transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Insights</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-antique_gold/10 border border-antique_gold/30 text-xs font-bold text-antique_gold uppercase tracking-wider">
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-ivory tracking-tight font-space leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-charcoal text-xs text-champagne/80">
            <Link
              href={`/authors/${post.author.slug}`}
              className="flex items-center gap-3 hover:text-antique_gold transition-colors"
            >
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-antique_gold/30"
              />
              <div>
                <div className="font-bold text-ivory">{post.author.name}</div>
                <div className="text-[11px] text-ivory/60">{post.author.role}</div>
              </div>
            </Link>

            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-antique_gold" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-antique_gold" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden border border-charcoal bg-charcoal/30 shadow-dark-card">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Body */}
        <div className="prose prose-invert max-w-none space-y-6 text-ivory/80 leading-relaxed text-sm sm:text-base">
          {post.content.split('\n\n').map((para, idx) => {
            if (para.startsWith('## ')) {
              return (
                <h2 key={idx} className="text-xl sm:text-2xl font-bold text-ivory font-space pt-4 text-gold">
                  {para.replace('## ', '')}
                </h2>
              );
            }
            return (
              <p key={idx} className="leading-relaxed">
                {para}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="pt-8 border-t border-charcoal flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-antique_gold" />
          <span className="text-xs font-bold text-ivory/60">Topics:</span>
          {post.tags.map((t, idx) => (
            <span
              key={idx}
              className="text-xs bg-charcoal/40 text-champagne px-3 py-1 rounded-full border border-charcoal"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="p-8 rounded-3xl bg-charcoal/30 border border-charcoal flex flex-col sm:flex-row items-center gap-6">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-antique_gold/40 shrink-0"
          />
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <h3 className="text-lg font-bold text-ivory font-space">
                {post.author.name}
              </h3>
              <span className="text-xs text-antique_gold font-semibold">
                {post.author.role}
              </span>
            </div>
            <p className="text-xs text-ivory/70 leading-relaxed">
              {post.author.bio}
            </p>
            <div className="pt-1">
              <Link
                href={`/authors/${post.author.slug}`}
                className="text-xs font-bold text-antique_gold hover:text-champagne transition-colors inline-flex items-center gap-1"
              >
                <span>View Author Profile</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

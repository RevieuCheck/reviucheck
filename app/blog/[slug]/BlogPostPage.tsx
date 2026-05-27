'use client'

import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react'
import Link from 'next/link'

interface PostData {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  updatedDate: string | null
  category: string
}

interface BlogPostPageProps {
  post: PostData
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://reviucheck.com/blog/${post.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="fixed inset-0 -z-10 overflow-hidden pt-16">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <article className="relative pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-text-muted flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="text-sm text-text-muted flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  5 min read
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-6">
                {post.title}
              </h1>

              <div className="flex items-center gap-3 pb-8 border-b border-primary/10 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-text-primary">{post.author}</div>
                  <div className="text-sm text-text-muted">
                    {post.updatedDate ? `Updated ${new Date(post.updatedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}` : ''}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="prose prose-invert max-w-none"
            >
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <div className="glass rounded-2xl p-8 mb-8">
                <p className="text-text-secondary leading-relaxed">
                  This is a sample blog post. In production, this content would be fetched from your CMS or database.
                  The Article schema is already in place for SEO. Each post includes structured data for
                  headline, author, publish date, and last modified date.
                </p>
              </div>

              <div className="glass rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold font-heading text-text-primary mb-4">Key Takeaways</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-text-secondary">
                    <Tag className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>AI-powered sentiment analysis helps businesses understand customer emotions at scale</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <Tag className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Automated responses save teams up to 70% of their review management time</span>
                  </li>
                  <li className="flex items-start gap-3 text-text-secondary">
                    <Tag className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Multi-language support breaks down communication barriers with global customers</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </article>
    </>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Tag, User, ArrowLeft, ArrowRight, BarChart3 } from 'lucide-react'
import Link from 'next/link'

const allPosts = [
  { title: 'How AI Sentiment Analysis is Transforming Customer Experience', excerpt: 'Discover how modern AI-powered sentiment analysis is helping businesses understand their customers better than ever before.', author: 'Sarah Chen', role: 'Product Lead', date: 'Mar 15, 2026', readTime: '5 min read', category: 'AI & Technology', slug: 'ai-sentiment-analysis-transforming-cx' },
  { title: '10 Best Practices for Managing Customer Reviews at Scale', excerpt: 'Learn the strategies top companies use to manage thousands of reviews across multiple platforms efficiently.', author: 'Michael Rodriguez', role: 'Customer Success', date: 'Mar 10, 2026', readTime: '7 min read', category: 'Best Practices', slug: 'managing-reviews-at-scale' },
  { title: 'The Future of Customer Feedback: Trends to Watch in 2026', excerpt: 'Explore the emerging trends in customer feedback management and how AI is shaping the future of customer experience.', author: 'Priya Sharma', role: 'Product Manager', date: 'Mar 5, 2026', readTime: '6 min read', category: 'Industry Trends', slug: 'future-of-customer-feedback-2026' },
  { title: 'Multi-Language Review Management: Breaking Down Barriers', excerpt: 'How businesses are using AI to manage and respond to reviews in 100+ languages while maintaining quality.', author: 'Sarah Chen', role: 'Product Lead', date: 'Feb 28, 2026', readTime: '4 min read', category: 'Product', slug: 'multi-language-review-management' },
  { title: 'Enterprise Guide to Review Management Security & Compliance', excerpt: 'A comprehensive guide to security best practices, GDPR compliance, and data protection in review management.', author: 'Michael Rodriguez', role: 'Customer Success', date: 'Feb 20, 2026', readTime: '8 min read', category: 'Security', slug: 'enterprise-review-security-compliance' },
  { title: 'ReviuCheck Product Update: New Features & Improvements', excerpt: 'Check out the latest features and improvements we have shipped to make your review management even more powerful.', author: 'ReviuCheck Team', role: 'Product', date: 'Feb 15, 2026', readTime: '3 min read', category: 'Product Updates', slug: 'product-update-feb-2026' },
  { title: 'Measuring ROI of AI-Powered Review Management', excerpt: 'Learn how to calculate the return on investment when implementing AI-powered review management for your business.', author: 'Priya Sharma', role: 'Product Manager', date: 'Feb 10, 2026', readTime: '5 min read', category: 'Analytics', slug: 'roi-ai-review-management' },
  { title: 'Integrating ReviuCheck with Your Existing Tech Stack', excerpt: 'A step-by-step guide to integrating ReviuCheck with popular CRM, helpdesk, and e-commerce platforms.', author: 'Michael Rodriguez', role: 'Customer Success', date: 'Feb 5, 2026', readTime: '6 min read', category: 'Integration', slug: 'integrating-with-tech-stack' },
  { title: 'Understanding Customer Emotions Through Review Analysis', excerpt: 'Go beyond sentiment scores and understand the emotional drivers behind your customer feedback.', author: 'Sarah Chen', role: 'Product Lead', date: 'Jan 28, 2026', readTime: '4 min read', category: 'AI & Technology', slug: 'customer-emotions-review-analysis' },
  { title: 'Why Real-Time Review Monitoring Matters for Your Brand', excerpt: 'Discover why waiting days to respond to reviews can damage your brand reputation and how real-time monitoring helps.', author: 'Priya Sharma', role: 'Product Manager', date: 'Jan 20, 2026', readTime: '5 min read', category: 'Best Practices', slug: 'real-time-review-monitoring' },
]

const POSTS_PER_PAGE = 10

interface PaginatedBlogPageProps {
  currentPage: number
  totalPages: number
}

export default function PaginatedBlogPage({ currentPage, totalPages }: PaginatedBlogPageProps) {
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const posts = allPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pt-16">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
              <BarChart3 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Blog &middot; Page {currentPage}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-4">
              Blog - Page{' '}
              <span className="gradient-text">{currentPage}</span>
            </h1>
            <p className="text-lg text-text-secondary">
              Read the latest articles about review management and customer experience.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">{post.category}</span>
                        <span className="text-xs text-text-muted flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="text-xs text-text-muted flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-text-primary font-heading mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-text-secondary text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-text-muted" />
                        <span className="text-xs text-text-muted">{post.author}</span>
                      </div>
                    </div>
                    <div className="shrink-0 flex items-start pt-2">
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <nav className="flex items-center justify-center gap-4 mt-12" aria-label="Blog pagination">
            {currentPage > 1 && (
              <Link
                href={`/blog/page/${currentPage - 1}`}
                rel="prev"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/30 text-text-primary hover:bg-primary/10 transition-all text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Link>
            )}

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Link
                  key={page}
                  href={`/blog/page/${page}`}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-medium transition-all ${
                    page === currentPage
                      ? 'bg-gradient-to-r from-primary to-purple-600 text-white'
                      : 'border border-primary/20 text-text-secondary hover:border-primary/40 hover:text-text-primary'
                  }`}
                >
                  {page}
                </Link>
              ))}
            </div>

            {currentPage < totalPages && (
              <Link
                href={`/blog/page/${currentPage + 1}`}
                rel="next"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/30 text-text-primary hover:bg-primary/10 transition-all text-sm"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </nav>

          <div className="flex justify-center mt-6">
            <Link
              href="/blog"
              className="text-sm text-text-muted hover:text-primary transition-colors"
            >
              &larr; Back to first page
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, BarChart3, Tag, User } from 'lucide-react'
import Link from 'next/link'

const posts = [
  {
    title: 'How AI Sentiment Analysis is Transforming Customer Experience',
    excerpt: 'Discover how modern AI-powered sentiment analysis is helping businesses understand their customers better than ever before.',
    author: 'Sarah Chen',
    role: 'Product Lead',
    date: 'Mar 15, 2026',
    readTime: '5 min read',
    category: 'AI & Technology',
    tags: ['AI', 'Sentiment Analysis', 'Customer Experience'],
  },
  {
    title: '10 Best Practices for Managing Customer Reviews at Scale',
    excerpt: 'Learn the strategies top companies use to manage thousands of reviews across multiple platforms efficiently.',
    author: 'Michael Rodriguez',
    role: 'Customer Success',
    date: 'Mar 10, 2026',
    readTime: '7 min read',
    category: 'Best Practices',
    tags: ['Reviews', 'Best Practices', 'Scale'],
  },
  {
    title: 'The Future of Customer Feedback: Trends to Watch in 2026',
    excerpt: 'Explore the emerging trends in customer feedback management and how AI is shaping the future of customer experience.',
    author: 'Priya Sharma',
    role: 'Product Manager',
    date: 'Mar 5, 2026',
    readTime: '6 min read',
    category: 'Industry Trends',
    tags: ['Trends', 'Future', 'Customer Feedback'],
  },
  {
    title: 'Multi-Language Review Management: Breaking Down Barriers',
    excerpt: 'How businesses are using AI to manage and respond to reviews in 100+ languages while maintaining quality.',
    author: 'Sarah Chen',
    role: 'Product Lead',
    date: 'Feb 28, 2026',
    readTime: '4 min read',
    category: 'Product',
    tags: ['Multi-Language', 'Global', 'AI Translation'],
  },
  {
    title: 'Enterprise Guide to Review Management Security & Compliance',
    excerpt: 'A comprehensive guide to security best practices, GDPR compliance, and data protection in review management.',
    author: 'Michael Rodriguez',
    role: 'Customer Success',
    date: 'Feb 20, 2026',
    readTime: '8 min read',
    category: 'Security',
    tags: ['Security', 'Compliance', 'Enterprise'],
  },
  {
    title: 'ReviuCheck Product Update: New Features & Improvements',
    excerpt: 'Check out the latest features and improvements we have shipped to make your review management even more powerful.',
    author: 'ReviuCheck Team',
    role: 'Product',
    date: 'Feb 15, 2026',
    readTime: '3 min read',
    category: 'Product Updates',
    tags: ['Product Update', 'New Features', 'Release'],
  },
]

export default function BlogPage() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden pt-16">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
              <BarChart3 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Insights & Updates</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading mb-6">
              Our{' '}
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Insights, best practices, and updates from the ReviuCheck team.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
              >
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
                    <h2 className="text-2xl font-bold text-text-primary font-heading mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-text-secondary mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-3 mb-3">
                      <User className="w-4 h-4 text-text-muted" />
                      <span className="text-sm text-text-muted">{post.author} &middot; {post.role}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs text-text-muted flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 flex items-start pt-2">
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

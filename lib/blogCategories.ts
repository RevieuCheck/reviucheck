export const BLOG_TOPICS = [
  'Google Reviews',
  'AI Review Management',
  'Customer Feedback',
  'Review Analytics',
  'Reputation Management',
  'Sentiment Analysis',
  'Multi-Language Support',
  'Customer Experience',
  'Product Updates',
  'Industry Trends',
] as const

export type BlogTopic = typeof BLOG_TOPICS[number]

export interface BlogPostMeta {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  topics: string[]
}

export const blogPosts: BlogPostMeta[] = [
  { slug: 'ai-sentiment-analysis-transforming-cx', title: 'How AI Sentiment Analysis is Transforming Customer Experience', excerpt: 'Discover how modern AI-powered sentiment analysis is helping businesses understand their customers.', author: 'Sarah Chen', date: '2026-03-15', category: 'AI & Technology', topics: ['AI Review Management', 'Sentiment Analysis', 'Customer Experience'] },
  { slug: 'managing-reviews-at-scale', title: '10 Best Practices for Managing Customer Reviews at Scale', excerpt: 'Learn the strategies top companies use to manage thousands of reviews.', author: 'Michael Rodriguez', date: '2026-03-10', category: 'Best Practices', topics: ['Google Reviews', 'Reputation Management', 'Review Analytics'] },
  { slug: 'future-of-customer-feedback-2026', title: 'The Future of Customer Feedback: Trends to Watch in 2026', excerpt: 'Explore the emerging trends in customer feedback management.', author: 'Priya Sharma', date: '2026-03-05', category: 'Industry Trends', topics: ['Customer Feedback', 'Industry Trends', 'AI Review Management'] },
  { slug: 'multi-language-review-management', title: 'Multi-Language Review Management: Breaking Down Barriers', excerpt: 'How businesses use AI to manage reviews in 100+ languages.', author: 'Sarah Chen', date: '2026-02-28', category: 'Product', topics: ['Multi-Language Support', 'AI Review Management', 'Customer Experience'] },
  { slug: 'enterprise-review-security-compliance', title: 'Enterprise Guide to Review Management Security & Compliance', excerpt: 'A comprehensive guide to security best practices and GDPR compliance.', author: 'Michael Rodriguez', date: '2026-02-20', category: 'Security', topics: ['Reputation Management', 'Customer Feedback', 'Review Analytics'] },
  { slug: 'product-update-feb-2026', title: 'ReviuCheck Product Update: New Features & Improvements', excerpt: 'Check out the latest features and improvements.', author: 'ReviuCheck Team', date: '2026-02-15', category: 'Product Updates', topics: ['Product Updates', 'AI Review Management'] },
  { slug: 'roi-ai-review-management', title: 'Measuring ROI of AI-Powered Review Management', excerpt: 'Learn how to calculate the return on investment.', author: 'Priya Sharma', date: '2026-02-10', category: 'Analytics', topics: ['Review Analytics', 'AI Review Management', 'Customer Feedback'] },
  { slug: 'integrating-with-tech-stack', title: 'Integrating ReviuCheck with Your Existing Tech Stack', excerpt: 'A step-by-step guide to integrating with popular platforms.', author: 'Michael Rodriguez', date: '2026-02-05', category: 'Integration', topics: ['AI Review Management', 'Customer Feedback'] },
  { slug: 'customer-emotions-review-analysis', title: 'Understanding Customer Emotions Through Review Analysis', excerpt: 'Go beyond sentiment scores and understand emotional drivers.', author: 'Sarah Chen', date: '2026-01-28', category: 'AI & Technology', topics: ['Sentiment Analysis', 'Customer Experience', 'AI Review Management'] },
  { slug: 'real-time-review-monitoring', title: 'Why Real-Time Review Monitoring Matters for Your Brand', excerpt: 'Discover why waiting days to respond to reviews can damage your brand.', author: 'Priya Sharma', date: '2026-01-20', category: 'Best Practices', topics: ['Reputation Management', 'Google Reviews', 'Customer Feedback'] },
]

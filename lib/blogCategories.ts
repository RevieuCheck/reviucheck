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
  authorRole: string
  date: string
  updatedDate?: string
  readTime: string
  category: string
  topics: string[]
}

export const blogPosts: BlogPostMeta[] = [
  { slug: 'ai-sentiment-analysis-transforming-cx', title: 'How AI Sentiment Analysis is Transforming Customer Experience', excerpt: 'Learn how AI sentiment analysis helps businesses understand reviews, detect customer emotions, and improve customer experience at scale.', author: 'Sarah Chen', authorRole: 'Product Lead', date: '2026-03-15', readTime: '5 min read', category: 'AI & Technology', topics: ['AI Review Management', 'Sentiment Analysis', 'Customer Experience'] },
  { slug: 'managing-reviews-at-scale', title: '10 Best Practices for Managing Customer Reviews at Scale', excerpt: 'Use these enterprise review management best practices to respond faster, protect your reputation, and turn high-volume feedback into insights.', author: 'Michael Rodriguez', authorRole: 'Customer Success', date: '2026-03-10', updatedDate: '2026-03-12', readTime: '7 min read', category: 'Best Practices', topics: ['Google Reviews', 'Reputation Management', 'Review Analytics'] },
  { slug: 'future-of-customer-feedback-2026', title: 'The Future of Customer Feedback: Trends to Watch in 2026', excerpt: 'Explore the customer feedback trends shaping 2026, from predictive analytics and AI review management to real-time experience insights.', author: 'Priya Sharma', authorRole: 'Product Manager', date: '2026-03-05', readTime: '6 min read', category: 'Industry Trends', topics: ['Customer Feedback', 'Industry Trends', 'AI Review Management'] },
  { slug: 'multi-language-review-management', title: 'Multi-Language Review Management: Breaking Down Barriers', excerpt: 'See how AI-powered multi-language review management helps global businesses analyze sentiment and respond in every customer language.', author: 'Sarah Chen', authorRole: 'Product Lead', date: '2026-02-28', updatedDate: '2026-03-02', readTime: '4 min read', category: 'Product', topics: ['Multi-Language Support', 'AI Review Management', 'Customer Experience'] },
  { slug: 'enterprise-review-security-compliance', title: 'Enterprise Guide to Review Management Security & Compliance', excerpt: 'A practical guide to secure review management, GDPR readiness, audit controls, and enterprise data protection requirements.', author: 'Michael Rodriguez', authorRole: 'Customer Success', date: '2026-02-20', readTime: '8 min read', category: 'Security', topics: ['Reputation Management', 'Customer Feedback', 'Review Analytics'] },
  { slug: 'product-update-feb-2026', title: 'ReviuCheck Product Update: New Features & Improvements', excerpt: 'Review the latest ReviuCheck product updates for AI sentiment analysis, review response workflows, analytics, and integrations.', author: 'ReviuCheck Team', authorRole: 'Product', date: '2026-02-15', readTime: '3 min read', category: 'Product Updates', topics: ['Product Updates', 'AI Review Management'] },
  { slug: 'roi-ai-review-management', title: 'Measuring ROI of AI-Powered Review Management', excerpt: 'Learn how to calculate AI review management ROI using labor savings, faster response times, retention gains, and review-driven revenue impact.', author: 'Priya Sharma', authorRole: 'Product Manager', date: '2026-02-10', readTime: '5 min read', category: 'Analytics', topics: ['Review Analytics', 'AI Review Management', 'Customer Feedback'] },
  { slug: 'integrating-with-tech-stack', title: 'Integrating ReviuCheck with Your Existing Tech Stack', excerpt: 'Connect review management data with your CRM, helpdesk, analytics stack, and customer feedback workflows using integration best practices.', author: 'Michael Rodriguez', authorRole: 'Customer Success', date: '2026-02-05', readTime: '6 min read', category: 'Integration', topics: ['AI Review Management', 'Customer Feedback'] },
  { slug: 'customer-emotions-review-analysis', title: 'Understanding Customer Emotions Through Review Analysis', excerpt: 'Go beyond positive and negative sentiment to identify customer emotions, response priorities, and experience issues hidden in reviews.', author: 'Sarah Chen', authorRole: 'Product Lead', date: '2026-01-28', readTime: '4 min read', category: 'AI & Technology', topics: ['Sentiment Analysis', 'Customer Experience', 'AI Review Management'] },
  { slug: 'real-time-review-monitoring', title: 'Why Real-Time Review Monitoring Matters for Your Brand', excerpt: 'Discover why real-time review monitoring protects brand reputation, shortens response times, and improves customer trust across review platforms.', author: 'Priya Sharma', authorRole: 'Product Manager', date: '2026-01-20', readTime: '5 min read', category: 'Best Practices', topics: ['Reputation Management', 'Google Reviews', 'Customer Feedback'] },
]

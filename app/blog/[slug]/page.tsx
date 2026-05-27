import { Metadata } from 'next'
import BlogPostPage from './BlogPostPage'

interface BlogPostProps {
  params: Promise<{ slug: string }>
}

const posts = [
  { slug: 'ai-sentiment-analysis-transforming-cx', title: 'How AI Sentiment Analysis is Transforming Customer Experience', excerpt: 'Discover how modern AI-powered sentiment analysis is helping businesses understand their customers better than ever before.', author: 'Sarah Chen', date: '2026-03-15', updatedDate: null, category: 'AI & Technology' },
  { slug: 'managing-reviews-at-scale', title: '10 Best Practices for Managing Customer Reviews at Scale', excerpt: 'Learn the strategies top companies use to manage thousands of reviews across multiple platforms efficiently.', author: 'Michael Rodriguez', date: '2026-03-10', updatedDate: '2026-03-12', category: 'Best Practices' },
  { slug: 'future-of-customer-feedback-2026', title: 'The Future of Customer Feedback: Trends to Watch in 2026', excerpt: 'Explore the emerging trends in customer feedback management and how AI is shaping the future of customer experience.', author: 'Priya Sharma', date: '2026-03-05', updatedDate: null, category: 'Industry Trends' },
  { slug: 'multi-language-review-management', title: 'Multi-Language Review Management: Breaking Down Barriers', excerpt: 'How businesses are using AI to manage and respond to reviews in 100+ languages while maintaining quality.', author: 'Sarah Chen', date: '2026-02-28', updatedDate: '2026-03-02', category: 'Product' },
  { slug: 'enterprise-review-security-compliance', title: 'Enterprise Guide to Review Management Security & Compliance', excerpt: 'A comprehensive guide to security best practices, GDPR compliance, and data protection in review management.', author: 'Michael Rodriguez', date: '2026-02-20', updatedDate: null, category: 'Security' },
  { slug: 'product-update-feb-2026', title: 'ReviuCheck Product Update: New Features & Improvements', excerpt: 'Check out the latest features and improvements we have shipped.', author: 'ReviuCheck Team', date: '2026-02-15', updatedDate: null, category: 'Product Updates' },
  { slug: 'roi-ai-review-management', title: 'Measuring ROI of AI-Powered Review Management', excerpt: 'Learn how to calculate the return on investment when implementing AI-powered review management for your business.', author: 'Priya Sharma', date: '2026-02-10', updatedDate: null, category: 'Analytics' },
  { slug: 'integrating-with-tech-stack', title: 'Integrating ReviuCheck with Your Existing Tech Stack', excerpt: 'A step-by-step guide to integrating ReviuCheck with popular CRM, helpdesk, and e-commerce platforms.', author: 'Michael Rodriguez', date: '2026-02-05', updatedDate: null, category: 'Integration' },
  { slug: 'customer-emotions-review-analysis', title: 'Understanding Customer Emotions Through Review Analysis', excerpt: 'Go beyond sentiment scores and understand the emotional drivers behind your customer feedback.', author: 'Sarah Chen', date: '2026-01-28', updatedDate: null, category: 'AI & Technology' },
  { slug: 'real-time-review-monitoring', title: 'Why Real-Time Review Monitoring Matters for Your Brand', excerpt: 'Discover why waiting days to respond to reviews can damage your brand reputation and how real-time monitoring helps.', author: 'Priya Sharma', date: '2026-01-20', updatedDate: null, category: 'Best Practices' },
]

export async function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-4xl font-bold font-heading mb-4">Post Not Found</h1>
        <p className="text-text-secondary">The blog post you are looking for does not exist.</p>
      </div>
    )
  }

  return <BlogPostPage post={post} />
}

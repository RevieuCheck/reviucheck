import { Metadata } from 'next'
import BlogPage from './BlogPage'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Explore articles about AI-powered review management, sentiment analysis, customer experience best practices, and product updates from ReviuCheck.',
  keywords: 'blog, AI reviews, sentiment analysis tips, customer experience, review management insights',
  openGraph: {
    title: 'Blog - ReviuCheck',
    description: 'Explore articles about AI-powered review management and customer experience.',
  },
}

export default function Blog() {
  return <BlogPage />
}

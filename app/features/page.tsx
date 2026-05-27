import { Metadata } from 'next'
import FeaturesPage from './FeaturesPage'

export const metadata: Metadata = {
  title: 'Features',
  description: 'Discover powerful AI-powered features for review management: sentiment analysis, smart responses, multi-language support, spam detection, and real-time analytics.',
  keywords: 'AI review features, sentiment analysis, automated responses, review management tools, customer feedback platform',
  openGraph: {
    title: 'Features - ReviuCheck',
    description: 'Discover powerful AI-powered features for review management.',
  },
}

export default function Features() {
  return <FeaturesPage />
}

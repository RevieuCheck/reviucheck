import { Metadata } from 'next'
import HowItWorksPage from './HowItWorksPage'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Get started with ReviuCheck in 4 simple steps. Sign up, get API key, integrate with 3 lines of code, and watch AI transform your reviews.',
  keywords: 'how it works, integration guide, API setup, review management setup, AI review automation',
  openGraph: {
    title: 'How It Works - ReviuCheck',
    description: 'Get started with ReviuCheck in 4 simple steps.',
  },
}

export default function HowItWorks() {
  return <HowItWorksPage />
}

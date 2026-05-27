import { Metadata } from 'next'
import PricingPage from './PricingPage'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for businesses of all sizes. Starter at $99/mo, Professional at $299/mo, or custom Enterprise plans. No hidden fees.',
  keywords: 'pricing, plans, subscription, review management pricing, AI sentiment analysis pricing, SaaS pricing',
  openGraph: {
    title: 'Pricing - ReviuCheck',
    description: 'Simple, transparent pricing for businesses of all sizes.',
  },
}

export default function Pricing() {
  return <PricingPage />
}

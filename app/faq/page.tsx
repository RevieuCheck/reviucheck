import { Metadata } from 'next'
import FAQPage from './FAQPage'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about ReviuCheck. Learn about our credit system, language support, security, pricing, and more.',
  keywords: 'FAQ, frequently asked questions, review management help, sentiment analysis questions, ReviuCheck help',
  openGraph: {
    title: 'FAQ - ReviuCheck',
    description: 'Frequently asked questions about ReviuCheck.',
  },
}

export default function FAQ() {
  return <FAQPage />
}

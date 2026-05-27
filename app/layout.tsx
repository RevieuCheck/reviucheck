import type { Metadata } from 'next'
import './globals.css'
import { Dosis, Jost } from 'next/font/google'
import { cn } from '@/lib/utils'
import SmoothScroll from '@/components/SmoothScroll'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import PerformanceVitals from '@/components/PerformanceVitals'

const dosis = Dosis({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'ReviuCheck - AI-Powered Review Management Platform',
    template: '%s | ReviuCheck',
  },
  description: 'Transform customer feedback into actionable insights with AI-powered sentiment analysis, automated responses, and multi-language support. Join 500+ businesses using ReviuCheck.',
  keywords: [
    'sentiment analysis',
    'review management',
    'AI customer feedback',
    'review analytics',
    'customer experience',
    'feedback automation',
    'multi-language sentiment',
    'AI review responses',
    'customer feedback platform',
  ],
  authors: [{ name: 'ReviuCheck', url: 'https://reviucheck.com' }],
  creator: 'ReviuCheck',
  publisher: 'ReviuCheck',
  metadataBase: new URL('https://reviucheck.com'),
  openGraph: {
    title: 'ReviuCheck - AI-Powered Review Management',
    description: 'Transform customer feedback into actionable insights with AI-powered sentiment analysis, automated responses, and multi-language support.',
    url: 'https://reviucheck.com',
    siteName: 'ReviuCheck',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ReviuCheck - AI Review Management Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReviuCheck - AI-Powered Review Management',
    description: 'Transform customer feedback into actionable insights with AI-powered sentiment analysis.',
    images: ['/og-image.png'],
    creator: '@reviucheck',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("font-sans", jost.variable, dosis.variable)}>
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className="relative min-h-screen bg-background text-text-primary">
        <BreadcrumbSchema />
        <PerformanceVitals />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'ReviuCheck',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://reviucheck.com',
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://reviucheck.com'}/divyaansh.png`,
              sameAs: [
                process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/company/reviucheck',
                process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/reviucheck',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://reviucheck.com',
              name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'ReviuCheck',
            }),
          }}
        />
        <Header />
        <SmoothScroll>
          <main className="min-h-screen">
            {children}
          </main>
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import { Montserrat, Raleway } from 'next/font/google'
import { cn } from '@/lib/utils'
import SmoothScroll from '@/components/SmoothScroll'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ReviuCheck - AI-Powered Review Management Platform',
  description: 'Transform customer feedback into actionable insights with AI-powered sentiment analysis, automated responses, and multi-language support. Join 500+ businesses using ReviuCheck.',
  keywords: 'sentiment analysis, review management, AI customer feedback, review analytics',
  authors: [{ name: 'ReviuCheck' }],
  openGraph: {
    title: 'ReviuCheck - AI-Powered Review Management',
    description: 'Transform customer feedback into actionable insights',
    url: 'https://reviucheck.com',
    siteName: 'ReviuCheck',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReviuCheck - AI-Powered Review Management',
    description: 'Transform customer feedback into actionable insights',
    images: ['/og-image.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("font-sans", raleway.variable, montserrat.variable)}>
      <body className="relative min-h-screen bg-background">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
}

export default function SEOHead({
  title = 'ReviuCheck - AI-Powered Review Management for Modern Businesses',
  description = 'Transform customer feedback into actionable insights with AI-powered sentiment analysis, automated responses, and multi-language support. Join 500+ businesses using ReviuCheck.',
  keywords = 'sentiment analysis, review management, AI customer feedback, review analytics, customer experience, feedback automation, multi-language sentiment',
  ogImage = '/og-image.png',
}: SEOHeadProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'ReviuCheck',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '99',
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '127',
            },
          }),
        }}
      />
    </>
  )
}

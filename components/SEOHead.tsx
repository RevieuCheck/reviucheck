import Head from 'next/head'

interface SEOHeadProps {
    title?: string
    description?: string
    keywords?: string
    ogImage?: string
}

export default function SEOHead({
    title = "ReviuCheck - AI-Powered Review Management for Modern Businesses",
    description = "Transform customer feedback into actionable insights with AI-powered sentiment analysis, automated responses, and multi-language support. Join 500+ businesses using ReviuCheck.",
    keywords = "sentiment analysis, review management, AI customer feedback, review analytics, customer experience, feedback automation, multi-language sentiment",
    ogImage = "/og-image.png"
}: SEOHeadProps) {
    return (
        <Head>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="ReviuCheck" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="index, follow" />

            {/* Open Graph Tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content="https://reviucheck.com" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Canonical URL */}
            <link rel="canonical" href="https://reviucheck.com" />

            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "ReviuCheck",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Web",
                        "offers": {
                            "@type": "Offer",
                            "price": "99",
                            "priceCurrency": "USD"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "ratingCount": "127"
                        }
                    })
                }}
            />
        </Head>
    )
}
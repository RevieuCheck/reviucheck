import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://reviucheck.com'
  const currentDate = new Date()

  const routes: { url: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'daily' | 'yearly' }[] = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' },
    { url: '/features', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/how-it-works', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/pricing', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/faq', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/blog', priority: 0.8, changeFrequency: 'daily' },
    { url: '/careers', priority: 0.6, changeFrequency: 'weekly' },
    { url: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/terms', priority: 0.3, changeFrequency: 'yearly' },
    { url: '/security', priority: 0.4, changeFrequency: 'monthly' },
    { url: '/gdpr', priority: 0.4, changeFrequency: 'monthly' },
    { url: '/api-docs', priority: 0.5, changeFrequency: 'weekly' },
  ]

  return routes.map(route => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}

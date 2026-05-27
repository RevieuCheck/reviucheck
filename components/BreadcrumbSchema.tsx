'use client'

import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  name: string
  item: string
  position: number
}

const routeNames: Record<string, string> = {
  'features': 'Features',
  'how-it-works': 'How It Works',
  'pricing': 'Pricing',
  'faq': 'FAQ',
  'about': 'About Us',
  'blog': 'Blog',
  'careers': 'Careers',
  'contact': 'Contact',
  'privacy': 'Privacy Policy',
  'terms': 'Terms of Service',
  'security': 'Security',
  'gdpr': 'GDPR',
  'api-docs': 'API Documentation',
  'page': 'Page',
}

export default function BreadcrumbSchema() {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(Boolean)

  if (paths.length === 0) return null

  const baseUrl = 'https://reviucheck.com'

  const items: BreadcrumbItem[] = [
    { name: 'Home', item: baseUrl, position: 1 },
  ]

  let currentPath = ''
  paths.forEach((path, index) => {
    currentPath += `/${path}`
    const name = routeNames[path] || path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
    items.push({
      name,
      item: `${baseUrl}${currentPath}`,
      position: index + 2,
    })
  })

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map(({ name, item, position }) => ({
      '@type': 'ListItem',
      position,
      name,
      item,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}

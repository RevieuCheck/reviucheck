agents.md - SEO Implementation Task File
markdown
# SEO Implementation Tasks for ReviuCheck

## Overview
Implement all missing SEO components identified in the SEO audit. Current SEO score is 6.5/10. Target is 8.5/10 after implementation.

## Priority: CRITICAL (Do These First)

### Task 1: Create Sitemap.xml
**File:** `app/sitemap.ts`

Create a dynamic sitemap that includes all 15 routes with lastModified dates.

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://reviucheck.com'
  
  // Static routes with their priorities
  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/features', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/how-it-works', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/pricing', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/faq', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.8, changeFrequency: 'daily' as const },
    { url: '/careers', priority: 0.6, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/security', priority: 0.4, changeFrequency: 'monthly' as const },
    { url: '/gdpr', priority: 0.4, changeFrequency: 'monthly' as const },
    { url: '/api-docs', priority: 0.5, changeFrequency: 'weekly' as const },
  ]
  
  const currentDate = new Date()
  
  return routes.map(route => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}

###Task 2: Create robots.txt
File: public/robots.txt

txt
User-agent: *
Allow: /
Disallow: /api/private/
Disallow: /admin/

Sitemap: https://reviucheck.com/sitemap.xml
Host: https://reviucheck.com
Task 3: Fix Fake JSON-LD Data
File: app/layout.tsx

Remove or comment out the fake aggregateRating from the SoftwareApplication schema.

Find this block and remove the aggregateRating property:

typescript
// REMOVE THIS ENTIRE BLOCK:
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "ratingCount": "127"
}
Replace with optional conditional schema (if you have real data later):

typescript
// Only include if you have REAL data from database
...(process.env.NEXT_PUBLIC_SHOW_REAL_RATINGS === 'true' && {
  aggregateRating: {
    "@type": "AggregateRating",
    "ratingValue": process.env.NEXT_PUBLIC_RATING_VALUE,
    "ratingCount": process.env.NEXT_PUBLIC_RATING_COUNT,
  }
})
Priority: HIGH (Do These Second)
Task 4: Add Breadcrumb Schema
File: app/components/BreadcrumbSchema.tsx (create new component)

typescript
'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface BreadcrumbItem {
  name: string
  item: string
  position: number
}

export default function BreadcrumbSchema() {
  const pathname = usePathname()
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([])
  
  useEffect(() => {
    const paths = pathname.split('/').filter(Boolean)
    const baseUrl = 'https://reviucheck.com'
    
    const items: BreadcrumbItem[] = [
      { name: 'Home', item: baseUrl, position: 1 }
    ]
    
    let currentPath = ''
    paths.forEach((path, index) => {
      currentPath += `/${path}`
      const name = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ')
      
      items.push({
        name: name,
        item: `${baseUrl}${currentPath}`,
        position: index + 2
      })
    })
    
    setBreadcrumbs(items)
  }, [pathname])
  
  if (breadcrumbs.length <= 1) return null
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map(({ name, item, position }) => ({
      "@type": "ListItem",
      "position": position,
      "name": name,
      "item": item
    }))
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
Then add to app/layout.tsx:

typescript
import BreadcrumbSchema from './components/BreadcrumbSchema'

// Inside your RootLayout component, add:
<BreadcrumbSchema />
Task 5: Add LastModified Dates to Sitemap
File: app/sitemap.ts (already included in Task 1)

Ensure each route has a proper lastModified date. For dynamic content like blog posts, fetch from CMS.

Task 6: Create Blog Pagination Structure
Files to create:

app/blog/page.tsx (modify existing)

app/blog/page/[page]/page.tsx (new)

Modified app/blog/page.tsx:

typescript
import { redirect } from 'next/navigation'

export default function BlogPage() {
  // Redirect to page 1
  redirect('/blog/page/1')
}
New app/blog/page/[page]/page.tsx:

typescript
import { Metadata } from 'next'

interface BlogPageProps {
  params: { page: string }
}

const POSTS_PER_PAGE = 10

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const pageNum = parseInt(params.page)
  
  return {
    title: `Blog - Page ${pageNum}`,
    description: `Read the latest articles about review management, sentiment analysis, and customer experience. Page ${pageNum}`,
    robots: {
      index: pageNum <= 3, // Only index first 3 pages
      follow: true,
    },
  }
}

export default async function BlogPaginationPage({ params }: BlogPageProps) {
  const currentPage = parseInt(params.page)
  const totalPosts = 50 // Replace with actual count from your CMS
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE)
  
  // Fetch posts for this page
  const posts = await getPostsForPage(currentPage, POSTS_PER_PAGE)
  
  return (
    <div>
      <h1>Blog - Page {currentPage}</h1>
      
      {/* Your blog posts grid */}
      <div className="grid gap-8">
        {posts.map(post => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <time dateTime={post.date}>{post.date}</time>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
      
      {/* Pagination links */}
      <div className="flex gap-4 mt-8">
        {currentPage > 1 && (
          <a href={`/blog/page/${currentPage - 1}`} rel="prev">
            ← Previous
          </a>
        )}
        
        {currentPage < totalPages && (
          <a href={`/blog/page/${currentPage + 1}`} rel="next">
            Next →
          </a>
        )}
      </div>
    </div>
  )
}

// Helper function - implement based on your data source
async function getPostsForPage(page: number, perPage: number) {
  // Fetch from your database or CMS
  // Return array of posts with id, title, date, excerpt
  return []
}
Task 7: Add Blog Structured Data (Article Schema)
File: app/blog/[slug]/page.tsx (create new for individual blog posts)

typescript
import { Metadata } from 'next'

interface BlogPostProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const post = await getBlogPost(params.slug)
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "datePublished": post.date,
    "dateModified": post.updatedDate || post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://reviucheck.com/blog/${params.slug}`,
    },
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <article>
        <h1>{post.title}</h1>
        <div className="meta">
          By {post.author} on <time dateTime={post.date}>{post.date}</time>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  )
}

async function getBlogPost(slug: string) {
  // Fetch from your CMS or database
  return {
    title: 'Sample Post',
    excerpt: 'Sample excerpt...',
    content: '<p>Sample content...</p>',
    author: 'Author Name',
    date: '2024-01-01',
    updatedDate: null,
  }
}
Priority: MEDIUM (Do These Third)
Task 8: Verify Google Search Console
Action Items:

Go to https://search.google.com/search-console

Add property: https://reviucheck.com

Verify ownership using DNS record or HTML file upload

Submit sitemap: https://reviucheck.com/sitemap.xml

Request indexing for all pages

Task 9: Fix Thin Content Pages
For /careers page - Add actual job listings:

typescript
// app/careers/page.tsx - Add at least 500 words of content
// Include: 
// - Company culture description
// - Open positions with descriptions
// - Benefits and perks
// - Application process
For /api-docs page - Add documentation structure:

typescript
// app/api-docs/page.tsx
// Add sections:
// - Authentication method
// - Endpoint documentation
// - Request/response examples
// - Rate limits
// - Error codes
Minimum content requirements:

/careers: 500+ words

/api-docs: 1000+ words

/blog index: 300+ words introducing the blog

Task 10: Add rel="prev" and rel="next" for Blog Pagination
In app/blog/page/[page]/page.tsx (already included in Task 6):

<link rel="prev" href="..." /> for page > 1

<link rel="next" href="..." /> for page < total

These tell Google about paginated series.

Priority: LOW (Nice to Have)
Task 11: Create XML Sitemap Index (if >50,000 URLs)
Not needed for current scale (15 URLs only). Skip.

Task 12: Add hreflang for Multi-language
Only if you support multiple languages. Skip for MVP.

Task 13: Create 404 Page with Good UX
File: app/not-found.tsx

typescript
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-4">Page Not Found</h2>
      <p className="mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <Link href="/" className="btn-primary">
        Return Home
      </Link>
    </div>
  )
}

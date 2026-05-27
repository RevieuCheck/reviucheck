# SEO Implementation — ReviuCheck

## Overview

This document captures every SEO enhancement applied to the ReviuCheck website. The goal was to make the site fully indexable, shareable on social media, and compliant with search engine best practices.

All 35 routes are statically prerendered (SSG or static) for maximum crawl efficiency.

---

## 1. Sitemap (`app/sitemap.ts`)

A dynamic sitemap served at `/sitemap.xml` listing all 15 static pages with metadata:

| Route | Priority | Change Frequency |
|---|---|---|
| `/` | 1.0 | weekly |
| `/features` | 0.9 | weekly |
| `/how-it-works` | 0.9 | weekly |
| `/pricing` | 0.9 | weekly |
| `/faq` | 0.8 | monthly |
| `/about` | 0.7 | monthly |
| `/blog` | 0.8 | daily |
| `/careers` | 0.6 | weekly |
| `/contact` | 0.7 | monthly |
| `/privacy` | 0.3 | yearly |
| `/terms` | 0.3 | yearly |
| `/security` | 0.4 | monthly |
| `/gdpr` | 0.4 | monthly |
| `/api-docs` | 0.5 | weekly |

Each entry includes a `lastModified` timestamp set to the build date.

---

## 2. Robots.txt (`public/robots.txt`)

```txt
User-agent: *
Allow: /
Disallow: /api/private/
Disallow: /admin/

Sitemap: https://reviucheck.com/sitemap.xml
Host: https://reviucheck.com
```

- Blocks admin and private API paths from crawling.
- Points crawlers to the sitemap.

---

## 3. Metadata Architecture

### Root Layout (`app/layout.tsx`)

The root layout defines a **title template** so every sub-page automatically inherits the brand name:

```ts
title: {
  default: 'ReviuCheck - AI-Powered Review Management Platform',
  template: '%s | ReviuCheck',
}
```

A page exporting `title: 'Features'` renders as `Features | ReviuCheck` in the browser title bar and SERP snippet.

### Per-Page Metadata

Every route exports a `metadata` object from its `page.tsx` with:

| Field | Purpose |
|---|---|
| `title` | Page-specific title (used with template) |
| `description` | 150–160 char meta description for SERP |
| `keywords` | Relevant comma-separated keywords |
| `openGraph.title` | Title for social shares (Facebook, LinkedIn, etc.) |
| `openGraph.description` | Description for social shares |
| `robots` | Page-level index/follow directives |

**Pages with dedicated metadata:** `/`, `/features`, `/how-it-works`, `/pricing`, `/faq`, `/about`, `/blog`, `/blog/page/[page]`, `/blog/[slug]`, `/careers`, `/contact`, `/privacy`, `/terms`, `/security`, `/gdpr`, `/api-docs`, `/not-found`, `/author/[slug]`.

---

## 4. Open Graph & Twitter Cards

Defined in `app/layout.tsx`:

```ts
openGraph: {
  title: 'ReviuCheck - AI-Powered Review Management',
  description: '...',
  url: 'https://reviucheck.com',
  siteName: 'ReviuCheck',
  images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '...' }],
  locale: 'en_US',
  type: 'website',
},
twitter: {
  card: 'summary_large_image',
  title: 'ReviuCheck - AI-Powered Review Management',
  description: '...',
  images: ['/og-image.png'],
  creator: '@reviucheck',
},
```

Blog article pages override og tags with `type: 'article'`, `publishedTime`, and `authors` for rich social previews.
Author pages override og with `image` set to the author profile photo.

---

## 5. Robots & Indexing

```ts
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
```

- `index: true` — allow search engines to index every page.
- `follow: true` — allow crawlers to follow all links.
- `max-snippet: -1` — allow full-length snippets (no truncation).

The 404 page sets `robots: { index: false, follow: true }` to prevent indexing.
Blog pagination pages > page 3 set `index: false` to avoid thin content indexing.

---

## 6. Canonical URL

`metadataBase` is set to `https://reviucheck.com`, which Next.js uses to resolve relative URLs in `<link rel="canonical">` automatically.

```ts
metadataBase: new URL('https://reviucheck.com'),
```

A `<link rel="sitemap" type="application/xml" href="/sitemap.xml" />` is also injected in the `<head>`.

---

## 7. Structured Data (JSON-LD Schema)

### SoftwareApplication (All Pages — `components/SEOHead.tsx`)

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ReviuCheck",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "99",
    "priceCurrency": "USD"
  }
}
```

**Fix applied:** `aggregateRating` is now conditional — only rendered when `NEXT_PUBLIC_SHOW_REAL_RATINGS=true`:
```ts
...(process.env.NEXT_PUBLIC_SHOW_REAL_RATINGS === 'true' && {
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: process.env.NEXT_PUBLIC_RATING_VALUE,
    ratingCount: process.env.NEXT_PUBLIC_RATING_COUNT,
  },
})
```

This prevents fake review stars from appearing in rich results until real data is available.

### Organization Schema (All Pages — `app/layout.tsx`)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ReviuCheck",
  "url": "https://reviucheck.com",
  "logo": "https://reviucheck.com/divyaansh.png",
  "sameAs": [
    "https://linkedin.com/company/reviucheck",
    "https://twitter.com/reviucheck"
  ]
}
```

Values are pulled from env vars (`NEXT_PUBLIC_LINKEDIN_URL`, `NEXT_PUBLIC_TWITTER_URL`, `NEXT_PUBLIC_COMPANY_NAME`, `NEXT_PUBLIC_SITE_URL`) with hardcoded fallbacks.

### WebSite Schema (All Pages — `app/layout.tsx`)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://reviucheck.com",
  "name": "ReviuCheck"
}
```

Globally injected alongside Organization schema.

### BreadcrumbList (All Sub-Pages — `components/BreadcrumbSchema.tsx`)

A `BreadcrumbList` schema is injected on every page deeper than the homepage via a client component. It automatically reads the URL path and maps segments to human-readable names (e.g. `/how-it-works` → "How It Works"):

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://reviucheck.com" },
    { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://reviucheck.com/features" }
  ]
}
```

This qualifies pages for breadcrumb rich results in SERP.

### Article (Blog Posts — `app/blog/[slug]/BlogPostPage.tsx`)

Each individual blog post renders an `Article` schema with:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Post Title",
  "description": "Post excerpt...",
  "author": { "@type": "Person", "name": "Author Name" },
  "datePublished": "2026-03-15",
  "dateModified": "2026-03-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://reviucheck.com/blog/post-slug"
  }
}
```

### Person (Author Pages — `app/author/[slug]/AuthorPage.tsx`)

Each author page renders a `Person` schema with:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Divyaansh Tandon",
  "jobTitle": "Founder & CEO",
  "description": "...",
  "image": "https://reviucheck.com/divyaansh.png",
  "sameAs": ["https://www.linkedin.com/in/divyaansh-tandon/"],
  "email": "divyaanshtandon09@gmail.com",
  "telephone": "7223837854"
}
```

Author pages for: **Divyaansh Tandon** (Founder & CEO — linkedin, phone, email), ReviuCheck Team, Sarah Chen, Michael Rodriguez, Priya Sharma.

---

## 8. Author System (`app/author/[slug]/`)

- `lib/authors.ts` — author data store with slug, name, role, bio, image, linkedin, email, phone
- `app/author/[slug]/page.tsx` — SSG with `generateStaticParams` for 5 authors
- `app/author/[slug]/AuthorPage.tsx` — displays author photo (`/divyaansh.png`), bio, contact links, articles list
- Blog posts link author names to their `/author/[slug]` pages
- **Divyaansh Tandon** shown as Founder & CEO with:
  - LinkedIn: https://www.linkedin.com/in/divyaansh-tandon/
  - Phone: 7223837854
  - Email: divyaanshtandon09@gmail.com
  - Photo: `/divyaansh.png`

---

## 9. Blog Topical Clusters

- `lib/blogCategories.ts` — `BLOG_TOPICS` constant array (10 topics) + `blogPosts` array with topic tags
- `lib/internalLinks.ts` — `getRelatedPosts()` helper scoring by shared category (3pts), shared topics (2pts each), same author (1pt)
- Blog post pages show a **Related Articles** section with 3 pre-computed related posts
- Related posts are statically determined at build time (no client-side fetching)

---

## 10. Font Optimization

Google Fonts (Dosis & Jost) are loaded via `next/font/google` with `display: 'swap'` to prevent layout shift:

```ts
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
```

---

## 11. Performance Optimizations (SEO-Adjacent)

| Technique | Implementation |
|---|---|
| **Zero JS for static pages** | All content pages are static (○ or ● SSG). Zero client JS for SEO content. |
| **Font preloading** | `next/font` inlines critical font data and preloads the rest. |
| **Semantic HTML** | `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` used throughout. |
| **Heading hierarchy** | Each page has a single `<h1>` followed by `<h2>`/`<h3>` for logical document outline. |
| **Alt attributes** | All `<img>` tags include descriptive `alt` text. |
| **Meta viewport** | `width=device-width, initial-scale=1.0` for mobile usability. |
| **Static generation** | Blog, posts, pagination, authors use `generateStaticParams` for SSG. |

---

## 12. Core Web Vitals Monitoring (`components/PerformanceVitals.tsx`)

A `PerformanceVitals` component is injected in the layout:

- Tracks: **CLS**, **LCP**, **INP**, **FCP**, **TTFB** via `PerformanceObserver`
- Logs metrics in development mode (`NODE_ENV === 'development'`)
- Observes: `largest-contentful-paint`, `layout-shift`, `first-input`, `paint`, `navigation`
- Architecture ready for analytics integration (replace `console.log` with API call)
- No external analytics (no GA) — just uses native browser APIs

---

## 13. External Link Security

Audited the entire codebase for `target="_blank"` links. All instances include `rel="noopener noreferrer"`:

| Location | Link | Secured |
|---|---|---|
| `Header.tsx` | LinkedIn social icon | `rel="noopener noreferrer"` |
| `Footer.tsx` | LinkedIn icon | `rel="noopener noreferrer"` |
| `Footer.tsx` | Twitter icon | `rel="noopener noreferrer"` |
| `Footer.tsx` | LinkedIn footer link | `rel="noopener noreferrer"` |
| `AuthorPage.tsx` | LinkedIn profile link | `rel="noopener noreferrer"` |

---

## 14. Social Profiles & Environment Support (`.env.example`)

```env
# Social Profiles
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/reviucheck
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/reviucheck
NEXT_PUBLIC_COMPANY_NAME=ReviuCheck
NEXT_PUBLIC_SITE_URL=https://reviucheck.com

# SEO Ratings (set to "true" when real data is available)
NEXT_PUBLIC_SHOW_REAL_RATINGS=false
NEXT_PUBLIC_RATING_VALUE=4.8
NEXT_PUBLIC_RATING_COUNT=127

# Google Search Console
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

Organization, WebSite, and header/footer social links all consume these env vars with hardcoded fallbacks.

---

## 15. Internal Linking Structure

- **Header** — links to `/features`, `/how-it-works`, `/pricing`, `/faq`, `/contact` + LinkedIn icon
- **Footer** — Product (5), Company (4), Legal (4) pages + LinkedIn, Twitter, Email icons
- **Section CTAs** — each home section links to its dedicated page
- **Cross-links** — `/pricing` ↔ `/faq` ↔ `/contact`; `/features` ↔ `/pricing`; `/about` ↔ `/careers` ↔ `/contact`
- **Blog pagination** — Prev/Next with `rel="prev/next"`, page number links
- **Blog posts** — author names link to `/author/[slug]`, Related Articles at bottom
- **404 page** — links to `/` and `/contact`

---

## 16. Blog Pagination Structure

- `/blog` redirects (301) to `/blog/page/1`
- `/blog/page/[page]` — paginated list with 10 posts per page
- `rel="prev"` and `rel="next"` on adjacent page links
- Pages > 3 are set to `noindex` to prevent thin content
- `generateStaticParams` pre-renders all 5 pages at build time

---

## 17. 404 Page (`app/not-found.tsx`)

A custom 404 page with:
- `robots: { index: false }` to prevent indexing
- Gradient text "404" heading
- "Return Home" and "Contact Support" navigation links
- Same dark theme styling for consistent UX

---

## 18. Verification

```ts
verification: {
  google: 'your-google-verification-code',
}
```

Replace with your Google Search Console verification code.

---

## 19. Future Improvements

- [ ] Replace placeholder Open Graph image `/og-image.png` with a real branded image (1200×630).
- [ ] Add `hreflang` tags for multi-region support.
- [ ] Submit sitemap to Google Search Console and Bing Webmaster Tools.
- [ ] Set `NEXT_PUBLIC_SHOW_REAL_RATINGS=true` with real rating values.
- [ ] Implement server-side search for blog content.
- [ ] Add video sitemap for any video content.
- [ ] Set up Google Analytics / Search Console integration.

---

## Appendix: Full Page Inventory

| Route | Type | Title Template | OG Tags | JSON-LD | Static |
|---|---|---|---|---|---|
| `/` | Static | default | ✓ | SW App + Org + WebSite + Breadcrumb | ○ |
| `/features` | Static | %s | ✓ | + Breadcrumb | ○ |
| `/how-it-works` | Static | %s | ✓ | + Breadcrumb | ○ |
| `/pricing` | Static | %s | ✓ | + Breadcrumb | ○ |
| `/faq` | Static | %s | ✓ | + Breadcrumb | ○ |
| `/about` | Static | %s | ✓ | + Breadcrumb | ○ |
| `/blog` | Static | %s | ✓ | Base schemas | ○ (redirects) |
| `/blog/page/[page]` | SSG | %s | ✓ | + Breadcrumb | ● (5 pages) |
| `/blog/[slug]` | SSG | %s | ✓ | + Article + Breadcrumb | ● (6 posts) |
| `/author/[slug]` | SSG | %s | ✓ | + Person + Breadcrumb | ● (5 authors) |
| `/careers` | Static | %s | ✓ | + Breadcrumb | ○ |
| `/contact` | Static | %s | ✓ | + Breadcrumb | ○ |
| `/privacy` | Static | %s | ✓ | + Breadcrumb | ○ |
| `/terms` | Static | %s | ✓ | + Breadcrumb | ○ |
| `/security` | Static | %s | ✓ | + Breadcrumb | ○ |
| `/gdpr` | Static | %s | ✓ | + Breadcrumb | ○ |
| `/api-docs` | Static | %s | ✓ | + Breadcrumb | ○ |
| `/not-found` | Static | %s | - | - | ○ |
| `/sitemap.xml` | Static | - | - | - | ○ |

**Legend:** ○ = static, ● = SSG (uses `generateStaticParams`), SW App = SoftwareApplication, Org = Organization

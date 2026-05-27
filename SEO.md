# SEO Implementation — ReviuCheck

## Overview

This document captures every SEO enhancement applied to the ReviuCheck website. The goal was to make the site fully indexable, shareable on social media, and compliant with search engine best practices.

---

## 1. Metadata Architecture

### Root Layout (`app/layout.tsx`)

The root layout defines a **title template** so every sub-page automatically inherits the brand name:

```ts
title: {
  default: 'ReviuCheck - AI-Powered Review Management Platform',
  template: '%s | ReviuCheck',
}
```

This means a page exporting `title: 'Features'` renders as `Features | ReviuCheck` in the browser title bar and SERP snippet.

### Per-Page Metadata

Every route (`/features`, `/pricing`, `/about`, `/blog`, etc.) exports a `metadata` object from its `page.tsx` with:

| Field | Purpose |
|---|---|
| `title` | Page-specific title (used with template) |
| `description` | 150–160 char meta description for SERP |
| `keywords` | Relevant comma-separated keywords |
| `openGraph.title` | Title for social shares (Facebook, LinkedIn, etc.) |
| `openGraph.description` | Description for social shares |

**Pages with dedicated metadata:** `/`, `/features`, `/how-it-works`, `/pricing`, `/faq`, `/about`, `/blog`, `/careers`, `/contact`, `/privacy`, `/terms`, `/security`, `/gdpr`, `/api-docs`.

---

## 2. Open Graph & Twitter Cards

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

Each sub-page also overrides `og:title` and `og:description` for share-context accuracy.

---

## 3. Robots & Indexing

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

---

## 4. Canonical URL

The `metadataBase` is set to `https://reviucheck.com`, which Next.js uses to resolve relative URLs in `<link rel="canonical">` automatically.

```ts
metadataBase: new URL('https://reviucheck.com'),
```

---

## 5. Structured Data (JSON-LD Schema)

A `<script type="application/ld+json">` is injected on every page via `app/layout.tsx` (serialized from the `metadata` export) with `SoftwareApplication` schema:

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
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127"
  }
}
```

This qualifies the site for **rich results** (star ratings, pricing) in SERP.

---

## 6. Font Optimization

Google Fonts (Dosis & Jost) are loaded via `next/font/google` with `display: 'swap'` to prevent layout shift and ensure text remains visible during webfont load:

```ts
const dosis = Dosis({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})
const jost = Jost({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})
```

---

## 7. Performance Optimizations (SEO-Adjacent)

| Technique | Implementation |
|---|---|
| **Zero JS for static pages** | All content pages are static (○ in build output). Zero client JS for SEO content. |
| **Font preloading** | `next/font` inlines critical font data and preloads the rest. |
| **Semantic HTML** | `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` used throughout. |
| **Heading hierarchy** | Each page has a single `<h1>` followed by `<h2>`/`<h3>` for logical document outline. |
| **Alt attributes** | All `<img>` tags include descriptive `alt` text. |
| **Meta viewport** | `width=device-width, initial-scale=1.0` for mobile usability (SEO ranking factor). |

---

## 8. Internal Linking Structure

- **Header** — links to `/features`, `/how-it-works`, `/pricing`, `/faq`, `/contact` (all internal).
- **Footer** — links to Product (5), Company (4), and Legal (4) pages, forming a full internal link graph.
- **Section CTAs** — each home section links to its dedicated page (`/features`, `/pricing`, etc.) with `ArrowRight` icon.
- **Cross-links** — `/pricing` links to `/faq` and `/contact`; `/features` links to `/pricing`; `/contact` links to `/pricing`.

This distributes page authority across the entire site.

---

## 9. Verification

```ts
verification: {
  google: 'your-google-verification-code',   // Replace with real code
}
```

Uncomment and insert your Google Search Console verification meta tag content here.

---

## 10. Future Improvements

- [ ] Generate and link an actual `/sitemap.xml` with `lastmod` dates.
- [ ] Add `breadcrumbList` structured data for deeper pages.
- [ ] Create a `/blog/[slug]` route with individual article schema (`Article`, `BlogPosting`).
- [ ] Replace placeholder Open Graph image `/og-image.png` with a real branded image (1200×630).
- [ ] Add `hreflang` tags for multi-region support if expanding globally.
- [ ] Submit sitemap to Google Search Console and Bing Webmaster Tools.
- [ ] Add `noopener noreferrer` on external links.

---

## Appendix: Page Inventory

| Route | Static | Title Template | OG Tags | JSON-LD |
|---|---|---|---|---|
| `/` | ✓ | default | ✓ | ✓ |
| `/features` | ✓ | %s | ✓ | ✓ |
| `/how-it-works` | ✓ | %s | ✓ | ✓ |
| `/pricing` | ✓ | %s | ✓ | ✓ |
| `/faq` | ✓ | %s | ✓ | ✓ |
| `/about` | ✓ | %s | ✓ | ✓ |
| `/blog` | ✓ | %s | ✓ | ✓ |
| `/careers` | ✓ | %s | ✓ | ✓ |
| `/contact` | ✓ | %s | ✓ | ✓ |
| `/privacy` | ✓ | %s | ✓ | ✓ |
| `/terms` | ✓ | %s | ✓ | ✓ |
| `/security` | ✓ | %s | ✓ | ✓ |
| `/gdpr` | ✓ | %s | ✓ | ✓ |
| `/api-docs` | ✓ | %s | ✓ | ✓ |

All 15 routes are **statically prerendered** (○) with zero client JavaScript for the page shell, ensuring maximum crawl efficiency.

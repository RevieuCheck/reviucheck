# agents.md — ReviuCheck SEO Enhancements (Phase 2)

## Objective

Implement Phase 2 SEO improvements for ReviuCheck without changing the existing design system, routing architecture, theme, or UI behavior.

Current stack:

- Framework: Next.js App Router
- Rendering: Static Generation (SSG)
- Existing SEO:
  - Sitemap
  - Robots.txt
  - Metadata API
  - OpenGraph
  - Twitter Cards
  - SoftwareApplication Schema
  - Breadcrumb Schema
  - Blog Article Schema
  - Static prerendering
  - Canonical URLs
  - Pagination SEO

Goal:

Improve entity recognition, SERP visibility, E-E-A-T signals, image optimization, and structured data completeness.

---

# RULES

1. DO NOT modify visual UI.
2. DO NOT change routes.
3. DO NOT break existing metadata.
4. Follow existing theme architecture.
5. Reuse existing SEO component patterns.
6. Use TypeScript.
7. Keep implementation server-safe.
8. Preserve SSG behavior.
9. Preserve existing JSON-LD schemas.
10. Add only incremental improvements.

---

# TASK 1 — Add Organization Schema

Create:

components/schema/OrganizationSchema.tsx

Implementation:

```tsx
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ReviuCheck",
    url: "https://reviucheck.com",
    logo: "https://reviucheck.com/logo.png",

    sameAs: [
      "https://linkedin.com/company/reviucheck",
      "https://twitter.com/reviucheck"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}
```

Requirements:

- Inject globally inside app/layout.tsx
- Load alongside existing SoftwareApplication schema
- Must not duplicate schema output

---

# TASK 2 — Add FAQ Structured Data

Create:

components/schema/FAQSchema.tsx

Props:

```ts
type FAQItem = {
  question: string
  answer: string
}
```

Implementation:

Generate:

```json
{
 "@context":"https://schema.org",
 "@type":"FAQPage"
}
```

Map all FAQ entries into:

```json
mainEntity
```

Component:

```tsx
interface FAQSchemaProps {
  faqs: FAQItem[]
}
```

Output:

```tsx
<script
 type="application/ld+json"
/>
```

Requirements:

- Inject ONLY on FAQ page
- Reuse existing FAQ content
- No duplicated content source

Implementation target:

```
app/faq/page.tsx
```

Example:

```tsx
<FAQSchema faqs={faqData} />
```

---

# TASK 3 — Add WebSite Schema

Create:

components/schema/WebSiteSchema.tsx

Implementation:

```tsx
{
 "@context":"https://schema.org",
 "@type":"WebSite",
 "url":"https://reviucheck.com",
 "name":"ReviuCheck"
}
```

Conditional:

IF search functionality exists:

Add:

```json
potentialAction
```

Example:

```json
{
 "@type":"SearchAction",
 "target":"https://reviucheck.com/search?q={search_term_string}",
 "query-input":"required name=search_term_string"
}
```

Requirements:

- Detect existing search route
- Do NOT add SearchAction if route missing
- Inject globally

Location:

```
app/layout.tsx
```

---

# TASK 4 — Improve Next Image SEO

Audit entire codebase.

Find:

```tsx
<Image
```

Requirements:

Hero images:

Add:

```tsx
priority
```

Responsive images:

Add:

```tsx
sizes="
(max-width:768px) 100vw,
(max-width:1200px) 50vw,
33vw
"
```

Decorative images:

Ensure:

```tsx
alt=""
```

Content images:

Ensure descriptive alt text.

Do NOT:

- Add priority everywhere
- Break CLS optimization

Priority only:

- Hero section
- Largest contentful paint image

---

# TASK 5 — Add Author System Foundation

Create route:

```
app/author/[slug]/page.tsx
```

Create:

```
lib/authors.ts
```

Structure:

```ts
export const authors = [
{
 slug:"team",
 name:"ReviuCheck Team",
 bio:"",
 role:"",
 image:""
}
]
```

Requirements:

Generate metadata:

```tsx
generateMetadata()
```

Metadata:

- title
- description
- openGraph

Add Author schema:

```json
{
 "@type":"Person"
}
```

Blog articles:

Link author names:

Current:

```
Author Name
```

Replace:

```tsx
<Link href={`/author/${slug}`}>
```

Requirements:

SSG author pages.

---

# TASK 6 — Blog Topical Cluster Preparation

Create:

```
lib/blogCategories.ts
```

Structure:

```ts
export const BLOG_TOPICS = [
 "Google Reviews",
 "AI Review Management",
 "Customer Feedback",
 "Review Analytics",
 "Reputation Management"
]
```

Requirements:

Create helper:

```
lib/internalLinks.ts
```

Generate contextual blog cross-links.

Rule:

Related content section at bottom blog pages.

Limit:

3 related posts.

Implementation target:

```
app/blog/[slug]
```

Requirements:

- Preserve SSG
- No client rendering

---

# TASK 7 — Add External Link Security

Audit entire project.

Find:

```tsx
target="_blank"
```

Ensure:

```tsx
rel="noopener noreferrer"
```

Apply everywhere.

No exceptions.

---

# TASK 8 — Core Web Vitals Monitoring Foundation

Create:

```
components/PerformanceVitals.tsx
```

Implementation:

Use:

```tsx
export function reportWebVitals(metric)
```

Track:

- CLS
- LCP
- INP
- FCP
- TTFB

Requirements:

Development only logging:

```ts
NODE_ENV === "development"
```

Output:

```ts
console.log(metric)
```

Prepare architecture for analytics integration later.

Do NOT add GA.

---

# TASK 9 — Add Missing Social Profiles ENV Support

Create:

```
.env.example
```

Add:

```env
NEXT_PUBLIC_LINKEDIN_URL=
NEXT_PUBLIC_TWITTER_URL=
NEXT_PUBLIC_COMPANY_NAME=ReviuCheck
NEXT_PUBLIC_SITE_URL=https://reviucheck.com
```

Organization schema must consume env variables.

Fallback:

Hardcoded defaults.

---

# TASK 10 — Documentation Update

Update SEO documentation.

Add:

New section:

## Phase 2 SEO Improvements

Document:

- Organization Schema
- FAQ Schema
- Website Schema
- Image SEO
- Author pages
- External link security
- CWV monitoring

Update route inventory.

Fix inaccurate statement:

Current:

"All 30 routes prerendered"

Replace with actual count.

---

# ACCEPTANCE CHECKLIST

Must pass:

## Structured Data

- [ ] Organization schema appears
- [ ] FAQ schema appears only FAQ page
- [ ] Website schema appears globally
- [ ] Author schema works

## Performance

- [ ] No CLS regression
- [ ] Hero image priority configured
- [ ] Responsive image sizes added

## SEO

- [ ] External links secured
- [ ] Author pages indexed
- [ ] Related blog links generated

## Build

Must pass:

```bash
npm run build
```

No TypeScript errors.

No hydration errors.

No metadata warnings.

No schema duplication.

---

END
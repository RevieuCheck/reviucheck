import { blogPosts, type BlogPostMeta } from './blogCategories'

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPostMeta[] {
  const current = blogPosts.find(p => p.slug === currentSlug)
  if (!current) return []

  const scored = blogPosts
    .filter(p => p.slug !== currentSlug)
    .map(post => {
      let score = 0
      if (post.category === current.category) score += 3
      const sharedTopics = post.topics.filter(t => current.topics.includes(t))
      score += sharedTopics.length * 2
      if (post.author === current.author) score += 1
      return { post, score }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)

  return scored.map(s => s.post)
}

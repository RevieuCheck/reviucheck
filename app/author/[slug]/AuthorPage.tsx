'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, ArrowRight, FileText } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import { type Author } from '@/lib/authors'
import { blogPosts } from '@/lib/blogCategories'

const POSTS_PER_PAGE = 50

interface AuthorPageProps {
  author: Author
}

export default function AuthorPage({ author }: AuthorPageProps) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    image: `https://reviucheck.com${author.image}`,
    ...(author.linkedin && { sameAs: [author.linkedin] }),
    ...(author.email && { email: author.email }),
    ...(author.phone && { telephone: author.phone }),
  }

  const authorPosts = blogPosts.filter(p =>
    p.author === author.name || (author.slug === 'team' && p.author === 'ReviuCheck Team')
  ).slice(0, POSTS_PER_PAGE)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="fixed inset-0 -z-10 overflow-hidden pt-16">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-3xl p-8 md:p-12 mb-16"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="shrink-0">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden ring-2 ring-primary/20 shadow-xl">
                    <img
                      src={author.image}
                      alt={author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 mb-4">
                    <FileText className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs font-medium text-primary">Author</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-2">{author.name}</h1>
                  <p className="text-lg gradient-text font-semibold mb-4">{author.role}</p>
                  <p className="text-text-secondary leading-relaxed mb-6">{author.bio}</p>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    {author.linkedin && (
                      <a
                        href={author.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/20 text-text-primary hover:bg-primary/10 hover:border-primary/40 transition-all text-sm"
                      >
                        <FaLinkedin className="w-4 h-4 text-primary" />
                        LinkedIn
                      </a>
                    )}
                    {author.email && (
                      <a
                        href={`mailto:${author.email}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/20 text-text-primary hover:bg-primary/10 hover:border-primary/40 transition-all text-sm"
                      >
                        <Mail className="w-4 h-4 text-primary" />
                        {author.email}
                      </a>
                    )}
                    {author.phone && (
                      <a
                        href={`tel:${author.phone}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/20 text-text-primary hover:bg-primary/10 hover:border-primary/40 transition-all text-sm"
                      >
                        <Phone className="w-4 h-4 text-primary" />
                        {author.phone}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold font-heading text-text-primary mb-8">
                Articles by {author.name}
              </h2>

              <div className="space-y-4">
                {authorPosts.map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="glass rounded-2xl p-5 block hover:border-primary/30 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">{post.category}</span>
                          <h3 className="text-lg font-bold text-text-primary font-heading mt-2 mb-1 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-sm text-text-secondary line-clamp-2">{post.excerpt}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all shrink-0 mt-2" />
                      </div>
                    </Link>
                  </motion.div>
                ))}

                {authorPosts.length === 0 && (
                  <p className="text-text-muted">No articles published yet.</p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

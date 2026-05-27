import { Metadata } from 'next'
import { authors, getAuthorBySlug } from '@/lib/authors'
import AuthorPage from './AuthorPage'

interface AuthorPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return authors.map(author => ({ slug: author.slug }))
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params
  const author = getAuthorBySlug(slug)

  if (!author) {
    return { title: 'Author Not Found' }
  }

  return {
    title: author.name,
    description: author.bio,
    openGraph: {
      title: `${author.name} - ${author.role} at ReviuCheck`,
      description: author.bio,
      images: [{ url: author.image, width: 400, height: 400, alt: author.name }],
    },
  }
}

export default async function Author({ params }: AuthorPageProps) {
  const { slug } = await params
  const author = getAuthorBySlug(slug)

  if (!author) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-4xl font-bold font-heading mb-4">Author Not Found</h1>
        <p className="text-text-secondary">The author you are looking for does not exist.</p>
      </div>
    )
  }

  return <AuthorPage author={author} />
}

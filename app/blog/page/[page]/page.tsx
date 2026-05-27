import { Metadata } from 'next'
import PaginatedBlogPage from './PaginatedBlogPage'

const POSTS_PER_PAGE = 10
const TOTAL_POSTS = 50
const TOTAL_PAGES = Math.ceil(TOTAL_POSTS / POSTS_PER_PAGE)

interface BlogPaginationProps {
  params: Promise<{ page: string }>
}

export async function generateStaticParams() {
  return Array.from({ length: TOTAL_PAGES }, (_, i) => ({
    page: String(i + 1),
  }))
}

export async function generateMetadata({ params }: BlogPaginationProps): Promise<Metadata> {
  const { page } = await params
  const pageNum = parseInt(page)

  return {
    title: `Blog - Page ${pageNum}`,
    description: `Read the latest articles about AI-powered review management, sentiment analysis, and customer experience best practices. Page ${pageNum} of ${TOTAL_PAGES}.`,
    robots: {
      index: pageNum <= 3,
      follow: true,
    },
  }
}

export default async function BlogPaginationPage({ params }: BlogPaginationProps) {
  const { page } = await params
  const currentPage = parseInt(page)

  return (
    <PaginatedBlogPage
      currentPage={currentPage}
      totalPages={TOTAL_PAGES}
    />
  )
}

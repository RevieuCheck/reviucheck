import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist or has been moved.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>
      <div className="text-center px-6">
        <div className="text-8xl font-extrabold font-heading gradient-text mb-4">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
          Let us get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-primary/30 text-text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary/10 transition-all"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}

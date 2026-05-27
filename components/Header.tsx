'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Features', href: '/features' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'FAQ', href: '/faq' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-surface/90 backdrop-blur-2xl border-b border-primary/10 shadow-[0_4px_30px_rgba(111,0,255,0.08)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-xl font-heading">R</span>
            </div>
            <span className="text-2xl font-bold font-heading gradient-text">
              ReviuCheck
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href || (pathname === '/' && item.href.startsWith('/#'))
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`relative text-sm font-medium tracking-wide transition-colors group ${
                      isActive ? 'text-primary' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 rounded-full ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>
                </motion.div>
              )
            })}
            <div className="flex items-center gap-3">
              <a
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/company/reviucheck'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-105 animate-glow"
                >
                  Get Early Access
                </Link>
              </motion.div>
            </div>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden rounded-lg p-2 text-text-primary hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 py-4 rounded-2xl glass shadow-2xl"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 transition-colors rounded-lg mx-2 ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Link
                href="/contact"
                className="block mx-4 mt-3 bg-gradient-to-r from-primary to-purple-600 text-white text-center px-6 py-3 rounded-full font-semibold"
              >
                Get Early Access
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

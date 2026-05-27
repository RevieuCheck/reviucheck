'use client'

import Link from 'next/link'
import { X, Heart, ArrowUpRight } from 'lucide-react'

const productLinks = [
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'API Docs', href: '/api-docs' },
  { name: 'FAQ', href: '/faq' },
]

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Security', href: '/security' },
  { name: 'GDPR', href: '/gdpr' },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-primary/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
                <span className="font-bold text-xl font-heading text-white">R</span>
              </div>
              <span className="text-xl font-bold font-heading gradient-text">ReviuCheck</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              Transforming customer feedback into actionable insights with AI-powered sentiment analysis, automated responses, and multi-language support.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-all">
                <X className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-text-primary mb-5">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-text-primary mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-text-primary mb-5">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary" /> for better customer experiences
          </p>
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} ReviuCheck. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

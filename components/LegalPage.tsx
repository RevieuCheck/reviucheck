'use client'

import { motion } from 'framer-motion'
import { Shield, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface LegalPageProps {
  title: string
  lastUpdated: string
  sections: {
    title: string
    content: string
  }[]
}

export default function LegalPage({ title, lastUpdated, sections }: LegalPageProps) {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden pt-16">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Legal</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading mb-4">
              <span className="gradient-text">{title}</span>
            </h1>
            <p className="text-text-muted text-sm">Last updated: {lastUpdated}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="space-y-10">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl font-bold text-text-primary font-heading mb-4">{section.title}</h2>
                    <p className="text-text-secondary leading-relaxed">{section.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-transparent to-transparent p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Have{' '}
                <span className="gradient-text">Questions?</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
                If you have any questions about our policies, please contact our legal team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

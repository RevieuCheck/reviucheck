'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, Shield, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 backdrop-blur-sm">
                <BarChart3 className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Review Management</span>
              </div>

              <h1 className="mb-6 text-5xl leading-tight font-extrabold md:text-7xl font-heading">
                Transform Reviews into{' '}
                <span className="gradient-text">Revenue</span>
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-text-secondary max-w-xl">
                ReviuCheck uses advanced AI to analyze, respond, and act on customer feedback across
                all platforms. Save 70% of your team&apos;s time while improving response quality.
              </p>

              <div className="mb-8 flex flex-wrap gap-8">
                <div className="flex items-center gap-2">
                  {/* <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div> */}
                  {/* <span className="text-sm text-text-secondary">4.9/5 from 500+ businesses</span> */}
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm text-text-secondary">Enterprise-grade security</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex transform items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-purple-600 px-8 py-3.5 font-semibold text-white transition-all hover:scale-105 shadow-lg shadow-primary/30 hover:shadow-primary/50"
                >
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="rounded-full border border-primary/30 px-8 py-3.5 text-center font-semibold text-text-primary transition-all hover:bg-primary/10 hover:border-primary"
                >
                  Watch Demo
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/10 to-transparent rounded-3xl blur-3xl" />
              <div className="relative glass rounded-3xl p-8 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-text-muted font-mono">AI Dashboard</span>
                </div>

                <div className="rounded-xl bg-card/50 border border-primary/10 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                    <span className="text-sm font-semibold text-text-primary">AI Analysis Complete</span>
                  </div>
                  <p className="text-text-secondary text-sm">&ldquo;Great product! The AI response saved us hours of manual work.&rdquo;</p>
                  <div className="mt-3 flex gap-4 text-xs text-text-muted">
                    <span>Sentiment: <span className="text-green-400">Positive</span></span>
                    <span>Confidence: 98%</span>
                  </div>
                </div>

                <div className="ml-8 rounded-xl bg-card/50 border border-primary/10 p-5">
                  <p className="text-xs text-text-muted mb-1">AI Generated Response:</p>
                  <p className="text-sm text-primary font-medium">
                    &ldquo;Thank you for your wonderful feedback! We&apos;re thrilled you had a great experience.&rdquo;
                  </p>
                </div>

                <div className="rounded-xl bg-card/50 border border-primary/10 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-text-secondary">Credits Used Today</span>
                    <span className="text-sm font-bold gradient-text">247/1000</span>
                  </div>
                  <div className="h-2 rounded-full bg-card overflow-hidden">
                    <div className="h-full w-1/4 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

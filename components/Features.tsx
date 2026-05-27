'use client'

import { motion } from 'framer-motion'
import {
  Brain, Globe, Shield, Zap, BarChart3, MessageSquare, Sparkles, Languages,
  ArrowRight, CheckCircle2
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Sentiment Analysis',
    description: 'Understand emotions, sarcasm, and intent with 95% accuracy across 100+ languages.',
    gradient: 'from-primary to-purple-600',
  },
  {
    icon: MessageSquare,
    title: 'Smart Response Generation',
    description: 'Auto-generate contextual replies that maintain your brand voice. Human approval optional.',
    gradient: 'from-purple-600 to-secondary',
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Review in any language, respond in customer language. Admin sees UI in their preferred language.',
    gradient: 'from-secondary to-primary',
  },
  {
    icon: Shield,
    title: 'Spam & Sarcasm Detection',
    description: 'Filter fake or biased reviews. Personalized models learn from your feedback.',
    gradient: 'from-primary to-purple-600',
  },
  {
    icon: Zap,
    title: 'Duplicate Detection',
    description: 'Find similar reviews and respond once. Saves 70% of your team time.',
    gradient: 'from-purple-600 to-secondary',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track sentiment trends, emotion patterns, and actionable insights in beautiful dashboards.',
    gradient: 'from-secondary to-primary',
  },
  {
    icon: Sparkles,
    title: 'Predictive Insights',
    description: 'Forecast sentiment trends and get AI-generated weekly summaries of changes.',
    gradient: 'from-primary to-purple-600',
  },
  {
    icon: Languages,
    title: 'Auto-Translation Pipeline',
    description: 'Seamlessly translate reviews to admin language and responses back to user language.',
    gradient: 'from-purple-600 to-secondary',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Powerful Capabilities</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl font-heading">
            Everything You Need to{' '}
            <span className="gradient-text">Scale Reviews</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            From sentiment analysis to automated responses, ReviuCheck gives you the tools to turn feedback into growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/80"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="relative mb-2 text-lg font-bold text-text-primary font-heading">{feature.title}</h3>
                <p className="relative text-sm leading-relaxed text-text-secondary">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold group"
          >
            Explore All Features
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

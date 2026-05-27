'use client'

import { motion } from 'framer-motion'
import {
  Brain, Globe, Shield, Zap, BarChart3, MessageSquare, Sparkles, Languages,
  ArrowRight, CheckCircle, Star, TrendingUp, Users, Clock
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Sentiment Analysis',
    description: 'Understand emotions, sarcasm, and intent with 95% accuracy across 100+ languages. Our deep learning models are trained on millions of reviews to detect subtle nuances in customer feedback.',
    gradient: 'from-primary to-purple-600',
    stats: '95% accuracy',
    items: [
      'Emotion detection (joy, anger, sadness, surprise)',
      'Sarcasm and irony recognition',
      'Intent classification',
      'Multi-language support (100+ languages)',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Smart Response Generation',
    description: 'Auto-generate contextual replies that maintain your brand voice. Our AI learns from your past responses to create personalized, human-like replies.',
    gradient: 'from-purple-600 to-secondary',
    stats: '70% time saved',
    items: [
      'Context-aware response generation',
      'Brand voice customization',
      'Human approval workflow',
      'Batch response generation',
    ],
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Review in any language, respond in customer language. Admin sees UI in their preferred language. Break down language barriers with seamless translation.',
    gradient: 'from-secondary to-primary',
    stats: '100+ languages',
    items: [
      'Automatic language detection',
      'Real-time translation',
      'Admin localization',
      'Regional sentiment analysis',
    ],
  },
  {
    icon: Shield,
    title: 'Spam & Sarcasm Detection',
    description: 'Filter fake or biased reviews automatically. Our personalized models learn from your feedback to improve detection accuracy over time.',
    gradient: 'from-primary to-purple-600',
    stats: '99% spam detection',
    items: [
      'Automated fake review filtering',
      'Bias detection algorithms',
      'Personalized model training',
      'Review authenticity scoring',
    ],
  },
  {
    icon: Zap,
    title: 'Duplicate Detection',
    description: 'Find similar reviews across platforms and respond once. Eliminate redundant work and ensure consistent messaging.',
    gradient: 'from-purple-600 to-secondary',
    stats: 'Saves 70% time',
    items: [
      'Cross-platform deduplication',
      'Semantic similarity matching',
      'Unified response system',
      'Consistent brand messaging',
    ],
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track sentiment trends, emotion patterns, and actionable insights in beautiful, customizable dashboards.',
    gradient: 'from-secondary to-primary',
    stats: 'Real-time insights',
    items: [
      'Interactive dashboards',
      'Trend forecasting',
      'Competitor benchmarking',
      'Exportable reports',
    ],
  },
  {
    icon: Sparkles,
    title: 'Predictive Insights',
    description: 'Forecast sentiment trends and get AI-generated weekly summaries of changes. Stay ahead of customer sentiment shifts.',
    gradient: 'from-primary to-purple-600',
    stats: 'AI-powered predictions',
    items: [
      'Sentiment trend forecasting',
      'Weekly AI summaries',
      'Anomaly detection',
      'Actionable recommendations',
    ],
  },
  {
    icon: Languages,
    title: 'Auto-Translation Pipeline',
    description: 'Seamlessly translate reviews to admin language and responses back to user language. Maintain quality across all languages.',
    gradient: 'from-purple-600 to-secondary',
    stats: 'Real-time translation',
    items: [
      'Bi-directional translation',
      'Translation quality scoring',
      'Industry-specific terminology',
      'Custom glossary support',
    ],
  },
]

export default function FeaturesPage() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden pt-16">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Powerful Platform</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading mb-6">
              Enterprise-Grade{' '}
              <span className="gradient-text">Features</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Everything you need to transform customer feedback into business growth.
              From AI-powered analysis to automated responses, we have got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 mb-4">
                      <TrendingUp className="h-3.5 w-3.5 text-primary" />
                      <span className="text-xs font-medium text-primary">{feature.stats}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-heading mb-4">{feature.title}</h2>
                    <p className="text-lg text-text-secondary mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-text-secondary">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="glass rounded-3xl p-8 h-80 flex items-center justify-center">
                      <div className="text-center">
                        <Icon className="w-24 h-24 text-primary/30 mx-auto mb-4" />
                        <p className="text-text-muted text-sm">Interactive demo coming soon</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
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
                Ready to Transform Your{' '}
                <span className="gradient-text">Review Management?</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
                Join 500+ businesses already using ReviuCheck to automate and improve their review management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 border border-primary/30 text-text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary/10 transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

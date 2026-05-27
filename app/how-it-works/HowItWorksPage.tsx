'use client'

import { motion } from 'framer-motion'
import { UserPlus, Key, Code, BarChart3, ArrowRight, CheckCircle, Clock, Shield, Star } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up',
    description: 'Create your account and choose the perfect plan for your business needs.',
    details: [
      'No credit card required for Starter plan',
      '14-day free trial on all plans',
      'Instant account activation',
      'Team member invitation',
    ],
    gradient: 'from-primary to-purple-600',
  },
  {
    icon: Key,
    title: 'Get API Key',
    description: 'Receive your unique API key and admin portal credentials instantly.',
    details: [
      'Automatic API key generation',
      'Admin dashboard access',
      'Webhook configuration',
      'Team permissions setup',
    ],
    gradient: 'from-purple-600 to-secondary',
  },
  {
    icon: Code,
    title: 'Integrate',
    description: 'Add our simple API to your review form with just 3 lines of code.',
    details: [
      'Works with any platform or framework',
      'SDK available for popular languages',
      'Pre-built plugins for major CMS',
      'Step-by-step integration guides',
    ],
    gradient: 'from-secondary to-primary',
  },
  {
    icon: BarChart3,
    title: 'Watch Reviews Transform',
    description: 'See AI analyze, respond, and provide insights automatically.',
    details: [
      'Real-time review monitoring',
      'Automated AI responses',
      'Sentiment analysis dashboard',
      'Weekly performance reports',
    ],
    gradient: 'from-primary to-purple-600',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden pt-16">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">10-Minute Setup</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading mb-6">
              Get Started in{' '}
              <span className="gradient-text">4 Simple Steps</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              From signup to insights in less than 10 minutes. No technical expertise required.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

              <div className="space-y-12">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative flex flex-col md:flex-row items-start gap-6"
                    >
                      <div className={`relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg shadow-primary/20`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="glass rounded-2xl p-8 flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-bold text-primary font-heading">STEP 0{index + 1}</span>
                          <h2 className="text-2xl font-bold text-text-primary font-heading">{step.title}</h2>
                        </div>
                        <p className="text-text-secondary mb-4">{step.description}</p>
                        <ul className="space-y-2">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-center gap-2 text-sm text-text-secondary">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-primary/10 bg-card overflow-hidden"
            >
              <div className="p-6 border-b border-primary/10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-2 text-xs text-text-muted font-mono">Quick Start Example</span>
                </div>
              </div>
              <div className="p-6">
                <pre className="overflow-x-auto text-sm text-green-400">
                  <code>{`import { ReviuCheck } from 'reviucheck-sdk';

const reviu = new ReviuCheck('YOUR_API_KEY');

// Analyze a single review
const result = await reviu.analyze({
  text: "Amazing product! Fast delivery and great quality.",
  language: "auto"
});

console.log({
  sentiment: result.sentiment,  // "positive"
  score: result.confidence,      // 0.98
  response: result.aiResponse   // Auto-generated reply
});`}</code>
                </pre>
              </div>
            </motion.div>
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
                Start Your{' '}
                <span className="gradient-text">Free Trial</span> Today
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
                No credit card required. Full access to all features for 14 days.
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
                  href="/features"
                  className="inline-flex items-center justify-center gap-2 border border-primary/30 text-text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary/10 transition-all"
                >
                  View Features
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

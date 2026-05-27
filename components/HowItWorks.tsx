'use client'

import { motion } from 'framer-motion'
import { UserPlus, Key, Code, BarChart3, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up',
    description: 'Create your account and choose the perfect plan for your business needs. No credit card required.',
    gradient: 'from-primary to-purple-600',
  },
  {
    icon: Key,
    title: 'Get API Key',
    description: 'Receive your unique API key and admin portal credentials instantly after registration.',
    gradient: 'from-purple-600 to-secondary',
  },
  {
    icon: Code,
    title: 'Integrate',
    description: 'Add our simple API to your review form with just 3 lines of code. Works with any platform.',
    gradient: 'from-secondary to-primary',
  },
  {
    icon: BarChart3,
    title: 'Watch Reviews Transform',
    description: 'See AI analyze, respond, and provide insights automatically. Start seeing results immediately.',
    gradient: 'from-primary to-purple-600',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
            <BarChart3 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Simple Setup</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl font-heading">
            Get Started in <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="text-lg text-text-secondary">From signup to insights — less than 10 minutes</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
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
                  <div className="glass rounded-2xl p-6 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-primary font-heading">STEP 0{index + 1}</span>
                      <h3 className="text-xl font-bold text-text-primary font-heading">{step.title}</h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl rounded-2xl border border-primary/10 bg-card p-6"
        >
          <div className="mb-4 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-2 text-xs text-text-muted font-mono">integration.js</span>
          </div>
          <pre className="overflow-x-auto text-sm text-green-400">
            <code>{`import { ReviuCheck } from 'reviucheck-sdk';

const reviu = new ReviuCheck('YOUR_API_KEY');

const result = await reviu.analyze({
  text: "Amazing product!",
  language: "auto"
});

console.log(result.sentiment);  // Positive
console.log(result.aiResponse); // "Thank you for your feedback!"`}</code>
          </pre>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold group"
          >
            Learn More About Integration
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

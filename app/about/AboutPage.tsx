'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Target, Eye, Heart, Shield, Star, Users, Globe, Zap } from 'lucide-react'
import Link from 'next/link'

const values = [
  { icon: Target, title: 'Mission-Driven', description: 'We are on a mission to make customer feedback management effortless and intelligent for every business.' },
  { icon: Eye, title: 'Transparency', description: 'We believe in complete transparency with our customers, from pricing to data handling practices.' },
  { icon: Heart, title: 'Customer First', description: 'Every decision we make starts with how it will improve the experience for our customers.' },
  { icon: Shield, title: 'Trust & Security', description: 'We treat your data with the highest level of security and respect. Privacy is non-negotiable.' },
]

const stats = [
  { icon: Users, value: '500+', label: 'Businesses Trust Us' },
  { icon: Star, value: '4.9/5', label: 'Average Rating' },
  { icon: Globe, value: '100+', label: 'Languages Supported' },
  { icon: Zap, value: '10M+', label: 'Reviews Analyzed' },
]

export default function AboutPage() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden pt-16">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading mb-6">
              We Are on a Mission to{' '}
              <span className="gradient-text">Transform Feedback</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              ReviuCheck was founded with a simple belief: every piece of customer feedback holds
              the potential to make your business better. We use AI to unlock that potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-text-primary font-heading">{stat.value}</div>
                  <div className="text-sm text-text-secondary mt-1">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Our{' '}
                <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  ReviuCheck was born from a frustration shared by businesses everywhere: managing customer reviews
                  across multiple platforms is time-consuming, inconsistent, and overwhelming.
                </p>
                <p>
                  Our founders, experienced in both AI and customer experience, saw an opportunity to use cutting-edge
                  natural language processing to automate and enhance the entire review management process.
                </p>
                <p>
                  Today, ReviuCheck helps over 500 businesses across 40+ countries transform their customer feedback
                  into actionable insights. We analyze millions of reviews every month, saving our customers thousands
                  of hours while improving their response quality.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 h-80 flex items-center justify-center"
            >
              <div className="text-center">
                <Target className="w-24 h-24 text-primary/30 mx-auto mb-4" />
                <p className="text-text-muted">Company image placeholder</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
              Our{' '}
              <span className="gradient-text">Values</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass rounded-2xl p-6"
                  >
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-bold text-text-primary font-heading mb-2">{value.title}</h3>
                    <p className="text-sm text-text-secondary">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
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
                Join Us on Our{' '}
                <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
                Be part of the team that is transforming how businesses understand their customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/careers"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-primary/30 text-text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary/10 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

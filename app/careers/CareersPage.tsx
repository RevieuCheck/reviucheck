'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, MapPin, Clock, DollarSign, Heart, Zap, Users, Globe, Coffee } from 'lucide-react'
import Link from 'next/link'

const perks = [
  { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health, dental, and vision insurance.' },
  { icon: Zap, title: 'Equity Package', description: 'Competitive salary with meaningful equity ownership.' },
  { icon: Users, title: 'Remote-First', description: 'Work from anywhere in the world. Flexible hours.' },
  { icon: Globe, title: 'Learning Budget', description: '$5,000 annual budget for courses, conferences, and books.' },
  { icon: Coffee, title: 'Team Retreats', description: 'Quarterly team offsites in amazing locations.' },
  { icon: Clock, title: 'Unlimited PTO', description: 'Take the time you need. We trust you.' },
]

const positions = [
  {
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build and scale our AI-powered review management platform. Experience with Python, TypeScript, and ML pipelines preferred.',
  },
  {
    title: 'Machine Learning Engineer',
    department: 'AI/ML',
    location: 'Remote',
    type: 'Full-time',
    description: 'Develop and optimize NLP models for sentiment analysis, translation, and response generation across 100+ languages.',
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design intuitive, beautiful interfaces for our review management platform. Experience with data visualization is a plus.',
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help our customers get the most out of ReviuCheck. Ensure retention and drive expansion through exceptional service.',
  },
]

export default function CareersPage() {
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
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Join Our Team</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading mb-6">
              Help Us{' '}
              <span className="gradient-text">Transform Feedback</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Join a passionate team building the future of customer feedback management.
              We are remote-first, diverse, and driven by impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {perks.map((perk, index) => {
              const Icon = perk.icon
              return (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6"
                >
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-text-primary mb-1">{perk.title}</h3>
                  <p className="text-sm text-text-secondary">{perk.description}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
              Open{' '}
              <span className="gradient-text">Positions</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-4">
              {positions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-primary font-heading mb-2 group-hover:text-primary transition-colors">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 mb-3">
                        <span className="text-xs flex items-center gap-1 text-text-muted">
                          <Briefcase className="w-3 h-3" />
                          {position.department}
                        </span>
                        <span className="text-xs flex items-center gap-1 text-text-muted">
                          <MapPin className="w-3 h-3" />
                          {position.location}
                        </span>
                        <span className="text-xs flex items-center gap-1 text-text-muted">
                          <Clock className="w-3 h-3" />
                          {position.type}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary">{position.description}</p>
                    </div>
                    <div className="flex items-start pt-2">
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </div>
                  </div>
                </motion.div>
              ))}
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
                Do Not See a{' '}
                <span className="gradient-text">Perfect Fit?</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
                We are always looking for talented people. Send us your resume and we will keep you in mind.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

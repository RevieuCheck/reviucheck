'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, MessageSquare, MapPin, Phone, Send, CheckCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'

const contactMethods = [
  { icon: Mail, title: 'Email Us', value: 'hello@reviucheck.com', href: 'mailto:hello@reviucheck.com' },
  { icon: MessageSquare, title: 'Live Chat', value: 'Available 24/7', href: '#' },
  { icon: Phone, title: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, title: 'Office', value: 'San Francisco, CA', href: '#' },
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

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
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading mb-6">
              Let&apos;s{' '}
              <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Have a question about ReviuCheck? Want to request a demo? Our team is here to help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={method.title}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-all group"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-text-primary mb-1">{method.title}</h3>
                  <p className="text-sm text-text-secondary">{method.value}</p>
                </motion.a>
              )
            })}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-3xl p-8 md:p-12">
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary font-heading mb-2">Message Sent!</h3>
                  <p className="text-text-secondary">Thank you for reaching out. We will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">First Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 bg-surface border border-primary/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder:text-text-muted text-sm transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Last Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 bg-surface border border-primary/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder:text-text-muted text-sm transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2.5 bg-surface border border-primary/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder:text-text-muted text-sm transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Subject</label>
                    <select className="w-full px-4 py-2.5 bg-surface border border-primary/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary text-sm transition-all">
                      <option value="">Select a topic</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="demo">Request Demo</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 bg-surface border border-primary/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder:text-text-muted text-sm transition-all resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
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
                Prefer to Start with{' '}
                <span className="gradient-text">Free Trial?</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
                No credit card required. Full access to all features for 14 days.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 border border-primary/30 text-text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary/10 transition-all"
              >
                View Plans
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

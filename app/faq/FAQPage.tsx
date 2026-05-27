'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, ArrowRight, Search } from 'lucide-react'
import Link from 'next/link'

const faqCategories = [
  {
    category: 'General',
    questions: [
      { question: 'What is ReviuCheck?', answer: 'ReviuCheck is an AI-powered review management platform that helps businesses analyze, respond to, and act on customer feedback across all platforms. Our advanced AI provides sentiment analysis, automated response generation, and actionable insights.' },
      { question: 'How does the credit system work?', answer: 'Each review analyzed consumes 1 credit. For example, the Professional plan includes 5,000 credits/month which covers 5,000 reviews. Unused credits do not roll over to the next month.' },
      { question: 'Can I switch plans anytime?', answer: 'Yes! You can upgrade or downgrade your plan at any time. When upgrading, you get immediate access to new features. When downgrading, changes take effect at the next billing cycle.' },
    ],
  },
  {
    category: 'Technical',
    questions: [
      { question: 'How accurate is your sentiment analysis?', answer: 'Our models achieve 95% accuracy on benchmark datasets. The accuracy improves over time as our personalized models learn from your specific business context and corrections.' },
      { question: 'What languages do you support?', answer: 'We support 100+ languages for sentiment analysis and 10 languages for AI response generation in Professional plan, with unlimited languages in Enterprise plan.' },
      { question: 'How do I integrate ReviuCheck?', answer: 'Integration is simple! Add our API to your review form with just 3 lines of code. We provide SDKs for popular programming languages and pre-built plugins for major CMS platforms.' },
      { question: 'Can I use my own API keys for OpenAI?', answer: 'Yes! Enterprise customers can use their own OpenAI API keys for custom models and to maintain data privacy. We also support self-hosted Llama models.' },
    ],
  },
  {
    category: 'Security & Compliance',
    questions: [
      { question: 'Is my data secure?', answer: 'Absolutely. We use enterprise-grade encryption (AES-256), SOC2 Type II compliance, and offer GDPR/CCPA controls. Enterprise customers can opt for on-premise deployment.' },
      { question: 'Do you offer SSO?', answer: 'Yes, SSO is available for Enterprise plans. We support SAML, OAuth, and OpenID Connect protocols.' },
      { question: 'Where is my data stored?', answer: 'Data is stored in secure data centers with redundancy and automatic backups. Enterprise customers can choose their preferred region for data residency.' },
    ],
  },
  {
    category: 'Billing',
    questions: [
      { question: 'Can I cancel anytime?', answer: 'Yes, you can cancel your subscription anytime. No long-term contracts. All plans are month-to-month with the option to upgrade or downgrade.' },
      { question: 'Do you offer refunds?', answer: 'Yes, we offer a 14-day money-back guarantee on all plans. If you are not satisfied, we will refund your first month.' },
      { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, PayPal, and bank transfers (for Enterprise plans). Invoices are available upon request.' },
    ],
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<{ category: number; question: number } | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCategories = faqCategories.map(cat => ({
    ...cat,
    questions: cat.questions.filter(
      q =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(cat => cat.questions.length > 0)

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden pt-16">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
              <HelpCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Help Center</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading mb-6">
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
              Everything you need to know about ReviuCheck. Can not find what you are looking for? Contact our support team.
            </p>

            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-surface border border-primary/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary placeholder:text-text-muted text-sm transition-all"
              />
            </div>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-12">
            {filteredCategories.map((category, catIndex) => (
              <div key={category.category}>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-text-primary font-heading mb-6"
                >
                  {category.category}
                </motion.h2>
                <div className="space-y-3">
                  {category.questions.map((faq, qIndex) => (
                    <motion.div
                      key={faq.question}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: qIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="rounded-xl border border-primary/10 bg-card overflow-hidden transition-all duration-300 hover:border-primary/20"
                    >
                      <button
                        onClick={() =>
                          setOpenIndex(
                            openIndex?.category === catIndex && openIndex?.question === qIndex
                              ? null
                              : { category: catIndex, question: qIndex }
                          )
                        }
                        className="w-full px-6 py-4 text-left flex justify-between items-center transition-colors"
                      >
                        <span className="font-semibold text-text-primary">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                            openIndex?.category === catIndex && openIndex?.question === qIndex
                              ? 'rotate-180'
                              : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openIndex?.category === catIndex && openIndex?.question === qIndex && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-4">
                              <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
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
                Still Have{' '}
                <span className="gradient-text">Questions?</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
                Our support team is here to help you with any questions you may have.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                Contact Support
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

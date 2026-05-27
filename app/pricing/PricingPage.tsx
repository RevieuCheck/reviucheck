'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Building, Rocket, ArrowRight, HelpCircle, Leaf } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Micro',
    icon: Leaf,
    price: '$9',
    period: 'month',
    credits: '50',
    description: 'Perfect for freelancers and small shops just getting started.',
    features: [
      '50 review credits/month',
      'Basic sentiment analysis',
      'AI response suggestions',
      'Email support',
      'Basic dashboard',
      '7-day data retention',
    ],
    gradient: 'from-primary to-purple-600',
    highlighted: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Starter',
    icon: Zap,
    price: '$99',
    period: 'month',
    credits: '1,000',
    description: 'Perfect for small businesses getting started with review management.',
    features: [
      '1,000 review credits/month',
      'Basic sentiment analysis',
      'AI response suggestions',
      'Email support',
      'Basic analytics dashboard',
      '7-day data retention',
    ],
    gradient: 'from-primary to-purple-600',
    highlighted: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Professional',
    icon: Building,
    price: '$299',
    period: 'month',
    credits: '5,000',
    description: 'Ideal for growing teams that need advanced review intelligence.',
    features: [
      '5,000 review credits/month',
      'Advanced sentiment & emotion',
      'Spam & sarcasm detection',
      'Multi-language support (10 languages)',
      'Duplicate detection',
      'Priority support',
      '30-day data retention',
      'API access',
    ],
    gradient: 'from-purple-600 to-secondary',
    highlighted: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    icon: Rocket,
    price: 'Custom',
    period: 'custom',
    credits: 'Unlimited',
    description: 'For large organizations requiring custom solutions and dedicated support.',
    features: [
      'Unlimited review credits',
      'All Professional features',
      '100+ languages support',
      'Custom AI model training',
      'SLA guarantee',
      '24/7 dedicated support',
      'Unlimited data retention',
      'SSO & advanced security',
      'On-premise deployment',
    ],
    gradient: 'from-secondary to-primary',
    highlighted: false,
    cta: 'Contact Sales',
  },
]

const comparisons = [
  { feature: 'Review Credits', micro: '50/mo', starter: '1,000/mo', pro: '5,000/mo', enterprise: 'Unlimited' },
  { feature: 'Sentiment Analysis', micro: true, starter: true, pro: true, enterprise: true },
  { feature: 'Emotion Detection', micro: false, starter: false, pro: true, enterprise: true },
  { feature: 'AI Response Generation', micro: 'Basic', starter: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
  { feature: 'Spam Detection', micro: false, starter: false, pro: true, enterprise: true },
  { feature: 'Sarcasm Detection', micro: false, starter: false, pro: true, enterprise: true },
  { feature: 'Multi-Language', micro: '3 languages', starter: '5 languages', pro: '10 languages', enterprise: '100+ languages' },
  { feature: 'Duplicate Detection', micro: false, starter: false, pro: true, enterprise: true },
  { feature: 'Custom AI Training', micro: false, starter: false, pro: false, enterprise: true },
  { feature: 'Data Retention', micro: '7 days', starter: '7 days', pro: '30 days', enterprise: 'Unlimited' },
  { feature: 'Support', micro: 'Email', starter: 'Email', pro: 'Priority', enterprise: '24/7 Dedicated' },
  { feature: 'API Access', micro: false, starter: false, pro: true, enterprise: true },
  { feature: 'SSO', micro: false, starter: false, pro: false, enterprise: true },
  { feature: 'On-Premise', micro: false, starter: false, pro: false, enterprise: true },
]

export default function PricingPage() {
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
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
              <Rocket className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Simple Pricing</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading mb-6">
              Simple,{' '}
              <span className="gradient-text">Transparent Pricing</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              No hidden fees. No long-term contracts. Upgrade or cancel anytime.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? 'border-primary/40 bg-gradient-to-b from-primary/10 to-card shadow-xl shadow-primary/20 scale-105'
                    : 'border-primary/10 bg-card hover:border-primary/30'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-1 rounded-bl-lg text-xs font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                    <plan.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-text-primary font-heading mb-1">{plan.name}</h3>
                  <p className="text-sm text-text-secondary mb-5">{plan.description}</p>

                  <div className="mb-2">
                    <span className="text-4xl font-bold text-text-primary">{plan.price}</span>
                    <span className="text-text-muted text-sm">/{plan.period}</span>
                  </div>

                  <p className="text-sm text-text-muted mb-6">Includes {plan.credits} reviews/month</p>

                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-xl font-semibold mb-6 transition-all text-sm ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg hover:shadow-primary/30'
                        : 'border border-primary/30 text-text-primary hover:bg-primary/10 hover:border-primary'
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Detailed{' '}
              <span className="gradient-text">Comparison</span>
            </h2>
            <p className="text-text-secondary">See exactly what each plan includes</p>
          </motion.div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <motion.table
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full text-left border-collapse"
            >
              <thead>
                <tr className="border-b border-primary/10">
                  <th className="py-4 px-4 text-text-primary font-heading font-bold">Feature</th>
                  <th className="py-4 px-4 text-text-primary font-heading font-bold">Micro</th>
                  <th className="py-4 px-4 text-text-primary font-heading font-bold">Starter</th>
                  <th className="py-4 px-4 text-text-primary font-heading font-bold text-primary">Professional</th>
                  <th className="py-4 px-4 text-text-primary font-heading font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                  {comparisons.map((row, i) => (
                  <tr key={row.feature} className="border-b border-primary/5 hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-4 text-text-secondary">{row.feature}</td>
                    <td className="py-4 px-4">
                      {typeof row.micro === 'boolean' ? (
                        row.micro ? <Check className="w-4 h-4 text-primary" /> : <span className="text-text-muted">&mdash;</span>
                      ) : (
                        <span className="text-text-secondary text-sm">{row.micro}</span>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? <Check className="w-4 h-4 text-primary" /> : <span className="text-text-muted">&mdash;</span>
                      ) : (
                        <span className="text-text-secondary text-sm">{row.starter}</span>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? <Check className="w-4 h-4 text-primary" /> : <span className="text-text-muted">&mdash;</span>
                      ) : (
                        <span className="text-text-secondary text-sm">{row.pro}</span>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? <Check className="w-4 h-4 text-primary" /> : <span className="text-text-muted">&mdash;</span>
                      ) : (
                        <span className="text-text-secondary text-sm">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </motion.table>
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
                Our team is here to help you find the perfect plan for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center gap-2 border border-primary/30 text-text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary/10 transition-all"
                >
                  <HelpCircle className="w-5 h-5" />
                  View FAQ
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
                >
                  Contact Sales
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

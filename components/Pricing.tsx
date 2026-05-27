'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Building, Rocket, ArrowRight, Leaf } from 'lucide-react'
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
    popular: false,
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
    popular: false,
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
    popular: true,
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
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
            <Rocket className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Simple Pricing</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl font-heading">
            Simple,{' '}
            <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-text-secondary">No hidden fees. Upgrade or cancel anytime.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? 'border-primary/40 bg-gradient-to-b from-primary/10 to-card shadow-xl shadow-primary/20 scale-105'
                  : 'border-primary/10 bg-card hover:border-primary/30'
              }`}
            >
              {plan.popular && (
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

                <div className="mb-4">
                  <span className="text-4xl font-bold text-text-primary">{plan.price}</span>
                  <span className="text-text-muted text-sm">/{plan.period}</span>
                </div>

                <div className="mb-6">
                  <span className="text-sm text-text-muted">Includes {plan.credits} reviews/month</span>
                </div>

                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-xl font-semibold mb-6 transition-all text-sm ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg hover:shadow-primary/30'
                      : 'border border-primary/30 text-text-primary hover:bg-primary/10 hover:border-primary'
                  }`}
                >
                  Get Started
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold group"
          >
            Compare Plans in Detail
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

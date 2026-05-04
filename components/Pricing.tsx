'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Building, Rocket } from 'lucide-react'

const plans = [
    {
        name: "Starter",
        icon: Zap,
        price: "$99",
        period: "month",
        credits: "1,000",
        features: [
            "1,000 review credits/month",
            "Basic sentiment analysis",
            "AI response suggestions",
            "Email support",
            "Basic analytics dashboard",
            "7-day data retention"
        ],
        color: "from-primary to-secondary",
        popular: false
    },
    {
        name: "Professional",
        icon: Building,
        price: "$299",
        period: "month",
        credits: "5,000",
        features: [
            "5,000 review credits/month",
            "Advanced sentiment & emotion",
            "Spam & sarcasm detection",
            "Multi-language support (10 languages)",
            "Duplicate detection",
            "Priority support",
            "30-day data retention",
            "API access"
        ],
        color: "from-secondary to-tertiary",
        popular: true
    },
    {
        name: "Enterprise",
        icon: Rocket,
        price: "Custom",
        period: "custom",
        credits: "Unlimited",
        features: [
            "Unlimited review credits",
            "All Professional features",
            "100+ languages support",
            "Custom AI model training",
            "SLA guarantee",
            "24/7 dedicated support",
            "Unlimited data retention",
            "SSO & advanced security",
            "On-premise deployment"
        ],
        color: "from-tertiary to-accent",
        popular: false
    }
]

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Simple,{' '}
                        <span className="gradient-text">Transparent Pricing</span>
                    </h2>
                    <p className="text-xl text-gray-600">No hidden fees. Upgrade or cancel anytime.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${plan.popular ? 'ring-2 ring-secondary transform scale-105' : ''
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-gradient-to-r from-secondary to-tertiary text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                                    Most Popular
                                </div>
                            )}

                            <div className="p-8">
                                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-4`}>
                                    <plan.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-gray-600">/{plan.period}</span>
                                </div>

                                <div className="mb-6">
                                    <span className="text-sm text-gray-500">Includes {plan.credits} reviews/month</span>
                                </div>

                                <a
                                    href="#pre-register"
                                    className={`block text-center py-3 rounded-full font-semibold mb-6 transition-all ${plan.popular
                                            ? 'bg-gradient-to-r from-secondary to-tertiary text-white hover:shadow-lg'
                                            : 'border-2 border-secondary text-secondary hover:bg-secondary/10'
                                        }`}
                                >
                                    Get Started
                                </a>

                                <div className="space-y-3">
                                    {plan.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2 text-sm">
                                            <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                                            <span className="text-gray-600">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
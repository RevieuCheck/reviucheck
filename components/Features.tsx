'use client'

import { motion } from 'framer-motion'
import {
    Brain,
    Globe,
    Shield,
    Zap,
    BarChart3,
    MessageSquare,
    Sparkles,
    Languages
} from 'lucide-react'

const features = [
    {
        icon: Brain,
        title: "AI-Powered Sentiment Analysis",
        description: "Understand emotions, sarcasm, and intent with 95% accuracy across 100+ languages.",
        color: "from-primary to-secondary"
    },
    {
        icon: MessageSquare,
        title: "Smart Response Generation",
        description: "Auto-generate contextual replies that maintain your brand voice. Human approval optional.",
        color: "from-secondary to-tertiary"
    },
    {
        icon: Globe,
        title: "Multi-Language Support",
        description: "Review in any language, respond in customer's language. Admin sees UI in their preferred language.",
        color: "from-tertiary to-accent"
    },
    {
        icon: Shield,
        title: "Spam & Sarcasm Detection",
        description: "Filter fake or biased reviews. Personalized models learn from your feedback.",
        color: "from-accent to-primary"
    },
    {
        icon: Zap,
        title: "Duplicate Detection",
        description: "Find similar reviews and respond once. Saves 70% of your team's time.",
        color: "from-primary to-secondary"
    },
    {
        icon: BarChart3,
        title: "Real-Time Analytics",
        description: "Track sentiment trends, emotion patterns, and actionable insights in beautiful dashboards.",
        color: "from-secondary to-tertiary"
    },
    {
        icon: Sparkles,
        title: "Predictive Insights",
        description: "Forecast sentiment trends and get AI-generated weekly summaries of changes.",
        color: "from-tertiary to-accent"
    },
    {
        icon: Languages,
        title: "Auto-Translation Pipeline",
        description: "Seamlessly translate reviews to admin language and responses back to user language.",
        color: "from-accent to-primary"
    }
]

export default function Features() {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Powerful Features for{' '}
                        <span className="gradient-text">Modern Businesses</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Everything you need to turn customer feedback into business growth
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >
                            <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
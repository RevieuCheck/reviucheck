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
import Carousel, { type CarouselItem } from '@/components/Carousel'
import MagicBento from '@/components/MagicBento'

const features = [
    {
        icon: Brain,
        title: 'AI-Powered Sentiment Analysis',
        description: 'Understand emotions, sarcasm, and intent with 95% accuracy across 100+ languages.',
        color: 'from-primary to-secondary'
    },
    {
        icon: MessageSquare,
        title: 'Smart Response Generation',
        description: 'Auto-generate contextual replies that maintain your brand voice. Human approval optional.',
        color: 'from-secondary to-tertiary'
    },
    {
        icon: Globe,
        title: 'Multi-Language Support',
        description: "Review in any language, respond in customer's language. Admin sees UI in their preferred language.",
        color: 'from-tertiary to-accent'
    },
    {
        icon: Shield,
        title: 'Spam & Sarcasm Detection',
        description: 'Filter fake or biased reviews. Personalized models learn from your feedback.',
        color: 'from-accent to-primary'
    },
    {
        icon: Zap,
        title: 'Duplicate Detection',
        description: "Find similar reviews and respond once. Saves 70% of your team's time.",
        color: 'from-primary to-secondary'
    },
    {
        icon: BarChart3,
        title: 'Real-Time Analytics',
        description: 'Track sentiment trends, emotion patterns, and actionable insights in beautiful dashboards.',
        color: 'from-secondary to-tertiary'
    },
    {
        icon: Sparkles,
        title: 'Predictive Insights',
        description: 'Forecast sentiment trends and get AI-generated weekly summaries of changes.',
        color: 'from-tertiary to-accent'
    },
    {
        icon: Languages,
        title: 'Auto-Translation Pipeline',
        description: 'Seamlessly translate reviews to admin language and responses back to user language.',
        color: 'from-accent to-primary'
    }
]

const carouselItems: CarouselItem[] = features.map((f, i) => {
    const Icon = f.icon
    return {
        id: i + 1,
        title: f.title,
        description: f.description,
        icon: <Icon className="h-4 w-4 text-white" />
    }
})

export default function Features() {
    return (
        <section id="features" className="bg-white py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                        Powerful Features for{' '}
                        <span className="gradient-text">Modern Businesses</span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-600">
                        Everything you need to turn customer feedback into business growth
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    viewport={{ once: true }}
                    className="mb-20 flex justify-center"
                >
                    <Carousel
                        items={carouselItems}
                        baseWidth={380}
                        loop
                        autoplay
                        autoplayDelay={3200}
                        pauseOnHover
                    />
                </motion.div>

                <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#120F17] px-4 py-10 shadow-2xl sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-8 text-center"
                    >
                        <h3 className="text-2xl font-bold text-white md:text-3xl">Explore the product surface</h3>
                        <p className="mt-2 text-sm text-white/70 md:text-base">
                            Hover the bento to feel the interactions—spotlight, tilt, and micro-motion tuned for demos.
                        </p>
                    </motion.div>
                    <MagicBento
                        glowColor="179, 136, 235"
                        enableTilt
                        enableSpotlight
                        enableBorderGlow
                        enableStars
                        clickEffect
                        enableMagnetism
                    />
                </div>

                <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl"
                        >
                            <div
                                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${feature.color} transition-transform group-hover:scale-110`}
                            >
                                <feature.icon className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                            <p className="leading-relaxed text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

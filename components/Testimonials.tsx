'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack'

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'CMO at TechFlow',
        content:
            'ReviuCheck reduced our review response time by 70% while improving quality. The AI responses are surprisingly human-like!',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
        name: 'Michael Rodriguez',
        role: 'Product Lead at GrowthStack',
        content:
            "The duplicate detection feature alone is worth the price. We're saving hours every week by not responding to the same feedback repeatedly.",
        rating: 5,
        image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
        name: 'Priya Sharma',
        role: 'CX Director at ShopEase',
        content:
            'Handling multilingual reviews was a nightmare until ReviuCheck. Now our team can respond in 10+ languages effortlessly.',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
]

export default function Testimonials() {
    return (
        <section className="relative py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                        Loved by <span className="gradient-text">500+ Businesses</span>
                    </h2>
                    <p className="text-xl text-gray-600">Join companies already transforming their review management</p>
                </motion.div>
            </div>

            <div className="relative min-h-[70vh] w-full">
                <ScrollStack useWindowScroll itemDistance={90} itemStackDistance={28} stackPosition="22%" className="!overflow-visible">
                    {testimonials.map(testimonial => (
                        <ScrollStackItem
                            key={testimonial.name}
                            itemClassName="border border-secondary/20 bg-gradient-to-br from-white to-primary/10 shadow-xl"
                        >
                            <div className="flex h-full flex-col justify-between gap-4 md:flex-row md:items-start">
                                <div className="flex-1">
                                    <div className="mb-4 flex items-center gap-2">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-lg leading-relaxed text-gray-800 md:text-xl">
                                        &ldquo;{testimonial.content}&rdquo;
                                    </p>
                                </div>
                                <div className="flex shrink-0 items-center gap-3 md:flex-col md:items-end">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="h-14 w-14 rounded-full object-cover ring-2 ring-secondary/30"
                                    />
                                    <div className="text-left md:text-right">
                                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        </ScrollStackItem>
                    ))}
                </ScrollStack>
            </div>
        </section>
    )
}

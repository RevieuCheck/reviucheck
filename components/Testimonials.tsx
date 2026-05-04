'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CMO at TechFlow",
        content: "ReviuCheck reduced our review response time by 70% while improving quality. The AI responses are surprisingly human-like!",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        name: "Michael Rodriguez",
        role: "Product Lead at GrowthStack",
        content: "The duplicate detection feature alone is worth the price. We're saving hours every week by not responding to the same feedback repeatedly.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        name: "Priya Sharma",
        role: "CX Director at ShopEase",
        content: "Handling multilingual reviews was a nightmare until ReviuCheck. Now our team can respond in 10+ languages effortlessly.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/3.jpg"
    }
]

export default function Testimonials() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Loved by{' '}
                        <span className="gradient-text">500+ Businesses</span>
                    </h2>
                    <p className="text-xl text-gray-600">Join companies already transforming their review management</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                            <div className="flex items-center gap-3">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-semibold">{testimonial.name}</div>
                                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
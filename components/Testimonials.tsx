'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CMO at TechFlow',
    content: 'ReviuCheck reduced our review response time by 70% while improving quality. The AI responses are surprisingly human-like!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Product Lead at GrowthStack',
    content: 'The duplicate detection feature alone is worth the price. We are saving hours every week by not responding to the same feedback repeatedly.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Priya Sharma',
    role: 'CX Director at ShopEase',
    content: 'Handling multilingual reviews was a nightmare until ReviuCheck. Now our team can respond in 10+ languages effortlessly.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
            <Quote className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl font-heading">
            Loved by{' '}
            <span className="gradient-text">500+ Businesses</span>
          </h2>
          <p className="text-lg text-text-secondary">Join companies already transforming their review management</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-primary/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold text-text-primary text-sm">{testimonial.name}</div>
                  <div className="text-xs text-text-muted">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

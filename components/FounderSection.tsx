'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Quote } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'

export default function FounderSection() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
            <Quote className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Leadership</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl font-heading">
            Built by{' '}
            <span className="gradient-text">Founders Who Care</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            Every great product starts with a vision. Meet the person behind ReviuCheck.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12 hover:border-primary/30 transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="shrink-0">
                <div className="w-36 h-36 rounded-2xl overflow-hidden ring-2 ring-primary/20 shadow-xl shadow-primary/10">
                  <img
                    src="/divyaansh.png"
                    alt="Divyaansh Tandon - Founder & CEO of ReviuCheck"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-extrabold font-heading text-text-primary mb-1">
                  Divyaansh Tandon
                </h3>
                <p className="text-lg gradient-text font-semibold mb-4">
                  Founder & CEO
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Divyaansh founded ReviuCheck with a mission to transform how businesses understand
                  and act on customer feedback. With deep expertise in AI and customer experience,
                  he leads the company vision, product strategy, and innovation.
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <a
                    href="https://www.linkedin.com/in/divyaansh-tandon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/20 text-text-primary hover:bg-primary/10 hover:border-primary/40 transition-all text-sm"
                  >
                    <FaLinkedin className="w-4 h-4 text-primary" />
                    LinkedIn
                  </a>
                  <a
                    href="mailto:divyaanshtandon09@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/20 text-text-primary hover:bg-primary/10 hover:border-primary/40 transition-all text-sm"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    Email
                  </a>
                  <a
                    href="tel:7223837854"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/20 text-text-primary hover:bg-primary/10 hover:border-primary/40 transition-all text-sm"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    7223837854
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

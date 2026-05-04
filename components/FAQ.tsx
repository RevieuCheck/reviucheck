'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
    {
        question: "How does the credit system work?",
        answer: "Each review analyzed consumes 1 credit. For example, the Professional plan includes 5,000 credits/month which covers 5,000 reviews. Unused credits don't roll over to the next month."
    },
    {
        question: "What languages do you support?",
        answer: "We support 100+ languages for sentiment analysis and 10 languages for AI response generation in Professional plan, with unlimited languages in Enterprise plan."
    },
    {
        question: "Can I use my own API keys for OpenAI?",
        answer: "Yes! Enterprise customers can use their own OpenAI API keys for custom models and to maintain data privacy. We also support self-hosted Llama models."
    },
    {
        question: "How accurate is your sentiment analysis?",
        answer: "Our models achieve 95% accuracy on benchmark datasets. The accuracy improves over time as our personalized models learn from your specific business context and corrections."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We use enterprise-grade encryption, SOC2 Type II compliance, and offer GDPR/CCPA controls. Enterprise customers can opt for on-premise deployment."
    },
    {
        question: "Can I cancel anytime?",
        answer: "Yes, you can cancel your subscription anytime. No long-term contracts. All plans are month-to-month with the option to upgrade or downgrade."
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section id="faq" className="relative py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Frequently Asked{' '}
                        <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-600">Everything you need to know about ReviuCheck</p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="border rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-lg">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-secondary transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="border-t"
                                    >
                                        <p className="px-6 py-4 text-gray-600">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
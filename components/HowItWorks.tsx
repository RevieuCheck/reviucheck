'use client'

import { motion } from 'framer-motion'
import { UserPlus, CreditCard, Code, BarChart3 } from 'lucide-react'

const steps = [
    {
        icon: UserPlus,
        title: "1. Sign Up",
        description: "Create your account and choose the perfect plan for your business needs.",
        color: "bg-primary/20 text-primary"
    },
    {
        icon: CreditCard,
        title: "2. Get API Key",
        description: "Receive your unique API key and admin portal credentials instantly.",
        color: "bg-secondary/20 text-secondary"
    },
    {
        icon: Code,
        title: "3. Integrate",
        description: "Add our simple API to your review form with just 3 lines of code.",
        color: "bg-tertiary/20 text-tertiary"
    },
    {
        icon: BarChart3,
        title: "4. Watch Reviews Transform",
        description: "See AI analyze, respond, and provide insights automatically.",
        color: "bg-accent/20 text-accent"
    }
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get Started in{' '}
                        <span className="gradient-text">4 Simple Steps</span>
                    </h2>
                    <p className="text-xl text-gray-600">From signup to insights - less than 10 minutes</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="relative">
                                <div className={`w-24 h-24 mx-auto ${step.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <step.icon className="w-10 h-10" />
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2"></div>
                                )}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Code Example */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gray-900 rounded-2xl p-6 max-w-3xl mx-auto"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-400 text-sm ml-2">integration.js</span>
                    </div>
                    <pre className="text-green-400 text-sm overflow-x-auto">
                        <code>{`import { ReviuCheck } from 'reviucheck-sdk';

const reviu = new ReviuCheck('YOUR_API_KEY');

// Analyze and respond to reviews automatically
const result = await reviu.analyze({
  text: "Amazing product!",
  language: "auto"
});

console.log(result.sentiment);  // Positive
console.log(result.aiResponse); // "Thank you for your feedback!"`}</code>
                    </pre>
                </motion.div>
            </div>
        </section>
    )
}
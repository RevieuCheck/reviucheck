'use client'

import { motion } from 'framer-motion'
import { UserPlus, CreditCard, Code, BarChart3 } from 'lucide-react'
import Stepper, { Step } from '@/components/Stepper'

const steps = [
    {
        icon: UserPlus,
        title: 'Sign Up',
        description: 'Create your account and choose the perfect plan for your business needs.',
        color: 'bg-primary/25 text-violet-900 ring-1 ring-primary/30'
    },
    {
        icon: CreditCard,
        title: 'Get API Key',
        description: 'Receive your unique API key and admin portal credentials instantly.',
        color: 'bg-secondary/25 text-violet-900 ring-1 ring-secondary/30'
    },
    {
        icon: Code,
        title: 'Integrate',
        description: 'Add our simple API to your review form with just 3 lines of code.',
        color: 'bg-tertiary/25 text-violet-900 ring-1 ring-tertiary/30'
    },
    {
        icon: BarChart3,
        title: 'Watch Reviews Transform',
        description: 'See AI analyze, respond, and provide insights automatically.',
        color: 'bg-accent/25 text-violet-900 ring-1 ring-accent/30'
    }
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="bg-gradient-to-b from-background to-white py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                        Get Started in <span className="gradient-text">4 Simple Steps</span>
                    </h2>
                    <p className="text-xl text-gray-600">From signup to insights — less than 10 minutes</p>
                </motion.div>

                <div className="mx-auto max-w-2xl">
                    <Stepper
                        className="min-h-0 py-2 sm:aspect-auto md:aspect-auto"
                        stepCircleContainerClassName="max-w-2xl border-secondary/25 shadow-2xl"
                        stepContainerClassName="px-4 pt-6 sm:px-6"
                        contentClassName="px-4 pb-2 sm:px-6"
                        footerClassName="px-4 pb-6 sm:px-6"
                        nextButtonText="Next"
                        backButtonText="Back"
                    >
                        {steps.map(step => {
                            const Icon = step.icon
                            return (
                                <Step key={step.title}>
                                    <div className="flex flex-col items-center gap-4 py-2 text-center md:flex-row md:text-left">
                                        <div
                                            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${step.color}`}
                                        >
                                            <Icon className="h-8 w-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                                            <p className="mt-1 leading-relaxed text-gray-600">{step.description}</p>
                                        </div>
                                    </div>
                                </Step>
                            )
                        })}
                    </Stepper>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mx-auto mt-16 max-w-3xl rounded-2xl bg-gray-900 p-6"
                >
                    <div className="mb-4 flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <span className="ml-2 text-sm text-gray-400">integration.js</span>
                    </div>
                    <pre className="overflow-x-auto text-sm text-green-400">
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

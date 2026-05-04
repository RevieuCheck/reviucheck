'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, Loader2 } from 'lucide-react'
import type { PreRegistrationFormData } from '@/types'

const schema = z.object({
    full_name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    company_name: z.string().min(2, 'Company name is required'),
    role: z.string().min(1, 'Please select your role'),
    plan_interest: z.string().min(1, 'Please select a plan'),
})

export default function PreRegistration() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState('')

    const { register, handleSubmit, formState: { errors }, reset } = useForm<PreRegistrationFormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit = async (data: PreRegistrationFormData) => {
        setIsSubmitting(true)
        setError('')

        try {
            const response = await fetch('/api/pre-register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            const result = await response.json()

            if (result.success) {
                setIsSuccess(true)
                reset()
                setTimeout(() => setIsSuccess(false), 5000)
            } else {
                setError(result.error || 'Something went wrong')
            }
        } catch (err) {
            setError('Failed to submit. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="pre-register" className="py-20 bg-gradient-to-b from-background to-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Get Early Access to{' '}
                            <span className="gradient-text">ReviuCheck</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Be among the first 500 businesses to transform their review management
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            {/* Left Side - Benefits */}
                            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-tertiary/10 p-8">
                                <h3 className="text-2xl font-bold mb-4">Why Join Early?</h3>
                                <div className="space-y-4">
                                    {[
                                        "50% off first 3 months",
                                        "Priority support",
                                        "Early feature access",
                                        "Free onboarding call",
                                        "Lifetime discount for early adopters"
                                    ].map((benefit) => (
                                        <div key={benefit} className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-secondary" />
                                            <span>{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side - Form */}
                            <div className="p-8">
                                {isSuccess ? (
                                    <motion.div
                                        initial={{ scale: 0.9 }}
                                        animate={{ scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold mb-2">You're In! 🎉</h3>
                                        <p className="text-gray-600">
                                            Thanks for registering! We'll send early access details to your email.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Full Name *</label>
                                            <input
                                                {...register('full_name')}
                                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="John Doe"
                                            />
                                            {errors.full_name && (
                                                <p className="text-red-500 text-xs mt-1">{errors.full_name.message}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-1">Email *</label>
                                            <input
                                                {...register('email')}
                                                type="email"
                                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="john@company.com"
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-1">Company Name *</label>
                                            <input
                                                {...register('company_name')}
                                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="Acme Inc."
                                            />
                                            {errors.company_name && (
                                                <p className="text-red-500 text-xs mt-1">{errors.company_name.message}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-1">Your Role *</label>
                                            <select
                                                {...register('role')}
                                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                            >
                                                <option value="">Select your role</option>
                                                <option value="CEO/Founder">CEO/Founder</option>
                                                <option value="Marketing Manager">Marketing Manager</option>
                                                <option value="Product Manager">Product Manager</option>
                                                <option value="Customer Support">Customer Support</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            {errors.role && (
                                                <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-1">Interested Plan *</label>
                                            <select
                                                {...register('plan_interest')}
                                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                            >
                                                <option value="">Select a plan</option>
                                                <option value="Starter">Starter - $99/month</option>
                                                <option value="Professional">Professional - $299/month</option>
                                                <option value="Enterprise">Enterprise - Custom pricing</option>
                                            </select>
                                            {errors.plan_interest && (
                                                <p className="text-red-500 text-xs mt-1">{errors.plan_interest.message}</p>
                                            )}
                                        </div>

                                        {error && (
                                            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                                                {error}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                                            ) : (
                                                'Get Early Access →'
                                            )}
                                        </button>

                                        <p className="text-xs text-gray-500 text-center">
                                            No credit card required. Free 14-day trial included.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
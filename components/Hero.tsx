'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, Shield, Zap } from 'lucide-react'

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
                                <Zap className="w-4 h-4 text-secondary" />
                                <span className="text-sm font-semibold text-secondary">AI-Powered Review Management</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                Transform Reviews into{' '}
                                <span className="gradient-text">Revenue</span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                ReviuCheck uses advanced AI to analyze, respond, and act on customer feedback across all platforms.
                                Save 70% of your team's time while improving response quality.
                            </p>

                            {/* Stats */}
                            <div className="flex gap-8 mb-8">
                                <div>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">Rated 4.9/5 by 500+ businesses</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">
                                        <Shield className="w-5 h-5 text-tertiary" />
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">Enterprise-grade security</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#pre-register"
                                    className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2 group"
                                >
                                    Start Free Trial
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="#how-it-works"
                                    className="border-2 border-secondary text-secondary px-8 py-3 rounded-full font-semibold hover:bg-secondary/10 transition-all text-center"
                                >
                                    Watch Demo
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Animated Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative w-full h-[500px] bg-gradient-to-br from-primary/20 via-secondary/20 to-tertiary/20 rounded-3xl p-8 animate-float">
                            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl"></div>
                            <div className="relative z-10 space-y-4">
                                <div className="bg-white rounded-xl p-4 shadow-lg">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-sm font-semibold">AI Analysis Complete</span>
                                    </div>
                                    <p className="text-gray-800">"Great product! The AI response saved us hours..."</p>
                                    <div className="mt-2 text-xs text-gray-500">Sentiment: Positive • Confidence: 98%</div>
                                </div>
                                <div className="bg-white rounded-xl p-4 shadow-lg ml-8">
                                    <p className="text-gray-800">AI Generated Response:</p>
                                    <p className="text-tertiary font-medium">"Thank you for your wonderful feedback! We're thrilled..."</p>
                                </div>
                                <div className="bg-white rounded-xl p-4 shadow-lg">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">Credit Usage Today</span>
                                        <span className="text-secondary font-bold">247/1000</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                        <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-1/4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
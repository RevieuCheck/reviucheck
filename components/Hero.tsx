'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, Shield, Zap } from 'lucide-react'
import LightRays from '@/components/LightRays'
import GradientText from '@/components/GradientText'
import ShinyText from '@/components/ShinyText'
import CurvedLoop from '@/components/CurvedLoop'

const BRAND_GRADIENT_COLORS = ['#F7AEF8', '#B388EB', '#8093F1', '#72DDF7']

export default function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col overflow-hidden pt-20">
            <div className="pointer-events-none absolute inset-0 z-0">
                <LightRays
                    className="h-full w-full opacity-90"
                    raysOrigin="top-center"
                    raysColor="#B388EB"
                    raysSpeed={0.85}
                    lightSpread={0.9}
                    rayLength={1.6}
                    followMouse
                    mouseInfluence={0.12}
                    noiseAmount={0.04}
                />
            </div>

            <div className="relative z-10 flex flex-1 items-center">
                <div className="container mx-auto px-6 py-16">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/25 px-4 py-2 backdrop-blur-sm">
                                    <Zap className="h-4 w-4 text-secondary" />
                                    <ShinyText
                                        text="AI-Powered Review Management"
                                        className="text-sm font-semibold"
                                        color="#5b21b6"
                                        shineColor="#ffffff"
                                        speed={2.2}
                                        pauseOnHover
                                    />
                                </div>

                                <h1 className="mb-6 text-5xl leading-tight font-bold md:text-7xl">
                                    Transform Reviews into{' '}
                                    <GradientText
                                        colors={BRAND_GRADIENT_COLORS}
                                        animationSpeed={7}
                                        className="inline cursor-default font-bold"
                                        showBorder={false}
                                        direction="horizontal"
                                    >
                                        Revenue
                                    </GradientText>
                                </h1>

                                <p className="mb-8 text-xl leading-relaxed text-gray-600">
                                    ReviuCheck uses advanced AI to analyze, respond, and act on customer feedback across
                                    all platforms. Save 70% of your team&apos;s time while improving response quality.
                                </p>

                                <div className="mb-8 flex gap-8">
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        </div>
                                        <p className="mt-1 text-sm text-gray-600">Rated 4.9/5 by 500+ businesses</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <Shield className="h-5 w-5 text-tertiary" />
                                        </div>
                                        <p className="mt-1 text-sm text-gray-600">Enterprise-grade security</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 sm:flex-row">
                                    <a
                                        href="#pre-register"
                                        className="group inline-flex transform items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-xl"
                                    >
                                        Start Free Trial
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </a>
                                    <a
                                        href="#how-it-works"
                                        className="rounded-full border-2 border-secondary px-8 py-3 text-center font-semibold text-secondary transition-all hover:bg-secondary/10"
                                    >
                                        Watch Demo
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="relative"
                        >
                            <div className="animate-float relative h-[500px] w-full rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-tertiary/20 p-8">
                                <div className="absolute inset-0 rounded-3xl bg-white/40 backdrop-blur-sm"></div>
                                <div className="relative z-10 space-y-4">
                                    <div className="rounded-xl bg-white p-4 shadow-lg">
                                        <div className="mb-2 flex items-center gap-3">
                                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                            <span className="text-sm font-semibold">AI Analysis Complete</span>
                                        </div>
                                        <p className="text-gray-800">&quot;Great product! The AI response saved us hours...&quot;</p>
                                        <div className="mt-2 text-xs text-gray-500">Sentiment: Positive • Confidence: 98%</div>
                                    </div>
                                    <div className="ml-8 rounded-xl bg-white p-4 shadow-lg">
                                        <p className="text-gray-800">AI Generated Response:</p>
                                        <p className="font-medium text-tertiary">
                                            &quot;Thank you for your wonderful feedback! We&apos;re thrilled...&quot;
                                        </p>
                                    </div>
                                    <div className="rounded-xl bg-white p-4 shadow-lg">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">Credit Usage Today</span>
                                            <span className="font-bold text-secondary">247/1000</span>
                                        </div>
                                        <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                                            <div className="h-2 w-1/4 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 w-full border-t border-secondary/15 bg-gradient-to-b from-background/80 to-background py-2 backdrop-blur-sm">
                <CurvedLoop
                    marqueeText="Sentiment analysis · Smart replies · 100+ languages · Enterprise security · Real-time analytics · "
                    speed={1.2}
                    curveAmount={140}
                    direction="left"
                    interactive={false}
                    wrapperClassName="flex w-full items-center justify-center py-1"
                    svgClassName="!text-xl md:!text-2xl"
                    className="!fill-secondary/90"
                />
            </div>
        </section>
    )
}

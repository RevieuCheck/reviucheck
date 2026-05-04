'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 w-full z-50 border-b transition-all duration-500 backdrop-blur-2xl ${
                isScrolled ? 'bg-white/70 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-white/50' : 'bg-white/30 border-transparent'
            }`}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center space-x-2"
                    >
                        <div className="w-10 h-10 bg-gradient-to-tr from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                            <span className="text-white font-bold text-xl">R</span>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
                            ReviuCheck
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative text-gray-800 hover:text-secondary transition-colors font-medium group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full rounded-full" />
                            </motion.a>
                        ))}
                        <motion.a
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            href="#pre-register"
                            className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-size-200 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-primary/30 hover:shadow-secondary/50 transition-all transform hover:scale-105 animate-gradient"
                        >
                            Get Early Access
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        className="md:hidden rounded-lg p-2 text-gray-800 hover:bg-white/50 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden mt-4 py-4 rounded-xl border border-white/40 bg-white/80 backdrop-blur-xl shadow-lg"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-2 text-gray-800 hover:bg-primary/15 transition-colors rounded-lg mx-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#pre-register"
                            className="block mx-4 mt-2 bg-gradient-to-r from-primary to-secondary text-white text-center px-6 py-2 rounded-full font-semibold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get Early Access
                        </a>
                    </motion.div>
                )}
            </nav>
        </header>
    )
}
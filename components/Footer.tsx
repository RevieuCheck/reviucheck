'use client'

import { Heart, X } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                                <span className="font-bold text-xl">R</span>
                            </div>
                            <span className="text-xl font-bold">ReviuCheck</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Transforming customer feedback into actionable insights with AI.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#features" className="hover:text-primary transition">Features</a></li>
                            <li><a href="#pricing" className="hover:text-primary transition">Pricing</a></li>
                            <li><a href="#how-it-works" className="hover:text-primary transition">How it Works</a></li>
                            <li><a href="#" className="hover:text-primary transition">API Docs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-primary transition">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition">Blog</a></li>
                            <li><a href="#" className="hover:text-primary transition">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary transition">Security</a></li>
                            <li><a href="#" className="hover:text-primary transition">GDPR</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm flex items-center gap-1">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for better customer experiences
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-400 hover:text-primary transition">
                            <X className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, BookOpen, Terminal, Cpu, Shield, Zap, Package, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const endpoints = [
  {
    method: 'POST',
    path: '/v1/analyze',
    description: 'Analyze a single review for sentiment, emotion, and intent.',
    request: `{
  "text": "Your review text here",
  "language": "auto",
  "options": {
    "sentiment": true,
    "emotion": true,
    "sarcasm_detection": true
  }
}`,
    response: `{
  "sentiment": "positive",
  "confidence": 0.98,
  "emotion": {
    "joy": 0.92,
    "anger": 0.01,
    "sadness": 0.02
  },
  "ai_response": "Thank you for your wonderful feedback!"
}`,
  },
  {
    method: 'POST',
    path: '/v1/batch-analyze',
    description: 'Analyze multiple reviews in a single request. Up to 100 reviews per batch.',
    request: `{
  "reviews": [
    { "text": "Great product!", "id": "1" },
    { "text": "Could be better", "id": "2" }
  ],
  "language": "auto"
}`,
    response: `{
  "results": [
    {
      "id": "1",
      "sentiment": "positive",
      "confidence": 0.99
    },
    {
      "id": "2",
      "sentiment": "neutral",
      "confidence": 0.87
    }
  ]
}`,
  },
  {
    method: 'GET',
    path: '/v1/usage',
    description: 'Get your current credit usage and remaining quota.',
    request: null,
    response: `{
  "total_credits": 5000,
  "used_credits": 1234,
  "remaining_credits": 3766,
  "reset_date": "2026-04-01T00:00:00Z"
}`,
  },
]

const sdks = [
  { name: 'Python', package: 'pip install reviucheck-sdk', docs: '#' },
  { name: 'JavaScript', package: 'npm install reviucheck-sdk', docs: '#' },
  { name: 'Go', package: 'go get github.com/reviucheck/sdk', docs: '#' },
  { name: 'Ruby', package: 'gem install reviucheck-sdk', docs: '#' },
]

export default function ApiDocsPage() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden pt-16">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 mb-6">
              <Code className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Developer Docs</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading mb-6">
              Simple, Powerful{' '}
              <span className="gradient-text">API</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Integrate AI-powered review analysis into your application with just a few lines of code.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-text-primary font-heading mb-6 flex items-center gap-2">
                <Package className="w-6 h-6 text-primary" />
                SDK Installation
              </h2>
              <div className="grid md:grid-cols-4 gap-4 mb-12">
                {sdks.map((sdk) => (
                  <div key={sdk.name} className="glass rounded-xl p-4 hover:border-primary/30 transition-all">
                    <div className="text-lg font-bold text-primary font-heading mb-2">{sdk.name}</div>
                    <code className="text-xs text-green-400 block mb-3">{sdk.package}</code>
                    <Link href={sdk.docs} className="text-sm text-primary hover:text-secondary transition-colors inline-flex items-center gap-1">
                      View docs <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-text-primary font-heading mb-6 flex items-center gap-2">
                <Terminal className="w-6 h-6 text-primary" />
                Quick Start
              </h2>
              <div className="glass rounded-2xl overflow-hidden mb-12">
                <div className="p-4 border-b border-primary/10 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="ml-2 text-xs text-text-muted font-mono">example.js</span>
                </div>
                <div className="p-6">
                  <pre className="overflow-x-auto text-sm text-green-400">
                    <code>{`import { ReviuCheck } from 'reviucheck-sdk';

const reviu = new ReviuCheck(process.env.REVIUCHECK_API_KEY);

// Analyze a review
const result = await reviu.analyze({
  text: "Amazing product! Fast delivery and great quality.",
  language: "auto"
});

console.log(result.sentiment);  // "positive"
console.log(result.confidence); // 0.98
console.log(result.aiResponse); // Auto-generated reply`}</code>
                  </pre>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-text-primary font-heading mb-6 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-primary" />
                API Endpoints
              </h2>

              <div className="space-y-6">
                {endpoints.map((ep, index) => (
                  <div key={ep.path} className="glass rounded-2xl overflow-hidden">
                    <div className="p-6 border-b border-primary/10">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs font-mono font-bold px-2 py-1 rounded ${
                          ep.method === 'GET' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {ep.method}
                        </span>
                        <code className="text-sm text-text-primary font-mono">{ep.path}</code>
                      </div>
                      <p className="text-sm text-text-secondary">{ep.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 divide-x divide-primary/10">
                      {ep.request && (
                        <div className="p-4">
                          <p className="text-xs text-text-muted font-mono mb-2">Request:</p>
                          <pre className="overflow-x-auto text-xs text-green-400">
                            <code>{ep.request}</code>
                          </pre>
                        </div>
                      )}
                      <div className="p-4">
                        <p className="text-xs text-text-muted font-mono mb-2">Response:</p>
                        <pre className="overflow-x-auto text-xs text-green-400">
                          <code>{ep.response}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 mt-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-text-primary font-heading">Authentication</h3>
              </div>
              <p className="text-text-secondary mb-4">All API requests require authentication via API key. Include your key in the Authorization header:</p>
              <pre className="overflow-x-auto text-sm text-green-400 bg-surface rounded-xl p-4">
                <code>{`Authorization: Bearer YOUR_API_KEY

# Or use the X-API-Key header:
X-API-Key: YOUR_API_KEY`}</code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-transparent to-transparent p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Ready to Start{' '}
                <span className="gradient-text">Building?</span>
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
                Get your API key and start integrating today. Free tier includes 1,000 requests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
                >
                  Get API Key
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 border border-primary/30 text-text-primary px-8 py-3.5 rounded-full font-semibold hover:bg-primary/10 transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

'use client'

import { useEffect } from 'react'

export function reportWebVitals(metric: any) {
  if (process.env.NODE_ENV === 'development') {
    const label = metric.name === 'CLS' ? 'Cumulative Layout Shift' :
                  metric.name === 'LCP' ? 'Largest Contentful Paint' :
                  metric.name === 'INP' ? 'Interaction to Next Paint' :
                  metric.name === 'FCP' ? 'First Contentful Paint' :
                  metric.name === 'TTFB' ? 'Time to First Byte' :
                  metric.name

    console.log(`[Web Vitals] ${label}:`, {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id,
    })
  }
}

export default function PerformanceVitals() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (process.env.NODE_ENV === 'development') {
            console.log(`[Performance] ${entry.entryType}:`, entry)
          }
        })
      })

      try {
        observer.observe({ type: 'largest-contentful-paint', buffered: true })
      } catch {}
      try {
        observer.observe({ type: 'layout-shift', buffered: true })
      } catch {}
      try {
        observer.observe({ type: 'first-input', buffered: true })
      } catch {}
      try {
        observer.observe({ type: 'paint', buffered: true })
      } catch {}
      try {
        observer.observe({ type: 'navigation', buffered: true })
      } catch {}

      return () => observer.disconnect()
    }
  }, [])

  return null
}

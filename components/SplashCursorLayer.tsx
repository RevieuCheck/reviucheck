'use client'

import { useEffect, useState } from 'react'
import SplashCursor from '@/components/SplashCursor'

export default function SplashCursorLayer() {
    const [mount, setMount] = useState(false)

    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
        const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
        const minWidth = window.matchMedia('(min-width: 768px)')

        const evaluate = () => {
            if (reduceMotion.matches || !finePointer.matches || !minWidth.matches) {
                setMount(false)
            } else {
                setMount(true)
            }
        }

        evaluate()
        reduceMotion.addEventListener('change', evaluate)
        finePointer.addEventListener('change', evaluate)
        minWidth.addEventListener('change', evaluate)

        return () => {
            reduceMotion.removeEventListener('change', evaluate)
            finePointer.removeEventListener('change', evaluate)
            minWidth.removeEventListener('change', evaluate)
        }
    }, [])

    if (!mount) return null

    return (
        <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden>
            <SplashCursor TRANSPARENT RAINBOW_MODE SHADING={false} DYE_RESOLUTION={720} SIM_RESOLUTION={96} />
        </div>
    )
}

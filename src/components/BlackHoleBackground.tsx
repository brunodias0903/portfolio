'use client'

import dynamic from 'next/dynamic'

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false })

export default function BlackHoleBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <HeroScene />
    </div>
  )
}

'use client'

import { MotionConfig } from 'framer-motion'
import { LanguageProvider } from '@/contexts/LanguageContext'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>{children}</LanguageProvider>
    </MotionConfig>
  )
}

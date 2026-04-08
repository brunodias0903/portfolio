'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false })

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      {/* Gradient mask — garante legibilidade do texto à esquerda */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none" />

      {/* Conteúdo textual */}
      <div className="relative z-10 flex h-full items-center px-8 md:px-16 lg:px-24">
        <div className="max-w-xl">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-indigo-400 text-xs font-mono tracking-[0.3em] uppercase mb-4"
          >
            Olá, eu sou
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-3"
          >
            Bruno Dias
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-xl md:text-2xl text-zinc-400 font-light mb-6"
          >
            Desenvolvedor Fullstack &amp; Mobile
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="text-zinc-500 text-base leading-relaxed mb-10"
          >
            Transformo ideias em produtos digitais — do backend robusto ao app
            mobile, com foco em experiência real e resultado para o seu negócio.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projetos"
              className="px-7 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-full transition-colors duration-200"
            >
              Ver Projetos
            </a>
            <a
              href="https://wa.me/5592981705996"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white text-sm font-medium rounded-full transition-colors duration-200"
            >
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-600 text-[10px] font-mono tracking-[0.25em] uppercase">
          scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          className="w-px h-8 bg-zinc-700 origin-top"
        />
      </motion.div>
    </section>
  )
}

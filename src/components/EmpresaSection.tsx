'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/contexts/LanguageContext'
import { tr, translations } from '@/i18n'

const t = translations.empresa

const icons = ['⬡', '◈', '⬟']

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

export default function EmpresaSection() {
  const { lang } = useLang()

  return (
    <section
      id="empresa"
      className="relative w-full bg-[#0a0a0a] overflow-hidden py-20 md:py-32 px-8 md:px-16 lg:px-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-[120px]"
        style={{ background: 'radial-gradient(ellipse, #6366f1 0%, #06b6d4 100%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 text-xs font-mono tracking-[0.3em] uppercase mb-6"
        >
          {tr(t.label, lang)}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          style={{
            background: 'linear-gradient(90deg, #a5b4fc 0%, #38bdf8 60%, #67e8f9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {tr(t.title, lang)}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-16 leading-relaxed"
        >
          {tr(t.subtitle, lang)}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {t.services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 cursor-default overflow-hidden"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 70%)',
                }}
              />
              <span className="block text-3xl text-indigo-400 mb-5 select-none">
                {icons[i]}
              </span>
              <h3 className="text-white font-semibold text-lg mb-3">{tr(s.title, lang)}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{tr(s.description, lang)}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

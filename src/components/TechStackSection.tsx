'use client'

import { motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiPrisma,
  SiFlutter,
  SiAndroid,
  SiApple,
  SiExpo,
  SiGit,
  SiGithub,
  SiVercel,
  SiFastify,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import { useLang } from '@/contexts/LanguageContext'
import { tr, translations } from '@/i18n'

const t = translations.stack

type Tech = {
  icon: IconType
  label: string
  color: string
  delay: number
  duration: number
}

type Category = {
  id: string
  label: { pt: string; en: string }
  techs: Tech[]
}

const categories: Category[] = [
  {
    id: 'frontend',
    label: t.tabs.frontend,
    techs: [
      { icon: SiReact,       label: 'React',       color: '#61dafb', delay: 0.0, duration: 4.2 },
      { icon: SiNextdotjs,   label: 'Next.js',     color: '#ffffff', delay: 0.2, duration: 4.8 },
      { icon: SiTypescript,  label: 'TypeScript',  color: '#3178c6', delay: 0.4, duration: 4.4 },
      { icon: SiTailwindcss, label: 'Tailwind',    color: '#06b6d4', delay: 0.6, duration: 5.0 },
    ],
  },
  {
    id: 'backend',
    label: t.tabs.backend,
    techs: [
      { icon: SiNodedotjs,  label: 'Node.js',     color: '#6cc24a', delay: 0.0, duration: 5.4 },
      { icon: SiFastify,    label: 'Fastify',     color: '#ffffff', delay: 0.2, duration: 4.6 },
      { icon: SiPostgresql, label: 'PostgreSQL',  color: '#4169e1', delay: 0.4, duration: 4.8 },
      { icon: SiPrisma,     label: 'Prisma',      color: '#5a67d8', delay: 0.6, duration: 5.2 },
      { icon: SiDocker,     label: 'Docker',      color: '#2496ed', delay: 0.8, duration: 4.4 },
    ],
  },
  {
    id: 'mobile',
    label: t.tabs.mobile,
    techs: [
      { icon: SiReact,   label: 'React Native', color: '#61dafb', delay: 0.0, duration: 4.2 },
      { icon: SiFlutter, label: 'Flutter',      color: '#54c5f8', delay: 0.2, duration: 4.6 },
      { icon: SiExpo,    label: 'Expo',         color: '#ffffff', delay: 0.4, duration: 5.0 },
      { icon: SiAndroid, label: 'Android',      color: '#3ddc84', delay: 0.6, duration: 5.2 },
      { icon: SiApple,   label: 'iOS',          color: '#a5b4fc', delay: 0.8, duration: 4.4 },
    ],
  },
  {
    id: 'tools',
    label: t.tabs.tools,
    techs: [
      { icon: SiGit,    label: 'Git',    color: '#f05032', delay: 0.0, duration: 4.2 },
      { icon: SiGithub, label: 'GitHub', color: '#ffffff', delay: 0.2, duration: 4.8 },
      { icon: SiVercel, label: 'Vercel', color: '#ffffff', delay: 0.4, duration: 5.0 },
      { icon: SiDocker, label: 'Docker', color: '#2496ed', delay: 0.6, duration: 4.4 },
    ],
  },
]

const floatVariant = (duration: number) => ({
  animate: {
    y: [0, -10, 0],
    transition: { duration, repeat: Infinity, ease: 'easeInOut' as const },
  },
})

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: 'easeOut' as const },
  }),
}

export default function TechStackSection() {
  const { lang } = useLang()

  return (
    <section
      id="stack"
      className="relative w-full bg-[#0a0a0a] overflow-hidden py-20 md:py-28 px-8 md:px-16 lg:px-24"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full opacity-[0.06] blur-[100px]"
        style={{ background: 'radial-gradient(ellipse, #6366f1 0%, #06b6d4 100%)' }}
      />

      <div className="relative max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 text-xs font-mono tracking-[0.3em] uppercase mb-4 text-center"
        >
          {tr(t.label, lang)}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-3"
        >
          {tr(t.title, lang)}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-zinc-500 text-base text-center mb-14"
        >
          {tr(t.subtitle, lang)}
        </motion.p>

        {/* All categories side by side */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-center">
          {categories.map((cat, catIndex) => (
            <div key={cat.id} className="flex flex-col md:flex-row md:items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="flex flex-col items-center px-8 py-6"
              >
                <p className="text-zinc-600 text-xs font-mono tracking-[0.2em] uppercase mb-8 text-center">
                  {tr(cat.label, lang)}
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  {cat.techs.map((tech, i) => {
                    const Icon = tech.icon
                    return (
                      <motion.div
                        key={`${cat.id}-${tech.label}`}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={i}
                        className="flex flex-col items-center gap-3 cursor-default"
                      >
                        <motion.div
                          variants={floatVariant(tech.duration)}
                          animate="animate"
                          className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900/50"
                          style={{ border: '1px solid #3f3f46' }}
                          whileHover={{ scale: 1.12, borderColor: tech.color + '66' }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                          <Icon size={32} color={tech.color} />
                        </motion.div>
                        <span className="text-zinc-500 text-xs font-mono">{tech.label}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

              {catIndex < categories.length - 1 && (
                <div className="hidden md:block self-stretch w-px bg-zinc-800/60 my-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  )
}

'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { SiNextdotjs, SiSanity } from 'react-icons/si'
import { FaWhatsapp } from 'react-icons/fa'
import { TbDeviceMobile, TbPencil, TbUsers, TbPhoto, TbTag, TbWriting } from 'react-icons/tb'
import type { IconType } from 'react-icons'
import { useLang } from '@/contexts/LanguageContext'
import { tr, translations } from '@/i18n'

const tagMeta: Record<string, { icon: IconType; color: string }> = {
  'Mobile-First':  { icon: TbDeviceMobile, color: '#06b6d4' },
  'Next.js':       { icon: SiNextdotjs,    color: '#ffffff' },
  'Sanity CMS':    { icon: SiSanity,       color: '#f03e2f' },
  'Blog Editorial':        { icon: TbWriting,      color: '#a78bfa' },
  'Equipe via CMS':        { icon: TbUsers,        color: '#34d399' },
  'Hero Dinâmica':         { icon: TbPhoto,        color: '#f59e0b' },
  'Autores & Categorias':  { icon: TbTag,          color: '#818cf8' },
  'WhatsApp API':  { icon: FaWhatsapp,     color: '#25d366' },
}

const t = translations.projects

export default function ProjectsSection() {
  const { lang } = useLang()

  return (
    <section
      id="projetos"
      className="relative w-full bg-[#0a0a0a] overflow-hidden py-20 md:py-28 px-8 md:px-16 lg:px-24"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[480px] h-[320px] rounded-full opacity-10 blur-[100px]"
        style={{ background: 'radial-gradient(ellipse, #6366f1 0%, #06b6d4 100%)' }}
      />

      <div className="relative max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-indigo-400 text-xs font-mono tracking-[0.3em] uppercase mb-4"
        >
          {tr(t.label, lang)}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.04 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          {tr(t.title, lang)}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-zinc-500 text-base md:text-lg max-w-3xl mb-12"
        >
          {tr(t.subtitle, lang)}
        </motion.p>

        <div className="flex flex-col gap-16">
          {t.items.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} lang={lang} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  )
}

function ProjectCard({
  project,
  index,
  lang,
}: {
  project: (typeof t.items)[number]
  index: number
  lang: 'pt' | 'en'
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
    >
      {/* Video — ordem invertida em índices ímpares no desktop */}
      <div className={`relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
        <video
          ref={videoRef}
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className={index % 2 !== 0 ? 'md:order-1' : ''}>
        <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
        <p className="text-zinc-400 text-base leading-relaxed mb-6">
          {tr(project.description, lang)}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => {
            const meta = tagMeta[tag]
            const Icon = meta?.icon
            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-mono text-indigo-300"
              >
                {Icon && <Icon size={12} color={meta.color} />}
                {tag}
              </span>
            )
          })}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-zinc-200 text-zinc-900 text-sm font-medium rounded-full transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
          </svg>
          {tr(t.visitSite, lang)}
        </a>
      </div>
    </motion.div>
  )
}

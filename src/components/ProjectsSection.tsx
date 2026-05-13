'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SiNextdotjs, SiSanity, SiReact, SiLaravel } from 'react-icons/si'
import { FaWhatsapp } from 'react-icons/fa'
import { TbDeviceMobile, TbUsers, TbPhoto, TbTag, TbWriting, TbMail, TbRobot, TbLock } from 'react-icons/tb'
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
  'React':         { icon: SiReact,        color: '#61dafb' },
  'Laravel':       { icon: SiLaravel,      color: '#ff2d20' },
  'SMTP':          { icon: TbMail,         color: '#60a5fa' },
  'Automação':     { icon: TbRobot,        color: '#c084fc' },
}

const t = translations.projects

function getEmbeddedVideoUrl(url: string) {
  try {
    const parsedUrl = new URL(url)

    if (parsedUrl.hostname.includes('drive.google.com')) {
      if (parsedUrl.pathname.startsWith('/file/d/')) {
        const [, , , fileId] = parsedUrl.pathname.split('/')
        return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null
      }

      const fileId = parsedUrl.searchParams.get('id')
      return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null
    }

    if (parsedUrl.hostname.includes('player.cloudinary.com') && parsedUrl.pathname.startsWith('/embed/')) {
      return parsedUrl.toString()
    }

    return null
  } catch {
    return null
  }
}

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

      <motion.div
        initial={{ opacity: 0, y: 52 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="relative max-w-5xl mx-auto"
      >
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
      </motion.div>

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
  const [isPlayerOpen, setIsPlayerOpen] = useState(false)
  const hasVideo = Boolean(project.video)
  const embeddedVideoUrl = hasVideo ? getEmbeddedVideoUrl(project.video!) : null
  const playerUrl = project.videoPlayer ?? embeddedVideoUrl

  useEffect(() => {
    if (!isPlayerOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPlayerOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isPlayerOpen])

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
      >
        {/* Video — ordem invertida em índices ímpares no desktop */}
        {hasVideo ? (
          <div
            role="button"
            tabIndex={0}
            aria-label={`Abrir player do projeto ${project.name}`}
            onClick={() => setIsPlayerOpen(true)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setIsPlayerOpen(true)
              }
            }}
            className={`relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:border-indigo-500/70 hover:shadow-[0_18px_35px_-22px_rgba(99,102,241,0.95)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${index % 2 !== 0 ? 'md:order-2' : ''}`}
          >
            {embeddedVideoUrl ? (
              <iframe
                src={embeddedVideoUrl}
                title={`Preview de video do projeto ${project.name}`}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full pointer-events-none"
              />
            ) : (
              <video
                ref={videoRef}
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover pointer-events-none"
              />
            )}
          </div>
        ) : (
          <div
            className={`relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video flex flex-col items-center justify-center gap-3 ${index % 2 !== 0 ? 'md:order-2' : ''}`}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{ background: 'radial-gradient(ellipse at center, #6366f1 0%, transparent 70%)' }}
            />
            <TbLock size={32} className="text-zinc-600" />
            <span className="text-zinc-600 text-xs font-mono tracking-widest uppercase">Sistema Interno</span>
          </div>
        )}

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
          {project.url && (
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
          )}
        </div>
      </motion.div>

      {isPlayerOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/85 p-4 md:p-8"
          onClick={() => setIsPlayerOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Player do projeto ${project.name}`}
        >
          <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-center">
            <div className="w-full" onClick={(event) => event.stopPropagation()}>
              <div className="mb-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsPlayerOpen(false)}
                  className="rounded-full border border-zinc-600 bg-zinc-900/90 px-4 py-2 text-sm text-zinc-100 hover:bg-zinc-800 transition-colors"
                >
                  Fechar
                </button>
              </div>

              <div className="aspect-video overflow-hidden rounded-2xl border border-zinc-700 bg-black">
                {playerUrl ? (
                  <iframe
                    src={playerUrl}
                    title={`Player de video do projeto ${project.name}`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <video
                    src={project.video}
                    controls
                    autoPlay
                    playsInline
                    className="h-full w-full object-contain bg-black"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

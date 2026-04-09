'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/contexts/LanguageContext'
import { tr, translations } from '@/i18n'

const t = translations.header

function BlackHoleLogo() {
  return (
    <svg
      viewBox="0 0 40 40"
      width="32"
      height="32"
      aria-hidden
      className="shrink-0"
    >
      <defs>
        <radialGradient id="bhGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="20" cy="20" rx="19" ry="10" fill="url(#bhGlow)" />
      <ellipse cx="20" cy="20" rx="18" ry="5.0" fill="none" stroke="#6366f1" strokeWidth="0.6" opacity="0.40" />
      <ellipse cx="20" cy="20" rx="15" ry="4.2" fill="none" stroke="#6366f1" strokeWidth="0.8" opacity="0.55" />
      <ellipse cx="20" cy="20" rx="12" ry="3.3" fill="none" stroke="#818cf8" strokeWidth="1.0" opacity="0.70" />
      <ellipse cx="20" cy="20" rx="9.8" ry="2.7" fill="none" stroke="#06b6d4" strokeWidth="1.2" opacity="0.85" />
      <circle cx="20" cy="20" r="7.8" fill="#000510" opacity="0.70" />
      <circle cx="20" cy="20" r="6.0" fill="#000000" />
      <ellipse cx="20" cy="20" rx="6.5" ry="1.8" fill="none" stroke="#e0f2fe" strokeWidth="1.1" opacity="0.90" />
    </svg>
  )
}

function LanguageSwitcher() {
  const { lang, toggle } = useLang()

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1 text-xs font-mono text-zinc-500 hover:text-white transition-colors duration-200 border border-zinc-800 hover:border-zinc-600 rounded-full px-3 py-1.5"
      aria-label="Switch language"
    >
      <span className={lang === 'pt' ? 'text-white' : 'text-zinc-500'}>PT</span>
      <span className="text-zinc-700">/</span>
      <span className={lang === 'en' ? 'text-white' : 'text-zinc-500'}>EN</span>
    </button>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang } = useLang()

  const navLinks = [
    { label: tr(t.empresa, lang), href: '#empresa' },
    { label: tr(t.projetos, lang), href: '#projetos' },
    { label: tr(t.contato, lang), href: '#contato' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-800/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <BlackHoleLogo />
          <span className="text-white font-semibold text-sm tracking-wide group-hover:text-indigo-400 transition-colors duration-200">
            Norrvik Tech
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-400 hover:text-white text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Mobile: language switcher + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label={tr(t.openMenu, lang)}
          >
            <span
              className={`block w-5 h-px bg-zinc-400 transition-all duration-200 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[3px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-zinc-400 transition-all duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-zinc-400 transition-all duration-200 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[3px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-b border-zinc-800/60 px-8 pb-6 pt-2 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-zinc-400 hover:text-white text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

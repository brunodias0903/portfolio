'use client'

import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { useLang } from '@/contexts/LanguageContext'
import { tr, translations } from '@/i18n'

const t = translations.contato

export default function ContatoSection() {
  const { lang } = useLang()

  return (
    <section
      id="contato"
      className="relative w-full bg-[#080808] overflow-hidden py-20 md:py-32 px-8 md:px-16 lg:px-24"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <motion.div
        initial={{ opacity: 0, x: 44, y: 16 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.72, ease: 'easeOut' }}
        className="relative max-w-3xl mx-auto text-center"
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
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          {tr(t.title, lang)}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-zinc-500 text-lg leading-relaxed mb-12"
        >
          {tr(t.subtitle, lang)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/5592981705996?text=Olá%2C%20Bruno!%20Vi%20seu%20portfólio%20e%20tenho%20um%20projeto%20para%20conversar."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1fba58] text-white text-sm font-medium rounded-full transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <FaWhatsapp size={18} />
            {tr(t.whatsapp, lang)}
          </a>

          <a
            href="mailto:bdd.vasconcelos@gmail.com"
            className="flex items-center gap-3 px-8 py-4 bg-[#ea4335] hover:bg-[#d33426] text-white text-sm font-medium rounded-full transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-[18px] h-[18px] shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            {tr(t.email, lang)}
          </a>

          <a
            href="https://www.linkedin.com/in/bruno-dias-9b1ab1203/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#0a66c2] hover:bg-[#0858a8] text-white text-sm font-medium rounded-full transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <FaLinkedin size={18} />
            {tr(t.linkedin, lang)}
          </a>

          <a
            href="https://github.com/brunodias0903"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#24292e] hover:bg-[#2f363d] border border-zinc-700 text-white text-sm font-medium rounded-full transition-colors duration-200 w-full sm:w-auto justify-center"
          >
            <SiGithub size={18} />
            {tr(t.github, lang)}
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
    </section>
  )
}

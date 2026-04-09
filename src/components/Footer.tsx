'use client'

import { useLang } from '@/contexts/LanguageContext'
import { tr, translations } from '@/i18n'

export default function Footer() {
  const { lang } = useLang()

  return (
    <footer className="relative z-10 w-full bg-[#0a0a0a] border-t border-zinc-800/60 px-8 md:px-16 lg:px-24 py-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <span className="text-zinc-600 text-xs font-mono">
          Norrvik Tech — CNPJ 66.138.312/0001-74
        </span>
        <span className="text-zinc-700 text-xs font-mono">
          CNAE 62.01-5-01 · {tr(translations.footer.tagline, lang)}
        </span>
      </div>
    </footer>
  )
}

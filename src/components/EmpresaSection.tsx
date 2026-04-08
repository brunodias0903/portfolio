'use client'

import { motion } from 'framer-motion'

const services = [
  {
    icon: '⬡',
    title: 'Sistemas Web',
    description:
      'Plataformas, dashboards e sistemas internos construídos do zero — rápidos, escaláveis e pensados para o seu fluxo de trabalho.',
  },
  {
    icon: '◈',
    title: 'Apps Mobile',
    description:
      'Aplicativos iOS e Android com React Native — uma base de código, dois produtos. Do protótipo à publicação nas lojas.',
  },
  {
    icon: '⬟',
    title: 'APIs & Integrações',
    description:
      'Backends robustos e integrações com serviços externos — pagamentos, notificações, ERPs e tudo mais que o seu negócio precisa.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function EmpresaSection() {
  return (
    <section
      id="empresa"
      className="relative w-full bg-[#0a0a0a] overflow-hidden py-20 md:py-32 px-8 md:px-16 lg:px-24"
    >
      {/* Grid decorativo de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Glow central */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-[120px]"
        style={{
          background: 'radial-gradient(ellipse, #6366f1 0%, #06b6d4 100%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 text-xs font-mono tracking-[0.3em] uppercase mb-6"
        >
          A empresa
        </motion.p>

        {/* Nome com gradiente */}
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
          Norrvik Tech
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-16 leading-relaxed"
        >
          Desenvolvimento de software sob encomenda — soluções digitais
          pensadas para resolver problemas reais e gerar valor desde o primeiro
          deploy.
        </motion.p>

        {/* Cards de serviço */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 cursor-default overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 70%)',
                }}
              />

              <span className="block text-3xl text-indigo-400 mb-5 select-none">
                {s.icon}
              </span>
              <h3 className="text-white font-semibold text-lg mb-3">{s.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Rodapé da seção — CNPJ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-zinc-800/60 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
        >
          <span className="text-zinc-600 text-xs font-mono">
            Norrvik Tech — CNPJ 66.138.312/0001-74
          </span>
          <span className="text-zinc-700 text-xs font-mono">
            CNAE 62.01-5-01 · Desenvolvimento de software sob encomenda
          </span>
        </motion.div>
      </div>
    </section>
  )
}

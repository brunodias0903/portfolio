"use client";

import { useLang } from "@/contexts/LanguageContext";
import { tr, translations } from "@/i18n";
import { motion } from "framer-motion";
import Image from "next/image";

const t = translations.hero;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

export default function HeroSection() {
  const { lang } = useLang();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-transparent px-8 md:px-16 lg:px-24">
      {/* Gradient mask — text readability on desktop */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent pointer-events-none" />
      {/* Extra overlay for mobile where the black hole sits centered behind text */}
      <div className="absolute inset-0 bg-[#0a0a0a]/50 pointer-events-none md:hidden" />

      {/* Text content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            {/* Avatar */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="shrink-0 self-start md:self-auto"
            >
              <Image
                src="/avatar.png"
                alt="Bruno Dias"
                width={160}
                height={160}
                priority
                className="rounded-full border-2 border-white object-cover w-28 h-28 md:w-40 md:h-40"
                style={{ objectPosition: "center 25%" }}
              />
            </motion.div>

            <div className="max-w-xl">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="text-indigo-400 text-xs font-mono tracking-[0.3em] uppercase mb-4"
              >
                {tr(t.greeting, lang)}
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
                className="text-xl md:text-2xl text-zinc-300 font-light mb-6"
              >
                {tr(t.role, lang)}
              </motion.h2>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.3}
                className="text-zinc-400 text-base leading-relaxed mb-10"
              >
                {tr(t.description, lang)}
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
                  {tr(t.ctaProjects, lang)}
                </a>
                <a
                  href="https://wa.me/5592981705996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white text-sm font-medium rounded-full transition-colors duration-200"
                >
                  {tr(t.ctaWhatsapp, lang)}
                </a>
              </motion.div>
            </div>
          </div>
          {/* flex row */}
        </div>
        {/* max-w-5xl */}
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
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          className="w-px h-8 bg-zinc-700 origin-top"
        />
      </motion.div>
    </section>
  );
}

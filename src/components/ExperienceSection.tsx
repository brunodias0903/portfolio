"use client";

import { useLang } from "@/contexts/LanguageContext";
import { tr, translations } from "@/i18n";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaDog, FaJava } from "react-icons/fa";
import {
  SiDatadog,
  SiDocker,
  SiDotnet,
  SiEslint,
  SiFirebase,
  SiGithubactions,
  SiGitlab,
  SiPrettier,
  SiSanity,
  SiStorybook,
} from "react-icons/si";
import {
  TbAtom2,
  TbComponents,
  TbGitMerge,
  TbPlugConnected,
  TbShieldCheck,
} from "react-icons/tb";

type ItemMeta = { icon: IconType; color: string };
const itemMeta: Record<string, ItemMeta> = {
  "CI/CD Pipelines": { icon: TbGitMerge, color: "#94a3b8" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088ff" },
  "GitLab CI": { icon: SiGitlab, color: "#fc6d26" },
  Docker: { icon: SiDocker, color: "#2496ed" },
  Husky: { icon: FaDog, color: "#d4a76a" },
  SonarQube: { icon: TbShieldCheck, color: "#4e9bcd" },
  ESLint: { icon: SiEslint, color: "#4b32c3" },
  Prettier: { icon: SiPrettier, color: "#f7ba3e" },
  Storybook: { icon: SiStorybook, color: "#ff4785" },
  Datadog: { icon: SiDatadog, color: "#632ca6" },
  Zustand: { icon: TbAtom2, color: "#e07b39" },
  "IoC / DI": { icon: TbPlugConnected, color: "#94a3b8" },
  "Google Firebase": { icon: SiFirebase, color: "#ffca28" },
  Sanity: { icon: SiSanity, color: "#f03e2f" },
  "Micro-frontends": { icon: TbComponents, color: "#94a3b8" },
  "C#": { icon: SiDotnet, color: "#512bd4" },
  "Java (básico)": { icon: FaJava, color: "#f89820" },
  "Java (basic)": { icon: FaJava, color: "#f89820" },
};

const t = translations.experience;

export default function ExperienceSection() {
  const { lang } = useLang();
  const focus = t.focus;
  const groups = t.groups;
  const knowledge = t.knowledge;

  return (
    <section
      id="ferramentas"
      className="relative w-full bg-[#090909] overflow-hidden py-20 md:py-28 px-8 md:px-16 lg:px-24"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[520px] h-[360px] rounded-full opacity-10 blur-[110px]"
        style={{
          background: "radial-gradient(ellipse, #06b6d4 0%, #6366f1 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, x: 56 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
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
          className="text-zinc-500 text-base md:text-lg max-w-3xl mb-10"
        >
          {tr(t.subtitle, lang)}
        </motion.p>

        <div className="flex flex-wrap gap-3 mb-6">
          {focus.map((entry, i) => (
            <motion.span
              key={entry.pt}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-mono tracking-wide uppercase text-emerald-300"
            >
              {tr(entry, lang)}
            </motion.span>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label.pt}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.08 }}
            >
              <p className="text-zinc-600 text-xs font-mono tracking-[0.2em] uppercase mb-3">
                {tr(group.label, lang)}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, i) => {
                  const meta = itemMeta[item];
                  const Icon = meta?.icon;
                  return (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: gi * 0.08 + i * 0.05,
                      }}
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-700/70 bg-zinc-900/60 px-4 py-2 text-sm font-mono text-zinc-300"
                    >
                      {Icon && <Icon size={14} color={meta.color} />}
                      {item}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conhecimentos */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-12 pt-10 border-t border-zinc-800"
        >
          <p className="text-indigo-400 text-xs font-mono tracking-[0.3em] uppercase mb-2">
            {tr(t.knowledgeLabel, lang)}
          </p>
          <p className="text-zinc-600 text-sm mb-6">
            {tr(t.knowledgeSubtitle, lang)}
          </p>
          <div className="flex flex-wrap gap-3">
            {knowledge.map((item, i) => {
              const label = tr(item, lang);
              const meta = itemMeta[label] ?? itemMeta[item.pt];
              const Icon = meta?.icon;
              return (
                <motion.span
                  key={item.pt}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="inline-flex items-center gap-2 rounded-full border border-dashed border-zinc-700/60 bg-transparent px-4 py-2 text-sm font-mono text-zinc-500"
                >
                  {Icon && (
                    <Icon
                      size={14}
                      color={meta.color}
                      style={{ opacity: 0.6 }}
                    />
                  )}
                  {label}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

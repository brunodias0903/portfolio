export type Lang = 'pt' | 'en'

type Bilingual = { pt: string; en: string }

export function tr(entry: Bilingual, lang: Lang): string {
  return entry[lang]
}

export const translations = {
  header: {
    empresa: { pt: 'Empresa', en: 'Company' },
    projetos: { pt: 'Projetos', en: 'Projects' },
    contato: { pt: 'Contato', en: 'Contact' },
    openMenu: { pt: 'Abrir menu', en: 'Open menu' },
  },
  hero: {
    greeting: { pt: 'Olá, eu sou', en: "Hi, I'm" },
    role: { pt: 'Desenvolvedor Fullstack & Mobile', en: 'Fullstack & Mobile Developer' },
    description: {
      pt: 'Transformo ideias em produtos digitais — do backend robusto ao app mobile, com foco em experiência real e resultado para o seu negócio.',
      en: 'I turn ideas into digital products — from robust backend to mobile apps, focused on real experience and results for your business.',
    },
    ctaProjects: { pt: 'Ver Projetos', en: 'View Projects' },
    ctaWhatsapp: { pt: 'Falar no WhatsApp', en: 'Chat on WhatsApp' },
  },
  stack: {
    label: { pt: 'Stack', en: 'Stack' },
    title: { pt: 'Tecnologias que uso', en: 'Technologies I use' },
    subtitle: {
      pt: 'Do front ao back, do web ao mobile — uma stack completa.',
      en: 'From front to back, from web to mobile — a complete stack.',
    },
    tabs: {
      frontend: { pt: 'Front-end', en: 'Front-end' },
      backend: { pt: 'Back-end', en: 'Back-end' },
      mobile: { pt: 'Mobile', en: 'Mobile' },
      tools: { pt: 'Ferramentas', en: 'Tools' },
    },
  },
  empresa: {
    label: { pt: 'A empresa', en: 'The company' },
    subtitle: {
      pt: 'Desenvolvimento de software sob encomenda — soluções digitais pensadas para resolver problemas reais e gerar valor desde o primeiro deploy.',
      en: 'Custom software development — digital solutions designed to solve real problems and generate value from the first deploy.',
    },
    services: [
      {
        title: { pt: 'Sistemas Web', en: 'Web Systems' },
        description: {
          pt: 'Plataformas, dashboards e sistemas internos construídos do zero — rápidos, escaláveis e pensados para o seu fluxo de trabalho.',
          en: 'Platforms, dashboards, and internal systems built from scratch — fast, scalable, and designed for your workflow.',
        },
      },
      {
        title: { pt: 'Apps Mobile', en: 'Mobile Apps' },
        description: {
          pt: 'Aplicativos iOS e Android com React Native — uma base de código, dois produtos. Do protótipo à publicação nas lojas.',
          en: 'iOS and Android apps with React Native — one codebase, two products. From prototype to store publication.',
        },
      },
      {
        title: { pt: 'APIs & Integrações', en: 'APIs & Integrations' },
        description: {
          pt: 'Backends robustos e integrações com serviços externos — pagamentos, notificações, ERPs e tudo mais que o seu negócio precisa.',
          en: 'Robust backends and integrations with external services — payments, notifications, ERPs, and everything else your business needs.',
        },
      },
    ],
  },
  contato: {
    label: { pt: 'Contato', en: 'Contact' },
    title: { pt: 'Tem um projeto em mente?', en: 'Have a project in mind?' },
    subtitle: {
      pt: 'Me conta o que você precisa — seja um sistema, um app ou uma integração. Respondo rápido e sem enrolação.',
      en: "Tell me what you need — a system, an app, or an integration. I'll respond quickly and without delay.",
    },
    whatsapp: { pt: 'Falar no WhatsApp', en: 'Chat on WhatsApp' },
    email: { pt: 'Enviar e-mail', en: 'Send email' },
    responseTime: {
      pt: 'Tempo médio de resposta: menos de 24h',
      en: 'Average response time: less than 24h',
    },
  },
  footer: {
    tagline: {
      pt: 'Desenvolvimento de software sob encomenda',
      en: 'Custom software development',
    },
  },
}

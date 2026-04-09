export type Lang = "pt" | "en";

type Bilingual = { pt: string; en: string };

export function tr(entry: Bilingual, lang: Lang): string {
  return entry[lang];
}

export const translations = {
  header: {
    stack: { pt: "Stack", en: "Stack" },
    experiencia: { pt: "Experiência", en: "Experience" },
    projetos: { pt: "Projetos", en: "Projects" },
    empresa: { pt: "Atuação", en: "Expertise" },
    contato: { pt: "Contato", en: "Contact" },
    openMenu: { pt: "Abrir menu", en: "Open menu" },
  },
  hero: {
    greeting: { pt: "Olá, eu sou", en: "Hi, I'm" },
    role: {
      pt: "Desenvolvedor Fullstack & Mobile",
      en: "Fullstack & Mobile Developer",
    },
    description: {
      pt: "Transformo ideias em produtos digitais — do backend robusto ao app mobile, com foco em experiência real e resultado para o seu negócio.",
      en: "I turn ideas into digital products — from robust backend to mobile apps, focused on real experience and results for your business.",
    },
    ctaProjects: { pt: "Ver Projetos", en: "View Projects" },
    ctaWhatsapp: { pt: "Falar no WhatsApp", en: "Chat on WhatsApp" },
  },
  stack: {
    label: { pt: "Stack", en: "Stack" },
    title: { pt: "Tecnologias que uso", en: "Technologies I use" },
    subtitle: {
      pt: "Do front ao back, do web ao mobile — uma stack completa.",
      en: "From front to back, from web to mobile — a complete stack.",
    },
    tabs: {
      frontend: { pt: "Front-end", en: "Front-end" },
      backend: { pt: "Back-end", en: "Back-end" },
      mobile: { pt: "Mobile", en: "Mobile" },
      tools: { pt: "Ferramentas", en: "Tools" },
    },
  },
  experience: {
    label: { pt: "Experiência prática", en: "Hands-on experience" },
    title: {
      pt: "Ferramentas e bibliotecas que já usei",
      en: "Tools and libraries I have worked with",
    },
    subtitle: {
      pt: "Além da stack principal, tenho experiência sólida com CI/CD e com ferramentas de qualidade para manter entregas consistentes.",
      en: "Beyond my core stack, I have solid experience with CI/CD and quality tooling to keep deliveries consistent.",
    },
    focus: [
      { pt: "CI/CD em produção", en: "Production CI/CD" },
      {
        pt: "Qualidade com gates automáticos",
        en: "Quality with automated gates",
      },
    ],
    knowledgeLabel: { pt: "Conhecimentos", en: "Knowledge" },
    knowledgeSubtitle: {
      pt: "Tecnologias que conheço e entendo como funcionam, mas ainda não apliquei em projetos reais.",
      en: "Technologies I understand conceptually but have not yet applied in real projects.",
    },
    knowledge: [
      { pt: "Micro-frontends", en: "Micro-frontends" },
      { pt: "Java (básico)", en: "Java (basic)" },
    ],
    groups: [
      {
        label: { pt: "CI/CD & Containers", en: "CI/CD & Containers" },
        items: ["CI/CD Pipelines", "GitHub Actions", "GitLab CI", "Docker"],
      },
      {
        label: { pt: "Qualidade de Código", en: "Code Quality" },
        items: ["ESLint", "Prettier", "Husky", "SonarQube", "Storybook"],
      },
      {
        label: { pt: "State & Arquitetura", en: "State & Architecture" },
        items: ["Zustand", "IoC / DI"],
      },
      {
        label: { pt: "CMS & Conteúdo", en: "CMS & Content" },
        items: ["Sanity"],
      },
      {
        label: { pt: "Cloud & Observabilidade", en: "Cloud & Observability" },
        items: ["Google Firebase", "Datadog"],
      },
      {
        label: { pt: "Linguagens", en: "Languages" },
        items: ["C#"],
      },
    ],
  },
  projects: {
    label: { pt: "Projetos", en: "Projects" },
    title: { pt: "Últimos trabalhos", en: "Recent work" },
    subtitle: {
      pt: "Projetos reais entregues para clientes — do design ao deploy.",
      en: "Real projects delivered for clients — from design to deploy.",
    },
    visitSite: { pt: "Visitar site", en: "Visit site" },
    items: [
      {
        name: "Eye Center Website",
        description: {
          pt: "Clínica oftalmológica precisava de um site que refletisse a identidade visual criada pelo designer dela — pixel a pixel. A equipe ganhou autonomia total via Sanity para atualizar fotos da hero, apresentar os médicos e publicar no blog, sem depender de dev.",
          en: "An ophthalmology clinic needed a site that matched their designer's vision exactly. The team got full autonomy via Sanity to update hero images, showcase their doctors, and publish blog posts — no developer needed.",
        },
        tags: [
          "Next.js",
          "Mobile-First",
          "Equipe via CMS",
          "Hero Dinâmica",
          "WhatsApp API",
        ],
        url: "https://eyecenter.med.br",
        video:
          "https://res.cloudinary.com/dcwosdxvp/video/upload/f_auto,q_auto/eye_center_m6b4md.mp4",
        videoPlayer:
          "https://player.cloudinary.com/embed/?cloud_name=dcwosdxvp&public_id=eye_center_m6b4md",
      },
      {
        name: "R&F Advogados Associados",
        description: {
          pt: "Escritório de advocacia em Manaus que veio com o layout pronto e a necessidade de um blog editorial completo. Construí um CMS no Sanity com suporte a autores, categorias e posts ricos — tudo integrado ao WhatsApp para converter visitas em contatos.",
          en: "A Manaus law firm came with their own layout and needed a full editorial blog. I built a Sanity CMS with authors, categories, and rich posts — all wired to WhatsApp to turn visits into leads.",
        },
        tags: [
          "Next.js",
          "Mobile-First",
          "Blog Editorial",
          "Autores & Categorias",
          "WhatsApp API",
        ],
        url: "https://www.ribeiroefariasadv.com.br/",
        video:
          "https://res.cloudinary.com/dcwosdxvp/video/upload/f_auto,q_auto/rf_adv_g7vlep.mp4",
        videoPlayer:
          "https://player.cloudinary.com/embed/?cloud_name=dcwosdxvp&public_id=rf_adv_g7vlep",
      },
    ],
  },
  empresa: {
    label: { pt: "Atuação", en: "Expertise" },
    title: { pt: "Como eu contribuo", en: "How I contribute" },
    subtitle: {
      pt: "Sou um desenvolvedor focado em produto e entrega. Atuo no ciclo completo: planejamento técnico, implementação, integrações e evolução contínua.",
      en: "I'm a delivery-focused product engineer. I work across the full cycle: technical planning, implementation, integrations, and continuous improvement.",
    },
    services: [
      {
        title: { pt: "Produtos Web", en: "Web Products" },
        description: {
          pt: "Interfaces, painéis e sistemas internos com foco em usabilidade, performance e arquitetura sustentável.",
          en: "Interfaces, dashboards, and internal systems focused on usability, performance, and sustainable architecture.",
        },
      },
      {
        title: { pt: "Apps Mobile", en: "Mobile Apps" },
        description: {
          pt: "Aplicativos iOS e Android com React Native — uma base de código, dois produtos. Do protótipo à publicação nas lojas.",
          en: "iOS and Android apps with React Native — one codebase, two products. From prototype to store publication.",
        },
      },
      {
        title: { pt: "Back-end & Integrações", en: "Back-end & Integrations" },
        description: {
          pt: "APIs robustas e integração com serviços externos para suportar crescimento, automação e confiabilidade.",
          en: "Robust APIs and third-party integrations to support growth, automation, and reliability.",
        },
      },
    ],
  },
  contato: {
    label: { pt: "Contato", en: "Contact" },
    title: { pt: "Vamos conversar?", en: "Let's talk?" },
    subtitle: {
      pt: "Aberto a oportunidades, projetos e trocas de ideia. Escolha como prefere se conectar.",
      en: "Open to opportunities, projects, and conversations. Choose how you prefer to connect.",
    },
    whatsapp: { pt: "WhatsApp", en: "WhatsApp" },
    email: { pt: "E-mail", en: "Email" },
    linkedin: { pt: "LinkedIn", en: "LinkedIn" },
    github: { pt: "GitHub", en: "GitHub" },
  },
  footer: {
    tagline: {
      pt: "Portfólio profissional",
      en: "Professional portfolio",
    },
  },
};

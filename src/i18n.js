import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        projects: "Projects",
        philosophy: "Architecture",
        about: "About",
        contact: "Contact",
      },

      hero: {
        badge: "Open to new opportunities",
        title: "Engineering Scalable",
        titleAccent: "Digital Products",
        subtitle:
          "Full-stack Developer building production-ready systems with strong architectural foundations, focusing on performance, scalability, and long-term maintainability.",
      },

      about: {
        title: "About Me",
        description:
          "I design and build scalable digital systems using modern full-stack technologies. My work emphasizes clean architecture, domain-driven thinking, secure authentication flows, and cloud-ready deployments. I treat software as a long-term product, not just code.",
          resumeBtn: "Download Resume",
      },

      architecture: {
        title: "How I Design",
        subtitle: "Systems & Architecture",
        description:
          "I approach software development as a system design discipline. From domain modeling to deployment pipelines, I prioritize clarity, scalability, and resilience.",

        principles: {
          title: "Core Principles",
          cleanCode:
            "Clear separation of concerns, SOLID principles, and highly readable, testable codebases.",
          scalability:
            "Stateless services, containerized infrastructure, and database modeling prepared for horizontal scaling.",
          integrity:
            "Strong relational modeling with PostgreSQL ensuring transactional consistency and performance.",
          security:
            "JWT authentication, role-based access control, and security practices aligned with OWASP standards.",
        },
      },

      projects: {
        flowly: {
          title: "Flowly — Multi-tenant Project Management SaaS",
          description:
            "Full-stack SaaS platform architected with layered design and multi-tenant data isolation. Features JWT authentication, email verification flows, relational modeling with Prisma, and containerized deployment using Docker.",
        },

        marketplace: {
          title: "Full-stack E-commerce Platform",
          description:
            "Production-oriented e-commerce system featuring authentication, role-based authorization, Stripe payment integration, and structured backend layers using Express and Prisma with PostgreSQL.",
        },

        convit3: {
          title: "Convit3 — Real-time Event Management SaaS",
          description:
            "Scalable event management platform with real-time updates, invitation workflows, and structured backend architecture built with NestJS and Prisma.",
        },

        doctorSchedule: {
          title: "Doctor Schedule — Appointment System",
          description:
            "Medical appointment scheduling platform designed with relational consistency using Drizzle ORM and PostgreSQL, focusing on transactional safety and maintainable architecture.",
        },

        postApp: {
          title: "Post App — Content Platform",
          description:
            "Content management application featuring authentication, pagination, and structured relational persistence using Node.js and Sequelize.",
        },
      },
    },
  },

  pt: {
    translation: {
      nav: {
        projects: "Projetos",
        philosophy: "Arquitetura",
        about: "Sobre",
        contact: "Contato",
      },

      hero: {
        badge: "Aberto a novas oportunidades",
        title: "Engenharia de Produtos",
        titleAccent: "Digitais Escaláveis",
        subtitle:
          "Desenvolvedor Full-stack construindo sistemas prontos para produção com base arquitetural sólida, foco em performance, escalabilidade e manutenibilidade a longo prazo.",
      },

      about: {
        title: "Sobre Mim",
        description:
          "Projeto e desenvolvo sistemas digitais escaláveis utilizando tecnologias full-stack modernas. Meu foco está em arquitetura limpa, modelagem de domínio, autenticação segura e infraestrutura preparada para produção. Encaro software como produto, não apenas código.",
          resumeBtn: "Baixar Currículo",
      },

      architecture: {
        title: "Como eu Projeto",
        subtitle: "Sistemas & Arquitetura",
        description:
          "Trato desenvolvimento como disciplina de design de sistemas. Do modelo de domínio ao pipeline de deploy, priorizo clareza estrutural, escalabilidade e resiliência.",

        principles: {
          title: "Princípios Fundamentais",
          cleanCode:
            "Separação clara de responsabilidades, aplicação de SOLID e código altamente legível e testável.",
          scalability:
            "Serviços stateless, infraestrutura containerizada e modelagem de banco preparada para escalabilidade horizontal.",
          integrity:
            "Modelagem relacional sólida com PostgreSQL garantindo consistência transacional e performance.",
          security:
            "Autenticação via JWT, controle de acesso por papéis e práticas alinhadas aos padrões OWASP.",
        },
      },

      projects: {
        flowly: {
          title: "Flowly — SaaS Multi-tenant de Gestão de Projetos",
          description:
            "Plataforma SaaS full-stack estruturada em camadas com isolamento de dados multi-tenant. Implementa autenticação JWT, verificação por e-mail, modelagem relacional com Prisma e deploy containerizado com Docker.",
        },

        marketplace: {
          title: "Plataforma de E-commerce Full-stack",
          description:
            "Sistema de e-commerce orientado a produção com autenticação, controle de permissões, integração com Stripe e backend estruturado com Express e Prisma utilizando PostgreSQL.",
        },

        convit3: {
          title: "Convit3 — SaaS de Gestão de Eventos em Tempo Real",
          description:
            "Plataforma escalável para gerenciamento de eventos com atualizações em tempo real e backend estruturado utilizando NestJS e Prisma.",
        },

        doctorSchedule: {
          title: "Doctor Schedule — Sistema de Agendamentos",
          description:
            "Plataforma de agendamento médico com modelagem relacional utilizando Drizzle ORM e PostgreSQL, focada em consistência transacional e arquitetura sustentável.",
        },

        postApp: {
          title: "Post App — Plataforma de Conteúdo",
          description:
            "Aplicação de gerenciamento de conteúdo com autenticação, paginação e persistência relacional estruturada utilizando Node.js e Sequelize.",
        },
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    load: "languageOnly",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18n;

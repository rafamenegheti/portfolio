"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Hi, I'm",
    "hero.name": "Rafael Menegheti",
    "hero.title": "Full Stack Developer",
    "hero.description":
      "I create beautiful, functional, and user-centered digital experiences. Passionate about clean code, innovative solutions, and bringing ideas to life.",
    "hero.getInTouch": "Get In Touch",
    "hero.downloadCV": "Download CV",
    "hero.available": "Available for new projects",

    // About Section
    "about.title": "About Me",
    "about.description":
      "I'm a Full Stack Web Developer with 4 years of experience building modern, scalable, and high-performance applications. Skilled in Next.js, React, and Node.js, I specialize in delivering seamless user experiences across the entire development cycle. With a strong foundation in cloud solutions (AWS), automated testing, and clean code practices, I thrive on turning complex challenges into efficient, innovative software solutions.",
    "about.journey": "My Journey",
    "about.journeyText":
      "I started my journey first supporting enterprise systems and later moving into full-stack web development. My curiosity led me to explore both frontend and backend technologies, mastering React, Next.js for dynamic user interfaces, and Node.js, databases for robust backend systems. I love connecting design with functionality, ensuring seamless experiences from server to client.",
    "about.yearsExperience": "Years Experience",
    "about.projectsCompleted": "Projects Completed",
    "about.skillsTitle": "Skills & Technologies",

    // Experience Section
    "experience.title": "Work Experience",
    "experience.description":
      "My professional journey in software development, working with various technologies and teams to deliver impactful solutions.",
    "experience.technologiesUsed": "Technologies Used",
    "experience.present": "Present",
    "experience.remote": "Remote",

    // Job Positions
    "experience.job1.position": "Full Stack Developer",
    "experience.job1.achievements": [
      "Developed a meteorological analysis and monitoring platform.",
      "Implemented interactive dashboards with real-time data visualization, allowing users to track weather metrics and forecasts intuitively.",
      "Led the integration of external APIs for climate data collection, ensuring reliability and scalability in processing large volumes of information.",
      "Performed backend performance optimizations, reducing response time by up to 40% in critical queries.",
      "Collaborated in defining the application architecture, applying Clean Code best practices, SOLID principles, and scalable architecture principles.",
    ],

    "experience.job2.position": "Junior Full Stack Developer",
    "experience.job2.achievements": [
      "Developed a video course consumption platform.",
      "Created responsive user interfaces using React and Next.js, improving user experience and accessibility across devices.",
      "Implemented automated testing with Jest and React Testing Library, ensuring code quality and reducing bugs in production.",
      "Participated in code reviews and sprint planning, contributing to agile development practices and continuous improvement.",
      "Worked with RESTful APIs and database integration, building robust connections between frontend and backend systems.",
    ],

    "experience.job3.position": "IT Support Analyst",
    "experience.job3.achievements": [
      "Provided technical support for Windows and Linux environments, resolving hardware and software issues for enterprise users.",
      "Managed user accounts and permissions in Active Directory, ensuring security and proper access control.",
      "Performed system maintenance and updates, maintaining high availability and security standards.",
      "Documented procedures and created user guides, improving team efficiency and knowledge sharing.",
      "Assisted in network troubleshooting and configuration, supporting stable connectivity for all users.",
    ],

    // Projects Section
    "projects.title": "Featured Projects",
    "projects.description":
      "A showcase of my recent work, featuring web applications, mobile apps, and creative solutions that demonstrate my skills in modern development technologies.",
    "projects.webApps.title": "Fullstack Applications",
    "projects.apis.title": "RESTful APIs Projects",

    // Project Details
    "projects.project1.title": "ig.news",
    "projects.project1.description":
      "ig.news is a subscription-based newsletter application built with Next.js, featuring Stripe payments, user authentication, and content management through Prismic CMS.",

    "projects.project2.title": "dashgo.",
    "projects.project2.description":
      "DashGo is a Next.js admin dashboard application built with Chakra UI that includes user authentication, data visualization charts, and user management functionality.",

    "projects.project3.title": "BEWEAR",
    "projects.project3.description":
      "BEWEAR is a modern e-commerce fashion website built with Next.js 15, featuring responsive design, user authentication, shopping cart functionality, and a complete product catalog for clothing and accessories.",

    "projects.project4.title": "McDonald's Self Attending",
    "projects.project4.description":
      "McDonald's Self Attending is a restaurant ordering platform built with Next.js, featuring multi-restaurant support, shopping cart functionality, order management, and integrated Stripe payments with PostgreSQL database through Prisma ORM.",

    "projects.project5.title": "Angular Marketplace",
    "projects.project5.description":
      "This is a modern, well-structured Angular application following current best practices and using the latest Angular features for a marketplace product management system.",

    "projects.project6.title": "SpaceTraveling",
    "projects.project6.description":
      "SpaceTraveling is a modern blog platform built with Next.js 10, featuring a headless CMS integration with Prismic, static site generation, pagination functionality, and a complete article reading experience with navigation between posts and integrated comments system.",

    // API Projects
    "projects.api1.title": "iCompras",
    "projects.api1.description":
      "A complete e-commerce platform built using microservices architecture to demonstrate modern distributed system patterns. The project showcases how to build scalable, event-driven applications using Spring Boot and Apache Kafka.",

    "projects.api2.title": "Contact Management System",
    "projects.api2.description":
      "This is a robust REST API for contact management built with modern Node.js technologies. The system provides comprehensive CRUD operations for contacts and their associated phone numbers, featuring advanced search capabilities and weather integration.",

    "projects.api3.title": "rentx",
    "projects.api3.description":
      "This is a car rental management system built as a RESTful API. The project handles car registrations, user accounts, and rental operations.",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.description":
      "Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!",
    "contact.sendMessage": "Send a Message",
    "contact.letsConnect": "Let's Connect",
    "contact.followMe": "Follow Me",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.sendButton": "Send Message",
    "contact.sending": "Sending...",
    "contact.namePlaceholder": "Your Name",
    "contact.emailPlaceholder": "your.email@example.com",
    "contact.subjectPlaceholder": "Project Collaboration",
    "contact.messagePlaceholder": "Tell me about your project...",

    // Toast Messages
    "toast.contactInDev":
      "🚧 Contact form is currently in development. This feature will be available soon!",
  },
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    // Hero Section
    "hero.greeting": "Olá, eu sou",
    "hero.name": "Rafael Menegheti",
    "hero.title": "Desenvolvedor Full Stack",
    "hero.description":
      "Eu crio experiências digitais bonitas, funcionais e centradas no usuário. Apaixonado por código limpo, soluções inovadoras e dar vida às ideias.",
    "hero.getInTouch": "Entre em Contato",
    "hero.downloadCV": "Baixar CV",
    "hero.available": "Disponível para novos projetos",

    // About Section
    "about.title": "Sobre Mim",
    "about.description":
      "Sou um Desenvolvedor Web Full Stack com 4 anos de experiência construindo aplicações modernas, escaláveis e de alta performance. Especializado em Next.js, React e Node.js, me especializo em entregar experiências de usuário perfeitas ao longo de todo o ciclo de desenvolvimento. Com uma base sólida em soluções em nuvem (AWS), testes automatizados e práticas de código limpo, prospero transformando desafios complexos em soluções de software eficientes e inovadoras.",
    "about.journey": "Minha Jornada",
    "about.journeyText":
      "Comecei minha jornada na tecnologia primeiro dando suporte a sistemas empresariais e depois migrando para desenvolvimento web full-stack. Minha curiosidade me levou a explorar tecnologias frontend e backend, dominando React, Next.js para interfaces dinâmicas, e Node.js, bancos de dados para sistemas backend robustos. Adoro conectar design com funcionalidade, garantindo experiências perfeitas do servidor ao cliente.",
    "about.yearsExperience": "Anos de Experiência",
    "about.projectsCompleted": "Projetos Concluídos",
    "about.skillsTitle": "Habilidades & Tecnologias",

    // Experience Section
    "experience.title": "Experiência Profissional",
    "experience.description":
      "Minha jornada profissional no desenvolvimento de software, trabalhando com várias tecnologias e equipes para entregar soluções impactantes.",
    "experience.technologiesUsed": "Tecnologias Utilizadas",
    "experience.present": "Atual",
    "experience.remote": "Remoto",

    // Job Positions
    "experience.job1.position": "Desenvolvedor Full Stack",
    "experience.job1.achievements": [
      "Desenvolvi uma plataforma de análise e monitoramento meteorológico.",
      "Implementei dashboards interativos com visualização de dados em tempo real, permitindo aos usuários rastrear métricas climáticas e previsões de forma intuitiva.",
      "Liderei a integração de APIs externas para coleta de dados climáticos, garantindo confiabilidade e escalabilidade no processamento de grandes volumes de informações.",
      "Realizei otimizações de performance no backend, reduzindo o tempo de resposta em até 40% em consultas críticas.",
      "Colaborei na definição da arquitetura da aplicação, aplicando boas práticas de Clean Code, princípios SOLID e princípios de arquitetura escalável.",
    ],

    "experience.job2.position": "Desenvolvedor Full Stack Júnior",
    "experience.job2.achievements": [
      "Desenvolvi uma plataforma de consumo de cursos em vídeo.",
      "Criei interfaces responsivas usando React e Next.js, melhorando a experiência do usuário e acessibilidade em dispositivos diversos.",
      "Implementei testes automatizados com Jest e React Testing Library, garantindo qualidade de código e reduzindo bugs em produção.",
      "Participei de revisões de código e planejamento de sprints, contribuindo para práticas de desenvolvimento ágil e melhoria contínua.",
      "Trabalhei com APIs RESTful e integração de banco de dados, construindo conexões robustas entre sistemas frontend e backend.",
    ],

    "experience.job3.position": "Analista de Suporte de TI",
    "experience.job3.achievements": [
      "Forneci suporte técnico para ambientes Windows e Linux, resolvendo problemas de hardware e software para usuários corporativos.",
      "Gerenciei contas de usuário e permissões no Active Directory, garantindo segurança e controle de acesso adequado.",
      "Realizei manutenção e atualizações de sistemas, mantendo altos padrões de disponibilidade e segurança.",
      "Documentei procedimentos e criei guias de usuário, melhorando a eficiência da equipe e compartilhamento de conhecimento.",
      "Auxiliei na solução de problemas e configuração de rede, apoiando conectividade estável para todos os usuários.",
    ],

    // Projects Section
    "projects.title": "Projetos em Destaque",
    "projects.description":
      "Uma vitrine do meu trabalho recente, apresentando aplicações web, aplicativos móveis e soluções criativas que demonstram minhas habilidades em tecnologias de desenvolvimento modernas.",
    "projects.webApps.title": "Aplicações Fullstack",
    "projects.apis.title": "Projetos de RESTful APIs",

    // Project Details
    "projects.project1.title": "ig.news",
    "projects.project1.description":
      "ig.news é uma aplicação de newsletter baseada em assinatura construída com Next.js, incluindo pagamentos Stripe, autenticação de usuários e gerenciamento de conteúdo através do Prismic CMS.",

    "projects.project2.title": "dashgo.",
    "projects.project2.description":
      "DashGo é uma aplicação de dashboard administrativo Next.js construída com Chakra UI que inclui autenticação de usuários, gráficos de visualização de dados e funcionalidade de gerenciamento de usuários.",

    "projects.project3.title": "BEWEAR",
    "projects.project3.description":
      "BEWEAR é um site moderno de e-commerce de moda construído com Next.js 15, apresentando design responsivo, autenticação de usuários, funcionalidade de carrinho de compras e um catálogo completo de produtos para roupas e acessórios.",

    "projects.project4.title": "McDonald's Self Attending",
    "projects.project4.description":
      "McDonald's Self Attending é uma plataforma de pedidos para restaurantes construída com Next.js, oferecendo suporte multi-restaurante, funcionalidade de carrinho de compras, gerenciamento de pedidos e pagamentos integrados via Stripe com banco de dados PostgreSQL através do Prisma ORM.",

    "projects.project5.title": "Angular Marketplace",
    "projects.project5.description":
      "Esta é uma aplicação Angular moderna e bem estruturada seguindo as melhores práticas atuais e usando os recursos mais recentes do Angular para um sistema de gerenciamento de produtos de marketplace.",

    "projects.project6.title": "SpaceTraveling",
    "projects.project6.description":
      "SpaceTraveling é uma plataforma de blog moderna construída com Next.js 10, apresentando integração com CMS headless Prismic, geração de sites estáticos, funcionalidade de paginação e uma experiência completa de leitura de artigos com navegação entre posts e sistema de comentários integrado.",

    // API Projects
    "projects.api1.title": "iCompras",
    "projects.api1.description":
      "Uma plataforma completa de e-commerce construída usando arquitetura de microserviços para demonstrar padrões modernos de sistemas distribuídos. O projeto demonstra como construir aplicações escaláveis e orientadas a eventos usando Spring Boot e Apache Kafka.",

    "projects.api2.title": "Sistema de Gerenciamento de Contatos",
    "projects.api2.description":
      "Esta é uma API REST robusta para gerenciamento de contatos construída com tecnologias modernas Node.js. O sistema fornece operações CRUD abrangentes para contatos e seus números de telefone associados, apresentando capacidades avançadas de busca e integração com dados meteorológicos.",

    "projects.api3.title": "rentx",
    "projects.api3.description":
      "Este é um sistema de gerenciamento de aluguel de carros construído como uma API RESTful. O projeto gerencia registros de carros, contas de usuários e operações de aluguel.",

    // Contact Section
    "contact.title": "Entre em Contato",
    "contact.description":
      "Tem um projeto em mente ou quer colaborar? Adoraria ouvir de você. Vamos criar algo incrível juntos!",
    "contact.sendMessage": "Enviar Mensagem",
    "contact.letsConnect": "Vamos nos Conectar",
    "contact.followMe": "Me Siga",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.subject": "Assunto",
    "contact.message": "Mensagem",
    "contact.sendButton": "Enviar Mensagem",
    "contact.sending": "Enviando...",
    "contact.namePlaceholder": "Seu Nome",
    "contact.emailPlaceholder": "seu.email@exemplo.com",
    "contact.subjectPlaceholder": "Colaboração em Projeto",
    "contact.messagePlaceholder": "Me conte sobre seu projeto...",

    // Toast Messages
    "toast.contactInDev":
      "🚧 O formulário de contato está em desenvolvimento. Este recurso estará disponível em breve!",
  },
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "pt")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "pt" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const t = (key: string): string => {
    const result =
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ];
    return typeof result === "string" ? result : key;
  };

  const tArray = (key: string): string[] => {
    const result =
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ];
    return Array.isArray(result) ? result : [key];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
};


import i18n from "i18next";

export const resources = {
  en: {
    translation: {
      home: "Home",
      projects: "Projects",
      experience: "Experience",
      feedbacks: "Feedbacks",
      contactTitle: "Contact",
      texthome: "I write code and create solutions that connect people and ",
      shome:"ideas!",
      subtexthome: "I'm Kauan Alves Santana, a developer transitioning to fullstack, focused on creating complete applications for web and mobile. I am always learning and applying technologies to build efficient and functional projects.",
      bhome1: "Contact me",
      bhome2: "Download CV",
      //TECHNOLOGIES
      technologies: "Experience with:",
      //PROJECTS
      tprojects: "Projects",
      subtitle: "click to view the project",
      t1: 'Link Organizer',
      t2: "Devfood",
      t3: "Password Generator",
      t4: "Nearby",
      github: 'See more on my github',
      //EXPERIENCE
      exptitle: "EXPERIENCE",
      emp1: "Responsible for IT in the educational area",
      emp1desc: "I worked on maintaining and improving an academic platform, collaborating in the creation of interfaces with HTML and CSS, and offering technical support to users. I also led initiatives to train new team members and propose innovative ideas that kept the system up to date.",
      emp1period: "Nov 2023 – Present",
      emp2: "Participant in the CESAR School Innovation Marathon",
      emp2desc: "I contributed to the development of creative solutions as a team, solving complex problems in the short term. This experience improved my teamwork and problem-solving skills.",
      emp2period: "Nov 2024",
      emp3: "Front-End Developer – Law Firm",
      emp3desc: "I developed the complete website for a law firm, from gathering requirements to creating prototypes in Framer. The project included the implementation of responsive pages using HTML, CSS and JavaScript, ensuring a modern design and optimized navigation for the client.",
      emp3period: "Out 2024 – Dez 2024",
      // CONTACT
      contactSubtitle: "Let's work together?",
      contactDescription: "I am a developer in constant evolution, focused on creating solutions that combine design, functionality and innovation. I'm available to collaborate on web and mobile projects, bringing my passion for technology to each line of code.I am a developer in constant evolution, focused on creating solutions that combine design, functionality and innovation. I'm available to collaborate on web and mobile projects, bringing my passion for technology to each line of code.",
      // FEEDBACKS
      cargo1: "President and CTO of SIZAC",
      cargo2: "",
      cargo3: "",
      cargo4: "",
      cargo5: "",
      cargo6: "",
      cargo7: "",
      cargo8: "",
      cargo9: "",
      description1: "Kauan Alves is a very focused, dedicated and talented programmer, with excellent technical skills that he acquired through his work at SIZAC and the Systems Analysis and Development course. He stands out for his leadership and ability to solve problems quickly and intelligently when proposing new solutions. His passion and dedication impact the projects he works on, making him an integral part of the team's success.",
      description2: "",
      description3: "",
      description4: "",
      description5: "",
      description6: "",
      description7: "",
      description8: "",
      description9: "",
    },
  },
  pt: {
    translation: {
      home: "Início",
      projects: "Projetos",
      experience: "Experiência",
      feedbacks: "Feedbacks",
      contactTitle: "Contato",
      texthome: "Eu faço código e crio soluções que conectam pessoas e ",
      shome:"ideias!",
      subtexthome: "Sou Kauan Alves Santana, desenvolvedor em transição para fullstack, focado em criar aplicações completas para web e mobile. Estou sempre aprendendo e aplicando tecnologias para construir projetos eficientes e funcionais.",
      bhome1: "Entre em contato",
      bhome2: "Baixar currículo",
      //TECHNOLOGIES
      technologies: "Experiência com:",
      //PROJECTS
      tprojects: "Projetos",
      subtitle: "clique para Visualizar o projeto",
      t1: 'Organizador de Links',
      t2: "Devfood",
      t3: "Gerador de Senhas",
      t4: "Nearby",
      github: 'Veja mais no meu github',
      //EXPERIENCE
      exptitle: "EXPERIÊNCIA ",
      emp1: "Responsável pelo TI na área educacional",
      emp1desc: "Atuei na manutenção e aprimoramento de uma plataforma acadêmica, colaborando na criação de interfaces com HTML e CSS, e oferecendo suporte técnico aos usuários. Também liderei iniciativas para capacitar novos membros da equipe e propor ideias inovadoras que mantivessem o sistema atualizado.",
      emp1period: "Nov 2023 – Presente",
      emp2: "Participante da Maratona de Inovação CESAR School",
      emp2desc: "Contribuí para o desenvolvimento de soluções criativas em equipe, resolvendo problemas complexos em curto prazo. Essa experiência aprimorou minhas habilidades de trabalho em equipe e resolução de problemas.",
      emp2period: "Nov 2024",
      emp3: "Desenvolvedor Front-End – Escritório de Advocacia",
      emp3desc: "Desenvolvi o site completo para um escritório de advocacia, desde a coleta de requisitos até a criação de protótipos no Framer. O projeto incluiu a implementação de páginas responsivas utilizando HTML, CSS e JavaScript, garantindo um design moderno e uma navegação otimizada para o cliente.",
      emp3period: "Out 2024 – Dez 2024",
      // CONTACT
      contactSubtitle: "Vamos trabalhar juntos?",
      contactDescriptio: "Sou um desenvolvedor em constante evolução, focado em criar soluções que unem design, funcionalidade e inovação. Estou disponível para colaborar em projetos web e mobile, trazendo minha paixão por tecnologia para cada linha de código.",
      // FEEDBACKS
      cargo1: "Presidente e CTO do SIZAC",
      cargo2: "",
      cargo3: "",
      cargo4: "",
      cargo5: "",
      cargo6: "",
      cargo7: "",
      cargo8: "",
      cargo9: "",
      description1: "Kauan Alves é um programador muito focado, dedicado e talentoso, com excelentes habilidades técnicas que adquiriu com seu trabalho no SIZAC e no curso Análise e Desenvolvimento de Sistemas. Destaca-se pela liderança e capacidade de resolver problemas de forma rápida e inteligente na hora de propor novas soluções. Sua paixão e dedicação impactam os projetos em que trabalha, tornando-o parte integrante do sucesso da equipe.",
      description2: "",
      description3: "",
      description4: "",
      description5: "",
      description6: "",
      description7: "",
      description8: "",
      description9: "",
    },
  },
};

i18n.init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});


export default i18n;

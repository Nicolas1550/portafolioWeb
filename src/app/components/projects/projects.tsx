"use client";
import React from "react";
import { ProjectsContainer, ProjectCard, ProjectImage, ProjectInfo, ProjectTitle, ProjectDescription, ProjectLinks } from "./projectsStyles";
import { FaExternalLinkAlt, FaGithub, FaPlay } from "react-icons/fa";

const projectsFullStack = [
  {
    title: "Peluquería The Best - Plataforma E-commerce",
    description: "Plataforma Full Stack para la gestión de salones de belleza con un sistema de e-commerce integrado. Incluye pagos con Mercado Pago, administración de empleados y ventas en tiempo real con Websockets. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Next.js, React, Redux Toolkit, MySQL, Tailwind CSS, Mercado Pago",
    image: "peluqueria.webp",
    link: "https://peluqueria-the-best.vercel.app/",
    frontendGithub: "https://github.com/Nicolas1550/PeluqueriaTheBest",
    backendGithub: "https://github.com/Nicolas1550/backendIAEcommerce",
    demoVideo: "https://www.linkedin.com/feed/update/urn:li:activity:7238672562367414273/",
  },
  {
    title: "MakeUp - Plataforma de Belleza",
    description: "Plataforma full stack para el sector belleza con login seguro, panel administrativo y mensajería automatizada. Diseño responsive con Tailwind CSS. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Next.js, Node.js, Express.js, MySQL, React, Tailwind CSS",
    image: "makeup.webp",
    link: "https://make-up2-0.vercel.app/",
    frontendGithub: "https://github.com/Nicolas1550/makeUp2.0",
    backendGithub: "https://github.com/Nicolas1550/makeUpBackend2.0",
    demoVideo: "https://www.linkedin.com/feed/update/urn:li:activity:7245273655893520386/",
  },

  {
    title: "ChicksX - Plataforma Digital",
    description: "Participación como E2E Engineer y Product Engineer en una plataforma de alto tráfico. Diseñé y mantuve pruebas automatizadas para flujos web críticos (compra/venta, medios de pago), reduciendo regresiones y mejorando la estabilidad de los releases. Además, implementé nuevas páginas, cards, carruseles y skeletons, ajustando la UI sobre React/Aurelia para ofrecer una experiencia más fluida y consistente. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Cypress (E2E), React/Aurelia (según módulo), .NET APIs",
    image: "chicksx.png",
    link: "https://chicksx.com/",
    frontendGithub: null,
    backendGithub: null,
    demoVideo: null,
  },
  {
    title: "ChicksGold - Sitio y Secciones",
    description: "Rol de Product Engineer enfocado en la evolución del sitio principal y sus secciones clave. Implementé nuevos sitios y páginas internas, componentes reutilizables (cards, secciones informativas) y trabajé en el footer, incluyendo su skeleton y la lógica que consume recursos externos para mostrar información dinámica. También colaboré en mejoras de performance y UX para optimizar tiempos de carga y percepción de calidad. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "React, Next.js, SEO/Performance, Componentización",
    image: "chicksgold.png",
    link: "https://chicksgold.com/",
    frontendGithub: null,
    backendGithub: null,
    demoVideo: null,
  },
];

const projects = [
  {
    title: "Ø UnderTango Club – Plataforma & Comunidad",
    description: "Portal principal de Ø UnderTango Club donde lidero la parte tecnológica desde el rol de Project Manager, QA y Tech Lead. Definí objetivos de producto, stack tecnológico y criterios de calidad, organizando dailies con los desarrolladores, priorizando tareas y alineando el trabajo al presupuesto y a las metas de la empresa. Superviso entregas, experiencia de usuario y calidad del producto de punta a punta. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Project Management, Tech Lead, QA, Roadmap de producto",
    image: "tangoWeb.png",
    link: "https://undertangoclub.com",
    github: null,
  },
  {
    title: "FDI UnderTango – Portal Institucional",
    description: "Sitio institucional de FDI UnderTango donde trabajo como QA y Project Manager, asegurando que la comunicación y la imagen digital estén alineadas con la estrategia de la organización. Coordino al equipo de desarrollo, defino prioridades, realizo seguimiento diario de tareas y verifico calidad funcional y visual antes de cada entrega, cuidando alcances, tiempos y presupuesto. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Project Management, Definición de stack, QA, Coordinación técnica",
    image: "tangoFondo.png",
    link: "https://fdiundertango.com",
    github: null,
  },

  {
    title: "La BiciPosta - Plataforma para Ciclistas",
    description: "Landing page moderna para una empresa de ciclismo, diseñada para transmitir marca, dinamismo y claridad en la oferta de servicios. Implementé una UI con animaciones fluidas, secciones destacadas y carruseles, cuidando la estructura responsive y la experiencia en dispositivos móviles. El foco estuvo en presentación visual, navegabilidad y preparación para futuras funcionalidades. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Next.js, React, Framer Motion, Swiper.js",
    image: "bici.webp",
    link: "https://la-bici-posta.vercel.app/",
    github: "https://github.com/Nicolas1550/LaBiciPosta",
  },
  {
    title: "CEA - Plataforma Educativa",
    description: "Landing/plataforma educativa orientada a la gestión de contenido y acceso de estudiantes. Implementé autenticación, manejo de estados y una UI adaptable, cuidando la experiencia en distintos dispositivos. El objetivo fue ofrecer una base sólida para escalar funcionalidades educativas y comunicación institucional. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "React Native, Firebase, Redux",
    image: "ciencia.webp",
    link: "https://cea.vercel.app/",
    github: "https://github.com/user/project3",
  },

  {
    title: "Fundamentals – CEO de tu Vida",
    description: "Rol de Product Engineer en una landing orientada a la captación de alumnos para un programa de transformación personal. Ordené la estructura de contenido, jerarquía visual y llamados a la acción para mejorar la conversión, cuidando tiempos de carga y SEO técnico. La página está pensada para explicar con claridad la propuesta y facilitar el contacto. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Next.js/React, Product Engineering, Optimización de contenido, SEO",
    image: "fundamentals.png",
    link: "https://www.ceodetuvida.com/fundamentals",
    github: null,
  },
  {
    title: "CEO Training Mentorship",
    description: "Landing dinámica para un programa de mentoría premium, donde también actué como Product Engineer. Trabajé la estructura de secciones, el storytelling y los elementos visuales para transmitir autoridad y confianza, optimizando la velocidad percibida y la preparación para SEO. El objetivo fue combinar diseño, claridad y performance en una sola experiencia. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Next.js, Product Engineering, Render prefetch, SEO",
    image: "ceo-training.png",
    link: "https://ceotrainingmentorship.vercel.app/",
    github: null,
  },
  {
    title: "Canal del Congreso – Portal Oficial del Congreso de México",
    description: "Trabajo como Product Engineer en el portal oficial de difusión del Congreso de la Unión de México (Cámara de Diputados y Senadores). Colaboré en la definición de estructura de contenido, navegación y componentes reutilizables, cuidando accesibilidad, performance y cumplimiento de lineamientos institucionales. El enfoque estuvo en hacer la información legislativa más clara, ordenada y fácil de consultar para la ciudadanía. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Next.js, Product Engineering, Accesibilidad, Performance",
    image: "congreso.png",
    link: "https://dev2025.canaldelcongreso.gob.mx/",
    github: null,
  },
  {
    title: "Equilibrio AI",
    description: "Implementación full stack con foco en escalabilidad, arquitectura limpia y medición de resultados. Desarrollé el frontend en Next.js y el backend con FastAPI, definiendo endpoints claros, manejo de estados y flujos de datos seguros para funcionalidades ligadas a IA. También participé en la priorización de features junto a diseño y producto, midiendo impacto y performance. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Next.js, FastAPI, Arquitectura limpia, Optimización de performance",
    image: "equilibrio.png",
    link: "https://equilibrio-ai.com",
    github: null,
  },
  {
    title: "Botic Partners",
    description: "Desarrollo y mantenimiento del sitio corporativo utilizando Next.js integrado a Payload CMS, con un enfoque fuerte en escalabilidad y trabajo en equipo. Modelé colecciones de contenido, creé componentes reutilizables y flujos para que el equipo pueda gestionar páginas y secciones sin depender de desarrollo. Además, trabajé en SEO técnico, mejora de performance y buenas prácticas de colaboración con diseño y stakeholders. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Next.js, Payload CMS, SEO, Mejora de performance, Trabajo en equipo",
    image: "boticpartners.png",
    link: "https://boticpartners.com",
    github: null,
  },
  {
    title: "Capacitación Bursátil – Landing Educativa",
    description: "Landing page creada en Wix para ofrecer formación bursátil, enfocada en captar alumnos interesados en inversiones. Trabajé la estructura de secciones, el diseño y el copy persuasivo para transmitir claridad, confianza profesional y guiar al usuario hacia el contacto/inscripción. Incluye formularios de contacto, bloques de contenido educativo y llamados a la acción claros. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Wix, Diseño orientado a conversión, Copywriting, UX",
    image: "capacitacionbursatil.png",
    link: "https://lnicolas62.wixsite.com/capacitacionbursatil",
    github: null,
  },
];

const Projects: React.FC = () => {
  return (
    <ProjectsContainer id="projects">
      {projectsFullStack.map((project, index) => (
        <ProjectCard key={`fs-${index}`}>
          <ProjectImage src={project.image} alt={project.title} />
          <ProjectInfo>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLinks>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Ver Proyecto
                </a>
              )}
              {project.frontendGithub && (
                <a href={project.frontendGithub} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Frontend en GitHub
                </a>
              )}
              {project.backendGithub && (
                <a href={project.backendGithub} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Backend en GitHub
                </a>
              )}
              {project.demoVideo && (
                <a href={project.demoVideo} target="_blank" rel="noopener noreferrer">
                  <FaPlay /> Demo en Video
                </a>
              )}
            </ProjectLinks>
          </ProjectInfo>
        </ProjectCard>
      ))}

      {projects.map((project, index) => (
        <ProjectCard key={`p-${index}`}>
          <ProjectImage src={project.image} alt={project.title} />
          <ProjectInfo>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLinks>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Ver Proyecto
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Código en GitHub
                </a>
              )}
            </ProjectLinks>
          </ProjectInfo>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;

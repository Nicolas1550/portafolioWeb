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
    description: "Colaboración en producto y calidad (E2E) para flujos web críticos. Implementación/ajustes de UI y pruebas automatizadas para releases confiables. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Cypress (E2E), React/Aurelia (según módulo), .NET APIs",
    image: "chicksx.png",
    link: "https://chicksx.com/",
    frontendGithub: null,
    backendGithub: null,
    demoVideo: null,
  },
  {
    title: "ChicksGold - Sitio y Secciones",
    description: "Desarrollo de nuevas secciones, componentes reutilizables y mejoras de performance/UX (skeletons, SEO). Si querés más detalles técnicos, consultame en la entrevista.",
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
    title: "La BiciPosta - Plataforma para Ciclistas",
    description: "Aplicación web para ciclistas con UI moderna y animaciones fluidas. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Next.js, React, Framer Motion, Swiper.js",
    image: "bici.webp",
    link: "https://la-bici-posta.vercel.app/",
    github: "https://github.com/Nicolas1550/LaBiciPosta",
  },
  {
    title: "CEA - Plataforma Educativa",
    description: "App para gestión de contenido educativo con autenticación y diseño adaptable. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "React Native, Firebase, Redux",
    image: "ciencia.webp",
    link: "https://cea.vercel.app/",
    github: "https://github.com/user/project3",
  },

  // ───────── NUEVOS (Webs públicas) ─────────
  {
    title: "Fundamentals – CEO de tu Vida",
    description: "Página informativa con enfoque en claridad de contenidos y conversión. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Next.js/React, Optimización de contenido",
    image: "fundamentals.png",
    link: "https://www.ceodetuvida.com/fundamentals",
    github: null,
  },
  {
    title: "CEO Training Mentorship",
    description: "Landing dinámica para programa de mentoría, pensada para velocidad percibida y SEO. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Next.js, Render prefetch, SEO",
    image: "ceo-training.png",
    link: "https://ceotrainingmentorship.vercel.app/",
    github: null,
  },
  {
    title: "Canal del Congreso (Dev 2025)",
    description: "Sitio institucional en entorno de desarrollo con foco en estructura, accesibilidad y performance. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Next.js, Buenas prácticas de accesibilidad y performance",
    image: "congreso.png",
    link: "https://dev2025.canaldelcongreso.gob.mx/",
    github: null,
  },
  {
    title: "Equilibrio AI",
    description: "Implementación full stack con foco en escalabilidad y arquitectura limpia. Frontend en Next.js y backend expuesto con APIs rápidas y seguras (FastAPI). Trabajo conjunto con diseño/producto para lanzar features modernas y medir performance. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Next.js, FastAPI, Arquitectura limpia, Optimización de performance",
    image: "equilibrio.png",
    link: "https://equilibrio-ai.com",
    github: null,
  },
  {
    title: "Botic Partners",
    description: "Desarrollo y mantenimiento de sitio con Next.js integrado a Payload CMS. Creación de interfaces escalables, flujos de contenido, y optimización SEO/UX. Nuevas funcionalidades, mejoras de rendimiento y buenas prácticas de trabajo colaborativo. Si querés más detalles técnicos, consultame en la entrevista.",
    technologies: "Next.js, Payload CMS, SEO, Mejora de performance",
    image: "boticpartners.png",
    link: "https://boticpartners.com",
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

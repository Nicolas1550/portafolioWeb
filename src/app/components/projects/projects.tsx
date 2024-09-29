"use client";
import React from "react";
import {
  ProjectsContainer,
  ProjectCard,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectLinks,
} from "./projectsStyles";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectsFullStack = [
  {
    title: "Peluquería The Best - Plataforma E-commerce",
    description: "Plataforma Full Stack para la gestión de salones de belleza con un sistema de e-commerce integrado. Incluye pagos con Mercado Pago, administración de empleados y ventas en tiempo real con Websockets.",
    technologies: "Next.js, React, Redux Toolkit, MySQL, Tailwind CSS, Mercado Pago",
    image: "peluqueria.webp",
    link: "https://peluqueria-the-best.vercel.app/",
    frontendGithub: "https://github.com/Nicolas1550/PeluqueriaTheBest",
    backendGithub: "https://github.com/Nicolas1550/backendIAEcommerce",
  },
  {
    title: "MakeUp - Plataforma de Belleza",
    description: "Desarrollo de una plataforma full stack orientada al sector de belleza con login seguro, administración de productos y ventas. Implementación de mensajería automatizada y diseño responsivo con Tailwind CSS.",
    technologies: "Next.js, Node.js, Express.js, MySQL, React, Tailwind CSS",
    image: "makeup.webp",
    link: "https://make-up2-0.vercel.app/",
    frontendGithub: "https://github.com/Nicolas1550/makeUp2.0",
    backendGithub: "https://github.com/Nicolas1550/makeUpBackend2.0",
  },
];


const projects = [
  {
    title: "La BiciPosta - Plataforma para Ciclistas",
    description: "Aplicación web optimizada para ciclistas que ofrece servicios y funcionalidades interactivas. Desarrollada con tecnologías modernas como Next.js y Framer Motion para animaciones fluidas.",
    technologies: "Next.js, React, Framer Motion, Swiper.js",
    image: "bici.webp",
    link: "https://la-bici-posta.vercel.app/",
    github: "https://github.com/Nicolas1550/LaBiciPosta",
  },
  {
    title: "CEA - Plataforma Educativa",
    description: "Desarrollo de una aplicación móvil para la gestión de contenido educativo. Incluye autenticación segura y un diseño adaptable para diferentes dispositivos.",
    technologies: "React Native, Firebase, Redux",
    image: "ciencia.webp",
    link: "https://cea.vercel.app/",
    github: "https://github.com/user/project3",
  },
];

const Projects: React.FC = () => {
  return (
    <ProjectsContainer id="projects">
      {" "}
      {/* Asignamos el id aquí */}
      {projectsFullStack.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectImage src={project.image} alt={project.title} />
          <ProjectInfo>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLinks>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Ver Proyecto
              </a>
              <a
                href={project.frontendGithub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> Frontend en GitHub
              </a>
              <a
                href={project.backendGithub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> Backend en GitHub
              </a>
            </ProjectLinks>
          </ProjectInfo>
        </ProjectCard>
      ))}
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectImage src={project.image} alt={project.title} />
          <ProjectInfo>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectLinks>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Ver Proyecto
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> Código en GitHub
              </a>
            </ProjectLinks>
          </ProjectInfo>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;

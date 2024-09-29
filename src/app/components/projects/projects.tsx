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
    title: "Proyecto Full Stack 1",
    description: "Este es un proyecto Full Stack basado en React y Node.js.",
    image: "peluqueria.png",
    link: "https://peluqueria-the-best.vercel.app/",
    frontendGithub: "https://github.com/Nicolas1550/PeluqueriaTheBest",
    backendGithub: "https://github.com/Nicolas1550/backendIAEcommerce",
  },
  {
    title: "Proyecto Full Stack 2",
    description: "Este es un proyecto Full Stack con GraphQL y MongoDB.",
    image: "makeup.png",
    link: "https://make-up2-0.vercel.app/",
    frontendGithub: "https://github.com/Nicolas1550/makeUp2.0",
    backendGithub: "https://github.com/Nicolas1550/makeUpBackend2.0",
  },
];

const projects = [
  {
    title: "Proyecto 4",
    description: "Otra aplicación móvil creada con React Native.",
    image: "bici.png",
    link: "https://la-bici-posta.vercel.app/",
    github: "https://github.com/user/project4",
  },
  {
    title: "Proyecto 3",
    description: "Es una aplicación móvil creada con React Native.",
    image: "ciencia.png",
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

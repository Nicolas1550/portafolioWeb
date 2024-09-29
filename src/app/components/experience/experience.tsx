"use client";
import React from "react";
import {
  ExperienceContainer,
  TimelineContainer, 
  ExperienceCard,
  JobTitle,
  CompanyName,
  JobDuration,
  JobDescription,
} from "./experienceStyles";
import { FaBriefcase, FaCalendarAlt, FaInfoCircle } from "react-icons/fa"; 

const experiences = [
  {
    jobTitle: "Tutor de Desarrollo Web y IA",
    company: "Coderhouse",
    duration: "Mayo 2022 - Presente",
    description:
      "Guié a estudiantes en el aprendizaje de tecnologías como JavaScript, Angular, React JS, y fundamentos de inteligencia artificial. Diseñé y entregué cursos interactivos, además de brindar mentoría en proyectos de IA y generación de prompts.",
  },
  {
    jobTitle: "Full Stack Developer",
    company: "QuAI Labs",
    duration: "Julio 2024 - Septiembre 2024",
    description:
      "Desarrollé aplicaciones web completas con React y Tailwind CSS en el frontend, y Node.js con MySQL en el backend. Implementé APIs, autenticación y trabajé en la optimización del rendimiento de las aplicaciones.",
  },
  {
    jobTitle: "Desarrollador Full Stack",
    company: "Proyecto Independiente 'Salon Unisex'",
    duration: "Julio 2024 - Septiembre 2024",
    description:
      "Desarrollé una plataforma para la gestión de salones de belleza con e-commerce integrado, implementando funcionalidades como panel de administración, pagos con Mercado Pago, y gestión de empleados.",
  },
  {
    jobTitle: "Desarrollador Full Stack",
    company: "Makeup - Proyecto Independiente",
    duration: "Octubre 2023 - Enero 2024",
    description:
      "Lideré el desarrollo de 'Makeup', una plataforma de e-commerce en el sector de belleza. Desarrollé el frontend con React y Tailwind CSS, mientras que el backend fue implementado con Node.js y MySQL, utilizando tecnologías como JWT, Nodemailer y Websockets.",
  },
  {
    jobTitle: "Frontend Web Developer",
    company: "Ciencia Educa Argentina",
    duration: "Mayo 2022 - Mayo 2023",
    description:
      "Desarrollé aplicaciones frontend para la plataforma educativa, utilizando tecnologías como React, Next.js y Tailwind CSS, mejorando la experiencia del usuario y la accesibilidad del contenido educativo.",
  },
];

const Experience: React.FC = () => {
  return (
    <ExperienceContainer id="experience">
      <h2>Experiencia</h2>
      <TimelineContainer>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} index={index}>
            <JobTitle>
              <FaBriefcase /> {experience.jobTitle}
            </JobTitle>
            <CompanyName>
              <FaBriefcase /> {experience.company}
            </CompanyName>
            <JobDuration>
              <FaCalendarAlt /> {experience.duration}
            </JobDuration>
            <JobDescription>
              <FaInfoCircle /> {experience.description}
            </JobDescription>
          </ExperienceCard>
        ))}
      </TimelineContainer>
    </ExperienceContainer>
  );
};

export default Experience;

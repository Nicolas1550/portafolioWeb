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
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaFileAlt } from "react-icons/fa";

const experiences = [
  {
    jobTitle: "E2E",
    company: "ChicksX",
    duration: "Abril 2025 - Octubre 2025",
    description:
      "Responsable de diseñar, desarrollar y ejecutar pruebas automatizadas E2E con Cypress. Trabajo de forma colaborativa con equipos de desarrollo y QA, garantizando la calidad y confiabilidad en cada entrega de producto.",
  },

  {
    jobTitle: "Freelance Full Stack / Frontend",
    company:
      "Clientes: Fundamentals (CEO de tu Vida), CEO Training Mentorship, Canal del Congreso",
    duration: "Diciembre 2024 - Octubre 2025",
    description:
      "Diseño y desarrollo de landings y secciones enfocadas en conversión, accesibilidad y performance (LCP/CLS). Ajustes responsive, optimización SEO técnica y mejoras de UX. Si querés más detalles técnicos, consultame en la entrevista.",
  },

  {
    jobTitle: "Product Engineer",
    company: "Chicks Gold Inc.",
    duration: "Noviembre 2024 - Octubre 2025",
    description:
      "Como Full Stack Product Engineer, soy responsable del desarrollo y mantenimiento integral de productos, garantizando rendimiento y escalabilidad. Implemento y gestiono funcionalidades en frontend y backend con Aurelia y .NET, diseñando y administrando bases de datos para optimizar servicios de cadetería y logística.",
  },

  {
    jobTitle: "Full Stack Developer",
    company: "QuAI Labs",
    duration: "Julio 2024 - Septiembre 2024",
    description:
      "Desarrollé aplicaciones web completas con React y Tailwind CSS en el frontend, y Node.js con MySQL en el backend. Implementé APIs, autenticación y optimicé el rendimiento de las aplicaciones.",
  },
  {
    jobTitle: "Desarrollador Full Stack",
    company: "Proyecto Independiente 'Salon Unisex'",
    duration: "Julio 2024 - Septiembre 2024",
    description:
      "Creé una plataforma de gestión para salones de belleza con e-commerce integrado. Implementé funcionalidades de panel de administración, pagos a través de Mercado Pago y gestión de empleados.",
  },
  {
    jobTitle: "Desarrollador Full Stack",
    company: "Makeup - Proyecto Independiente",
    duration: "Octubre 2023 - Enero 2024",
    description:
      "Encabecé el desarrollo de ‘Makeup’, una plataforma e-commerce enfocada en el sector belleza. Implementé React y Tailwind CSS en el frontend, y Node.js con MySQL en el backend, utilizando JWT, Nodemailer y WebSockets.",
  },
  {
    jobTitle: "Tutor de Desarrollo Web y IA",
    company: "Coderhouse",
    duration: "Mayo 2022 - Junio 2024",
    description:
      "Dirijo el aprendizaje de tecnologías como JavaScript, Angular y React JS, además de fundamentos de Inteligencia Artificial. Diseño cursos interactivos y brindo mentoría en proyectos de IA y generación de prompts.",
  },
  {
    jobTitle: "Tutor de Desarrollo Web y IA",
    company: "Coderhouse",
    duration: "Mayo 2022 - Junio 2024",
    description:
      "Guío a los estudiantes en la creación de proyectos con JavaScript, React y Angular, fomentando la innovación en la integración de IA. Acompaño en la resolución de retos y en la generación de prompts efectivos.",
  },
  {
    jobTitle: "Frontend Web Developer",
    company: "Ciencia Educa Argentina",
    duration: "Mayo 2022 - Mayo 2023",
    description:
      "Implementé aplicaciones frontend para la plataforma educativa utilizando React, Next.js y Tailwind CSS, mejorando la experiencia de usuario y la accesibilidad de los contenidos.",
  },
];

const Experience: React.FC = () => {
  return (
    <ExperienceContainer id="experience">
      <h2>Experiencia</h2>
      <TimelineContainer>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} index={index}>
            {/* Ícono de maletín solo en el título */}
            <JobTitle>
              <FaBriefcase /> {experience.jobTitle}
            </JobTitle>
            
            {/* Ícono de edificio para la empresa */}
            <CompanyName>
              <FaBuilding /> {experience.company}
            </CompanyName>
            
            {/* Ícono de calendario para la duración */}
            <JobDuration>
              <FaCalendarAlt /> {experience.duration}
            </JobDuration>
            
            {/* Ícono diferente en la descripción, texto en la misma línea */}
            <JobDescription>
              <FaFileAlt />
              <span>{experience.description}</span>
            </JobDescription>
          </ExperienceCard>
        ))}
      </TimelineContainer>
    </ExperienceContainer>
  );
};

export default Experience;

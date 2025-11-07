"use client";
import React from "react";
import { ExperienceContainer, TimelineContainer, ExperienceCard, JobTitle, CompanyName, JobDuration, JobDescription } from "./experienceStyles";
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaFileAlt } from "react-icons/fa";

const experiences = [
  {
    jobTitle: "Frontend / Full Stack Developer",
    company: "Botic Partners",
    duration: "Noviembre 2025 - Actualidad",
    description: "Desarrollo y evolución del sitio con Next.js integrado a Payload CMS. Implementación de páginas y componentes reutilizables, flujos de contenido, SEO técnico y optimizaciones de performance/UX. Colaboración con diseño y producto para lanzamientos eficientes.",
  },
  {
    jobTitle: "Full Stack Product Engineer",
    company: "Equilibrio AI",
    duration: "Octubre 2025 - Actualidad",
    description: "Implementación full stack con Next.js (frontend) y FastAPI (backend). Diseño de APIs, arquitectura limpia y medición de performance. Colaboración directa con diseño y producto para priorizar features y garantizar escalabilidad.",
  },
  {
    jobTitle: "Project Manager",
    company: "Ø UnderTango Club",
    duration: "Octubre 2025 - Actualidad",
    description: "Gestión integral del proyecto con varios desarrolladores, estableciendo prioridades, guías de trabajo y supervisando entregas. Coordinación entre desarrollo, diseño y cliente para garantizar calidad, cumplimiento de plazos y coherencia técnica.",
  },
  {
    jobTitle: "Freelance Full Stack / Frontend",
    company: "Clientes: Canal del Congreso, Fundamentals (CEO de tu Vida), CEO Training Mentorship",
    duration: "Julio 2025 - Actualidad",
    description: "Desarrollo de landings y secciones con foco en conversión, accesibilidad y SEO. Integraciones, componentes a medida, optimización de LCP/CLS y buenas prácticas de rendimiento. Ajustes responsive y mejoras de UX basadas en métricas.",
  },

  {
    jobTitle: "E2E",
    company: "ChicksX",
    duration: "Abril 2025 - Agosto 2025",
    description: "Diseño, desarrollo y ejecución de pruebas automatizadas E2E con Cypress. Colaboración con los equipos de desarrollo y QA, garantizando releases confiables y de alta calidad.",
  },
  {
    jobTitle: "Product Engineer",
    company: "Chicks Gold Inc.",
    duration: "Octubre 2024 - Septiembre 2025",
    description: "Desarrollo y mantenimiento integral de productos con Aurelia y .NET, incluyendo optimización de bases de datos, backend escalable y UI enfocada en rendimiento para servicios de cadetería y logística.",
  },
  {
    jobTitle: "Full Stack Developer",
    company: "QuAI Labs",
    duration: "Julio 2024 - Septiembre 2024",
    description: "Desarrollé aplicaciones web completas con React y Tailwind CSS en el frontend, y Node.js con MySQL en el backend. Implementé APIs, autenticación y optimicé el rendimiento general.",
  },
  {
    jobTitle: "Desarrollador Full Stack",
    company: "Proyecto Independiente 'Salon Unisex'",
    duration: "Julio 2024 - Septiembre 2024",
    description: "Creé una plataforma de gestión para salones de belleza con e-commerce integrado, incluyendo panel de administración, pagos con Mercado Pago y gestión de empleados.",
  },
  {
    jobTitle: "Desarrollador Full Stack",
    company: "MakeUp - Proyecto Independiente",
    duration: "Octubre 2023 - Enero 2024",
    description: "Encabecé el desarrollo de ‘Makeup’, una plataforma e-commerce enfocada en el sector belleza. Implementé React y Tailwind CSS en el frontend y Node.js con MySQL en el backend, usando JWT, Nodemailer y WebSockets.",
  },
  {
    jobTitle: "Tutor de Desarrollo Web y IA",
    company: "Coderhouse",
    duration: "Mayo 2022 - Junio 2024",
    description: "Guío a estudiantes en tecnologías como JavaScript, Angular, React JS y fundamentos de Inteligencia Artificial. Mentoría personalizada, diseño de cursos interactivos y apoyo en proyectos con integración de IA y generación de prompts.",
  },
  {
    jobTitle: "Frontend Web Developer",
    company: "Ciencia Educa Argentina",
    duration: "Mayo 2022 - Mayo 2023",
    description: "Implementé aplicaciones frontend para la plataforma educativa utilizando React, Next.js y Tailwind CSS, mejorando la experiencia de usuario y la accesibilidad.",
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

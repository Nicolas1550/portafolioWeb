"use client";
import React, { useState, useEffect } from "react";
import { FaCertificate } from "react-icons/fa";
import {
  CertificationsContainer,
  CertificationCard,
  CertificationList,
  CertificationTitle,
} from "../components/pageStyles/certificationsStyles";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Spinner from "../components/spinner/spinner";

// Lista de certificaciones
const certifications = [
  {
    title: "Certificación Full Stack Developer",
    institution: "Coderhouse",
    year: "2023",
    icon: <FaCertificate />,
    link: "https://www.linkedin.com/in/nicolas-luciuk/details/education/", 
  },
  {
    title: "Certificación en Inteligencia Artificial: Prompt Engineering",
    institution: "Coderhouse",
    year: "2024",
    icon: <FaCertificate />,
    link: "https://www.linkedin.com/in/nicolas-luciuk/details/education/", 
  },
  {
    title: "Certificación en Programación Backend",
    institution: "Coderhouse",
    year: "2024",
    icon: <FaCertificate />,
    link: "https://www.linkedin.com/in/nicolas-luciuk/details/education/", 
  },
  {
    title: "Certificación de Desarrollador Frontend React",
    institution: "Coderhouse",
    year: "2022",
    icon: <FaCertificate />,
    link: "https://www.linkedin.com/in/nicolas-luciuk/details/education/", 
  },
  {
    title: "Certificación en Next.js",
    institution: "Coderhouse",
    year: "2024",
    icon: <FaCertificate />,
    link: "https://www.linkedin.com/in/nicolas-luciuk/details/education/",
  },
  {
    title: "Publicidad en Display de Google Ads",
    institution: "Google Ads",
    year: "2021",
    icon: <FaCertificate />,
    link: "https://www.linkedin.com/in/nicolas-luciuk/details/education/", 
  },
  {
    title: "Certificación en Marketing Digital: Community Manager & Publicidad",
    institution: "Institución No Especificada",
    year: "2021",
    icon: <FaCertificate />,
    link: "https://www.linkedin.com/in/nicolas-luciuk/details/education/", 
  },
  {
    title: "Certificación en Desarrollo Web",
    institution: "Institución No Especificada",
    year: "2021",
    icon: <FaCertificate />,
    link: "https://www.linkedin.com/in/nicolas-luciuk/details/education/",
  },
  {
    title:
      "Certificación en Inteligencia Artificial: Generación de Prompts y Trading",
    institution: "Coderhouse",
    year: "2022",
    icon: <FaCertificate />,
    link: "https://www.linkedin.com/in/nicolas-luciuk/details/education/", 
  },
];

const Certifications: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <CertificationsContainer id="certifications">
        <h2>Certificaciones</h2>
        <CertificationList>
          {certifications.map((certification, index) => (
            <CertificationCard key={index}>
              {/* Solo mostramos el enlace si existe */}
              {certification.link ? (
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {certification.icon}
                  <CertificationTitle>{certification.title}</CertificationTitle>
                  <p>
                    {certification.institution} - {certification.year}
                  </p>
                </a>
              ) : (
                <>
                  {certification.icon}
                  <CertificationTitle>{certification.title}</CertificationTitle>
                  <p>
                    {certification.institution} - {certification.year}
                  </p>
                </>
              )}
            </CertificationCard>
          ))}
        </CertificationList>
      </CertificationsContainer>
      <Footer />
    </>
  );
};

export default Certifications;

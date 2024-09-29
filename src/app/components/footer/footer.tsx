"use client";
import React, { useEffect } from "react";
import { scroller } from "react-scroll"; 
import {
  FooterContainer,
  FooterContent,
  FooterLinks,
  SocialIcons,
  FooterText,
} from "./footerStyles";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; 
import Link from "next/link"; 

const Footer: React.FC = () => {
  const handleScrollToSection = (section: string) => {
    if (window.location.pathname === "/") {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 1000,
        offset: -70,
      });
    } else {
      window.location.href = `/?scrollTo=${section}`;
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get("scrollTo");
    if (scrollTo) {
      scroller.scrollTo(scrollTo, {
        smooth: true,
        duration: 1000,
        offset: -70,
      });
    }
  }, []);

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinks>
          {/* Implementación del scroll como en el Navbar */}
          <a
            onClick={() => handleScrollToSection("projects")}
            style={{ cursor: "pointer" }}
          >
            Proyectos
          </a>
          <a
            onClick={() => handleScrollToSection("experience")}
            style={{ cursor: "pointer" }}
          >
            Experiencia
          </a>
          {/* Redirección directa a la página de contacto */}
          <Link href="/contact" passHref>
            {/* Eliminar el <a> innecesario */}
            <span style={{ cursor: "pointer" }}>Contacto</span>
          </Link>
        </FooterLinks>
        <SocialIcons>
          <a
            href="https://github.com/Nicolas1550"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/nicolas-luciuk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/nicoluciuk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </SocialIcons>
        <FooterText>
          © 2024 Nicolás Luciuk - Todos los derechos reservados.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

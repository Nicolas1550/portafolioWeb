"use client";
import React from "react";
import {
  HeaderContainer,
  ProfileImageContainer,
  ProfileImage,
  AboutText,
} from "./headerStyles";

const Header: React.FC = () => {
  return (
    <HeaderContainer id="about">
      <ProfileImageContainer>
        <ProfileImage src="/photo.webp" alt="Nicolás Luciuk" />
      </ProfileImageContainer>
      <AboutText>
        <h1>Hola, soy Nicolás Luciuk</h1>
        <p>
          Soy un desarrollador Full Stack especializado en tecnologías modernas
          como React y Next.js, con experiencia en la creación de aplicaciones
          eficientes y escalables. Domino tanto el frontend como el backend,
          utilizando Next.js para optimizar el rendimiento con Server-Side
          Rendering (SSR) y Static Site Generation (SSG). Además, manejo
          integraciones avanzadas con APIs, autenticación y sistemas en tiempo
          real. Como tutor en Coderhouse, también disfruto guiando a estudiantes
          en tecnologías como JavaScript, React y la inteligencia artificial.
          Estoy siempre en busca de nuevos retos que me permitan seguir
          creciendo profesionalmente.
        </p>
      </AboutText>
    </HeaderContainer>
  );
};

export default Header;

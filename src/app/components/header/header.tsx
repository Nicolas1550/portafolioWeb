"use client";
import React from "react";
import { HeaderContainer, ProfileImageContainer, ProfileImage, AboutText } from "./headerStyles";

const Header: React.FC = () => {
  return (
    <HeaderContainer id="about">
      <ProfileImageContainer>
        <ProfileImage src="/photo.webp" alt="Nicolás Luciuk" />
      </ProfileImageContainer>
      <AboutText>
        <h1>Hola, soy Nicolás Luciuk</h1>
        <p>
          Soy un desarrollador Full Stack apasionado por crear aplicaciones web
          modernas y eficientes. Mi experiencia se centra en tecnologías como
          React, Node.js, y bases de datos NoSQL, trabajando tanto en frontend
          como en backend para ofrecer soluciones integrales. Estoy siempre
          buscando nuevos desafíos y oportunidades para mejorar mis habilidades
          y aprender nuevas tecnologías.
        </p>
      </AboutText>
    </HeaderContainer>
  );
};

export default Header;

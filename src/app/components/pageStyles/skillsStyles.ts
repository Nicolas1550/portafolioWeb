import styled from "styled-components";

// Contenedor principal de la sección de habilidades
export const SkillsContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(30, 30, 30, 0.9),
    rgba(45, 45, 45, 0.95),
    rgba(0, 191, 255, 0.2)
  );
  color: var(--foreground);
  text-align: center;

  h2 {
    margin-top: 2rem;
    font-size: 3rem; /* Tamaño original */
    color: var(--primary-color);
    margin-bottom: 4rem; /* Mantén el margen original */
    font-family: "Poppins", sans-serif;
    position: relative;
    z-index: 1;
    letter-spacing: 0.05em; /* Mantén el espaciado */
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4); /* Sombra original */
  }

  /* Fondo borroso celeste claro detrás del texto */
  h2::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    height: 110%;
    background: rgba(0, 255, 255, 0.2); /* Fondo celeste claro */
    filter: blur(10px); /* Efecto de desenfoque */
    z-index: -1;
    border-radius: 10px;
  }
`;

// Lista de habilidades
export const SkillList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 3rem;
  justify-items: center;
`;

// Tarjeta individual de habilidad
export const SkillCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 200px;

  &:hover {
    transform: translateY(-12px) scale(1.05);
    box-shadow: 0px 12px 24px rgba(0, 191, 255, 0.5);
  }

  svg {
    font-size: 4rem;
    width: 100%;
    max-width: 100px; /* Ancho fijo para centrar mejor el ícono */
    height: auto;
    color: var(--primary-color);
    margin: 0 auto 1rem; /* Centramos el ícono */
    display: block;
  }
`;

// Título de cada habilidad
export const SkillTitle = styled.h3`
  font-size: 1.7rem;
  color: var(--foreground);
  font-family: "Poppins", sans-serif;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  margin-top: 0.5rem;
  text-align: center; /* Aseguramos que el texto esté centrado */
`;

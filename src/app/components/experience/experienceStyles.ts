import styled from "styled-components";

// Contenedor principal de la sección de experiencia
export const ExperienceContainer = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(10, 10, 10, 0.95),
    rgba(20, 20, 20, 0.9),
    rgba(0, 191, 255, 0.1)
  );
  color: var(--foreground);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  h2 {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 3rem;
    font-family: "Poppins", sans-serif;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    h2 {
      font-size: 2rem; /* Ajuste del tamaño de fuente en móvil */
    }
  }
`;

// Contenedor para la línea de tiempo y las tarjetas
export const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: 3px;
    background: linear-gradient(
      180deg,
      var(--primary-color),
      rgba(0, 255, 255, 0.6)
    );
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    &::before {
      left: 0; /* La línea de tiempo se alineará a la izquierda en móviles */
      transform: none;
    }
  }
`;

// Tarjeta individual para cada experiencia
export const ExperienceCard = styled.div<{ index: number }>`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(0, 191, 255, 0.2)
  );
  border-radius: 16px;
  padding: 2rem;
  width: 45%;
  max-width: 700px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  z-index: 1;
  align-self: ${({ index }) => (index % 2 === 0 ? "flex-start" : "flex-end")};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 12px 24px rgba(0, 191, 255, 0.5);
  }

  &::before {
    content: "";
    position: absolute;
    top: 20px;
    left: ${({ index }) => (index % 2 === 0 ? "-20px" : "unset")};
    right: ${({ index }) => (index % 2 !== 0 ? "-20px" : "unset")};
    width: 16px;
    height: 16px;
    background: var(--primary-color);
    border-radius: 50%;
    box-shadow: 0px 0px 8px rgba(0, 191, 255, 0.8);
  }

  @media (max-width: 768px) {
    width: 100%; /* Las tarjetas ocupan todo el ancho en móviles */
    align-self: center; /* Centra todas las tarjetas */
    &::before {
      left: 50%;
      transform: translateX(-50%);
      right: unset;
    }
  }
`;

// Título del trabajo
export const JobTitle = styled.h3`
  font-size: 1.8rem;
  font-family: "Poppins", sans-serif;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &::before {
    content: "";
    background-color: var(--primary-color);
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Ajuste del tamaño en móviles */
  }
`;

// Icono y nombre de la empresa
export const CompanyName = styled.h4`
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Duración del trabajo
export const JobDuration = styled.p`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  color: var(--foreground);
  margin-bottom: 1rem;
  font-style: italic;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Descripción del trabajo
// Descripción del trabajo
export const JobDescription = styled.p`
  font-size: 1.1rem;
  font-family: "Poppins", sans-serif;
  color: var(--foreground);
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 0;
  padding-right: 1rem; /* Añadimos un poco de padding para evitar que el texto quede demasiado pegado a los bordes */
  text-justify: inter-word; /* Controla la distribución del espacio entre palabras */

  /* Ajustamos los saltos de palabra para evitar palabras cortadas en líneas más pequeñas */
  hyphens: auto; 
  word-break: break-word;

  svg {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
    padding-right: 0.5rem; /* Ajustamos el padding en móviles */
  }
`;

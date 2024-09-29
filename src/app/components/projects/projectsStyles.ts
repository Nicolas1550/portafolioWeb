import styled from "styled-components";

// Contenedor principal de los proyectos
export const ProjectsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(15, 15, 15, 0.95),
    rgba(35, 35, 35, 0.9),
    rgba(0, 191, 255, 0.1)
  );
  color: var(--foreground);
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 3rem 1rem; /* Ajustamos el padding en pantallas pequeñas */
  }
`;

// Estilos de la tarjeta del proyecto
export const ProjectCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(0, 191, 255, 0.15));
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  max-width: 400px;
  width: 100%;
  position: relative;

  &:hover {
    transform: translateY(-15px) scale(1.05);
    box-shadow: 0px 12px 30px rgba(0, 191, 255, 0.5);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(135deg, var(--primary-color), rgba(0, 191, 255, 0.2));
    z-index: -1;
    transition: width 0.4s ease;
  }

  &:hover::before {
    width: 100%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// Imagen del proyecto
export const ProjectImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-bottom: 4px solid var(--primary-color);
`;

// Información del proyecto dentro de la tarjeta
export const ProjectInfo = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

// Título del proyecto
export const ProjectTitle = styled.h2`
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  color: var(--primary-color);
  margin-bottom: 1rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

// Descripción del proyecto
export const ProjectDescription = styled.p`
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  color: var(--foreground);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

// Enlaces a los proyectos
export const ProjectLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  a {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    color: var(--primary-color);
    text-decoration: none;
    padding: 0.6rem 1.4rem;
    border: 2px solid var(--primary-color);
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: background-color 0.4s ease, color 0.4s ease, transform 0.3s ease;

    &:hover {
      background-color: var(--primary-color);
      color: white;
      transform: scale(1.05);
    }

    svg {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    a {
      padding: 0.5rem 1.2rem;
      font-size: 0.9rem;
    }
  }
`;

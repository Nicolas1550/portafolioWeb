import styled from "styled-components";

// Contenedor principal del Header
export const HeaderContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 2rem;
  background: linear-gradient(135deg, rgba(20, 20, 20, 0.95), rgba(45, 45, 45, 0.9), rgba(0, 191, 255, 0.1)); /* Gradiente oscuro con toque celeste suave */
  color: var(--foreground);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 6rem 1.5rem; /* Ajuste de padding en móviles */
  }

  /* Animación sutil para el texto al aparecer */
  animation: fadeIn 1.2s ease-in-out both;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Contenedor de la imagen de perfil con efecto ondulado
export const ProfileImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color), rgba(0, 191, 255, 0.15)); /* Gradiente ondulado celeste */
  padding: 0.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* Efecto hover para hacer la imagen más dinámica */
  &:hover {
    transform: scale(1.05); /* Leve zoom al hacer hover */
    box-shadow: 0px 8px 20px rgba(0, 191, 255, 0.4); /* Sombra más pronunciada en hover */
  }

  &::before {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    background: radial-gradient(circle, rgba(0, 191, 255, 0.4), rgba(0, 191, 255, 0.1), transparent);
    animation: rotateWave 6s infinite linear;
    border-radius: 50%;
    z-index: -1;
  }

  @keyframes rotateWave {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

// Imagen de perfil dentro del círculo
export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3); /* Sombra para la imagen */
`;

// Texto de "Sobre mí" justificado
export const AboutText = styled.div`
  max-width: 600px;
  margin-left: 3rem;
  opacity: 0; /* Inicialmente invisible */
  animation: fadeInText 1.4s ease-in-out 0.3s forwards; /* Aparece con retardo */

  @keyframes fadeInText {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  h1 {
    font-size: 3rem;
    font-family: "Poppins", sans-serif;
    color: var(--primary-color);
    margin-bottom: 1.2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra ligera para resaltar el título */
  }

  p {
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
    color: var(--foreground);
    text-align: justify;
    line-height: 1.7;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Sombra ligera para mejorar la legibilidad */
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
    text-align: center;
  }
`;

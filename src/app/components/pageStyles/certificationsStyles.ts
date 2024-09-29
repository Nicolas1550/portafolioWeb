import styled from "styled-components";

// Contenedor principal de la página de certificaciones
export const CertificationsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(30, 30, 30, 0.9),
    rgba(45, 45, 45, 0.95),
    rgba(0, 191, 255, 0.2)
  );
  color: var(--foreground);

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
    width: 110%;
    height: 110%;
    background: rgba(0, 255, 255, 0.2); /* Fondo celeste claro */
    filter: blur(10px); /* Efecto de desenfoque */
    z-index: -1;
    border-radius: 10px;
  }
`;

export const CertificationList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  justify-items: center;
`;

export const CertificationCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 350px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 20px rgba(0, 191, 255, 0.4);
  }

  a {
    text-decoration: none;
    color: var(--foreground);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  svg {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  p {
    color: var(--foreground);
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }
`;

export const CertificationTitle = styled.h3`
  font-size: 1.8rem;
  font-family: "Poppins", sans-serif;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

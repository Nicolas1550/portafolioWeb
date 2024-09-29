import styled from "styled-components";

// Contenedor principal del footer
export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.95), rgba(20, 20, 20, 0.95), rgba(0, 191, 255, 0.2));
  padding: 2rem 0;
  color: var(--foreground);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
`;

// Contenedor del contenido del footer
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 1rem;
  text-align: center;
`;

// Enlaces del footer
export const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;

  a {
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--accent-color);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

// Iconos de redes sociales
export const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  a {
    color: var(--primary-color);
    font-size: 1.5rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: var(--accent-color);
      transform: scale(1.1); /* Efecto de zoom en hover */
    }
  }
`;

// Texto del footer (copyright)
export const FooterText = styled.p`
  font-size: 1rem;
  color: var(--foreground);
  font-family: "Poppins", sans-serif;
  opacity: 0.8;
`;

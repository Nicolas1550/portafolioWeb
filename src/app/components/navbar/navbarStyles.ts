import styled from "styled-components";

// Botón de menú para móvil
export const MobileMenuButton = styled.button<{ $isOpen?: boolean }>`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--foreground);
  cursor: pointer;
  transition: color 0.3s ease, transform 0.4s ease;

  &:before {
    content: ${({ $isOpen }) => ($isOpen ? "'✕'" : "'☰'")};
    display: block;
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(0deg)" : "rotate(0deg)")};
    transition: transform 0.4s ease; /* Suaviza el cambio entre íconos */
  }

  &:hover {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;



// Menú desplegable para móvil
export const MobileMenu = styled.ul<{ $isOpen: boolean }>`
  display: block;
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  background-color: var(--secondary-color);
  list-style: none;
  text-align: center;
  padding: 0;
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")}; /* Altura más alta */
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transition: max-height 0.5s ease, opacity 0.4s ease; /* Ajustamos la velocidad de la transición */
  z-index: 1;

  & > li {
    margin: 1rem 0;
    font-size: 1.5rem;
    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
    transition: opacity 0.3s ease;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;



// Estilos base para el contenedor del navbar
// Estilos base para el contenedor del navbar
export const NavbarContainer = styled.nav<{ $isScrolled: boolean }>`
  width: 100%;
  height: 70px;
  background: ${({ $isScrolled }) =>
    $isScrolled
      ? "var(--background)" // Fondo fijo al hacer scroll
      : "linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(40, 40, 40, 0.8))"}; // Transparente al principio
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${({ $isScrolled }) =>
    $isScrolled ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none"};
`;

// Logo o nombre del portafolio (alineado a la izquierda)
export const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: var(--accent-color);
    transform: scale(1.05);
  }
`;

// Estilos del contenedor de los enlaces del navbar
export const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 2rem;
  flex: 1;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    display: none; /* Oculta los ítems en pantallas móviles */
  }
`;


// Estilos de los enlaces individuales
// Estilos de los enlaces individuales
export const NavLink = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer; /* Manito de enlace */

  &:hover {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    opacity: 0.8;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 100%;
      background-color: var(--primary-color);
      transition: width 0.3s ease;
    }
  }

  &.active {
    color: var(--primary-color);
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 100%;
      background-color: var(--primary-color);
    }
  }
`;

// Dropdown contenedor (botón Más)
export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

// Botón "Más"
export const DropdownButton = styled.button`
  background-color: rgba(0, 191, 255, 0.1);
  border: 2px solid var(--primary-color);
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: var(--foreground);
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: var(--primary-color);
    color: white;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;

// Contenido del Dropdown
export const DropdownContent = styled.ul<{ $isDropdownOpen: boolean }>`
  display: ${({ $isDropdownOpen }) => ($isDropdownOpen ? "block" : "none")};
  position: absolute;
  background-color: var(--secondary-color);
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  list-style: none;
  padding: 0.5rem 0;
  border-radius: 12px;
  transition: all 0.3s ease;

  & > li {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: var(--primary-color);
      color: white;
      transform: translateX(5px);
    }
  }
`;

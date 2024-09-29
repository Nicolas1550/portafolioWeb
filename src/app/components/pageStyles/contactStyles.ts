import styled from "styled-components";

// Contenedor principal de la página de contacto
export const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(
    135deg,
    rgba(30, 30, 30, 0.9),
    rgba(45, 45, 45, 0.95),
    rgba(0, 191, 255, 0.2)
  );
  color: var(--foreground);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem 1rem; /* Reduce padding en pantallas móviles */
  }
`;

// Título de la página de contacto
export const ContactTitle = styled.h2`
  margin-top: 2rem;
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 4rem;
  font-family: "Poppins", sans-serif;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 110%;
    height: 110%;
    background: rgba(0, 255, 255, 0.2);
    filter: blur(10px);
    z-index: -1;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    margin-top: 4rem;

    font-size: 2.2rem; /* Ajusta tamaño del texto en móviles */
    margin-bottom: 3rem;
  }
`;

// Formulario de contacto
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 1.5rem; /* Reduce el padding en móviles */
  }
`;

// Campo del formulario
export const FormField = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 8px;

  svg {
    color: var(--primary-color);
    margin-right: 1rem;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.75rem; /* Ajuste de padding para móviles */
  }
`;

// Entrada de texto
export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: none;
  border: none;
  outline: none;
  color: var(--foreground);
  font-size: 1rem;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    padding: 0.75rem; /* Ajuste de padding para móviles */
    font-size: 0.9rem;
  }
`;

// Área de texto para el mensaje
export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: none;
  border: none;
  outline: none;
  color: var(--foreground);
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  resize: none;
  height: 150px;

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
`;

// Botón de envío
export const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: var(--foreground);
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: var(--accent-color);
    box-shadow: 0px 8px 16px rgba(0, 191, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem; /* Ajusta padding del botón en móviles */
    font-size: 1rem;
  }
`;

import styled from "styled-components";

/* Contenedor principal de los proyectos */
export const ProjectsContainer = styled.section`
  /* ancho legible y centrado */
  max-width: 1280px;
  margin: 0 auto;

  /* grilla responsiva 1 / 2 / 3 */
  display: grid;
  gap: 2rem;
  padding: 4rem 2rem;
  grid-template-columns: 1fr;

  justify-items: center;   /* centra los cards dentro de cada celda */
  align-items: stretch;    /* alturas consistentes por fila */

  background: linear-gradient(
    135deg,
    rgba(15, 15, 15, 0.95),
    rgba(35, 35, 35, 0.9),
    rgba(0, 191, 255, 0.1)
  );
  color: var(--foreground);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2 en tablet */
    padding: 3rem 1.5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* 3 en desktop */
  }
`;
export const ProjectImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-bottom: 4px solid var(--primary-color);
  background: #0f1115;

  /* Efecto visual en hover del card */
  transition: transform .45s cubic-bezier(.22,1,.36,1),
              filter .45s ease;
  will-change: transform, filter;
`;

/* Tarjeta del proyecto */
export const ProjectCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
  background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(0,191,255,0.15));

  display: flex;
  flex-direction: column;

  /* Animación suave y GPU-friendly */
  transform: translateZ(0);
  transition:
    transform .45s cubic-bezier(.22,1,.36,1),
    box-shadow .45s ease,
    border-color .45s ease;
  will-change: transform, box-shadow;

  /* Glow sutil en hover */
  &:before {
    content: "";
    position: absolute;
    inset: -40% -20%;
    background:
      radial-gradient(60% 40% at 20% 0%, rgba(0,191,255,.25), transparent 70%),
      radial-gradient(60% 40% at 120% 120%, rgba(0,191,255,.18), transparent 70%);
    opacity: 0;
    transition: opacity .45s ease;
    pointer-events: none;
  }

  /* Borde animado tipo neón */
  &:after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 1px;
    background:
      conic-gradient(from 180deg at 50% 50%,
        rgba(0,191,255,.0),
        rgba(0,191,255,.45),
        rgba(0,191,255,.0) 25%) border-box;
    -webkit-mask:
      linear-gradient(#000 0 0) content-box, 
      linear-gradient(#000 0 0) padding-box;
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    opacity: 0;
    transition: opacity .45s ease, filter .45s ease;
    filter: blur(0px);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 18px 46px rgba(0,191,255,0.28), 0 8px 20px rgba(0,0,0,0.45);
    border-color: rgba(0,191,255,0.35);
  }

  &:hover:before { opacity: 1; }
  &:hover:after  { opacity: 1; filter: blur(.2px); }

  /* Parallax/zoom muy leve de la imagen al hover */
  &:hover ${ProjectImage} {
    transform: scale(1.04) translateY(-4px);
    filter: saturate(1.08) contrast(1.04);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }

  /* Accesibilidad: reducir movimiento */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:before, &:after { transition: none; }
    &:hover { transform: none; box-shadow: none; }
    &:hover ${ProjectImage} { transform: none; filter: none; }
  }
`;

/* Imagen del proyecto */


/* Información del proyecto dentro de la tarjeta */
export const ProjectInfo = styled.div`
  padding: 1.6rem 1.4rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  flex: 1; /* ocupa el espacio vertical para empujar links abajo */

  @media (max-width: 768px) {
    padding: 1.25rem 1rem;
  }
`;

/* Título del proyecto */
export const ProjectTitle = styled.h2`
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  color: var(--primary-color);
  margin: 0 0 0.25rem 0;
  letter-spacing: .2px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

/* Descripción del proyecto */
export const ProjectDescription = styled.p`
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  color: var(--foreground);
  line-height: 1.7;
  margin: 0;
  opacity: .9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  @media (min-width: 1024px) {
    font-size: 1.05rem;
  }
`;

/* Enlaces a los proyectos */
export const ProjectLinks = styled.div`
  margin-top: auto;       /* asegura que los botones queden “pegados” abajo */
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;

  a {
    font-size: 0.95rem;
    font-family: "Poppins", sans-serif;
    color: var(--primary-color);
    text-decoration: none;
    padding: 0.6rem 1.1rem;
    border: 2px solid var(--primary-color);
    border-radius: 12px;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: background-color 0.25s ease, color 0.25s ease, transform 0.25s ease, border-color .25s ease;

    svg { font-size: 1.1rem; }

    &:hover {
      background-color: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
      transform: translateY(-1px);
    }
  }

  @media (max-width: 768px) {
    a {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    }
  }
`;

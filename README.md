# Portfolio de Nicolás Luciuk — Edición final

Portfolio profesional centrado en experiencia de producto, ingeniería full stack y calidad. Esta es la evolución independiente de NEBULA: un sitio liviano y directo para reclutadores, con casos de trabajo, galería de 17 proyectos, trayectoria, CV descargable y contacto.

## Contenido de la edición

- Portada editorial con fotografía, una propuesta profesional concreta y CTA a proyectos, CV y contacto.
- Resumen de habilidades para reclutadores en unos segundos.
- Tres casos destacados: Botic Partners, Equilibrio AI y Chicks Gold.
- Galería de **17 proyectos** con filtros, búsqueda, tecnologías y vínculos disponibles. MakeUp y Peluquería se mantienen en posiciones inferiores con una aclaración transparente sobre la demo pública parcial.
- Experiencia basada en el perfil de LinkedIn proporcionado anteriormente. Formación y correo de contacto alineados al CV auténtico confirmado posteriormente por el propietario. Algunas fechas laborales varían entre las fuentes y requieren confirmación antes del lanzamiento.
- CV **original del propietario**, sin modificaciones, en `public/cv-nicolas-luciuk.pdf`. Sustituye al PDF que se había generado previamente.
- Imagen social `public/og-portfolio.jpg`, metadatos Open Graph, sitemap y robots.
- Contacto sin dependencias de terceros: email, LinkedIn, GitHub y formulario que **abre el gestor de correo del visitante**. No afirma enviar directamente.
- CSS personalizado y componentes sencillos. Sin efectos 3D costosos ni bibliotecas de animaciones innecesarias.

## Preparación

**Node.js 20 o 22 recomendado.**

```powershell
npm install
npm run verify
npm run typecheck
npm run build
npm run dev
```

Abrir `http://localhost:3000`.

> Esta entrega se verificó con un analizador de sintaxis TS/TSX y pruebas de integridad de 17 proyectos y 17 imágenes. **No se pudo ejecutar `npm run build` aquí porque el entorno no tenía acceso al registro npm.** Es obligatorio compilarla localmente antes de publicar en producción.

### Framework y seguridad

Se actualizó de Next.js 14 a la rama de mantenimiento con parches **Next.js 15.5.28** y React 19. La actualización se hizo sobre un proyecto sin uso de Server Actions ni dependencias de APIs internas de Next; falta validación en tu máquina con `npm run build`.

No incluimos un `package-lock.json` viejo que apunte a Next.js 14: tras `npm install`, **subí el nuevo `package-lock.json` generado** a GitHub. Usá `npm ci` en los siguientes despliegues.

## Publicar en Vercel

1. Compilar y navegar el sitio localmente. Revisar `/`, `/skills`, `/certifications`, `/contact` y el PDF.
2. Confirmar que el dominio sea `https://portafolio-web-phi-five.vercel.app`. Si cambia, modificar `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts` y el URL del CV.
3. Subir a GitHub el contenido de esta carpeta (conservando `.git` si reemplazás un repositorio existente), incluyendo `package-lock.json` recién generado.
4. Importar el repositorio en Vercel como Next.js. No se requieren variables de entorno ni credenciales externas.
5. Revisar la página móvil, todos los enlaces, los 17 proyectos, descarga de CV y tarjeta Open Graph; confirmar el despliegue con el navegador.

## Mantenerlo actualizado

- Proyectos: `src/app/data/projects.ts`
- Tres casos destacados: `src/app/components/cases/cases.tsx`
- Experiencia: `src/app/components/experience/experience.tsx`
- CV: `public/cv-nicolas-luciuk.pdf`
- Contacto: `src/app/contact/page.tsx`
- Estilos: `src/app/globals.css`

Importante: las descripciones de actividades están basadas en los textos aportados, sin resultados cuantitativos inventados. Revisá el contenido profesional antes de publicar.

## Proyectos personales agregados (noviembre de 2026)

- **NEBULA:** demo https://nebula-chi-two.vercel.app/ · código https://github.com/Nicolas1550/nebula
- **SPEED V2:** demo https://speedv2-7rrl.vercel.app/ · código https://github.com/Nicolas1550/speedv2
- **SYNAPSE:** estado **Próximamente**. Sin enlaces de demo o repositorio hasta su publicación.

Las ilustraciones SVG de estos tres proyectos son artes gráficos propios para las tarjetas, no capturas reales de los sitios.

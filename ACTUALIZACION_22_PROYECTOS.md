# Portafolio final: 22 proyectos, enlaces y portadas incorporados

Actualización del 5 de noviembre de 2026: se incorporaron las 7 imágenes proporcionadas por el autor como portadas para **FRAME, SENTINEL, QUANTUM, ATLAS, EON, SYNAPSE y NEBULA**. Se preservó la portada de SPEED.

## Enlaces finales

| Proyecto | Demo en vivo | Código GitHub |
|---|---|---|
| FRAME Studio | https://frame-sandy-nine.vercel.app/ | https://github.com/Nicolas1550/frame |
| SENTINEL | https://sentinel-sooty-two.vercel.app/ | https://github.com/Nicolas1550/sentinel |
| QUANTUM Trading | https://trading-indol-tau.vercel.app/ | https://github.com/Nicolas1550/trading |
| SYNAPSE | https://synapse-le8l.vercel.app/ | https://github.com/Nicolas1550/synapse |

Los destinos se recuperaron de los enlaces cortos de LinkedIn facilitados por el autor. Los enlaces de ATLAS, EON y NEBULA se mantienen como estaban en el catálogo.

## Imágenes

Archivos locales optimizados WebP en `public/projects/`: `frame.webp`, `sentinel.webp`, `quantum.webp`, `atlas.webp`, `eon.webp`, `synapse.webp`, `nebula.webp`. Las portadas existentes de SPEED y los otros proyectos se conservan.

El catálogo se edita en `src/app/data/projects.ts`. La galería en `src/app/components/projects/projects.tsx` usa los campos `image`, `link` y `github` para mostrar la portada y abrir cada destino.

## Publicación

Extraé el ZIP y dentro de la carpeta ejecutá `npm install`, `npm run verify`, `npm run typecheck` y `npm run build`. Una vez completado, integrá los archivos a tu repositorio existente y publicá en Vercel. Los enlaces externos dependen de que cada despliegue esté accesible y en funcionamiento.

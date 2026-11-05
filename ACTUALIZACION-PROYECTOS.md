> ACTUALIZACIÓN FINAL: los links de SENTINEL y QUANTUM y las siete portadas ya fueron incorporados. Información al día en ACTUALIZACION_22_PROYECTOS.md.

# Actualización del portfolio — NEBULA, SPEED V2 y SYNAPSE

## Cambios

- NEBULA: demo `https://nebula-chi-two.vercel.app/` y repositorio `https://github.com/Nicolas1550/nebula`.
- SPEED V2: demo `https://speedv2-7rrl.vercel.app/` y repositorio `https://github.com/Nicolas1550/speedv2`.
- SYNAPSE: etiqueta **Próximamente**; sin botones de demo ni código hasta que el proyecto esté publicado.
- Nueva categoría de filtro **Experiencias 3D**.
- 17 proyectos en total; 9 visibles inicialmente para destacar los proyectos nuevos y casos profesionales.
- Tres ilustraciones SVG locales para las tarjetas nuevas. Son ilustraciones, no capturas reales.
- Los otros 14 proyectos, sus enlaces, el CV, experiencia y contacto se conservan.

## Ejecutar en Windows (PowerShell)

```powershell
npm.cmd install
npm.cmd run verify
npm.cmd run syntax
npm.cmd run build
npm.cmd run dev
```

Abrí `http://localhost:3000`.

## Publicar

Copiá el contenido del ZIP dentro de tu repositorio local existente, sin eliminar la carpeta `.git`, y ejecutá:

```powershell
git add -A
git commit -m "Agregar NEBULA SPEED V2 y SYNAPSE proximamente"
git push origin main
```

Vercel debería crear un despliegue automáticamente si el repositorio está conectado. Revisá que el build termine correctamente.

## Editar los enlaces después

Archivo `src/app/data/projects.ts`. En SYNAPSE, cuando publiques la demo, agregá los enlaces reales y cambiá `comingSoon` a `false`.

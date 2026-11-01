# Checklist de publicación

- [ ] Ejecutar `npm install` desde esta carpeta y generar `package-lock.json` nuevo.
- [ ] Ejecutar `npm run verify`, `npm run typecheck`, `npm run build` sin errores.
- [ ] Revisar en celular y desktop: menú, búsqueda/filtros, desplegables, enlaces externos.
- [ ] Revisar fechas y cargos: hay diferencias entre el PDF de LinkedIn anterior y el CV oficial nuevo. Confirmá que la trayectoria publicada refleje tu situación actual.
- [ ] Abrir las 14 imágenes y verificar todas las demos/repositorios públicos.
- [ ] Descargar `/cv-nicolas-luciuk.pdf` y comprobar que sea el documento original que enviaste, sin cambios.
- [ ] Probar `/contact` y confirmar que el formulario abre el cliente de correo correctamente; LinkedIn y el mail directo son alternativas.
- [ ] Confirmar el dominio definitivo antes de publicar. Reemplazar canonical, sitemap y robots si cambia.
- [ ] Probar tarjeta de enlace en LinkedIn: `og-portfolio.jpg`.
- [ ] Hacer el deploy en Vercel y revisar los logs del build.

## Actualización de un repositorio existente

Copiá el contenido del ZIP **dentro de tu carpeta del proyecto** y conservá su `.git`.

```powershell
npm install
npm run verify
npm run typecheck
npm run build
git add -A
git commit -m "Portfolio final - experiencia, proyectos y CV"
git push origin main
```

El enlace de Vercel se actualizará automáticamente si el proyecto ya está conectado al repositorio.

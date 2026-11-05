# Corrección V3 — error de Github en ProjectShowcase.tsx

Se eliminó `Github` de la importación `lucide-react` en `src/components/ProjectShowcase.tsx` y se reemplazó por `FaGithub` desde `react-icons/fa6`.

También se revisó que no queden importaciones de `Github` o `Linkedin` desde `lucide-react` en `src/`. No se modificaron los proyectos, sus enlaces ni las imágenes.

## En Windows (PowerShell)

1. Copiá el contenido de este ZIP sobre tu carpeta `portafolioWeb-main` conservando `.git`.
2. Ejecutá `npm.cmd run build`.
3. Si se compila correctamente:

```powershell
git add -A
git commit -m "Fix iconos GitHub ProjectShowcase"
git push origin main
```

Nota: no se puede afirmar que el build de producción funciona hasta ejecutarlo con las dependencias instaladas.

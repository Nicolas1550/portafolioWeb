# Corrección de compilación Next.js / Vercel

## Problema identificado

En `src/components/Experience.tsx` se importaban `Github` y `Linkedin` desde `lucide-react` v1.68.0.
Estos dos iconos no están exportados en la versión instalada según el error de TypeScript.

## Cambios aplicados

- Sustituidos `Github` y `Linkedin` de `lucide-react` por `FaGithub` y `FaLinkedinIn` de `react-icons/fa6`, dependencia ya presente en el proyecto.
- Eliminado el argumento `index` no usado en la iteración de tarjetas de proyectos.
- Se conservan los proyectos, enlaces e imágenes.

## Publicar

1. Extraer sobre la carpeta del proyecto sin borrar `.git` ni `.gitignore`.
2. Ejecutar `npm.cmd install` si fuera necesario, y `npm.cmd run build`.
3. Después de verificar el build: `git add -A`, `git commit -m "Fix iconos de GitHub y LinkedIn"`, `git push origin main`.

**Nota:** La compilación completa requiere dependencias npm. No fue posible instalarlas en este entorno por problemas de acceso al registro npm.

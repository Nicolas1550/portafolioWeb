# Corrección del build de Vercel - 05/11/2026

## Errores encontrados

- `Cannot find module 'lucide-react'` porque no figuraba en `package.json`.
- Next.js no podía ejecutar ESLint porque faltaban `eslint`, `eslint-config-next` y `@eslint/eslintrc`.
- El código 3D importa `three`, `@react-three/fiber` y `@react-three/drei`, que tampoco estaban declarados.
- Los lockfiles antiguos de pnpm y npm no incluyen las dependencias nuevas. Se quitaron para regenerar **un único** `package-lock.json` usando npm.

## PASO A PASO: PowerShell en la carpeta del proyecto

Si ya tenés el repositorio Git inicializado, **no borres la carpeta `.git`**. Copiá los archivos del ZIP sobre la carpeta del proyecto. Como Windows no elimina archivos anteriores al copiar, ejecutá estos comandos en esa carpeta:

```powershell
Remove-Item pnpm-lock.yaml,package-lock.json -ErrorAction SilentlyContinue
npm.cmd install
npm.cmd run verify
npm.cmd run syntax
npm.cmd run typecheck
npm.cmd run build
```

Si el build termina correctamente, subilo:

```powershell
git add -A
git commit -m "Fix dependencias del portfolio y build de Vercel"
git push -u origin main
```

Si Git responde `nothing to commit, working tree clean`, verificá si los cambios están en el repositorio correcto.

## Vercel

- Framework preset: `Next.js`.
- Install command: dejá **vacío** para que Vercel detecte `npm install`/`npm ci` según el `package-lock.json` generado.
- Build command: dejá **vacío** para usar `npm run build` o configurá explícitamente `npm run build`.
- Si configuraste manualmente `pnpm run build` o `pnpm install`, reemplazalo por las opciones npm anteriores.
- Root directory: directorio que contiene `package.json`.
- Volvé a desplegar desde el último commit.

## Verificación

Se ejecutó la comprobación estructural (`node scripts/verify.mjs`) para validar 22 proyectos, 22 imágenes y links esenciales. No fue posible ejecutar una instalación completa o `next build` en el entorno de preparación porque el registro npm no era accesible. **Probá `npm.cmd run build` localmente antes del push**; si surge un nuevo error de tipos, comparte el texto exacto.

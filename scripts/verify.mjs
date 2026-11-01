import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const required=['src/app/page.tsx','src/app/layout.tsx','src/app/components/projects/projects.tsx','src/app/components/cases/cases.tsx','src/app/components/recruiter/recruiter.tsx','src/app/robots.ts','src/app/sitemap.ts','public/og-portfolio.jpg','public/cv-nicolas-luciuk.pdf'];
let fail=0;
for(const file of required){if(!fs.existsSync(path.join(root,file))){console.error('Falta:',file);fail++}}
const source=fs.readFileSync(path.join(root,'src/app/data/projects.ts'),'utf8');
const names=[...source.matchAll(/"id":\s*"([a-zA-Z0-9-]+)"/g)].map(x=>x[1]);
if(names.length!==14||new Set(names).size!==14){console.error('Se esperaban 14 proyectos distintos, hay',names.length);fail++}
const asset=[...source.matchAll(/"image":\s*"(\/projects\/[^"]+)"/g)].map(x=>x[1]);
for(const im of asset){if(!fs.existsSync(path.join(root,'public',im.replace(/^\//,'')))){console.error('Imagen faltante:',im);fail++}}
for(const n of ['makeup','peluqueria','boticpartners','equilibrio','chicksgold','chicksx'])if(!names.includes(n)){console.error('Proyecto esencial ausente:',n);fail++}
console.log(`Proyectos: ${names.length} · Imágenes: ${asset.length} · Archivos críticos: ${required.length}`);
if(fail)process.exit(1);console.log('OK: controles estructurales superados. Esto NO reemplaza npm run build.');

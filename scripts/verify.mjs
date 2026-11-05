import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const required=['src/app/page.tsx','src/app/layout.tsx','src/app/components/projects/projects.tsx','src/app/components/cases/cases.tsx','src/app/components/recruiter/recruiter.tsx','src/app/robots.ts','src/app/sitemap.ts','public/og-portfolio.jpg','public/cv-nicolas-luciuk.pdf'];
let fail=0;
for(const file of required){if(!fs.existsSync(path.join(root,file))){console.error('Falta:',file);fail++}}
const source=fs.readFileSync(path.join(root,'src/app/data/projects.ts'),'utf8');
const names=[...source.matchAll(/"id":\s*"([a-zA-Z0-9-]+)"/g)].map(x=>x[1]);
if(names.length!==22||new Set(names).size!==22){console.error('Se esperaban 22 proyectos distintos, hay',names.length);fail++}
const asset=[...source.matchAll(/"image":\s*"(\/projects\/[^"]+)"/g)].map(x=>x[1]);
for(const im of asset){if(!fs.existsSync(path.join(root,'public',im.replace(/^\//,'')))){console.error('Imagen faltante:',im);fail++}}
for(const n of ['makeup','peluqueria','boticpartners','equilibrio','chicksgold','chicksx','nebula','speedv2','synapse','atlas','eon','frame','sentinel','quantum'])if(!names.includes(n)){console.error('Proyecto esencial ausente:',n);fail++}
const requiredLinks=['https://nebula-chi-two.vercel.app/','https://github.com/Nicolas1550/nebula','https://speedv2-7rrl.vercel.app/','https://github.com/Nicolas1550/speedv2','https://frame-sandy-nine.vercel.app/','https://github.com/Nicolas1550/frame','https://trading-indol-tau.vercel.app/','https://github.com/Nicolas1550/trading','https://sentinel-sooty-two.vercel.app/','https://github.com/Nicolas1550/sentinel','https://synapse-le8l.vercel.app/','https://github.com/Nicolas1550/synapse'];
for(const link of requiredLinks)if(!source.includes(link)){console.error('Enlace faltante:',link);fail++}
if(!source.includes('"id": "sentinel"')||!source.includes('"id": "quantum"')){console.error('Proyectos nuevos faltantes');fail++}
for(const p of ['nebula','synapse','atlas','eon','frame','sentinel','quantum'])if(!fs.existsSync(path.join(root,'public/projects',p+'.webp'))){console.error('Imagen del usuario ausente:',p);fail++}
console.log(`Proyectos: ${names.length} · Imágenes: ${asset.length} · Archivos críticos: ${required.length}`);
if(fail)process.exit(1);console.log('OK: controles estructurales superados. Esto NO reemplaza npm run build.');

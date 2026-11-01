import type { Metadata } from 'next';
import './globals.css';

const base = 'https://portafolio-web-phi-five.vercel.app';
export const metadata:Metadata={
 metadataBase:new URL(base),
 title:{default:'Nicolás Luciuk | Full Stack Developer & Product Engineer',template:'%s | Nicolás Luciuk'},
 description:'Conocé el trabajo de Nicolás Luciuk: Full Stack Developer & Product Engineer. Next.js, FastAPI, .NET, QA con Cypress y 14 proyectos reales.',
 alternates:{canonical:base},
 openGraph:{title:'Nicolás Luciuk — Full Stack Developer & Product Engineer',description:'Del frontend al backend. Producto, calidad y 14 proyectos documentados.',url:base,type:'website',locale:'es_AR',siteName:'Portfolio de Nicolás Luciuk',images:[{url:'/og-portfolio.jpg',width:1200,height:630,alt:'Portfolio profesional de Nicolás Luciuk'}]},
 twitter:{card:'summary_large_image',title:'Nicolás Luciuk — Full Stack & Product Engineering',description:'Conocé mis proyectos y experiencia.',images:['/og-portfolio.jpg']},
 robots:{index:true,follow:true},
 keywords:['Nicolás Luciuk','Full Stack Developer','Next.js','React','FastAPI','Product Engineer','Cypress','Argentina'],
};
export default function RootLayout({children}:{children:React.ReactNode}){const structuredData={
  '@context':'https://schema.org',
  '@type':'Person',
  name:'Nicolás Luciuk',
  jobTitle:'Full Stack Developer & Product Engineer',
  url:base,
  sameAs:['https://www.linkedin.com/in/nicolas-luciuk/','https://github.com/Nicolas1550'],
  knowsAbout:['Next.js','React','FastAPI','.NET','Cypress','Product Engineering']
};return <html lang="es-AR"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/></body></html>}

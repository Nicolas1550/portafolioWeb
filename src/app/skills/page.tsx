"use client";
import React, { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaAngular, FaTools } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiStyledcomponents,
  SiTypescript,
  SiRedux,
  SiSocketdotio,
  SiExpress,
  SiChartdotjs,
  SiFramer,
  SiSequelize,
  SiSwiper,
} from "react-icons/si";
import { SkillCard, SkillList, SkillsContainer, SkillTitle } from "../components/pageStyles/skillsStyles";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Spinner from "../components/spinner/spinner";

const skills = [
  { title: "Next.js", icon: <SiNextdotjs /> },
  { title: "React", icon: <FaReact /> },
  { title: "Node.js", icon: <FaNodeJs /> },
  { title: "Styled Components", icon: <SiStyledcomponents /> },
  { title: "Tailwind CSS", icon: <SiTailwindcss /> },
  { title: "MySQL", icon: <SiMysql /> },
  { title: "JavaScript", icon: <FaJsSquare /> },
  { title: "TypeScript", icon: <SiTypescript /> },
  { title: "Bases de Datos", icon: <FaDatabase /> },
  { title: "Redux Toolkit", icon: <SiRedux /> },
  { title: "Socket.IO", icon: <SiSocketdotio /> },
  { title: "Express.js", icon: <SiExpress /> },
  { title: "Chart.js", icon: <SiChartdotjs /> },
  { title: "Angular", icon: <FaAngular /> },
  { title: "Framer Motion", icon: <SiFramer /> },
  { title: "Sequelize", icon: <SiSequelize /> },
  { title: "Swiper.js", icon: <SiSwiper /> },
  { title: "EmailJS", icon: <FaTools /> },
  { title: "Mercado Pago", icon: <FaTools /> }, 
  { title: "Nodemailer", icon: <FaTools /> }, 
  { title: "@sendgrid/mail", icon: <FaTools /> },
  { title: "Helmet", icon: <FaTools /> }, 
  { title: "express-rate-limit", icon: <FaTools /> }, 
];

const Skills: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <SkillsContainer id="skills">
        <h2>Habilidades</h2>
        <SkillList>
          {skills.map((skill, index) => (
            <SkillCard key={index}>
              {skill.icon}
              <SkillTitle>{skill.title}</SkillTitle>
            </SkillCard>
          ))}
        </SkillList>
      </SkillsContainer>
      <Footer />
    </>
  );
};

export default Skills;

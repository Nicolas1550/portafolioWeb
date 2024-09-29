"use client"
import React, { useState, useEffect } from "react";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import Spinner from "./components/spinner/spinner";

export default function Home() {
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
      <Header />
      <Projects />
      <Experience />
      <Footer />
    </>
  );
}

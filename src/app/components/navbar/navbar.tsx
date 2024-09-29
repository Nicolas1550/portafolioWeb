"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink, scroller } from "react-scroll";
import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavLink as StyledNavLink,
  Dropdown,
  DropdownButton,
  DropdownContent,
  MobileMenuButton,
  MobileMenu,
} from "./navbarStyles";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (section: string) => {
    if (window.location.pathname === "/") {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 1000,
        offset: -70,
      });
    } else {
      window.location.href = `/?scrollTo=${section}`;
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTo = urlParams.get("scrollTo");
    if (scrollTo) {
      scroller.scrollTo(scrollTo, {
        smooth: true,
        duration: 1000,
        offset: -70,
      });
    }
  }, []);

  return (
    <NavbarContainer $isScrolled={isScrolled}>
      <Logo href="/">Nicolás Luciuk</Logo>
      <NavLinks>
        {/* Scroll entre secciones de la misma página */}
        <li>
          <StyledNavLink
            as="span"
            onClick={() => handleScrollToSection("about")}
          >
            Sobre Mí
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            as="span"
            onClick={() => handleScrollToSection("projects")}
          >
            Proyectos
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            as="span"
            onClick={() => handleScrollToSection("experience")}
          >
            Experiencia
          </StyledNavLink>
        </li>
        {/* Navegación hacia otras páginas */}
        <Dropdown>
          <DropdownButton onClick={toggleDropdown}>Más</DropdownButton>
          <DropdownContent $isDropdownOpen={isDropdownOpen}>
            <li>
              <Link href="/skills" passHref>
                <StyledNavLink as="span">Habilidades</StyledNavLink>
              </Link>
            </li>
            <li>
              <Link href="/certifications" passHref>
                <StyledNavLink as="span">Certificaciones</StyledNavLink>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <StyledNavLink as="span">Contacto</StyledNavLink>
              </Link>
            </li>
          </DropdownContent>
        </Dropdown>
      </NavLinks>

      {/* Menú móvil */}
      <MobileMenuButton $isOpen={isOpen} onClick={toggleMenu}>
      </MobileMenuButton>

      <MobileMenu $isOpen={isOpen}>
        <li>
          <StyledNavLink
            as="span"
            onClick={() => {
              handleScrollToSection("about");
              toggleMenu();
            }}
          >
            Sobre Mí
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            as="span"
            onClick={() => {
              handleScrollToSection("projects");
              toggleMenu();
            }}
          >
            Proyectos
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            as="span"
            onClick={() => {
              handleScrollToSection("experience");
              toggleMenu();
            }}
          >
            Experiencia
          </StyledNavLink>
        </li>
        <li>
          <Link href="/skills" passHref>
            <StyledNavLink as="span" onClick={toggleMenu}>
              Habilidades
            </StyledNavLink>
          </Link>
        </li>
        <li>
          <Link href="/certifications" passHref>
            <StyledNavLink as="span" onClick={toggleMenu}>
              Certificaciones
            </StyledNavLink>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <StyledNavLink as="span" onClick={toggleMenu}>
              Contacto
            </StyledNavLink>
          </Link>
        </li>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;

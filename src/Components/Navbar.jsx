import React, { useEffect, useState } from "react";
import "../App.css";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import Logo from "../Asset/Logo.jpg";

function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveLink(section.id);
        }
      });

      const navbar = document.querySelector(".Navbar");
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add("sticky", "scrolled");
        } else {
          navbar.classList.remove("sticky", "scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`Navbar ${darkMode ? "dark" : ""}`}>
      <a href="#" className="Title">
        <img src={Logo} alt="Logo" width={60}></img>
      </a>

      <div className="Navbarlink">
        <a
          className={activeLink === "home" ? "active" : ""}
          onClick={() => {
            scrollToSection("home");
            handleSetActiveLink("home");
          }}
        >
          Home
        </a>
        <a
          className={activeLink === "about" ? "active" : ""}
          onClick={() => {
            scrollToSection("about");
            handleSetActiveLink("about");
          }}
        >
          About
        </a>
        <a
          className={activeLink === "project" ? "active" : ""}
          onClick={() => {
            scrollToSection("project");
            handleSetActiveLink("project");
          }}
        >
          Project
        </a>
        <a
          className={activeLink === "contact" ? "active" : ""}
          onClick={() => {
            scrollToSection("contact");
            handleSetActiveLink("contact");
          }}
        >
          Contact
        </a>
      </div>
      <div
        className={`navbar ${darkMode ? "active" : ""}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <IoSunny className="luce" />
        ) : (
          <IoMoonOutline className="buio" />
        )}
      </div>
    </div>
  );
}

export default Navbar;

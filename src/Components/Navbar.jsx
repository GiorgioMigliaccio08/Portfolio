import React, { useEffect, useState } from "react";
import "../App.css";
import { IoMoonOutline } from "react-icons/io5";
import Logo from "../Asset/Logo.jpg";

function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
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

  return (
    <div className="Navbar">
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
      <div className="darkMode">
        <IoMoonOutline />
      </div>
    </div>
  );
}

export default Navbar;

import React, { useEffect } from "react";
import "../App.css";
import { IoMoonOutline } from "react-icons/io5";

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".Navbar");
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Navbar">
      <a href="#" className="Title">
        Giorgio.
      </a>
      <div className="Navbarlink">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="darkMode">
        <IoMoonOutline />
      </div>
    </div>
  );
}

export default Navbar;

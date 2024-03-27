import React from "react";
import "../App.css";
import { IoMoonOutline } from "react-icons/io5";

const isActive = true;
function Navbar() {
  return (
    <div className="Navbar">
      <a href="#" className="Title">
        Giorgio.
      </a>
      <div className="Navbarlink">
        <a href="#home" className={isActive ? "active" : ""}>
          Home
        </a>
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

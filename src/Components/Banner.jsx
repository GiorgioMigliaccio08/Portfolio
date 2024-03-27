import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

import MyFoto from "../Asset/MyFoto.jpg";

const works = [
  { icon: <FaLaptopCode />, title: "Full-Stack Developer" },
  { icon: <FaCode />, title: "Front-End Developer" },
  { icon: <FaCode />, title: "Back-End Developer" },
];

function Banner() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((rotation) => (rotation + 1) % works.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="banner">
      <div className="banner-content">
        <h3>Hello , I am</h3>
        <h1>Giorgio Migliaccio</h1>
        <p>
          Include popular icons in your React projects easily ,fidksksk
          <br />
          ES6 imports that allows you to include that your project is using.
        </p>
        <div className="social">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
        </div>
        <a href="#" className="btn">
          {" "}
          Dowload CV
        </a>
      </div>

      <div className="work-container">
        <div className="work-box">
          {works.map((work, index) => (
            <div
              className="work"
              key={index}
              style={{ "--i": (index + rotation) % works.length }}
            >
              {work.icon}
              <h3>{work.title}</h3>
            </div>
          ))}
          <div className="circle"></div>
        </div>
        <div className="overlay"></div>
      </div>
      <div className="banner-img">
        <img src={MyFoto} alt="Foto Profilo"></img>
      </div>
    </section>
  );
}

export default Banner;

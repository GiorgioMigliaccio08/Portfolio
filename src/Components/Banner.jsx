import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
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
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="banner" id="home">
      <div className="banner-content">
        <h3>Hello , I am</h3>
        <h1>Giorgio Migliaccio</h1>
        <p>
          Include popular icons in your React projects easily ,fidksksk
          <br />
          ES6 imports that allows you to include that your project is using.
        </p>
        <div className="social">
          <a href="https://www.instagram.com/giorgiomigliaccio88?igsh=MXU3bmhqYXBoZWJ1OQ%3D%3D&utm_source=qr">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/giorgio-migliaccio-full-stack-developer/">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/GiorgioMigliaccio08">
            <LuGithub />
          </a>
          <a href="https://www.facebook.com/Giorgiomigliaccio88">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
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

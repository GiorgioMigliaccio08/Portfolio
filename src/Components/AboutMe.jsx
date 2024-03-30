import React from "react";
import Foto from "../Asset/Profilo.jpg";

import { FaLaptopCode } from "react-icons/fa";
import { HiPaintBrush } from "react-icons/hi2";

function AboutMe() {
  return (
    <section id="about">
      <div className="about-me">
        <div className="about-img">
          <img src={Foto} alt="Foto Profilo"></img>
          <span className="circle-spin"></span>
        </div>

        <div class="about-content">
          <h2 class="heading">
            About <span>Me</span>
          </h2>
          <h3>Hi, I'm Here To Help Your Next Project! </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            odio incidunt! Ipsam hic molestias ad voluptas doloribus ratione
            animi alias dicta quo.
          </p>
        </div>
      </div>

      <div className="servizi">
        <h2 class="heading">
          My<span> Servives</span>
        </h2>
        <div className="services-container">
          <div className="services-box">
            <FaLaptopCode className="icon-servizi" />
            <h3>Front-End Developer</h3>
            <p>
              Al contrario di quanto si pensi, Lorem Ipsum non è semplicemente
              una sequenza casuale AC semplicemente una sequenza casuale
            </p>
            <a href="#" className="btn-servizi">
              {" "}
              Read More
            </a>
          </div>
          <div className="services-box">
            <FaLaptopCode className="icon-servizi" />
            <h3>Back-End Developer</h3>
            <p>
              Al contrario di quanto si pensi, Lorem Ipsum non è semplicemente
              una sequenza casuale AC semplicemente una sequenza casuale
            </p>
            <a href="#" className="btn-servizi">
              {" "}
              Read More
            </a>
          </div>
          <div className="services-box">
            <HiPaintBrush className="icon-servizi" />
            <h3>Grafic Designer</h3>
            <p>
              Al contrario di quanto si pensi, Lorem Ipsum non è semplicemente
              una sequenza casuale AC semplicemente una sequenza casuale
            </p>
            <a href="#" className="btn-servizi">
              {" "}
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

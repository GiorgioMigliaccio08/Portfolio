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
          <h3>FULL STACK DEVELOPER </h3>
          <p>
            Ciao sono Giorgio Migliaccio e vivo a Prizzi un piccolo paesino al
            centro della Sicilia .<br /> Ho da sempre avuto la passione per
            l'informatica e di come essa fosse parte integrante
            <br /> della nostra vita quotidiana. Passo le mie giornate a
            programmare pagine web interattive,
            <br /> e sono alla ricerca di nuove opportunità lavorative per
            accresce il mio bagaglio culturale
            <br /> in ambito informatico.
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

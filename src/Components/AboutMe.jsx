import React from "react";
import Foto from "../Asset/Profilo.jpg";
import { Row } from "react-bootstrap";
import html from "../Asset/html.png";
import css from "../Asset/css.jpg";
import sass from "../Asset/sass.jpg";
import java from "../Asset/java.jpg";
import react from "../Asset/react.jpg";
import javascript from "../Asset/javascript.jpg";
import php from "../Asset/php.png";
import C from "../Asset/C.png";
import sql from "../Asset/sql.jpg";
import github from "../Asset/github.jpg";
import typescript from "../Asset/typescript.png";
import bootstrap from "../Asset/bootstrap.jpg";
import pgadmin from "../Asset/pgadmin.png";
import spring from "../Asset/spring.png";

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
      <div className="Skills">
        <h2 className="heading">
          My<span> Skills</span>
        </h2>
        <Row className="skills-row">
          <img src={html} alt="HTML" className="centered-image skill-image" />
          <img src={css} alt="CSS" className="centered-image skill-image" />
          <img
            src={bootstrap}
            alt="bootstrap"
            className="centered-image skill-image"
          />
          <img src={sass} alt="Sass" className="centered-image skill-image" />
          <img src={react} alt="React" className="centered-image skill-image" />
          <img
            src={typescript}
            alt="typescript"
            className="centered-image skill-image"
          />
          <img
            src={javascript}
            alt="JavaScript"
            className="centered-image skill-image"
          />
          <img src={php} alt="php" className="centered-image skill-image" />
          <img src={C} alt="C" className="centered-image skill-image" />
          <img src={java} alt="Java" className="centered-image skill-image" />

          <img
            src={spring}
            alt="spring"
            className="centered-image skill-image"
          />

          <img src={sql} alt="SQL" className="centered-image skill-image" />
          <img
            src={pgadmin}
            alt="pgadmin"
            className="centered-image skill-image"
          />
          <img
            src={github}
            alt="GitHub"
            className="centered-image skill-image"
          />
        </Row>
      </div>
    </section>
  );
}

export default AboutMe;

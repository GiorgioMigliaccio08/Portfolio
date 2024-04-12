import React from "react";
import ProgettoUno from "../Asset/Heart-Archive-Hub.jpg";
import ProgettoDue from "../Asset/Mercedes-Project.jpg";
import ProgettoTre from "../Asset/Netflix.png";
import ProgettoQuattro from "../Asset/Medium.jpg";
import { FaLink, FaRegFileCode } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Project() {
  return (
    <section className="project" id="project">
      <h2 class="heading-progect">
        Ultimi <span>Progetti</span>
      </h2>
      <div className="progetti-conteiner">
        <div className="progetti-box">
          <img src={ProgettoUno} alt="Foto Progetto"></img>
          <div className="progetti-layer">
            <h4>Heart Archive Hub</h4>
            <p>Al contrario di quanto si pensi,</p>
            <div>
              <a href="https://github.com/GiorgioMigliaccio08/Capston_Front-End">
                <FaRegFileCode className="icona-progetti" />
              </a>
              <a href="#">
                <FiExternalLink className="icona-progetti" />
              </a>
            </div>
          </div>
        </div>
        <div className="progetti-box">
          <img src={ProgettoDue} alt="Foto Progetto"></img>
          <div className="progetti-layer">
            <h4>Mercedes Store</h4>
            <p>Al contrario di quanto si pensi,</p>
            <div>
              <a href="https://github.com/GiorgioMigliaccio08/Mercedes-Store">
                <FaRegFileCode className="icona-progetti" />
              </a>
              <a href="#">
                <FiExternalLink className="icona-progetti" />
              </a>
            </div>
          </div>
        </div>
        <div className="progetti-box">
          <img src={ProgettoTre} alt="Foto Progetto"></img>
          <div className="progetti-layer">
            <h4>Netflix Clone</h4>
            <p>Al contrario di quanto si pensi,</p>
            <div>
              <a href="https://github.com/GiorgioMigliaccio08/U3-W2-L3-FS0423IT-Navigazione-per-Neftlix-React">
                <FaRegFileCode className="icona-progetti" />
              </a>
              <a href="#">
                <FiExternalLink className="icona-progetti" />
              </a>
            </div>
          </div>
        </div>
        <div className="progetti-box">
          <img src={ProgettoQuattro} alt="Foto Progetto"></img>
          <div className="progetti-layer">
            <h4>Medium Clone</h4>
            <p>Al contrario di quanto si pensi,</p>
            <div>
              <a href="https://github.com/GiorgioMigliaccio08/U2-W1-L5-FS0423IT-Weekly-Project-Medium-Page">
                <FaRegFileCode className="icona-progetti" />
              </a>
              <a href="#">
                <FiExternalLink className="icona-progetti" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

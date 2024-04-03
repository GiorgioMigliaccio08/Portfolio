import React from "react";
import ProgettoUno from "../Asset/Heart Archive Hub.jpg";
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
              <a href="#">
                <FaRegFileCode className="icona-progetti" />
              </a>
              <a href="#">
                <FiExternalLink className="icona-progetti" />
              </a>
            </div>
          </div>
        </div>
        <div className="progetti-box">
          <img src={ProgettoUno} alt="Foto Progetto"></img>
          <div className="progetti-layer">
            <h4>Heart Archive Hub</h4>
            <p>Al contrario di quanto si pensi,</p>
            <div>
              <a href="#">
                <FaRegFileCode className="icona-progetti" />
              </a>
              <a href="#">
                <FiExternalLink className="icona-progetti" />
              </a>
            </div>
          </div>
        </div>
        <div className="progetti-box">
          <img src={ProgettoUno} alt="Foto Progetto"></img>
          <div className="progetti-layer">
            <h4>Heart Archive Hub</h4>
            <p>Al contrario di quanto si pensi,</p>
            <div>
              <a href="#">
                <FaRegFileCode className="icona-progetti" />
              </a>
              <a href="#">
                <FiExternalLink className="icona-progetti" />
              </a>
            </div>
          </div>
        </div>
        <div className="progetti-box">
          <img src={ProgettoUno} alt="Foto Progetto"></img>
          <div className="progetti-layer">
            <h4>Heart Archive Hub</h4>
            <p>Al contrario di quanto si pensi,</p>
            <div>
              <a href="#">
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

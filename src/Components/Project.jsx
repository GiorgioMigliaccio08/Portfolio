import React from "react";
import ProgettoUno from "../Asset/Heart-Archive-Hub.jpg";
import ProgettoDue from "../Asset/Mercedes-Project.jpg";
import ProgettoTre from "../Asset/Netflix.png";
import ProgettoQuattro from "../Asset/Medium.jpg";
import ProgettoCinque from "../Asset/EdiliziaPerfetta.jpg";
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
          <img src={ProgettoCinque} alt="Foto Progetto"></img>
          <div className="progetti-layer">
            <h4>Supernova </h4>
            <p>
              Sito Web per una azienda di costruzioni edili in cui ho voluto
              riprendere vecchi linguaggi di programmazione come Html Css
              Javascript ottenendo un fantistico sito web in pixel perfect.
            </p>
            <div>
              <a href="https://github.com/GiorgioMigliaccio08/Edilizia_Perfetta">
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
            <p>
              Il mio primo progetto Full Stack , che rappresenta un vero e
              proprio Archivio Medico Personale dove poter tener traccia delle
              prenotazioni future e poter archiviare le tue visite mediche
              effettuate.
            </p>
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
            <p>
              Questo sito rappresenta una vera e propria copia del sito
              ufficiale Mercedes rielaborato secondo i miei gusti e preferenze
              innovative.
            </p>
            <div>
              <a href="https://github.com/GiorgioMigliaccio08/Mercedes-Store">
                <FaRegFileCode className="icona-progetti" />
              </a>
            </div>
          </div>
        </div>
        <div className="progetti-box">
          <img src={ProgettoTre} alt="Foto Progetto"></img>
          <div className="progetti-layer">
            <h4>Netflix Clone</h4>
            <p>
              Questo sito rappresenta una vera e propria copia del sito
              ufficiale Netflix rielaborato durante il mio corso Front-End con
              EPICODE.
            </p>
            <div>
              <a href="https://github.com/GiorgioMigliaccio08/U3-W2-L3-FS0423IT-Navigazione-per-Neftlix-React">
                <FaRegFileCode className="icona-progetti" />
              </a>
            </div>
          </div>
        </div>
        <div className="progetti-box">
          <img src={ProgettoQuattro} alt="Foto Progetto"></img>
          <div className="progetti-layer">
            <h4>Medium Clone</h4>
            <p>
              Questo sito rappresenta una vera e propria copia del sito
              ufficiale Netflix rielaborato durante il mio corso Front-End con
              EPICODE.
            </p>
            <div>
              <a href="https://github.com/GiorgioMigliaccio08/U2-W1-L5-FS0423IT-Weekly-Project-Medium-Page">
                <FaRegFileCode className="icona-progetti" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;

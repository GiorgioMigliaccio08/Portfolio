import React from "react";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <section className="footer">
      <div className="background">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100%"
          height="200%"
          viewBox="0 0 1600 900"
        >
          <defs>
            <path
              id="wave"
              fill="#023E8A"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
              s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use href="#wave" opacity=".4">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use href="#wave" opacity=".6">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="6s"
                calcMode="spline"
                values="-270 230;243 220;-270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use href="#wave" opacity=".9">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="4s"
                calcMode="spline"
                values="0 230;-140 200;0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>
      <div className="FooterWrite">
        <div className="Socials">
          <a href="https://www.instagram.com/giorgiomigliaccio88?igsh=MXU3bmhqYXBoZWJ1OQ%3D%3D&utm_source=qr">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/giorgio-migliaccio-full-stack-developer/">
            <FaLinkedinIn />
          </a>
          <a href="https://www.facebook.com/Giorgiomigliaccio88">
            <FaFacebookF />
          </a>
        </div>

        <p className="legal">Giorgio Migliaccio © 2024</p>
      </div>
    </section>
  );
}

export default Footer;

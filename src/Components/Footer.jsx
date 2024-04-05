import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <section>
      <div className="background">
        <svg></svg>
      </div>
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
        <a href="#">
          <FaTwitter />
        </a>
      </div>

      <p class="legal">© 2024 All rights reserved</p>
    </section>
  );
}

export default Footer;

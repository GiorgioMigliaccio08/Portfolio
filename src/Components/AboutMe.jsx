import React from "react";
import MyFoto from "../Asset/MyFoto.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about">
      <div className="about-img">
        <img src={MyFoto} alt="Foto Profilo"></img>
      </div>
      <div class="about-content">
        <h2 class="heading">
          About <span>Me</span>
        </h2>
        <h3>Hi, I'm Here To Help Your Next Project! </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          odio incidunt! Ipsam hic molestias ad voluptas doloribus ratione animi
          alias dicta quo.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;

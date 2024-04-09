import React from "react";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 class="heading">
        Contact <span>Me</span>
      </h2>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Nome Completo" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Cellulare" />
          <input type="text" placeholder="Descrizione" />
        </div>
        <textarea
          name=""
          id=""
          cols={20}
          rows={10}
          placeholder="Il tuo messaggio"
        ></textarea>
      </form>
      <imput type="submit" value="Invia" className="btn-contact">
        Invia!
      </imput>
    </section>
  );
}
export default Contact;

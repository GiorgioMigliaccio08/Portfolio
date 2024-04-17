import React, { useState } from "react";
import Swal from "sweetalert2";

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    Swal.fire({
      title: "Ottimo",
      text: "Massaggio Inviato!!",
      icon: "success",
    });

    setFormSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="fullName"
            placeholder="Nome Completo"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="input-box">
          <input type="tel" name="phone" placeholder="Cellulare" required />
          <input
            type="text"
            name="description"
            placeholder="Descrizione"
            required
          />
        </div>
        <textarea
          name="message"
          cols={20}
          rows={10}
          placeholder="Il tuo messaggio"
          required
        ></textarea>
        <button type="submit" className="btn-contact">
          Invia
        </button>
      </form>
    </section>
  );
}

export default Contact;

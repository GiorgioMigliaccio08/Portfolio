import React from "react";
import emailjs from "emailjs-com";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = "TUO_USER_ID";

    emailjs.sendForm("SERVICE_ID", "TEMPLATE_ID", e.target, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
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

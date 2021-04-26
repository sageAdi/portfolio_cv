import React from "react";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="container padding" id="contact">
      <div className="container-fluid">
        <p className="heading">Contact</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;

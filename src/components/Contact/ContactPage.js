import React from "react";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="contact padding">
      <div className="container" id="contact">
        <div className="container-fluid">
          <p className="heading2">Get In Touch</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

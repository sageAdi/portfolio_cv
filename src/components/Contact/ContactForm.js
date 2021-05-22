import React from "react";

const ContactForm = () => {
  return (
    <div className="container col-sm-12 col-md-6">
      <form action="https://formspree.io/f/xlewleod" method="POST">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            name="name"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="comment"
            placeholder="Write your Message..."
            name="message"
            style={{ height: "100px" }}
          ></textarea>
        </div>
        <button type="submit" className="btn submit-btn col-sm-12 col-md-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

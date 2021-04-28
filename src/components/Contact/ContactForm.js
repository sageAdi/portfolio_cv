import React from "react";

const ContactForm = () => {
  return (
    <div className="container col-sm-12 col-md-6">
      <form action="https://formspree.io/f/xlewleod" method="POST">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Name"
            name="name"
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            name="email"
          />
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="comment"
            placeholder="Write your Message..."
            name="message"
          ></textarea>
        </div>
        <button type="submit" class="btn submit-btn col-sm-12 col-md-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

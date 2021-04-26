import React from "react";

const ContactForm = () => {
  return (
    <div className="container w-50">
      <form>
        <div class="mb-3">
          <input type="text" class="form-control" id="name" placeholder="Name"/>
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="comment"
            placeholder="Write your Message..."
          ></textarea>
        </div>
        <button type="submit" class="btn submit-btn float-right">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

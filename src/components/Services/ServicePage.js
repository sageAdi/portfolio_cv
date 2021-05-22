import React from "react";
import ServiceCard from "./ServiceCard";
import frontend from "./resources/frontend.png";
import backend from "./resources/backend.jpg";
import design from "./resources/design.png";

const ServicePage = () => {
  return (
    <div id="services">
      <div className="container padding">
        <h2 className="heading2">What I do the best</h2>
        <div className="row justify-content-center align-items-center">
          <ServiceCard name="Front End" img={frontend} />
          <ServiceCard name="Backend End" img={backend} />
          <ServiceCard name="Responsive Design" img={design} />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;

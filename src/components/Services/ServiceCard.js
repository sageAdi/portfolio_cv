import React from "react";

const ServiceCard = ({ name, img }) => {
  return (
    <div className="card service-card">
      <img src={img} className="card-img-top service-card-img" alt={name} />
      <div className="card-body">
        <p className="card-text">{name}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

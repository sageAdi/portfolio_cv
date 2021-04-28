import React from "react";

const ServiceCard = ({ name, img }) => {
  return (
    <div class="card service-card rounded">
      <img src={img} class="card-img-top service-card-img" alt={name} />
      <div class="card-body">
        <p class="card-text">{name}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

import React from "react";

const ServiceCard = ({ service, Icon }) => {
  return (
    <div className="card service-card">
      <div className="icon-head">
        <Icon />
      </div>
      <div className="card-body icon-body">
        <p className="heading4">{service}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

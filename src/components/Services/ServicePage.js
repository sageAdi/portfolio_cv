import React from "react";
import ServiceCard from "./ServiceCard";
// import Code from "../../asset/code.js";
// import Cogs from "../../asset/cogs.js";
// import Pen from "../../asset/pen.js";
import CodeTyping from "../../asset/codeTyping/code_typing";
import Setting from "../../asset/setting/seeting"
import Responsive from "../../asset/responsive/responsive";
import "./service.css";

const ServicePage = () => {
  return (
    <div id="services">
      <div className="container padding">
        <h2 className="heading2">What I do the best</h2>
        <div className="row justify-content-around align-items-center">
          <ServiceCard service="Frontend"  Icon={CodeTyping} />
          <ServiceCard service="Backend" Icon={Setting} />
          <ServiceCard service="Responsive Design" last="" Icon={Responsive} />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;

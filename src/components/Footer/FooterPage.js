import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

const FooterPage = () => {
  return (
    <div className="footer">
      <div className="container h-100">
        <div className="container-fluid h-100 row align-items-center m-0 p-0">
          <div className="col-9 p-0 m-0">
            <p className="p-0 m-0">&#169; Copyright 2021 | Aditya Maurya</p>
          </div>
          <div className="col-3 social-media p-0 m-0">
            <FontAwesomeIcon icon={faFacebookF} size="lg" className="icon" />
            <FontAwesomeIcon icon={faInstagram} size="lg" className="icon" />
            <FontAwesomeIcon icon={faGithub} size="lg" className="icon" />
            <FontAwesomeIcon icon={faGooglePlus} size="lg" className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;

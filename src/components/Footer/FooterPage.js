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
        <div className="container-fluid h-100 row align-items-center">
          <div className="col-9 p-0 m-0">
            <p className="p-0 m-0">&#169; Copyright 2021 | Aditya Maurya</p>
          </div>
          <div className="col-3 social-media">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faGooglePlus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css"

const FooterPage = () => {
  return (
    <div className="footer">
      <div className="container h-100">
        <div className="container-fluid h-100">
          <div className="row footer-container">
            <div className="col-sm-12 col-md-9 p-0 m-0">
              Copyright &#169; 2021 | Aditya Maurya
            </div>
            <div className="col-sm-12 col-md-3 social-media p-0 m-0">
              <a href="https://www.facebook.com/sageAdi007">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  size="lg"
                  className="icon"
                />
              </a>
              <a href="https://www.instagram.com/__sageadi__/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  className="icon"
                />
              </a>
              <a href="https://github.com/sageAdi">
                <FontAwesomeIcon icon={faGithub} size="lg" className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/sageadi/">
                <FontAwesomeIcon icon={faLinkedin} size="lg" className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;

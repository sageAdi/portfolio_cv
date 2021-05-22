import React from "react";
import Typed from "react-typed";
import profile from "../../profile.png";
import resume from "../../Resume.pdf";
import styled from "styled-components";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="container">
        <div className="container-fluid row align-content-center">
          <div className="col-sm-12 col-md-6 text-white align-self-center header-text-container">
            <p className="heading1">
              Hi, I’m <span className="blue-color">Aditya</span>. <br />I
              develop <span className="green-color">awesome</span> websites.
            </p>
            <Typed
              strings={[
                "Frontend Developer",
                "Backend Developer",
                "Responsive Designer",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
              className="work-text"
            />
            <br />
            <a href={resume} download className="btn cv-btn">
              Download CV
            </a>
          </div>
          <div className="col-sm-12 col-md-6 profile-container p-0">
            <img
              src={profile}
              alt="profile"
              className="profile-img img-fluid float-end"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const BlueText = styled.span`
  
`

export default Header;

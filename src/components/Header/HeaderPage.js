import React from "react";
import Typed from "react-typed";
import profile from "../../profile.png";
import resume from "../../Resume.pdf";
const Header = () => {
  return (
    <div className="header" id="header">
      <div className="container h-100">
        <div className="container-fluid row h-100 align-content-center">
          <div className="col-sm-12 col-md-6 text-white align-self-center">
            <p className="heading1">
              Hi there!, I’m <span className="blue-color">Aditya</span>. <br />I
              develop awesome websites.
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
              GET CV
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

export default Header;

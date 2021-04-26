import React from "react";
import Typed from "react-typed";
import profile from "../../Profile-removebg-preview.png";
import resume from "../../Resume.pdf"
const Header = () => {
  return (
    <div className="header" id="header">
      <div className="container h-100">
        <div className="container-fluid row h-100">
          <div className="col-3 text-white align-self-center ">
            <p className="welcome-text">Hi there!, I’m</p>
            <p className="header-name">
              Aditya
              <br />
              Maurya
            </p>
            <Typed
              strings={["Frontend Developer", "Full Stack Developer"]}
              typeSpeed={60}
              backSpeed={40}
              loop
              className="work-text"
            />
            <a href={resume} download className="btn cv-btn">
              GET CV
            </a>
          </div>
          <div className="col-9 profile-container p-0">
            <img src={profile} alt="profile" className="profile-img img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

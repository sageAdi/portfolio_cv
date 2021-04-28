import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="about padding" id="about">
      <div className="container">
        <div className="container-fluid">
          <div className="heading2">A little about me</div>
          <div className="row">
            <div className="col-md-5 para">
              <span className="heading4">Hello,</span> <br />
              I’m a hard working and passionate developer with a keen eye for
              detail, and a determination to deliver the very highest quality. I
              take great pride in my work, and I always try to better myself
              with every project I work on, I give my full determination in
              making it best amongst all.
            </div>
            <div className="col-md-6 align-self-end">
              <Skills name="HTML" value={90} />
              <Skills name="CSS" value={85} />
              <Skills name="JavaScript" value={80} />
              <Skills name="React Js" value={85} />
              <Skills name="Node Js" value={80} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

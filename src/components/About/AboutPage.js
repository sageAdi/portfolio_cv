import React, { useState, useRef, useEffect } from "react";
import Skills from "./SkillsTest";
import styled, { keyframes } from "styled-components";

const About = () => {
  const [show, setShow] = useState(false);
  const ourRef = useRef(null);
  useEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;
    const div1Pos = topPos(ourRef.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPos - 100) {
        console.log("useEffect on the screen " + show);
        setShow(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [show]);

  return (
    <div className="about padding" id="about">
      <div className="container">
        <div className="container-fluid">
          <div className="heading2">A little about me</div>
          <div className="row">
            <div className="col-md-4 para">
              <span className="heading4">Hello,</span> <br />
              I’m a hard-working and passionate developer with a keen eye for
              detail, and a determination to deliver the very highest quality. I
              take great pride in my work, and I always try to better myself
              with every project I work on. I give my full determination in
              making it best amongst all.
            </div>
            <div className="col-md skill-section" ref={ourRef}>
              <div className="skill-subsection">
                <div className="card text-center tools">
                  <div className="card-body p-0">
                    <Skills name="HTML" value={90} isDisplay={show} />
                    <Skills name="CSS" value={85} isDisplay={show} />
                    <Skills name="JavaScript" value={80} isDisplay={show} />
                    <Skills name="React Js" value={85} isDisplay={show} />
                  </div>
                  <ProgressBottom
                    isDisplay={show}
                    className="shadow card-footer p-0"
                  >
                    Frontend
                  </ProgressBottom>
                </div>
              </div>
              <div className="skill-subsection">
                <div className="card text-center tools">
                  <div className="card-body p-0">
                    <Skills name="Node Js" value={80} isDisplay={show} />
                  </div>
                  <ProgressBottom
                    isDisplay={show}
                    className="shadow card-footer p-0"
                  >
                    Backend
                  </ProgressBottom>
                </div>
              </div>
              <div className="skill-subsection">
                <div className="card text-center tools">
                  <div className="card-body p-0">
                    <Skills name="Figma" value={70} isDisplay={show} />
                    <Skills name="Bootstrap" value={90} isDisplay={show} />
                  </div>
                  <ProgressBottom
                    isDisplay={show}
                    className="shadow card-footer p-0"
                  >
                    Design
                  </ProgressBottom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const topToBottom = keyframes`
  0%{
    top:-100%;
  }
  100%{
    top: 0;
  }
`;

const ProgressBottom = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  height: 20px;
  border-radius: 15px !important;
  background-color: var(--light-blue);
  display: ${({ isDisplay }) => (isDisplay ? "block" : "none")};
  animation: ${({ isDisplay }) => (isDisplay ? topToBottom : "none")} 1s;
  text-align: center;
  position: relative;
`;

export default About;

import React from "react";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const SkillsTest = ({ name, value, isDisplay }) => {
  const [newHeight, setNewHeight] = useState("");
  useEffect(() => {
    if (isDisplay === true) {
      setNewHeight(`${value}%`);
    }
  }, [isDisplay, value]);

  const widthAnim = keyframes`
    from{
        width: 0%;
        opacity: 0;
    }
    to{
        width: ${value};
        opacity: 1;
    }
`;
  const rightToLeft = keyframes`
  from{
    right:-100%;
  }
  to{
    right:0px
  }
`;
  const opacityChange = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;
  const ProgressWrapper = styled.div`
    display: ${({ show }) => (show ? "inline-block" : "none")};
    border-radius: 15px;
    height: 25px;
    width: 350px;
    margin-top: .5rem;
    overflow: hidden;
    position: relative;
    background: rgba(233, 236, 239);
    box-shadow: 4px 4px 13px 0 rgba(255, 255, 255, 1),
      -4px -4px 7px 0 rgba(0, 0, 0, 0.2), -6px -6px 36px 0 rgba(0, 0, 0, 0.1) !important;
    /* backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
    border: 1px solid rgba(255, 255, 255, 0.18); */
    animation-name: ${({ show }) => (show ? rightToLeft : noAnim)};
    animation-duration: ${({ show }) => (show ? "1s" : "0s")};
    /* transform: rotateZ(-90deg); */
    @media (max-width: 575.98px) {
      /* transform: rotateZ(-90deg); */
      animation-name: ${({ show }) => (show ? rightToLeft : noAnim)};
      animation-duration: ${({ show }) => (show ? "1s" : "0s")};
    }
  `;

  const Vertical = styled.div`
    display: ${({ show }) => (show ? "inline-block" : "none")};
    height: 25px;
    width: 250px;
    margin-top: 150px;
    transform: rotateZ(-90deg);
    overflow: hidden;
    animation-name: ${({ show }) => (show ? heightAnim : noAnim)};
    animation-duration: ${({ show }) => (show ? "1s" : "0s")};
    @media (max-width: 575.98px) {
      width: 100%;
      height: 20px;
      transform: rotate(180deg);
      margin: 0.5rem;
      animation-name: ${({ show }) => (show ? widthAnim : noAnim)};
      animation-duration: ${({ show }) => (show ? "1s" : "0s")};
    }
  `;
  const ProgressBar = styled.div`
    background: rgba(101, 175, 255, 0.85);
    border-radius: 00px 15px 15px 00px;
    height: 100%;
    opacity: 0;
    animation: ${widthAnim} 1s forwards 1s;
    position: relative;
  `;
  const ProgressText = styled.p`
    color: "#000";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    animation: ${opacityChange} 3s forwards;
  `;
  return (
    <ProgressWrapper show={isDisplay}>
      <ProgressBar
        className="progress-bar"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: `${newHeight}` }}
      >
        <ProgressText>{name}</ProgressText>
      </ProgressBar>
    </ProgressWrapper>
  );
};

const heightAnim = keyframes`
    0%{
      height: 0px;
    }
    100%{
      height: 100%;
    }
  `;
const widthAnim = keyframes`
    0%{
      width: 0px;
    }
    100%{
      width: 100%;
    }
  `;
const noAnim = keyframes`
    0%{
      height: 0px;
    }
    100%{
      height: 100%;
    }
  `;

export default SkillsTest;

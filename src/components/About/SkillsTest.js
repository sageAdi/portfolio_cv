import React from "react";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const SkillsTest = ({ name, value, isDisplay }) => {
  const [newHeight, setNewHeight] = useState(0);
  useEffect(() => {
    if (isDisplay === true) {
      setNewHeight(value);
    }
  }, [isDisplay, value]);
  useEffect(() => {}, [isDisplay, newHeight]);
  return (
    <Vertical className="progress inverted-shadow" show={isDisplay}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow="60"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ height: `${newHeight}%` }}
      >
        <span className="skill-name">{name}</span>
      </div>
    </Vertical>
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
const noAnim = keyframes`
    0%{
      height: 0px;
    }
    100%{
      height: 0px;
    }
  `;
const Vertical = styled.div`
  display: ${({ show }) => (show ? "inline-block" : "none")};
  width: 20px;
  height: 100%;
  transform: rotate(-180deg);
  animation-name: ${({ show }) => (show ? heightAnim : noAnim)};
  animation-duration: ${({ show }) => (show ? "1s" : "0s")};
`;

export default SkillsTest;

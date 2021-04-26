import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";

const SkillsSection = ({ value, img, name }) => {
  return (
    <div className="outer-circle">
      <div className="skill-container">
        <img src={img} alt="html5" className="skill-img" />
        <div>
          <strong>{name}</strong>
        </div>
      </div>
      {/* <AnimatedProgressProvider
        valueStart={0}
        valueEnd={value}
        duration={1.5}
        easingFunction={easeQuadInOut}
      >
        {(val) => {
          return (
            <CircularProgressbarWithChildren
              value={val}
              background
              styles={buildStyles({
                // Text size
                textSize: "16px",
                strokeLinecap: "butt",
                // How long animation takes to go from one percentage to another, in seconds
                // pathTransitionDuration: 1,
                // Can specify path transition in more detail, or remove it entirely
                pathTransition: "none",

                // Colors
                pathColor: "#65AFFF",
                textColor: "#f88",
                trailColor: "rgba(0,0,0,0)",
                backgroundColor: "#c7f0bd",
              })}
            >
              <div className="skill-container">
                <img src={img} alt="html5" className="skill-img" />
                <div>
                  <strong>{name}</strong>
                </div>
              </div>
            </CircularProgressbarWithChildren>
          );
        }}
      </AnimatedProgressProvider> */}
    </div>
  );
};

export default SkillsSection;

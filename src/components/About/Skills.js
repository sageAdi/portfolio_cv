import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Skills = ({ name, value }) => {
  const [newValue, setNewValue] = useState(0);
  setTimeout(() => {
    setNewValue(value);
  }, 1000);
  return (
    <div className="progress-wrapper">
      <span>{name}</span>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${newValue}%` }}
          aria-valuenow={newValue}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default Skills;

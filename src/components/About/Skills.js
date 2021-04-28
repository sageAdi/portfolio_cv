import React from "react";

const Skills = ({ name ,value}) => {
  return (
    <div>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style={{ width: `${value}%` }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default Skills;

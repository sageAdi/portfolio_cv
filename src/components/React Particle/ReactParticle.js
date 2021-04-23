import React from "react";
import Particles from "react-particles-js";
const ReactParticle = () => {
  return (
    <Particles
      className="react-particle"
      params={{
        particles: {
          color: {
            value: "#c7f0bd",
          },
          line_linked: {
            color: {
              value: "#65AFFF",
            },
          },
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
        },
      }}
    />
  );
};

export default ReactParticle;

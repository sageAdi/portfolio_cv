import React from "react";
import SkillsSection from "./SkillsSection";
import html5 from "./HTML5.svg";
import css3 from "./CSS3.svg";
import git from "./git.svg";
import react from "./React.svg";
import js from "./JS.svg";

const Skills = () => {
  return (
    <div className="container padding">
      <div className="container-fluid">
        <p className="heading">Skills</p>
        <div className="d-flex">
          <SkillsSection value={80} img={html5} name="HTML5" />
          <SkillsSection value={80} img={css3} name="CSS3" />
          <SkillsSection value={80} img={js} name="JS" />
          <SkillsSection value={80} img={react} name="React" />
          <SkillsSection value={80} img={git} name="Git" />
        </div>
      </div>
    </div>
  );
};

export default Skills;

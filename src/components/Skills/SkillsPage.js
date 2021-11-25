import React from "react";
import SkillsSection from "./SkillsSection";
import html5 from "./resources/HTML5.svg";
import css3 from "./resources/CSS3.svg";
import git from "./resources/git.svg";
import react from "./resources/React.svg";
import js from "./resources/JS.svg";
import "./skill.css"

const Skills = () => {
  return (
    <div className="container padding" id="skills">
      <div className="container-fluid">
        <p className="heading">Skills</p>
        <div className="row justify-content-center">
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

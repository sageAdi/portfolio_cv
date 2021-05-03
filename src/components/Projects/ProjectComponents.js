import React from "react";

const ProjectComponents = ({ title, description, link, img }) => {
  return (
    <div className="card project-card align-items-center">
      <img src={img} alt="project" class="card-img-top" />
      <div className="overlay">
          <h5 className="card-title text-center heading5 blue-color">{title}</h5>
          <p className="card-text p-1">{description}</p>
          <a href={link} className="card-link">
            Github Repo
          </a>
        </div>
    </div>
  );
};

export default ProjectComponents;

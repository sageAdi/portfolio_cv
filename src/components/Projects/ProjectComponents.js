import React from "react";

const ProjectComponents = ({ title, description, link, img }) => {
  return (
    <div className="card project-card">
      <img src={img} alt="porject" class="card-img-top" />
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <div className="overlay">
          <p className="card-text p-2">{description}</p>
          <a href={link} className="card-link">
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponents;

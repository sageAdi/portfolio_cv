import React from "react";
import ProjectComponents from "./ProjectComponents";

const ProjectPage = () => {
  return (
    <div className="container padding">
      <div className="container-fluid">
        <p className="heading">Projects</p>
        <div className="d-flex justify-content-between">
          <ProjectComponents
            title="Complaint Management"
            description="An Android Application developed for managing the complaints in the college, registering new users with their enrollment number."
            link="https://github.com/sageAdi/CollageComplaintsRegister"
          />
          <ProjectComponents
            title="Resume Creator"
            description="An Android Application that takes the details from the user and saves them into pdf format."
            link="https://github.com/sageAdi/resume_creator"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

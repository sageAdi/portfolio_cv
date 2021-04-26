import React from "react";
import ProjectComponents from "./ProjectComponents";
import complaint from "./resources/complaint.png"
import resume from './resources/resume.jpg'

const ProjectPage = () => {
  return (
    <div className="container padding" id="project">
      <div className="container-fluid">
        <p className="heading">Projects</p>
        <div className="row justify-content-center">
          <ProjectComponents
            title="Complaint Management"
            description="An Android Application developed for managing the complaints in the college, registering new users with their enrollment number."
            link="https://github.com/sageAdi/CollageComplaintsRegister"
            img={complaint}
          />
          <ProjectComponents
            title="Resume Creator"
            description="An Android Application that takes the details from the user and saves them into pdf format."
            link="https://github.com/sageAdi/resume_creator"
            img={resume}
          />
          <ProjectComponents
            title="Complaint Management"
            description="An Android Application developed for managing the complaints in the college, registering new users with their enrollment number."
            link="https://github.com/sageAdi/CollageComplaintsRegister"
            img={complaint}
          />
          <ProjectComponents
            title="Resume Creator"
            description="An Android Application that takes the details from the user and saves them into pdf format."
            link="https://github.com/sageAdi/resume_creator"
            img={resume}
          />
          <ProjectComponents
            title="Complaint Management"
            description="An Android Application developed for managing the complaints in the college, registering new users with their enrollment number."
            link="https://github.com/sageAdi/CollageComplaintsRegister"
            img={complaint}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

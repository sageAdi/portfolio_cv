import React, { useRef, useEffect, useMemo } from "react";
import styled from "styled-components";
import VanillaTilt from "vanilla-tilt";

const ProjectComponents = ({ title, description, link, img, position }) => {
  const tilt = useRef(null);
  const options = useMemo(() => ({
    speed: 100,
    max: 5,
    glare: false,
    perspective: 1000,
  }));
  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);


  return (
    <ProjectCard value={position} className="card">
      <ProjectImage value={position} className="col-md-6" ref={tilt}>
        <img src={img} alt="project" />
      </ProjectImage>
      <ProjectBody value={position} className="col-md-6">
        <h5 className="card-title heading5">{title}</h5>
        <p className="para">{description}</p>
        <ProjectLink href={link}>Github Repo</ProjectLink>
      </ProjectBody>
    </ProjectCard>
  );
};
const ProjectCard = styled.div`
  display: flex;
  /* max-width: 700px; */
  margin-bottom: 1rem;
  padding: 1rem 0rem;
  /* border: 1px solid rgba(101, 175, 255, 0.2) !important; */
  /* background: rgba(255, 255, 255, 0.25) !important; */
  /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
  /* backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px !important;
  box-shadow: -4px -4px 13px 0 rgba(255, 255, 255, 1),
    4px 4px 7px 0 rgba(0, 0, 0, 0.2), 6px 6px 36px 0 rgba(0, 0, 0, 0.1); */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  flex-direction: ${({ value }) => (value % 2 === 0 ? "row-reverse" : "row")};
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  @media screen and (max-width: 426px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;
const ProjectImage = styled.div`
  transform: translateZ(4px);

  transform-style: preserve-3d;
  transform: perspective(1000px);
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    max-width: 100%;
    margin-right: 1rem;
    border-radius: 10px;
    /* border-radius: ${({ value }) =>
      value % 2 === 0 ? "0 10px 10px 0" : "10px 0 0 10px"}; */
  }
  border-radius: 10px !important;
  @media screen and (max-width: 426px) {
    width: 100%;
  }
`;
const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${({ value }) =>
    value % 2 === 0 ? "10px 0 0 10px" : "0 10px 10px 0"};
  color: #000;
  width: 100%;
  transition: 1s ease;
  text-align: center;
  p {
    color: rgba(0, 0, 0, 0.7);
  }
  @media screen and (max-width: 426px) {
    width: 100%;
    margin-top: 1rem;
    width: 100%;
  }
`;
const ProjectLink = styled.a`
  /* padding: 16px 32px !important; */
  text-decoration: none;
  text-align: center;
  padding: 8px 16px;
  border-radius: 15px;
  width: 160px;
  margin-bottom: 0.5rem;
  background-image: linear-gradient(135deg, #c7f0bd -20%, #c7f0bd 120%);
  /* box-shadow: 0 11px 36px 0 rgb(70 89 138 / 25%); */
  color: #000;
  :hover {
    text-decoration: none;
  }
`;
export default ProjectComponents;

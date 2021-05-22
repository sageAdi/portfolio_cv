import React, { useRef, useEffect, useMemo } from "react";
import styled from "styled-components";
import VanillaTilt from "vanilla-tilt";

const ProjectComponents = ({ title, description, link, img, position }) => {
  const tilt = useRef(null);
  const options = useMemo(() => ({
    speed: 100,
    max: 10,
    glare: false,
    perspective: 1000,
  }));
  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <ProjectCard value={position}>
      <ProjectBody value={position}>
        <h5 className="card-title heading5">{title}</h5>
        <p className="para">{description}</p>
        <ProjectLink href={link}>
          Github Repo
        </ProjectLink>
      </ProjectBody>
      <ProjectImage value={position}>
        <img src={img} alt="project" />
      </ProjectImage>
    </ProjectCard>
  );
};
const ProjectCard = styled.div`
  display: flex;
  width: 100%;
  height: 22rem;
  margin: 1rem;
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
  justify-content: space-between;
  align-items: center;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  @media screen and (max-width: 426px) {
    flex-direction: column;
  }
`;
const ProjectImage = styled.div`
  transform: translateZ(40px);
  width: 50%;
  img {
    width: 100%;
    margin-right: 1rem;
    border-radius: 10px;
    /* border-radius: ${({ value }) =>
      value % 2 === 0 ? "0 10px 10px 0" : "10px 0 0 10px"}; */
  }
  border-radius: 10px !important;
`;
const ProjectBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: ${({ value }) =>
    value % 2 === 0 ? "10px 0 0 10px" : "0 10px 10px 0"};
  color: #000;
  overflow: hidden;
  width: 30%;
  height: 100%;
  transition: 1s ease;
`;
const ProjectLink = styled.a`
  /* padding: 16px 32px !important; */
  text-decoration: none;
  border-radius: 15px;
  width: 160px;
  background-image: linear-gradient(135deg, #c7f0bd -20%, #c7f0bd 120%);
  /* box-shadow: 0 11px 36px 0 rgb(70 89 138 / 25%); */
  color: #000;
  :hover {
    text-decoration: none;
  }
`;
export default ProjectComponents;

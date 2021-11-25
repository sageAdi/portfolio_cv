import React from "react";
import styled, { keyframes } from "styled-components";

const opacityChange = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;
const rightToLeft = keyframes`
  from{
    right:-100%;
  }
  to{
    right:0px
  }
`;

const Progress = ({ Svg, title, description, link }) => {
  const ProjectCard = styled.div`
    width: 18rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    padding: 1rem;
    perspective: 1000px;
  `;
  const ProjectImage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    :hover {
      transform: rotateY(180deg);
    }
    transition: all 2s;
  `;
  const ProjectBody = styled.div`
    display: none;
  `;
  const ProjectLink = styled.div``;
  return (
    <ProjectCard className="card">
      <ProjectImage>
        <Svg />
      </ProjectImage>
      <ProjectBody>
        <h5 className="card-title heading5">{title}</h5>
        <p className="para">{description}</p>
        <ProjectLink href={link}>Github Repo</ProjectLink>
      </ProjectBody>
    </ProjectCard>
  );
};

export default Progress;

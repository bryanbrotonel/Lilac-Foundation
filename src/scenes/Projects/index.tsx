import React from 'react';

import styled from 'styled-components';

const ProjectsContainer = styled.div`
  & > div {
    margin-bottom: 5rem;
  }
  @media (min-width: 768px) {
    & > div {
      margin-bottom: 12rem;
    }
  }
`;

function Projects() {
  return (
    <ProjectsContainer className="container">
      <h1>Projects</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
        architecto nesciunt veniam hic quod cum? Ducimus expedita ipsum minus
        ratione, laborum, iure cupiditate aliquid laudantium eos repellat,
        molestias maiores quis?
      </p>
    </ProjectsContainer>
  );
}

export default Projects;

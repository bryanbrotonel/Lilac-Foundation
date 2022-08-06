import React, { useEffect } from 'react';

import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchProjects, selectAllProjects } from './projectsSlice';

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
  const dispatch = useAppDispatch();

  const projectsStatus = useAppSelector((state) => state.projects.status);
  const projects = useAppSelector(selectAllProjects);

  useEffect(() => {
    if (projectsStatus === 'idle') {
      dispatch(fetchProjects());
    }
  }, [projectsStatus, dispatch]);

  let projectsList;

  console.log(projects)

  if (projectsStatus === 'succeeded') {
    projectsList = (
      <ProjectsContainer>
        {projects.map((project) => (
          <div key={project.sys.id}>
            <h2>{project.fields.title}</h2>
            <h3>{project.fields.date}</h3>
            <p>{project.fields.content}</p>
          </div>
        ))}
      </ProjectsContainer>
    );
  }

  return (
    <ProjectsContainer className="container">
      <h1>Projects</h1>
      {projectsList}
    </ProjectsContainer>
  );
}

export default Projects;

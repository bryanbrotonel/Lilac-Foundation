import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ProjectItem from './ProjectItem';
import { fetchProjects, selectAllProjects } from './projectsSlice';

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

  if (projectsStatus === 'succeeded') {
    projectsList = (
      <React.Fragment>
        {projects.map((project) => (
          <ProjectItem key={project.sys.id} projectFields={project.fields} />
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className="container mt-12">
      <h1 className="font-bold font-serif text-6xl">Projects</h1>
      <hr className="mt-4 mb-8 border-white-30" />
      <div className="text-center text-lg my-32 mx-auto md:w-1/2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          iste ut dolore tenetur! Repudiandae possimus obcaecati minus!
          Praesentium laborum magni consequatur culpa, iste consectetur quam
          cum, accusantium recusandae, ex inventore?
        </p>
      </div>
      <div className="flex flex-col gap-40 pt-12">{projectsList}</div>
    </div>
  );
}

export default Projects;

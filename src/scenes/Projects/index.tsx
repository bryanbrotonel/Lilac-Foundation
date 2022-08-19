import Markdown from 'markdown-to-jsx';
import React, { useEffect, useState } from 'react';
import { fetchContentfulContentEntryByID } from '../../api/contentful';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { TypeBlurb } from '../../types';
import ProjectItem from './ProjectItem';
import { fetchProjects, selectAllProjects } from './projectsSlice';

function Projects() {
  const [projectParagraph, setprojectParagraph] = useState<TypeBlurb>(null);

  const dispatch = useAppDispatch();

  const projectsStatus = useAppSelector((state) => state.projects.status);
  const projects = useAppSelector(selectAllProjects);

  useEffect(() => {
    if (projectsStatus === 'idle') {
      dispatch(fetchProjects());
    }
  }, [projectsStatus, dispatch]);

  useEffect(() => {
    (async () => {
      // Fetch project paragraph
      const projectBlurb = (await fetchContentfulContentEntryByID(
        '1DhuyIgmljfzphuS3FvPLO'
      )) as TypeBlurb;

      setprojectParagraph(projectBlurb);
    })();

    document.title = `Projects | The Lilac Foundation`;
  }, []);

  let projectsList, projectsParagraphContent;

  if (projectParagraph) {
    projectsParagraphContent = (
      <Markdown>{projectParagraph.fields.blurbContent}</Markdown>
    );
  }

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
    <div className="container mt-12 mb-36">
      <h1 className="font-bold font-serif text-6xl">Projects</h1>
      <hr className="mt-4 mb-8 border-white-30" />
      <div className="text-center my-32 mx-auto md:w-1/2 prose">
        {projectsParagraphContent}
      </div>
      <div className="flex flex-col gap-40 pt-12">{projectsList}</div>
    </div>
  );
}

export default Projects;

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchProjects, selectAllProjects } from '../../Projects/projectsSlice';
import LinesEllipsis from 'react-lines-ellipsis';

function ProjectSection() {
  const dispatch = useAppDispatch();

  const projectsStatus = useAppSelector((state) => state.projects.status);
  const projects = useAppSelector(selectAllProjects);

  useEffect(() => {
    if (projectsStatus === 'idle') {
      dispatch(fetchProjects());
    }
  }, [projectsStatus, dispatch]);

  let featuredProjectComponent;

  if (projectsStatus === 'succeeded') {
    let projectsList = [...projects];

    const featuredProject = projectsList.shift();

    const {
      fields: { title, content, headerImage, slug },
    } = featuredProject;

    featuredProjectComponent = (
      <div className="flex flex-col md:flex-row-reverse gap-8">
        <div className="w-full md:w-4/6 aspect-[3/2] mx-auto overflow-hidden">
          <a href={`/projects/${slug}`}>
            <img
              src={headerImage.fields.file.url}
              alt={`${title} - Image`}
              className="w-full h-full object-cover object-center"
            />
          </a>
        </div>
        <div className="basis-1/2 flex flex-col justify-center">
          <div className="mb-2">
            <span className="font-sans font-bold text-gray-500 uppercase">
              Latest Project
            </span>
          </div>
          <h1 className="mb-4 text-5xl font-serif">{title}</h1>
          <div className="max-h-24 text-ellipsis overflow-hidden">
            <LinesEllipsis
              text={content}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </div>
          <div className="mt-8">
            <a
              href={`/projects/${slug}`}
              className=" uppercase hover:underline underline-offset-2"
            >
              <button className="py-1 px-3 bg-transparent hover:bg-primary-400 text-primary-400 hover:text-white-0 rounded-lg border-primary-400 border-2">
                Read More
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return <div className="container py-24">{featuredProjectComponent}</div>;
}

export default ProjectSection;

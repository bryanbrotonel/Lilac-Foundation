import React from 'react';
import { Link } from 'react-router-dom';
import InViewObserver from '../../../components/InViewObserver';
import { TypeProjectPostFields } from '../../../types';
import LinesEllipsis from 'react-lines-ellipsis';

function ProjectItem(props: { projectFields: TypeProjectPostFields }) {
  const {
    projectFields: { title, content, headerImage, slug },
  } = props;
  2;
  return (
    <InViewObserver
      className="opacity-0 flex flex-col gap-12 md:flex-row md:even:flex-row-reverse md:even:text-right"
      transitionClass="transition duration-700 ease-out -translate-y-4 opacity-100"
    >
      <div className="basis-1/2 lg:basis-5/12">
        <div className="aspect-[4/3] bg-primary-50 border border-white-30 overflow-hidden">
          <Link to={slug}>
            <img
              className="w-full h-full object-cover object-center img-hover-scale"
              src={`${headerImage.fields.file.url}?fm=webp`}
              alt={`${title} - Image`}
              loading="lazy"
            />
          </Link>
        </div>
      </div>
      <div className="basis-1/2 lg:basis-5/12 space-y-6">
        <Link to={slug}>
          <h1 className="font-serif font-semibold text-5xl hover:text-primary-400">
            {title}
          </h1>
        </Link>
        <p className="prose">
          <LinesEllipsis
            text={content}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </p>
        <button>
          <a
            className="py-2 px-4 bg-primary-100 hover:bg-primary-400 text-white-0"
            href="#"
          >
            View Project
          </a>
        </button>
      </div>
    </InViewObserver>
  );
}

export default ProjectItem;

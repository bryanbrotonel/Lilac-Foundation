import React from 'react';
import InViewObserver from '../../../components/InViewObserver';

function ProjectItem(props: { id: string; title: string; image: string }) {
  const { id, title, image } = props;
  2;
  return (
    <InViewObserver
      className="opacity-0 flex flex-col gap-12 md:flex-row md:even:flex-row-reverse md:even:text-right"
      transitionClass="transition duration-700 ease-out -translate-y-4 opacity-100"
    >
      <div className="basis-1/2 lg:basis-5/12">
        <div className="aspect-[4/3] bg-primary-50 border border-white-30 overflow-hidden">
          <a href="#">
            <img
              className="w-full h-full object-cover object-center img-hover-scale"
              src={`${image}?fm=webp`}
              alt={`${title} - Image`}
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div className="basis-1/2 lg:basis-5/12 space-y-6">
        <a href="#">
          <h1 className="font-serif font-semibold text-5xl hover:text-primary-400">
            {title}
          </h1>
        </a>
        <p className="prose">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quis
          assumenda iusto quae blanditiis sunt minima nulla iure quam, ipsum
          aperiam, accusamus nisi voluptates quidem. Ducimus sapiente accusamus
          dolores! Non.
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

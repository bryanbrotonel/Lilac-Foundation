import React from 'react';
import { TypeAboutItem } from '../../../types';
import Markdown from 'markdown-to-jsx';
import InViewObserver from '../../../components/InViewObserver';

function AboutItem(props: { item: TypeAboutItem; justified: boolean }) {
  const {
    item: {
      fields: { title, description, headerImage },
    },
    justified,
  } = props;

  return (
    <div
      className={`md:flex ${justified ? 'justify-end' : 'justify-start'} my-10`}
    >
      <div className="relative  w-full lg:w-[64rem] aspect-[3/2] my-10 space-y-8 lg:space-y-0">
        <InViewObserver
          className={`relative aspect-[3/2] md:w-2/3 md:absolute ${
            justified ? 'md:right-0' : 'md:left-0'
          } opacity-0 translate-y-4`}
          transitionClass="transition duration-700 ease-out translate-y-0 opacity-100"
        >
          <div className="absolute inset-0 bg-primary-800 opacity-30" />
          <img
            src={`${headerImage.fields.file.url}?fm=webp`}
            alt={title}
            className="h-full w-full object-cover object-center"
          />
        </InViewObserver>
        <InViewObserver
          className={`relative w-fit md:max-w-xl md:h-1/2 md:absolute ${
            justified ? 'md:left-0' : 'md:right-0'
          } md:bottom-0 opacity-0 translate-y-4`}
          transitionClass="transition duration-700 ease-out translate-y-0 opacity-100"
        >
          <div className="h-fit bg-primary-70 text-white-20 p-12">
            <h1 className="font-serif text-4xl text-primary-700 mb-4">
              {title}
            </h1>
            <Markdown>{description}</Markdown>
          </div>
        </InViewObserver>
      </div>
    </div>
  );
}

export default AboutItem;

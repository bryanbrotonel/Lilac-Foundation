import React from 'react';
import { Link } from 'react-router-dom';
import { TypeBlogPostFields } from '../../../types';

function FeaturePost(props: {
  blogFields: TypeBlogPostFields;
  createdAt: string;
  main?: boolean;
}) {
  const {
    blogFields: { title, subtitle, headerImage, author, slug },
    createdAt,
    main,
  } = props;
  // Formatting post date
  const formattedPostDate = new Date(createdAt).toLocaleDateString('en-gb', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'utc',
  });

  return (
    <div
      className={`flex ${
        main ? 'flex-col gap-8' : 'flex-col md:flex-row gap-6 py-8 lg:py-0'
      }`}
    >
      <Link to={slug}>
        <div
          className={`w-full ${
            main ? 'h-64 md:h-96' : 'md:w-44 h-44'
          } bg-primary-50 border border-white-30 overflow-hidden`}
        >
          <img
            src={`${headerImage.fields.file.url}?fm=webp`}
            alt={`${title} - Image`}
            className="w-full h-full object-cover object-center img-hover-scale"
            loading="lazy"
          />
        </div>
      </Link>
      <div>
        <Link
          to={slug}
          className={`font-serif font-bold ${
            main ? 'text-4xl' : 'text-2xl'
          } hover:underline hover:text-primary-100`}
        >
          {title}
        </Link>
        <h2 className="text-slate-500">{subtitle}</h2>
        <div className="mt-4">
          <p>
            <span className="font-bold">{author} </span> &#x2022;&nbsp;
            <span className="text-slate-500">{formattedPostDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturePost;

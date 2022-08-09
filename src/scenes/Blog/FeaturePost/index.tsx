import React from 'react';

interface FeaturePostProps {
  title: string;
  subtitle: string;
  image: string;
  author: string;
  date: string;
  main?: boolean;
}

function FeaturePost({
  title,
  subtitle,
  image,
  author,
  date,
  main = false,
}: FeaturePostProps) {
  // Format date
  const formattedPostDate = new Date(date).toLocaleDateString('en-gb', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'utc',
  });

  return (
    <div
      className={`flex ${
        main ? 'flex-col gap-8' : 'flex-col md:flex-row gap-4 py-8 lg:py-0'
      }`}
    >
      <div>
        <div
          className={`w-full ${
            main ? 'h-64 md:h-96' : 'md:aspect-square h-44'
          } border border-white-30 overflow-hidden`}
        >
          <a href="">
            <img
              src={`${image}?fm=webp`}
              alt={`${title} - Image`}
              className="w-full h-full object-cover object-center img-hover-scale"
            />
          </a>
        </div>
      </div>
      <div>
        <a
          href="#"
          className={`font-serif font-bold ${
            main ? 'text-4xl' : 'text-2xl'
          } hover:underline hover:text-primary-100`}
        >
          {title}
        </a>
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

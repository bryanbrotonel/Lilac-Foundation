import React from 'react';
import { Link } from 'react-router-dom';

interface FeaturePostProps {
  title: string;
  subtitle: string;
  image: string;
  author: string;
  date: string;
  slug: string;
  main?: boolean;
}

function FeaturePost({
  title,
  subtitle,
  image,
  author,
  date,
  slug,
  main = false,
}: FeaturePostProps) {
  // Formatting post date
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
      <div
        className={`w-full ${
          main ? 'h-64 md:h-96' : 'md:aspect-square h-44'
        } bg-primary-50 border border-white-30 overflow-hidden`}
      >
        <Link to={slug}>
          <img
            src={`${image}?fm=webp`}
            alt={`${title} - Image`}
            className="w-full h-full object-cover object-center img-hover-scale"
            loading="lazy"
          />
        </Link>
      </div>
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

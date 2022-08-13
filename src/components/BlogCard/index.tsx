import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard(props: {
  title: string;
  subtitle: string;
  image: string;
  author: string;
  date: string;
  slug: string;
}) {
  const { title, subtitle, image, author, date, slug } = props;

  // Format date
  const formattedPostDate = new Date(date).toLocaleDateString('en-gb', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'utc',
  });

  return (
    <div className="w-80 mx-auto overflow-hidden">
      <div className="bg-primary-50 border border-white-30 overflow-hidden">
        <Link to={slug}>
          <img
            className="h-48 w-full object-cover object-center img-hover-scale"
            src={`${image}?fm=webp`}
            alt={`${title} - Image`}
            loading="lazy"
          />
        </Link>
      </div>
      <div className="mt-4">
        <div>
          <Link
            to={slug}
            className="block mt-1 text-2xl font-serif font-bold leading-tight text-black hover:underline"
          >
            {title}
          </Link>
          <p className="mt-4 text-slate-700">{subtitle}</p>
        </div>
        <div className="mt-4">
          <span>
            <span className="font-bold">{author}</span>
            <br />
            <span className="text-slate-500">{formattedPostDate}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

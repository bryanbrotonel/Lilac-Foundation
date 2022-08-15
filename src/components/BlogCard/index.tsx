import React from 'react';
import { Link } from 'react-router-dom';
import { TypeTestBlogPostFields } from '../../types';

function BlogCard(props: {
  blogFields: TypeTestBlogPostFields;
  createdAt: string;
}) {
  const {
    blogFields: { title, subtitle, headerImage, author, slug },
    createdAt,
  } = props;

  // Format date
  const formattedPostDate = new Date(createdAt).toLocaleDateString('en-gb', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'utc',
  });

  return (
    <div className="w-72 mx-auto overflow-hidden">
      <div className="bg-primary-50 border border-white-30 overflow-hidden">
        <a href={`blog/${slug}`}>
          <img
            className="h-64 w-full object-cover object-center img-hover-scale"
            src={`${headerImage.fields.file.url}?fm=webp`}
            alt={`${title} - Image`}
            loading="lazy"
          />
        </a>
      </div>
      <div className="mt-4">
        <div>
          <Link
            to={slug}
            className="block mt-1 text-2xl font-serif font-bold leading-tight text-black hover:underline"
          >
            {title}
          </Link>
          <p className="mt-4 text-gray-700">{subtitle}</p>
        </div>
        <div className="mt-4">
          <span>
            <span className="font-bold">{author}</span>
            <br />
            <span className="text-gray-500">{formattedPostDate}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

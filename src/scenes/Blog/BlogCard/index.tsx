import React from 'react';

function BlogCard(props: {
  title: string;
  subtitle: string;
  image: string;
  author: string;
  date: string;
}) {
  const { title, subtitle, image, author, date } = props;

  // Format date
  const formattedPostDate = new Date(date).toLocaleDateString('en-gb', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'utc',
  });

  return (
    <div className="w-80 mx-auto overflow-hidden">
      <div className="border border-white-30 overflow-hidden">
        <a href="#">
          <img
            className="h-48 w-full object-cover object-center img-hover-scale"
            src={`${image}?fm=webp`}
            alt={`${title} - Image`}
          />
        </a>
      </div>
      <div className="h-56 mt-4">
        <div>
          <a
            href="#"
            className="block mt-1 text-xl font-serif font-bold leading-tight text-black hover:underline"
          >
            {title}
          </a>
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

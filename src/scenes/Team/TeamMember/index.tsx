import React from 'react';
import { Link } from 'react-router-dom';

function TeamMember(props: { name: string; image: string; link: string }) {
  const { name, image, link } = props;
  return (
    <div>
      <div className="h-56 w-56 bg-primary-50 overflow-hidden">
        <Link to={link}>
          <img
            className="h-full w-full object-cover object-center img-hover-scale grayscale hover:grayscale-0"
            src={`${image}?fm=webp`}
            alt={`${name} - Image`}
            loading="lazy"
          />
        </Link>
      </div>
      <div className="mt-4">
        <span className="font-bold text-xl">{name}</span>
      </div>
    </div>
  );
}

export default TeamMember;

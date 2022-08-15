import React from 'react';
import { Link } from 'react-router-dom';
import { TypeTeamMemberFields } from '../../../types';

function TeamMember(props: { memberFields: TypeTeamMemberFields }) {
  const {
    memberFields: { name, profilePicture, slug },
  } = props;

  return (
    <div>
      <div className="h-56 w-56 bg-primary-50 overflow-hidden">
        <Link to={slug}>
          <img
            className="h-full w-full object-cover object-center img-hover-scale grayscale hover:grayscale-0"
            src={`${profilePicture.fields.file.url}?fm=webp`}
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

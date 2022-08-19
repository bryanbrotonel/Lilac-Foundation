import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchContentfulContentEntry } from '../../../api/contentful';
import Loading from '../../../components/Loading';
import NotFound from '../../NotFound';
import Markdown from 'markdown-to-jsx';
import { TypeTeamMember } from '../../../types';

function ProfilePage() {
  const params = useParams();
  const [teamMember, setTeamMember] = useState(null);

  useEffect(() => {
    fetchContentfulContentEntry('teamMember', params.teamMemberSlug).then(
      (member: TypeTeamMember) => {
        setTeamMember(member);
      }
    );
  }, []);

  let teamMemberComponent;

  if (teamMember === null) teamMemberComponent = <Loading />;

  if (teamMember === undefined) teamMemberComponent = <NotFound />;

  if (teamMember !== null && teamMember !== undefined) {
    const {
      fields: { name, profilePicture, description, socials },
    } = teamMember;

    teamMemberComponent = (
      <div className="flex flex-col lg:flex-row lg:justify-center gap-8 container my-32">
        <div>
          <img
            className="w-52 h-52 rounded-full mx-auto"
            src={profilePicture.fields.file.url}
            alt={name}
          />
        </div>
        <div className='mx-auto lg:mx-0'>
          <h1 className="font-serif text-4xl text-center lg:text-left mb-3 ">
            {name}
          </h1>
          <div className="flex flex-row gap-4 justify-center lg:justify-start mb-6">
            {Object.keys(socials.fields).map((key) => {
              return (
                <div key={`${name} - ${key}`}>
                  <a
                    href={socials.fields[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {key}
                  </a>
                </div>
              );
            })}
          </div>
          <div className="prose">
            <Markdown>{description}</Markdown>
          </div>
        </div>
      </div>
    );
  }

  return <div>{teamMemberComponent}</div>;
}

export default ProfilePage;

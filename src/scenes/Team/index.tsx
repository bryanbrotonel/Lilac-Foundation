import React, { useEffect, useState } from 'react';
import {
  fetchContentfulContentEntries,
  fetchContentfulContentEntryByID,
} from '../../api/contentful';
import Loading from '../../components/Loading';
import { TypeBlurb, TypeTeamMember } from '../../types';
import Markdown from 'markdown-to-jsx';
import TeamMember from './TeamMember';

function Team() {
  const [teamItems, setTeamItems] = useState<TypeTeamMember[]>([]);
  const [teamParagraph, setTeamParagraph] = useState<TypeBlurb>(null);

  let teamParagraphContent;

  useEffect(() => {
    (async () => {
      const entries = (await fetchContentfulContentEntries(
        'teamMember',
        'fields.order'
      )) as TypeTeamMember[];

      // Fetch team paragraph
      const teamBlurb = (await fetchContentfulContentEntryByID(
        '4kkkScWmRQaGVpO14sb8Te'
      )) as TypeBlurb;

      setTeamItems(entries);
      setTeamParagraph(teamBlurb);
    })();
  }, []);

  if (teamParagraph) {
    teamParagraphContent = (
      <Markdown>{teamParagraph.fields.blurbContent}</Markdown>
    );
  }

  return (
    <div className="container mt-12 mb-36">
      <h1 className="font-bold font-serif text-6xl">Team</h1>
      <hr className="mt-4 mb-8 border-white-30" />
      <div className="text-center mt-32 mx-auto md:w-3/5 prose">
        {teamParagraphContent}
      </div>
      <div className="flex flex-wrap sm:flex-row gap-10 justify-center items-center py-24">
        {teamItems.length === 0 ? (
          <Loading />
        ) : (
          teamItems.map((member) => (
            <TeamMember key={member.sys.id} memberFields={member.fields} />
          ))
        )}
      </div>
      <div className="md:w-1/2 mx-auto text-center pb-12">
        <span className="text-lg text-primary-400">
          Want to learn more team the team?&nbsp;
          <a className="font-bold underline" href="team">
            Read More
          </a>
        </span>
      </div>
    </div>
  );
}

export default Team;

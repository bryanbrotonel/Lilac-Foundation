import React from 'react';
import TeamMember from './TeamMember';

function Team() {
  return (
    <div className="container py-12">
      <h1 className="font-bold font-serif text-6xl">Team</h1>
      <hr className="mt-4 mb-8 border-white-30" />
      <div className="md:w-1/2 mx-auto text-center py-12">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          suscipit, porro provident cumque minima esse blanditiis, veniam minus
          quia facilis sed? Ratione, saepe voluptates veritatis dolores unde hic
          sint optio?
        </p>
      </div>
      <div className="flex flex-wrap sm:flex-row gap-10 justify-center items-center py-24">
        <TeamMember name="Name" image={''} link={''} />
        <TeamMember name="Name" image={''} link={''} />
        <TeamMember name="Name" image={''} link={''} />
        <TeamMember name="Name" image={''} link={''} />
      </div>
      <div className="md:w-1/2 mx-auto text-center pb-12">
        <span className="text-lg text-primary-400">
          Want to learn more about the team? <a className='font-bold underline' href="about">Read More</a>
        </span>
      </div>
    </div>
  );
}

export default Team;

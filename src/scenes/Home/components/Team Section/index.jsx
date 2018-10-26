import React from 'react';
import PageSection from '../../../../components/Page Section';
import TeamSectionItem from './Team Section Item';

class TeamSection extends React.Component {
  constructor() {
    super();
    this.state = {
      teamMembers: ['Member 1', 'Member 2', 'Member 3', 'Member 4']
    };
  }

  render() {
    const { teamMembers } = this.state;

    const teamSectionItems = teamMembers.map(member => {
      return <TeamSectionItem key={member} name={member} />;
    });
    return (
      <PageSection className="bg-gray">
        <div className="row w-100">
          <div className="col-6 hv-center">
            <h1>About Us</h1>
          </div>
          <div className="col-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ea,
              pariatur distinctio incidunt aliquam unde adipisci odit maxime.
              Quam tenetur iure ut necessitatibus dignissimos eveniet quisquam
              excepturi nihil dolore nemo.
            </p>
            <a href="#">Read our story &gt;</a>
          </div>
        </div>
      </PageSection>
    );
  }
}

export default TeamSection;

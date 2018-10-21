import React from 'react';
import PageSection from '../../../../components/Page Section';
import TeamMember from './Team Member';

class TeamSection extends React.Component {
  constructor() {
    super();

    this.state = { members: ['Name 1', 'Name 2', 'Name 3', 'Name 4'] };
  }

  render() {
    const { members } = this.state;

    // Members section
    const memberSections = members.map(member => {
      return (
        <div key={member} className="col-10 col-md-3 mb-4 border">
          <TeamMember name={member} />
        </div>
      );
    });

    return (
      <PageSection height="50">
        <div className="container text-center">
          <h1 className="section-title">Meet the Team</h1>
          <div className="team-row row justify-content-around text-left">
            {memberSections}
          </div>
          <h5>Read our story</h5>
        </div>
      </PageSection>
    );
  }
}

export default TeamSection;

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
      <PageSection className="bg-gray" height="50vh">
        <div className="team-2">
          <div className="container">
            <div className="row justify-content-center pb-5">
              <div className="col-12 text-center">
                <h1>Meet the Team</h1>
              </div>
            </div>

            <div className="row text-center justify-content-center">
              {teamSectionItems}
            </div>
          </div>
        </div>
      </PageSection>
    );
  }
}

export default TeamSection;

import React from 'react';
import TeamMember from '../../components/Team Member';
import PageHeader from '../../components/Page Header';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      teamMembers: ['Member 1', 'Member 2', 'Member 3', 'Member 4']
    };
  }

  render() {
    const { teamMembers } = this.state;

    const teamSectionItems = teamMembers.map(member => {
      return (
        <div key={member} className="col-8 col-sm-5 text-center">
          <TeamMember name={member} />
        </div>
      );
    });

    return <div className="bg-gray">
        <PageHeader headerImage="https://source.unsplash.com/jWKUi10FZBo/1600x900">
          <h1>About</h1>
          <h4>More behind the lilac</h4>
        </PageHeader>
        <div className="container">
          <div className="row justify-content-center pb-3 px-md-5">
            <div className="col-12 col-md-4 pb-3 pb-md-0 v-center">
              <h1>Our Story</h1>
              <h5>Learn our origins</h5>
            </div>
            <div className="col-12 col-md-8">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, exercitationem voluptatem corrupti quo, accusamus,
                est molestiae dolorum aliquam minus odio dignissimos labore
                dicta iste aut! Eum harum deserunt voluptas blanditiis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, exercitationem voluptatem corrupti quo, accusamus,
                est molestiae dolorum aliquam minus odio dignissimos labore
                dicta iste aut! Eum harum deserunt voluptas blanditiis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, exercitationem voluptatem corrupti quo, accusamus,
                est molestiae dolorum aliquam minus odio dignissimos labore
                dicta iste aut! Eum harum deserunt voluptas blanditiis.
              </p>
            </div>
          </div>
          <div className="row justify-content-center py-3 p-md-5">
            <div className="col-12 col-md-4 pb-3 pb-md-0 v-center">
              <h1>Meet the Team</h1>
              <h5>Let's get acquainted</h5>
            </div>
            <div className="team-section col-12 col-md-8">
              <div className="row hv-center">{teamSectionItems}</div>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default About;

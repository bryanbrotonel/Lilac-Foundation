import React from 'react';
import TeamMember from '../../components/Team Member';

import './styles.scss';

class TeamMemberProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      teamMembers: ['Member 1', 'Member 2', 'Member 3']
    };
  }

  render() {
    const { teamMembers } = this.state;

    const teamSectionItems = teamMembers.map(member => {
      return (
        <div key={member} className="col-8 col-sm-5 col-md-3 text-center">
          <TeamMember name={member} />
        </div>
      );
    });

    return (
      <div className="container pt-5">
        <div className="row pb-5 justify-content-center">
          <div className="col-8 col-md-4 col-lg-3 mb-3 text-center">
            <div className="mb-3">
              <img
                alt="image"
                className="rounded-circle w-75 mb-4"
                src="https://continuinged.uni.edu/sites/default/files/headshotplaceholder_female_4.jpg"
              />
              <h2>Team Member</h2>
              <h5>Role</h5>
            </div>
            <div className="text-muted">
              <ul className="socials-list">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              obcaecati alias eum rem quasi necessitatibus iusto, placeat unde
              reprehenderit eveniet mollitia corporis doloremque! Modi quisquam
              veniam autem inventore earum. Ut!
            </p>
            <p>
              Animi iusto earum itaque autem adipisci, asperiores illum? Quas
              iure vitae qui repudiandae voluptatibus ut corporis, libero
              perferendis temporibus minima? Adipisci eaque facilis inventore
              incidunt voluptatum voluptas ex quos doloribus!
            </p>
            <p>
              Dolorem, ad. Necessitatibus accusamus cumque perspiciatis
              reprehenderit incidunt aut, quibusdam libero illo aliquam soluta
              eos aliquid quis, laboriosam in ut omnis sunt officia eaque
              molestiae tempore beatae pariatur maiores officiis.
            </p>
            <p>
              Animi iusto earum itaque autem adipisci, asperiores illum? Quas
              iure vitae qui repudiandae voluptatibus ut corporis, libero
              perferendis.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 text-center pb-5">
            <h2>Meet The Team</h2>
          </div>
          <div className="col-12 col-md-12 col-lg-10">
            <div className="row justify-content-center">{teamSectionItems}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMemberProfile;

import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss';

class TeamMember extends React.Component {
  render() {
    const { name, role, profilePicture } = this.props;

    var profilePictureURL =
      profilePicture.length == 0
        ? 'https://continuinged.uni.edu/sites/default/files/headshotplaceholder_female_4.jpg'
        : profilePicture;

    return (
      <div className="team-member">
        <div className="team-member-image rounded-circle">
          <img
            src={profilePictureURL}
            alt={name}
            className=" rounded-circle w-100"
          />
        </div>
        <h4 className="team-member-name">{name}</h4>
        <p className="team-member-role">{role}</p>
      </div>
    );
  }
}

TeamMember.propTypes = {
  name: Proptypes.string.isRequired,
  role: Proptypes.string,
  profilePicture: Proptypes.string
};

export default TeamMember;

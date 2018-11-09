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
        <img
          alt="image"
          className="rounded-circle w-100"
          src={profilePictureURL}
        />
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    );
  }
}

TeamMember.propTypes = {
  name: Proptypes.string.isRequired,
  role: Proptypes.string.isRequired,
  profilePicture: Proptypes.string
};

export default TeamMember;

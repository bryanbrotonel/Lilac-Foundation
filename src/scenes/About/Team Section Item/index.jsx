import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss';

class TeamSectionItem extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <div className="team-member col-8 col-sm-8 col-md-5 text-center">
        <div>
          <img
            alt="image"
            className="rounded-circle w-100 mb-4"
            src="https://continuinged.uni.edu/sites/default/files/headshotplaceholder_female_4.jpg"
          />
          <h3>{name}</h3>
          <p>Member</p>
        </div>
      </div>
    );
  }
}

TeamSectionItem.propTypes = {
  name: Proptypes.string.isRequired
};

export default TeamSectionItem;

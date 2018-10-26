import React from 'react';
import Proptypes from 'prop-types';

class TeamSectionItem extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <div className="col-5 col-md-2 m-sm-auto">
        <img
          alt="image"
          className="rounded-circle w-100"
          src="https://continuinged.uni.edu/sites/default/files/headshotplaceholder_female_4.jpg"
        />

        <h3>{name}</h3>
        <p>Member</p>
      </div>
    );
  }
}

TeamSectionItem.propTypes = {
  name: Proptypes.string.isRequired
};

export default TeamSectionItem;

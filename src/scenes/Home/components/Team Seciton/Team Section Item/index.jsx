import React from 'react';
import Proptypes from 'prop-types';

class TeamSectionItem extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <div className="col-5 col-md-2 m-sm-auto">
        <img
          alt="image"
          className="img-fluid pb-3"
          src="https://editor-latest.s3.amazonaws.com/design-blocks/block_images/img_round.svg"
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

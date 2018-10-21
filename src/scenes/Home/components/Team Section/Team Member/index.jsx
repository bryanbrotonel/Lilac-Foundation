import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss'

class TeamMember extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        <h3 className="team-title">{name}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          maxime nemo a deleniti doloribus, at consectetur consequuntur, alias
          vel magnam tempora reprehenderit numquam nihil voluptatum laudantium
          facilis molestiae iure! Voluptas.
        </p>
      </div>
    );
  }
}

TeamMember.propTypes = {
  name: Proptypes.string.isRequired
}

export default TeamMember;

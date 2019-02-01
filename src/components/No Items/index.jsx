import React from 'react';
import propTypes from 'prop-types';

import './styles.scss';

class NoItems extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <div className="no-items hv-center">
        <div>
          <h1 className="no-items-title">No {item} found</h1>
          <h4 className="no-items-message">Come back another time!</h4>
        </div>
      </div>
    );
  }
}

NoItems.propTypes = {
  item: propTypes.string.isRequired
};

export default NoItems;

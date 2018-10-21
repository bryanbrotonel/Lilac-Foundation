import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss';

class WorkItem extends React.Component {
  render() {
    const { workTitle } = this.props;

    return (
      <div className="work-item hv-center">
        <h3>{workTitle}</h3>
      </div>
    );
  }
}

WorkItem.propTypes = {
  workTitle: Proptypes.string.isRequired
};

export default WorkItem;

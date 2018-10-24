import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss'

class PageSection extends React.Component {
  render() {
    const { className, height, children } = this.props;

    return (
      <div
        className={`hv-center ${className}`}
        style={{ minHeight: height, padding: '30px 0' }}
      >
        {children}
      </div>
    );
  }
}

PageSection.propTypes = {
  height: Proptypes.string,
  className: Proptypes.string,
  children: Proptypes.any
};

export default PageSection;

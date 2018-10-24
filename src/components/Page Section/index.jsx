import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss'

class PageSection extends React.Component {
  render() {
    const { className, height, children } = this.props;

    return (
      <div
        className={`hv-center ${className}`}
        style={{ minHeight: height + 'vh', padding: '30px 0' }}
      >
        {children}
      </div>
    );
  }
}

PageSection.propTypes = {
  height: Proptypes.string,
  className: Proptypes.string,
  children: Proptypes.object
};

export default PageSection;

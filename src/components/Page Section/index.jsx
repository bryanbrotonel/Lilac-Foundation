import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss';

class PageSection extends React.Component {
  render() {
    const { className, height, children, style } = this.props;

    return (
      <div
        className={`page-section hv-center${!className ? '' : ' ' + className}`}
        style={{ maxHeight: height, ...style }}
      >
        {children}
      </div>
    );
  }
}

PageSection.propTypes = {
  height: Proptypes.string,
  className: Proptypes.string,
  style: Proptypes.object,
  children: Proptypes.any
};

export default PageSection;

import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss';

class AboutItem extends React.Component {
  render() {
    const { title, headerImage, children } = this.props;

    let style, overlay;

    if (headerImage) {
      style = {
        backgroundImage: 'url(' + headerImage + ')'
      };

      overlay = <div className="overlay" />;
    }

    return (
      <div className="about-item" style={style}>
        {overlay}
        <div className="about-dot" />

        <div className="about-wrapper no-gutters row">
          <div className="about-content col-md-12 col-lg-8">
            <h2 className="about-item-title">{title}</h2>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

AboutItem.propTypes = {
  title: Proptypes.string.isRequired,
  headerImage: Proptypes.string.isRequired,
  children: Proptypes.any
};

export default AboutItem;

import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss';

class AboutItem extends React.Component {
  render() {
    const { title, children } = this.props;

    let headerImage = 'http://source.unsplash.com/QSLdySbceR8/1600x1024',
      style,
      overlay;

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
          <div className="about-content col-sm-10 col-md-8">
            <h2 className="about-item-title">{title}</h2>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutItem;

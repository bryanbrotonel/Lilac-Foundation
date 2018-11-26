import React from 'react';
import propTypes from 'prop-types';

import './styles.scss';

class PageHeader extends React.Component {
  // Changes navbar colour upon component mount
  componentDidMount() {
    document.getElementById('navbar').classList.remove('navbar-light');
    document.getElementById('navbar').classList.add('navbar-dark');
  }

  // Resets navbar colour upon component unmount
  componentWillUnmount() {
    document.getElementById('navbar').classList.remove('navbar-dark');
    document.getElementById('navbar').classList.add('navbar-light');
  }

  render() {
    const { children, headerImage } = this.props;

    let style, overlay;

    if (headerImage) {
      style = {
        backgroundImage: 'url(' + headerImage + ')'
      };

      overlay = <div className="overlay" />;
    }

    return (
      <header id="page-header" className="page-header masthead" style={style}>
        {overlay}
        <div className="heading row no-gutters align-items-end">
          <div className="col">
            <div className="heading-content container">{children}</div>
          </div>
        </div>
      </header>
    );
  }
}

PageHeader.propTypes = {
  headerImage: propTypes.string,
  children: propTypes.any
};

export default PageHeader;

import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './styles.scss';

class DesktopNavLinks extends React.Component {
  render() {
    const { pages } = this.props;

    // Desktop navbar links
    const desktopNavLinks = pages.map(page => {
      return (
        <li key={page} className="nav-item">
          <NavLink
            to={'/' + page}
            activeClassName="nav-link-active"
            className="nav-link"
          >
            {page}
          </NavLink>
        </li>
      );
    });
    return <React.Fragment> {desktopNavLinks} </React.Fragment>;
  }
}

DesktopNavLinks.propTypes = {
  pages: propTypes.array.isRequired
};

export default DesktopNavLinks;

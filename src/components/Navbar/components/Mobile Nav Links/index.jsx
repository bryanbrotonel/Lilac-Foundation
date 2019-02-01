import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './styles.scss'

class MobileNavLinks extends React.Component {
  render() {
    const { pages, closeMenu } = this.props;

    // Mobile navbar links
    const mobileNavLinks = pages.map(page => {
      return (
        <li key={page} className="nav-item menu__item">
          <NavLink
            key={page}
            to={'/' + page}
            activeClassName="menu__item--current"
            className="menu__link nav-link"
            onClick={() => closeMenu()}
          >
            {page}
          </NavLink>
        </li>
      );
    });

    return (
      <React.Fragment>
        {mobileNavLinks}
        <li className="nav-item menu__item">
          <a className="nav-link">Donate</a>
        </li>
      </React.Fragment>
    );
  }
}

MobileNavLinks.propTypes = {
  pages: propTypes.array.isRequired,
  closeMenu: propTypes.func.isRequired
};

export default MobileNavLinks;

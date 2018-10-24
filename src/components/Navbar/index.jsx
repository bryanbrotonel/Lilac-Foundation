import React from 'react';
import propTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import './styles.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: ['home', 'story', 'work', 'blog', 'about'],
      menuOpen: false
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const { pages, menuOpen } = this.state;

    // Mobile navbar links
    const mobileNavLinks = pages.map(page => {
      return (
        <NavLink
          key={page}
          to={'/' + page}
          activeStyle={{ fontWeight: 'bold' }}
          className="nav-link mx-auto text-capitalize"
          onClick={() => this.closeMenu()}
        >
          {page}
        </NavLink>
      );
    });

    // Desktop navbar links
    const desktopNavLinks = pages.map(page => {
      return (
        <li key={page} className="nav-item">
          <NavLink
            to={'/' + page}
            activeStyle={{ fontWeight: 'bold' }}
            className="nav-link mx-auto text-capitalize"
          >
            {page}
          </NavLink>{' '}
        </li>
      );
    });

    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-light">
        <Menu
          isOpen={menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          customBurgerIcon={false}
          right={true}
          pageWrapId={'body'}
          outerContainerId={'app'}
        >
          {mobileNavLinks}
        </Menu>
        <div className="container-fluid">
          <a className="navbar-brand mr-auto mr-lg-0" href="#">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            onClick={() => this.toggleMenu()}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="navbar-collapse offcanvas-collapse d-none d-lg-block"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav ml-auto .d-none .d-md-block .d-lg-none">
              {desktopNavLinks}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logo: propTypes.string,
  pages: propTypes.array
};

export default Navbar;

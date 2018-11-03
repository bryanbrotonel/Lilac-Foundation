import React from 'react';
import propTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import DonateButton from '../Donate Button';

import './styles.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: ['home', 'work', 'blog', 'about'],
      menuOpen: false
    };
  }

  // Burger menu on state change
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // Close burger menu toggle
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // Burger menu toggle
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
          </NavLink>
        </li>
      );
    });

    return (
      <nav className="navbar navbar-expand-md navbar-light">
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
          <div className="row w-100 mx-auto">
            <div className="col-11 col-md-4">
              <a className="navbar-brand mr-auto mr-md-0" href="#">
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  alt="Bulma: a modern CSS framework based on Flexbox"
                  width="112"
                  height="28"
                />
              </a>
            </div>
            <div className="col-4 offcanvas-collapse d-none d-md-flex">
              <ul className="navbar-nav mx-auto">{desktopNavLinks}</ul>
            </div>
            <div className="col-4 text-right d-none d-md-block">
              <DonateButton className="btn-primary" />
            </div>
            <div className="col-1 hv-center">
              <button
                className="navbar-toggler p-0 border-0"
                type="button"
                onClick={() => this.toggleMenu()}
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
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

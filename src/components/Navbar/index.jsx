import React from 'react';
import propTypes from 'prop-types';

import { connect } from 'react-redux';
import { loadLilacLogo } from '../../store/base/base';

import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import ReactSVG from 'react-svg';

import DonateButton from '../Donate Button';

import './styles.scss';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadLilacLogo: () => {
      dispatch(loadLilacLogo());
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { base: state.base };
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: ['home', 'projects', 'blog', 'team', 'about'],
      menuOpen: false
    };
  }

  componentDidMount() {
    const { loadLilacLogo } = this.props;

    // Dispatches headerImage()
    loadLilacLogo();
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
    const { base } = this.props;

    if (base.lilacLogo) {
      var lilacLogo = base.lilacLogo;
      var lilacLogoAlt = (
        <span className="navbar-logo">The Lilac Foundation</span>
      );
    }

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
      <nav id="navbar" className="navbar navbar-expand-md navbar-light">
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
          <div className="navbar-row row">
            <div className="col-10 col-md-2">
              <a className="navbar-brand mr-auto mr-md-0" href="#">
                {!lilacLogo ? (
                  lilacLogoAlt
                ) : (
                  <ReactSVG src={lilacLogo} svgClassName="navbar-logo" />
                )}
              </a>
            </div>
            <div className="col-8 offcanvas-collapse d-none d-md-flex">
              <ul className="navbar-nav mx-auto">{desktopNavLinks}</ul>
            </div>
            <div className="col-2 text-right d-none d-md-block">
            <div>
                <DonateButton className="btn-primary" />
            </div>
            </div>
            <div className="col-2 hv-center">
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
  loadLilacLogo: propTypes.func,
  base: propTypes.object,
  logo: propTypes.string,
  pages: propTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

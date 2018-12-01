import React from 'react';
import propTypes from 'prop-types';

import { connect } from 'react-redux';
import { loadLilacLogo } from '../../store/base/base';

import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import ReactSVG from 'react-svg';

import MobileNavLinks from './components/Mobile Nav Links';
import DesktopNavLinks from './components/Desktop Nav Links';
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
      pages: ['projects', 'blog', 'team', 'about'],
      menuOpen: false
    };

    this.closeMenu = this.closeMenu.bind(this);
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
          <div className="row text-center">
            <div className="col-12">
              <Link to="/" onClick={() => this.closeMenu()}>
                {!lilacLogo ? (
                  lilacLogoAlt
                ) : (
                  <ReactSVG src={lilacLogo} svgClassName="navbar-logo" />
                )}
              </Link>
            </div>
            <div className="col-12">
              <ul className="navbar-nav mx-auto">
                <MobileNavLinks pages={pages} closeMenu={this.closeMenu} />
              </ul>
            </div>
          </div>
        </Menu>
        <div className="container-fluid">
          <div className="navbar-row row">
            <div className="col-10 col-md-2">
              <Link to="/" className="navbar-brand mr-auto mr-md-0">
                {!lilacLogo ? (
                  lilacLogoAlt
                ) : (
                  <ReactSVG src={lilacLogo} svgClassName="navbar-logo" />
                )}
              </Link>
            </div>
            <div className="col-8 offcanvas-collapse d-none d-md-flex">
              <ul className="navbar-nav mx-auto">
                <DesktopNavLinks pages={pages} />
              </ul>
            </div>
            <div className="col-2 text-right d-none d-md-block">
              <div>
                <DonateButton className="btn-primary" />
              </div>
            </div>
            <div className="col-2 hv-center">
              <button
                className="navbar-toggler p-2 border-0"
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

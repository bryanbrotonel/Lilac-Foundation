import React from "react";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { loadDonateLink } from "../../../../store/base/base";

import "./styles.scss";

const mapDispatchToProps = dispatch => {
  return {
    loadDonateLink: () => {
      dispatch(loadDonateLink());
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { base: state.base };
}

class MobileNavLinks extends React.Component {
  componentDidMount() {
    const { loadDonateLink } = this.props;

    // Dispatches loadDonateLink()
    loadDonateLink();
  }

  render() {
    const { pages, closeMenu, base } = this.props;

    // Mobile navbar links
    const mobileNavLinks = pages.map(page => {
      return (
        <li key={page} className="nav-item menu__item">
          <NavLink
            key={page}
            to={"/" + page}
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
          <a
            href={base.donateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Donate
          </a>
        </li>
      </React.Fragment>
    );
  }
}

MobileNavLinks.propTypes = {
  pages: propTypes.array.isRequired,
  closeMenu: propTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileNavLinks);

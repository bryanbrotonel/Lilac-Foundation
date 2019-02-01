import React from "react";
import Proptypes from "prop-types";

import { connect } from "react-redux";
import { loadDonateLink } from "../../store/base/base";

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

class DonateButton extends React.Component {
  componentDidMount() {
    const { loadDonateLink } = this.props;

    // Dispatches loadDonateLink()
    loadDonateLink();
  }

  render() {
    const { className, base } = this.props;

    return (
      <a href={base.donateLink} target="_blank" rel="noopener noreferrer">
        <button className={`donate-button btn ${className}`} type="submit">
          Donate
        </button>
      </a>
    );
  }
}

DonateButton.propTypes = {
  className: Proptypes.string,
  loadDonateLink: Proptypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonateButton);

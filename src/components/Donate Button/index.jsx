import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss';

class DonateButton extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <button
        className={`donate-button btn-lg ${className}`}
        type="submit"
      >
        Donate
      </button>
    );
  }
}

DonateButton.propTypes = {
  className: Proptypes.string
};

export default DonateButton;

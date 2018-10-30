import React from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTop.propTypes = {
  location: propTypes.object,
  children: propTypes.object
};

export default withRouter(ScrollToTop);
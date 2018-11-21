import React from 'react';
import PropTypes from 'prop-types';

import sr from './Scroll Reveal';

class ScrollReveal extends React.Component {
  componentDidMount() {
    sr.reveal('.scroll-reveal', this.props.config);
  }

  render() {
    const { className, children } = this.props;

    return <div className={`scroll-reveal ${className}`}>{children}</div>;
  }
}

ScrollReveal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  config: PropTypes.any
};

export default ScrollReveal;
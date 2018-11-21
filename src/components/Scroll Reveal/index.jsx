import React from 'react';
import PropTypes from 'prop-types';

import sr from './Scroll Reveal';

class ScrollReveal extends React.Component {
  componentDidMount() {
    sr.reveal('.scroll-reveal', this.props.config);
  }

  render() {
    const { children } = this.props;

    return <div className="scroll-reveal">{children}</div>;
  }
}

ScrollReveal.propTypes = {
  children: PropTypes.any.isRequired,
  config: PropTypes.any
};

export default ScrollReveal;

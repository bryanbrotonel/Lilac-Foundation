import React from 'react';

import './styles.scss';

class Loader extends React.Component {
  render() {
    return (
      <div className="lds-default">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}

export default Loader;

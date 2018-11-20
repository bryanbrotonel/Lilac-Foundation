import React from 'react';

import './styles.scss';

class HomeMasthead extends React.Component {
  // Changes navbar colour upon component mount
  componentDidMount() {
    document.getElementById('navbar').classList.add('navbar-dark');
  }

  // Resets navbar colour upon component unmount
  componentWillUnmount() {
    document.getElementById('navbar').classList.remove('navbar-dark');
  }

  render() {
    return (
      <div className="home-masthead">
        <div className="masthead-content-wrapper hv-center">
          <div className="masthead-content">
            <h1 className="masthead-title">The Lilac Foundation</h1>
            <h3 className="masthead-subtitle">To enrich the lives we embody</h3>
          </div>
        </div>
        <div className="masthead-image-wrapper">
          <img
            className="masthead-image"
            src="https://source.unsplash.com/QSLdySbceR8/1600x1024"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default HomeMasthead;

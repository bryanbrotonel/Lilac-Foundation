import React from 'react';
import Proptypes from 'prop-types';

import { connect } from 'react-redux';
import { loadHeaderImage } from '../../../../store/base/base';

import './styles.scss';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadHeaderImage: photoID => {
      dispatch(loadHeaderImage(photoID));
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { base: state.base };
}

class HomeMasthead extends React.Component {
  // Changes navbar colour upon component mount
  componentDidMount() {
    const { loadHeaderImage } = this.props;

    // Dispatches headerImage()
    loadHeaderImage('1J9XegkkvKY06uCkiAywge');

    document.getElementById('navbar').classList.add('navbar-dark');
  }

  // Resets navbar colour upon component unmount
  componentWillUnmount() {
    document.getElementById('navbar').classList.remove('navbar-dark');
  }

  render() {
    const { headerImage } = this.props.base;
    console.log(headerImage);

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
            src={headerImage}
            alt="The Lilac Foundation"
          />
        </div>
      </div>
    );
  }
}

HomeMasthead.propTypes = {
  loadHeaderImage: Proptypes.func,
  base: Proptypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeMasthead);

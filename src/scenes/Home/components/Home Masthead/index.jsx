import React from 'react';
import Proptypes from 'prop-types';

import { connect } from 'react-redux';
import { loadHeaderImage } from '../../../../store/base/base';
import { loadTLFCrest } from '../../../../store/home/home';

import DonateButton from '../../../../components/Donate Button';

import './styles.scss';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadTLFCrest() {
      dispatch(loadTLFCrest());
    },
    loadHeaderImage: photoID => {
      dispatch(loadHeaderImage(photoID));
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { base: state.base, home: state.home };
}

class HomeMasthead extends React.Component {
  // Changes navbar colour upon component mount
  componentDidMount() {
    const { loadTLFCrest, loadHeaderImage } = this.props;

    // Dispatches loadTLFCrest()
    loadTLFCrest();

    // Dispatches headerImage()
    loadHeaderImage('1J9XegkkvKY06uCkiAywge');

    // Changes navbar colour upon component mount
    document.getElementById('navbar').classList.remove('navbar-light');
    document.getElementById('navbar').classList.add('navbar-dark');
  }

  // Resets navbar colour upon component unmount
  componentWillUnmount() {
    document.getElementById('navbar').classList.remove('navbar-dark');
    document.getElementById('navbar').classList.add('navbar-light');
  }

  render() {
    const { headerImage } = this.props.base;
    const { TLFCrest } = this.props.home;

    return (
      <div className="home-masthead">
        <div className="masthead-background-wrapper">
          <img
            className="masthead-background"
            src={headerImage}
            alt="The Lilac Foundation"
          />
        </div>
        <div className="masthead-content-wrapper hv-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="masthead-image-wrapper col-8 col-md-5 d-none d-md-block">
                <img className="masthead-image" src={TLFCrest} alt="" />
              </div>
              <div className="col-12 col-md-7 hv-center">
                <div className="masthead-content">
                  <h1 className="masthead-title">The Lilac Foundation</h1>
                  <h3 className="masthead-subtitle">
                    To enrich the lives of those we embody
                  </h3>
                  <DonateButton className="masthead-donate-button btn-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomeMasthead.propTypes = {
  loadHeaderImage: Proptypes.func,
  loadTLFCrest: Proptypes.func,
  base: Proptypes.object,
  home: Proptypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeMasthead);

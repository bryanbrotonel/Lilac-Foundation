import React from 'react';
import Proptypes from 'prop-types';

import { connect } from 'react-redux';
import { loadHeaderImage } from '../../store/base/base';

import PageHeader from '../../components/Page Header';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadHeaderImage: () => {
      dispatch(loadHeaderImage('NokqFw6LQWUmYUWWmicyg'));
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { headerImage: state.base };
}

class About extends React.Component {
  componentDidMount() {
    const { loadHeaderImage } = this.props;

    // Dispatches headerImage()
    loadHeaderImage();
  }

  render() {
    const { headerImage } = this.props.headerImage;

    return (
      <div className="bg-gray">
        <PageHeader headerImage={headerImage}>
          <h1>About</h1>
          <h4>More behind the lilac</h4>
        </PageHeader>
      </div>
    );
  }
}

About.propTypes = {
  loadHeaderImage: Proptypes.func,
  headerImage: Proptypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);

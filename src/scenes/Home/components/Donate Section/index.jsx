import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import { loadDonateBlurb } from '../../../../store/home/home';

import PageSection from '../../../../components/Page Section';
import DonateButton from '../../../../components/Donate Button';

import './styles.scss';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadDonateBlurb() {
      dispatch(loadDonateBlurb());
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { home: state.home };
}

class MissionSection extends React.Component {
  componentDidMount() {
    const { loadDonateBlurb } = this.props;

    // Dispatches loadDonateBlurb
    loadDonateBlurb();
  }

  render() {
    const { loading, donateBlurb } = this.props.home;

    return (
      <PageSection className="donate-section">
        <img src="https://source.unsplash.com/AEaTUnvneik/1600x1024" alt="" />
        <div className="caption hv-center">
          <div className="text-center  col-12 col-md-6">
            {loading && !donateBlurb ? <h1 className="text-muted">
                Loading...
              </h1> : <React.Fragment>
                <h1>{donateBlurb.blurbTitle}</h1>
                <p>{donateBlurb.blurbContent}</p>
                <DonateButton className="btn-light" />
              </React.Fragment>}
          </div>
        </div>
      </PageSection>
  }
}

MissionSection.propTypes = {
  loadDonateBlurb: Proptypes.func,
  home: Proptypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MissionSection);

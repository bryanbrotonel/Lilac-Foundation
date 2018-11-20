import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadAboutBlurb } from '../../../../store/home/home';

import PageSection from '../../../../components/Page Section';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadAboutBlurb: () => {
      dispatch(loadAboutBlurb('1ug8aWyL1aAyqwewMEgiQU'));
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { home: state.home };
}

class AboutSection extends React.Component {
  componentDidMount() {
    const { loadAboutBlurb } = this.props;

    // Dispatches loadAboutBlurb
    loadAboutBlurb();
  }
  render() {
    const { loading, aboutBlurb } = this.props.home;

    return (
      <PageSection className="bg-gray">
        <div className="container hv-center">
          <div className="text-center col-12 col-md-6">
            {loading && !aboutBlurb ? (
              <h1 className="text-muted">Loading...</h1>
            ) : (
              <React.Fragment>
                <h1>{aboutBlurb.blurbTitle}</h1>
                <p>{aboutBlurb.blurbContent}</p>
                <Link to="/about">Learn More</Link>
              </React.Fragment>
            )}
          </div>
        </div>
      </PageSection>
    );
  }
}

AboutSection.propTypes = {
  loadAboutBlurb: Proptypes.func,
  home: Proptypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutSection);

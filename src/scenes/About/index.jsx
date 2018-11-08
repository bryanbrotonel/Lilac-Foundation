import React from 'react';
import Proptypes from 'prop-types';

import { connect } from 'react-redux';
import { loadHeaderImage } from '../../store/base/base';

import TeamMember from '../../components/Team Member';
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
  constructor() {
    super();
    this.state = {
      teamMembers: ['Member 1', 'Member 2', 'Member 3', 'Member 4']
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { loadHeaderImage } = this.props;

    // Dispatches headerImage()
    loadHeaderImage();
  }

  render() {
    const { teamMembers } = this.state;
    const { headerImage } = this.props.headerImage;

    const teamSectionItems = teamMembers.map(member => {
      return (
        <div key={member} className="col-8 col-sm-5 text-center">
          <TeamMember name={member} />
        </div>
      );
    });

    return (
      <div className="bg-gray">
        <PageHeader headerImage={headerImage}>
          <h1>About</h1>
          <h4>More behind the lilac</h4>
        </PageHeader>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-4 pb-3 pb-md-0 v-center">
              <h1>Meet the Team</h1>
              <h5>Let's get acquainted</h5>
            </div>
            <div className="team-section col-12 col-md-8">
              <div className="row hv-center">{teamSectionItems}</div>
            </div>
          </div>
        </div>
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

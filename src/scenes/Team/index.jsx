import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { loadHeaderImage } from '../../store/base/base';
import { loadTeamMembers } from '../../store/team/team';

import PageHeader from '../../components/Page Header';
import TeamMember from '../../components/Team Member';

import './styles.scss';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadHeaderImage: () => {
      dispatch(loadHeaderImage('3g3Bv3hTyEc28ey8CAqw0a'));
    },
    loadTeamMembers: () => {
      dispatch(loadTeamMembers());
    }
  };
};

// Maps Redux state to props
const mapStateToProps = state => {
  return { base: state.base, team: state.team };
};

class Team extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { loadHeaderImage, loadTeamMembers } = this.props;

    // Dispatches headerImage()
    loadHeaderImage();

    // Dispatches loadTeamMembers()
    loadTeamMembers();
  }

  render() {
    const { base, team } = this.props;
    const { headerImage } = base;
    const { teamMembers } = team;

    // Format each team member into TeamMember components
    if (teamMembers.length != 0) {
      var teamMemberItems = Object.keys(teamMembers).map(key => {
        const { name, role, profilePicture, path } = teamMembers[key].fields;

        return (
          <div key={name} className="col-8 col-sm-6 col-md-4 text-center">
            <Link to={`/team/${path}`}>
              <TeamMember
                name={name}
                role={role}
                profilePicture={profilePicture.fields.file.url}
              />
            </Link>
          </div>
        );
      });
    }

    return (
      <div className="bg-gray">
        <PageHeader headerImage={headerImage}>
          <h1>Team</h1>
        </PageHeader>
        <div className="container">
          <div className="row justify-content-center">
            <div className="team-section col-10">
              <div className="row justify-content-center">
                {teamMemberItems}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Team.propTypes = {
  loadTeamMembers: Proptypes.func,
  team: Proptypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Team);

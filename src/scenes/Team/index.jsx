import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

import { loadTeamMembers } from '../../store/team/team';
import { connect } from 'react-redux';

import PageHeader from '../../components/Page Header';
import TeamMember from '../../components/Team Member';

import './styles.scss';

const mapDispatchToProps = dispatch => {
  return {
    loadTeamMembers: () => {
      dispatch(loadTeamMembers());
    }
  };
};

const mapStateToProps = state => {
  return { team: state.team };
};

class Team extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { loadTeamMembers } = this.props;

    // Dispatches loadTeamMembers()
    loadTeamMembers();
  }

  render() {
    const { team } = this.props;
    const { teamMembers } = team;

    if (teamMembers.length != 0) {
      var teamMemberItems = Object.keys(teamMembers).map(key => {
        const { name, role, profilePicture, path } = teamMembers[key].fields;

        return (
          <div key={name} className="col-8 col-sm-3 text-center">
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
        <PageHeader headerImage="http://source.unsplash.com/m6RCv8K0rTM/1600x1024">
          <h1>Team</h1>
        </PageHeader>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, quas ullam aliquam, odio distinctio nemo quis
                commodi ea nobis maxime quidem. Vel dignissimos numquam beatae
                odit illo debitis ut quaerat.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="team-section col">
              <div className="row hv-center">{teamMemberItems}</div>
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

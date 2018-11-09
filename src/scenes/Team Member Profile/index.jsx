import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as Markdown from 'react-markdown';
import { connect } from 'react-redux';
import { loadTeamMembers } from '../../store/team/team';

import TeamMember from '../../components/Team Member';
import { Loader } from '../../components/Loader';

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

class TeamMemberProfile extends React.Component {
  constructor() {
    super();

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { loadTeamMembers } = this.props;

    // Dispatch loadTeamMembers()
    loadTeamMembers();
  }

  render() {
    const { team } = this.props;
    const { loading, teamMembers } = team;
    var memberInfo;

    const teamMember = teamMembers.find(
      member => member.fields.path === location.pathname.split('/').pop()
    );

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

      memberInfo = (
        <div className="member-info">
          <h3 className="member-name">{teamMember.fields.name}</h3>
          <h6 className="base-font">{teamMember.fields.role}</h6>
          <div className="text-muted">
            <ul className="socials-list">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      );
    }

    return (
      <React.Fragment>
        {loading && !teamMember ? (
          <Loader />
        ) : !teamMember ? (
          <div className="container hv-center">
            <h1 className="text-muted">Member not found :(</h1>
          </div>
        ) : (
          <div className="container my-5">
            <div className="row py-md-5 justify-content-center">
              <div className="col-8 col-md-5 col-lg-4 mb-3 text-center">
                <div className="member-info mb-3">
                  <img
                    alt="image"
                    className="rounded-circle w-75"
                    src={teamMember.fields.profilePicture.fields.file.url}
                  />
                </div>
                <div className="d-md-none">{memberInfo}</div>
              </div>
              <div className="col-12 col-md-7 col-lg-6">
                <div className="d-none d-md-block">{memberInfo}</div>
                <Markdown source={teamMember.fields.description} />
              </div>
              <div className="col-12 mb-3 text-center">
                <h2>Meet the Team</h2>
              </div>
              <div className="col-10">
                <div className="row hv-center">{teamMemberItems}</div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

TeamMemberProfile.propTypes = {
  loadTeamMembers: Proptypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamMemberProfile);

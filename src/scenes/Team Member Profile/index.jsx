import React from 'react';
import propTypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as Markdown from 'react-markdown';

import { connect } from 'react-redux';
import { loadTeamMembers } from 'store/team/team';

import NotFound from 'scenes/Not Found';
import TeamMember from 'components/Team Member';
import Loader from 'components/Loader';

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
        const { name, profilePicture, path } = teamMembers[key].fields;

        return (
          <div key={name} className="col-8 col-sm-6 col-md-4 text-center">
            <Link to={`/team/${path}`}>
              <TeamMember
                name={name}
                profilePicture={profilePicture.fields.file.url}
              />
            </Link>
          </div>
        );
      });
    }

    if (!loading && teamMember) {
      const { name, role, socials } = teamMember.fields;

      memberInfo = (
        <div className="member-info">
          <h3 className="member-name">{name}</h3>
          <h5 className="base-font">{role}</h5>
          <ul className="member-socials">
            {Object.keys(socials.fields).map(key => {
              return (
                <li key={`${name} - ${key}`}>
                  <a
                    href={socials.fields[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="member-social-link"
                  >
                    {key}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }

    return loading ? (
      <Loader />
    ) : !teamMember ? (
      <NotFound />
    ) : (
      <div className="container my-5">
        <div className="row pb-md-5 justify-content-center">
          <div className="col-10 col-md-5 col-lg-4 text-center">
            <div className="member-info">
              <img
                alt="image"
                className="rounded-circle w-75"
                src={teamMember.fields.profilePicture.fields.file.url}
              />
            </div>
          </div>
          <div className="col-12 d-lg-none text-center mb-3">{memberInfo}</div>
          <div className="col-12 col-md-10 col-lg-6">
            <div className="d-none d-lg-block">{memberInfo}</div>
            <Markdown source={teamMember.fields.description} />
          </div>
          <div className="col-12 mb-3 text-center">
            <h3>Meet the Team</h3>
          </div>
          <div className="col-10 col-lg-8">
            <div className="row justify-content-center">{teamMemberItems}</div>
          </div>
        </div>
      </div>
    );
  }
}

TeamMemberProfile.propTypes = {
  loadTeamMembers: propTypes.func,
  team: propTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamMemberProfile);

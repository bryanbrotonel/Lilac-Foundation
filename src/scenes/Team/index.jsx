import React from 'react';
import Proptypes from 'prop-types';

import { connect } from 'react-redux';
import { loadHeaderImage } from 'store/base/base';
import { loadTeamMembers } from 'store/team/team';

import { Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

import PageHeader from 'components/Page Header';
import TeamMember from 'components/Team Member';
import ScrollReveal from 'components/Scroll Reveal';

import './styles.scss';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadHeaderImage: photoID => {
      dispatch(loadHeaderImage(photoID));
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
    loadHeaderImage('CiDgPq3WpwUIoUQ4OIGYI');

    // Dispatches loadTeamMembers()
    loadTeamMembers();
  }

  render() {
    const { base, team } = this.props;
    const { headerImage } = base;
    const { teamMembers } = team;

    // Scroll reveal config
    const revealConfig = {
      origin: 'bottom',
      duration: 1000,
      delay: 500,
      distance: '25px',
      scale: 1,
      easing: 'ease-out',
      interval: 200
    };

    // Format each team member into TeamMember components
    if (teamMembers.length != 0) {
      var teamMemberItems = Object.keys(teamMembers).map(key => {
        const { name, role, profilePicture, path } = teamMembers[key].fields;

        return (
          <div key={name} className="col-9 col-sm-6 col-md-4 text-center">
            <Link className="team-member-link" to={`/team/${path}`}>
              <ScrollReveal config={revealConfig}>
                <TeamMember
                  name={name}
                  role={role}
                  profilePicture={profilePicture.fields.file.url}
                />
              </ScrollReveal>
            </Link>
          </div>
        );
      });
    }

    return (
      <DocumentTitle title="Team | The Lilac Foundation">
        <div className="bg-gray">
          <PageHeader headerImage={headerImage}>
            <h1>Team</h1>
          </PageHeader>
          <div className="container">
            <div className="row justify-content-center">
              <div className="team-section col-12 col-lg-10">
                <div className="row justify-content-center">
                  {teamMemberItems}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

Team.propTypes = {
  loadTeamMembers: Proptypes.func,
  loadHeaderImage: Proptypes.func,
  team: Proptypes.object,
  base: Proptypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Team);

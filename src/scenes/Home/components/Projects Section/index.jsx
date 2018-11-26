import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import { loadCurrentProjects } from '../../../../store/projects/projects';

import PageSection from '../../../../components/Page Section';
import PageItem from '../../../../components/Page Item';
import ScrollReveal from '../../../../components/Scroll Reveal';

import './styles.scss';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadCurrentProjects: limit => {
      dispatch(loadCurrentProjects(limit));
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { projects: state.projects };
}

class ProjectsSection extends React.Component {
  componentDidMount() {
    const { loadCurrentProjects } = this.props;

    // Dispatches loadCurrentProjects()
    loadCurrentProjects(2);
  }

  // Creates url with post title and id
  createURL(str, title, id) {
    return `${str[0]}${title.replace(/\s+/g, '-').toLowerCase()}-${id}`;
  }

  render() {
    const { loading, currentProjects } = this.props.projects;

    var projectItems;

    // Sort projects when done loading projects
    if (!loading && currentProjects) {

      // Scroll reveal config
      const revealConfig = {
        origin: 'bottom',
        duration: 1000,
        delay: 200,
        distance: '50px',
        scale: 1,
        easing: 'ease'
      };

      projectItems = Object.keys(currentProjects).map(key => {
        const { title, headerImage } = currentProjects[key].fields;
        const { id } = currentProjects[key].sys;
        const path = this.createURL`${title}${id}`;

        return (
          <div key={id} className="project-section-item col-12 col-md-6">
            <ScrollReveal config={revealConfig}>
              <PageItem
                path={`/projects/${path}`}
                title={title}
                headerImage={headerImage.fields.file.url}
              />
            </ScrollReveal>
          </div>
        );
      });
    }

    return (
      <PageSection>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Projects</h1>
            </div>
            {loading ? (
              <div className="col-12 text-center">
                <h1>Loading</h1>
              </div>
            ) : (
              projectItems
            )}
          </div>
        </div>
      </PageSection>
    );
  }
}

ProjectsSection.propTypes = {
  loadCurrentProjects: Proptypes.func,
  projects: Proptypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsSection);

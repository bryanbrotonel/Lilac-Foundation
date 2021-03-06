import React from 'react';
import Proptypes from 'prop-types';

import { connect } from 'react-redux';
import { loadHeaderImage } from '../../store/base/base';
import {
  loadCurrentProjects,
  loadFutureProjects
} from 'store/projects/projects';

import DocumentTitle from 'react-document-title';

import Loader from 'components/Loader';
import PageHeader from 'components/Page Header';
import NoItems from 'components/No Items';
import ScrollReveal from 'components/Scroll Reveal';
import CurrentProjectItem from './components/Current Project Item';
import FutureProjectItem from './components/Future Project Item';

import './styles.scss';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadCurrentProjects: () => {
      dispatch(loadCurrentProjects());
    },
    loadFutureProjects: () => {
      dispatch(loadFutureProjects());
    },
    loadHeaderImage: photoID => {
      dispatch(loadHeaderImage(photoID));
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { base: state.base, projects: state.projects };
}

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const {
      loadHeaderImage,
      loadCurrentProjects,
      loadFutureProjects
    } = this.props;

    // Dispatches headerImage()
    loadHeaderImage('1rod766IpGKmKQCWGKOeQc');

    // Dispatches loadCurrentProjects()
    loadCurrentProjects();

    // Dispatches loadFutureProjects()
    loadFutureProjects();
  }

  render() {
    const { loading, currentProjects, futureProjects } = this.props.projects;

    const { headerImage } = this.props.base;

    // Scroll reveal config
    const revealConfig = {
      origin: 'bottom',
      duration: 1000,
      delay: 500,
      distance: '25px',
      scale: 1,
      easing: 'ease-out'
    };

    if (futureProjects.length !== 0) {
      // Display future projects section
      var displayFutureProjects = (
        <div className="row future-projects-section">
          <div className="col-12 text-center">
            <h2 className="projects-section-title">Future Projects</h2>
          </div>
          {// Future projects mapping
          futureProjects.map(({ fields, sys }, i) => (
            <div className="col-12 col-md-6" key={i}>
              <FutureProjectItem {...fields} {...sys} />
            </div>
          ))}
        </div>
      );

      // Display current projects section title
      var currentProjectsTitle = (
        <div className="col-12">
          <h2 className="projects-section-title">Current Projects</h2>
        </div>
      );
    }

    return (
      <DocumentTitle title="Projects | The Lilac Foundation">
        <div>
          <PageHeader headerImage={headerImage}>
            <h1>Projects</h1>
          </PageHeader>
          <div className="container">
            {loading ? (
              <Loader />
            ) : (
              <React.Fragment>
                <div className="row current-projects-section">
                  {currentProjectsTitle}
                  {// Current projects mapping
                  currentProjects.length === 0 ? (
                    <div className="col-12">
                      <NoItems item="Projects" />
                    </div>
                  ) : (
                    currentProjects.map(({ fields, sys }, i) => (
                      <div className="col-12 col-md-6 mb-3 mb-lg-0" key={i}>
                        <ScrollReveal config={revealConfig}>
                          <CurrentProjectItem {...fields} {...sys} />
                        </ScrollReveal>
                      </div>
                    ))
                  )}
                </div>
                {displayFutureProjects}
              </React.Fragment>
            )}
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

Projects.propTypes = {
  loadProjects: Proptypes.func,
  loadHeaderImage: Proptypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);

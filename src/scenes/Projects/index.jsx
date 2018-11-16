import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { loadProjects } from '../../store/projects/projects';
import { loadHeaderImage } from '../../store/base/base';

import PageHeader from '../../components/Page Header';
import { Loader } from '../../components/Loader';
import CurrentProjectItem from './components/Current Project Item';
import FutureProjectItem from './components/Future Project Item';

import './styles.scss';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadProjects: () => {
      dispatch(loadProjects());
    },
    loadHeaderImage: () => {
      dispatch(loadHeaderImage('2iuUpTaObaSCw0kcya8Ci'));
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
    const { loadHeaderImage, loadProjects } = this.props;

    // Dispatches headerImage()
    loadHeaderImage();

    // Dispatches loadProjects()
    loadProjects();
  }

  sortProjects(projects) {
    var currentProjects = new Array(),
      futureProjects = new Array();

    for (var project in projects) {
      // Assign project object
      let projectObj = projects[project];

      // Sort current and future projects from currentProject boolean
      if (projectObj.fields.currentProject) {
        currentProjects.push(projectObj);
      } else {
        futureProjects.push(projectObj);
      }
    }

    // Sort current projects by <date></date>
    currentProjects.sort(function(a, b) {
      return new Date(b.fields.date) - new Date(a.fields.date);
    });

    // Returns array of the storted projects
    return [currentProjects, futureProjects];
  }

  render() {
    const { loading, projects } = this.props.projects;
    var sortedProjects;

    // When done loading projects
    if (!loading) {
      sortedProjects = this.sortProjects(projects);
    }

    const { headerImage } = this.props.base;

    return (
      <div className=" bg-gray">
        <PageHeader headerImage={headerImage}>
          <h1>Projects</h1>
        </PageHeader>
        <div className="container">
          {loading ? (
            <Loader />
          ) : (
            <React.Fragment>
              <div className="row current-projects-section">
                <div className="col-12">
                  <h2 className="projects-section-title">Current Projects</h2>
                </div>
                {// Current projects mapping
                sortedProjects[0].map(({ fields, sys }, i) => (
                  <div className="col-12 col-lg-6 mb-3 mb-lg-0" key={i}>
                    <CurrentProjectItem {...fields} {...sys} />
                  </div>
                ))}
              </div>
              <div className="row future-projects-section">
                <div className="col-12 text-center">
                  <h3 className="projects-section-title">Future Projects</h3>
                </div>
                {// Future projects mapping
                sortedProjects[1].map(({ fields, sys }, i) => (
                  <div className="col-12 col-md-6" key={i}>
                    <FutureProjectItem {...fields} {...sys} />
                  </div>
                ))}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
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

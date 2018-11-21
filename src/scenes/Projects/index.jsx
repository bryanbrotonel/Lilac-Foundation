import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import { loadHeaderImage } from '../../store/base/base';
import {
  loadCurrentProjects,
  loadFutureProjects
} from '../../store/projects/projects';

import PageHeader from '../../components/Page Header';
import { Loader } from '../../components/Loader';
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

    return (
      <div className="bg-gray">
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
                currentProjects.map(({ fields, sys }, i) => (
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
                futureProjects.map(({ fields, sys }, i) => (
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

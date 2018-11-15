import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { loadProjects } from '../../store/projects/projects';
import { loadHeaderImage } from '../../store/base/base';

import PageHeader from '../../components/Page Header';
import { Loader } from '../../components/Loader';
import CurrentProjectItem from './Current Project Item';

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
  console.log(state.projects)
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

  render() {
    const { loading, projects } = this.props.projects;
    console.log(loading, projects);
    
    const { headerImage } = this.props.base;

    return (
      <div className=" bg-gray">
        <h1>Projects</h1>
        <PageHeader headerImage={headerImage}>
          <h1>Projects</h1>
        </PageHeader>
        <div className="projects-page container">
          <div className="projects-section row">
            {loading ? (
              <Loader />
            ) : (
              projects.map(({ fields, sys }, i) => (
                <div className="col-12 col-md-4" key={i}>
                    <CurrentProjectItem {...fields} {...sys} />
                </div>
              ))
            )}
          </div>
          <div className="projects-section row justify-content-center">
            <div className="col-6 text-center">
              <h3>Work With Us</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
                maxime, animi consequatur doloremque totam nostrum facilis quo
                voluptatum ipsam illum quod quaerat neque! Ad dicta unde dolores
                voluptates veritatis laborum.
              </p>
            </div>
          </div>
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

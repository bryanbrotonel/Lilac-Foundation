import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import * as Markdown from 'react-markdown';
import moment from 'moment';

import { loadProjectPost } from '../../store/projects/projects';

import './styles.scss';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadProjectPost: id => {
      dispatch(loadProjectPost(id));
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { projectPost: state.projects.projectPost };
}

class ProjectPost extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { location, loadProjectPost } = this.props;

    // Get post id from url
    const id = location.pathname.split('-').pop();

    // Dispatches loadBlogPost(id) with post id as argument
    loadProjectPost(id);
  }

  render() {
    const { projectPost } = this.props;
    const { title, date, content, projectPictures } = projectPost;

    return <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 project-post-sidebar">
            <div className="project-post-content">
              <h2 className="project-post-title">{title}</h2>
              <p className="project-post-date">
                {moment(date).calendar(null, {
                  sameDay: '[Today]',
                  lastDay: '[Yesterday]',
                  lastWeek: '[Last] dddd',
                  sameElse: 'MMM[.] Do YYYY'
                })}
              </p>
              <Markdown className="markdown-content" source={content} />
            </div>
          </div>
          <div className="col-12 col-md-6 project-images hv-center" id="main">
            <div>
              <Markdown className="markdown-content" source={projectPictures} />
            </div>
          </div>
        </div>
      </div>;
  }
}

ProjectPost.propTypes = {
  projectPost: Proptypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectPost);

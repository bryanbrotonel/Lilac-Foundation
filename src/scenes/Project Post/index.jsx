import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import * as Markdown from 'react-markdown';
import moment from 'moment';

import { loadProjectPost } from '../../store/projects/projects';

import ShareItem from '../../components/Share Item';

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
    const { title, date, content } = projectPost;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-7">
            <div className="project-post-wrapper">
              <h1 className="project-post-title">{title}</h1>
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
        </div>
        <div className="row">
          <div className="col-12 col-md-4 container text-center">
            <div className="pt-4">
              <ShareItem pageTitle={title} />
            </div>
            <div className="py-4">
              <Link className="text-muted" to="/projects">
                More Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectPost.propTypes = {
  projectPost: Proptypes.any,
  location: Proptypes.object,
  loadProjectPost: Proptypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectPost);

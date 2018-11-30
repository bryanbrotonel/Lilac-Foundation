import React from 'react';
import Proptypes from 'prop-types';

import { connect } from 'react-redux';
import { loadProjectPost } from 'store/projects/projects';

import { Link } from 'react-router-dom';
import * as Markdown from 'react-markdown';
import moment from 'moment';
import DocumentTitle from 'react-document-title';

import NotFound from 'scenes/Not Found';
import Loader from 'components/Loader';
import ShareItem from 'components/Share Item';

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
  return { projects: state.projects };
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
    const { projects } = this.props;
    const { loading, projectPost } = projects;
    const { title, date, content } = projectPost;

    return loading ? (
      <Loader />
    ) : projectPost.length === 0 ? (
      <NotFound />
    ) : (
      <DocumentTitle title={`${title} | The Lilac Foundation`}>
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
                <Link className="action-link-dark" to="/projects">
                  More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

ProjectPost.propTypes = {
  projects: Proptypes.object,
  location: Proptypes.object,
  loadProjectPost: Proptypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectPost);

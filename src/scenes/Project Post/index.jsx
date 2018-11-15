import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import * as Markdown from 'react-markdown';

import { loadProjectPost } from '../../store/projects/projects';

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
  console.log('state', state);
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
    console.log(id);

    // Dispatches loadBlogPost(id) with post id as argument
    loadProjectPost(id);
  }

  render() {
    const { projectPost } = this.props;
    const { title, content } = projectPost;

    return (
      <div>
        <div className="row no-gutters justify-content-center">
          <div className="col-md-6">
            <div className="container">
              <h1 className="text-center">{title}</h1>
              <Markdown className="markdown-content" source={content} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectPost.propTypes = {
  projectPost: Proptypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectPost);

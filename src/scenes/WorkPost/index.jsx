import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import * as Markdown from 'react-markdown';

import { loadWorkPost } from '../../store/work/work';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadWorkPost: id => {
      dispatch(loadWorkPost(id));
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  console.log('state', state);
  return { workPost: state.work.workPost };
}

class WorkPost extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { location, loadWorkPost } = this.props;

    // Get post id from url
    const id = location.pathname.split('-').pop();
    console.log(id);

    // Dispatches loadBlogPost(id) with post id as argument
    loadWorkPost(id);
  }

  render() {
    const { workPost } = this.props;
    const { title, content } = workPost;

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

WorkPost.propTypes = {
  workPost: Proptypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkPost);

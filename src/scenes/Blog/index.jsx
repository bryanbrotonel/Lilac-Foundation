import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { loadBlog } from '../../store/blog/blog';

import { Loader } from '../../components/Loader';
import BlogItem from './components/BlogItem';

import PageHeader from '../../components/Page Header';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadBlog: () => {
      dispatch(loadBlog());
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { blog: state.blog };
}

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { loadBlog } = this.props;

    // Dispatches loadBlog()
    loadBlog();
  }

  render() {
    const { loading, posts } = this.props.blog;

    return (
      <div className="bg-gray">
        <PageHeader headerImage="https://source.unsplash.com/fVUl6kzIvLg/1600x900">
          <h1>Blog</h1>
        </PageHeader>
        <div className="container">
          <div className="row justify-content-between">
            {loading ? (
              <div className="col-12">
                <Loader />
              </div>
            ) : (
              posts.map(({ fields, sys }, i) => (
                <BlogItem key={i} {...fields} {...sys} />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

Blog.propTypes = {
  loadBlog: Proptypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);

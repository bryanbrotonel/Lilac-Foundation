import React from 'react';
import Proptypes from 'prop-types';

import { connect } from 'react-redux';
import { loadBlog } from '../../store/blog/blog';
import { loadHeaderImage } from '../../store/base/base';

import { Loader } from '../../components/Loader';
import BlogItem from './components/BlogItem';
import PageHeader from '../../components/Page Header';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadBlog: () => {
      dispatch(loadBlog());
    },
    loadHeaderImage: () => {
      dispatch(loadHeaderImage('6zLfKvDvY4OkAiAm4SSam0'));
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { headerImage: state.base, blog: state.blog };
}

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { loadHeaderImage, loadBlog } = this.props;

    // Dispatches headerImage()
    loadHeaderImage();

    // Dispatches loadBlog()
    loadBlog();
  }

  render() {
    const { loading, posts } = this.props.blog;
    const { headerImage } = this.props.headerImage;

    return <div className="bg-gray">
        <PageHeader headerImage={headerImage}>
          <h1>Blog</h1>
        </PageHeader>
        <div className="container">
          <div className="row justify-content-between">
            {loading ? <div className="col-12">
                <Loader />
              </div> : posts.map(({ fields, sys }, i) => (
                <BlogItem key={i} {...fields} {...sys} />
              ))}
          </div>
        </div>
      </div>;
  }
}

Blog.propTypes = {
  loadBlog: Proptypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);

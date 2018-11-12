import React from 'react';
import Proptypes from 'prop-types';

import { connect } from 'react-redux';
import { loadBlog } from '../../store/blog/blog';
import { loadHeaderImage } from '../../store/base/base';

import { Loader } from '../../components/Loader';
import PageHeader from '../../components/Page Header';
import BlogGridItem from './components/Blog Grid Item';
import BlogListItem from './components/Blog List Item';

import './styles.scss';

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

    this.state = {
      gridDisplay: true
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { loadHeaderImage, loadBlog } = this.props;

    // Dispatches headerImage()
    loadHeaderImage();

    // Dispatches loadBlog()
    loadBlog();
  }

  // Toggle blog grid display
  toggleDisplay() {

    this.setState(prevState => ({
      gridDisplay: !prevState.gridDisplay
    }));
  }

  render() {
    const { gridDisplay } = this.state;
    const { loading, posts } = this.props.blog;
    const { headerImage } = this.props.headerImage;

    return (
      <div className="bg-gray">
        <PageHeader headerImage={headerImage}>
          <h1>Blog</h1>
        </PageHeader>
        <div className="container">
          <div className="row justify-content-end">
            <div
              className="col-6 blog-display-toggle"
              onClick={() => this.toggleDisplay()}
            >
              <span className="no-select">
                View as&nbsp;
                <span className={gridDisplay ? 'font-weight-bold' : ''}>
                  Grid
                </span>
                &nbsp;|&nbsp;
                <span className={!gridDisplay ? 'font-weight-bold' : ''}>
                  List
                </span>
              </span>
            </div>
          </div>
          {loading ? (
            <div className="hv-center">
              <Loader />
            </div>
          ) : gridDisplay ? (
            <React.Fragment>
              <div className="row justify-content-between">
                {posts.map(({ fields, sys }, i) => (
                  <BlogGridItem key={i} {...fields} {...sys} />
                ))}
              </div>
            </React.Fragment>
          ) : (
            posts.map(({ fields, sys }, i) => (
              <BlogListItem key={i} {...fields} {...sys} />
            ))
          )}
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

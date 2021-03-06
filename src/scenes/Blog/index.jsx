import React from 'react';
import Proptypes from 'prop-types';

import { connect } from 'react-redux';
import { loadBlog } from '../../store/blog/blog';
import { loadHeaderImage } from '../../store/base/base';
import DocumentTitle from 'react-document-title';

import Loader from 'components/Loader';
import PageHeader from 'components/Page Header';
import NoItems from '../../components/No Items';
import BlogGridItem from './components/Blog Grid Item';
import BlogListItem from './components/Blog List Item';
import Pagination from 'components/Pagination';

import './styles.scss';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadHeaderImage: photoID => {
      dispatch(loadHeaderImage(photoID));
    },
    loadBlog: () => {
      dispatch(loadBlog());
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
      currentBlogPosts: [],
      pageLimit: 4,
      currentPage: null,
      totalPages: null,
      gridDisplay: true
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.onPageChanged = this.onPageChanged.bind(this);
  }

  componentDidMount() {
    const { loadHeaderImage, loadBlog } = this.props;

    // Dispatches headerImage()
    loadHeaderImage('5gEc5LhPBuaSMAOGSg4ucC');

    // Dispatches loadBlog()
    loadBlog();
  }

  displayBlog() {}

  // Toggle blog grid display
  toggleDisplay() {
    this.setState(prevState => ({
      gridDisplay: !prevState.gridDisplay
    }));
  }

  onPageChanged(data) {
    const { posts } = this.props.blog;
    const { currentPage, totalPages, pageLimit } = data;

    // Get blog posts offset for current page
    const offset = (currentPage - 1) * pageLimit;

    // Get blog posts for current page
    const currentBlogPosts = posts.slice(0, offset + pageLimit);

    this.setState({ currentBlogPosts, currentPage, totalPages });
  }

  render() {
    const { gridDisplay, currentBlogPosts, pageLimit } = this.state;
    const { loading, posts } = this.props.blog;
    const { headerImage } = this.props.headerImage;

    return (
      <DocumentTitle title="Blog | The Lilac Foundation">
        <div className="bg-gray">
          <PageHeader headerImage={headerImage}>
            <h1>Blog</h1>
          </PageHeader>
          <div className="container">
            {loading ? (
              <div className="hv-center">
                <Loader />
              </div>
            ) : posts.length === 0 ? (
              <NoItems item="blog posts" />
            ) : (
              <React.Fragment>
                <div className="row justify-content-end">
                  <div
                    className="col-6 blog-display-toggle"
                    onClick={() => this.toggleDisplay()}
                  >
                    <span className="no-select">
                      View as&nbsp;
                      <span className={gridDisplay ? "font-weight-bold" : ""}>
                        Grid
                      </span>
                      &nbsp;|&nbsp;
                      <span className={!gridDisplay ? "font-weight-bold" : ""}>
                        List
                      </span>
                    </span>
                  </div>
                </div>
                {gridDisplay ? (
                  <React.Fragment>
                    <div className="row justify-content-between">
                      {currentBlogPosts.map(({ fields, sys }, i) => (
                        <div className="col-12 col-md-6 mb-3 mb-lg-0">
                          <BlogGridItem key={i} {...fields} {...sys} />
                        </div>
                      ))}
                    </div>
                  </React.Fragment>
                ) : (
                  currentBlogPosts.map(({ fields, sys }, i) => (
                    <BlogListItem key={i} {...fields} {...sys} />
                  ))
                )}
                <div className="col-12 col-md-4 container text-center">
                  <Pagination
                    totalItems={posts.length}
                    pageLimit={pageLimit}
                    onPageChanged={this.onPageChanged}
                  />
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </DocumentTitle>
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

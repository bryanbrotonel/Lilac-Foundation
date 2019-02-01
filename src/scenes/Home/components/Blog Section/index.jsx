import React from 'react';
import Proptypes from 'prop-types';

import * as Markdown from 'react-markdown';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { loadBlog } from 'store/blog/blog';

import PageSection from 'components/Page Section';
import Loader from 'components/Loader';

import './styles.scss';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadBlog: () => {
      dispatch(loadBlog(1));
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { blog: state.blog };
}

class BlogSection extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { loadBlog } = this.props;

    // Dispatches loadBlog()
    loadBlog();
  }

  createURL(str, title, id) {
    return `${str[0]}${title.replace(/\s+/g, '-').toLowerCase()}-${id}`;
  }

  render() {
    const { blog } = this.props;
    const { loading, posts } = blog;

    var latestPost, path;

    if (!loading && posts.length !== 0) {
      // Assigns latest to post to first post from sorted blog entries
      latestPost = posts[0].fields;

      // Creates path to blog post
      path = this.createURL`${latestPost.title}${posts[0].sys.id}`;
    }

    // Home blog section title
    const sectionTitle = <h1 className="blog-section-title">The Lilac Foundation Blog</h1>;

    return loading ? (
      <Loader />
    ) : !loading && posts.length === 0 ? (
      <PageSection>
        <div className="container hv-center">
          <div className="text-center">
            <h1>The Lilac Foundation Blog</h1>
            <h5 className="base-font">Coming soon</h5>
          </div>
        </div>
      </PageSection>
    ) : (
      <div>
        <div className="row no-gutters justify-content-center blog-section-wrapper">
          <div className="col-12 py-4 d-md-block d-lg-none">
            <div className="container py-3">{sectionTitle}</div>
          </div>
          <div className="col-12 col-lg-5">
            <div
              className="blog-section-header"
              style={{
                backgroundImage:
                  'url(' + latestPost.headerImage.fields.file.url + ')'
              }}
            />
          </div>
          <div className="col-12 col-lg-7">
            <div className="blog-section-content container">
              <div className="pb-3">
                <div className="pb-4 d-none d-lg-block">{sectionTitle}</div>
                <h2 className="blog-post-title">{latestPost.title}</h2>
                <h3 className="blog-post-subtitle">{latestPost.subtitle}</h3>
              </div>
              <Markdown
                className="markdown-snippet"
                source={latestPost.content
                  .split('')
                  .splice(0, 150)
                  .join('')
                  .concat('...')}
              />
              <Link className="action-link-primary" to={`/blog/${path}`}>
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BlogSection.propTypes = {
  loadBlog: Proptypes.func,
  blog: Proptypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogSection);

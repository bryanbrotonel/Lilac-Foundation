import React from 'react';
import Proptypes from 'prop-types';

import { connect } from 'react-redux';
import { loadBlogPost } from 'store/blog/blog';

import { Link } from 'react-router-dom';
import moment from 'moment';
import * as Markdown from 'react-markdown';
import DocumentTitle from 'react-document-title';

import NotFound from 'scenes/Not Found';
import Loader from 'components/Loader';
import PageHeader from 'components/Page Header';
import ShareItem from 'components/Share Item';

import './styles.scss';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadBlogPost: id => {
      dispatch(loadBlogPost(id));
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { blog: state.blog };
}

class BlogPost extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { location, loadBlogPost } = this.props;

    // Get post id from url
    const id = location.pathname.split('-').pop();

    // Dispatches loadBlogPost(id) with post id as argument
    loadBlogPost(id);
  }

  render() {
    const { blog } = this.props;
    const { loading, singlePost } = blog;
    const { headerImage, date, title, subtitle, content, author } = singlePost;

    return loading ? (
      <Loader />
    ) : singlePost.length === 0 ? (
      <NotFound />
    ) : (
      <DocumentTitle title={`${title} | The Lilac Foundation`}>
        <React.Fragment>
          <PageHeader headerImage={headerImage.fields.file.url}>
            <div className="post-heading">
              <h1 className="title">{title}</h1>
              <h5 className="subtitle">{subtitle}</h5>
              <span className="meta">
                Published by {author}{' '}
                {moment(date).calendar(null, {
                  sameDay: '[today]',
                  lastDay: '[yesterday]',
                  lastWeek: '[last] dddd',
                  sameElse: '[on] MMM Do YYYY'
                })}
              </span>
            </div>
          </PageHeader>

          <div className="blog-post-wrapper container">
            <div className="row no-gutters justify-content-center">
              <div className="col-md-8 col-lg-7">
                <Markdown
                  className="markdown-content blog-post-content"
                  source={content}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4 container text-center">
                <div className="pt-4">
                  <ShareItem pageTitle={title} />
                </div>
                <div className="py-4">
                  <Link className="action-link-dark" to="/blog">
                    More Blog Posts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </DocumentTitle>
    );
  }
}

BlogPost.propTypes = {
  location: Proptypes.object.isRequired,
  loadBlogPost: Proptypes.func,
  blog: Proptypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPost);

import React from 'react';
import Proptypes from 'prop-types';

import { connect } from 'react-redux';
import { loadBlogPost } from 'store/blog/blog';

import { Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

import NotFound from 'scenes/Not Found';
import Loader from 'components/Loader';
import PageHeader from 'components/Page Header';
import PostLayout from 'components/Post Layout';
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
    const { sys, fields } = singlePost;

    if (sys && fields) {
      var { updatedAt } = sys;
      var { headerImage, title, subtitle, content, author } = fields;
    }

    return loading ? (
      <Loader />
    ) : singlePost.length === 0 ? (
      <NotFound />
    ) : (
      <DocumentTitle title={`${title} | The Lilac Foundation`}>
        <React.Fragment>
          <PageHeader headerImage={headerImage.fields.file.url} />

          <div className="container">
            <PostLayout
              title={title}
              subtitle={subtitle}
              author={author}
              date={updatedAt}
              content={content}
            />
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

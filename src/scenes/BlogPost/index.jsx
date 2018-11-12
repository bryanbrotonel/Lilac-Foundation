import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import moment from 'moment';
import * as Markdown from 'react-markdown';

import { Loader } from '../../components/Loader';
import { loadBlogPost } from '../../store/blog/blog';

import './styles.scss';
import PageHeader from '../../components/Page Header';

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
  return { post: state.blog.singlePost };
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
    const { post } = this.props;
    const { headerImage, date, title, subtitle, content, author } = post;    

    return post.length !== 0 ? (
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

        <div>
          <div className="row no-gutters justify-content-center">
            <div className="col-md-7">
              <div className="container">
                <Markdown className="markdown-content blog-post-content" source={content} />
              </div>
            </div>
            <div className="back-to-blog col-12">
              <Link to="/blog">Back to Blog</Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    ) : (
      <Loader />
    );
  }
}

BlogPost.propTypes = {
  location: Proptypes.object.isRequired,
  loadBlogPost: Proptypes.func,
  post: Proptypes.any
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPost);

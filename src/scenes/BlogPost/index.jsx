import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import moment from 'moment';
import * as Markdown from 'react-markdown';

import PageContent from '../../components/PageContent';
import { loadBlogPost } from '../../store/blog';

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
    const { date, title, content } = post;

    return (
      <PageContent>
        <nav className="level">
          <div className="level-left">
            <Link
              className="level-item button is-small is-link is-outlined"
              to="/blog"
            >
              Back to Blog
            </Link>
          </div>
          <div className="level-right">
            <p className="level-item has-text-link is-size-7">
              {' '}
              {moment(date).calendar(null, {
                sameDay: '[Today]',
                lastDay: '[Yesterday]',
                lastWeek: '[Last] dddd',
                sameElse: 'MMM Do YYYY'
              })}
            </p>
          </div>
        </nav>
        <article className="media">
          <div className="media-content">
            <div className="content">
              <h1>{title}</h1>
              <Markdown source={content} />
            </div>
          </div>
        </article>
      </PageContent>
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

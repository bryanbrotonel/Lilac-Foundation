import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import moment from 'moment';
import * as Markdown from 'react-markdown';

import { Loader } from '../../components/Loader';
import { loadBlogPost } from '../../store/blog';

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
        <header
          className="masthead hv-center"
          style={{
            backgroundImage: 'url(' + headerImage.fields.file.url + ')'
          }}
        >
          <div className="overlay" />

          <div className="heading row no-gutters justify-content-center w-100">
            <div className="col-md-6 post-heading">
              <div className="container">
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
            </div>
          </div>
        </header>

        <div>
          <div className="row no-gutters justify-content-center">
            <div className="col-sm-8 col-md-6">
              <div className="container">
                <Markdown className="blog-post-content" source={content} />
              </div>
            </div>
            <div className="col-12 text-center pt-5">
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

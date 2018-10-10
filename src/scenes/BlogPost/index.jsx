import React from 'react';
import Proptypes from 'prop-types';

import { Link } from 'react-router-dom';
import moment from 'moment';
import * as Markdown from 'react-markdown';

import PageContent from '../../components/PageContent';

class BlogPost extends React.Component {
  render() {
    const { location } = this.props;
    const { date, title, content } = location.state;

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
  title: Proptypes.string,
  content: Proptypes.string,
  date: Proptypes.string
};

export default BlogPost;

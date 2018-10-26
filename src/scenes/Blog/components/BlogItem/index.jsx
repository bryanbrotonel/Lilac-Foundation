import React from 'react';
import Proptypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as Markdown from 'react-markdown';
import moment from 'moment';

class BlogItem extends React.Component {
  // Creates url with post title and id
  createURL(str, title, id) {
    return `${str[0]}${title.replace(/\s+/g, '-').toLowerCase()}-${id}`;
  }

  render() {
    const props = this.props;
    const { title, content, date, author, id } = props;
    console.log(props);

    const path = this.createURL`${title}${id}`;

    return (
      <div className="col-12 col-md-8 py-4">
        <div className="pb-3 text-center">
          <h2>{title}</h2>
          <span>
            Published{' '}
            {moment(date).calendar(null, {
              sameDay: '[today]',
              lastDay: '[yesterday]',
              lastWeek: '[last] dddd',
              sameElse: '[on] MMM Do YYYY'
            })}{' '}
            by {author}
          </span>
        </div>
        <div className="text-justify">
          <Markdown
            source={content
              .split('')
              .splice(0, 275)
              .join('')
              .concat('...')}
          />
        </div>
        <div className="text-center">
          <Link
            className="level-item is-small is-link"
            to={{
              pathname: `/blog/${path}`,
              state: { title, content, path, date, id }
            }}
          >
            Continue Reading
          </Link>
        </div>
      </div>
    );
  }
}

BlogItem.propTypes = {
  title: Proptypes.string,
  content: Proptypes.string,
  path: Proptypes.string
};
export default BlogItem;

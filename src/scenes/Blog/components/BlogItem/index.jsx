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
    const { title, content, date, id } = props;

    const path = this.createURL`${title}${id}`;

    return (
      <div className="box">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <h1>{title}</h1>
              <Markdown
                source={content
                  .split('')
                  .splice(0, 150)
                  .join('')
                  .concat('...')}
              />
            </div>
            <div className="level">
              <div className="level-left">
                <Link
                  className="level-item is-small is-link"
                  to={{
                    pathname: `/blog/${path}`,
                    state: { title, content, path, date, id }
                  }}
                >
                  Continue Reading...
                </Link>
              </div>
              <div className="level-right">
                <p className="level-item has-text-link is-size-7">
                  {moment(date).calendar(null, {
                    sameDay: '[Today]',
                    lastDay: '[Yesteday]',
                    lastWeek: '[Last] dddd',
                    sameElse: 'MM Do YYYY'
                  })}
                </p>
              </div>
            </div>
          </div>
        </article>
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

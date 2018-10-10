import React from 'react';
import Proptypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as Markdown from 'react-markdown';
import moment from 'moment';

class BlogItem extends React.Component {
  render() {
    const props = this.props;
    const { title, content, path, date } = props;

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="iamge is-64x64">
              {/* <img src={icon} alt="Icon"/> */}
            </figure>
          </div>
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
                    state: { title, content, path, date }
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

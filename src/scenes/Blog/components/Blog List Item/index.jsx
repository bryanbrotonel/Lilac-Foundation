import React from 'react';
import Proptypes from 'prop-types';
import moment from 'moment';
import * as Markdown from 'react-markdown';

import { Link } from 'react-router-dom';

import './styles.scss';

class BlogListItem extends React.Component {
  // Creates url with post title and id
  createURL(str, title, id) {
    return `${str[0]}${title.replace(/\s+/g, '-').toLowerCase()}-${id}`;
  }

  render() {
    const {
      id,
      title,
      subtitle,
      headerImage,
      content,
      author,
      updatedAt
    } = this.props;

    const path = this.createURL`${title}${id}`;

    return (
      <div className="blog-list-item row">
        <div className="col-12 col-md-5">
          <Link to={`/blog/${path}`}>
            <div className="blog-list-image">
              <img src={headerImage.fields.file.url} />
            </div>
          </Link>
        </div>
        <div className="col-12 col-md-6 v-center">
          <div>
            <h3 className="blog-list-title">{title}</h3>
            <h4 className="blog-list-subtitle">{subtitle}</h4>
            <Markdown
              className="markdown-snippet"
              source={content
                .split('')
                .splice(0, 130)
                .join('')
                .concat('...')}
            />
            <p className="text-muted">
              {author} •&nbsp;
              {moment(updatedAt).calendar(null, {
                sameDay: '[Today]',
                lastDay: '[Yesterday]',
                lastWeek: '[Last] dddd',
                sameElse: 'MMM[.] Do YYYY'
              })}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

BlogListItem.propTypes = {
  id: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  subtitle: Proptypes.string,
  headerImage: Proptypes.object,
  content: Proptypes.string,
  author: Proptypes.string,
  updatedAt: Proptypes.string,
  path: Proptypes.string
};
export default BlogListItem;

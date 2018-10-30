import React from 'react';
import Proptypes from 'prop-types';

import { Link } from 'react-router-dom';

import './styles.scss';

class BlogItem extends React.Component {
  // Creates url with post title and id
  createURL(str, title, id) {
    return `${str[0]}${title.replace(/\s+/g, '-').toLowerCase()}-${id}`;
  }

  render() {
    const props = this.props;
    const { title, headerImage, id } = props;

    const path = this.createURL`${title}${id}`;

    return (
      <div className="blog-item col-12 col-md-6 col-lg-4">
        <Link className="card" to={`/blog/${path}`}>
          <img
            src={headerImage.fields.file.url}
            alt=""
            className="card-img-top"
          />
          <div className="card-body text-center">
            <h4>{title}</h4>
          </div>
        </Link>
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

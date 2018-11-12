import React from 'react';
import Proptypes from 'prop-types';
import moment from 'moment';

import { Link } from 'react-router-dom';

import './styles.scss';

class BlogGridItem extends React.Component {
  // Creates url with post title and id
  createURL(str, title, id) {
    return `${str[0]}${title.replace(/\s+/g, '-').toLowerCase()}-${id}`;
  }

  render() {
    const props = this.props;
    const { id, title, subtitle, headerImage, date } = props;

    const path = this.createURL`${title}${id}`;

    return (
      <div className=" col-12 col-md-6">
        <Link to={`/blog/${path}`}>
          <figure className="blog-item">
            <img src={headerImage.fields.file.url} />
            <div className="date">
              <span className="day">{moment(date).format('D')}</span>
              <span className="month">{moment(date).format('MMM')}</span>
            </div>
            <figcaption>
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </figcaption>
            <div className="hover">
              <i className="ion-android-open" />
            </div>
          </figure>
        </Link>
      </div>
    );
  }
}

BlogGridItem.propTypes = {
  title: Proptypes.string,
  content: Proptypes.string,
  path: Proptypes.string
};
export default BlogGridItem;

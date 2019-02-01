import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './styles.scss';

class PageItem extends React.Component {
  render() {
    const { path, title, subtitle, headerImage, date } = this.props;

    let subtitleElement, dateElement;

    // Check if subtitle is present
    if (subtitle) {
      subtitleElement = <p>{subtitle}</p>;
    }

    // Check if date is present
    if (date) {
      dateElement = (
        <div className="date">
          <span className="day">{moment(date).format('D')}</span>
          <span className="month">{moment(date).format('MMM')}</span>
        </div>
      );
    }

    return (
      <Link to={path}>
        <figure className="page-item">
          <img src={headerImage} />
          {dateElement}
          <figcaption>
            <h3>{title}</h3>
            {subtitleElement}
          </figcaption>
        </figure>
      </Link>
    );
  }
}

PageItem.propTypes = {
  path: Proptypes.string,
  title: Proptypes.string.isRequired,
  subtitle: Proptypes.string,
  headerImage: Proptypes.string.isRequired,
  date: Proptypes.string
};

export default PageItem;

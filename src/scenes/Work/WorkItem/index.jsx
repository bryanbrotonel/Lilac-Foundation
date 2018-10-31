import React from 'react';
import Proptypes from 'prop-types';

import { Link } from 'react-router-dom';

import './styles.scss';

class WorkItem extends React.Component {
  // Creates url with post title and id
  createURL(str, title, id) {
    return `${str[0]}${title.replace(/\s+/g, '-').toLowerCase()}-${id}`;
  }

  render() {
    const { id, title, headerImage } = this.props;

    const path = this.createURL`${title}${id}`;

    return (
      <Link to={`/work/${path}`} className="work-item-link">
        <div className="work-item text-center">
          <img src={headerImage.fields.file.url} className="header-image" />
          <h2 className="title">{title}</h2>
        </div>
      </Link>
    );
  }
}

WorkItem.propTypes = {
  id: Proptypes.string,
  title: Proptypes.string,
  headerImage: Proptypes.object
};

export default WorkItem;

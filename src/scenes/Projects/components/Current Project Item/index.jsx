import React from 'react';
import Proptypes from 'prop-types';

import * as Markdown from 'react-markdown';

import { Link } from 'react-router-dom';

import './styles.scss';

class CurrentProjectItem extends React.Component {
  // Creates url with post title and id
  createURL(str, title, id) {
    return `${str[0]}${title.replace(/\s+/g, '-').toLowerCase()}-${id}`;
  }

  render() {
    const { id, title, headerImage } = this.props;

    const path = this.createURL`${title}${id}`;

    return (
      <Link to={`/projects/${path}`} className="current-project-item-link">
        <div className="current-project-item h-100">
          <div className="current-project-item-image text-center">
            <img src={headerImage.fields.file.url} />
          </div>
          <h3 className="title">{title}</h3>
        </div>
      </Link>
    );
  }
}

CurrentProjectItem.propTypes = {
  id: Proptypes.string,
  title: Proptypes.string,
  headerImage: Proptypes.object
};

export default CurrentProjectItem;

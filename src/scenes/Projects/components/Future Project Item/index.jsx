import React from 'react';
import Proptypes from 'prop-types';

import * as Markdown from 'react-markdown';

import './styles.scss'

class FutureProjectItem extends React.Component {
  render() {
    const { title, content } = this.props;

    return (
      <div className="future-project-item">
        <h4 className="title">{title}</h4>
        <Markdown className="markdown-content" source={content} />
      </div>
    );
  }
}

FutureProjectItem.propTypes = {
    title: Proptypes.string.isRequired,
    content: Proptypes.string.isRequired
}

export default FutureProjectItem;
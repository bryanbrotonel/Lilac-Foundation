import React from 'react';
import propTypes from 'prop-types';

import moment from 'moment';
import * as Markdown from 'react-markdown';

import './styles.scss';

class PostLayout extends React.Component {
  render() {
    const { title, subtitle, author, date, content } = this.props;

    if (author) {
      var authorText = `by ${author} • `;
    }

    return (
      <div className="container">
        <div className="row no-gutters justify-content-center">
          <div className="col-md-8 col-lg-7">
            <div className="post-heading">
              <h1 className="title">{title}</h1>
              <h5 className="subtitle">{subtitle}</h5>
              <span className="meta">
                {authorText}
                {moment(date).calendar(null, {
                  sameDay: '[Today]',
                  lastDay: '[Yesterday]',
                  lastWeek: 'dddd',
                  sameElse: 'MMM Do YYYY'
                })}
              </span>
            </div>
            <Markdown
              className="markdown-content"
              source={content}
            />
          </div>
        </div>
      </div>
    );
  }
}

PostLayout.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string,
  author: propTypes.string,
  date: propTypes.string,
  content: propTypes.string.isRequired
};

export default PostLayout;

import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss';

class BlogSectionItem extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div className="col-12 col-sm-10 col-lg-4 blog-item">
        <figure className="effect-jazz">
          <img
            src="https://source.unsplash.com/AEaTUnvneik/1600x1024"
          />
          <figcaption className="hv-center text-center">
            <div>
              <h2>Lilac Foundation Blog Title</h2>
              <p>Subtitle for {title}</p>
            </div>
            <a href="#">View more</a>
          </figcaption>
        </figure>
      </div>
    );
  }
}

BlogSectionItem.propTypes = {
  title: Proptypes.string.isRequired,
  className: Proptypes.string
};

export default BlogSectionItem;

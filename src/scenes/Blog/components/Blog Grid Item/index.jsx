import React from 'react';
import Proptypes from 'prop-types';

import PageItem from '../../../../components/Page Item';

class BlogGridItem extends React.Component {
  // Creates url with post title and id
  createURL(str, title, id) {
    return encodeURIComponent(`${str[0]}${title
      .replace(/\s+/g, "-")
      .toLowerCase()}-${id}`);
  }

  render() {
    const props = this.props;
    const { id, title, subtitle, headerImage, updatedAt } = props;

    const path = this.createURL`${title}${id}`;

    return (
      <div className="col-12 col-md-6 mb-5">
        <PageItem
          path={`/blog/${path}`}
          title={title}
          subtitle={subtitle}
          date={updatedAt}
          headerImage={headerImage.fields.file.url}
        />
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

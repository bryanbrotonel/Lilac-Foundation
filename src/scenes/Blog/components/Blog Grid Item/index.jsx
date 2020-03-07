import React from 'react';
import Proptypes from 'prop-types';

import { createURL } from "helpers";

import PageItem from 'components/Page Item';

class BlogGridItem extends React.Component {

  render() {

    const { id, title, subtitle, headerImage, updatedAt } = this.props;

    const path = createURL`${title}${id}`;

    return (
        <PageItem
          path={`/blog/${path}`}
          title={title}
          subtitle={subtitle}
          date={updatedAt}
          headerImage={headerImage.fields.file.url}
        />
    );
  }
}

BlogGridItem.propTypes = {
  title: Proptypes.string,
  content: Proptypes.string,
  path: Proptypes.string
};

export default BlogGridItem;

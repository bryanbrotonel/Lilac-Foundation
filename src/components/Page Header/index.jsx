import React from 'react';

import './styles.scss';

class PageHeader extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="row blog-header">
        <div className="col-md-8">{children}</div>
      </div>
    );
  }
}

export default PageHeader;

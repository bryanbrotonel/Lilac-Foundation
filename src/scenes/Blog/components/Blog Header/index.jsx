import React from 'react';

import './styles.scss';

class BlogHeader extends React.Component {
  render() {
    return (
      <div className="row blog-header">
        <div className="col-md-8">
          <h1>The Lilac Foundation Blog</h1>
        </div>
        <div className="col-md-8">
          <h6>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
            reprehenderit? Earum maxime in, debitis reprehenderit ducimus
            accusantium, nesciunt dicta culpa esse officia quia suscipit
            doloremque rerum eos sunt eligendi tempora?
        </h6>
        </div>
      </div>
    );
  }
}

export default BlogHeader;

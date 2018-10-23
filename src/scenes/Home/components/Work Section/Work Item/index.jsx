import React from 'react';
import Proptypes from 'prop-types';

import './styles.scss';

class WorkItem extends React.Component {
  render() {
    const { workTitle, order } = this.props;

    return (
      <div className="row text-left align-items-center pt-5">
        <div className={`col-7 col-md-5 ${order}`}>
          <img
            alt="image"
            className="img-fluid"
            src="https://editor-latest.s3.amazonaws.com/design-blocks/block_images/img_square_2.svg"
          />
        </div>

        <div className="col-12 col-md-5 m-md-auto">
          <h2>
            <strong>{workTitle}</strong>
          </h2>
          <p className="text-h3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            repellendus, deleniti, minima perferendis alias quisquam quis
            consectetur aperiam hic asperiores earum nam possimus quos culpa,
            dolor sunt dicta officia quasi.
          </p>
          <p>
            <a href="https://www.froala.com">Learn More &gt;</a>
          </p>
        </div>
      </div>
    );
  }
}

WorkItem.propTypes = {
  workTitle: Proptypes.string.isRequired,
  order: Proptypes.string.isRequired
};

export default WorkItem;

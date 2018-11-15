import React from 'react';
import Proptypes from 'prop-types';

class ProjectsSectionItem extends React.Component {
  render() {
    const { projectTitle, rightDivStyle } = this.props;

    return <div className="row justify-content-around pt-5 pb-md-5">
        <div className={`col-12 col-md-5 ${rightDivStyle}`}>
          <img alt="image" className="img-fluid mb-3 mb-md-0" src="https://images.unsplash.com/photo-1533222535026-754c501569dd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2253a1d8c16428c76d5706083a8cb1ab&auto=format&fit=crop&w=2250&q=80" />
        </div>
        <div className="col-12 col-md-5">
          <h2>
            <strong>{projectTitle}</strong>
          </h2>
          <p className="text-h3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            repellendus, deleniti, minima perferendis alias quisquam quis
            consectetur aperiam hic asperiores earum nam possimus quos
            culpa, dolor sunt dicta officia quasi.
          </p>
          <p>
            <a href="#">Learn More &gt;</a>
          </p>
        </div>
      </div>;
  }
}

ProjectsSectionItem.propTypes = {
  projectTitle: Proptypes.string.isRequired,
  rightDivStyle: Proptypes.string.isRequired
};

export default ProjectsSectionItem;

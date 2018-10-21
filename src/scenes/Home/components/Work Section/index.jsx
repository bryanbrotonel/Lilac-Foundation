import React from 'react';
import PageSection from '../../../../components/Page Section';
import WorkItem from './Work Item';

class WorkSection extends React.Component {
  constructor() {
    super();

    this.state = { workItems: ['Work Title 1', 'Work Title 2', 'Work Title 3', 'Work Title 4'] };
  }

  render() {
    const { workItems } = this.state;

    // Work content
    const workContent = workItems.map(workItem => {
      return (
        <div key={workItem} className="col-12 col-md-6 border">
          <WorkItem workTitle={workItem} />
        </div>
      );
    });

    return (
      <PageSection className="bg-gray" height="50">
        <div className="container">
          <h1 className="section-title text-center">Work</h1>
          <div className="row no-gutters w-100">{workContent}</div>
        </div>
      </PageSection>
    );
  }
}

export default WorkSection;

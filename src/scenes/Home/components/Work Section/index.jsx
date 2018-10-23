import React from 'react';
import PageSection from '../../../../components/Page Section';
import WorkItem from './Work Item';

class WorkSection extends React.Component {
  constructor() {
    super();

    this.state = {
      workItems: [
        'Work Title 1',
        'Work Title 2',
        'Work Title 3'
      ]
    };
  }

  styleWorkItem(itemIndex) {
    return itemIndex % 2 !== 0 ? 'order-md-12' : '';
  }

  render() {
    const { workItems } = this.state;
    const workContent = workItems.map(workItem => {
      return (
        <WorkItem
          key={workItem}
          workTitle={workItem}
          order={this.styleWorkItem(workItems.indexOf(workItem))}
        />
      );
    });

    return (
      <PageSection className="bg-gray" height="50">
        <section
          className="fdb-block"
          data-block-type="features"
          data-id="9"
          draggable="true"
        >
          <div className="container">
            <div className="row justify-content-center pb-5">
              <div className="col-12 text-center">
                <h1>Work</h1>
              </div>
            </div>

            {workContent}
          </div>
        </section>
      </PageSection>
    );
  }
}

export default WorkSection;

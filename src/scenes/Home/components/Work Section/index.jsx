import React from 'react';
import PageSection from '../../../../components/Page Section';
import WorkSectionItem from './Work Section Item';

class WorkSection extends React.Component {
  constructor() {
    super();

    this.state = {
      workItems: ['Work Title 1', 'Work Title 2', 'Work Title 3']
    };
  }

  // Styles work item for layout
  styleWorkItem(itemIndex) {
    let imageStyle = '',
      contentStyle = '';

    if (itemIndex % 2 === 0) {
      contentStyle = 'm-md-auto';
    } else {
      imageStyle = 'm-md-auto order-md-5';
    }
    return [imageStyle, contentStyle];
  }

  render() {
    const { workItems } = this.state;
    const workContent = workItems.map(workItem => {
      return (
        <WorkSectionItem
          key={workItem}
          workTitle={workItem}
          order={this.styleWorkItem(workItems.indexOf(workItem))}
        />
      );
    });

    return (
      <PageSection className="bg-gray" height="50vh">
        <div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h1>Work</h1>
              </div>
            </div>

            {workContent}
          </div>
        </div>
      </PageSection>
    );
  }
}

export default WorkSection;

import React from 'react';
import PageSection from '../../../../components/Page Section';
import ProjectsSectionItem from './components/Projects Section Item';

class ProjectsSection extends React.Component {
  constructor() {
    super();

    this.state = {
      workItems: ['Project Title 1', 'Project Title 2', 'Project Title 3']
    };
  }

  // Styles work item for layout
  styleWorkItem(itemIndex) {
    return itemIndex % 2 !== 0 ? 'order-md-5' : '';
  }

  render() {
    const { workItems } = this.state;
    const workContent = workItems.map(workItem => {
      return (
        <ProjectsSectionItem
          key={workItem}
          projectTitle={workItem}
          rightDivStyle={this.styleWorkItem(workItems.indexOf(workItem))}
        />
      );
    });

    return (
      <PageSection className="bg-gray" height="5rem">
        <div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h1>Projects</h1>
              </div>
            </div>
            {workContent}
          </div>
        </div>
      </PageSection>
    );
  }
}

export default ProjectsSection;

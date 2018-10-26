import React from 'react';
import PageSection from '../../../../components/Page Section';

class AboutSection extends React.Component {
  render() {
    return (
      <PageSection className="bg-gray">
        <div className="row w-100">
          <div className="col-12 col-md-6 hv-center">
            <h1 className="mb-3 mb-md-0">About Us</h1>
          </div>
          <div className="col-12 col-md-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ea,
              pariatur distinctio incidunt aliquam unde adipisci odit maxime.
              Quam tenetur iure ut necessitatibus dignissimos eveniet quisquam
              excepturi nihil dolore nemo.
            </p>
            <a href="#">Read our story &gt;</a>
          </div>
        </div>
      </PageSection>
    );
  }
}

export default AboutSection;

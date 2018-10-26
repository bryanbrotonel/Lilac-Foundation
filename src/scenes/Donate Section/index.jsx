import React from 'react';
import PageSection from '../../components/Page Section';

class DonateSection extends React.Component {
  render() {
    return (
      <PageSection className="bg-primary-wallpaper" height="50vh">
        <div className="text-center">
          <h1>Lend a Helping Hand</h1>
          <h5 className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>
          <button type="button" className="btn btn-light">
            Donate
          </button>
        </div>
      </PageSection>
    );
  }
}

export default DonateSection;

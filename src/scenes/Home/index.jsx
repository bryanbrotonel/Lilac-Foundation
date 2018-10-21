import React from 'react';

import VideoHeader from '../../components/Video Header';
import WorkSection from './components/Work Section';
import TeamSection from './components/Team Section';
import MissionSection from './components/Mission Section';
import DonateSection from '../Donate Section';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <VideoHeader />
        <MissionSection />
        <WorkSection />
        <TeamSection />
        <DonateSection />
      </React.Fragment>
    );
  }
}
export default Home;

import React from 'react';

import VideoHeader from '../../components/Video Header';
import WorkSection from './components/Work Section';
import BlogSection from './components/Blog Section';
import MissionSection from './components/Mission Section';
import DonateSection from '../Donate Section';
import AboutSection from './components/About Section';

class Home extends React.Component {
  render() {
    return <React.Fragment>
        <VideoHeader />
        <MissionSection />
        <WorkSection />
        <BlogSection />
        <AboutSection />
        <DonateSection />
      </React.Fragment>;
  }
}

export default Home;

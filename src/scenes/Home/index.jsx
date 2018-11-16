import React from 'react';

import VideoHeader from '../../components/Video Header';
import ProjectsSection from './components/Projects Section';
import BlogSection from './components/Blog Section';
import MissionSection from './components/Mission Section';
import DonateSection from '../Donate Section';
import AboutSection from './components/About Section';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <VideoHeader />
        <MissionSection />
        <ProjectsSection />
        <BlogSection />
        <AboutSection />
        <DonateSection />
      </React.Fragment>
    );
  }
}

export default Home;

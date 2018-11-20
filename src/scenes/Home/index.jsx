import React from 'react';

import VideoHeader from '../../components/Video Header';
import ProjectsSection from './components/Projects Section';
import BlogSection from './components/Blog Section';
import DonateSection from './components/Donate Section';
import AboutSection from './components/About Section';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <VideoHeader />
        <ProjectsSection />
        <AboutSection />
        <BlogSection />
        <DonateSection />
      </React.Fragment>
    );
  }
}

export default Home;

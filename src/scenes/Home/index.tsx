import React from 'react';
import AboutSection from './AboutSection';
import BlogSection from './BlogSection';
import DonateSection from './DonateSection';
import ProjectSection from './ProjectSection';

function Home() {
  return (
    <React.Fragment>
      <ProjectSection />
      <AboutSection />
      <BlogSection />
      <DonateSection />
    </React.Fragment>
  );
}

export default Home;

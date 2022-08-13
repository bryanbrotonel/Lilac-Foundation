import React from 'react';
import AboutSection from './AboutSection';
import BlogSection from './BlogSection';
import DonateSection from './DonateSection';

function Home() {
  return (
    <React.Fragment>
      <div className="container">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <AboutSection />
      <BlogSection />
      <DonateSection />
    </React.Fragment>
  );
}

export default Home;

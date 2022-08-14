import React, { useEffect } from 'react';

import NavRoutes from '../../navRoutes';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useLocation } from 'react-router-dom';

const App = () => {

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [useLocation()]);

  return (
    <div className="h-full bg-white-0">
      <Navbar />
      <NavRoutes />
      <Footer />
    </div>
  );
};

export default App;

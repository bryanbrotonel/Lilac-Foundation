import React from 'react';

import NavRoutes from '../../navRoutes';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const App = () => {
  return (
    <div className="min-h-full grid grid-rows-[auto_1fr_auto] bg-white">
      <Navbar />
      <NavRoutes />
      <Footer />
    </div>
  );
};

export default App;

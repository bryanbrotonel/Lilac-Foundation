import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import Home from './scenes/Home';
import Team from './scenes/Team';
import About from './scenes/About';
import Blog from './scenes/Blog';
import Projects from './scenes/Projects';
import NotFound from './scenes/NotFound';

const NavRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      }
    ></Route>
    <Route
      path="/about"
      element={
        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>
      }
    ></Route>
    <Route
      path="/team"
      element={
        <Suspense fallback={<Loading />}>
          <Team />
        </Suspense>
      }
    ></Route>
    <Route
      path="/projects"
      element={
        <Suspense fallback={<Loading />}>
          <Projects />
        </Suspense>
      }
    ></Route>
    <Route
      path="/blog"
      element={
        <Suspense fallback={<Loading />}>
          <Blog />
        </Suspense>
      }
    ></Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default NavRoutes;

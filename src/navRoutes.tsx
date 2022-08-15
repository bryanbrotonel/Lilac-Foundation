import React, { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import Home from './scenes/Home';
import Team from './scenes/Team';
import About from './scenes/About';
import Blog from './scenes/Blog';
import Projects from './scenes/Projects';
import NotFound from './scenes/NotFound';
import BlogPost from './scenes/Blog/BlogPost';
import ProjectPost from './scenes/Projects/ProjectPost';
import ProfilePage from './scenes/Team/ProfilePage';

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
      path="about"
      element={
        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>
      }
    ></Route>
    <Route
      path="team"
      element={
        <Suspense fallback={<Loading />}>
          <Team />
        </Suspense>
      }
    ></Route>
    <Route
      path="team/:teamMemberSlug"
      element={
        <Suspense fallback={<Loading />}>
          <ProfilePage />
        </Suspense>
      }
    ></Route>
    <Route
      path="projects"
      element={
        <Suspense fallback={<Loading />}>
          <Projects />
        </Suspense>
      }
    ></Route>
    <Route
      path="projects/:postId"
      element={
        <Suspense fallback={<Loading />}>
          <ProjectPost />
        </Suspense>
      }
    ></Route>
    <Route
      path="blog"
      element={
        <Suspense fallback={<Loading />}>
          <Blog />
        </Suspense>
      }
    ></Route>
    <Route
      path="blog/:postId"
      element={
        <Suspense fallback={<Loading />}>
          <BlogPost />
        </Suspense>
      }
    ></Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default NavRoutes;

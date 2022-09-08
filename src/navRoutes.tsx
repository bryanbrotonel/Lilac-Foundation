import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';

const Home = React.lazy(() => import('./scenes/Home'));
const Team = React.lazy(() => import('./scenes/Team'));
const About = React.lazy(() => import('./scenes/About'));
const Blog = React.lazy(() => import('./scenes/Blog'));
const Projects = React.lazy(() => import('./scenes/Projects'));
const BlogPost = React.lazy(() => import('./scenes/Blog/BlogPost'));
const ProjectPost = React.lazy(() => import('./scenes/Projects/ProjectPost'));
const ProfilePage = React.lazy(() => import('./scenes/Team/ProfilePage'));
const NotFound = React.lazy(() => import('./scenes/NotFound'));

const NavRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/team" element={<Team />}></Route>
      <Route path="team/:teamMemberSlug" element={<ProfilePage />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="blog/:postId" element={<BlogPost />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="projects/:postId" element={<ProjectPost />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default NavRoutes;

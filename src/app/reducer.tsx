import { combineReducers } from "@reduxjs/toolkit";
import blogReducer from '../scenes/Blog/blogSlice';
import projectReducer from '../scenes/Projects/projectsSlice';
import navbarReducer from "../components/Navbar/navbarSlice";

const rootReducer = combineReducers({
  navbar: navbarReducer,
  blog: blogReducer,
  projects: projectReducer,
});

export default rootReducer;
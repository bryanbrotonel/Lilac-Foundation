import { combineReducers } from "@reduxjs/toolkit";
import blogReducer from '../scenes/Blog/blogSlice';
import projectReducer from '../scenes/Projects/projectsSlice';

const rootReducer = combineReducers({
  blog: blogReducer,
  projects: projectReducer,
});

export default rootReducer;
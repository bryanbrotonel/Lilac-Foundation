import { combineReducers } from "@reduxjs/toolkit";
import blogReducer from '../scenes/Blog/blogSlice';

const rootReducer = combineReducers({
  blog: blogReducer,
});

export default rootReducer;
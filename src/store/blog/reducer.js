// Blog reducer

import initialState from '../initialState';
import {
  BLOG_LOADING,
  LOAD_BLOG_SUCCESS,
  LOAD_POST_SUCCESS
} from './types';

// Reducer updating blog with posts when successfully loaded
export default function blogReducer(state = initialState.blog, action) {
  switch (action.type) {

    // Blog loading type
    case BLOG_LOADING:
      return {
        ...state,
        loading: action.isLoading
      };

      // Successful blog loading type
    case LOAD_BLOG_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        loading: false
      };

      // Successful blog post loading type
    case LOAD_POST_SUCCESS:
      return {
        ...state,
        singlePost: action.post,
        loading: false
      };
      // Default case
    default:
      return state;
  }
}
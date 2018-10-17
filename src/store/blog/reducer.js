// Blog reducer

import initialState from '../initialState';
import * as types from './types';

// Reducer updating blog with posts when successfully loaded
export default function blogReducer(state = initialState.blog, action) {
  switch (action.type) {
    // Blog loading type
    case types.BLOG_LOADING:
      return {
        ...state,
        loading: action.isLoading
      };

    // Successful blog loading type
    case types.LOAD_BLOG_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        loading: false
      };

    // Successful blog post loading type
    case types.LOAD_POST_SUCCESS:
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

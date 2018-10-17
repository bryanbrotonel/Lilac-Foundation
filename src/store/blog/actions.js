// Blog actions

// Import Redux types
import * as types from './types';

// Action that returns current state of blog load
export function blogLoading(isLoading = true) {
  return { type: types.BLOG_LOADING, isLoading };
}

// Action that returns the successfully loaded blog type, and blog posts
export function loadBlogSuccess(posts) {
  return { type: types.LOAD_BLOG_SUCCESS, posts };
}

// Action that returns the successfully loaded blog post
export function loadPostSuccess(post) {
  return { type: types.LOAD_POST_SUCCESS, post };
}

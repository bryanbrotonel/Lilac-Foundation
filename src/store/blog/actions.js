// Blog actions

// Import Redux Blog types
import {
  BLOG_LOADING,
  LOAD_BLOG_SUCCESS,
  LOAD_POST_SUCCESS
} from './types';

// Action that returns current state of blog load
export function blogLoading(isLoading = true) {
  return {
    type: BLOG_LOADING,
    isLoading
  };
}

// Action that returns the successfully blog posts
export function loadBlogSuccess(posts) {
  return {
    type: LOAD_BLOG_SUCCESS,
    posts
  };
}

// Action that returns the successfully loaded blog post
export function loadPostSuccess(post) {
  return {
    type: LOAD_POST_SUCCESS,
    post
  };
}
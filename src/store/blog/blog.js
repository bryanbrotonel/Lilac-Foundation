import {
  postClient
} from '../contentful';
import * as actions from './actions';

// Dispatches end of loading action and logs an error into the console
function loadingBlogError(dispatch, error) {
  console.log(error);
  dispatch(actions.blogLoading(false));
}

// Loads all blogs from Contentful
export function loadBlog(limit = 100) {
  return dispatch => {
    // Dispatches loading animation
    dispatch(actions.blogLoading());

    // Retreives and returns client blog post entries
    return postClient
      .getEntries({
        content_type: 'blogPost',
        order: '-sys.updatedAt',
        limit: limit
      })
      .then(({
          items
        }) =>
        // Dispatches loading success action return blog
        dispatch(actions.loadBlogSuccess(items))
      )
      .catch(error => loadingBlogError(dispatch, error));
  };
}

// Loads single blog post from id from Contentful
export function loadBlogPost(id) {
  return dispatch => {
    // Dispatches loading animation
    dispatch(actions.blogLoading());

    // Retreives and returns requested client post entry
    return postClient
      .getEntry(id)
      .then((
          postData
        ) =>
        // Dispatches loading success action return blog post
        dispatch(actions.loadPostSuccess(postData))
      )
      .catch(error => loadingBlogError(dispatch, error));
  };
}
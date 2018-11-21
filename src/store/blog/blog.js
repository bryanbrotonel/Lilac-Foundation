import * as contentful from 'contentful';
import * as actions from './actions';

// The Lilac Foundation Client
const client = contentful.createClient({
  space: 's85q1dv8e3m5',
  accessToken: 'e1f99556ca22933d807bbeba1f93e70d5ebaa2bd37d43e099d26f653e9ade466'
});

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
    return client
      .getEntries({
        content_type: 'blogPost',
        order: '-fields.date',
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
    return client
      .getEntry(id)
      .then(({
          fields
        }) =>
        // Dispatches loading success action return blog post
        dispatch(actions.loadPostSuccess(fields))
      )
      .catch(error => loadingBlogError(dispatch, error));
  };
}
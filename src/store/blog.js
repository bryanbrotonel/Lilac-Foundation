import * as contentful from 'contentful';
import * as actions from './blog/actions';

// The Lilac Foundation Blog Client
const blogClient = contentful.createClient({
  space: 's85q1dv8e3m5',
  accessToken: 'e1f99556ca22933d807bbeba1f93e70d5ebaa2bd37d43e099d26f653e9ade466'
});

// Dispatches end of loading action and logs an error into the console
function loadingBlogError(dispatch, error) {
  console.log(error);
  dispatch(actions.blogLoading(false));
}

// Sorts blog posts by descending date
function sortBlogPosts(blog) {
  blog.sort(function (a, b) {
    return Date.parse(b.fields.date) - Date.parse(a.fields.date);
  });

  return blog;
}

// Loads all blogs from post from Contentful
export function loadBlog() {
  console.log('loadBlog()');
  return dispatch => {
    // Dispatches loading animation
    dispatch(actions.blogLoading());

    // Retreives and returns client blog post entries
    return blogClient
      .getEntries()
      .then(({
          items
        }) =>
        // Dispatches loading success action return blog
        dispatch(actions.loadBlogSuccess(sortBlogPosts(items)))
      )
  };
}

// Loads single blog post from id from Contentful
export function loadBlogPost(id) {
  return dispatch => {
    // Dispatches loading animation
    dispatch(actions.blogLoading());

    // Retreives and returns requested client post entry
    return blogClient
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
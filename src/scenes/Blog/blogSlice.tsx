import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Interface for blog post
interface Post {
  metadata: Object;
  sys: {
    id: string;
  };
  fields: {
    title: string;
    content: string;
    headerImage: Object;
    subtitle: string;
  };
}

// State of blog slice
interface BlogState {
  blogPosts: Array<Post>;
  status: String;
  erorr: String;
}

// Initial state of blog slice
const initialState: BlogState = {
  blogPosts: [],
  status: 'idle',
  erorr: null,
};

// Redux thunk that fetches blog posts
export const fetchPosts = createAsyncThunk('blog/fetchPosts', async () => {
  const contentful = require('contentful');
  const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  });

  // Retreive blog posts from Contentful in order of creation date
  const contentfulClient = await client.getEntries({
    content_type: 'blogPost',
    order: '-sys.updatedAt',
    limit: 100,
  });

  // Returns blog posts as an array of Post objects
  return contentfulClient.items as Post[];
});

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        // Sets status to loading when fetchPosts thunk is fetching data
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        // Sets status to succeeded when fetchPosts thunk is receives data
        state.status = 'succeeded';
        // Appends data to blog posts
        state.blogPosts = state.blogPosts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.erorr = action.error.message;
      });
  },
});

export const selectAllPosts = (state: RootState) => state.blog.blogPosts;

export default blogSlice.reducer;

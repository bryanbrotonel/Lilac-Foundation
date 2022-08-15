import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { fetchContentfulBlogEntries } from '../../api/contentful';
import { TypeBlogPost } from '../../types';

// State of blog slice
interface BlogState {
  blogPosts: Array<TypeBlogPost>;
  currentPost: any;
  status: String;
}

// Initial state of blog slice
const initialState: BlogState = {
  blogPosts: [],
  currentPost: null,
  status: 'idle',
};

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
      });
  },
});

// Redux thunk that fetches blog posts
export const fetchPosts = createAsyncThunk(
  'blog/fetchPosts',
  fetchContentfulBlogEntries
);

export const selectAllPosts = (state: RootState) => state.blog.blogPosts;
export const selectCurrentPost = (state: RootState) => state.blog.currentPost;

export default blogSlice.reducer;

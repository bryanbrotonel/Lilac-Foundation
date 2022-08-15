import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import * as Contentful from 'contentful';
import { fetchContentfulProjectEntries } from '../../api/contentful';
import { TypeProjectPost } from '../../types';

// State of Projects slice
interface ProjectsState {
  ProjectPosts: Array<TypeProjectPost>;
  status: String;
  erorr: String;
}

// Initial state of Projects slice
const initialState: ProjectsState = {
  ProjectPosts: [],
  status: 'idle',
  erorr: null,
};

// Redux thunk that fetches projects
export const fetchProjects = createAsyncThunk(
  'Project/fetchPosts',
  fetchContentfulProjectEntries
);

export const ProjectSlice = createSlice({
  name: 'Project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state, action) => {
        // Sets status to loading when fetchProjects thunk is fetching data
        state.status = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        // Sets status to succeeded when fetchProjects thunk is receives data
        state.status = 'succeeded';
        // Appends data to ProjectPosts
        state.ProjectPosts = state.ProjectPosts.concat(action.payload);
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed';
        state.erorr = action.error.message;
      });
  },
});

export const selectAllProjects = (state: RootState) =>
  state.projects.ProjectPosts;

export default ProjectSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { fetchContentfulPostsEntries } from '../../api/contentful';
import { TypeProjectPost } from '../../types';

// State of Projects slice
interface ProjectsState {
  projectPosts: Array<TypeProjectPost>;
  status: String;
  erorr: String;
}

// Initial state of Projects slice
const initialState: ProjectsState = {
  projectPosts: [],
  status: 'idle',
  erorr: null,
};

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
        state.projectPosts = state.projectPosts.concat(action.payload);
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed';
        state.erorr = action.error.message;
      });
  },
});

// Redux thunk that fetches projects
export const fetchProjects = createAsyncThunk('Project/fetchPosts', () => {
  return fetchContentfulPostsEntries('projectPost') as Promise<
    Array<TypeProjectPost>
  >;
});

export const selectAllProjects = (state: RootState) =>
  state.projects.projectPosts;

export default ProjectSlice.reducer;

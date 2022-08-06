import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Interface for Projects post
interface Project {
  metadata: Object;
  sys: {
    id: string;
  };
  fields: {
    title: string;
    date: string;
    headerImage: Object;
    content: string;
  };
}

// State of Projects slice
interface ProjectsState {
  ProjectPosts: Array<Project>;
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
export const fetchProjects = createAsyncThunk('Project/fetchPosts', async () => {
  const contentful = require('contentful');
  const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  });

  // Retreive projects from Contentful in order of creation date
  const contentfulClient = await client.getEntries({
    content_type: 'projectPost',
    order: '-sys.updatedAt',
    limit: 100,
  });

  // Returns projects as an array of Project objects
  return contentfulClient.items as Project[];
});

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

export const selectAllProjects = (state: RootState) => state.projects.ProjectPosts;

export default ProjectSlice.reducer;

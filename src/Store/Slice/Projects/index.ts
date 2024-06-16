import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  data: {
    projects: [
      {
        name: "Project 1",
        description: "Description 1",
        image: "Image 1",
        url: "URL 1",
      },
      {
        name: "Project 2",
        description: "Description 2",
        image: "Image 2",
        url: "URL 2",
      },
    ],
  },
};

const ProjectsSlice = createSlice({
  name: "projects",
  initialState: initialState,
  reducers: {
    getProjects: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { getProjects } = ProjectsSlice.actions;
export const projectsreducer = ProjectsSlice.reducer;

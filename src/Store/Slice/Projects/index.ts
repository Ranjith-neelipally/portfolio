import { createSlice } from "@reduxjs/toolkit";
import { ProjectsPayload, ProjectsState } from "../../Types/Projects";
import { ProjectsinitialState } from "../../InitialState/Projects";

const ProjectsSlice = createSlice({
  name: "projects",
  initialState: ProjectsinitialState,
  reducers: {
    getProjectdata: (state: ProjectsPayload, action: ProjectsState) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { getProjectdata } = ProjectsSlice.actions;
export const projectsreducer = ProjectsSlice.reducer;

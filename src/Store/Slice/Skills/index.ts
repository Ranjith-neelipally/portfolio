import { createSlice } from "@reduxjs/toolkit";
import { SkillsInitialState } from "../../InitialState/Skills";
import { SkillsPayload, SkillsState } from "../../Types/Skills";

const SkillsSlice = createSlice({
  name: "skills",
  initialState: SkillsInitialState,
  reducers: {
    getSkillsdata: (state: SkillsPayload, action: SkillsState) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { getSkillsdata } = SkillsSlice.actions;
export const skillsreducer = SkillsSlice.reducer;

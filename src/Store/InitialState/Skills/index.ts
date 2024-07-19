import { SkillsPayload } from "../../Types/Skills";

export const SkillsInitialState: SkillsPayload = {
  loading: false,
  error: false,
  data: {
    _id: "",
    frameWorks: [],
    skills: [],
    tools: [],
  },
};

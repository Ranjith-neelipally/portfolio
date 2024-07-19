import { ProjectsPayload } from "../../Types/Projects";

export const ProjectsinitialState: ProjectsPayload = {
  loading: false,
  error: false,
  data: [
    {
      description: "",
      projectName: "",
      projectPreview: "",
      userId: "",
      __v: 0,
      _id: "",
    },
  ],
};

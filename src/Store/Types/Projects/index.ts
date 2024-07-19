import { PayloadAction } from "@reduxjs/toolkit";

export interface Projects {
  description?: string;
  projectName?: string;
  projectPreview?: string;
  userId?: string;
  tag?: string;
  __v?: number;
  _id?: string;
}

export interface ProjectsPayload {
  loading?: boolean;
  error?: string | boolean;
  data?: Projects[];
}

export type ProjectsState = PayloadAction<ProjectsPayload>;

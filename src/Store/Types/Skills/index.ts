import { PayloadAction } from "@reduxjs/toolkit";

export interface Skills {
  _id?: string;
  frameWorks?: string[];
  skills?: string[];
  tools?: string[];
}

export interface SkillsPayload {
  loading?: boolean;
  data?: Skills |null;
  error?: string | boolean | null;
}

export type SkillsState = PayloadAction<SkillsPayload>;

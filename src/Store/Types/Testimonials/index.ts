import { PayloadAction } from "@reduxjs/toolkit";

export interface Testimonial {
  _id?: string;
  userName: string;
  email: string;
  designation: string;
  message: string;
  canEdit: boolean;
  __v?: number;
}

export interface TestimonialPayload {
  loading?: boolean;
  data?: Testimonial[];
  error?: string;
}

export type TestimonialState = PayloadAction<TestimonialPayload>;

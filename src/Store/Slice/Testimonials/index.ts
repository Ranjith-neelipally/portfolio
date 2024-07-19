import { createSlice } from "@reduxjs/toolkit";
import { TestimonialsInitialState } from "../../InitialState/Testimonials";
import { TestimonialPayload, TestimonialState } from "../../Types/Testimonials";

const TestimonialSlice = createSlice({
  name: "testimonials",
  initialState: TestimonialsInitialState,
  reducers: {
    getTestimonialData: (
      state: TestimonialPayload,
      action: TestimonialState
    ) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { getTestimonialData } = TestimonialSlice.actions;
export const TestimonialsReducer = TestimonialSlice.reducer;

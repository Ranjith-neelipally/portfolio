import { TestimonialPayload } from "../../Types/Testimonials";

export const TestimonialsInitialState: TestimonialPayload = {
  loading: false,
  data: [
    {
      _id: "",
      userName: "",
      email: "",
      designation: "",
      message: "",
      canEdit: false,
      __v: 0,
    },
  ],
  error: "",
};

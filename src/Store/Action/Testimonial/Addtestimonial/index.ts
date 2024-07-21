import { useDispatch } from "react-redux";
import { getEnvVariable } from "../../../../utils/helpers";
import { useEffect } from "react";
import axios from "axios";

export interface TestimonialFormData {
  adminMail?: string;
  userName?: string;
  email?: string;
  designation?: string;
  message?: string;
}

export const AddNewTestimonial = async ({
  userName,
  email,
  designation,
  message,
}: TestimonialFormData) => {
  const baseUrl = getEnvVariable("VITE_REACT_APP_BASE_URL");
  const adminMail = getEnvVariable("VITE_REACT_APP_ADMIN_EMAIL");

{ userName, email, designation, message } = formData;
  try {
    const response = await axios.post(
      `${baseUrl}testimonials/add-new`,form
    );
    console.log(response);
  } catch (error: any) {
    console.error(
      "Error adding testimonial:",
      error.response?.data?.error || error.message
    );
  }
};

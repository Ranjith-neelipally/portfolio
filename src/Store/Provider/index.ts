import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { adminreducer } from "../Slice/Admin";
import { projectsreducer } from "../Slice/Projects";
import { displayreducer } from "../Slice/Display";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  Admin: adminreducer,
  Projects: projectsreducer,
  Display: displayreducer,
});

export const Store = configureStore({
  reducer: rootReducer,
});
export const useAppDispatch: () => typeof Store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof Store.getState>
> = useSelector;

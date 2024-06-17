import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { adminreducer } from "../Slice/Admin";
import { projectsreducer } from "../Slice/Projects";
import { ThemeReducer } from "../Slice/Theme";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  Admin: adminreducer,
  Projects: projectsreducer,
  Theme: ThemeReducer,
});

export const Store = configureStore({
  reducer: rootReducer,
});
export const useAppDispatch: () => typeof Store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof Store.getState>
> = useSelector;

export type RootState = ReturnType<typeof Store.getState>;

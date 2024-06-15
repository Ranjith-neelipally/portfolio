import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const initialState = { count: 0 };

const basicReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const newReducer = createSlice({
  name: "counterActionn",
  initialState: initialState,
  reducers: {
    INCREMENTNEW: (state) => {
      state.count += 1;
    },
    DECREMENTNEW: (state) => {
      state.count -= 1;
    },
    RESETNEW: (state) => {
      state.count = 0;
    },
  },
});

export const { INCREMENTNEW, DECREMENTNEW, RESETNEW } = newReducer.actions;
export default newReducer.reducer;


const rootReducer = combineReducers({
  basic: basicReducer,
  new: newReducer.reducer,
});

export const basicStore = configureStore({
  reducer: rootReducer,
});

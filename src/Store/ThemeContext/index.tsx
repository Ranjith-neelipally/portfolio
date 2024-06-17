import React, { createContext, useReducer } from "react";

const DARK = "DARK";
const LIGHT = "LIGHT";
const SYSTEMDEFAULT = "SYSTEMDEFAULT";

const initialState = "light";
const UseCurrentTheme = createContext(initialState);
const ContextReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK: {
      state = "dark";
    }
    case LIGHT: {
      state = "light";
    }
    case SYSTEMDEFAULT: {
      state = action.payload;
    }
  }
};

function ThemeContext({ children }: React.PropsWithChildren) {
    const [state, counterdispatch] = useReducer(
      ContextReducer,
      initialState
    );

  return (
    <UseCurrentTheme.Provider value="light">
      {children}
    </UseCurrentTheme.Provider>
  );
}

export default ThemeContext;

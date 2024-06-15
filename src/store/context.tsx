import React, { createContext, useContext, useReducer } from "react";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const initialContextState = { count: 0 };

const ContextReducer = (state = initialContextState, action: any) => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, count: state.count + 1 };
    }
    case DECREMENT: {
      return { ...state, count: state.count - 1 };
    }
    case RESET: {
      return { ...state, count: 0 };
    }
  }
};

const CounterContext = createContext<any>(undefined);

function ContextApi({ children }: any) {
  const [state, counterdispatch] = useReducer(
    ContextReducer,
    initialContextState
  );
  return (
    <CounterContext.Provider value={{ state, counterdispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export default ContextApi;

export const useContextCounter = () => {
  const conunterContext = useContext(CounterContext);
  if (conunterContext === undefined) {
    throw new Error("useContextCounter must be used within a CounterProvider");
  }
  return conunterContext;
};

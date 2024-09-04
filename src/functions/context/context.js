import { useState, createContext, useReducer, useEffect } from "react";
import localStorage from "../storage/local-storage";
import { initialState, todoReducer } from "../reducer/reducer";

export const Context = createContext();
function Provider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  useEffect(() => {
    console.log("Current State:", state);
  }, [state]);
  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Provider;

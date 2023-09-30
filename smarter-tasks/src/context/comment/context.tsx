import React, { createContext, useContext, useReducer } from "react";

import { initialCommentsState, reducer } from "./reducer";
import { CommentsDispatch, CommentsState } from "./types";

export const CommentsStateContext = createContext<CommentsState | undefined>(
  undefined
);

export const CommentsDispatchContext = createContext<
  CommentsDispatch | undefined
>(undefined);

export const CommentsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialCommentsState);
  return (
    <CommentsStateContext.Provider value={state}>
      <CommentsDispatchContext.Provider value={dispatch}>
        {children}
      </CommentsDispatchContext.Provider>
    </CommentsStateContext.Provider>
  );
};

export const useCommentsState = () =>
  useContext(CommentsStateContext) as CommentsState;
export const useCommentsDispatch = () =>
  useContext(CommentsDispatchContext) as CommentsDispatch;

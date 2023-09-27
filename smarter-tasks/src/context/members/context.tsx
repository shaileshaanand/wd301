import React, { createContext, useContext, useReducer } from "react";

import {
  intialMembersState,
  MembersActions,
  MembersState,
  reducer,
} from "./reducer";

export const MembersStateContext = createContext<MembersState | undefined>(
  undefined
);

type MembersDispatch = React.Dispatch<MembersActions>;

const MembersDispatchContext = createContext<MembersDispatch | undefined>(
  undefined
);

export const MembersProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, intialMembersState);
  return (
    <MembersStateContext.Provider value={state}>
      <MembersDispatchContext.Provider value={dispatch}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  );
};

export const useMembersState = () => useContext(MembersStateContext);
export const useMembersDispatch = () => useContext(MembersDispatchContext);

// @flow

import * as React from 'react';

export type EmulatorState = {
  showSaveButton: boolean,
  selectedStep: number,
};

const initialState: EmulatorState = {
  showSaveButton: true,
  selectedStep: 0,
};

type Action =
  | { type: 'SET_SHOW_SAVE_BUTTON', payload: { showSaveButton: boolean } }
  | { type: 'SET_SELECTED_STEP', payload: { selectedStep: number } };

const reducer = (state: EmulatorState, action: Action): EmulatorState => {
  const newState: EmulatorState = { ...state };
  switch (action.type) {
    case 'SET_SHOW_SAVE_BUTTON': {
      newState.showSaveButton = action.payload.showSaveButton;
      break;
    }
    case 'SET_SELECTED_STEP': {
      newState.selectedStep = action.payload.selectedStep;
      break;
    }
    default:
  }
  return newState;
};

type Context = [EmulatorState, (action: Action) => EmulatorState];

export const EmulatorStateContext = React.createContext<Context>(
  // $FlowFixMe
  null,
);

export const EmulatorStateProvider = ({ children }: any) => (
  // $FlowFixMe
  <EmulatorStateContext.Provider value={React.useReducer(reducer, initialState)}>
    {children}
  </EmulatorStateContext.Provider>
);

type Dispatcher = {
  setShowSaveButton: (showSaveButton: boolean) => void,
  setSelectedStep: (selectedStep: number) => void,
};

const useEmulatorState = (): [EmulatorState, Dispatcher] => {
  const [state, dispatch] = React.useContext(EmulatorStateContext);

  const dispatcher: Dispatcher = React.useMemo(
    () => ({
      setShowSaveButton: (showSaveButton: boolean) => {
        dispatch({ type: 'SET_SHOW_SAVE_BUTTON', payload: { showSaveButton } });
      },
      setSelectedStep: (selectedStep: number) => {
        dispatch({ type: 'SET_SELECTED_STEP', payload: { selectedStep } });
      },
    }),
    [dispatch],
  );

  return [state, dispatcher];
};

export default useEmulatorState;

import React, { createContext, useReducer } from 'react';

const initialState = {
  a: '#52f8d4',
  b: '#da00ff',
  c: '#ffffff',
  d: '#1a0a2a',
  e: '#ffffff',
  f: '#7bffbf'
};

const Theme = createContext(initialState);
const { Provider } = Theme;

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, [action.color]: action.value };
    default:
      throw new Error();
  }
};

const ThemeProvider = ({ children }) => {
  const [state, themeUpdater] = useReducer(reducer, initialState);
  return <Provider value={{ state, themeUpdater }}>{children}</Provider>;
};

export { Theme, ThemeProvider };

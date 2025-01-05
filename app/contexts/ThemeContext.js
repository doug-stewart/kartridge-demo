import React, { createContext, useReducer } from 'react';

const initialState = {
  a: '#FF0000',
  b: '#FFA500',
  c: '#FFFF00',
  d: '#00FF00',
  e: '#0000FF',
  f: '#800080'
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

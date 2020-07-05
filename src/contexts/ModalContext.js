import React, { createContext, useReducer } from 'react';

const initialState = {
  showModal: false,
  id: '',
};

const Modal = createContext(initialState);
const { Provider } = Modal;

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { showModal: !state.showModal, id: action.id };
    default:
      throw new Error();
  }
};

const ModalProvider = ({ children }) => {
  const [state, modalUpdater] = useReducer(reducer, initialState);
  return <Provider value={{ state, modalUpdater }}>{children}</Provider>;
};

export { Modal, ModalProvider };

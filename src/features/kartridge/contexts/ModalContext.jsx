import React, { createContext, useReducer } from 'react';

const initialState = {
    id: '',
    showModal: false,
};

const Modal = createContext(initialState);
const { Provider } = Modal;

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return { id: action.id, showModal: !state.showModal };
        default:
            throw new Error();
    }
};

const ModalProvider = ({ children }) => {
    const [state, modalUpdater] = useReducer(reducer, initialState);
    return <Provider value={{ state, modalUpdater }}>{children}</Provider>;
};

export { Modal, ModalProvider };

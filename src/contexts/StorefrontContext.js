import React, { createContext, useReducer } from 'react';

const initialState = [];

const Pods = createContext(initialState);
const { Provider } = Pods;

const changeIndex = (inputArray, oldIndex, newIndex) => {
  const array = [...inputArray];
  const item = array.splice(oldIndex, 1)[0];
  array.splice(newIndex, 0, item);
  return array;
};

const getIndex = (array, id) => {
  return array.findIndex((item) => item.id === id);
};

const reducer = (state, action) => {
  let podId;

  if (action.pod) {
    podId = getIndex(state, action.pod);
  }

  switch (action.type) {
    // Pod Management
    case 'SET_PODS':
      return [...action.data];

    case 'REMOVE_POD':
      if (podId !== -1) state.splice(podId, 1);
      return [...state];

    case 'MOVE_POD_DOWN':
      return changeIndex(state, podId, podId + 1);

    case 'MOVE_POD_UP':
      return changeIndex(state, podId, podId - 1);

    // Gallery Pod
    case 'ADD_GALLERY':
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          type: 'gallery',
          layout: 2,
          images: [],
        },
      ];

    case 'SET_LAYOUT':
      state[podId].layout = action.layout;
      return [...state];

    case 'SET_IMAGES':
      state[podId].images = [...action.images.items];
      return [...state];

    case 'ADD_IMAGE':
      state[podId].images.push({
        id: state[podId].images[state[podId].images.length - 1].id + 1,
        image: action.image.data,
      });
      return [...state];

    case 'REMOVE_IMAGE':
      const imageId = state[podId].images.findIndex(
        (i) => i.id === action.image
      );
      if (imageId !== -1) state[podId].images.splice(imageId, 1);
      return [...state];

    // Text Pod
    case 'ADD_TEXT':
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          type: 'text',
          value: '',
        },
      ];

    case 'SET_TEXT':
      state[podId].text = action.text;
      return [...state];

    // Trailer Pod
    case 'ADD_TRAILER':
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          type: 'trailer',
          url: '',
        },
      ];

    case 'SET_TRAILER':
      state[podId].url = action.url;
      return [...state];

    // Bork
    default:
      console.error(
        'StorefrontContext: Reducer was called without an `action` argument.'
      );
      return state;
  }
};

const PodsProvider = ({ children }) => {
  const [state, podUpdater] = useReducer(reducer, initialState);
  return <Provider value={{ state, podUpdater }}>{children}</Provider>;
};

export { Pods, PodsProvider };

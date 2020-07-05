import React, { createContext, useReducer } from 'react';
import storefront from '../data.json';

const initialState = storefront;

const Pods = createContext(initialState);
const { Provider } = Pods;

const reducer = (state, action) => {
  let temp = { ...state };
  switch (true) {
    // Pod Management
    case action.type === 'REORDER_PODS':
      return action.pods;

    case action.type === 'REMOVE_POD':
      temp.items.splice(action.pod, 1);
      return { ...temp };

    case action.type === 'MOVE_POD_DOWN': {
      const downer = temp.items[action.pod];
      temp.items.splice(action.pod, 1);
      temp.items.splice(action.pod + 1, 0, downer);
      return { ...temp };
    }

    case action.type === 'MOVE_POD_UP': {
      const upper = temp.items[action.pod];
      temp.items.splice(action.pod, 1);
      temp.items.splice(action.pod - 1, 0, upper);
      return { ...temp };
    }

    // Gallery Pod
    case action.type === 'ADD_POD' && action.kind === 'gallery':
      temp.items.push({ type: 'gallery', layout: 2, images: [] });
      return { ...temp };

    case action.type === 'SET_LAYOUT':
      temp.items[action.pod].layout = action.layout;
      return { ...temp };

    case action.type === 'SET_IMAGE':
      temp.items[action.pod].images = action.images;
      return { ...temp };

    case action.type === 'ADD_IMAGE':
      temp.items[action.pod].images.push({ image: action.image.data });
      return { ...temp };

    case action.type === 'REMOVE_IMAGE': {
      const gallery = temp.items[action.pod].images;
      const index = gallery.findIndex((item) => item.image === action.image);

      gallery.splice(index, 1);
      return { ...temp };
    }

    // Text Pod
    case action.type === 'ADD_POD' && action.kind === 'text':
      temp.items.push({ type: 'text', value: '' });
      return { ...temp };

    case action.type === 'UPDATE_TEXT':
      temp.items[action.pod].text = action.text;
      return { ...temp };

    // Trailer Pod
    case action.type === 'ADD_POD' && action.kind === 'trailer':
      temp.items.push({ type: 'trailer', url: '' });
      return { ...temp };

    case action.type === 'UPDATE_TRAILER':
      temp.items[action.pod].url = action.url;
      return { ...temp };

    // Bork
    default:
      console.error('StorefrontContext: Reducer was called without an `action` argument.');
      return { ...temp };
  }
};

const PodsProvider = ({ children }) => {
  const [state, podUpdater] = useReducer(reducer, initialState);
  return <Provider value={{ state, podUpdater }}>{children}</Provider>;
};

export { Pods, PodsProvider };

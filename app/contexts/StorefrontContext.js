import React, { createContext, useReducer } from 'react';
import storefront from '../../public/game/storefront.json';

const initialState = storefront;

const Pods = createContext(initialState);
const { Provider } = Pods;

const reducer = (state, action) => {
  switch (true) {
    // Pod Management
    case action.type === 'movePodDown': {
      const downer = state.items[action.pod];
      state.items.splice(action.pod, 1);
      state.items.splice(action.pod + 1, 0, downer);
      return { ...state };
    }

    case action.type === 'movePodUp': {
      const upper = state.items[action.pod];
      state.items.splice(action.pod, 1);
      state.items.splice(action.pod - 1, 0, upper);
      return { ...state };
    }

    case action.type === 'removePod':
      state.items.splice(action.pod, 1);
      return { ...state };

    case action.type === 'reorderPods':
      return action.pods;

    // Gallery Pod
    case action.type === 'addPod' && action.kind === 'gallery':
      state.items.push({ type: 'gallery', layout: 2, images: [] });
      return { ...state };

    case action.type === 'setLayout':
      state.items[action.pod].layout = action.layout;
      return { ...state };

    case action.type === 'setImages':
      state.items[action.pod].images = action.images;
      return { ...state };

    case action.type === 'addImage':
      state.items[action.pod].images.push({ image: action.image.data });
      return { ...state };

    case action.type === 'removeImage': {
      const gallery = state.items[action.pod].images;
      const index = gallery.findIndex(item => item.image === action.image);

      gallery.splice(index, 1);
      return { ...state };
    }

    // Text Pod
    case action.type === 'addPod' && action.kind === 'text':
      state.items.push({ type: 'text', value: '' });
      return { ...state };

    case action.type === 'updateText':
      state.items[action.pod].text = action.text;
      return { ...state };

    // Trailer Pod
    case action.type === 'addPod' && action.kind === 'trailer':
      state.items.push({ type: 'trailer', url: '' });
      return { ...state };

    case action.type === 'updateTrailer':
      state.items[action.pod].url = action.url;
      return { ...state };

    // Bork
    default:
      return { ...state };
  }
};

const PodsProvider = ({ children }) => {
  const [state, podUpdater] = useReducer(reducer, initialState);
  return <Provider value={{ state, podUpdater }}>{children}</Provider>;
};

export { Pods, PodsProvider };

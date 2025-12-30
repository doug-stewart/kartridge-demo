import { create } from 'zustand';

import type { GalleryObj, PodObj, PodsArr, PodsState } from '../types';

const changeIndex = (input: PodsArr, index: number, offset: number) => {
    const array = [...input];
    const currentIndex = array.findIndex((item) => item.id === index);
    const targetIndex = currentIndex + offset;
    const item = array.splice(currentIndex, 1).at(0) as PodObj;
    array.splice(targetIndex, 0, item);
    return array;
};

export const addImage = (images: GalleryObj['images'], image: string) => {
    images.push({ id: images.length + 1, image });
    return images;
};

export const removeImage = (images: GalleryObj['images'], id: number) => {
    const imageIndex = images.findIndex((i) => i.id === id);
    if (imageIndex !== -1) images.splice(imageIndex, 1);
    return images;
};

export const usePodsStore = create<PodsState>((set) => ({
    pods: [],
    setPods: (pods) => set({ pods }),
    addPod: (pod) =>
        set((state) => ({
            pods: [...state.pods, Object.assign(pod, { id: state.pods.length + 1 })],
        })),
    removePod: (id) =>
        set((state) => {
            const index = state.pods.findIndex((pod) => pod.id === id);
            const pods = [...state.pods];
            pods.splice(index, 1);
            return { pods: [...pods] };
        }),
    movePodUp: (id) => set((state) => ({ pods: [...changeIndex(state.pods, id, -1)] })),
    movePodDown: (id) => set((state) => ({ pods: [...changeIndex(state.pods, id, +1)] })),
    updatePod: (pod) =>
        set((state) => {
            const podIndex = state.pods.findIndex((p) => p.id === pod.id);
            const pods = [...state.pods];
            pods[podIndex] = pod;
            return { pods: [...pods] };
        }),
}));

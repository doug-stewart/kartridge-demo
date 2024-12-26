import { createStore } from '@xstate/store';

import type { GalleryObj, PodObj, PodsArr } from '../types';

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

export const podsStore = createStore({
    context: {
        pods: [] as PodsArr,
    },
    on: {
        set: (_, event: { pods: PodsArr }) => ({ pods: event.pods }),
        add: (context, event: { pod: PodObj }) => ({
            pods: [...context.pods, Object.assign(event.pod, { id: context.pods.length + 1 })],
        }),
        remove: (context, event: { id: number }) => {
            const index = context.pods.findIndex((pod) => pod.id === event.id);
            const { pods } = context;
            pods.splice(index, 1);
            return { pods: [...pods] };
        },
        moveUp: (context, event: { id: number }) => ({
            pods: [...changeIndex(context.pods, event.id, -1)],
        }),
        moveDown: (context, event: { id: number }) => ({
            pods: [...changeIndex(context.pods, event.id, +1)],
        }),
        update: (context, event: { pod: PodObj }) => {
            const podIndex = context.pods.findIndex((p) => p.id === event.pod.id);
            context.pods[podIndex] = event.pod;
            return { pods: [...context.pods] };
        },
    },
});

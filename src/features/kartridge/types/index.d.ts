export type Media = {
    name: string;
    data: string;
    type: string;
};

export type GalleryImage = { id: number; image: string };

export type GalleryPod = {
    id: number;
    type: 'gallery';
    layout: 1 | 2 | 3;
    images: Array<GalleryImage>;
};

export type TextPod = {
    id: number;
    type: 'text';
    text: string;
};

export type TrailerPod = {
    id: number;
    type: 'trailer';
    url: string;
};

export type Pod = GalleryPod | TextPod | TrailerPod;

export type Pods = Array<Pod>;

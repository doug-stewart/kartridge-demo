export type MediaObj = {
    name: string;
    data: string;
    type: string;
};

export type ImageObj = { id: number; image: string };

export type GalleryObj = {
    id: number;
    type: 'gallery';
    layout: 1 | 2 | 3;
    images: Array<Image>;
};

export type TextObj = {
    id: number;
    type: 'text';
    text: string;
};

export type TrailerObj = {
    id: number;
    type: 'trailer';
    url: string;
};

export type PodObj = GalleryObj | TextObj | TrailerObj;

export type PodsArr = Array<PodObj>;

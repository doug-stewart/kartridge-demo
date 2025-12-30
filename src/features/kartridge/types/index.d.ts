export type MediaObj = { name: string; data: string; type: string };

export type ImageObj = { id: number; image: string };

export type GalleryObj = { id: number; type: 'gallery'; layout: 1 | 2 | 3; images: Array<Image> };

export type TextObj = { id: number; type: 'text'; text: string };

export type TrailerObj = { id: number; type: 'trailer'; url: string };

export type PodObj = GalleryObj | TextObj | TrailerObj;

export type PodsArr = Array<PodObj>;

export type PodsState = {
    pods: PodsArr;
    setPods: (pods: PodsArr) => void;
    addPod: (pod: PodObj) => void;
    removePod: (id: number) => void;
    movePodUp: (id: number) => void;
    movePodDown: (id: number) => void;
    updatePod: (pod: PodObj) => void;
};

export type ThemeState = {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
    f: string;
    setTheme: (key: keyof Omit<ThemeState, 'setTheme'>, color: string) => void;
};

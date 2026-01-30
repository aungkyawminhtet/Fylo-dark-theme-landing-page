interface NavabarListType {
    id: number;
    title: string;
}

interface FeatureListType {
    id: number;
    title: string;
    desc: string;
    icon: string;
    alt: string;
}

interface ProfileListType {
    id: number;
    name: string;
    desc: string;
    img: string;
    info: string;
}

export type {NavabarListType, FeatureListType, ProfileListType}
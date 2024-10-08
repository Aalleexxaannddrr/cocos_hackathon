export enum VideoCategories {
    game = 'Матч',
    behindScene = 'За кадром',
    interview = 'Интервью',
}

export interface Video {
    id: string;
    previewImg: string;
    url: string;
    categoey: VideoCategories;
    description: string;
    date: string;
}

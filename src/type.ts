import { ReactNode } from "react";

export interface Image {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

export interface IGlobalState {
    selectedImage: {
        children: ReactNode
        key: string | null
    }
}
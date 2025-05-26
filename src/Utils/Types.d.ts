import type { Dispatch, SetStateAction } from "react";

export type ThemeType = 'light' | 'dark';
export type ThemeContextType = [ThemeType, Dispatch<SetStateAction<ThemeType>>]
type MonthType = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';

//data

type ID = number;

export interface SiteData {
    id: ID;
    name: string;
    description: string;
    favicon: Media;
    seo: any | null;
}

export interface Personal {
    id: ID;
    fname: string;
    lname: string;
    bio: string;
    profileImg: Media;
}


export interface Skill {
    id: ID;
    name: string;
    icon: Media;
};

export interface Resume {
    id: ID;
    file: Media;
    downloadIcon: ThemedIcon;
    viewIcon: ThemedIcon;
}

export interface ThemedIcon extends Record<ThemeType, Media> {
    id: ID;
}

export interface Social {
    id: ID;
    link: string;
    icon: ThemedIcon;
    
}

export interface Experience {
    id: ID;
    companyName: string;
    designation: string;
    duration: string;
    companyIcon: Media;
    description: string[] | null;
    
}

export interface Project {
    id: ID;
    name: string;
    srcLink: string;
    liveLink: string;
    image: Media[];

}

export type Data = {
        id: ID;
        documentId: string;
        address: string ;
        addressLink: string ;
        addressImg: Media;
        totalExp: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        siteData: SiteData;
        personal: Personal
        skills: Skill[];
        resume: Resume;
        themeIcon: ThemedIcon;
        socials: Social[];
        experiences: Experience[];
        projects: Project[]
};


type Media = {
    id: ID;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number | null;
    height: number | null;
    formats: any | MediaFormat;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
};

interface MediaFormat {
    thumbnail: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: string | null;
        size: number;
        width: number;
        height: number;
        sizeInBytes: number;
    };
};

import { Dispatch, SetStateAction } from "react";

export type ThemeType = 'light' | 'dark';
export type ThemeContextType = [ThemeType, Dispatch<SetStateAction<ThemeType>>]
type MonthType = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';

interface SkillType {
    _id: string,
    name: string,
    icon: string
}

interface SocialsType {
    _id: string,
    giturl: string;
    mail: string;
    phone: string;
}

interface Company {
    _id: string,
    name: string;
    link: string,
    icon: string,
    totalYear: number;
    position: string;
    startYear: number;
    startMonth: MonthType
    endMonth: MonthType | ''
    endYear: number;
    description: string[]
}

interface Experience {
    _id: string,
    total: number,
    companies: Company[]
}

interface ResumeType {
    _id: string,
    updateMonth: MonthType
    updateYear: number
    viewurl: string;
    file: string;
}

interface MapType {
    _id: string,
    image: string,
    url: string,
    address: string
}

export interface ProjectType {
    _id: string,
    name: string,
    description: string,
    image: string,
    previewLink: string,
    sourceCodeLink: string 
}

export interface User {
    _id: string,
    name: string;
    photo: string;
    headline: [string, string];
    skills: SkillType[];
    map: MapType;
    projects: ProjectType[];
    experience: Experience;
    socials: SocialsType;
    resume: ResumeType;
}
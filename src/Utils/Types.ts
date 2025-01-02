import { Dispatch, SetStateAction } from "react";
import { css, html, javascript, node, react, redux, sass, tailwind, typescript, vscode } from "../assets/icons/skills";
import { photo, tcs } from "../assets/icons";
// import resume_file from "../assets/Resume.pdf";
import { hangman, kanban, map, ticktacktoe, treeview, voting } from "../assets/images";

export type ThemeType = 'light' | 'dark';
export type ThemeContextType = [ThemeType, Dispatch<SetStateAction<ThemeType>>]
type MonthType = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';

interface SkillType {
    name: string,
    icon: string
}

interface SocialsType {
    giturl: string;
    mail: string;
    phone: string;
}

interface Company {
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
    total: number,
    companies: Company[]
}

interface ResumeType {
    updateMonth: MonthType
    updateYear: number
    viewurl: string;
    file: string;
}

interface MapType {
    image: string,
    url: string,
    address: string
}

export interface ProjectType {
    name: string,
    description: string,
    image: string,
    previewLink: string,
    sourceCodeLink: string 
}

export interface User {
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

export const userData: User = {
    name: "shri prakash shukla",
    photo: photo,
    headline: [
        "I am passionate about building user-friendly and scalable web applications.",
        "Currently working as Frontend Developer at Tata Consultancy Services.",
    ],
    skills: [
        { name: 'HTML', icon: html },
        { name: 'CSS', icon: css },
        { name: 'JavaScript', icon: javascript },
        { name: 'TypeScript', icon: typescript },
        { name: 'React', icon: react },
        { name: 'Redux', icon: redux },
        { name: 'Node', icon: node },
        { name: 'Tailwind', icon: tailwind },
        { name: 'SASS', icon: sass },
        { name: 'VS Code', icon: vscode },
    ],
    resume: {
        updateMonth: 'Dec',
        updateYear: 2024,
        viewurl: "https://drive.google.com/file/d/11clLjbTXkLfV9PKoSqJ5na56tTlZFd89/view?usp=sharing",
        file: ''
    },
    map: {
        url: 'https://maps.app.goo.gl/iBkPLyg6dfEcf3Ts7',
        image: map,
        address: 'Gurugram, Haryana, 122002'
    },
    socials: {
        giturl: "https://github.com/shuklasp10",
        mail: "shriprakashshukla8@gmail.com",
        phone: "+918869929257",
    },
    experience: {
        total: 3,
        companies: [{
            totalYear: 3,
            position: "frontend developer",
            startYear: 2021,
            startMonth: 'Oct',
            endMonth: '',
            endYear: 0,
            name: "tata consultancy services",
            link: 'http://tcs.com/',
            icon: tcs,
            description: ['']
        }]
    },
    projects: [
        {
            name: "Kanban",
            description: "dragndrop",
            image: kanban,
            previewLink: 'https://kanban-nine.vercel.app/',
            sourceCodeLink: ''
        },
        {
            name: "Treeview and JSON generator",
            description: "",
            image: treeview,
            previewLink: 'https://treeview-omega.vercel.app/',
            sourceCodeLink: ''
        },
        {
            name: "Online Voting",
            description: "",
            image: voting,
            previewLink: 'https://voting-woad.vercel.app/',
            sourceCodeLink: ''
        },
        {
            name: "Hangman: Word guessing game",
            description: "",
            image: hangman,
            previewLink: 'https://voting-woad.vercel.app/',
            sourceCodeLink: ''
        },
        {
            name: "Tick-tack-toe game",
            description: "",
            image: ticktacktoe,
            previewLink: 'https://tick-tack-toe-opal.vercel.app/',
            sourceCodeLink: ''
        },
    ],
};
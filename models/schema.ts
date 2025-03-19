import { StringToBoolean } from "class-variance-authority/types";

export type CarouselSchema = {
    _id: string;
    image: string;
    title: string;
}
export type AboutSchema = {
    _id: string;
    text: string;
    type: string;
}
export type ProjectSchema = {
    _id: string;
    title: string;
    image: string[];
    brief: string;
    website: string;
    github: string;
    report: string;
    team: string[];
    description: string;
    download: string;
}
export type Skills = {
    _id: string;
    image: string;
    title: string;
}
export type ExperienceSchema = {
    _id: string;
    title: string;
    icon: string;
    description: string;
    timeline: string;
    image: string[];
}

export type BlogsSchema = {
    _id: string;
    title: string;
    image: string;
    time: string;
    link: string;
    date: string;
    description: string;
    stack: string[];
}
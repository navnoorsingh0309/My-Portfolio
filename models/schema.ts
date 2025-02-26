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
    report: string;
    team: string[];
    description: string;
    download: string;
}
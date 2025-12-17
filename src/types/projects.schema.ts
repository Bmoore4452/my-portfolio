/**
 * Schema definition for myProjects array
 */

export interface Tag {
    id: number;
    name: string;
    path: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    subDescription: string[];
    href: string;
    logo: string;
    image: string;
    tags: Tag[];
}

export type MyProjectsSchema = Project[];

export interface ProjectInputType {
    name: string;
    description: string;
    courses: [number, ...number[]]
}

export interface ProjectListType {
    id: number;
    name: string;
    isFinished: boolean;
}

export interface AssignProjectType {
    projectId: number;
    userId: string;
}

export interface ProjectResponseType {
    id: number;
    name: string;
}

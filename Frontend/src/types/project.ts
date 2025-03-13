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

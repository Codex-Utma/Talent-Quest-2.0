export interface ClassType {
    id?: number;
    name: string;
    description: string;
}

export interface ClassesType {
    id: number;
    name: string;
    description: string;
    classes: ClassType[];
}

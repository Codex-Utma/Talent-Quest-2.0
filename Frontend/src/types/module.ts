export interface ModuleType {
    id?: number;
    name: string;
    description: string;
}

export interface ModulesType {
    id: number;
    name: string;
    description: string;
    modules: ModuleType[];
}

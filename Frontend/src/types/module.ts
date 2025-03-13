export interface ModuleType {
    name: string;
    description: string;
}

export interface ModulesType {
    id: number;
    name: string;
    description: string;
    modules: ModuleResponseType[];
}

export interface ModuleResponseType {
    id: number;
    name: string;
    description: string;
}

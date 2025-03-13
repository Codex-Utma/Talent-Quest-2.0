export interface ExternalResourceType {
    id: number;
    name: string;
    description: string;
    url: string;
}

export interface ResourceFileType {
    id: number;
    name: string;
    description: string;
    externalResources: ExternalResourceType[];
}

export interface ResourceResponseType {
    id: number;
    name: string;
    description: string;
    resources: {
        External: ExternalResourceType[];
        File: ResourceFileType[];
    }
}

export interface ExternalResourceInputType {
    name: string;
    description: string;
    url: string;
}

export interface ResourceFileInputType {
    name: string;
    description: string;
    file: File;
}

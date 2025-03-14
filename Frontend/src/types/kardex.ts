export interface KardexType {
    insignias: InsigniaType[];
    projects: ProjectType[];
    certifications: CertificationType[];
    currentUser: UserType;
}

export interface InsigniaType {
    id: number;
    name: string;
}

export interface ProjectType {
    id: number;
    name: string;
}

export interface CertificationType {
    id: number;
    name: string;
    description: string;
    createdAt: string;
}

export interface UserType {
    id: number;
    name: string;
    lastName: string;
    email: string;
    UserType: {
        name: string;
    };
    Department: {
        name: string;
    };
}

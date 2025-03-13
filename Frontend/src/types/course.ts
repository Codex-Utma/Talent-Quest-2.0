export interface CourseType {
    id?: number;
    name: string;
    description: string;
}

export interface CoursesType {
    id: number;
    name: string;
    description: string;
    amountClasses?: number;
}

export interface DashboardResponseType {
    activeCourses: number;
    finishedCourses: number;
    courses: CourseData[]
}

export interface CourseData {
    Course: Course;
    percentage: number;
}

interface Course {
    id: number;
    name: string;
}

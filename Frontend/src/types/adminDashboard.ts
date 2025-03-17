export interface AdminDashboardType {
    totalWorkers: number;
    totalCourses: number;
    percentageCoursesFinished: number;
    chartData: {
        totalCoursesFinished: number;
        totalCoursesInProgress: number;
        totalCoursesNotStarted: number;
    };
    availableEmployees: AvaliableEmployee[]
}

export interface AvaliableEmployee {
    id: string;
    name: string;
    lastName: string;
    Department: {
        name: string;
    };
    updatedAt: string;
}

import Navbar from "./Components/NavbarProps";
import { useState, useEffect } from "react";
import { AxiosInstance } from "../../config/axios";
import { CourseData, DashboardResponseType } from "../../types/dashboard";
import CourseDashboard from "./Components/cursos";

const MisCursos = () => {
  const [dashboardData, setDashboardData] = useState<DashboardResponseType>({} as DashboardResponseType);
  const [courses, setCourses] = useState<CourseData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get("/employee/dashboard");
        setDashboardData(response.data.data);
        setCourses(response.data.data.courses);
      } catch (error: any) {
        alert(error.response.data.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Navbar activeCourses={dashboardData.activeCourses} completedCourses={dashboardData.finishedCourses} />

        <section className="mt-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cursos Activos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {courses.map(course => (
                <CourseDashboard key={course.Course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MisCursos;

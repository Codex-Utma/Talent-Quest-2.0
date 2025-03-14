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
    <div className="bg-gray-50 min-h-screen">

      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pl-12">
        <Navbar activeCourses={dashboardData.activeCourses} completedCourses={dashboardData.finishedCourses} />
        <div>
          <div className="grid grid-cols-12 gap-6 mt-6 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pl-12">
            <section className="col-span-12 lg:col-span-12 xl:col-span-12">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold text-gray-900">Cursos Activos</h2>
                <div className="grid grid-cols-2 gap-6 mt-4">
                  {
                    courses.map(course => (
                      <CourseDashboard course={course} />
                    ))
                  }
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MisCursos;

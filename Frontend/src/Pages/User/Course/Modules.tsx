import { useParams } from "react-router-dom";
import { AxiosInstance } from "../../../config/axios";
import { ModulesType } from "../../../types/module";
import { useEffect, useState } from "react";
import CustomModule from "../../../components/Employee/Course/CustomModule";

export default function ModuleFromCourse() {
  const { courseId } = useParams<{ courseId: string }>();

  const [courseData, setCourseData] = useState<ModulesType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get(`/employee/modules/${courseId}`);
        setCourseData(response.data.data.course);
      } catch (error: any) {
        alert(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [courseId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-gray-700">Cargando...</p>
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-red-500">No se encontró el curso.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900">{courseData.name}</h1>
        <p className="text-gray-600 mt-2">{courseData.description}</p>

        <h2 className="text-2xl font-semibold mt-6">Módulos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {courseData.modules.length > 0 ? (
            courseData.modules.map((module) => (
                <CustomModule key={module.id} module={module} />
            ))
          ) : (
            <p className="text-gray-500">No hay módulos disponibles.</p>
          )}
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { ClassType, ClassesType } from "../../../types/class";
import { AxiosInstance } from "../../../config/axios";
import { useParams } from "react-router-dom";
import CustomClass from "../../../components/Employee/Module/CustomClass";

export default function ClassesFromModule() {
  const { moduleId } = useParams<{ moduleId: string }>();

  const [moduleData, setModuleData] = useState<ClassesType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get(`/employee/classes/${moduleId}`);
        setModuleData(response.data.data.module);
      } catch (error: any) {
        alert(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [moduleId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-gray-700">Cargando clases...</p>
      </div>
    );
  }

  if (!moduleData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-red-500">No se encontró el módulo.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900">{moduleData.name}</h1>
        <p className="text-gray-600 mt-2">{moduleData.description}</p>

        <h2 className="text-2xl font-semibold mt-6">Clases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {moduleData.classes.length > 0 ? (
            moduleData.classes.map((classItem: ClassType) => (
              <CustomClass key={classItem.id} class={classItem} />
            ))
          ) : (
            <p className="text-gray-500">No hay clases disponibles.</p>
          )}
        </div>
      </div>
    </div>
  );
}

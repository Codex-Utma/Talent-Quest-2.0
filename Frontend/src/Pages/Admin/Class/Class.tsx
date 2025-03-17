import '@fortawesome/fontawesome-free/css/all.min.css';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { AxiosInstance } from '../../../config/axios';

import { ClassesType, ClassType } from '../../../types/class';
import { ModuleType } from '../../../types/module';
import ClassTable from '../../../components/Admin/Class/ClassTable';

const Class = () => {

  const { moduleId, courseId } = useParams();

  const navigate = useNavigate();

  const [moduleData, setModuleData] = useState<ModuleType>();
  const [classes, setClasses] = useState<ClassType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await AxiosInstance.get(`/admin/class/${moduleId}`);
        const data: ClassesType = response.data.data.module;
        setModuleData({
          id: Number(data.id),
          name: data.name,
          description: data.description
        });
        setClasses(data.classes);
      } catch (error: any) {
        alert(error.response.data.message);
      }
    }

    fetchData();
  }, [moduleId]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 text-left mb-2">Módulo: {moduleData?.name}</h1>
        <p className="text-gray-500 mb-8 text-left">
          {moduleData?.description}
        </p>
        <p className="text-gray-500 mb-8 text-left">
          Lista de todas las clases disponibles en el módulo.
        </p>

        <button className="bg-blue-600 text-white rounded-md px-4 py-2 mb-8 hover:cursor-pointer"
          onClick={() => navigate(`/admin/courses/${courseId}/${moduleId}/add`)}>
          <i className="fas fa-plus mr-2"></i>
          Nueva Clase
        </button>

        {/* Input de búsqueda */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar clases..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-custom focus:border-custom"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>

        {/* Tabla de clases */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
          <ClassTable classes={classes} />
        </div>

        {/* Botón para agregar clase */}
        <div className="flex justify-center">
          <button className="bg-custom hover:bg-custom-600 text-white font-medium py-2 px-6 !rounded-button flex items-center space-x-2">
            <i className="fas fa-plus"></i>
            <span>Agregar Nueva Clase</span>
          </button>
        </div>
      </main>
    </div>
  );
};
export default Class;

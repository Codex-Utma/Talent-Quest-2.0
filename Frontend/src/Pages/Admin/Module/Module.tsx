import '@fortawesome/fontawesome-free/css/all.min.css';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { AxiosInstance } from '../../../config/axios';

import { ModulesType, ModuleType } from '../../../types/module';
import { CoursesType } from '../../../types/course';
import ModuleTable from '../../../components/Admin/Module/ModuleTable';

const Module = () => {

  const navigate = useNavigate();

  const { courseId } = useParams();

  const [modules, setModules] = useState<ModuleType[]>([]);
  const [courseData, setCourseData] = useState<CoursesType>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await AxiosInstance.get(`/admin/module/${courseId}`);
        const data: ModulesType = response.data.data.course;
        setCourseData({
          id: data.id,
          name: data.name,
          description: data.description
        });
        setModules(data.modules);
      } catch (error: any) {
        alert(error.response.data.message);
      }
    }

    fetchData();
  }, [courseId]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 text-left mb-2">Curso: {courseData?.name}</h1>
        <p className="text-gray-500 mb-8 text-left">
          {courseData?.description}
        </p>
        <p className="text-gray-500 mb-8 text-left">
          Lista de todos los módulos disponibles en el curso.
        </p>

        <button className="bg-blue-600 text-white rounded-md px-4 py-2 mb-8 hover:cursor-pointer"
          onClick={() => navigate(`/admin/courses/${courseId}/add`)}>
          <i className="fas fa-plus mr-2"></i>
          Nuevo Módulo
        </button>

        {/* Input de búsqueda */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar módulos..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-custom focus:border-custom"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>

        {/* Tabla de módulos */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
          <ModuleTable modules={modules} />
        </div>

        {/* Botón para agregar módulo */}
        <div className="flex justify-center">
          <button className="bg-custom hover:bg-custom-600 text-white font-medium py-2 px-6 !rounded-button flex items-center space-x-2">
            <i className="fas fa-plus"></i>
            <span>Agregar Nuevo Módulo</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Module;

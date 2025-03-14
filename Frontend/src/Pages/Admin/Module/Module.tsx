import '@fortawesome/fontawesome-free/css/all.min.css';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { AxiosInstance } from '../../../config/axios';

import { ModulesType, ModuleType } from '../../../types/module';
import ModuleRecord from './components/ModuleRecord';
import { CoursesType } from '../../../types/course';

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
        <h1 className="text-3xl font-bold text-gray-900 text-left mb-2">Módulo: {courseData?.name}</h1>
        <p className="text-gray-500 mb-8 text-left">
          {courseData?.description}
        </p>
        <p className="text-gray-500 mb-8 text-left">
          Lista de todos los módulos disponibles en el curso.
        </p>

        <button className="bg-blue-600 text-white rounded-md px-4 py-2 mb-8"
          onClick={() => navigate(`/admin/courses/${courseId}/add`)}>
          <i className="fas fa-user-plus mr-2"></i>
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
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre del Módulo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descripción
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {
                modules.length > 0 ? (
                  modules.map((module) => (
                    <ModuleRecord key={module.id} module={module} />
                  ))
                ) : (
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap" colSpan={3}>
                      <div className="text-center text-gray-500">No hay cursos disponibles</div>
                    </td>
                  </tr>
                )
              }
              {/* Repite para otros módulos */}
            </tbody>
          </table>
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

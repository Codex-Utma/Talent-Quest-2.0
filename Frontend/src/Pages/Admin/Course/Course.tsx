import '@fortawesome/fontawesome-free/css/all.min.css';

import { useState, useEffect } from 'react';
import { AxiosInstance } from '../../../config/axios';
import { CoursesType } from '../../../types/course';
import { useNavigate } from 'react-router-dom';
import CourseTable from '../../../components/Admin/Course/CourseTable';

const Course = () => {

  const navigate = useNavigate();

  const [courses, setCourses] = useState<CoursesType[]>([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await AxiosInstance.get('/admin/course');
        setCourses(response.data.data);
      } catch (error: any) {
        alert(error.response.data.message);
      }
    };

    getCourses();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 text-left mb-2">Cursos</h1>
        <p className="text-gray-500 mb-8 text-left">
          Lista de todos los cursos disponibles en el sistema.
        </p>
        <button className="bg-blue-600 text-white rounded-md px-4 py-2 mb-8 hover:cursor-pointer"
          onClick={() => navigate('/admin/courses/add')}
        >
          <i className="fas fa-plus mr-2"></i>
          Nuevo Curso
        </button>

        {/* Input de búsqueda */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar cursos..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-custom focus:border-custom"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>

        {/* Tabla de cursos */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
          <CourseTable courses={courses} />
        </div>

        {/* Botón para agregar curso */}
        <div className="flex justify-center">
          <button className="bg-custom hover:bg-custom-600 text-white font-medium py-2 px-6 !rounded-button flex items-center space-x-2">
            <i className="fas fa-plus"></i>
            <span>Agregar Nuevo Curso</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Course;

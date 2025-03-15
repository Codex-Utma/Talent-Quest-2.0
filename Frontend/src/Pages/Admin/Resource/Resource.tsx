import '@fortawesome/fontawesome-free/css/all.min.css';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { AxiosInstance } from '../../../config/axios';
import { ExternalResourceType, FileResourceType, ResourceResponseType } from '../../../types/resource';
import { ClassType } from '../../../types/class';
import { ExternalResourceRecord, FileResourceRecord } from './components/ResourceRecord';

const Resource = () => {

  const { classId, moduleId, courseId } = useParams();
  const navigate = useNavigate();

  const [classData, setClassData] = useState<ClassType>({} as ClassType);
  const [externalResources, setExternalResources] = useState<ExternalResourceType[]>([]);
  const [fileResources, setFileResources] = useState<FileResourceType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await AxiosInstance.get(`/admin/resource/all/${classId}`);
        console.log(response.data.data);
        const data: ResourceResponseType = response.data.data;
        console.log(data.resources.File);
        setClassData({
          id: Number(data.id),
          name: data.name,
          description: data.description
        });
        setExternalResources(data.resources.External);
        setFileResources(data.resources.File);
      } catch (error: any) {
        alert(error.response.data.message);
      }
    }

    fetchData();
  }, [classId]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 text-left mb-2">Clase: {classData.name}</h1>
        <p className="text-gray-500 mb-8 text-left">{classData.description}</p>
        <p className="text-gray-500 mb-8 text-left">
          Lista de todos los recursos disponibles en la clase.
        </p>

        <div className='space-x-4'>
          <button className="bg-blue-600 text-white rounded-md px-4 py-2 mb-8 hover:cursor-pointer"
            onClick={() => navigate(`/admin/courses/${courseId}/${moduleId}/${classId}/add/external`)}>
            <i className="fas fa-user-plus mr-2"></i>
            Nuevo Recurso (externo)
          </button>
          <button className="bg-blue-600 text-white rounded-md px-4 py-2 mb-8 hover:cursor-pointer"
            onClick={() => navigate(`/admin/courses/${courseId}/${moduleId}/${classId}/add/file`)}>
            <i className="fas fa-user-plus mr-2"></i>
            Nuevo Recurso (archivo)
          </button>
        </div>


        {/* Input de búsqueda */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar recursos..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-custom focus:border-custom"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>

        {/* Tabla de clases */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre del Recurso
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
                externalResources.length > 0 || fileResources.length > 0 ? (
                  <>
                    {externalResources.map((resource) => (
                      <ExternalResourceRecord key={resource.id} resource={resource} />
                    ))}
                    {fileResources.map((resource) => (
                      <FileResourceRecord key={resource.id} resource={resource} />
                    ))}
                  </>
                ) : (
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap" colSpan={3}>
                      <div className="text-center text-gray-500">No hay cursos disponibles</div>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>

        {/* Botón para agregar clase */}
        <div className="flex justify-center">
          <button className="bg-custom hover:bg-custom-600 text-white font-medium py-2 px-6 !rounded-button flex items-center space-x-2">
            <i className="fas fa-plus"></i>
            <span>Agregar Nuevo Recurso</span>
          </button>
        </div>
      </main>
    </div>
  );
};
export default Resource;

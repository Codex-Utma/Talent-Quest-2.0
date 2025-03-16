import { FaSearch, FaPlus, FaUserPlus } from "react-icons/fa";
import { useState, useEffect } from "react";

import { AxiosInstance } from "../../../config/axios";
import { ProjectListType } from "../../../types/project";
import ProjectRecord from "../../../components/Admin/Project/ProjectRecord";

import { useNavigate } from "react-router-dom";

const Project = () => {

  const navigate = useNavigate();

  const [projects, setProjects] = useState<ProjectListType[]>([]);

  useEffect(() => {

    const fetchProjects = async () => {
      try {
        const response = await AxiosInstance.get("/admin/project");
        setProjects(response.data.data);
      } catch (error: any) {
        alert(error.response.data.message);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-8 py-8 max-w-8xl mx-auto">
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Proyectos</h1>
          <div className="relative">
            <input type="text" placeholder="Buscar proyectos..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-custom focus:border-custom" />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {
              projects.length > 0 ?
                projects.map(project => (
                  <ProjectRecord key={project.id} project={project} />
                ))
                :
                <p className="text-gray-500 text-center">No hay proyectos</p>
            }
          </div>
        </div>

        <div className="border-t border-gray-200 px-6 py-8 bg-gray-50 flex items-center justify-between">
          <button className="rounded-md bg-blue-600 text-white px-6 py-2 font-medium hover:bg-blue-700 flex items-center hover:cursor-pointer"
            onClick={() => navigate("/admin/project/newProject")}
          >
            <FaPlus className="mr-2" /> Agregar Proyecto
          </button>
          <button className="rounded-md bg-white text-blue-600 border border-blue-600 px-6 py-2 font-medium hover:bg-gray-50 flex items-center hover:cursor-pointer"
            onClick={() => navigate("/admin/project/assignWorker")}
          >
            <FaUserPlus className="mr-2" /> Asignar Trabajadores
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;

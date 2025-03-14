import { UseFormRegister } from "react-hook-form";
import { AssignProjectType } from "../../../../types/project";
import { useCallback, useState } from "react";
import debounce from "just-debounce-it";
import { AxiosInstance } from "../../../../config/axios";
import { ProjectResponseType } from "../../../../types/project";

interface InputProjectProps {
    register: UseFormRegister<AssignProjectType>;
}

export default function InputProject({ register }: InputProjectProps) {

    const [projectName, setProjectName] = useState<string>("");
    const [projects, setProjects] = useState<ProjectResponseType[]>([]);
    const [selectedProject, setSelectedProject] = useState<ProjectResponseType | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const getProjects = async (projectName: string) => {
        if (!projectName) return;
        setLoading(true);
        try {
            const response = await AxiosInstance.get(`/admin/form/projects?name=${projectName}`);
            setProjects(response.data.data);
        } catch (error: any) {
            alert(error.response?.data?.message || "Error al obtener proyectos");
        } finally {
            setLoading(false);
        }
    }

    const debouncedGetProjects = useCallback(
        debounce((projectName: string) => {
            getProjects(projectName);
        }, 1000),
        []
    );

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newProjectName = e.target.value;
        setProjectName(newProjectName);
        setSelectedProject(null);
        debouncedGetProjects(newProjectName);
    }

    const handleSelectProject = (selected: ProjectResponseType) => {
        setSelectedProject(selected);
        register("projectId", { value: String(selected.id) });
        setProjectName(selected.name);
        setProjects([]);
    }

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                Proyecto
            </label>
            <input
                type="text"
                placeholder="Ingrese el nombre del proyecto"
                className="w-full border border-gray-300 p-2 rounded-md"
                value={projectName}
                onChange={handleInput}
            />
            {loading && <p className="text-sm text-gray-500 mt-1">Buscando...</p>}
            {
                projects.length > 0 && (
                    <div className="absolute w-full bg-white border border-gray-300 mt-1 rounded-md">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="p-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleSelectProject(project)}
                            >
                                {project.name}
                            </div>
                        ))}
                    </div>
                )
            }
            {selectedProject && (
                <div className="mt-4">
                    <h2 className="text-sm font-medium text-gray-700 mb-2">Proyecto Seleccionado</h2>
                    <p className="text-gray-800">{selectedProject.name}</p>
                </div>
            )}
        </div>
    )
}

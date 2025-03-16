import InputCourses from "../../../../components/Admin/Project/Add/InputCourses";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ProjectInputType } from "../../../../types/project";
import { projectSchema } from "../../../../schemas/project.schema";
import { AxiosInstance } from "../../../../config/axios";
import { useNavigate } from "react-router-dom";

const NewProject = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<ProjectInputType>({
        resolver: zodResolver(projectSchema),
    });

    const onSubmit = async (data: ProjectInputType) => {
        try {
            const response = await AxiosInstance.post("/admin/project", {
                name: data.name,
                description: data.description,
                neededCourses: data.courses
            });
            alert(response.data.message);
            navigate("/admin/project");
        } catch (error: any) {
            alert(error.response.data.message);
        }
    }

    return (
        <div className="flex flex-col p-8 bg-transparent">
            {/* Contenido Principal */}
            <div className="py-10">
                <h1 className="text-2xl font-bold mb-6">Nuevo Proyecto</h1>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {/* Nombre del Proyecto */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre del Proyecto
                        </label>
                        <input
                            type="text"
                            placeholder="Ingrese el nombre del proyecto"
                            className="block w-full border border-gray-300 rounded-md p-2"
                            {...register("name")}
                        />
                        {
                            errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>
                        }
                    </div>

                    {/* Descripción */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Descripción
                        </label>
                        <textarea
                            placeholder="Describa el proyecto"
                            className="block w-full border border-gray-300 rounded-md p-2"
                            {...register("description")}
                        ></textarea>
                        {
                            errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>
                        }
                    </div>

                    {/* Cursos Asociados */}
                    <InputCourses register={register} />
                    {
                        errors.courses && <p className="text-red-500 text-sm">{errors.courses.message}</p>
                    }

                    {/* Botón de Guardar */}
                    <div className="flex justify-end space-x-4">
                        <button className="bg-blue-600 text-white rounded-md px-4 py-2 hover:cursor-pointer">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewProject;

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { moduleSchema } from "../../../schemas/module.schema";
import { ModuleType } from "../../../types/module";
import { AxiosInstance } from "../../../config/axios";

import { useNavigate, useParams } from "react-router-dom";

const NewModule = () => {

    const { courseId } = useParams();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<ModuleType>({
        resolver: zodResolver(moduleSchema),
    });

    const onSuccess = async (data: ModuleType) => {
        try {
            const response = await AxiosInstance.post(`/admin/module`, {
                ...data,
                courseId,
            });
            alert(response.data.message);
            navigate(`/admin/courses/${courseId}`);
        } catch (error: any) {
            alert(error.response.data.message);
        }
    }

    return (
        <div className="bg-gray-50 min-h-screen">

            {/* Contenido Principal */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Nuevo Módulo</h1>
                    <div className="mt-2 text-sm text-gray-500">
                        <span>Cursos</span>
                        <span className="mx-2">/</span>
                        <span>Módulos</span>

                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="col-span-1">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Detalles del Módulo</h2>
                            <form onSubmit={handleSubmit(onSuccess)}>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Título del Módulo</label>
                                        <input type="text"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm"
                                            placeholder="Modulo..."
                                            {...register("name")}
                                            />
                                            {
                                                errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>
                                            }
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Descripción</label>
                                        <textarea rows={4}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm"
                                            placeholder="Describe el contenido del módulo..."
                                            {...register("description")}
                                            ></textarea>
                                            {
                                                errors.description && <p className="text-red-500 text-xs italic">{errors.description.message}</p>
                                            }
                                        <button className="bg-black text-white rounded px-4 py-2 flex items-center hover:cursor-pointer">
                                            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16v4a2 2 0 002 2h14a2 2 0 002-2v-4m-8-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            Guardar Cambios
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewModule;

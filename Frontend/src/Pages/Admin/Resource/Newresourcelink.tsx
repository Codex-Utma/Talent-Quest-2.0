import { externalResourceSchema } from "../../../schemas/externalResource.schema";
import { ExternalResourceInputType } from "../../../types/resource";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";

import { AxiosInstance } from "../../../config/axios";

const Newresourcelink= () => {

    const { courseId, moduleId, classId } = useParams();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<ExternalResourceInputType>({
        resolver: zodResolver(externalResourceSchema),
    });

    const onSuccess = async (data: ExternalResourceInputType) => {
        try {
            const response = await AxiosInstance.post('/admin/resource/link', {
                ...data,
                courseId,
                moduleId,
                classId,
            });
            alert(response.data.message);
            navigate(`/admin/courses/${courseId}/${moduleId}/${classId}`);
        } catch (error: any) {
            alert(error.response.data.message);
        }
    }

    return (
        <div className="flex flex-col p-8 bg-transparent">

            {/* Contenido Principal */}
            <div className="py-10">
                <h1 className="text-2xl font-bold mb-6">Agregar Nuevo Recurso Educativo</h1>
                <div className="space-y-6">
                    {/* Título del Recurso */}
                    <form onSubmit={handleSubmit(onSuccess)} className="space-y-4">
                        {/* Título del Recurso */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Título del Recurso</label>
                            <input
                                type="text"
                                placeholder="Ingrese el título del recurso"
                                className="block w-full border border-gray-300 rounded-md p-2"
                                {...register("name")}
                            />
                            {
                                errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>
                            }
                        </div>

                        {/* Descripción */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                            <textarea
                                placeholder="Describa el recurso educativo"
                                className="block w-full border border-gray-300 rounded-md p-2"
                                {...register("description")}
                            ></textarea>
                            {
                                errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>
                            }
                        </div>

                        {/* Link */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Link</label>
                            <textarea
                                placeholder="Ingrese el Link"
                                className="block w-full border border-gray-300 rounded-md p-2"
                                {...register("url")}
                            ></textarea>
                            {
                                errors.url && <p className="text-red-500 text-sm">{errors.url.message}</p>
                            }
                        </div>


                        {/* Botones de Guardar y Publicar */}
                        <div className="flex justify-end space-x-4">

                            <button className="bg-blue-600 text-white rounded-md px-4 py-2 hover:cursor-pointer">
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newresourcelink;

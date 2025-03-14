import { externalResourceSchema } from "../../../schemas/externalResource.schema";
import { ExternalResourceInputType } from "../../../types/resource";

import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router-dom";

import { AxiosInstance } from "../../../config/axios";

const Newresourcelink= () => {

    const { courseId, moduleId, classId } = useParams();
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm<ExternalResourceInputType>({
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

    const onError = (errors: FieldErrors) => {
        alert("Error al validar los campos");
        console.log(errors);
    }

    return (
        <div className="flex flex-col p-8 bg-transparent">
            {/* Navegación */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <img
                        src="https://image-resource.creatie.ai/152487613725585/152487613725587/75b3ef6bdbfeed6aa6499fc1a28b8188.png"
                        alt="Logo"
                        className="h-8 w-8"
                    />
                </div>
            </div>

            {/* Contenido Principal */}
            <div className="py-10">
                <h1 className="text-2xl font-bold mb-6">Agregar Nuevo Recurso Educativo</h1>
                <div className="space-y-6">
                    {/* Título del Recurso */}
                    <form onSubmit={handleSubmit(onSuccess, onError)} className="space-y-4">
                        {/* Título del Recurso */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Título del Recurso</label>
                            <input
                                type="text"
                                placeholder="Ingrese el título del recurso"
                                className="block w-full border border-gray-300 rounded-md p-2"
                                {...register("name")}
                            />
                        </div>

                        {/* Descripción */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                            <textarea
                                placeholder="Describa el recurso educativo"
                                className="block w-full border border-gray-300 rounded-md p-2"
                                {...register("description")}
                            ></textarea>
                        </div>

                        {/* Link */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Link</label>
                            <textarea
                                placeholder="Ingrese el Link"
                                className="block w-full border border-gray-300 rounded-md p-2"
                                {...register("url")}
                            ></textarea>
                        </div>


                        {/* Botones de Guardar y Publicar */}
                        <div className="flex justify-end space-x-4">

                            <button className="bg-blue-600 text-white rounded-md px-4 py-2">
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

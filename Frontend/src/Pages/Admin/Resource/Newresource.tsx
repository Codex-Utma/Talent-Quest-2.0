import { useState } from "react";
import { useForm, FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResourceFileInputType } from "../../../types/resource";
import { fileResourceSchema } from "../../../schemas/fileResource.schema";
import { AxiosInstance } from "../../../config/axios";
import { useNavigate, useParams } from "react-router-dom";

const NewResource = () => {

    const { courseId, moduleId, classId } = useParams();
    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<ResourceFileInputType>({
        resolver: zodResolver(fileResourceSchema),
    });

    const onSubmit = async (data: ResourceFileInputType) => {
        try {

            if (!courseId || !moduleId || !classId) {
                alert("No se han proporcionado los parámetros necesarios");
                return;
            }

            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("description", data.description);
            formData.append("courseId", courseId);
            formData.append("moduleId", moduleId);
            formData.append("classId", classId);

            if (data.file) {
                formData.append("resource", data.file); // Importante: La clave debe coincidir con el nombre en el backend
            }

            const response = await AxiosInstance.post("/admin/resource/file", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // ← Necesario para enviar archivos
                },
            });

            alert(response.data.message);
            navigate(`/admin/courses/${courseId}/${moduleId}/${classId}`);
        } catch (error: any) {
            alert(error.response.data.message);
        }
    };


    const onError = (errors: FieldErrors) => {
        alert("Error al validar el formulario");
        console.log(errors);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setValue("file", file, { shouldValidate: true }); // ← Forzar validación del campo
        }
    };


    return (
        <div className="flex flex-col p-8 bg-transparent">
            <div className="py-10">
                <h1 className="text-2xl font-bold mb-6">Agregar Nuevo Recurso Educativo</h1>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit, onError)}>
                    {/* Título del Recurso */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Título del Recurso</label>
                        <input
                            type="text"
                            {...register("name")}
                            placeholder="Ingrese el título del recurso"
                            className="block w-full border border-gray-300 rounded-md p-2"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Descripción */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                        <textarea
                            placeholder="Describa el recurso educativo"
                            {...register("description")}
                            className="block w-full border border-gray-300 rounded-md p-2"
                        ></textarea>
                        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                    </div>

                    {/* Subir Archivos */}
                    <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 flex flex-col items-center">
                        <p className="text-gray-500 mb-2">Arrastra y suelta archivos aquí (PDF, DOCX) o</p>
                        <input
                            type="file"
                            className="bg-white border border-gray-300 rounded-md px-4 py-2"
                            onChange={handleFileChange}
                        />
                        {errors.file && <p className="text-red-500 text-sm">{errors.file.message}</p>}
                        {selectedFile && <p className="text-sm text-gray-600 mt-2">Archivo seleccionado: {selectedFile.name}</p>}
                    </div>

                    {/* Botón de Guardar */}
                    <div className="flex justify-end space-x-4">
                        <button type="submit" className="bg-blue-600 text-white rounded-md px-4 py-2 hover:cursor-pointer">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewResource;

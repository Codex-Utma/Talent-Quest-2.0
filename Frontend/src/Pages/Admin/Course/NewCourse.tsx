import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { courseSchema } from "../../../schemas/course.schema";
import { CourseType } from "../../../types/course";
import { AxiosInstance } from "../../../config/axios";

const NewCourse = () => {

      const { register, handleSubmit } = useForm<CourseType>({
        resolver: zodResolver(courseSchema),
      });

      const onSuccess = async (data: CourseType) => {
        try {
            const response = await AxiosInstance.post("/admin/course", data);
            alert(response.data?.message);
        } catch (error: any) {
            alert(error.response.data.message);
        }
      }

      const onError = (errors: FieldErrors) => {
        alert("Error al crear el curso");
        console.log(errors);
      }

    return (
        <div className="bg-gray-50 min-h-screen">

            {/* Contenido Principal */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Nuevo Curso</h1>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="col-span-1">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Detalles del Curso</h2>
                            <form onSubmit={handleSubmit(onSuccess, onError)}>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Título del Curso</label>
                                        <input type="text"
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm"
                                            placeholder="Curso..."
                                            {...register("name")}
                                            />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Descripción</label>
                                        <textarea rows={4}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-custom focus:border-custom sm:text-sm"
                                            placeholder="Describe el contenido del curso..."
                                            {...register("description")}
                                            ></textarea>
                                        <button className="bg-black text-white rounded px-4 py-2 flex items-center">
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

export default NewCourse;

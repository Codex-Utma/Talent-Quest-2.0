import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AxiosInstance } from "../../../config/axios";

import { RegisterType } from "../../../types/register";
import registerSchema from "../../../schemas/register.schema";
import { DepartmentType } from "../../../types/department";
import { UserTypeType } from "../../../types/userType";
import { useNavigate } from "react-router-dom";

export default function RegisterForm({departments, userTypes}: {departments: DepartmentType[], userTypes: UserTypeType[]}) {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: {errors} } = useForm<RegisterType>({
        resolver: zodResolver(registerSchema),
    });

    const onSuccess = async (data: RegisterType) => {
        try {
            const response = await AxiosInstance.post("/user/register", {
                id: data.id,
                name: data.name,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
                departmentId: data.departmentId,
                userTypeId: data.userTypeId,
            });
            alert(response.data.message);
            navigate("/admin");
        } catch (error: any) {
            alert(error.response.data.message);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                    Registro de Nuevo Empleado
                </h2>

                <form onSubmit={handleSubmit(onSuccess)} className="space-y-4">
                    {/* ID de RH */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700  text-left">ID del Personal de RH</label>
                        <input
                            type="text"
                            {...register("id")}
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                        {
                            errors.id && <p className="text-red-500 text-sm">{errors.id.message}</p>
                        }
                    </div>
                    {/* Nombre Completo */}
                    <div className="flex flex-col">
                        <label className="block text-sm font-medium text-gray-700 text-left">Nombres</label>
                        <input
                            type="text"
                            {...register("name")}
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Ingrese nombre"
                            required
                        />
                        {
                            errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>
                        }
                    </div>

                     {/* Apellidos */}
                     <div className="flex flex-col">
                        <label className="block text-sm font-medium text-gray-700 text-left">Apellidos</label>
                        <input
                            type="text"
                            {...register("lastName")}
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Ingrese apellidos"
                            required
                        />
                        {
                            errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                        }
                    </div>




                    {/* Correo Electrónico */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 text-left">Correo Electrónico</label>
                        <input
                            type="email"
                            {...register("email")}
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="nombre@empresa.com"
                            required
                        />
                        {
                            errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>
                        }
                    </div>

                    {/* Contraseña */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 text-left">Contraseña</label>
                        <input
                            type="password"
                            {...register("password")}
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                        {
                            errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>
                        }
                    </div>

                    {/* Confirmar Contraseña */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700  text-left">Confirmar Contraseña</label>
                        <input
                            type="password"
                            {...register("confirmPassword")}
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                        {
                            errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                        }
                    </div>

                    {/* Departamento */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700  text-left">Departamento</label>
                        <select
                            {...register("departmentId", {
                                setValueAs: (value: string) => Number(value),
                            })}
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="">Seleccione un Departamento</option>
                            {
                                departments.map(department => (
                                    <option key={department.id} value={department.id}>{department.name} - {department.description}</option>
                                ))
                            }
                        </select>
                        {
                            errors.departmentId && <p className="text-red-500 text-sm">{errors.departmentId.message}</p>
                        }
                    </div>

                    {/* Tipo de ususario */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700  text-left">Tipo de Usuario</label>
                        <select
                            {...register("userTypeId", {
                                setValueAs: (value: string) => Number(value),
                            })}
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="">Seleccione un Tipo de Usuario</option>
                            {
                                userTypes.map(userType => (
                                    <option key={userType.id} value={userType.id}>{userType.name} - {userType.description}</option>
                                ))
                            }
                        </select>
                        {
                            errors.userTypeId && <p className="text-red-500 text-sm">{errors.userTypeId.message}</p>
                        }
                    </div>



                    {/* Botones */}
                    <div className="flex justify-between space-x-4">
                        <button
                            type="button"
                            className="w-full py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 hover:cursor-pointer"
                            onClick={() => window.history.back()}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:cursor-pointer"
                        >
                            Registrar Empleado
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

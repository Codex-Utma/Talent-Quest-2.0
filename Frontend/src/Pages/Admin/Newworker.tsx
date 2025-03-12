import { useState } from "react";

const Newworker = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        password: "",
        confirmPassword: "",
        curso: "",
        rhId: "",
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                    Registro de Nuevo Empleado
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* ID de RH */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700  text-left">ID del Personal de RH</label>
                        <input
                            type="text"
                            name="rhId"
                            value={formData.rhId}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    {/* Nombre Completo */}
                    <div className="flex flex-col">
                        <label className="block text-sm font-medium text-gray-700 text-left">Nombres</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Ingrese nombre"
                            required
                        />
                    </div>

                     {/* Apellidos */}
                     <div className="flex flex-col">
                        <label className="block text-sm font-medium text-gray-700 text-left">Apellidos</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Ingrese apellidos"
                            required
                        />
                    </div>

                    


                    {/* Correo Electrónico */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 text-left">Correo Electrónico</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="nombre@empresa.com"
                            required
                        />
                    </div>

                    {/* Contraseña */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 text-left">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Confirmar Contraseña */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700  text-left">Confirmar Contraseña</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Departamento */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700  text-left">Departamento</label>
                        <select
                            name="curso"
                            value={formData.curso}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="">Seleccione un Departamento</option>
                            <option value="curso1">Recursos Humanos</option>
                            <option value="curso2">Automatización</option>
                            <option value="curso3">Desarrollo</option>
                            <option value="curso3">Inteligencia Artificial</option>

                            
                        </select>
                    </div>

                    {/* Tipo de ususario */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700  text-left">Tipo de Usuario</label>
                        <select
                            name="curso"
                            value={formData.curso}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="">Seleccione un Tipo de Usuario</option>
                            <option value="curso1">Administrador</option>
                            <option value="curso2">Empleado</option>
                        </select>
                    </div>

                    

                    {/* Botones */}
                    <div className="flex justify-between space-x-4">
                        <button
                            type="button"
                            className="w-full py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Registrar Empleado
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newworker;

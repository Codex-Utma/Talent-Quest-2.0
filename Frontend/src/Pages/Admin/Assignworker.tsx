
import React, { useState } from 'react';

const Newproyect = () => {
    const [formData, setFormData] = useState({ curso: '' });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <div className="flex flex-col p-8 bg-transpart">
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
                <div className="space-y-6">
                    {/* Tipo de ususario */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700  text-left">Proyecto</label>
                        <select
                            name="curso"
                            value={formData.curso}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="">Seleccione un Proyecto</option>
                            <option value="curso1">Desarrollo Web y Aplicaciones Móviles</option>
                            <option value="curso2">Plataforma de Comercio Electrónico</option>
                            <option value="curso3">Sistema de Gestión de Proyectos</option>
                            <option value="curso3">Ciberseguridad y Redes</option>
                            <option value="curso3">Análisis de Datos y Big Data</option>

                        </select>
                    </div>

                    {/*     ID del empleado */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">ID del Empleado</label>
                        <textarea
                            placeholder="Ingrese el ID del Empleado"
                            className="block w-full border border-gray-300 rounded-md p-2"
                        ></textarea>
                    </div>


                   
                {/* Botones de Guardar y Publicar */}
                <div className="flex justify-end space-x-4">

                    <button className="bg-blue-600 text-white rounded-md px-4 py-2">
                        Guardar
                    </button>
                </div>
            </div>
        </div>

    </div>
    );
};

export default Newproyect;
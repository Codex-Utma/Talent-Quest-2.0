import { useState } from 'react';

const Newproyect = () => {
    const [cursoAsociado, setCursoAsociado] = useState('');
    const [cursos, setCursos] = useState([
        'Desarrollo Web Frontend',
        'Desarrollo Web Backend',
        'Diseño de Interfaces',
        'Marketing Digital',
        'Gestión de Proyectos'
    ]);

    const handleAddCurso = (e: { key: string; }) => {
        if (e.key === 'Enter' && cursoAsociado.trim()) {
            setCursos([...cursos, cursoAsociado.trim()]);
            setCursoAsociado('');
        }
    };

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
                <h1 className="text-2xl font-bold mb-6">Nuevo Proyecto</h1>
                <div className="space-y-6">
                    {/* Título del Recurso */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre del Proyecto
                        </label>
                        <input
                            type="text"
                            placeholder="Ingrese el nombre del proyecto"
                            className="block w-full border border-gray-300 rounded-md p-2"
                        />
                    </div>

                    {/* Descripción */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Descripción
                        </label>
                        <textarea
                            placeholder="Describa el proyecto"
                            className="block w-full border border-gray-300 rounded-md p-2"
                        ></textarea>
                    </div>

                    {/* Curso asociados */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Cursos Asociados
                        </label>
                        <textarea
                            placeholder="Describa el curso asociado y presione Enter"
                            className="block w-full border border-gray-300 rounded-md p-2"
                            value={cursoAsociado}
                            onChange={(e) => setCursoAsociado(e.target.value)}
                            onKeyDown={handleAddCurso}
                        />
                    </div>

                    {/* Categorías de Aprendizaje */}
                    <div>
                        <h2 className="text-sm font-medium text-gray-700 mb-2">
                            Cursos
                        </h2>
                        {cursos.map((curso, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" />
                                <label className="text-sm">{curso}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botones de Guardar y Publicar */}
                <div className="flex justify-end space-x-4">
                    <button className="bg-blue-600 text-white rounded-md px-4 py-2">
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newproyect;

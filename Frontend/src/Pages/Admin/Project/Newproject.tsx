import { useState } from 'react';

const cursosDisponibles = [
    "Aplicaciones Móviles",
    "Plataforma de Comercio Electrónico",
    "Sistema de Gestión de Proyectos",
    "Análisis de Datos y Big Data",
    "Inteligencia Artificial y Machine Learning",
    "Diseño de Interfaces y Experiencia de Usuario",
    "Marketing Digital y Publicidad Online",
    "Desarrollo de Videojuegos",
    "Desarrollo de Aplicaciones Móviles",
    "Desarrollo Web",
    "Desarrollo de Software",
];

const CursoAsociado = () => {
    const [formData, setFormData] = useState({ curso: "" });
    const [cursosSeleccionados, setCursosSeleccionados] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const filteredCursos = formData.curso
        ? cursosDisponibles.filter((curso) =>
            curso.toLowerCase().includes(formData.curso.toLowerCase())
        )
        : [];

    const handleSelectCurso = (curso: string) => {
        if (!cursosSeleccionados.includes(curso)) {
            setCursosSeleccionados([...cursosSeleccionados, curso]);
        }
        setFormData({ ...formData, curso: "" }); // limpiar el campo de entrada
    };
}

const NewProject = () => {
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
                    {/* Nombre del Proyecto */}
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

                    {/* Cursos Asociados */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Cursos Asociados
                        </label>
                        <input
                            type="text"
                            name="curso"
                            placeholder="Ingrese el nombre del curso"
                            className="block w-full border border-gray-300 rounded-md p-2"
                            value={formData.curso}
                            onChange={handleChange}
                        />
                        {filteredCursos.length > 0 && (
                            <div className="border border-gray-300 rounded-md mt-2 max-h-40 overflow-y-auto bg-white shadow-md">
                                {filteredCursos.map((curso, index) => (
                                    <div
                                        key={index}
                                        className="p-2 cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleSelectCurso(curso)}
                                    >
                                        {curso}
                                    </div>
                                ))}
                            </div>
                        )}
                        {formData.curso && (
                            <div className="mt-2">
                                <p className="text-sm font-medium text-gray-700">Curso Seleccionado:</p>
                                <p className="text-gray-800">{formData.curso}</p>
                            </div>
                        )}
                    </div>

                    {/* Lista de Cursos Seleccionados */}
                    <div>
                        <h2 className="text-sm font-medium text-gray-700 mb-2">
                            Cursos Seleccionados
                        </h2>
                        {cursosSeleccionados.map((curso, index) => (
                            <div key={index} className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" checked readOnly />
                                <label className="text-sm">{curso}</label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botón de Guardar */}
                <div className="flex justify-end space-x-4">
                    <button className="bg-blue-600 text-white rounded-md px-4 py-2">
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewProject;

import React from 'react';

const Cursos = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">CURSOS</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center text-sm text-gray-700 hover:text-blue-600">
                <span className="mr-2">✔️</span>
                Módulo 1: Introducción
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center text-sm text-gray-700 hover:text-blue-600">
                <span className="mr-2">✔️</span>
                Comenzando el curso
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center text-sm text-gray-700 hover:text-blue-600">
                <span className="mr-2">✔️</span>
                Configuración Inicial
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center text-sm text-gray-700 hover:text-blue-600">
                <span className="mr-2">✔️</span>
                Conceptos básicos
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center text-sm text-gray-700 hover:text-blue-600">
                <span className="mr-2">✔️</span>
                Módulo 2: Fundamentos
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center text-sm text-gray-700 hover:text-blue-600">
                <span className="mr-2">✔️</span>
                Estructura del proyecto
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center text-sm text-gray-700 hover:text-blue-600">
                <span className="mr-2">✔️</span>
                Componentes principales
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-4">Conceptos Básicos del Desarrollo Web</h1>

        {/* Course Content */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <img src="URL_DE_LA_IMAGEN" alt="Conceptos básicos" className="mb-4" />
          <p className="text-gray-700 mb-4">
            En esta lección, exploraremos los fundamentos esenciales del desarrollo web moderno. Aprenderás sobre HTML, CSS y JavaScript, las tres piezas fundamentales para crear sitios web interactivos y responsivos.
          </p>
          <div className="relative aspect-w-16 aspect-h-9 mb-4">
            {/* Reemplaza con tu reproductor de video */}
            <iframe
              src="URL_DEL_VIDEO"
              title="Video del curso"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
          <h2 className="text-lg font-semibold mb-2">Lectura Complementaria</h2>
          <p className="text-gray-700 mb-4">
            El desarrollo web ha evolucionado significativamente en los últimos años. Las tecnologías modernas nos permiten crear experiencias web más ricas e interactivas que nunca. En esta lectura, profundizaremos en las mejores prácticas y patrones de diseño actuales.
          </p>
          <h2 className="text-lg font-semibold mb-2">Actividad Práctica</h2>
          <p className="text-gray-700 mb-4">
            Crea una página web simple utilizando HTML y CSS que incluya:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Un encabezado con título</li>
            <li>Una imagen con título</li>
            <li>Un párrafo de texto</li>
            <li>Un botón de acción</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Entregar Actividad
          </button>
        </div>

        {/* Course Progress and Suggestions */}
        <div className="flex justify-between">
          <div className="bg-white rounded-lg shadow-md p-6 w-64">
            <h2 className="text-lg font-semibold mb-2">Progreso del Curso</h2>
            <div className="flex justify-between items-center mb-2">
              <span>Completado</span>
              <span>25%</span>
            </div>
            {/* Barra de progreso */}
            <div className="bg-gray-200 rounded-full h-2.5 mb-4">
              <div className="bg-blue-600 h-2.5 rounded-full w-1/4"></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 w-64">
            <h2 className="text-lg font-semibold mb-4">Cursos Sugeridos</h2>
            <div className="grid grid-cols-1 gap-4">
              {/* Sugerencia de curso 1 */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <img src="URL_IMAGEN_JS" alt="JavaScript Avanzado" className="mb-2" />
                <h3 className="text-sm font-semibold">JavaScript Avanzado</h3>
              </div>
              {/* Sugerencia de curso 2 */}
              <div className="bg-gray-100 p-4 rounded-lg">
                <img src="URL_IMAGEN_REACT" alt="React Fundamentals" className="mb-2" />
                <h3 className="text-sm font-semibold">React Fundamentals</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cursos;
const EmployeeProject = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (Asumiendo que tienes una barra de navegación similar) */}

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Desarrollo de Sistema de Gestión Empresarial</h1>
        </div>

        <p className="text-gray-600 mb-6">Código del proyecto: PRJ-2024-001</p>

        <div className="grid grid-cols-3 gap-8">
          {/* Equipo del Proyecto */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Equipo del Proyecto</h2>
            <div className="flex items-center mb-4">
              <img
                src="URL_AVATAR_CARLOS" // Reemplaza con la URL del avatar de Carlos
                alt="Carlos Rodriguez"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">Carlos Rodriguez</p>
                <p className="text-sm text-gray-600">Director del Proyecto</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="URL_AVATAR_ANA" // Reemplaza con la URL del avatar de Ana
                alt="Ana María Garcia"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">Ana María Garcia</p>
                <p className="text-sm text-gray-600">Desarrolladora Senior</p>
              </div>
            </div>
          </div>

          {/* Cursos Requeridos */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Cursos Requeridos</h2>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span>
                <p className="font-semibold">Gestión Ágil de Proyectos</p>
              </div>
              <p className="text-sm text-gray-600">Obligatorio</p>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-yellow-500 mr-2">⚠️</span>
                <p className="font-semibold">Desarrollo Full Stack</p>
              </div>
              <p className="text-sm text-gray-600">Recomendado</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✔️</span>
                <p className="font-semibold">Base de Datos Avanzadas</p>
              </div>
              <p className="text-sm text-gray-600">Obligatorio</p>
            </div>
          </div>

          {/* Documentación */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Documentación</h2>
            <div className="flex items-center mb-4">
              <img
                src="URL_PDF_ICON" // Reemplaza con la URL del icono de PDF
                alt="PDF Icon"
                className="w-6 h-6 mr-2"
              />
              <div>
                <p className="font-semibold">Especificaciones_Tecnicas.pdf</p>
                <p className="text-sm text-gray-600">Actualizado hace 2 días</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="URL_VIDEO_ICON" // Reemplaza con la URL del icono de video
                alt="Video Icon"
                className="w-6 h-6 mr-2"
              />
              <div>
                <p className="font-semibold">Presentacion_Inicial.mp4</p>
                <p className="text-sm text-gray-600">Subido el 15 de enero</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmployeeProject;

import '@fortawesome/fontawesome-free/css/all.min.css';

const Module = () => {
    return (
      <div className="bg-gray-50 min-h-screen">
        <nav className="bg-white shadow">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                  alt="Logo"
                />
              </div>
              <div className="flex items-center">
                <div className="relative">
                  <button className="flex items-center space-x-3">
                    <img
                      className="h-9 w-9 rounded-full object-cover"
                      src="https://creatie.ai/ai/api/search-image?query=A professional..."
                      alt="Usuario"
                    />
                    <span className="text-gray-700 font-medium">Admin</span>
                    <i className="fas fa-chevron-down text-gray-400 text-sm"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 text-left mb-2">Módulo</h1>
          <p className="text-gray-500 mb-8 text-left">
            Lista de todos los módulos disponibles en el sistema.
          </p>
  
          {/* Input de búsqueda */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar módulos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-custom focus:border-custom"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
  
          {/* Tabla de módulos */}
          <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nombre del Módulo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Descripción
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      Desarrollo Web Frontend
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">
                      Aprende HTML, CSS y JavaScript desde cero hasta nivel avanzado
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-3">
                      <button className="text-custom hover:text-custom-600 !rounded-button">
                        <i className="fas fa-eye"></i>
                      </button>
                      <button className="text-green-600 hover:text-green-700 !rounded-button">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="text-red-600 hover:text-red-700 !rounded-button">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Repite para otros módulos */}
              </tbody>
            </table>
          </div>
  
          {/* Botón para agregar módulo */}
          <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg flex items-center space-x-2">
              <i className="fas fa-plus"></i>
              <span>Agregar Nuevo Módulo</span>
            </button>
          </div>
        </main>
      </div>
    );
  };
  
  export default Module;
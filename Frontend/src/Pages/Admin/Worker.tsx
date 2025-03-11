const Worker = () => {
    return (
        <div className="flex flex-col gap-2 p-8 bg-transparent">
            <header className="flex items-center justify-between p-4 bg-gray-200 text-black">
                <div className="flex items-center">
                    <img
                        src="URL_DE_LA_FOTO_DEL_ADMINISTRADOR"
                        alt="Administrador"
                        className="w-12 h-12 rounded-full mr-4"
                    />
                    <h1 className="text-xl font-bold">Nombre del Administrador</h1>
                </div>
                <nav>{/* Enlaces de navegación */}</nav>
            </header>

            <div className="flex gap-4">
                {/* Sección de búsqueda y filtros */}
                <div className="flex flex-col w-2/3 shadow-md rounded-lg p-6 bg-white">
                    <h2 className="text-lg font-medium">Búsqueda y Filtros</h2>
                    <div className="flex items-center my-4">
                        <label className="text-gray-500 text-base">Nombre o ID:</label>
                        <input
                            type="text"
                            className="ml-2 p-2 border border-gray-300 rounded"
                            placeholder="Buscar Usuario"
                        />
                        <button className="ml-4 bg-blue-500 text-white rounded-lg px-4 py-2">
                            Nuevo Trabajador
                        </button>
                    </div>
                </div>


                {/* Sección de resumen */}
                <div className="flex flex-col w-1/3 shadow-md rounded-lg p-6 bg-white">
                    <h2 className="text-lg font-medium">Resumen</h2>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Total Usuarios:</span>
                        <span className="text-black">156</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Cursos Asignados:</span>
                        <span className="text-black">89</span>
                    </div>
                </div>
            </div>

            {/* Lista de Usuarios */}
            <div className="shadow-md rounded-lg overflow-hidden bg-white">
                <div className="flex items-center p-4 border-b border-gray-300">
                    <h2 className="text-lg font-medium">Lista de Usuarios</h2>
                </div>
                <div className="bg-gray-200 flex">
                    <div className="w-1/2 p-3">Nombre</div>
                    <div className="w-1/4 p-3">ID</div>
                    <div className="w-1/4 p-3">Departamento</div>
                </div>
                <div className="flex justify-between p-4 border-t border-gray-300">
                    <div className="w-1/2">María González</div>
                    <div className="w-1/4">USR001</div>
                    <div className="w-1/4">Ventas</div>
                </div>
                <div className="flex justify-between p-4 border-t border-gray-300">
                    <div className="w-1/2">Carlos Rodríguez</div>
                    <div className="w-1/4">USR002</div>
                    <div className="w-1/4">Marketing</div>
                </div>
            </div>
        </div>
    );
};

export default Worker;

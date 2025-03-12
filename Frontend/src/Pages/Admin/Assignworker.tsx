import React, { useState } from "react";

const employees = [
    "2201", "2202", "2203", "22035", "22036", "2204", "2301", "2302", "2303",
    "2304", "2305", "2306", "2307", "2308", "2309", "2310", "2311", "2312", "2313",
    "2314", "2315", "2316", "2317", "2318", "2319", "2320", "2321", "2322", "2323",
    "2324", "2325", "2326", "2327", "2328", "2329", "2330", "2331", "2332", "2333",
    "2334", "2335", "2336", "2337", "2338", "2339", "2340", "2341", "2342", "2343",
    "2344", "2345", "2346", "2347", "2348", "2349", "2350", "2351", "2352", "2353",
    "2354", "2355", "2356", "2357", "2358", "2359", "2360", "2361", "2362", "2363",
    "2364", "2365", "2366", "2367", "2368", "2369", "2370", "2371", "2372", "2373",
    "2374", "2375", "2376", "2377", "2378", "2379", "2380", "2381", "2382", "2383",
    "2384", "2385", "2386", "2387", "2388", "2389", "2390", "2391", "2392", "2393",
    "2394", "2395", "2396", "2397", "2398", "2399", "2400", "2401", "2402", "2403",
    "2404", "2405", "2406", "2407", "2408", "2409", "2410", "2411", "2412", "2413",
    "2414", "2415", "2416", "2417", "2418", "2419", "2420", "2421", "2422", "2423",
    "2424", "2425", "2426", "2427", "2428", "2429", "2430", "2431",
];

const projects = [
    "Aplicaciones Móviles",
    "Plataforma de Comercio Electrónico",
    "Sistema de Gestión de Proyectos",
    "Ciberseguridad y Redes",
    "Análisis de Datos y Big Data",
    "Inteligencia Artificial y Machine Learning",
    "Diseño de Interfaces y Experiencia de Usuario",
    "Marketing Digital y Publicidad Online",
    "Desarrollo de Videojuegos",
    "Desarrollo de Aplicaciones Móviles",
    "Desarrollo Web",
    "Desarrollo de Software",

];

const Assignworker = () => {
    const [formData, setFormData] = useState({ curso: "", employeeId: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const filteredEmployees = formData.employeeId
        ? employees.filter((id) => id.includes(formData.employeeId))
        : [];

    const filteredProjects = formData.curso
        ? projects.filter((project) =>
            project.toLowerCase().includes(formData.curso.toLowerCase())
        )
        : [];

    const handleSelectEmployee = (id: string) => {
        setFormData({ ...formData, employeeId: id });
    };

    const handleSelectProject = (project: string) => {
        setFormData({ ...formData, curso: project });
    };

    return (
        <div className="flex flex-col p-8 bg-transparent">
            <div className="py-10 space-y-6">
                {/* Proyecto */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Proyecto
                    </label>
                    <input
                        type="text"
                        name="curso"
                        placeholder="Ingrese el nombre del proyecto"
                        className="w-full border border-gray-300 p-2 rounded-md"
                        value={formData.curso}
                        onChange={handleChange}
                    />
                    {filteredProjects.length > 0 && (
                        <div className="border border-gray-300 rounded-md mt-2 max-h-40 overflow-y-auto bg-white shadow-md">
                            {filteredProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className="p-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSelectProject(project)}
                                >
                                    {project}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* ID del empleado */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        ID del Empleado
                    </label>
                    <input
                        type="text"
                        name="employeeId"
                        placeholder="Ingrese el ID del Empleado"
                        className="w-full border border-gray-300 p-2 rounded-md"
                        value={formData.employeeId}
                        onChange={handleChange}
                    />
                    {filteredEmployees.length > 0 && (
                        <div className="border border-gray-300 rounded-md mt-2 max-h-40 overflow-y-auto bg-white shadow-md">
                            {filteredEmployees.map((id, index) => (
                                <div
                                    key={index}
                                    className="p-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSelectEmployee(id)}
                                >
                                    {id}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Botones */}
                <div className="flex justify-end space-x-4">
                    <button className="bg-blue-600 text-white rounded-md px-4 py-2">
                        Asignar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Assignworker;

import React from 'react';
import * as echarts from 'echarts';

const AdministratorPage: React.FC = () => {
    React.useEffect(() => {
        // Department Progress Chart
        const departmentChart = echarts.init(document.getElementById('departmentChart') as HTMLElement);
        departmentChart.setOption({
            animation: false,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['Ventas', 'Marketing', 'RR.HH.', 'Operaciones', 'TI']
            },
            series: [
                {
                    name: 'Progreso',
                    type: 'bar',
                    data: [85, 75, 65, 55, 90],
                    itemStyle: {
                        color: '#1B9AF5'
                    }
                }
            ]
        });

        // Course Completion Chart
        const completionChart = echarts.init(document.getElementById('completionChart') as HTMLElement);
        completionChart.setOption({
            animation: false,
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    name: 'Estado de Cursos',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 48, name: 'Completados' },
                        { value: 32, name: 'En Progreso' },
                        { value: 20, name: 'No Iniciados' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });

        // Responsive charts
        window.addEventListener('resize', function () {
            departmentChart.resize();
            completionChart.resize();
        });
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg fixed h-full">
               
                <nav className="mt-6">
                    <a href="#" className="flex items-center px-6 py-3 text-custom bg-blue-50">
                        <i className="fas fa-chart-line w-5 h-5 mr-3"></i>
                        <span>Dashboard</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <i className="fas fa-users w-5 h-5 mr-3"></i>
                        <span>Trabajadores</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <i className="fas fa-graduation-cap w-5 h-5 mr-3"></i>
                        <span>Cursos</span>
                    </a>
                    <a href="#" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50">
                        <i className="fas fa-chart-bar w-5 h-5 mr-3"></i>
                        <span>Proyectos</span>
                    </a>
                </nav>
            </aside>

            <div className="flex-1 ml-64">

                {/* Top Navigation */}
                {/* Main Content */}
                <main className="max-w-8xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* Quick Actions */}
                    <div className="mb-8">
                        <div className="flex space-x-4">
                        <button className="bg-blue-600 text-white rounded-md px-4 py-2">
                        <i className="fas fa-user-plus mr-2"></i>
                                Nuevo Trabajador
                            </button>
                            <button className="bg-blue-600 text-white rounded-md px-4 py-2">
                            <i className="fas fa-user-plus mr-2"></i>
                                Crear Proyecto
                            </button>
                            <button className="bg-blue-600 text-white rounded-md px-4 py-2">
                            <i className="fas fa-file-alt mr-2"></i>
                                Asignar Trabajador
                            </button>
                        </div>
                    </div>
                </main>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { icon: "fas fa-users", label: "Total Trabajadores", value: "248" },
                        { icon: "fas fa-graduation-cap", label: "Cursos Activos", value: "36" },
                        { icon: "fas fa-chart-line", label: "Tasa de Finalización", value: "78%" },

                    ].map((stat, index) => (
                        <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-5 flex items-center">
                                <div className="flex-shrink-0">
                                    <i className={`${stat.icon} text-custom text-3xl`}></i>
                                </div>
                                <div className="ml-5 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">{stat.label}</dt>
                                        <dd className="text-lg font-semibold text-gray-900">{stat.value}</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Charts */}
                
                <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
    {[
        { title: "Progreso por Departamento", id: "departmentChart" },
        { title: "Completación de Cursos", id: "completionChart" },
    ].map((chart, index) => (
        <div key={index} className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">{chart.title}</h3>
            {chart.id === "departmentChart" && (
                <div className="mb-4">
                    <label htmlFor="filterDepartment" className="block text-sm font-medium text-gray-700">
                        Filtrar Departamento
                    </label>
                    <input
                        type="text"
                        id="filterDepartment"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="Ingrese departamento"
                    />
                </div>
            )}
            {chart.id === "completionChart" && (
                <div className="mb-4">
                    <label htmlFor="filterCompletion" className="block text-sm font-medium text-gray-700">
                        Filtrar Completación
                    </label>
                    <input
                        type="text"
                        id="filterCompletion"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="Ingrese completación"
                    />
                </div>
            )}
            <div id={chart.id} style={{ height: "300px" }}></div>
        </div>
    ))}
</div>


                {/* Recent Activity */}
                <div className="mt-8">
                    <div className="bg-white shadow rounded-lg">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">Trabajadores en Pull</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {["Nombre", "Perfil", "Departamento", "Acciones"].map((header) => (
                                            <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {[
                                        {
                                            name: "Ana García",
                                            dept: "Recursos Humanos",
                                            profile: "Becario",
                                            img: "https://thumbs.dreamstime.com/b/icono-ejecutivo-joven-del-perfil-de-la-mujer-81933530.jpg",
                                        },
                                        {
                                            name: "Carlos Rodríguez",
                                            dept: "Ventas",
                                            profile: "Junior",
                                            img: "https://cdn-icons-png.flaticon.com/512/5324/5324000.png",
                                        },
                                        {
                                            name: "María López",
                                            dept: "Marketing",
                                            profile: "Senior",
                                            img: "https://cdn-icons-png.flaticon.com/512/3721/3721287.png",
                                        },
                                    ].map((activity, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <img className="h-10 w-10 rounded-full" src={activity.img} alt="" />
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{activity.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{activity.profile}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{activity.dept}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button className="text-blue-600 hover:underline">Ver Kardex</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default AdministratorPage;
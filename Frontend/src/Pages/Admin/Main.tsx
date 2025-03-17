import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import { AxiosInstance } from '../../config/axios';
import { AdminDashboardType } from '../../types/adminDashboard';
import CustomShortcut from '../../components/Admin/Main/CustomShortcut';
import CustomTargetData from '../../components/Admin/Main/CustomTargetData';
import CustomTable from '../../components/Admin/Main/CustomTable';

const Shortcuts = [
    { title: "Nuevo trabajador", icon: "fas fa-user-plus", to: "/admin/register" },
    { title: "Nuevo proyecto", icon: "fas fa-user-plus", to: "/admin/project/newProject" },
    { title: "Asignar trabajador", icon: "fas fa-file-alt", to: "/admin/project/assignWorker" }
];

const AdministratorPage: React.FC = () => {

    const [dashboardData, setDashboardData] = useState<AdminDashboardType | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AxiosInstance.get('/admin');
                setDashboardData(response.data.data);
            } catch (error: any) {
                alert(error.response?.data?.message || "Error al cargar los datos");
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (!dashboardData) return;

        // Inicializar la gráfica de completación de cursos
        const completionChart = echarts.init(document.getElementById('completionChart') as HTMLElement);
        completionChart.setOption({
            animation: false,
            tooltip: { trigger: 'item' },
            legend: { orient: 'vertical', left: 'left' },
            series: [
                {
                    name: 'Estado de Cursos',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: dashboardData.chartData.totalCoursesFinished, name: 'Completados' },
                        { value: dashboardData.chartData.totalCoursesInProgress, name: 'En Progreso' },
                        { value: dashboardData.chartData.totalCoursesNotStarted, name: 'No Iniciados' }
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
        window.addEventListener('resize', () => completionChart.resize());

        return () => window.removeEventListener('resize', () => completionChart.resize());
    }, [dashboardData]);

    return (
        <div className="bg-gray-50 min-h-screen flex">
            <div className="flex-1">
                <main className="max-w-8xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="mb-8 flex space-x-4">
                        {Shortcuts.map((shortcut, index) => (
                            <CustomShortcut key={index} title={shortcut.title} icon={shortcut.icon} to={shortcut.to} />
                        ))}
                    </div>
                </main>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {dashboardData && [
                        { icon: "fas fa-users", label: "Total Trabajadores", value: dashboardData.totalWorkers },
                        { icon: "fas fa-graduation-cap", label: "Cursos Activos", value: dashboardData.totalCourses },
                        { icon: "fas fa-chart-line", label: "Tasa de Finalización", value: `${dashboardData.percentageCoursesFinished}%` }
                    ].map((stat, index) => (
                        <CustomTargetData key={index} stat={stat} />
                    ))}
                </div>

                <div className="mt-8">
                    <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Estadísticas de Cursos</h3>
                        <div id="completionChart" style={{ height: "300px" }}></div>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="bg-white shadow rounded-lg">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">Trabajadores en Pull</h3>
                        </div>
                        <div className="overflow-x-auto">
                            {
                                dashboardData?.availableEmployees && (
                                    <CustomTable availableEmployees={dashboardData.availableEmployees} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdministratorPage;

import { FC, useEffect, useState } from "react";
import { CertificationType, InsigniaType, KardexType, ProjectType, UserType } from "../../../types/kardex";
import { AxiosInstance } from "../../../config/axios";
import { useParams } from "react-router-dom";

const KardexUsers: FC = () => {

    const { employeeId } = useParams();

    const [insignias, setInsignias] = useState<InsigniaType[]>([]);
    const [projects, setProjects] = useState<ProjectType[]>([]);
    const [certifications, setCertifications] = useState<CertificationType[]>([]);
    const [currentUser, setCurrentUser] = useState<UserType>({} as UserType);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await AxiosInstance.get(`/admin/kardex/${employeeId}`);
                const data: KardexType = response.data.data;
                setInsignias(data.insignias);
                setProjects(data.projects);
                setCertifications(data.certifications);
                setCurrentUser(data.currentUser);
            } catch (error: any) {
                alert(error.response.data.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [employeeId]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-4">
                {/* User Information Section */}
                <div className="bg-white rounded-lg shadow p-6 mb-4">
                    <div className="flex items-center">
                        <div>
                            <h2 className="text-xl font-semibold">{currentUser.name} {currentUser.lastName}</h2>
                            <p className="text-gray-600">
                                <span className="mr-2">{currentUser.id}</span>
                                <a href={`mailto:${currentUser.email}`} className="text-blue-500">
                                    {currentUser.email}
                                </a>
                            </p>
                            <p className="text-gray-600">{currentUser.UserType.name} - {currentUser.Department.name}</p>
                        </div>
                        <div className="ml-auto flex items-center">
                            {
                                insignias.map(insignia => (
                                    <span key={insignia.Insignia.id} className="bg-blue-500 text-white py-1 px-2 rounded mr-2">{insignia.Insignia.name}</span>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* Certifications Table */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-lg font-semibold mb-4">Certificaciones y Cursos</h2>

                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left py-2">Certificación</th>
                                <th className="text-left py-2">Descripción</th>
                                <th className="text-left py-2">Fecha Obtención</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                certifications.map(cert => (
                                    <tr key={cert.Certification.id} className="border-b">
                                        <td className="py-2">{cert.Certification.name}</td>
                                        <td className="py-2">{cert.Certification.description}</td>
                                        <td className="py-2">{cert.Certification.createdAt.split("T")[0]}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                {/* Projects Section */}
                <div className="bg-white rounded-lg shadow p-6 mt-6">
                    <h2 className="text-lg font-semibold mb-4">Proyectos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            projects.map(project => (
                                <div key={project.Project.id} className="bg-gray-50 rounded-lg shadow p-4">
                                    <h3 className="text-xl font-semibold">{project.Project.name}</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default KardexUsers;

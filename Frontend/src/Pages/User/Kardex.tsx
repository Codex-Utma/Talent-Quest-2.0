import { FC, useEffect, useState } from "react";
import { CertificationType, InsigniaType, KardexType, ProjectType, UserType } from "../../types/kardex";
import { AxiosInstance } from "../../config/axios";
import CertificationTable from "../../components/Employee/Kardex/CertificationTable";
import ProjectKardex from "../../components/Employee/Kardex/ProjectKardex";
import Insignias from "../../components/Employee/Kardex/Insignias";

const Kardex: FC = () => {

  const [insignias, setInsignias] = useState<InsigniaType[]>([]);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [certifications, setCertifications] = useState<CertificationType[]>([]);
  const [currentUser, setCurrentUser] = useState<UserType>({} as UserType);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await AxiosInstance.get("/employee/kardex");
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
  }, []);

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
            <Insignias insignias={insignias} />
          </div>
        </div>

        {/* Certifications Table */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Certificaciones y Cursos</h2>
          <CertificationTable certifications={certifications} />
        </div>

        {/* Projects Section */}
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h2 className="text-lg font-semibold mb-4">Proyectos</h2>
          <ProjectKardex projects={projects} />
        </div>

      </div>
    </div>
  );
};

export default Kardex;


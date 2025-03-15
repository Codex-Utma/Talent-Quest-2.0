import { useEffect, useState } from "react";
import { ResourceResponseType, ExternalResourceType, ResourceFileType } from "../../../types/resource";
import { AxiosInstance } from "../../../config/axios";
import { useParams } from "react-router-dom";
import CustomLinkResource from "./CustomLinkResource";
import CustomFileResource from "./CustomFileResource";
import MarkAsCompleted from "./MarkAsCompleted";

export default function ResourcesFromClass() {
  const { classId } = useParams<{ classId: string }>();

  const [classData, setClassData] = useState<ResourceResponseType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get(`employee/resources/${classId}`);
        setClassData(response.data.data);
      } catch (error: any) {
        alert(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [classId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-gray-700">Cargando recursos...</p>
      </div>
    );
  }

  if (!classData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-red-500">No se encontraron recursos.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900">{classData.name}</h1>
        <p className="text-gray-600 mt-2">{classData.description}</p>

        {/* Recursos Externos */}
        {classData.resources.External && classData.resources.External.length > 0 ? (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-blue-600">Recursos Externos</h2>
            <div className="mt-4 space-y-4">
              {classData.resources.External.map((resource: ExternalResourceType) => (
                <CustomLinkResource key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        ) : null}

        {/* Archivos */}
        {classData.resources.File && classData.resources.File.length > 0 ? (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-green-600">Archivos</h2>
            <div className="mt-4 space-y-4">
              {classData.resources.File.map((file: ResourceFileType) => (
                <CustomFileResource key={file.id} file={file} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
      <MarkAsCompleted />
    </div>
  );
}

import React, { useState, useEffect } from 'react';

interface Certification {
  certification: string;
  date: string;
  level: string;
  status: string;
  certificate: string;
}

const Kardex: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [activeCount, setActiveCount] = useState<number>(0);
  const [assignedCount, setAssignedCount] = useState<number>(0);
  const [inProgressCount, setInProgressCount] = useState<number>(0);

  useEffect(() => {
    // Reemplaza 'TU_API_URL' con la URL de tu API
    fetch('TU_API_URL')
      .then(response => response.json())
      .then(data => {
        setCertifications(data.certifications); // Ajusta según la estructura de tu API
        setActiveCount(data.activeCount);
        setAssignedCount(data.assignedCount);
        setInProgressCount(data.inProgressCount);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow p-6 mb-4">
          <div className="flex items-center">
            <div>
              <h2 className="text-xl font-semibold">Carlos Rodríguez Martínez</h2>
              <p className="text-gray-600">
                <span className="mr-2">BT2024-0123</span>
                <a href="mailto:carlos.rodriguez@empresa.com" className="text-blue-500">
                  carlos.rodriguez@empresa.com
                </a>
              </p>
              <p className="text-gray-600">Desarrollo de Software - Proyecto Aurora</p>
            </div>
            <div className="ml-auto flex items-center">
              <span className="bg-blue-500 text-white py-1 px-2 rounded mr-2">Scrum Master</span>
              <span className="bg-green-500 text-white py-1 px-2 rounded mr-2">AWS Certified</span>
              <span className="bg-purple-500 text-white py-1 px-2 rounded">Top Performer 2023</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Certificaciones y Cursos</h2>
          <div className="flex justify-between mb-4">
            <input type="text" placeholder="Buscar certificación..." className="border rounded p-2" />
            <select className="border rounded p-2">
              <option>Todos los tipos</option>
            </select>
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Certificación</th>
                <th className="text-left py-2">Fecha Obtención</th>
                <th className="text-left py-2">Nivel</th>
                <th className="text-left py-2">Estado</th>
                <th className="text-left py-2">Certificado</th>
              </tr>
            </thead>
            <tbody>
              {certifications.map(cert => (
                <tr key={cert.certification} className="border-b">
                  <td className="py-2">{cert.certification}</td>
                  <td className="py-2">{cert.date}</td>
                  <td className="py-2">{cert.level}</td>
                  <td className="py-2">{cert.status}</td>
                  <td className="py-2">{cert.certificate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold">Certificaciones Activas</h3>
            <p className="text-2xl font-bold">{activeCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold">Asignadas</h3>
            <p className="text-2xl font-bold">{assignedCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold">En Progreso</h3>
            <p className="text-2xl font-bold">{inProgressCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kardex;

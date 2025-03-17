import { useNavigate } from "react-router-dom"
import { AvaliableEmployee } from "../../../types/adminDashboard";

const headers = [
    "Nombre",
    "Departamento",
    "Empleado disponible desde:",
    "Acciones"
]

export default function CustomTable({ availableEmployees }: { availableEmployees: AvaliableEmployee[] }) {

    const navigate = useNavigate();

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {
                        headers.map((header) => (
                            <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {header}
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {availableEmployees.map((employee, index) => (
                    <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{employee.name} {employee.lastName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{employee.Department.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{new Date(employee.updatedAt).toLocaleDateString()}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <button className="text-blue-600 hover:underline"
                                onClick={() => navigate(`/admin/kardex/${employee.id}`)}
                            >Ver Kardex</button>
                        </td>
                    </tr>
                )) || (
                        <tr>
                            <td colSpan={4} className="text-center py-4 text-gray-500">No hay trabajadores disponibles</td>
                        </tr>
                    )}
            </tbody>
        </table>
    )
}
